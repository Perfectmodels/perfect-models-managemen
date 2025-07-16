-- Schéma SQL pour Perfect Models Management (Supabase)

-- 1. Table Utilisateurs (users)
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  mot_de_passe text,
  nom text,
  prenom text,
  role text check (role in ('admin', 'mannequin', 'visiteur')) default 'visiteur',
  date_inscription timestamp with time zone default now()
);

-- 2. Table Candidatures (applications)
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

-- 3. Table Mannequins (models)
create table models (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  nom text not null,
  prenom text not null,
  bio text,
  photos text[],
  date_ajout timestamp with time zone default now()
);

-- 4. Table Actualités / Événements (events)
create table events (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  description text,
  date_event date,
  image text,
  lien text
);

-- 5. Table Galerie (gallery)
create table gallery (
  id uuid primary key default gen_random_uuid(),
  type text check (type in ('photo', 'video')) not null,
  url text not null,
  titre text,
  description text,
  date_ajout timestamp with time zone default now()
);

-- 6. Table Témoignages (testimonials)
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  photo text,
  message text not null,
  date timestamp with time zone default now()
);

-- 7. Table Services (services)
create table services (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  description text,
  icone text
);

-- 8. Table Pages légales (legal_pages)
create table legal_pages (
  id uuid primary key default gen_random_uuid(),
  type text check (type in ('cgu', 'politique_confidentialite', 'mentions_legales', 'faq', 'contact')) not null,
  contenu text not null,
  date_maj timestamp with time zone default now()
);

-- 9. Policies de sécurité de base

-- Lecture publique pour galerie, témoignages, services, actualités, pages légales
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

-- Candidatures : écriture publique, lecture privée (admin uniquement)
alter table applications enable row level security;
create policy "Public insert applications" on applications for insert using (true);
create policy "Admin read applications" on applications for select using (auth.role() = 'authenticated');

-- Mannequins : lecture publique, écriture admin
alter table models enable row level security;
create policy "Public read models" on models for select using (true);

-- Utilisateurs : lecture/écriture restreinte
alter table users enable row level security;
create policy "Self read users" on users for select using (auth.uid() = id);
create policy "Self update users" on users for update using (auth.uid() = id);

-- 10. Index pour la performance
create index idx_models_user_id on models(user_id);
create index idx_gallery_type on gallery(type); 