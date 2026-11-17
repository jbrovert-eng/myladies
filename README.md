# Myladies Ecquedecques - Site Vitrine & Back-Office d'Administration

Projet web complet (Front-end Vitrine + Back-end REST API + Back-office) conçu pour l'association **Myladies Ecquedecques**, club d'affaires et réseau local de femmes entrepreneures dans le Pas-de-Calais.

---

## 🎨 Identité Visuelle & Direction Artistique

- **Ambiance** : Chic, chaleureuse et rétro cabaret (dorures subtiles, liserés fins, typographies intemporelles).
- **Palette chromatique** :
  - **Crème** : `#F7F3EE` (arrière-plans chauds, cartes douces)
  - **Rouge Bordeaux** : `#7B1E26` (noblesse, boutons et titres phares)
  - **Doré** : `#C59B27` / `#E3BC4C` (reflets, badges d'exclusivité, ornementation)
  - **Bleu Paon** : `#1D6F72` (contrastes raffinés, badges secondaires)
- **Typographies** :
  - **Titres** : `Playfair Display` (serif élégant, esprit cabaret chic)
  - **Corps** : `Plus Jakarta Sans` (sans-serif géométrique, haute lisibilité)

---

## 🏗️ Architecture du Projet

Le projet propose une architecture hybride à la fois autonome (fonctionne directement en ouvrant `index.html`) et connectée à un véritable **Backend Node.js / Express** avec base de données persistante (`data/db.json`).

```
Myladies/
├── index.html              # Site vitrine public d'exception
├── css/
│   └── styles.css          # Styles personnalisés, dorures & animations
├── js/
│   └── main.js             # Annuaire dynamique, filtres, modale, API & formulaires
├── logo/
│   └── logo.png            # Logo officiel de l'association Myladies
├── admin/
│   └── index.html          # Back-Office dédié au bureau de l'association
├── data/
│   └── db.json             # Base de données persistante (membres, candidatures, événements)
├── server.js               # Serveur Backend Express & API REST
├── package.json            # Dépendances et scripts de lancement
└── README.md
```

---

## 🌟 Fonctionnalités du Site Vitrine

1. **Navbar sticky glassmorphism** : Logo officiel, navigation fluide et bouton CTA *"Devenir membre"*.
2. **Hero section cabaret chic** : Badge *"1 Métier = 1 Membre • Exclusivité Garantie"*, promesse, métriques et teaser du Domaine d'Hélant.
3. **Le Réseau & Notre Philosophie** : Les 4 piliers du club d'affaires.
4. **Annuaire interactif (Grille 3 colonnes desktop)** :
   - Recherche en direct
   - Filtres par catégorie (*Bien-être*, *Artisanat*, *Services*, *Commerce*)
   - 8 profils détaillés d'entrepreneuses locales pré-remplis
   - **Modale de détail au clic** avec coordonnées complètes et réseaux sociaux
5. **Événements & Ventes Privées** :
   - **Grande Vente Privée au Domaine d'Hélant à Ecquedecques** avec **compte à rebours dynamique**
   - Calendrier des petits-déjeuners mensuels et ateliers
   - Galerie photos
6. **Recrutement & Exclusivité Métier** :
   - Explication de la règle d'exclusivité
   - Sièges actuellement ouverts (*Avocate*, *Photographe*, *Immobilier*...)
   - **Formulaire interactif relié au Backend** avec vérification de disponibilité

---

## 🔐 Back-Office d'Administration (`/admin`)

Accessible à l'adresse `http://localhost:3000/admin`, il permet au bureau de Myladies de :
- **Consulter les candidatures** reçues en temps réel depuis le site vitrine
- Vérifier automatiquement les alertes d'exclusivité métier
- Changer le statut des demandes en 1 clic (*Nouveau*, *Validé*, *Contacté*, *Refusé*)
- **Ajouter une nouvelle membre** dans l'annuaire via un formulaire dédié
- Retirer une membre ou modifier des informations
- Suivre les statistiques globales du club

---

## 📡 Endpoints de l'API REST (`server.js`)

- `GET /api/members` : Lister les membres (filtres catégorie & recherche)
- `POST /api/members` : Ajouter une nouvelle membre (avec vérif exclusivité)
- `PUT /api/members/:id` : Mettre à jour une membre
- `DELETE /api/members/:id` : Supprimer une membre
- `GET /api/applications` : Lister toutes les candidatures reçues
- `POST /api/applications` : Soumettre une candidature (depuis le formulaire public)
- `PATCH /api/applications/:id` : Modifier le statut d'une candidature
- `DELETE /api/applications/:id` : Supprimer une candidature
- `GET /api/stats` : Statistiques clés pour le tableau de bord

---

## 🚀 Comment lancer le projet avec son Backend

Dans le terminal, exécutez simplement :

```bash
npm start
```

Le serveur démarre immédiatement :
- **Site Vitrine Public** : `http://localhost:3000`
- **Back-Office d'Administration** : `http://localhost:3000/admin`
- **API REST** : `http://localhost:3000/api/members`
