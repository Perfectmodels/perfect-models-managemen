-- Schéma complet Supabase – Perfect Models Management
-- Ce script crée toutes les tables, index, triggers, fonctions et policies nécessaires

-- 1. Tables principales
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  mot_de_passe text,
  nom text,
  prenom text,
  role text check (role in ('admin', 'mannequin', 'visiteur')) default 'visiteur',
  date_inscription timestamp with time zone default now()
);

create table applications (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  prenom text not null,
  email text not null,
  telephone text,
  age integer,
  taille integer,
  motivation text,
  statut text check (statut in ('en_attente', 'accepte', 'refuse')) default 'en_attente',
  date_candidature timestamp with time zone default now()
);

create table models (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  nom text not null,
  prenom text not null,
  bio text,
  photos text[],
  date_ajout timestamp with time zone default now(),
  date_maj timestamp with time zone default now()
);

create table events (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  description text,
  date_event date,
  image text,
  lien text
);

create table gallery (
  id uuid primary key default gen_random_uuid(),
  type text check (type in ('photo', 'video')) not null,
  url text not null,
  titre text,
  description text,
  date_ajout timestamp with time zone default now()
);

create table testimonials (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  photo text,
  message text not null,
  date timestamp with time zone default now()
);

create table services (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  description text,
  icone text
);

create table legal_pages (
  id uuid primary key default gen_random_uuid(),
  type text check (type in ('cgu', 'politique_confidentialite', 'mentions_legales', 'faq', 'contact')) not null,
  contenu text not null,
  date_maj timestamp with time zone default now()
);

-- 2. Tables d'audit
create table applications_audit (
  id uuid,
  action text,
  date_action timestamp with time zone default now(),
  data jsonb
);

-- 3. Index
create index idx_models_user_id on models(user_id);
create index idx_gallery_type on gallery(type);

-- 4. Fonctions et triggers
-- a) Trigger MAJ automatique de la date_maj sur models
create or replace function update_date_maj()
returns trigger as $$
begin
  new.date_maj = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_update_date_maj on models;
create trigger trg_update_date_maj
before update on models
for each row
execute procedure update_date_maj();

-- b) Audit des candidatures
create or replace function log_applications_changes()
returns trigger as $$
begin
  insert into applications_audit(id, action, data)
  values (new.id, TG_OP, row_to_json(new));
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_applications_audit on applications;
create trigger trg_applications_audit
after insert or update on applications
for each row
execute procedure log_applications_changes();

-- 5. Row Level Security (RLS) et policies
-- a) Galerie, témoignages, services, actualités, pages légales : lecture publique
alter table gallery enable row level security;
create policy "Public read gallery" on gallery for select using (true);

alter table testimonials enable row level security;
create policy "Public read testimonials" on testimonials for select using (true);

alter table services enable row level security;
create policy "Public read services" on services for select using (true);

alter table events enable row level security;
create policy "Public read events" on events for select using (true);

alter table legal_pages enable row level security;
create policy "Public read legal_pages" on legal_pages for select using (true);

-- b) Candidatures : écriture publique, lecture admin
alter table applications enable row level security;
create policy "Public insert applications" on applications for insert using (true);
create policy "Admin read applications" on applications for select using (auth.role() = 'authenticated');

-- c) Mannequins : lecture publique, écriture admin
alter table models enable row level security;
create policy "Public read models" on models for select using (true);
create policy "Admin update models" on models for update using (auth.role() = 'authenticated');
create policy "Admin delete models" on models for delete using (auth.role() = 'authenticated');

-- d) Utilisateurs : lecture/écriture restreinte à soi-même
alter table users enable row level security;
create policy "Self read users" on users for select using (auth.uid() = id);
create policy "Self update users" on users for update using (auth.uid() = id);

-- e) Admins seuls peuvent modifier/supprimer events/services
create policy "Admin update events" on events for update using (auth.role() = 'authenticated');
create policy "Admin delete events" on events for delete using (auth.role() = 'authenticated');
create policy "Admin update services" on services for update using (auth.role() = 'authenticated');
create policy "Admin delete services" on services for delete using (auth.role() = 'authenticated'); 