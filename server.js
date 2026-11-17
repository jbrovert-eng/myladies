/**
 * Myladies Ecquedecques - Serveur Backend Express & API REST
 * Gestion des membres, des candidatures d'exclusivité métier et des événements
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data', 'db.json');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques (site public + logo)
app.use(express.static(__dirname));

// Fonctions d'accès aux données persistantes
function readDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return { members: [], applications: [], events: [] };
    }
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Erreur lecture DB:', err);
    return { members: [], applications: [], events: [] };
  }
}

function writeDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Erreur écriture DB:', err);
    return false;
  }
}

/* ==========================================================================
   ROUTES API - ANNUAIRE DES MEMBRES
   ========================================================================== */

// 1. Lister tous les membres (avec filtre catégorie et recherche optionnels)
app.get('/api/members', (req, res) => {
  const db = readDB();
  let list = db.members || [];

  const { category, search } = req.query;

  if (category && category !== 'Tous') {
    list = list.filter(m => m.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase().trim();
    list = list.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.company.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.city.toLowerCase().includes(q)
    );
  }

  res.json({
    success: true,
    total: list.length,
    members: list
  });
});

// 2. Détail d'une membre par ID
app.get('/api/members/:id', (req, res) => {
  const db = readDB();
  const id = parseInt(req.params.id, 10);
  const member = (db.members || []).find(m => m.id === id);

  if (!member) {
    return res.status(404).json({ success: false, message: 'Membre introuvable' });
  }

  res.json({ success: true, member });
});

// 3. Ajouter une nouvelle membre (avec vérification d'exclusivité métier)
app.post('/api/members', (req, res) => {
  const db = readDB();
  const {
    name, role, company, category, city, image, coverImage,
    badge, shortDesc, fullDesc, services, motto, phone, email, website, instagram, linkedin
  } = req.body;

  if (!name || !role || !company || !category) {
    return res.status(400).json({
      success: false,
      message: 'Les champs Nom, Rôle/Métier, Entreprise et Catégorie sont obligatoires.'
    });
  }

  // Vérification de collision de métier
  const existingRole = (db.members || []).find(
    m => m.role.toLowerCase().trim() === role.toLowerCase().trim()
  );

  const newId = (db.members || []).reduce((max, m) => Math.max(max, m.id || 0), 0) + 1;

  const newMember = {
    id: newId,
    name: name.trim(),
    role: role.trim(),
    company: company.trim(),
    category: category.trim(),
    city: city ? city.trim() : 'Pas-de-Calais',
    image: image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    coverImage: coverImage || 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    badge: badge || 'Membre Officielle',
    shortDesc: shortDesc || '',
    fullDesc: fullDesc || '',
    services: Array.isArray(services) ? services : (services ? [services] : []),
    motto: motto || 'L\'audace et l\'entraide au cœur du club.',
    phone: phone || '',
    email: email || '',
    website: website || '',
    instagram: instagram || '',
    linkedin: linkedin || ''
  };

  db.members = db.members || [];
  db.members.push(newMember);
  writeDB(db);

  res.status(201).json({
    success: true,
    message: 'Nouvelle membre ajoutée avec succès au club !',
    exclusivityWarning: existingRole ? `Attention : un métier similaire (${existingRole.role}) existait déjà.` : null,
    member: newMember
  });
});

// 4. Modifier une membre
app.put('/api/members/:id', (req, res) => {
  const db = readDB();
  const id = parseInt(req.params.id, 10);
  const index = (db.members || []).findIndex(m => m.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Membre introuvable' });
  }

  const current = db.members[index];
  const updated = {
    ...current,
    ...req.body,
    id: current.id // Empêcher la modification de l'ID
  };

  db.members[index] = updated;
  writeDB(db);

  res.json({
    success: true,
    message: 'Fiche membre mise à jour avec succès.',
    member: updated
  });
});

// 5. Supprimer une membre
app.delete('/api/members/:id', (req, res) => {
  const db = readDB();
  const id = parseInt(req.params.id, 10);
  const beforeCount = (db.members || []).length;
  db.members = (db.members || []).filter(m => m.id !== id);

  if (db.members.length === beforeCount) {
    return res.status(404).json({ success: false, message: 'Membre introuvable' });
  }

  writeDB(db);
  res.json({ success: true, message: 'Membre retirée de l\'annuaire avec succès.' });
});

/* ==========================================================================
   ROUTES API - CANDIDATURES / RÉUNIONS DÉCOUVERTE
   ========================================================================== */

// 1. Soumettre une nouvelle candidature depuis le formulaire vitrine
app.post('/api/applications', (req, res) => {
  const db = readDB();
  const { firstName, lastName, companyName, profession, email, phone, city, meetingChoice, message } = req.body;

  if (!firstName || !lastName || !companyName || !profession || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Veuillez remplir tous les champs obligatoires du formulaire.'
    });
  }

  // Vérifier si le secteur est actuellement déjà représenté
  const lowerProf = profession.toLowerCase();
  const conflict = (db.members || []).find(m =>
    m.role.toLowerCase().includes(lowerProf) || lowerProf.includes(m.role.toLowerCase())
  );

  const newId = (db.applications || []).reduce((max, a) => Math.max(max, a.id || 0), 100) + 1;

  const newApp = {
    id: newId,
    createdAt: new Date().toISOString(),
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    companyName: companyName.trim(),
    profession: profession.trim(),
    email: email.trim(),
    phone: phone.trim(),
    city: city ? city.trim() : 'Pas-de-Calais',
    meetingChoice: meetingChoice || 'next-thursday',
    message: message ? message.trim() : '',
    status: 'nouveau', // 'nouveau' | 'étudié' | 'validé' | 'refusé'
    exclusivityAlert: conflict ? `Attention : métier déjà représenté par ${conflict.name} (${conflict.company})` : 'Métier apparemment libre !'
  };

  db.applications = db.applications || [];
  db.applications.unshift(newApp);
  writeDB(db);

  res.status(201).json({
    success: true,
    message: 'Votre demande a bien été enregistrée par le bureau de Myladies Ecquedecques.',
    applicationId: newId,
    isSectorAvailable: !conflict,
    application: newApp
  });
});

// 2. Obtenir la liste de toutes les candidatures (pour le back-office)
app.get('/api/applications', (req, res) => {
  const db = readDB();
  res.json({
    success: true,
    total: (db.applications || []).length,
    applications: db.applications || []
  });
});

// 3. Modifier le statut d'une candidature
app.patch('/api/applications/:id', (req, res) => {
  const db = readDB();
  const id = parseInt(req.params.id, 10);
  const appItem = (db.applications || []).find(a => a.id === id);

  if (!appItem) {
    return res.status(404).json({ success: false, message: 'Candidature introuvable' });
  }

  if (req.body.status) {
    appItem.status = req.body.status;
  }
  if (req.body.adminNotes) {
    appItem.adminNotes = req.body.adminNotes;
  }

  writeDB(db);
  res.json({
    success: true,
    message: 'Statut de la candidature mis à jour.',
    application: appItem
  });
});

// 4. Supprimer une candidature
app.delete('/api/applications/:id', (req, res) => {
  const db = readDB();
  const id = parseInt(req.params.id, 10);
  db.applications = (db.applications || []).filter(a => a.id !== id);
  writeDB(db);

  res.json({ success: true, message: 'Candidature supprimée avec succès.' });
});

/* ==========================================================================
   ROUTES API - ÉVÉNEMENTS & STATS
   ========================================================================== */

app.get('/api/events', (req, res) => {
  const db = readDB();
  res.json({
    success: true,
    events: db.events || []
  });
});

app.get('/api/stats', (req, res) => {
  const db = readDB();
  const members = db.members || [];
  const applications = db.applications || [];

  const categories = {};
  members.forEach(m => {
    categories[m.category] = (categories[m.category] || 0) + 1;
  });

  const pendingApps = applications.filter(a => a.status === 'nouveau').length;

  res.json({
    success: true,
    stats: {
      totalMembers: members.length,
      totalApplications: applications.length,
      pendingApplications: pendingApps,
      categoriesDistribution: categories,
      nextEvent: (db.events || [])[0] || null
    }
  });
});

// Route d'accès au Back-Office d'administration
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

// Démarrage du serveur si exécuté directement (local)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`✨ Serveur Myladies Ecquedecques opérationnel !`);
    console.log(`🌐 Site Vitrine   : http://localhost:${PORT}`);
    console.log(`🔐 Back-Office    : http://localhost:${PORT}/admin`);
    console.log(`📡 API Endpoints  : http://localhost:${PORT}/api/members`);
    console.log(`=======================================================`);
  });
}

// Export pour Vercel Serverless
module.exports = app;
