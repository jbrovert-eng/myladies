/**
 * Myladies Ecquedecques - Script Principal
 * Interaction, Annuaire dynamique, Filtres, Modale, Compte à rebours & Formulaire
 */

// Données des membres réalistes de l'association Myladies (fallback par défaut)
let membersData = [
  {
    id: 1,
    name: "Valérie Dumont",
    role: "Artisan Fleuriste & Scénographe",
    company: "L'Atelier Floral d'Hélant",
    category: "Artisanat",
    city: "Ecquedecques",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    badge: "Artisan d'Art",
    shortDesc: "Créations florales écoresponsables, bouquets de saison et scénographies florales pour mariages, entreprises et réceptions privées au cœur du Pas-de-Calais.",
    fullDesc: "Passionnée par le végétal depuis plus de 15 ans, Valérie sublime vos événements particuliers et professionnels avec des compositions florales raffinées et poétiques. Installée à Ecquedecques, elle privilégie les fleurs locales et de saison ainsi que des décors durables.",
    services: [
      "Scénographie florale événementielle & mariages",
      "Abonnements floraux pour entreprises & commerces",
      "Ateliers d'art floral & team-building créatif",
      "Compositions végétales sur-mesure & fleurs séchées"
    ],
    motto: "La poésie des fleurs pour donner une âme inoubliable à chaque instant.",
    phone: "03 21 54 89 20",
    email: "contact@atelierfloral-helant.fr",
    website: "https://atelierfloral-helant.fr",
    instagram: "@atelierfloral.helant",
    linkedin: "valerie-dumont-fleurs"
  },
  {
    id: 2,
    name: "Céline Morel",
    role: "Naturopathe & Praticienne Holistique",
    company: "Harmonie & Vitalité",
    category: "Bien-être",
    city: "Béthune",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    badge: "Santé Naturelle",
    shortDesc: "Accompagnement personnalisé pour retrouver équilibre, vitalité et sérénité grâce à la phytothérapie, la nutrition saine et la réflexologie plantaire.",
    fullDesc: "Céline guide les femmes actives et cheffes d'entreprise à préserver leur capital santé face au stress quotidien. Son approche douce et scientifique aide à retrouver un sommeil réparateur, un regain d'énergie durable et un bien-être profond.",
    services: [
      "Bilans de vitalité & micro-nutrition",
      "Gestion du stress & prévention du burn-out professionnel",
      "Séances de réflexologie plantaire bien-être",
      "Ateliers en entreprise : Vitalité & équilibre au travail"
    ],
    motto: "Prendre soin de son corps et de son énergie est le plus beau cadeau que l'on puisse s'offrir.",
    phone: "03 21 68 44 12",
    email: "celine@harmonie-vitalite.fr",
    website: "https://harmonie-vitalite-bethune.fr",
    instagram: "@celine.harmonie.naturopathie",
    linkedin: "celine-morel-bienetre"
  },
  {
    id: 3,
    name: "Aurélie Leclercq",
    role: "Épicière Fine & Ambassadrice Terroir",
    company: "Comptoir & Gourmandises d'Artois",
    category: "Commerce",
    city: "Lillers",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    badge: "Terroir Hauts-de-France",
    shortDesc: "Sélection exigeante de produits gourmets régionaux, paniers garnis d'affaires personnalisés et dégustations privées pour les gourmets de la région.",
    fullDesc: "Au cœur du centre de Lillers, Aurélie met à l'honneur les trésors culinaires des Hauts-de-France et d'artisans passionnés : miels rares, gaufres artisanales, terrines raffinées, bières de dégustation et confitures d'antan. Spécialiste des coffrets cadeaux d'entreprises.",
    services: [
      "Coffrets cadeaux & paniers d'affaires pour CSE et entreprises",
      "Vente en boutique & sélection épicerie salée / sucrée",
      "Animations dégustation & accords mets-vins / bières",
      "Commandes groupées pour événements de fin d'année"
    ],
    motto: "Le goût de l'authenticité et la fierté de nos artisans des Hauts-de-France.",
    phone: "03 21 52 33 08",
    email: "contact@comptoir-artois.fr",
    website: "https://comptoir-artois.fr",
    instagram: "@comptoir.artois",
    linkedin: "aurelie-leclercq-epicerie"
  },
  {
    id: 4,
    name: "Sophie Bernard",
    role: "Consultante en Stratégie & Marque Digitale",
    company: "Capucine Studio",
    category: "Services",
    city: "Aire-sur-la-Lys",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    badge: "Stratégie Digitale",
    shortDesc: "Accompagnement des entrepreneuses et PME locales dans la valorisation de leur identité, leurs réseaux sociaux et leur communication de prestige.",
    fullDesc: "Diplômée en communication des entreprises, Sophie transforme les marques locales en références mémorables. Elle conçoit des stratégies éditoriales élégantes, des chartes de contenu percutantes et optimise l'acquisition client sur les réseaux sociaux.",
    services: [
      "Audit d'image de marque & positionnement haut de gamme",
      "Stratégie de contenu réseaux sociaux (Instagram & LinkedIn)",
      "Création de kits de communication print & web",
      "Formation personnalisée pour dirigeantes indépendantes"
    ],
    motto: "Révéler la singularité de votre talent avec élégance et impact.",
    phone: "06 45 88 19 32",
    email: "sophie@capucine-studio.fr",
    website: "https://capucine-studio.fr",
    instagram: "@capucinestudio.com",
    linkedin: "sophie-bernard-communication"
  },
  {
    id: 5,
    name: "Camille Renard",
    role: "Créatrice Joaillière & Gemmologue",
    company: "Lumière d'Opale",
    category: "Artisanat",
    city: "Saint-Omer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    badge: "Métier d'Art",
    shortDesc: "Bijoux contemporains façonnés à la main en métaux précieux recyclés et pierres fines naturelles aux reflets envoûtants.",
    fullDesc: "Formée aux techniques de la haute joaillerie, Camille crée dans son atelier des pièces uniques et des petites séries d'une finesse incomparable. Ses créations célèbrent la féminité affirmée avec un soupçon de modernité et de caractère rétro chic.",
    services: [
      "Création de bijoux d'art sur-mesure (or 18k, argent 925)",
      "Transformation et revalorisation de bijoux anciens de famille",
      "Alliances et parures d'exception pour mariages",
      "Collections capsules de bagues, pendentifs et boucles d'oreilles"
    ],
    motto: "Un bijou est une émotion qui traverse le temps sans jamais s'éteindre.",
    phone: "03 21 98 12 76",
    email: "contact@lumieredopale-bijoux.fr",
    website: "https://lumieredopale-bijoux.fr",
    instagram: "@lumieredopale.bijoux",
    linkedin: "camille-renard-joaillerie"
  },
  {
    id: 6,
    name: "Émilie Vasseur",
    role: "Maître Praticienne Soins de Beauté & Spa",
    company: "L'Instant Beauté Privé",
    category: "Bien-être",
    city: "Bruay-la-Buissière",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
    badge: "Beauté Haute Couture",
    shortDesc: "Institut intimiste dédié aux rituels visage anti-âge d'exception, modelages relaxants et soins signature dans un cocon feutré.",
    fullDesc: "Émilie a pensé son institut comme un écrin de calme et d'élégance loin de l'agitation. Formée aux protocoles dermo-cosmétiques avancés et au kobido japonais, elle propose une prise en charge sur-mesure alliant technologie douce et relaxation absolue.",
    services: [
      "Massage facial sculptant Kobido & rituels éclat",
      "Soins dermo-esthétiques personnalisés anti-âge",
      "Rituels de relaxation corps aux huiles précieuses",
      "Formules privatives pour mamans, amies ou futures mariées"
    ],
    motto: "Sublimer votre beauté naturelle dans un havre de paix et de douceur.",
    phone: "03 21 62 70 95",
    email: "emilie@instantbeaute-prive.fr",
    website: "https://instantbeaute-prive.fr",
    instagram: "@linstantbeaute.prive",
    linkedin: "emilie-vasseur-beaute"
  },
  {
    id: 7,
    name: "Nathalie Pruvost",
    role: "Conseillère en Stratégie Patrimoniale",
    company: "Clarté Patrimoine",
    category: "Services",
    city: "Béthune",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    badge: "Expertise Financière",
    shortDesc: "Accompagnement des dirigeantes, professionnelles libérales et familles dans la structuration, protection et valorisation de leur patrimoine.",
    fullDesc: "Avec 20 années d'expérience en gestion privée et ingénierie financière, Nathalie apporte une vision claire, indépendante et bienveillante pour préparer sa retraite, sécuriser ses proches, optimiser sa fiscalité et transmettre son patrimoine sereinement.",
    services: [
      "Audit patrimonial global et bilan successoral",
      "Protection du dirigeant & optimisation de la rémunération",
      "Stratégies d'investissement immobilier & placements responsables",
      "Préparation de la transmission d'entreprise familiale"
    ],
    motto: "Donner du sens et de la sécurité à votre avenir financier.",
    phone: "03 21 57 80 40",
    email: "contact@clarte-patrimoine.fr",
    website: "https://clarte-patrimoine.fr",
    instagram: "@clarte.patrimoine",
    linkedin: "nathalie-pruvost-patrimoine"
  },
  {
    id: 8,
    name: "Delphine Tavernier",
    role: "Styliste & Fondatrice Concept Store",
    company: "Boutique Pimprenelle",
    category: "Commerce",
    city: "Lillers",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    badge: "Mode & Tendances",
    shortDesc: "Boutique de prêt-à-porter féminin, maroquinerie soignée et accessoires coup de cœur sélectionnés avec amour auprès de créateurs européens.",
    fullDesc: "Delphine a fondé Pimprenelle avec une idée fixe : faire rayonner toutes les silhouettes avec des pièces coupées impeccablement, des matières nobles et confortables. Elle organise régulièrement des défilés et soirées shopping privées au club.",
    services: [
      "Conseil en image & relooking vestimentaire bienveillant",
      "Sélections prêt-à-porter du 36 au 48 et accessoires raffinés",
      "Organisation de ventes privées VIP & nocturnes thématiques",
      "Cartes cadeaux et personal shopping sur rendez-vous"
    ],
    motto: "S'habiller pour soi, avec joie, caractère et confiance.",
    phone: "03 21 54 11 90",
    email: "contact@boutique-pimprenelle.fr",
    website: "https://boutique-pimprenelle.fr",
    instagram: "@pimprenelle.boutique.lillers",
    linkedin: "delphine-tavernier-mode"
  }
];

// Initialisation globale
document.addEventListener("DOMContentLoaded", async () => {
  initNavbar();
  await loadMembersFromBackend();
  initDirectory();
  initCountdown();
  initApplicationForm();
  initFaqAccordion();
  initScrollAnimations();
});

// Chargement dynamique depuis le Backend avec fallback transparent
async function loadMembersFromBackend() {
  try {
    const res = await fetch('/api/members');
    if (res.ok) {
      const data = await res.json();
      if (data && data.members && data.members.length > 0) {
        membersData = data.members;
      }
    }
  } catch (e) {
    console.info("Mode autonome local : utilisation des données statiques.");
  }
}

/* ==========================================================================
   1. NAVBAR & NAVIGATION MOBILE
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById("mainNavbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // Sticky scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("bg-[#7B1E26]/95", "backdrop-blur-md", "shadow-xl", "py-2.5");
      navbar.classList.remove("bg-transparent", "py-4");
    } else {
      navbar.classList.remove("bg-[#7B1E26]/95", "backdrop-blur-md", "shadow-xl", "py-2.5");
      navbar.classList.add("bg-transparent", "py-4");
    }
  });

  // Mobile toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      if (isOpen) {
        mobileMenu.classList.add("hidden");
        mobileToggle.setAttribute("aria-expanded", "false");
      } else {
        mobileMenu.classList.remove("hidden");
        mobileToggle.setAttribute("aria-expanded", "true");
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/* ==========================================================================
   2. ANNUAIRE DES MEMBRES & FILTRES
   ========================================================================== */
let activeCategory = "Tous";
let searchQuery = "";

function initDirectory() {
  renderMembers();

  // Filtres par catégorie
  const filterButtons = document.querySelectorAll(".category-filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-[#7B1E26]", "text-white", "border-[#C59B27]", "shadow-md");
        b.classList.add("bg-white", "text-stone-700", "border-stone-200");
      });
      btn.classList.remove("bg-white", "text-stone-700", "border-stone-200");
      btn.classList.add("bg-[#7B1E26]", "text-white", "border-[#C59B27]", "shadow-md");

      activeCategory = btn.getAttribute("data-category");
      renderMembers();
    });
  });

  // Recherche en direct
  const searchInput = document.getElementById("memberSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderMembers();
    });
  }

  // Modale setup
  setupModal();
}

function renderMembers() {
  const container = document.getElementById("membersGrid");
  const countBadge = document.getElementById("membersCount");
  if (!container) return;

  const filtered = membersData.filter(member => {
    const matchesCategory = activeCategory === "Tous" || member.category === activeCategory;
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery) ||
      member.company.toLowerCase().includes(searchQuery) ||
      member.role.toLowerCase().includes(searchQuery) ||
      member.city.toLowerCase().includes(searchQuery) ||
      member.category.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} membre${filtered.length > 1 ? 's' : ''}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white/70 rounded-2xl border border-dashed border-[#C59B27]/40 p-8">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7B1E26]/10 flex items-center justify-center text-[#7B1E26]">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <h4 class="font-serif-title text-xl text-[#7B1E26] font-semibold mb-2">Aucun membre ne correspond à cette recherche</h4>
        <p class="text-stone-600 max-w-md mx-auto text-sm mb-6">Peut-être s'agit-il d'un métier encore disponible ? C'est le moment idéal pour proposer votre candidature exclusive !</p>
        <a href="#recrutement" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7B1E26] text-[#F7F3EE] hover:bg-[#58131A] transition text-sm font-semibold">
          Rejoindre le club
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(member => {
    // Style du badge selon catégorie
    let categoryBadgeClass = "bg-stone-100 text-stone-700 border-stone-200";
    if (member.category === "Bien-être") categoryBadgeClass = "bg-[#1D6F72]/10 text-[#1D6F72] border-[#1D6F72]/30";
    if (member.category === "Artisanat") categoryBadgeClass = "bg-[#C59B27]/15 text-[#916E10] border-[#C59B27]/40";
    if (member.category === "Services") categoryBadgeClass = "bg-[#7B1E26]/10 text-[#7B1E26] border-[#7B1E26]/30";
    if (member.category === "Commerce") categoryBadgeClass = "bg-amber-50 text-amber-800 border-amber-200";

    return `
      <article class="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 card-shadow-chic card-shadow-hover flex flex-col transition-all duration-300">
        <!-- Image Card avec liseré d'angle doré -->
        <div class="relative h-64 overflow-hidden bg-stone-100">
          <img 
            src="${member.image}" 
            alt="${member.name} - ${member.role}" 
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          <!-- Badge Catégorie -->
          <div class="absolute top-4 left-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/90 shadow-sm border border-stone-200 ${categoryBadgeClass}">
              <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
              ${member.category}
            </span>
          </div>

          <!-- Ville & Ancrage -->
          <div class="absolute top-4 right-4">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-black/50 text-white/90">
              <svg class="w-3 h-3 text-[#E3BC4C]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
              ${member.city}
            </span>
          </div>

          <!-- Nom et Entreprise sur l'image -->
          <div class="absolute bottom-3 left-4 right-4 text-white">
            <h3 class="font-serif-title text-xl font-bold text-white group-hover:text-[#E3BC4C] transition-colors leading-tight">
              ${member.name}
            </h3>
            <p class="text-xs uppercase tracking-wider text-[#E3BC4C] font-semibold mt-0.5">
              ${member.company}
            </p>
          </div>
        </div>

        <!-- Contenu de la fiche -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-[#1D6F72] flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                ${member.role}
              </span>
              <span class="text-[11px] text-stone-500 font-medium">1 métier exclusif</span>
            </div>

            <p class="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-4">
              ${member.shortDesc}
            </p>
          </div>

          <!-- Action & Contact rapide -->
          <div class="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
            <button 
              type="button" 
              onclick="openMemberModal(${member.id})" 
              class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F7F3EE] hover:bg-[#7B1E26] text-[#7B1E26] hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-[#C59B27]/40 hover:border-[#7B1E26]"
            >
              <span>Découvrir le profil</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* ==========================================================================
   3. MODALE DÉTAIL MEMBRE
   ========================================================================== */
function setupModal() {
  const modal = document.getElementById("memberModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const backdrop = document.getElementById("modalBackdrop");

  if (!modal) return;

  function closeModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function openMemberModal(memberId) {
  const member = membersData.find(m => m.id === memberId);
  if (!member) return;

  const modal = document.getElementById("memberModal");
  const modalContent = document.getElementById("memberModalContent");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- En-tête photo & bannière -->
    <div class="relative h-48 sm:h-56 w-full overflow-hidden bg-stone-900">
      <img src="${member.coverImage}" alt="${member.company}" class="w-full h-full object-cover opacity-60">
      <div class="absolute inset-0 bg-gradient-to-t from-[#3B0A0E] via-[#3B0A0E]/60 to-transparent"></div>
      
      <!-- Badges header -->
      <div class="absolute top-4 left-4 flex flex-wrap gap-2">
        <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C59B27] text-stone-900 shadow">
          ${member.badge}
        </span>
        <span class="px-3 py-1 rounded-full text-xs font-medium bg-black/40 text-white backdrop-blur-sm border border-white/20">
          ${member.category}
        </span>
      </div>

      <!-- Bouton fermer -->
      <button 
        onclick="document.getElementById('memberModal').classList.add('hidden'); document.body.classList.remove('overflow-hidden');" 
        class="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-[#7B1E26] flex items-center justify-center transition"
        aria-label="Fermer"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <!-- Avatar déporté et nom -->
      <div class="absolute bottom-4 left-6 right-6 flex items-end gap-4">
        <img 
          src="${member.image}" 
          alt="${member.name}" 
          class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white shadow-xl bg-white"
        />
        <div class="text-white pb-1">
          <h3 class="font-serif-title text-2xl sm:text-3xl font-bold leading-tight">${member.name}</h3>
          <p class="text-[#E3BC4C] text-sm sm:text-base font-semibold">${member.company}</p>
        </div>
      </div>
    </div>

    <!-- Corps de la modale -->
    <div class="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
      <!-- Métier & Localisation -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200">
        <div class="flex items-center gap-2 text-stone-800 font-semibold">
          <svg class="w-5 h-5 text-[#1D6F72]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <span class="text-base sm:text-lg">${member.role}</span>
        </div>
        <div class="flex items-center gap-1.5 text-sm font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
          <svg class="w-4 h-4 text-[#7B1E26]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
          ${member.city} (Pas-de-Calais)
        </div>
      </div>

      <!-- Devise / Citation inspirante -->
      <blockquote class="p-4 rounded-xl bg-[#F7F3EE] border-l-4 border-[#C59B27] italic text-stone-700 text-sm font-medium">
        "${member.motto}"
      </blockquote>

      <!-- Description détaillée -->
      <div>
        <h4 class="font-serif-title text-lg font-bold text-[#7B1E26] mb-2">À propos de l'entrepreneuse</h4>
        <p class="text-stone-700 text-sm sm:text-base leading-relaxed">${member.fullDesc}</p>
      </div>

      <!-- Prestations phares -->
      <div>
        <h4 class="font-serif-title text-lg font-bold text-[#1D6F72] mb-3">Prestations & Savoir-Faire</h4>
        <ul class="grid sm:grid-cols-2 gap-2.5">
          ${member.services.map(s => `
            <li class="flex items-start gap-2 text-xs sm:text-sm text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
              <svg class="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
              <span>${s}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Coordonnées & Réseaux -->
      <div class="bg-gradient-to-br from-[#F7F3EE] to-white p-5 rounded-2xl border border-stone-200">
        <h4 class="font-serif-title text-base font-bold text-stone-900 mb-3">Contacter directement la cheffe d'entreprise</h4>
        <div class="grid sm:grid-cols-2 gap-3 text-sm">
          <a href="tel:${member.phone.replace(/\s+/g, '')}" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white text-stone-700 hover:text-[#7B1E26] transition border border-transparent hover:border-stone-200">
            <div class="w-8 h-8 rounded-full bg-[#7B1E26]/10 text-[#7B1E26] flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            </div>
            <span class="font-medium">${member.phone}</span>
          </a>

          <a href="mailto:${member.email}" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white text-stone-700 hover:text-[#7B1E26] transition border border-transparent hover:border-stone-200">
            <div class="w-8 h-8 rounded-full bg-[#1D6F72]/10 text-[#1D6F72] flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <span class="font-medium truncate">${member.email}</span>
          </a>

          <a href="${member.website}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white text-stone-700 hover:text-[#7B1E26] transition border border-transparent hover:border-stone-200">
            <div class="w-8 h-8 rounded-full bg-[#C59B27]/15 text-[#916E10] flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <span class="font-medium truncate">Site officiel</span>
          </a>

          <div class="flex items-center gap-2 p-2">
            <span class="text-xs text-stone-500 font-medium">Réseaux :</span>
            <span class="text-xs px-2 py-1 rounded bg-stone-200 text-stone-800 font-semibold">${member.instagram}</span>
            <span class="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 font-semibold">LinkedIn</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pied de modale -->
    <div class="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
      <div class="text-xs text-stone-500">
        Membre officielle du réseau d'affaires <strong class="text-[#7B1E26]">Myladies Ecquedecques</strong>
      </div>
      <button 
        onclick="document.getElementById('memberModal').classList.add('hidden'); document.body.classList.remove('overflow-hidden');" 
        class="px-5 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-bold uppercase tracking-wider transition"
      >
        Fermer la fiche
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

// Exposer à la fenêtre pour les onclick dans le template HTML
window.openMemberModal = openMemberModal;

/* ==========================================================================
   4. COMPTE À REBOURS - VENTE PRIVÉE DOMAINE D'HÉLANT
   ========================================================================== */
function initCountdown() {
  // Prochaine Vente Privée : dans 24 jours ou date configurable
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 24);
  targetDate.setHours(14, 0, 0, 0);

  const daysEl = document.getElementById("cdDays");
  const hoursEl = document.getElementById("cdHours");
  const minsEl = document.getElementById("cdMinutes");
  const secsEl = document.getElementById("cdSeconds");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function update() {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(d).padStart(2, "0");
    hoursEl.textContent = String(h).padStart(2, "0");
    minsEl.textContent = String(m).padStart(2, "0");
    secsEl.textContent = String(s).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   5. FORMULAIRE DE PARTICIPATION & CANDIDATURE
   ========================================================================== */
function initApplicationForm() {
  const form = document.getElementById("joinForm");
  const statusMsg = document.getElementById("formStatusMessage");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Vérification de la disponibilité métier...
    `;

    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      companyName: document.getElementById("companyName").value,
      profession: document.getElementById("profession").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      city: document.getElementById("city").value,
      meetingChoice: document.getElementById("meetingChoice").value,
      message: document.getElementById("message").value
    };

    let serverMessage = "Merci pour votre intérêt envers Myladies Ecquedecques. Le bureau vérifie la disponibilité de votre métier et vous recontactera sous 48h.";

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        if (result.message) serverMessage = result.message;
        if (result.application && result.application.exclusivityAlert) {
          serverMessage += ` (${result.application.exclusivityAlert})`;
        }
      }
    } catch (err) {
      console.info("Soumission en mode autonome (serveur non contacté) :", err);
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    form.reset();

    if (statusMsg) {
      const msgParagraph = statusMsg.querySelector("p");
      if (msgParagraph) msgParagraph.textContent = serverMessage;

      statusMsg.classList.remove("hidden");
      statusMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });

      setTimeout(() => {
        statusMsg.classList.add("hidden");
      }, 10000);
    }
  });
}

/* ==========================================================================
   6. FAQ ACCORDÉON
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isOpen = !content.classList.contains("hidden");

      // Fermer tous les autres
      faqItems.forEach(other => {
        const otherContent = other.querySelector(".faq-content");
        const otherIcon = other.querySelector(".faq-icon");
        if (otherContent && other !== item) {
          otherContent.classList.add("hidden");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        }
      });

      if (isOpen) {
        content.classList.add("hidden");
        if (icon) icon.style.transform = "rotate(0deg)";
      } else {
        content.classList.remove("hidden");
        if (icon) icon.style.transform = "rotate(180deg)";
      }
    });
  });
}

/* ==========================================================================
   7. ANIMATIONS AU SCROLL
   ========================================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  document.querySelectorAll(".reveal-on-scroll").forEach(el => {
    observer.observe(el);
  });
}
