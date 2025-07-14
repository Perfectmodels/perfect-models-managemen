"use server"

import { neon } from "@neondatabase/serverless"
import { redirect } from "next/navigation"

const sql = neon(process.env.DATABASE_URL!)

export async function submitPreInscription(formData: FormData) {
  try {
    const type = formData.get("type") as string
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    // Créer un ID unique
    const id = `pfd2026_${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Préparer les données spécifiques selon le type
    let rawJsonData: any = {
      type,
      phone: formData.get("phone"),
      submission_date: new Date().toISOString(),
      event: "Perfect Fashion Day 2026",
      theme: "L'Art de Se Révéler",
    }

    // Ajouter les champs spécifiques selon le type
    switch (type) {
      case "styliste":
        rawJsonData = {
          ...rawJsonData,
          specialty: formData.get("specialty"),
          collection_description: formData.get("collection_description"),
          experience: formData.get("experience"),
          website: formData.get("website"),
        }
        break

      case "partenaire":
        rawJsonData = {
          ...rawJsonData,
          contact_person: formData.get("contact_person"),
          sector: formData.get("sector"),
          partnership_type: formData.get("partnership_type"),
          partnership_description: formData.get("partnership_description"),
        }
        break

      case "sponsor":
        rawJsonData = {
          ...rawJsonData,
          contact_person: formData.get("contact_person"),
          sponsor_package: formData.get("sponsor_package"),
          budget_range: formData.get("budget_range"),
          sponsoring_objectives: formData.get("sponsoring_objectives"),
        }
        break

      case "mecene":
        rawJsonData = {
          ...rawJsonData,
          mecenate_type: formData.get("mecenate_type"),
          support_area: formData.get("support_area"),
          motivation: formData.get("motivation"),
          contribution: formData.get("contribution"),
        }
        break
    }

    // Insérer dans la base de données
    await sql`
      INSERT INTO neon_auth.users_sync (id, name, email, raw_json, created_at, updated_at)
      VALUES (${id}, ${name}, ${email}, ${JSON.stringify(rawJsonData)}, NOW(), NOW())
    `

    // Rediriger vers une page de confirmation
    redirect(`/perfect-fashion-day/pre-inscription/confirmation?type=${type}&name=${encodeURIComponent(name)}`)
  } catch (error) {
    console.error("Erreur lors de la soumission:", error)
    throw new Error("Erreur lors de la soumission de votre candidature. Veuillez réessayer.")
  }
}
