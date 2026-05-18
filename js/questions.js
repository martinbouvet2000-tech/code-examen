const SERIES = [
  {
    id: 'signalisation',
    name: 'Signalisation',
    icon: '🚦',
    description: 'Panneaux, feux, marquages',
    difficulty: 1,
  },
  {
    id: 'priorites',
    name: 'Priorités & intersections',
    icon: '⬆️',
    description: 'Cédez le passage, STOP, priorité à droite',
    difficulty: 2,
  },
  {
    id: 'vitesses',
    name: 'Vitesses & distances',
    icon: '🏎️',
    description: 'Limites, conditions météo, freinage',
    difficulty: 2,
  },
  {
    id: 'alcool',
    name: 'Alcool, drogues & médicaments',
    icon: '🍷',
    description: 'Taux, sanctions, risques',
    difficulty: 1,
  },
  {
    id: 'secours',
    name: 'Premiers secours (SAUV)',
    icon: '🚑',
    description: 'PAS-SOS, gestes de survie',
    difficulty: 2,
  },
  {
    id: 'eclairages',
    name: 'Éclairages & visibilité',
    icon: '💡',
    description: 'Feux, brouillard, nuit',
    difficulty: 1,
  },
  {
    id: 'autoroute',
    name: 'Autoroute & voie rapide',
    icon: '🛣️',
    description: 'Règles spécifiques autoroute',
    difficulty: 3,
  },
  {
    id: 'vulnerables',
    name: 'Usagers vulnérables',
    icon: '🚴',
    description: 'Piétons, cyclistes, trottinettes',
    difficulty: 3,
  },
  {
    id: 'stationnement',
    name: 'Stationnement',
    icon: '🅿️',
    description: 'Règles de stationnement et d\'arrêt',
    difficulty: 2,
  },
  {
    id: 'ecoconduite',
    name: 'Éco-conduite & environnement',
    icon: '🌿',
    description: 'Conduite économique, pollution, ZFE',
    difficulty: 2,
  },
];

const QUESTIONS = [
  // ===== SIGNALISATION =====
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Ce panneau rouge triangulaire avec un point d'exclamation (⚠) signifie :",
    answers: ["Arrêt interdit", "Danger non spécifié à venir", "Route prioritaire terminée", "Zone 30"],
    correct: [1],
    explanation: "Le panneau de danger non spécifié (triangle rouge avec point d'exclamation) indique un danger particulier non représenté par un panneau standard. Il précède souvent une zone de travaux atypique ou un danger temporaire.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Un panneau circulaire bleu avec une flèche blanche vers le bas signifie :",
    answers: ["Sens unique", "Voie réservée aux bus", "Obligation de continuer tout droit", "Sens interdit"],
    correct: [2],
    explanation: "Les panneaux ronds bleus sont des panneaux d'obligation. Une flèche blanche vers le bas dans un cercle bleu indique l'obligation de continuer dans la direction indiquée. Ne pas confondre avec le 'sens interdit' qui est un panneau rouge.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Que signifie une ligne blanche continue au milieu de la route ?",
    answers: ["Vous pouvez doubler si la visibilité est suffisante", "Vous pouvez doubler uniquement les cyclistes", "Le franchissement est interdit", "La vitesse est limitée à 50 km/h"],
    correct: [2],
    explanation: "Une ligne blanche continue au centre de la chaussée est une ligne d'axe infranchissable. Il est strictement interdit de la franchir ou de la chevaucher, sauf pour un besoin impérieux (éviter un obstacle) ou pour entrer/sortir d'une propriété.",
    schema: `<svg width="280" height="100" viewBox="0 0 280 100">
      <rect width="280" height="100" fill="#888" rx="6"/>
      <rect x="0" y="45" width="280" height="10" fill="white"/>
      <path d="M0 48 L280 48" stroke="#aaa" stroke-width="1" stroke-dasharray="none"/>
      <rect x="30" y="20" width="60" height="28" rx="5" fill="#e74c3c" opacity="0.9"/>
      <rect x="190" y="52" width="60" height="28" rx="5" fill="#3498db" opacity="0.9"/>
      <text x="42" y="35" fill="white" font-size="9" font-family="Inter,sans-serif" font-weight="bold">Voiture A</text>
      <text x="198" y="66" fill="white" font-size="9" font-family="Inter,sans-serif" font-weight="bold">Voiture B</text>
      <text x="100" y="92" fill="white" font-size="10" font-family="Inter,sans-serif">Ligne continue = INFRANCHISSABLE</text>
    </svg>`,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Un panneau 'STOP' oblige le conducteur à :",
    answers: [
      "Ralentir et passer si la voie est libre",
      "S'arrêter complètement, même si la voie est libre",
      "S'arrêter uniquement si des véhicules arrivent",
      "Passer en regardant à gauche puis à droite"
    ],
    correct: [1],
    explanation: "Le panneau STOP (octogone rouge) impose un arrêt complet et absolu, même si aucun véhicule n'est visible. Le conducteur doit marquer un arrêt derrière la ligne d'arrêt, puis céder le passage à tous les véhicules circulant sur la route croisée.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Que signifie un panneau C14 'Zone à trafic limité (ZTL)' ? (Règle 2026)",
    answers: [
      "Zone piétonne interdite aux véhicules motorisés",
      "Zone accessible uniquement aux résidents, livreurs autorisés et véhicules d'urgence",
      "Zone 30 avec priorité aux piétons",
      "Zone payante de stationnement"
    ],
    correct: [1],
    explanation: "Les Zones à Trafic Limité (ZTL), généralisées en France depuis 2024-2026, restreignent l'accès aux riverains, services d'urgence et livraisons autorisées. Elles sont souvent contrôlées par caméras LAPI. Circuler en ZTL sans autorisation est passible d'une amende de 135 €.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "La signification des feux de circulation : un feu vert clignotant signifie :",
    answers: [
      "Vous pouvez passer mais la phase verte va se terminer",
      "Feu réservé aux transports en commun uniquement",
      "Passage autorisé uniquement pour les piétons",
      "Attention : feu en panne, règle de priorité à droite"
    ],
    correct: [1],
    explanation: "Un feu vert clignotant indique que la phase verte est sur le point de se terminer. En France, il avertit le conducteur qu'il doit ralentir car le feu passera bientôt à l'orange. Dans certains carrefours, il indique aussi une voie de sortie.",
    schema: null,
    tags: []
  },

  // --- SIGNALISATION (batch 2) ---
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Un panneau triangulaire à bordure rouge avec un dessin de virage signifie :",
    answers: ["Interdiction de tourner", "Virage dangereux à venir", "Route sinueuse interdite aux poids lourds", "Demi-tour obligatoire"],
    correct: [1],
    explanation: "Les panneaux de danger sont triangulaires à bordure rouge. Un virage dessiné à l'intérieur prévient d'un virage dangereux. Le conducteur doit adapter sa vitesse avant d'y parvenir.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Que signifie un panneau rond à bordure rouge avec le chiffre 50 au centre ?",
    answers: ["Vitesse minimale de 50 km/h", "Limitation de vitesse à 50 km/h", "Distance de sécurité de 50 mètres", "Zone de stationnement limité à 50 minutes"],
    correct: [1],
    explanation: "Un panneau circulaire à bordure rouge avec un nombre indique une interdiction de dépasser la vitesse indiquée. Ici, la vitesse est limitée à 50 km/h. Ce panneau est fréquent en agglomération.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Un panneau rond bleu avec un vélo blanc signifie :",
    answers: ["Piste cyclable interdite aux piétons", "Voie obligatoire pour les cyclistes", "Fin de piste cyclable", "Stationnement vélo obligatoire"],
    correct: [1],
    explanation: "Un panneau rond bleu est un panneau d'obligation. Un vélo blanc à l'intérieur impose aux cyclistes d'emprunter cette voie. Les autres usagers n'ont pas le droit d'y circuler sauf exception signalée.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Un panneau carré bleu avec un 'P' blanc indique :",
    answers: ["Passage piéton", "Parking ou zone de stationnement autorisé", "Poste de police à proximité", "Point de péage"],
    correct: [1],
    explanation: "Les panneaux d'indication sont carrés ou rectangulaires à fond bleu. Le 'P' blanc signale un parc de stationnement ou une zone où le stationnement est autorisé.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Que signifie un feu orange fixe (non clignotant) ?",
    answers: ["Passage autorisé si la voie est libre", "Arrêt obligatoire sauf si le véhicule ne peut plus s'arrêter en sécurité", "Voie réservée aux bus", "Feu en panne, appliquer la priorité à droite"],
    correct: [1],
    explanation: "Le feu orange fixe annonce le passage imminent au rouge. Le conducteur doit s'arrêter, sauf s'il est trop engagé ou ne peut plus s'arrêter en toute sécurité (risque de freinage brutal).",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Un panneau triangulaire à bordure rouge avec deux bosses signifie :",
    answers: ["Route en mauvais état", "Cassis ou dos-d'âne", "Chaussée glissante", "Descente dangereuse"],
    correct: [1],
    explanation: "Ce panneau de danger prévient de la présence de dos-d'âne ou de cassis sur la chaussée. Le conducteur doit réduire sa vitesse pour éviter tout risque de perte de contrôle ou d'endommagement du véhicule.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Que signifient les flèches directionnelles peintes au sol dans une voie de circulation ?",
    answers: ["Elles sont indicatives et n'ont aucune valeur légale", "Elles obligent le conducteur à suivre la direction indiquée", "Elles indiquent une zone de dépassement autorisé", "Elles marquent une voie réservée aux bus"],
    correct: [1],
    explanation: "Les flèches directionnelles peintes au sol (marquage horizontal) ont une valeur réglementaire. Le conducteur positionné sur une voie avec flèche doit suivre la direction indiquée (tout droit, à gauche, à droite ou combinaison).",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "La signalisation temporaire de chantier (panneaux jaunes) a-t-elle priorité sur la signalisation permanente ?",
    answers: ["Non, la signalisation permanente prime toujours", "Oui, la signalisation temporaire prime sur la permanente", "Elles ont la même valeur, c'est au conducteur de choisir", "Seulement si un agent est présent"],
    correct: [1],
    explanation: "La signalisation temporaire (fond jaune pour les panneaux de danger, fond jaune ou orange pour le marquage au sol) prime toujours sur la signalisation permanente. Elle est mise en place pour assurer la sécurité dans les zones de travaux.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Que signifie un panneau rectangulaire vert avec des noms de villes ?",
    answers: ["Panneau de direction vers une autoroute ou route à chaussées séparées", "Panneau de direction vers un centre-ville", "Panneau touristique", "Panneau indiquant un itinéraire de délestage"],
    correct: [0],
    explanation: "Les panneaux de direction verts indiquent des itinéraires empruntant des autoroutes ou des routes à chaussées séparées. Les panneaux bleus indiquent les routes nationales ou départementales, les blancs les directions locales.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Que signifie un feu orange clignotant seul (sans rouge ni vert) ?",
    answers: ["Interdiction de passer", "Passage autorisé avec prudence, la priorité à droite s'applique ou le panneau présent s'applique", "Feu réservé aux piétons", "Le carrefour est interdit à la circulation"],
    correct: [1],
    explanation: "Un feu orange clignotant seul signifie que le feu ne régule plus la circulation. Le conducteur peut passer mais doit faire preuve de prudence et respecter les règles de priorité (panneaux ou priorité à droite).",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Que signifie un panneau 'zone 30' (carré bleu avec '30') ?",
    answers: ["Limitation ponctuelle à 30 km/h sur cette portion", "Entrée dans une zone entière limitée à 30 km/h avec priorité aux piétons renforcée", "Interdiction de stationner plus de 30 minutes", "Distance de sécurité de 30 mètres obligatoire"],
    correct: [1],
    explanation: "Le panneau de zone 30 indique l'entrée dans une zone où la vitesse est limitée à 30 km/h sur l'ensemble des voies. Les piétons y bénéficient d'une protection renforcée et les aménagements incitent à la réduction de vitesse.",
    schema: `<svg width="270" height="130" viewBox="0 0 270 130" xmlns="http://www.w3.org/2000/svg">
  <rect width="270" height="130" fill="#e3f2fd" rx="8"/>
  <rect x="20" y="15" width="80" height="80" rx="40" fill="white" stroke="#e53935" stroke-width="8"/>
  <text x="60" y="70" fill="#212121" font-size="34" font-family="Inter,sans-serif" font-weight="bold" text-anchor="middle">30</text>
  <rect x="130" y="50" width="120" height="50" fill="#888" rx="4"/>
  <rect x="150" y="58" width="50" height="22" rx="4" fill="#f39c12"/>
  <text x="155" y="72" fill="white" font-size="8" font-family="Inter,sans-serif">Voiture</text>
  <text x="130" y="20" fill="#1565c0" font-size="9" font-family="Inter,sans-serif" font-weight="bold">Zone 30</text>
  <text x="125" y="35" fill="#555" font-size="8" font-family="Inter,sans-serif">Vitesse max 30 km/h</text>
  <text x="125" y="47" fill="#555" font-size="8" font-family="Inter,sans-serif">en agglomération</text>
</svg>`,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Les zébras (hachures blanches obliques) peints au sol signifient :",
    answers: ["Zone de stationnement réservée", "Zone neutre interdite à la circulation, ne pas y circuler ni stationner", "Passage piéton élargi", "Voie réservée aux deux-roues"],
    correct: [1],
    explanation: "Les hachures blanches obliques (zébras) délimitent une zone neutre interdite à la circulation. Il est interdit d'y circuler, d'y stationner ou de s'y arrêter. Elles séparent souvent les courants de circulation.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Quelle est la signification des balises J5 (balises blanches à bandes rouges) placées en virage ?",
    answers: ["Interdiction de dépasser", "Elles balisent un virage dangereux et indiquent le côté extérieur du virage", "Elles marquent une zone de travaux", "Elles indiquent la proximité d'un passage à niveau"],
    correct: [1],
    explanation: "Les balises J5 (blanches à bandes rouges obliques) sont placées sur le côté extérieur des virages dangereux. Elles aident le conducteur à percevoir la courbure, surtout de nuit. Plus il y a de balises, plus le virage est serré.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Qu'indique un panneau carré bleu avec le texte 'Zone de rencontre' ?",
    answers: ["Zone piétonne interdite aux véhicules", "Zone limitée à 20 km/h où les piétons sont prioritaires et peuvent circuler sur la chaussée", "Zone de stationnement partagée", "Zone limitée à 30 km/h sans trottoir"],
    correct: [1],
    explanation: "La zone de rencontre est un espace limité à 20 km/h où les piétons ont la priorité absolue et peuvent circuler sur la chaussée. Les véhicules y sont tolérés mais doivent leur céder le passage en permanence.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Depuis 2024, quel nouveau marquage au sol jaune en zigzag peut-on trouver devant les écoles ?",
    answers: ["Zone d'arrêt minute réservée aux parents", "Interdiction absolue de s'arrêter ou stationner sur toute la longueur du zigzag", "Zone de dépose-minute payante", "Voie de bus scolaire uniquement"],
    correct: [1],
    explanation: "Le marquage jaune en zigzag devant les établissements scolaires, généralisé depuis 2024, interdit tout arrêt et stationnement afin d'assurer la visibilité et la sécurité des enfants aux abords de l'école. Le non-respect est sanctionné par une amende de 135 €.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Que signifie un panneau B52 (rond rouge barré avec 'ZFE') que l'on rencontre à l'entrée de certaines métropoles ?",
    answers: ["Zone à Faibles Émissions : accès interdit aux véhicules sans vignette Crit'Air valide", "Zone de forte exposition sonore : klaxon interdit", "Zone franche économique : péage obligatoire", "Zone de fret exclusif : véhicules particuliers interdits"],
    correct: [0],
    explanation: "Le panneau B52 ZFE (Zone à Faibles Émissions) interdit l'accès aux véhicules ne disposant pas d'une vignette Crit'Air autorisée. En 2026, de nombreuses métropoles françaises appliquent cette restriction pour améliorer la qualité de l'air. L'amende est de 68 € (véhicule léger) ou 135 € (poids lourd).",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Quels éléments permettent de distinguer une ligne de dissuasion d'une ligne continue ? (plusieurs réponses)",
    answers: ["La ligne de dissuasion a des traits plus courts que les intervalles", "La ligne continue n'a aucune interruption", "La ligne de dissuasion est toujours jaune", "La ligne de dissuasion a un rapport plein/vide différent de la ligne discontinue classique"],
    correct: [0, 1, 3],
    multi: true,
    explanation: "La ligne de dissuasion (axiale T3) a des traits courts avec de longs intervalles (rapport plein/vide de 1/3 contre 1/1.33 pour la discontinue classique). La ligne continue n'a aucune interruption. Ni l'une ni l'autre n'est jaune (les marquages axiaux sont blancs en France).",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Depuis 2025, quel panneau spécifique signale les voies réservées au covoiturage en agglomération ?",
    answers: ["Un losange blanc sur fond bleu avec le pictogramme de deux personnes", "Un panneau vert avec la mention 'COV'", "Un panneau rond bleu avec une voiture et deux silhouettes", "Un panneau carré blanc avec un losange noir"],
    correct: [0],
    explanation: "Les voies réservées au covoiturage sont signalées par un panneau carré bleu comportant un losange blanc et le pictogramme de deux occupants. Ce dispositif, renforcé depuis 2025, permet aux véhicules transportant au moins 2 personnes d'emprunter ces voies réservées, souvent partagées avec les bus et taxis.",
    schema: null,
    tags: ['2026']
  },

  // ===== PRIORITÉS =====
  {
    series: 'priorites',
    difficulty: 1,
    text: "À une intersection sans panneau ni marquage, qui est prioritaire ?",
    answers: [
      "Le véhicule roulant le plus vite",
      "Le véhicule venant de droite",
      "Le véhicule arrivé le premier",
      "Le véhicule le plus grand"
    ],
    correct: [1],
    explanation: "En l'absence de signalisation, la règle de la priorité à droite s'applique : tout conducteur doit céder le passage aux véhicules venant de sa droite. C'est une règle fondamentale du code de la route français.",
    schema: `<svg width="260" height="200" viewBox="0 0 260 200">
      <rect width="260" height="200" fill="#e8f5e9" rx="8"/>
      <!-- Route verticale -->
      <rect x="110" y="0" width="40" height="200" fill="#888"/>
      <!-- Route horizontale -->
      <rect x="0" y="80" width="260" height="40" fill="#888"/>
      <!-- Trottoirs -->
      <rect x="110" y="0" width="2" height="200" fill="#bbb"/>
      <rect x="148" y="0" width="2" height="200" fill="#bbb"/>
      <rect x="0" y="80" width="260" height="2" fill="#bbb"/>
      <rect x="0" y="118" width="260" height="2" fill="#bbb"/>
      <!-- Voiture A (vient du bas, monte) -->
      <rect x="118" y="140" width="22" height="38" rx="4" fill="#e74c3c"/>
      <text x="122" y="162" fill="white" font-size="10" font-weight="bold" font-family="Inter">A</text>
      <!-- Voiture B (vient de la droite) -->
      <rect x="175" y="88" width="38" height="22" rx="4" fill="#2ecc71"/>
      <text x="188" y="102" fill="white" font-size="10" font-weight="bold" font-family="Inter">B</text>
      <!-- Flèches -->
      <path d="M129 138 L129 125" stroke="#e74c3c" stroke-width="2.5" marker-end="url(#ar)"/>
      <path d="M174 99 L162 99" stroke="#2ecc71" stroke-width="2.5" marker-end="url(#ag)"/>
      <defs>
        <marker id="ar" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#e74c3c"/>
        </marker>
        <marker id="ag" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#2ecc71"/>
        </marker>
      </defs>
      <text x="30" y="175" fill="#1a73e8" font-size="11" font-family="Inter" font-weight="bold">B vient de la droite de A → B prioritaire</text>
    </svg>`,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Vous êtes sur une route prioritaire (panneau route prioritaire). À une intersection, vous devez :",
    answers: [
      "Céder le passage à tous les véhicules",
      "Conserver votre priorité mais rester vigilant",
      "Klaxonner pour signaler votre priorité",
      "Ralentir obligatoirement à chaque intersection"
    ],
    correct: [1],
    explanation: "Sur une route prioritaire, les autres usagers doivent vous céder le passage. Vous n'êtes pas obligé de ralentir, mais vous devez rester vigilant car certains conducteurs peuvent ne pas respecter les règles. La priorité ne vous dispense pas de prudence.",
    schema: `<svg width="260" height="200" viewBox="0 0 260 200">
  <rect width="260" height="200" fill="#e8f5e9" rx="8"/>
  <!-- Route prioritaire verticale -->
  <rect x="100" y="0" width="60" height="200" fill="#888"/>
  <rect x="128" y="0" width="4" height="80" fill="white"/>
  <rect x="128" y="120" width="4" height="80" fill="white"/>
  <!-- Route secondaire horizontale -->
  <rect x="0" y="80" width="100" height="40" fill="#888"/>
  <rect x="160" y="80" width="100" height="40" fill="#888"/>
  <!-- Panneau route prioritaire (losange jaune) -->
  <rect x="165" y="10" width="14" height="14" rx="1" fill="#fdd835" transform="rotate(45 172 17)"/>
  <rect x="165" y="10" width="14" height="14" rx="1" fill="none" stroke="#333" stroke-width="1" transform="rotate(45 172 17)"/>
  <!-- Votre voiture (vert = prioritaire) -->
  <rect x="108" y="130" width="22" height="35" rx="4" fill="#2ecc71"/>
  <text x="112" y="150" fill="white" font-size="9" font-weight="bold" font-family="Inter,sans-serif">A</text>
  <!-- Voiture secondaire (doit céder) -->
  <rect x="55" y="86" width="30" height="18" rx="3" fill="#f39c12"/>
  <text x="63" y="98" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">B</text>
  <!-- Cédez le passage pour B -->
  <polygon points="92,82 98,72 86,72" fill="white" stroke="red" stroke-width="1.5"/>
  <text x="170" y="195" fill="#2e7d32" font-size="9" font-weight="bold" font-family="Inter,sans-serif">A prioritaire</text>
</svg>`,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "En 2026, quelle est la règle de priorité pour un cycliste qui sort d'une piste cyclable pour traverser une intersection ?",
    answers: [
      "Le cycliste est toujours prioritaire sur tous les véhicules",
      "Le cycliste suit les règles générales : priorité à droite ou selon la signalisation",
      "Le cycliste doit toujours s'arrêter et attendre",
      "Le cycliste est prioritaire uniquement s'il a un casque"
    ],
    correct: [1],
    explanation: "Depuis la réforme 2022 et confirmée en 2026 : les cyclistes en piste cyclable balisée et à une intersection dotée d'un marquage 'cédez le passage' pour les véhicules motorisés sont prioritaires. Sinon, les règles générales d'intersection s'appliquent. La signalisation prime sur la règle de priorité à droite.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Un véhicule d'urgence (police, ambulance) arrive en sens inverse avec gyrophare et sirène. Que faites-vous ?",
    answers: [
      "Vous accélérez pour dégager rapidement la voie",
      "Vous vous garez sur le côté droit et laissez passer",
      "Vous continuez normalement, il peut doubler",
      "Vous vous arrêtez au milieu de la route"
    ],
    correct: [1],
    explanation: "Face à un véhicule d'urgence avec gyrophare ET sirène, vous devez faciliter son passage en vous rangeant sur le côté droit de la chaussée et en réduisant votre vitesse ou en vous arrêtant si nécessaire. Ne jamais freiner brutalement ni s'arrêter en pleine voie.",
    schema: `<svg width="280" height="120" viewBox="0 0 280 120">
  <rect width="280" height="120" fill="#e8f5e9" rx="8"/>
  <!-- Route 2 voies -->
  <rect x="0" y="35" width="280" height="55" fill="#888"/>
  <rect x="0" y="60" width="280" height="3" fill="white" stroke-dasharray="12 8"/>
  <!-- Ligne centrale discontinue -->
  <rect x="10" y="60" width="18" height="3" fill="white"/>
  <rect x="45" y="60" width="18" height="3" fill="white"/>
  <rect x="80" y="60" width="18" height="3" fill="white"/>
  <rect x="115" y="60" width="18" height="3" fill="white"/>
  <rect x="150" y="60" width="18" height="3" fill="white"/>
  <rect x="185" y="60" width="18" height="3" fill="white"/>
  <rect x="220" y="60" width="18" height="3" fill="white"/>
  <!-- Votre voiture (rouge) - se range à droite -->
  <rect x="200" y="68" width="30" height="16" rx="3" fill="#e74c3c"/>
  <text x="207" y="79" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">Vous</text>
  <!-- Véhicule urgence (bleu) - sens inverse -->
  <rect x="50" y="40" width="35" height="16" rx="3" fill="#3498db"/>
  <text x="51" y="51" fill="white" font-size="7" font-weight="bold" font-family="Inter,sans-serif">SAMU</text>
  <!-- Gyrophare -->
  <circle cx="67" cy="38" r="4" fill="#2196f3" opacity="0.8"/>
  <circle cx="67" cy="38" r="6" fill="none" stroke="#2196f3" stroke-width="1" opacity="0.5"/>
  <!-- Flèche direction urgence -->
  <path d="M85 48 L95 48" stroke="#3498db" stroke-width="2" marker-end="url(#arrU)"/>
  <!-- Flèche vous -->
  <path d="M195 76 L185 76" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrU)"/>
  <text x="70" y="108" fill="#1565c0" font-size="9" font-weight="bold" font-family="Inter,sans-serif">→ Se ranger à droite + ralentir</text>
  <defs>
    <marker id="arrU" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L5,2.5 z" fill="#333"/>
    </marker>
  </defs>
</svg>`,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Dans un giratoire (rond-point), qui est prioritaire ?",
    answers: [
      "Les véhicules qui entrent dans le giratoire",
      "Les véhicules déjà engagés dans le giratoire",
      "Le véhicule arrivant par la droite",
      "Le plus grand véhicule"
    ],
    correct: [1],
    explanation: "Dans un giratoire signalisé par un panneau 'Vous n'avez pas la priorité', les véhicules ENGAGÉS dans le giratoire sont prioritaires. Les entrants doivent céder le passage. C'est l'inverse du carrefour classique. Attention : quelques anciens giratoires en France conservent encore la priorité à l'entrée (rare).",
    schema: `<svg width="260" height="200" viewBox="0 0 260 200">
  <rect width="260" height="200" fill="#e8f5e9" rx="8"/>
  <!-- Rond-point central -->
  <circle cx="130" cy="100" r="50" fill="none" stroke="#888" stroke-width="28"/>
  <circle cx="130" cy="100" r="50" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="6 4"/>
  <!-- Ilot central -->
  <circle cx="130" cy="100" r="22" fill="#4caf50" stroke="#388e3c" stroke-width="2"/>
  <!-- Routes d'accès -->
  <rect x="110" y="0" width="40" height="30" fill="#888"/>
  <rect x="110" y="170" width="40" height="30" fill="#888"/>
  <rect x="0" y="80" width="30" height="40" fill="#888"/>
  <rect x="230" y="80" width="30" height="40" fill="#888"/>
  <!-- Voiture A - dans le giratoire (prioritaire) -->
  <rect x="155" y="58" width="20" height="12" rx="3" fill="#2ecc71" transform="rotate(30 165 64)"/>
  <text x="158" y="67" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">A</text>
  <!-- Voiture B - entrant -->
  <rect x="118" y="158" width="20" height="12" rx="3" fill="#e74c3c"/>
  <text x="122" y="167" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">B</text>
  <!-- Flèche priorité -->
  <text x="60" y="190" fill="#2e7d32" font-size="9" font-weight="bold" font-family="Inter,sans-serif">A prioritaire (engagé)</text>
</svg>`,
    tags: []
  },

  // --- Priorités : questions supplémentaires ---
  {
    series: 'priorites',
    difficulty: 1,
    text: "Vous arrivez à une intersection avec un panneau STOP. Que devez-vous faire ?",
    answers: ["Ralentir et passer si la voie est libre", "Marquer un arrêt complet puis repartir quand la voie est libre", "Céder le passage sans forcément vous arrêter", "Klaxonner et passer"],
    correct: [1],
    explanation: "Le panneau STOP impose un arrêt complet du véhicule, même si aucun autre usager n'est visible. Vous devez vous arrêter à la ligne d'arrêt (ou à la limite de la chaussée abordée) puis céder le passage à tous les usagers circulant sur la route prioritaire.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "Que signifie un panneau triangulaire pointe en bas avec un bord rouge (cédez le passage) ?",
    answers: ["Vous devez vous arrêter obligatoirement", "Vous devez céder le passage sans obligation de vous arrêter si la voie est libre", "Vous êtes sur une route prioritaire", "Interdiction de tourner à droite"],
    correct: [1],
    explanation: "Le panneau 'Cédez le passage' (triangle inversé) impose de laisser passer les véhicules sur la route prioritaire. Contrairement au STOP, il n'impose pas d'arrêt complet si la voie est dégagée. Vous devez toutefois être prêt à vous arrêter si nécessaire.",
    schema: `<svg width="260" height="200" viewBox="0 0 260 200">
  <rect width="260" height="200" fill="#e8f5e9" rx="8"/>
  <!-- Route prioritaire horizontale -->
  <rect x="0" y="80" width="260" height="40" fill="#888"/>
  <rect x="0" y="98" width="260" height="4" fill="white" stroke-dasharray="12 8"/>
  <!-- Route secondaire (vous) -->
  <rect x="110" y="120" width="40" height="80" fill="#888"/>
  <!-- Panneau cédez le passage (triangle inversé) -->
  <polygon points="90,130 80,145 100,145" fill="white" stroke="#c0392b" stroke-width="2.5"/>
  <!-- Voiture prioritaire (sur route prio) -->
  <rect x="30" y="84" width="30" height="16" rx="3" fill="#2ecc71"/>
  <text x="37" y="95" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">B</text>
  <!-- Flèche direction B -->
  <path d="M62 92 L75 92" stroke="#2ecc71" stroke-width="2" marker-end="url(#arrC)"/>
  <!-- Votre voiture -->
  <rect x="118" y="155" width="22" height="30" rx="3" fill="#e74c3c"/>
  <text x="122" y="173" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">A</text>
  <text x="140" y="190" fill="#c0392b" font-size="9" font-weight="bold" font-family="Inter,sans-serif">A doit céder</text>
  <defs>
    <marker id="arrC" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L5,2.5 z" fill="#2ecc71"/>
    </marker>
  </defs>
</svg>`,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "Un tramway arrive à une intersection en même temps que vous. Qui est prioritaire ?",
    answers: ["Vous, car vous êtes à sa droite", "Le tramway, il est toujours prioritaire sauf signalisation contraire", "Celui qui arrive le premier", "Aucun, vous devez tous les deux vous arrêter"],
    correct: [1],
    explanation: "Le tramway bénéficie d'une priorité absolue sur tous les autres usagers dans la quasi-totalité des situations. Seuls les feux rouges ou une signalisation spécifique peuvent suspendre sa priorité. Il faut toujours lui céder le passage.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "En approchant d'un passage à niveau sans barrière, un feu rouge clignote. Que faites-vous ?",
    answers: ["Vous accélérez pour passer rapidement", "Vous vous arrêtez impérativement : un train approche", "Vous ralentissez et passez prudemment", "Vous klaxonnez pour prévenir le train"],
    correct: [1],
    explanation: "Un feu rouge clignotant à un passage à niveau signifie qu'un train approche ou est en train de passer. L'arrêt est obligatoire avant la ligne d'arrêt. Le non-respect de ce signal est extrêmement dangereux et passible d'une amende de 4e classe et d'un retrait de 4 points.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "Sur une route de montagne étroite ne permettant pas le croisement, qui doit reculer ?",
    answers: ["Le véhicule qui descend doit reculer pour laisser passer celui qui monte", "Le véhicule qui monte doit reculer", "Le plus petit véhicule", "Le dernier arrivé"],
    correct: [0],
    explanation: "Sur une route de montagne étroite, le véhicule descendant doit reculer pour laisser la priorité au véhicule montant, car il est plus difficile et dangereux de redémarrer en côte. Exception : si une place d'évitement est plus proche du véhicule montant, c'est lui qui manœuvre.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "À un carrefour à feux, le feu passe au vert pour vous. Pouvez-vous vous engager immédiatement ?",
    answers: ["Oui, sans vérification", "Oui, mais en vérifiant que l'intersection est dégagée et qu'aucun piéton ne traverse", "Non, vous devez attendre 3 secondes", "Seulement si un agent vous fait signe"],
    correct: [1],
    explanation: "Même au feu vert, vous devez vous assurer que l'intersection est libre (un véhicule peut finir de traverser au rouge) et qu'aucun piéton n'est engagé sur le passage. Le feu vert autorise le passage mais n'exonère pas de la vigilance.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Vous êtes dans un giratoire et souhaitez prendre la 3e sortie. Quand devez-vous mettre le clignotant droit ?",
    answers: ["Dès l'entrée dans le giratoire", "Après avoir passé la 2e sortie, avant la 3e", "Jamais, ce n'est pas obligatoire dans un giratoire", "Uniquement en sortant du giratoire"],
    correct: [1],
    explanation: "Dans un giratoire, le clignotant droit s'active pour signaler votre intention de sortir. Vous devez le mettre après avoir dépassé la sortie précédant la vôtre, pour indiquer aux autres usagers que vous allez quitter le giratoire à la prochaine sortie.",
    schema: `<svg width="260" height="200" viewBox="0 0 260 200">
  <rect width="260" height="200" fill="#e8f5e9" rx="8"/>
  <!-- Rond-point -->
  <circle cx="130" cy="100" r="50" fill="none" stroke="#888" stroke-width="26"/>
  <circle cx="130" cy="100" r="22" fill="#4caf50" stroke="#388e3c" stroke-width="2"/>
  <!-- Sorties numérotées -->
  <rect x="110" y="0" width="40" height="28" fill="#888"/>
  <text x="124" y="20" fill="white" font-size="10" font-weight="bold" font-family="Inter,sans-serif">S1</text>
  <rect x="230" y="80" width="30" height="40" fill="#888"/>
  <text x="238" y="104" fill="white" font-size="10" font-weight="bold" font-family="Inter,sans-serif">S2</text>
  <rect x="110" y="172" width="40" height="28" fill="#888"/>
  <text x="124" y="190" fill="white" font-size="10" font-weight="bold" font-family="Inter,sans-serif">S3</text>
  <rect x="0" y="80" width="30" height="40" fill="#888"/>
  <text x="8" y="104" fill="white" font-size="10" font-weight="bold" font-family="Inter,sans-serif">E</text>
  <!-- Voiture entrant depuis E -->
  <rect x="35" y="92" width="22" height="14" rx="3" fill="#e74c3c"/>
  <!-- Clignotant droit activé avant S3 -->
  <circle cx="130" cy="148" r="4" fill="#f39c12"/>
  <circle cx="130" cy="148" r="7" fill="#f39c12" opacity="0.3"/>
  <text x="55" y="190" fill="#333" font-size="8" font-family="Inter,sans-serif">Clignotant → après S2</text>
</svg>`,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "À une intersection, un agent de police lève le bras verticalement. Que signifie ce geste ?",
    answers: ["Vous pouvez passer", "Arrêt pour tous les usagers venant de toutes les directions", "Seuls les piétons peuvent traverser", "Feu vert dans votre direction"],
    correct: [1],
    explanation: "Un agent levant le bras verticalement ordonne l'arrêt de tous les usagers dans toutes les directions. Ce geste prépare généralement un changement de phase de circulation. Les signaux de l'agent prévalent sur les feux et la signalisation.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Vous arrivez à une intersection où deux routes se croisent sans aucune signalisation. Trois véhicules arrivent simultanément (un de droite, un de gauche, un en face). Qui passe en premier ?",
    answers: ["Le véhicule en face de vous", "Le véhicule venant de votre droite", "Le véhicule venant de votre gauche", "Vous, car vous êtes arrivé en premier"],
    correct: [1],
    explanation: "En l'absence de signalisation, la priorité à droite s'applique systématiquement. Le véhicule venant de votre droite passe en premier. Ensuite, le véhicule pour lequel il n'y a plus personne à droite passe, et ainsi de suite.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Un véhicule de pompiers arrive derrière vous avec gyrophare et sirène. Que devez-vous faire ? (plusieurs réponses)",
    answers: ["Vous ranger sur le côté droit pour lui libérer le passage", "Ralentir et faciliter sa progression", "Créer un couloir de secours si vous êtes sur autoroute", "Accélérer pour ne pas le gêner devant vous"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Face à un véhicule prioritaire en intervention : se ranger à droite, ralentir pour faciliter le passage, et sur autoroute créer un couloir de secours (voie de gauche se décale à gauche, autres voies à droite). Accélérer est dangereux et interdit.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "À un carrefour, le feu est rouge mais une flèche verte clignotante indique la direction droite. Que pouvez-vous faire ?",
    answers: ["Rien, le feu est rouge", "Tourner à droite en cédant le passage aux piétons et aux véhicules venant de la gauche", "Tourner à droite sans précaution particulière", "Aller tout droit et à droite"],
    correct: [1],
    explanation: "La flèche verte clignotante (ou flèche d'autorisation conditionnelle de tourne-à-droite) permet de tourner à droite malgré le feu rouge, mais en cédant le passage à tous les usagers ayant le feu vert, notamment les piétons qui traversent.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Sur une route à double sens, vous croisez un véhicule sur une section étroite. Qui doit céder le passage ?",
    answers: ["Toujours le véhicule le plus large", "Celui qui a un obstacle de son côté de la chaussée", "Toujours celui qui monte", "Celui qui roule le moins vite"],
    correct: [1],
    explanation: "Lorsqu'un obstacle (véhicule stationné, travaux) se trouve de votre côté de la chaussée, c'est à vous de céder le passage aux véhicules arrivant en face. Vous devez attendre que la voie soit libre avant de déboîter pour contourner l'obstacle.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "En 2026, dans une zone de rencontre (zone 20), quel usager est prioritaire ?",
    answers: ["Les véhicules motorisés", "Les cyclistes uniquement", "Les piétons, qui peuvent circuler sur toute la chaussée", "Personne, c'est la priorité à droite qui s'applique"],
    correct: [2],
    explanation: "Dans une zone de rencontre (limitée à 20 km/h), les piétons sont prioritaires sur tous les véhicules. Ils peuvent circuler sur toute la largeur de la chaussée. Les conducteurs doivent rouler au pas et être prêts à s'arrêter à tout moment. Les cyclistes peuvent circuler dans les deux sens.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Quatre véhicules arrivent simultanément aux 4 branches d'un carrefour en croix sans signalisation. Que se passe-t-il ?",
    answers: ["Le plus grand véhicule passe en premier", "Chacun attend le départ de celui à sa droite : situation de blocage nécessitant la courtoisie", "Tous passent en même temps", "Le véhicule venant du nord est toujours prioritaire"],
    correct: [1],
    explanation: "Quand quatre véhicules se font face aux quatre branches d'une intersection sans signalisation, chacun a un véhicule à sa droite. C'est une situation de blocage théorique. En pratique, un conducteur prend l'initiative de céder le passage par courtoisie, débloquant la situation.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Un bus quitte son arrêt en agglomération et met son clignotant. Devez-vous lui céder le passage ?",
    answers: ["Non, la priorité à droite s'applique normalement", "Oui, en agglomération un bus qui quitte son arrêt est prioritaire si la vitesse est limitée à 50 km/h ou moins", "Seulement si c'est un bus scolaire", "Seulement si un agent de police l'ordonne"],
    correct: [1],
    explanation: "En agglomération (zones limitées à 50 km/h ou moins), les bus de transport en commun quittant leur arrêt sont prioritaires. Vous devez ralentir ou vous arrêter pour les laisser se réinsérer dans la circulation. Cette règle ne s'applique pas hors agglomération.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "En 2026, un cycliste arrivant par une piste cyclable traversant une intersection avec un sas vélo et un feu spécifique vélo au vert : a-t-il la priorité sur les voitures ayant aussi un feu vert ?",
    answers: ["Non, les voitures ont toujours la priorité", "Oui, le feu vélo lui donne une phase d'avance et il est prioritaire dans son mouvement", "Seulement s'il porte un gilet jaune", "Seulement dans les zones 30"],
    correct: [1],
    explanation: "Le feu spécifique vélo (souvent un petit feu avec pictogramme vélo) donne au cycliste une phase d'avance de quelques secondes avant le feu vert voitures. Pendant cette phase, le cycliste est engagé et prioritaire. Même après le feu vert voitures, le cycliste déjà engagé conserve sa priorité.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Un tramway s'engage dans un carrefour alors que son feu est rouge. Devez-vous lui céder le passage ?",
    answers: ["Oui, le tramway est toujours prioritaire même au feu rouge", "Non, si son feu est rouge il doit s'arrêter comme tout le monde", "Oui, mais seulement si sa sirène est active", "Seulement si un agent vous fait signe"],
    correct: [1],
    explanation: "Contrairement à une idée reçue, le tramway doit respecter ses propres feux de signalisation (signaux T ou feux classiques). S'il grille un feu rouge, c'est une erreur de sa part. Cependant, en pratique, vu sa masse et son incapacité à s'arrêter rapidement, il faut éviter toute collision.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Vous sortez d'un chemin de terre pour rejoindre une route goudronnée. Qui est prioritaire ?",
    answers: ["Vous, car vous venez de la droite", "Les véhicules circulant sur la route goudronnée", "Celui qui arrive le premier", "Personne, la priorité à droite s'applique"],
    correct: [1],
    explanation: "Un véhicule débouchant d'un chemin de terre, d'un sentier, ou d'un accès privé sur une route ouverte à la circulation doit toujours céder le passage aux usagers de cette route. La priorité à droite ne s'applique pas lorsqu'on sort d'un accès non prioritaire.",
    schema: null,
    tags: []
  },

  // ===== VITESSES =====
  {
    series: 'vitesses',
    difficulty: 1,
    text: "Quelle est la vitesse maximale autorisée sur une route nationale à double sens en France (hors agglomération) ?",
    answers: ["90 km/h", "110 km/h", "80 km/h", "100 km/h"],
    correct: [2],
    explanation: "Depuis le 1er juillet 2018, la vitesse maximale sur les routes nationales et départementales à double sens, sans séparateur central, hors agglomération, est de 80 km/h. Cette mesure a été introduite pour réduire le nombre de morts sur ces routes, souvent lieux d'accidents graves.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Sur autoroute, il commence à pleuvoir. Quelle est la vitesse maximale autorisée (dans des conditions normales de visibilité) ?",
    answers: ["130 km/h", "110 km/h", "100 km/h", "90 km/h"],
    correct: [1],
    explanation: "Par temps de pluie sur autoroute, la vitesse est limitée à 110 km/h (au lieu de 130 km/h par temps sec). En cas de brouillard ou pluie verglaçante réduisant la visibilité à moins de 50 mètres, la limite tombe à 50 km/h. Ces règles s'appliquent aussi aux voies express.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Vous venez d'obtenir votre permis. Quelle est votre vitesse maximale la 1ère année sur autoroute ?",
    answers: ["130 km/h", "110 km/h", "100 km/h", "90 km/h"],
    correct: [1],
    explanation: "Les conducteurs en période probatoire (3 ans si conduite accompagnée, 2 ans sinon) ont des limites réduites : 110 km/h sur autoroute (au lieu de 130), 100 km/h sur voie express (au lieu de 110) et 80 km/h sur route nationale (idem). Ces limites s'appliquent dès le premier jour du permis.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "À 90 km/h sur route sèche, quelle est approximativement la distance totale d'arrêt (réaction + freinage) ?",
    answers: ["30 mètres", "50 mètres", "70 mètres", "100 mètres"],
    correct: [2],
    explanation: "À 90 km/h, la distance totale d'arrêt se décompose en : distance de réaction ≈ 25 m (1 seconde) + distance de freinage ≈ 40-45 m = environ 70 m au total sur route sèche. Formule simplifiée du freinage seul : (vitesse ÷ 10)² ÷ 2. Sur route mouillée, la distance de freinage double.",
    schema: `<svg width="280" height="100" viewBox="0 0 280 100">
      <rect width="280" height="100" fill="#e3f2fd" rx="8"/>
      <rect x="0" y="50" width="280" height="30" fill="#888"/>
      <!-- Voiture -->
      <rect x="10" y="30" width="40" height="22" rx="5" fill="#1a73e8"/>
      <text x="18" y="44" fill="white" font-size="9" font-weight="bold" font-family="Inter">90km/h</text>
      <!-- Flèche distance réaction -->
      <path d="M50 41 L120 41" stroke="#fbbc04" stroke-width="2.5" marker-end="url(#ay)"/>
      <text x="60" y="36" fill="#b06e00" font-size="9" font-family="Inter">~25m réaction</text>
      <!-- Flèche freinage -->
      <path d="M120 41 L230 41" stroke="#ea4335" stroke-width="2.5" marker-end="url(#are)"/>
      <text x="148" y="36" fill="#b71c1c" font-size="9" font-family="Inter">~30m freinage</text>
      <!-- Stop -->
      <rect x="228" y="28" width="14" height="24" rx="3" fill="#ea4335"/>
      <text x="229" y="41" fill="white" font-size="7" font-weight="bold" font-family="Inter">STOP</text>
      <!-- Total -->
      <text x="60" y="88" fill="#1a73e8" font-size="11" font-weight="bold" font-family="Inter">Total ≈ 55 mètres à 90 km/h</text>
      <defs>
        <marker id="ay" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#fbbc04"/>
        </marker>
        <marker id="are" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#ea4335"/>
        </marker>
      </defs>
    </svg>`,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "En agglomération, quelle est la vitesse maximale par défaut (sans panneau spécifique) ?",
    answers: ["30 km/h", "50 km/h", "45 km/h", "70 km/h"],
    correct: [1],
    explanation: "En agglomération, la vitesse maximale par défaut est 50 km/h, sauf panneaux indiquant une zone 30 ou zone de rencontre (20 km/h). De nombreuses villes françaises abaissent progressivement leurs agglomérations à 30 km/h. La limite commence dès le panneau 'd'entrée d'agglomération'.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Quelle est la vitesse autorisée dans une zone de rencontre ?",
    answers: ["5 km/h", "20 km/h", "30 km/h", "10 km/h"],
    correct: [1],
    explanation: "Dans une zone de rencontre, la vitesse est limitée à 20 km/h. Les piétons y sont prioritaires sur tous les véhicules et peuvent circuler sur toute la chaussée. Ces zones se trouvent souvent dans les quartiers piétonniers ou autour des marchés. Les cyclistes y circulent dans les deux sens.",
    schema: null,
    tags: []
  },

  // ===== ALCOOL =====
  {
    series: 'alcool',
    difficulty: 1,
    text: "Quel est le taux d'alcoolémie maximal autorisé pour un conducteur confirmé (permis > 3 ans) ?",
    answers: ["0,2 g/L de sang", "0,5 g/L de sang", "0,8 g/L de sang", "0,3 g/L de sang"],
    correct: [1],
    explanation: "Le taux légal maximum est 0,5 g/L de sang (ou 0,25 mg/L d'air expiré) pour un conducteur confirmé. Au-delà, c'est une infraction. À partir de 0,8 g/L, c'est une contravention de 5ème classe pouvant aller jusqu'à des poursuites pénales.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 1,
    text: "Quel est le taux d'alcoolémie maximal pour un jeune conducteur (permis < 3 ans) ou conducteur accompagné ?",
    answers: ["0,5 g/L", "0,3 g/L", "0,2 g/L", "0,1 g/L"],
    correct: [2],
    explanation: "Pour les conducteurs en période probatoire (moins de 3 ans de permis), conducteurs de transports en commun, poids lourds et accompagnateurs de conduite accompagnée, le taux légal est 0,2 g/L de sang (0,10 mg/L d'air expiré). C'est pratiquement une tolérance zéro alcool.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Quelle est la sanction pour conduite sous l'emprise d'alcool entre 0,5 et 0,8 g/L ?",
    answers: [
      "Amende de 135 € et 6 points retirés",
      "Amende de 750 € et annulation du permis",
      "Suspension immédiate du permis et prison",
      "Amende de 45 € et avertissement"
    ],
    correct: [0],
    explanation: "Entre 0,5 et 0,8 g/L de sang, c'est une contravention de 4e classe : amende forfaitaire de 135 € et retrait de 6 points sur le permis. Le permis peut être suspendu jusqu'à 3 ans. Au-delà de 0,8 g/L, c'est un délit pénal (2 ans d'emprisonnement, 4 500 € d'amende, 6 points retirés).",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "La prise de certains médicaments peut-elle entraîner une infraction au code de la route ?",
    answers: [
      "Non, seul l'alcool et les stupéfiants sont contrôlés",
      "Oui, si le médicament altère les capacités de conduite et que le conducteur en était informé",
      "Oui, mais seulement les médicaments de niveau 3 (pictogramme rouge)",
      "Non, la responsabilité appartient au médecin prescripteur"
    ],
    correct: [1, 2],
    multi: true,
    explanation: "Deux bonnes réponses. Les médicaments sont classés en 3 niveaux de risque (pictogrammes jaune, orange, rouge). Les médicaments de niveaux 2 (orange) et 3 (rouge) peuvent altérer la conduite. Si le conducteur conduit malgré les avertissements, il engage sa responsabilité. Certains médicaments de niveau 3 interdisent formellement de conduire. En cas d'accident, la responsabilité pénale peut être engagée.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Un conducteur est contrôlé positif aux stupéfiants. Quelle est la sanction minimale ?",
    answers: [
      "Amende de 135 € et 3 points",
      "Amende de 4 500 €, 2 ans d'emprisonnement et retrait de 6 points",
      "Simple avertissement et test urinaire",
      "Suspension du permis 1 mois"
    ],
    correct: [1],
    explanation: "Conduire après usage de stupéfiants est un DÉLIT : 2 ans d'emprisonnement, 4 500 € d'amende, retrait de 6 points, suspension ou annulation du permis jusqu'à 3 ans. En cas de cumul avec alcool (0,2 g/L), les peines sont portées à 3 ans et 9 000 €. Aucun seuil légal minimum : toute trace est infractionnelle.",
    schema: null,
    tags: []
  },

  // ===== SECOURS =====
  {
    series: 'secours',
    difficulty: 1,
    text: "En cas d'accident, quel est le premier réflexe à avoir ?",
    answers: [
      "Appeler immédiatement le 15 (SAMU)",
      "Sécuriser les lieux (gilet, triangle), puis alerter les secours",
      "Déplacer les blessés pour les mettre à l'abri",
      "Prendre les photos pour l'assurance"
    ],
    correct: [1],
    explanation: "Le premier réflexe est S-A-U-V : Sécuriser (couper le contact, mettre le gilet, placer le triangle à 30m), Alerter (15 SAMU, 17 Police, 18 Pompiers ou 112), Ue (Ue pour univers... non). On retient : PROTÉGER les lieux, ALERTER les secours, SECOURIR sans aggraver. Ne jamais déplacer un blessé sauf danger immédiat.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Un blessé est inconscient mais respire normalement. Que faites-vous ?",
    answers: [
      "Lui faire du bouche-à-bouche immédiatement",
      "Le laisser sur le dos et surveiller sa respiration",
      "Le placer en position latérale de sécurité (PLS)",
      "Le retourner sur le ventre"
    ],
    correct: [2],
    explanation: "Une personne inconsciente mais respirante doit être placée en Position Latérale de Sécurité (PLS) : allongée sur le côté, bouche ouverte vers le bas pour éviter l'étouffement par vomissements. Si elle ne respire PAS, il faut pratiquer la réanimation cardio-pulmonaire (RCP) et utiliser un défibrillateur si disponible.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Lors d'un appel au 15 (SAMU) pour un accident de la route, quelles informations fournir en priorité ?",
    answers: [
      "Votre nom et numéro de sécurité sociale",
      "Localisation précise, nombre de victimes, état apparent, dangers",
      "Heure de l'accident et marque des véhicules",
      "Numéro de plaque et compagnie d'assurance"
    ],
    correct: [1],
    explanation: "Lors d'un appel aux secours, fournissez dans l'ordre : 1) Localisation précise (lieu-dit, borne kilométrique, GPS), 2) Nature de l'accident, 3) Nombre de victimes et état (conscient, saignement, etc.), 4) Dangers présents (feu, déversement). Ne raccrochez pas en premier — attendez les instructions du régulateur.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Lors d'une panne ou d'un accident sur autoroute, à quelle distance minimum placez-vous le triangle de présignalisation ?",
    answers: ["10 mètres", "30 mètres", "100 mètres", "150 mètres"],
    correct: [2],
    explanation: "Sur autoroute ou voie rapide, le triangle doit être placé à au moins 100 mètres en amont du véhicule accidenté. Sur route ordinaire, 30 mètres suffisent. Le gilet de sécurité doit être enfilé AVANT de sortir du véhicule (même sur le bas-côté). Ces équipements sont obligatoires et leur absence est verbalisable.",
    schema: `<svg width="270" height="130" viewBox="0 0 270 130" xmlns="http://www.w3.org/2000/svg">
  <rect width="270" height="130" fill="#e8f5e9" rx="8"/>
  <rect x="0" y="60" width="270" height="50" fill="#888"/>
  <rect x="0" y="60" width="270" height="4" fill="#ffeb3b"/>
  <rect x="0" y="106" width="270" height="4" fill="#ffeb3b"/>
  <rect x="30" y="68" width="50" height="24" rx="4" fill="#e74c3c"/>
  <text x="35" y="83" fill="white" font-size="8" font-family="Inter,sans-serif" font-weight="bold">Voiture</text>
  <polygon points="100,40 112,60 88,60" fill="#e74c3c" stroke="#c0392b" stroke-width="1.5"/>
  <text x="78" y="72" fill="#c0392b" font-size="7" font-family="Inter,sans-serif">▲ Triangle</text>
  <text x="78" y="82" fill="#c0392b" font-size="7" font-family="Inter,sans-serif">30m derrière</text>
  <line x1="80" y1="84" x2="80" y2="95" stroke="#c0392b" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="88" y="20" fill="#2e7d32" font-size="9" font-family="Inter,sans-serif" font-weight="bold">Pré-signalisation d'urgence</text>
  <text x="88" y="33" fill="#555" font-size="8" font-family="Inter,sans-serif">Triangle à 30m minimum</text>
</svg>`,
    tags: []
  },

  // ===== ÉCLAIRAGES =====
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Quand devez-vous allumer vos feux de croisement (codes) de jour ? (plusieurs réponses)",
    answers: ["En cas de pluie forte ou de brouillard", "Dans un tunnel, même éclairé", "Par temps de neige", "Toujours, même par beau temps sur autoroute"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Les feux de croisement doivent être allumés de jour en cas de visibilité réduite (pluie, brouillard, neige) et obligatoirement dans les tunnels. Par beau temps, les feux diurnes (DRL) suffisent. Sur autoroute par beau temps, pas besoin des feux de croisement.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "À quelle distance devez-vous passer des feux de croisement (codes) quand vous croisez un véhicule la nuit ?",
    answers: ["100 mètres", "150 mètres", "200 mètres", "50 mètres"],
    correct: [2],
    explanation: "Vous devez passer en feux de croisement (codes) dès que vous apercevez un véhicule en sens inverse, c'est-à-dire à environ 200 mètres. Cette règle vise à ne pas éblouir le conducteur venant en face. Les feux de route (pleins phares) sont autorisés uniquement hors agglomération quand personne n'est ébloui.",
    schema: `<svg width="280" height="120" viewBox="0 0 280 120">
  <rect width="280" height="120" fill="#1a237e" rx="8"/>
  <!-- Route nuit -->
  <rect x="0" y="50" width="280" height="35" fill="#424242"/>
  <!-- Ligne centrale -->
  <rect x="30" y="66" width="15" height="2" fill="#fdd835" opacity="0.6"/>
  <rect x="70" y="66" width="15" height="2" fill="#fdd835" opacity="0.6"/>
  <rect x="110" y="66" width="15" height="2" fill="#fdd835" opacity="0.6"/>
  <rect x="150" y="66" width="15" height="2" fill="#fdd835" opacity="0.6"/>
  <rect x="190" y="66" width="15" height="2" fill="#fdd835" opacity="0.6"/>
  <!-- Votre voiture -->
  <rect x="30" y="70" width="28" height="14" rx="3" fill="#e74c3c"/>
  <!-- Feux de route (plein phares) -->
  <path d="M58 74 L120 64 L120 84 z" fill="#fff9c4" opacity="0.3"/>
  <!-- Voiture en face -->
  <rect x="210" y="54" width="28" height="14" rx="3" fill="#3498db"/>
  <!-- Distance 200m -->
  <line x1="60" y1="44" x2="210" y2="44" stroke="#fdd835" stroke-width="1" stroke-dasharray="4 2"/>
  <text x="110" y="40" fill="#fdd835" font-size="9" font-weight="bold" font-family="Inter,sans-serif">≈ 200m</text>
  <text x="50" y="108" fill="#fff" font-size="9" font-weight="bold" font-family="Inter,sans-serif">Passer en codes à 200m (ne pas éblouir)</text>
</svg>`,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Les feux de brouillard arrière (rouge) peuvent-ils être utilisés en l'absence de brouillard ?",
    answers: [
      "Oui, ils sont plus visibles et donc plus sûrs",
      "Non, ils éblouissent les conducteurs suivants et sont interdits sans brouillard",
      "Oui, mais uniquement la nuit",
      "Oui si vous roulez en dessous de 50 km/h"
    ],
    correct: [1],
    explanation: "Les feux de brouillard arrière sont obligatoires uniquement par visibilité inférieure à 50 mètres. Les utiliser sans brouillard est une infraction passible d'une contravention de 2ème classe. Ils éblouissent les conducteurs suivants et masquent vos feux de freinage, augmentant le risque de collision arrière.",
    schema: `<svg width="280" height="120" viewBox="0 0 280 120">
  <rect width="280" height="120" fill="#e3f2fd" rx="8"/>
  <!-- Route -->
  <rect x="0" y="45" width="280" height="40" fill="#888"/>
  <!-- Brouillard (cercles semi-transparents) -->
  <circle cx="40" cy="50" r="25" fill="#b0bec5" opacity="0.3"/>
  <circle cx="80" cy="70" r="30" fill="#b0bec5" opacity="0.25"/>
  <circle cx="120" cy="55" r="20" fill="#b0bec5" opacity="0.35"/>
  <!-- Voiture avant -->
  <rect x="60" y="52" width="30" height="16" rx="3" fill="#3498db"/>
  <!-- Feux brouillard arrière (rouge intense) -->
  <circle cx="90" cy="60" r="3" fill="#f44336"/>
  <circle cx="90" cy="60" r="5" fill="#f44336" opacity="0.3"/>
  <!-- Voiture arrière (éblouie) -->
  <rect x="160" y="52" width="30" height="16" rx="3" fill="#e74c3c"/>
  <text x="165" y="63" fill="white" font-size="7" font-weight="bold" font-family="Inter,sans-serif">Vous</text>
  <!-- Rayons éblouissants -->
  <line x1="93" y1="58" x2="155" y2="56" stroke="#f44336" stroke-width="1" opacity="0.6"/>
  <line x1="93" y1="62" x2="155" y2="64" stroke="#f44336" stroke-width="1" opacity="0.6"/>
  <text x="50" y="105" fill="#c62828" font-size="9" font-weight="bold" font-family="Inter,sans-serif">⚠ Éblouissement si pas de brouillard</text>
</svg>`,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Vos feux de position (veilleuses) suffisent-ils pour circuler de nuit en agglomération ?",
    answers: [
      "Oui, en agglomération l'éclairage public compense",
      "Non, les feux de croisement sont obligatoires dès la tombée de la nuit",
      "Oui si vous roulez à moins de 30 km/h",
      "Cela dépend de l'intensité de l'éclairage public"
    ],
    correct: [1],
    explanation: "Non, les veilleuses (feux de position) ne suffisent jamais pour circuler la nuit. Les feux de croisement (codes) sont obligatoires dès la nuit, même en agglomération. Les veilleuses ne servent qu'au stationnement ou à signaler la présence du véhicule. Conduire de nuit avec seulement les veilleuses est une infraction grave.",
    schema: null,
    tags: []
  },

  // ===== AUTOROUTE =====
  {
    series: 'autoroute',
    difficulty: 1,
    text: "Sur autoroute, quelle est la distance de sécurité minimale à respecter avec le véhicule qui vous précède à 130 km/h ?",
    answers: [
      "50 mètres",
      "Au moins 2 secondes, soit environ 73 mètres",
      "100 mètres",
      "1 tiret de marquage"
    ],
    correct: [1],
    explanation: "La règle officielle impose une distance de sécurité d'au moins 2 secondes. À 130 km/h, cela correspond à environ 73 mètres. Sur autoroute, 2 bandes blanches consécutives (tirets de 38 m espacés de 14 m) permettent d'évaluer cette distance. En cas de pluie, il faut augmenter cette distance.",
    schema: `<svg width="280" height="90" viewBox="0 0 280 90">
      <rect width="280" height="90" fill="#ecf0f1" rx="8"/>
      <rect x="0" y="30" width="280" height="40" fill="#7f8c8d"/>
      <!-- Tirets marquage -->
      <rect x="10" y="48" width="20" height="3" fill="white" rx="1"/>
      <rect x="60" y="48" width="20" height="3" fill="white" rx="1"/>
      <rect x="110" y="48" width="20" height="3" fill="white" rx="1"/>
      <rect x="160" y="48" width="20" height="3" fill="white" rx="1"/>
      <rect x="210" y="48" width="20" height="3" fill="white" rx="1"/>
      <rect x="260" y="48" width="20" height="3" fill="white" rx="1"/>
      <!-- Voiture A -->
      <rect x="10" y="34" width="34" height="18" rx="4" fill="#e74c3c"/>
      <text x="18" y="45" fill="white" font-size="8" font-weight="bold" font-family="Inter">A</text>
      <!-- Voiture B -->
      <rect x="168" y="34" width="34" height="18" rx="4" fill="#3498db"/>
      <text x="176" y="45" fill="white" font-size="8" font-weight="bold" font-family="Inter">B</text>
      <!-- Distance -->
      <path d="M44 43 L168 43" stroke="#fbbc04" stroke-width="2" marker-end="url(#ayd)"/>
      <path d="M168 43 L44 43" stroke="#fbbc04" stroke-width="2" marker-start="url(#ays)"/>
      <text x="72" y="28" fill="#b06e00" font-size="10" font-weight="bold" font-family="Inter">≈ 108m (3 sec)</text>
      <defs>
        <marker id="ayd" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="#fbbc04"/>
        </marker>
        <marker id="ays" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto" markerUnits="strokeWidth">
          <path d="M5,0 L5,5 L0,2.5 z" fill="#fbbc04"/>
        </marker>
      </defs>
    </svg>`,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Sur autoroute à 3 voies, quelle voie devez-vous emprunter en circulation normale ?",
    answers: [
      "La voie du milieu, plus sécurisée",
      "La voie de droite, sauf pour dépasser",
      "N'importe laquelle selon votre convenance",
      "La voie de gauche uniquement si vous roulez à 130 km/h"
    ],
    correct: [1],
    explanation: "Sur autoroute, vous devez obligatoirement circuler sur la voie de droite sauf pour dépasser. 'Rouler sur la file du milieu' sans dépasser est une infraction (dépassement par la droite facilité, amende, perte de points). La voie de gauche n'est utilisée que pour le dépassement.",
    schema: `<svg width="270" height="130" viewBox="0 0 270 130" xmlns="http://www.w3.org/2000/svg">
  <rect width="270" height="130" fill="#e8f5e9" rx="8"/>
  <rect x="0" y="20" width="270" height="95" fill="#666"/>
  <rect x="0" y="50" width="270" height="3" fill="white"/>
  <rect x="0" y="80" width="270" height="3" fill="white"/>
  <line x1="0" y1="20" x2="270" y2="20" stroke="#ffeb3b" stroke-width="3"/>
  <line x1="0" y1="115" x2="270" y2="115" stroke="#ffeb3b" stroke-width="3"/>
  <text x="10" y="40" fill="#ccc" font-size="8" font-family="Inter,sans-serif">Voie gauche</text>
  <text x="10" y="68" fill="#ccc" font-size="8" font-family="Inter,sans-serif">Voie centrale</text>
  <text x="10" y="97" fill="#aaa" font-size="8" font-family="Inter,sans-serif">Voie droite</text>
  <rect x="175" y="88" width="50" height="20" rx="4" fill="#3498db"/>
  <text x="183" y="101" fill="white" font-size="8" font-family="Inter,sans-serif" font-weight="bold">✔ Votre</text>
  <text x="180" y="112" fill="white" font-size="7" font-family="Inter,sans-serif">voiture</text>
  <text x="80" y="12" fill="#2e7d32" font-size="9" font-family="Inter,sans-serif" font-weight="bold">Autoroute — rester à droite</text>
</svg>`,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "En cas de bouchon soudain sur autoroute, que devez-vous faire pour protéger les secours ?",
    answers: [
      "Rouler sur la bande d'arrêt d'urgence (BAU) pour dégager",
      "Mettre vos feux de détresse et créer un couloir de secours entre les deux voies de gauche",
      "Vous arrêter immédiatement où vous êtes",
      "Faire demi-tour pour sortir par le prochain échangeur"
    ],
    correct: [1],
    explanation: "Le couloir de secours (obligatoire en France depuis 2021) : en cas de bouchon, les véhicules sur la voie de gauche se décalent à gauche, ceux sur les autres voies se décalent à droite, créant un couloir central pour les secours. Ne JAMAIS circuler sur la BAU (réservée aux secours). Mettre les feux de détresse dès ralentissement brutal.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Sur autoroute, est-il autorisé de s'arrêter sur la bande d'arrêt d'urgence (BAU) pour se reposer ?",
    answers: [
      "Oui, si vous êtes fatigué c'est plus sûr",
      "Non, la BAU est réservée aux arrêts d'urgence et pannes uniquement",
      "Oui, mais pas plus de 10 minutes",
      "Oui, si vous mettez vos feux de détresse"
    ],
    correct: [1],
    explanation: "La Bande d'Arrêt d'Urgence (BAU) est STRICTEMENT réservée aux arrêts forcés (panne, urgence médicale, etc.). S'y arrêter pour se reposer ou consulter son téléphone est une infraction grave (contravention 4ème classe, 135 € et 3 points). En cas de panne sur BAU : garez-vous, allumez les feux de détresse, sortez côté droit et placez-vous derrière la glissière.",
    schema: `<svg width="280" height="120" viewBox="0 0 280 120">
  <rect width="280" height="120" fill="#e3f2fd" rx="8"/>
  <!-- Autoroute -->
  <rect x="0" y="25" width="280" height="45" fill="#888"/>
  <!-- BAU -->
  <rect x="0" y="70" width="280" height="20" fill="#a0a0a0"/>
  <!-- Ligne continue séparant BAU -->
  <rect x="0" y="69" width="280" height="2" fill="white"/>
  <!-- Voiture garée sur BAU (interdit) -->
  <rect x="140" y="73" width="28" height="14" rx="3" fill="#e74c3c"/>
  <text x="145" y="83" fill="white" font-size="7" font-weight="bold" font-family="Inter,sans-serif">Vous</text>
  <!-- Croix interdit -->
  <line x1="135" y1="72" x2="172" y2="88" stroke="#c62828" stroke-width="2.5"/>
  <line x1="172" y1="72" x2="135" y2="88" stroke="#c62828" stroke-width="2.5"/>
  <!-- Label BAU -->
  <text x="5" y="83" fill="#333" font-size="8" font-weight="bold" font-family="Inter,sans-serif">BAU</text>
  <!-- Info -->
  <text x="30" y="110" fill="#c62828" font-size="9" font-weight="bold" font-family="Inter,sans-serif">✗ BAU = urgences uniquement (135€ + 3 pts)</text>
</svg>`,
    tags: []
  },

  // ===== USAGERS VULNÉRABLES =====
  {
    series: 'vulnerables',
    difficulty: 1,
    text: "À un passage piéton sans feux, un piéton attend sur le trottoir. Que faites-vous ?",
    answers: [
      "Vous continuez si la route est libre",
      "Vous ralentissez et cédez le passage au piéton",
      "Vous klaxonnez pour avertir le piéton",
      "Vous passez en accélérant pour dégager rapidement"
    ],
    correct: [1],
    explanation: "Depuis 2010, un piéton qui ATTEND sur le trottoir à un passage piéton a la priorité. Vous devez céder le passage. En 2022, la règle a été renforcée : le non-respect est une contravention de 4ème classe (135 € et 6 points). Le piéton n'a même pas besoin d'être engagé sur la chaussée.",
    schema: `<svg width="260" height="200" viewBox="0 0 260 200">
  <rect width="260" height="200" fill="#e8f5e9" rx="8"/>
  <!-- Route -->
  <rect x="0" y="80" width="260" height="50" fill="#888"/>
  <!-- Passage piéton (bandes blanches) -->
  <rect x="140" y="80" width="6" height="50" fill="white"/>
  <rect x="150" y="80" width="6" height="50" fill="white"/>
  <rect x="160" y="80" width="6" height="50" fill="white"/>
  <rect x="170" y="80" width="6" height="50" fill="white"/>
  <rect x="180" y="80" width="6" height="50" fill="white"/>
  <!-- Trottoir -->
  <rect x="0" y="130" width="260" height="30" fill="#d7ccc8"/>
  <!-- Piéton sur trottoir (attend) -->
  <circle cx="165" cy="145" r="5" fill="#5d4037"/>
  <line x1="165" y1="150" x2="165" y2="162" stroke="#5d4037" stroke-width="2"/>
  <line x1="165" y1="162" x2="160" y2="172" stroke="#5d4037" stroke-width="2"/>
  <line x1="165" y1="162" x2="170" y2="172" stroke="#5d4037" stroke-width="2"/>
  <!-- Votre voiture -->
  <rect x="50" y="90" width="35" height="18" rx="3" fill="#e74c3c"/>
  <text x="56" y="102" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">Vous</text>
  <!-- Flèche -->
  <path d="M87 99 L100 99" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrP)"/>
  <text x="60" y="50" fill="#2e7d32" font-size="10" font-weight="bold" font-family="Inter,sans-serif">⚠ Piéton prioritaire</text>
  <text x="60" y="65" fill="#555" font-size="8" font-family="Inter,sans-serif">(même s'il attend sur le trottoir)</text>
  <defs>
    <marker id="arrP" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L5,2.5 z" fill="#e74c3c"/>
    </marker>
  </defs>
</svg>`,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "En 2026, quelle est la distance de dépassement minimale pour dépasser un cycliste hors agglomération ?",
    answers: ["0,5 mètre", "1 mètre", "1,5 mètre", "2 mètres"],
    correct: [2],
    explanation: "Hors agglomération, vous devez laisser un écart latéral d'au moins 1,5 mètre entre votre véhicule et le cycliste lors du dépassement. En agglomération, la distance minimale est de 1 mètre. Si l'espace est insuffisant, vous devez attendre une opportunité sûre pour dépasser, même si cela signifie rester derrière le cycliste.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Les trottinettes électriques (EDPM) peuvent-elles circuler sur la chaussée ?",
    answers: [
      "Non, uniquement sur les trottoirs",
      "Oui, sur les pistes cyclables et la chaussée si pas de piste cyclable, à 25 km/h max",
      "Oui, partout à la même vitesse que les voitures",
      "Non, uniquement sur les pistes cyclables"
    ],
    correct: [1],
    explanation: "Les EDPM (engins de déplacement personnel motorisés) comme les trottinettes électriques sont limités à 25 km/h. Ils doivent utiliser les pistes cyclables en priorité. Sur chaussée (si pas de piste), limites de 50 km/h. Interdits sur trottoirs (amende 135 €). Obligatoire : gilet ou dispositif rétroréfléchissant la nuit, feux avant et arrière.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Un poids lourd (>3,5t) stationne à un carrefour. Vous êtes cycliste. Quel est le risque principal et comment l'éviter ?",
    answers: [
      "Risque de chute sur les rainures : rouler lentement",
      "Angle mort : ne jamais se placer sur le côté droit ou arrière du poids lourd",
      "Risque d'éblouissement : utiliser des lunettes",
      "Risque de projections : garder ses distances"
    ],
    correct: [1],
    explanation: "L'angle mort (borgne) des poids lourds est un danger mortel. Les conducteurs de PL ne voient pas ce qui se trouve sur leur côté droit et à l'arrière. Depuis 2021 (renforcé en 2026), les PL > 3,5t doivent afficher des autocollants 'angles morts'. Règle absolue pour les cyclistes/piétons : ne jamais se placer dans l'angle mort d'un PL, surtout en virage à droite.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Un conducteur ouvre sa portière sans regarder et blesse un cycliste. Qui est responsable ?",
    answers: [
      "Le cycliste, car il devait maintenir une distance de sécurité",
      "Le conducteur du véhicule, pour ne pas avoir vérifié avant d'ouvrir",
      "Responsabilité partagée à 50/50",
      "L'assurance détermine la responsabilité"
    ],
    correct: [1],
    explanation: "Le 'dooring' (accident de portière) est de la responsabilité du conducteur qui ouvre. L'article R417-1 du code de la route impose de s'assurer qu'on peut ouvrir sans danger. La 'méthode hollandaise' (ouvrir avec la main droite en se tournant) force à regarder derrière. Les cyclistes peuvent aussi être co-responsables s'ils roulaient trop vite ou sans prudence.",
    schema: null,
    tags: ['2026'],
    multi: false
  },

  // === EXTRA (pour examen blanc) ===
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Que signifie un panneau de type B2b (CÉDEZ LE PASSAGE à l'intersection) ?",
    answers: [
      "Arrêt obligatoire à l'intersection",
      "Vous devez céder le passage aux véhicules sur la voie croisée",
      "Voie prioritaire pour vous",
      "Fin de priorité"
    ],
    correct: [1],
    explanation: "Le panneau B2b (triangle pointe en bas, rouge et blanc) signifie 'cédez le passage'. Contrairement au STOP, vous n'êtes pas obligé de vous arrêter si la voie est libre, mais vous devez impérativement laisser passer tous les véhicules circulant sur la route que vous allez croiser ou traverser.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Vous roulez à 90 km/h. Il neige légèrement. La visibilité est de 80 mètres. Quelle est la vitesse maximale ?",
    answers: ["80 km/h", "50 km/h", "70 km/h", "60 km/h"],
    correct: [1],
    explanation: "En cas de neige ou verglas, la vitesse est limitée à 50 km/h sur les routes hors agglomération, quel que soit le panneau de vitesse en place. Sur autoroute ou voie express par neige, la limite tombe à 50 km/h également. Si la visibilité est inférieure à 50 mètres, 50 km/h est aussi la règle en toutes circonstances.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Deux verres de vin bus il y a 2 heures. Pouvez-vous conduire ? (conducteur confirmé, homme de 75kg)",
    answers: [
      "Oui, l'alcool est éliminé après 2 heures",
      "Probablement non : le taux peut encore être au-delà de 0,5 g/L",
      "Oui si vous vous sentez bien",
      "Oui, deux verres standards = exactement 0,5 g/L, vous êtes dans la limite"
    ],
    correct: [1],
    explanation: "Le corps élimine environ 0,10 à 0,15 g/L d'alcool par heure. 2 verres standard = environ 0,40 à 0,50 g/L selon le gabarit. Après 2h, il peut rester 0,20 à 0,30 g/L — proche ou au-dessus du seuil légal selon le profil. La seule certitude : attendre suffisamment longtemps (3h minimum pour 2 verres). Les femmes éliminent l'alcool plus lentement.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Sur autoroute à sens unique (3 voies), vous roulez sur la voie de gauche. Un véhicule arrive derrière vous en faisant des appels de phares. Que faites-vous ?",
    answers: [
      "Vous restez sur place, vous avez le droit d'y être",
      "Vous vous déportez à droite dès que possible pour laisser passer",
      "Vous fraillez en lui répondant avec vos phares",
      "Vous accélérez pour maintenir l'écart"
    ],
    correct: [1],
    explanation: "Même si le véhicule derrière est en infraction (excès de vitesse), vous devez vous rabattre à droite dès que possible. L'obstruction volontaire est une infraction (135 €). Ne pas freiner brusquement face à un véhicule qui fait des appels de phares (dangereux). La priorité est toujours de circuler à droite et de n'utiliser la voie de gauche que pour dépasser.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "À un feu tricolore, le feu passe au orange alors que vous avez la possibilité de freiner sans danger. Que faites-vous ?",
    answers: [
      "Vous accélérez pour passer avant le rouge",
      "Vous freinez et vous arrêtez avant la ligne",
      "Vous klaxonnez et passez prudemment",
      "Cela dépend de l'heure de la journée"
    ],
    correct: [1],
    explanation: "Le feu orange signifie 'préparez-vous à vous arrêter'. Si vous pouvez freiner sans danger, vous devez vous arrêter. Passer au feu orange quand on peut s'arrêter est une infraction (contravention, retrait de points). Seul cas justifiant de passer : il est impossible de s'arrêter sans danger (trop proche de la ligne).",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Lors d'un accident grave sur route, un témoin débute le massage cardiaque. Vous n'avez pas de formation. Que faites-vous ?",
    answers: [
      "Vous vous éloignez pour ne pas déranger",
      "Vous alertez les secours (112) et suivez leurs instructions, proposez votre aide au témoin",
      "Vous prenez le relais immédiatement pour ne pas interrompre",
      "Vous cherchez un défibrillateur uniquement"
    ],
    correct: [1],
    explanation: "Appelez le 112 et décrivez la situation. L'opérateur peut vous guider pour aider (relayer le massage cardiaque toutes les 2 minutes, utiliser un DAE). Sans formation, ne prenez pas l'initiative de changer ce qui fonctionne. Si le témoin est seul et fatigué, vous pouvez le relayer sous ses instructions. Chercher un DAE (défibrillateur) est aussi une aide précieuse.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Votre voiture est équipée de feux diurnes (DRL) automatiques. Êtes-vous dispensé d'allumer les phares de nuit ?",
    answers: [
      "Oui, les DRL couvrent toutes les obligations d'éclairage",
      "Non, les DRL ne remplacent pas les feux de croisement et n'éclairent pas l'arrière",
      "Oui si vous êtes en agglomération",
      "Seulement si la voiture est récente (< 5 ans)"
    ],
    correct: [1],
    explanation: "Les feux diurnes (Daytime Running Lights - DRL) sont actifs uniquement de jour pour améliorer la visibilité. La nuit ou en cas de faible luminosité, ils s'éteignent et vous devez allumer les feux de croisement. De plus, les DRL n'alimentent généralement pas les feux arrière. Ne jamais confondre DRL et feux de croisement.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Un piéton traverse en dehors d'un passage piéton. Que faites-vous ?",
    answers: [
      "Vous continuez, il traverse hors des clous donc il est en tort",
      "Vous ralentissez et évitez le piéton car sa sécurité prime",
      "Vous klaxonnez pour l'avertir et maintenez votre vitesse",
      "Vous accélérez pour lui montrer qu'il est en faute"
    ],
    correct: [1],
    explanation: "Même si le piéton est en infraction (traversée hors passage), VOTRE obligation est d'éviter de le renverser. Un accident avec un piéton engage votre responsabilité civile (loi Badinter). Ralentir et contourner prudemment est la seule réponse acceptable. Les piétons restent des usagers vulnérables à protéger en toutes circonstances.",
    schema: null,
    tags: []
  },

  // ===== VITESSES & DISTANCES (lot 2) =====
  {
    series: 'vitesses',
    difficulty: 1,
    text: "Quelle est la vitesse maximale autorisée sur autoroute par temps sec pour un conducteur confirmé ?",
    answers: ["110 km/h", "120 km/h", "130 km/h", "150 km/h"],
    correct: [2],
    explanation: "La vitesse maximale sur autoroute en France est de 130 km/h par temps sec pour un conducteur confirmé. Cette limite s'applique sur les sections sans panneau de limitation spécifique.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "Quelle est la vitesse maximale autorisée sur une voie express (route à 2 chaussées séparées par un terre-plein central) ?",
    answers: ["90 km/h", "100 km/h", "110 km/h", "130 km/h"],
    correct: [2],
    explanation: "Sur une route à 2 chaussées séparées par un terre-plein central (voie express), la vitesse maximale est de 110 km/h par temps sec. Par temps de pluie, elle descend à 100 km/h.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "La règle des 2 secondes sert à calculer :",
    answers: ["La distance de freinage", "La distance de sécurité", "Le temps de réaction", "La vitesse moyenne"],
    correct: [1],
    explanation: "La distance de sécurité entre deux véhicules se calcule par la règle des 2 secondes : repérer un point fixe, quand le véhicule devant le passe, compter 2 secondes. Si vous passez ce point avant 2 secondes, vous êtes trop près.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "Dans une aire piétonne, quelle est la vitesse maximale autorisée pour les véhicules autorisés à y circuler ?",
    answers: ["5 km/h (allure du pas)", "10 km/h", "20 km/h", "30 km/h"],
    correct: [0],
    explanation: "Dans une aire piétonne, seuls les véhicules autorisés (livraisons, riverains) peuvent y circuler à l'allure du pas, soit environ 5 km/h. Les piétons y sont absolument prioritaires.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "Quel est l'effet principal de la vitesse sur le champ visuel du conducteur ?",
    answers: ["Le champ visuel s'élargit", "Le champ visuel se rétrécit (effet tunnel)", "Le champ visuel reste identique", "Le champ visuel oscille"],
    correct: [1],
    explanation: "Plus la vitesse augmente, plus le champ visuel se rétrécit : c'est l'effet tunnel. À 130 km/h, le champ visuel est d'environ 30° (contre 180° à l'arrêt). Le conducteur perd la vision périphérique et détecte moins bien les dangers latéraux.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Quelle est la vitesse maximale pour un jeune conducteur (permis probatoire) sur voie express (110 km/h) ?",
    answers: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
    correct: [2],
    explanation: "Le jeune conducteur en période probatoire est limité à 100 km/h sur les voies express (au lieu de 110 km/h), 110 km/h sur autoroute (au lieu de 130 km/h) et 80 km/h sur route (identique aux confirmés depuis 2018).",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "À 50 km/h sur route sèche, quelle est approximativement la distance d'arrêt totale (réaction + freinage) ?",
    answers: ["15 mètres", "28 mètres", "45 mètres", "60 mètres"],
    correct: [1],
    explanation: "À 50 km/h : distance de réaction ≈ 14 m (1 seconde) + distance de freinage ≈ 14 m = distance d'arrêt totale d'environ 28 mètres sur route sèche. Formule simplifiée : (vitesse ÷ 10)² ÷ 2 pour le freinage seul.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Qu'est-ce que l'aquaplaning ?",
    answers: ["Un freinage d'urgence sur route mouillée", "La perte d'adhérence due à un film d'eau entre les pneus et la route", "Un dérapage en virage par temps sec", "Une technique de conduite sportive"],
    correct: [1],
    explanation: "L'aquaplaning (ou hydroplanage) se produit quand un film d'eau s'interpose entre les pneus et la chaussée. Le véhicule perd toute adhérence et ne répond plus à la direction ni au freinage. Risque accru avec des pneus usés, une vitesse élevée et de fortes pluies.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Sur autoroute, la distance de sécurité minimale à 130 km/h correspond environ à :",
    answers: ["50 mètres", "73 mètres", "100 mètres", "130 mètres"],
    correct: [1],
    explanation: "À 130 km/h, en 2 secondes on parcourt environ 73 mètres (130 000 m ÷ 3600 s × 2 s ≈ 72 m). C'est la distance de sécurité minimale. Sur autoroute, les bandes blanches de la bande d'arrêt d'urgence sont espacées de 38 m : 2 bandes = distance de sécurité.",
    schema: `<svg width="280" height="90" viewBox="0 0 280 90">
  <rect width="280" height="90" fill="#e3f2fd" rx="8"/>
  <rect x="0" y="30" width="280" height="40" fill="#7f8c8d"/>
  <!-- Tirets marquage -->
  <rect x="10" y="48" width="20" height="3" fill="white" rx="1"/>
  <rect x="60" y="48" width="20" height="3" fill="white" rx="1"/>
  <rect x="110" y="48" width="20" height="3" fill="white" rx="1"/>
  <rect x="160" y="48" width="20" height="3" fill="white" rx="1"/>
  <rect x="210" y="48" width="20" height="3" fill="white" rx="1"/>
  <!-- Voiture A -->
  <rect x="15" y="34" width="30" height="15" rx="3" fill="#e74c3c"/>
  <text x="23" y="44" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">A</text>
  <!-- Voiture B -->
  <rect x="165" y="34" width="30" height="15" rx="3" fill="#3498db"/>
  <text x="173" y="44" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">B</text>
  <!-- Distance -->
  <line x1="47" y1="55" x2="163" y2="55" stroke="#f39c12" stroke-width="2"/>
  <polygon points="163,52 163,58 170,55" fill="#f39c12"/>
  <polygon points="47,52 47,58 40,55" fill="#f39c12"/>
  <text x="72" y="80" fill="#e65100" font-size="10" font-weight="bold" font-family="Inter,sans-serif">≈ 73m (2 sec) = 2 tirets</text>
</svg>`,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "La tolérance technique d'un radar fixe pour les vitesses supérieures à 100 km/h est de :",
    answers: ["3 km/h", "5 km/h", "5 % de la vitesse mesurée", "10 km/h"],
    correct: [2],
    explanation: "Pour les vitesses supérieures à 100 km/h, la tolérance technique d'un radar fixe est de 5 % de la vitesse mesurée. En dessous de 100 km/h, la tolérance est de 5 km/h. Exemple : flashé à 135 km/h → vitesse retenue = 128 km/h (135 - 5 % = 128,25 arrondi à 128).",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Sur route mouillée, la distance de freinage est multipliée environ par :",
    answers: ["1,2", "2", "3", "4"],
    correct: [1],
    explanation: "Sur route mouillée, la distance de freinage est multipliée par 2 environ. L'adhérence des pneus sur sol mouillé est fortement réduite. À 90 km/h, la distance de freinage passe d'environ 40 m (sec) à 80 m (mouillé). C'est pourquoi les limitations de vitesse sont réduites de 20 km/h par temps de pluie sur route et autoroute.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Lorsque la visibilité est inférieure à 50 mètres (brouillard épais), quelle est la vitesse maximale autorisée sur TOUTES les routes ?",
    answers: ["30 km/h", "50 km/h", "70 km/h", "80 km/h"],
    correct: [1],
    explanation: "Quand la visibilité est inférieure à 50 mètres (brouillard dense, pluie très forte), la vitesse maximale est de 50 km/h sur TOUTES les routes, y compris l'autoroute. Cette règle supplante toute autre limitation affichée.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "L'éco-conduite recommande de rouler à quelle vitesse sur autoroute pour réduire significativement la consommation ?",
    answers: ["90 km/h", "110 km/h", "120 km/h", "130 km/h"],
    correct: [1],
    explanation: "Rouler à 110 km/h au lieu de 130 km/h sur autoroute permet d'économiser environ 20 % de carburant. La résistance de l'air augmente avec le carré de la vitesse : chaque km/h supplémentaire au-delà de 110 km/h coûte proportionnellement de plus en plus cher en énergie.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "À 130 km/h, quelle est approximativement la distance d'arrêt totale sur route sèche ?",
    answers: ["90 mètres", "130 mètres", "170 mètres", "200 mètres"],
    correct: [2],
    explanation: "À 130 km/h : distance de réaction ≈ 36 m (1 seconde) + distance de freinage ≈ 130 m = distance d'arrêt totale d'environ 170 mètres. Sur route mouillée, cette distance peut atteindre 230 à 250 mètres. C'est pourquoi la distance de sécurité est cruciale sur autoroute.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "En cas de verglas avéré, quelle est la bonne conduite à adopter ?",
    answers: [
      "Rouler à 50 km/h maximum et éviter les freinages brusques",
      "Accélérer franchement pour garder de l'élan",
      "Freiner fort et souvent pour tester l'adhérence",
      "Rouler à vitesse normale en augmentant la distance de sécurité"
    ],
    correct: [0],
    explanation: "Sur verglas, réduire drastiquement la vitesse (50 km/h max, voire moins), éviter tout mouvement brusque (freinage, accélération, direction), augmenter considérablement les distances et anticiper au maximum. La distance de freinage peut être multipliée par 4 à 8 sur verglas.",
    schema: null,
    tags: []
  },

  // ===== ALCOOL, DROGUES & MÉDICAMENTS (lot 2) =====
  {
    series: 'alcool',
    difficulty: 1,
    text: "Quel est le taux d'alcoolémie maximal autorisé pour un conducteur en période probatoire ?",
    answers: ["0,2 g/L de sang", "0,5 g/L de sang", "0,3 g/L de sang", "0 g/L de sang"],
    correct: [0],
    explanation: "Depuis 2015, les conducteurs en période probatoire (permis de moins de 3 ans ou 2 ans avec AAC) sont limités à 0,2 g/L de sang (soit 0,10 mg/L d'air expiré). En pratique, cela signifie zéro verre d'alcool car un seul verre standard fait déjà monter à environ 0,20-0,25 g/L.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 1,
    text: "Conduire avec un taux d'alcool entre 0,5 et 0,8 g/L de sang constitue :",
    answers: ["Un délit", "Une contravention de 4ème classe", "Un crime", "Un simple avertissement"],
    correct: [1],
    explanation: "Un taux compris entre 0,5 et 0,8 g/L constitue une contravention de 4ème classe : amende forfaitaire de 135 €, retrait de 6 points. Au-delà de 0,8 g/L, c'est un délit passible de 2 ans de prison et 4 500 € d'amende.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 1,
    text: "Un éthylotest mesure :",
    answers: ["Le taux d'alcool dans le sang", "Le taux d'alcool dans l'air expiré (dépistage)", "Le taux de cannabis dans le sang", "Le temps d'élimination de l'alcool"],
    correct: [1],
    explanation: "L'éthylotest est un appareil de dépistage qui détecte la présence d'alcool dans l'air expiré (positif/négatif). L'éthylomètre, lui, mesure précisément le taux d'alcool dans l'air expiré (en mg/L) et a valeur probante devant un tribunal.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 1,
    text: "Combien de points sont retirés pour conduite en état alcoolique avéré (≥ 0,5 g/L) ?",
    answers: ["4 points", "6 points", "8 points", "Retrait immédiat du permis"],
    correct: [1],
    explanation: "La conduite sous l'emprise de l'alcool (≥ 0,5 g/L ou ≥ 0,2 g/L pour les probatoires) entraîne un retrait de 6 points sur le permis de conduire, que ce soit une contravention (0,5-0,8 g/L) ou un délit (≥ 0,8 g/L).",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 1,
    text: "Un médicament portant un pictogramme de niveau 3 (rouge) sur sa boîte signifie :",
    answers: ["Soyez prudent, lisez la notice", "Soyez très prudent, demandez l'avis d'un médecin", "Attention, danger : ne pas conduire sans avis médical", "Pas de contre-indication à la conduite"],
    correct: [2],
    explanation: "Le pictogramme de niveau 3 (fond rouge) signifie 'Attention, danger : ne pas conduire'. La reprise de la conduite nécessite l'avis d'un médecin. Niveau 1 (jaune) = prudence, Niveau 2 (orange) = très prudent + avis médical recommandé.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Quelles sont les sanctions encourues pour conduite sous l'emprise de cannabis (délit) ? (plusieurs réponses)",
    answers: ["2 ans d'emprisonnement maximum", "4 500 € d'amende", "Retrait de 6 points", "Suspension ou annulation du permis de conduire"],
    correct: [0, 1, 2, 3],
    multi: true,
    explanation: "La conduite sous stupéfiants (cannabis, cocaïne, etc.) est un délit puni de l'ensemble de ces sanctions : 2 ans de prison, 4 500 € d'amende, retrait de 6 points, et suspension/annulation du permis. En cas de cumul alcool + stupéfiants, les peines sont portées à 3 ans et 9 000 €.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Que risque un conducteur contrôlé positif à la fois à l'alcool ET au cannabis ? (plusieurs réponses)",
    answers: ["3 ans d'emprisonnement", "9 000 € d'amende", "Annulation du permis de conduire", "Simple amende forfaitaire de 135 €"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Le cumul alcool + stupéfiants constitue une circonstance aggravante : les peines passent à 3 ans de prison et 9 000 € d'amende, avec annulation possible du permis (et interdiction de le repasser pendant 3 ans maximum). Ce n'est pas une simple contravention.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Qu'est-ce qu'un EAD (éthylotest anti-démarrage) ?",
    answers: ["Un éthylotest jetable obligatoire dans le véhicule", "Un dispositif qui empêche le démarrage si le conducteur souffle positif", "Un alcootest utilisé par la police", "Un médicament contre la gueule de bois"],
    correct: [1],
    explanation: "L'EAD (éthylotest anti-démarrage) est un dispositif installé dans le véhicule qui oblige le conducteur à souffler avant de démarrer. Si le taux est positif, le moteur ne démarre pas. Il peut être imposé par le juge comme alternative à la suspension de permis, permettant de continuer à conduire sous contrôle.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Le corps élimine l'alcool à un rythme moyen de :",
    answers: ["0,10 à 0,15 g/L par heure", "0,30 g/L par heure", "0,50 g/L par heure", "Cela dépend de la quantité d'eau bue"],
    correct: [0],
    explanation: "Le foie élimine l'alcool à un rythme constant d'environ 0,10 à 0,15 g/L de sang par heure. Rien n'accélère ce processus : ni le café, ni l'eau, ni le sommeil, ni l'activité physique. Seul le temps permet l'élimination.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Quel est le principal effet de l'alcool sur la conduite à faible dose (0,3-0,5 g/L) ?",
    answers: ["Amélioration des réflexes", "Sous-estimation du danger et allongement du temps de réaction", "Augmentation de la vigilance", "Rétrécissement du champ visuel uniquement"],
    correct: [1],
    explanation: "Dès 0,3 g/L, l'alcool provoque une sous-estimation des risques, un allongement du temps de réaction, une diminution de l'attention et un rétrécissement du champ visuel. Le conducteur se sent plus confiant alors que ses capacités sont déjà altérées : c'est le danger principal.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "En cas de récidive de conduite avec un taux ≥ 0,8 g/L dans les 5 ans, les peines maximales sont :",
    answers: ["2 ans de prison et 4 500 €", "4 ans de prison et 9 000 €", "1 an de prison et 3 750 €", "6 mois de prison et 7 500 €"],
    correct: [1],
    explanation: "En récidive (dans les 5 ans), la conduite avec un taux ≥ 0,8 g/L est punie de 4 ans d'emprisonnement et 9 000 € d'amende (peines doublées). Le véhicule peut être confisqué et le permis annulé avec interdiction de le repasser pendant 3 ans maximum.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Quelle est la différence probante entre un éthylotest et un éthylomètre ?",
    answers: [
      "L'éthylotest est plus précis",
      "L'éthylomètre a valeur légale, l'éthylotest est un simple dépistage",
      "Ce sont deux noms pour le même appareil",
      "L'éthylotest mesure le sang, l'éthylomètre l'air"
    ],
    correct: [1],
    explanation: "L'éthylotest (chimique ou électronique) sert au dépistage : résultat positif ou négatif, sans valeur probante. L'éthylomètre (appareil homologué des forces de l'ordre) donne une mesure précise en mg/L d'air expiré, avec valeur probante devant un tribunal. Après un dépistage positif, l'éthylomètre confirme.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Un conducteur en permis probatoire (18 mois, sans AAC) est contrôlé positif au cannabis. Que se passe-t-il pour ses points ?",
    answers: [
      "Retrait de 6 points, il lui reste 3 points sur 9",
      "Retrait de 6 points = permis invalidé (solde à 0)",
      "Retrait de 6 points, mais il garde 6 points car il en avait 12",
      "Aucun retrait en attente du test sanguin"
    ],
    correct: [0],
    explanation: "Un permis probatoire démarre à 6 points et gagne 2 points par an (3 avec AAC). À 18 mois sans AAC : 6 + (2 × 1,5) = 9 points. Un retrait de 6 points le ramène à 3 points. Le permis n'est pas invalidé mais quasi vidé. Une lettre 48M sera envoyée l'obligeant à un stage de récupération de points.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Un conducteur refuse de se soumettre aux vérifications d'alcoolémie. Que risque-t-il ?",
    answers: [
      "Rien, c'est son droit de refuser",
      "Les mêmes peines que pour conduite avec un taux ≥ 0,8 g/L (2 ans et 4 500 €)",
      "Une simple amende de 135 €",
      "Une garde à vue de 24 heures sans poursuites"
    ],
    correct: [1],
    explanation: "Le refus de se soumettre aux vérifications d'alcoolémie ou de stupéfiants constitue un délit puni des mêmes peines que la conduite avec un taux ≥ 0,8 g/L : 2 ans d'emprisonnement, 4 500 € d'amende, retrait de 6 points, suspension ou annulation du permis.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Un médicament de niveau 2 (pictogramme orange) implique que :",
    answers: [
      "Il est interdit de conduire",
      "La conduite est déconseillée sans avis médical, il faut vérifier avec son médecin ou pharmacien",
      "Aucune précaution n'est nécessaire",
      "Seule la conduite de nuit est déconseillée"
    ],
    correct: [1],
    explanation: "Le pictogramme de niveau 2 (orange) signifie 'Soyez très prudent. Ne pas conduire sans l'avis d'un professionnel de santé'. Il concerne des médicaments pouvant altérer les capacités (somnolence, vertiges). Le médecin ou pharmacien évalue si le patient peut conduire selon sa sensibilité individuelle.",
    schema: null,
    tags: []
  },

  // ===== STATIONNEMENT =====
  {
    series: 'stationnement',
    difficulty: 1,
    text: "Quelle est la différence entre un arrêt et un stationnement ?",
    answers: ["L'arrêt dure moins de 5 minutes", "L'arrêt implique que le conducteur reste à proximité du véhicule", "Il n'y a aucune différence légale", "Le stationnement est toujours payant"],
    correct: [1],
    explanation: "L'arrêt est une immobilisation de courte durée pendant laquelle le conducteur reste à proximité du véhicule pour pouvoir le déplacer immédiatement si nécessaire. Le stationnement est une immobilisation prolongée ou lorsque le conducteur s'éloigne du véhicule.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 1,
    text: "À quelle distance minimale d'une intersection doit-on stationner en l'absence de marquage ?",
    answers: ["3 mètres", "5 mètres", "10 mètres", "15 mètres"],
    correct: [1],
    explanation: "En l'absence de marquage au sol, le stationnement est interdit à moins de 5 mètres d'une intersection. Cette règle permet d'assurer la visibilité pour tous les usagers aux abords du carrefour.",
    schema: `<svg width="260" height="200" viewBox="0 0 260 200">
  <rect width="260" height="200" fill="#e8f5e9" rx="8"/>
  <!-- Route principale horizontale -->
  <rect x="0" y="80" width="260" height="40" fill="#888"/>
  <!-- Route secondaire -->
  <rect x="180" y="0" width="40" height="80" fill="#888"/>
  <!-- Voiture stationnée (trop près = interdit) -->
  <rect x="155" y="125" width="18" height="28" rx="3" fill="#e74c3c" opacity="0.6"/>
  <line x1="148" y1="125" x2="175" y2="155" stroke="#c62828" stroke-width="2"/>
  <line x1="175" y1="125" x2="148" y2="155" stroke="#c62828" stroke-width="2"/>
  <!-- Voiture stationnée (OK = loin) -->
  <rect x="80" y="125" width="18" height="28" rx="3" fill="#2ecc71"/>
  <text x="84" y="142" fill="white" font-size="7" font-weight="bold" font-family="Inter,sans-serif">OK</text>
  <!-- Cotation 5m -->
  <line x1="155" y1="118" x2="180" y2="118" stroke="#1565c0" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="157" y="113" fill="#1565c0" font-size="9" font-weight="bold" font-family="Inter,sans-serif">5m</text>
  <!-- Légende -->
  <text x="10" y="185" fill="#333" font-size="9" font-weight="bold" font-family="Inter,sans-serif">Interdit à &lt;5m d'une intersection</text>
</svg>`,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 1,
    text: "Stationner en double file est :",
    answers: ["Autorisé si le conducteur reste dans le véhicule", "Toujours interdit car considéré comme stationnement gênant", "Autorisé en agglomération pour les livraisons", "Autorisé la nuit quand la circulation est faible"],
    correct: [1],
    explanation: "Le stationnement en double file est toujours considéré comme un stationnement gênant au sens de l'article R417-10 du Code de la route. Il est passible d'une amende de 35 €. Même un arrêt en double file ne doit être que très bref.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 1,
    text: "Que signifie un panneau rond à fond bleu barré d'une croix rouge ?",
    answers: ["Arrêt interdit", "Stationnement interdit", "Arrêt et stationnement interdits", "Zone de stationnement payant"],
    correct: [2],
    explanation: "Le panneau rond à fond bleu barré d'une croix rouge (panneau B6d) interdit à la fois l'arrêt et le stationnement. Le panneau avec un seul trait rouge diagonal interdit uniquement le stationnement mais autorise l'arrêt.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 1,
    text: "En zone bleue, quel dispositif est obligatoire pour stationner ?",
    answers: ["Un ticket de parking", "Un disque de stationnement", "Une vignette annuelle", "Un horodateur"],
    correct: [1],
    explanation: "En zone bleue, le stationnement est gratuit mais limité dans le temps. Le conducteur doit apposer un disque de stationnement européen (bleu) derrière le pare-brise, indiquant son heure d'arrivée. La durée maximale est généralement de 1h30 sauf indication contraire.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Le stationnement sur un emplacement réservé aux personnes handicapées (PMR) sans autorisation est passible de :",
    answers: ["Une amende de 35 €", "Une amende de 135 €", "Une amende de 135 € et mise en fourrière possible", "Un simple avertissement"],
    correct: [2],
    explanation: "Le stationnement abusif sur un emplacement PMR constitue un stationnement très gênant (article R417-11). Il est sanctionné par une amende forfaitaire de 135 € (4e classe) et le véhicule peut être mis en fourrière. Seuls les titulaires d'une carte mobilité inclusion (CMI) stationnement peuvent utiliser ces places.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Comment doit-on braquer les roues lorsqu'on stationne en descente le long d'un trottoir ?",
    answers: ["Roues braquées vers la gauche (vers la route)", "Roues braquées vers la droite (vers le trottoir)", "Roues parfaitement droites", "Cela n'a aucune importance"],
    correct: [1],
    explanation: "En descente, on braque les roues vers le trottoir (vers la droite). Ainsi, si le véhicule se met à rouler, les roues avant buteront contre le trottoir et le véhicule sera stoppé. En montée, on braque vers la gauche (vers la route) pour que les roues viennent se bloquer contre le trottoir.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Stationner sur le trottoir est considéré comme :",
    answers: ["Un stationnement gênant (amende de 35 €)", "Un stationnement très gênant (amende de 135 €)", "Un stationnement dangereux (amende de 135 €)", "Autorisé si le passage piéton reste libre"],
    correct: [1],
    explanation: "Le stationnement sur le trottoir est qualifié de stationnement très gênant (article R417-11). Il est passible d'une amende forfaitaire de 135 € (4e classe) et d'une mise en fourrière. Le trottoir est un espace réservé aux piétons.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Depuis la décentralisation du stationnement payant, que risque-t-on en cas de non-paiement ?",
    answers: ["Une amende pénale de 17 €", "Un FPS (forfait de post-stationnement) dont le montant est fixé par la commune", "Uniquement un avertissement", "Une amende de 135 €"],
    correct: [1],
    explanation: "Depuis le 1er janvier 2018, le non-paiement du stationnement payant n'est plus une infraction pénale mais donne lieu à un FPS (forfait de post-stationnement). Son montant est fixé librement par chaque commune et varie généralement de 20 à 60 € selon les villes.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Le stationnement en sens inverse de la circulation est :",
    answers: ["Autorisé en agglomération sur les routes à sens unique", "Toujours interdit", "Interdit hors agglomération mais autorisé en agglomération", "Autorisé uniquement la nuit"],
    correct: [2],
    explanation: "Le stationnement en sens inverse de la circulation (côté gauche) est interdit hors agglomération. En agglomération, il est autorisé uniquement sur les voies à sens unique ou les routes à deux voies. Sur les routes à plus de deux voies en agglomération, il reste interdit.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Quelles situations constituent un stationnement dangereux ? (plusieurs réponses)",
    answers: ["Stationner près d'un sommet de côte sans visibilité", "Stationner dans un virage sans visibilité", "Stationner en double file sur un boulevard large", "Stationner à proximité d'une intersection sans visibilité"],
    correct: [0, 1, 3],
    multi: true,
    explanation: "Le stationnement dangereux (article R417-9) concerne les situations où le véhicule stationné met en danger les autres usagers par défaut de visibilité : près d'un sommet de côte, dans un virage, ou à proximité d'une intersection sans visibilité. Amende de 135 € (4e classe). La double file est un stationnement gênant, pas dangereux.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Un véhicule stationné depuis plus de 7 jours au même endroit est considéré comme :",
    answers: ["En stationnement gênant", "En stationnement abusif", "En stationnement dangereux", "En infraction uniquement si en zone payante"],
    correct: [1],
    explanation: "Le stationnement abusif est défini par l'article R417-12 du Code de la route. Un véhicule stationné de manière ininterrompue pendant plus de 7 jours consécutifs au même emplacement est en stationnement abusif. Il est passible d'une amende de 35 € et d'une mise en fourrière.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Quels stationnements sont qualifiés de « très gênants » ? (plusieurs réponses)",
    answers: ["Sur un passage piéton", "Sur un emplacement PMR", "Sur une piste cyclable", "À 3 mètres d'une intersection"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "L'article R417-11 définit le stationnement très gênant : sur passage piéton, emplacement PMR, piste/bande cyclable, trottoir, voie de bus, devant une bouche d'incendie. La sanction est de 135 € (4e classe) avec mise en fourrière possible.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "En 2026, dans certaines villes, le stationnement des SUV et véhicules lourds (>1,6 tonne) peut faire l'objet de :",
    answers: ["Aucune réglementation spécifique", "Un tarif de stationnement majoré décidé par la commune", "Une interdiction totale de stationner en centre-ville", "Une amende forfaitaire de 500 €"],
    correct: [1],
    explanation: "Depuis 2024, certaines communes comme Paris ont instauré un tarif de stationnement majoré pour les véhicules lourds (SUV, >1,6 tonne à Paris). Cette mesure vise à décourager l'usage de véhicules encombrants et polluants en ville. Le montant est fixé par délibération municipale.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Devant une bouche d'incendie, le stationnement est interdit sur une distance de :",
    answers: ["3 mètres de part et d'autre", "5 mètres de part et d'autre", "Il suffit de ne pas bloquer la bouche elle-même", "10 mètres de part et d'autre"],
    correct: [1],
    explanation: "Le stationnement est interdit à moins de 5 mètres de part et d'autre d'une bouche ou prise d'eau pour incendie. C'est un stationnement très gênant (article R417-11) passible d'une amende de 135 € car il empêche l'intervention des pompiers.",
    schema: `<svg width="260" height="200" viewBox="0 0 260 200">
  <rect width="260" height="200" fill="#e8f5e9" rx="8"/>
  <!-- Route -->
  <rect x="0" y="70" width="260" height="50" fill="#888"/>
  <!-- Trottoir -->
  <rect x="0" y="120" width="260" height="50" fill="#d7ccc8"/>
  <!-- Bouche incendie -->
  <rect x="123" y="130" width="14" height="20" rx="2" fill="#f44336"/>
  <circle cx="130" cy="128" r="6" fill="#f44336"/>
  <rect x="125" y="125" width="10" height="3" fill="#b71c1c"/>
  <!-- Zone interdite (5m de chaque côté) -->
  <rect x="80" y="122" width="100" height="4" fill="#ffcdd2" opacity="0.7"/>
  <!-- Cotations -->
  <line x1="80" y1="160" x2="130" y2="160" stroke="#c62828" stroke-width="1"/>
  <text x="95" y="172" fill="#c62828" font-size="9" font-weight="bold" font-family="Inter,sans-serif">5m</text>
  <line x1="130" y1="160" x2="180" y2="160" stroke="#c62828" stroke-width="1"/>
  <text x="147" y="172" fill="#c62828" font-size="9" font-weight="bold" font-family="Inter,sans-serif">5m</text>
  <text x="60" y="195" fill="#333" font-size="9" font-weight="bold" font-family="Inter,sans-serif">5m de part et d'autre = interdit</text>
</svg>`,
    tags: []
  },

  // ===== ÉCO-CONDUITE =====
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "Quel est le principal objectif de l'éco-conduite ?",
    answers: ["Rouler le plus lentement possible", "Réduire la consommation de carburant et les émissions polluantes", "Éviter d'utiliser la climatisation", "Rouler uniquement en ville"],
    correct: [1],
    explanation: "L'éco-conduite vise à réduire la consommation de carburant (jusqu'à 15-20% d'économie) et les émissions de CO₂ et polluants, tout en améliorant la sécurité par une conduite plus souple et anticipée. Ce n'est pas rouler lentement, mais rouler intelligemment.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "À quel régime moteur est-il conseillé de passer le rapport supérieur pour un moteur diesel ?",
    answers: ["1 500 tr/min", "2 000 tr/min", "2 500 tr/min", "3 000 tr/min"],
    correct: [1],
    explanation: "Pour un moteur diesel, il est recommandé de passer le rapport supérieur aux alentours de 2 000 tr/min (contre 2 500 tr/min pour un moteur essence). Rouler en sur-régime augmente considérablement la consommation de carburant sans gain significatif de performance.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "Quel est l'effet d'une pression insuffisante des pneus sur la consommation ?",
    answers: ["Aucun effet mesurable", "La consommation augmente", "La consommation diminue", "La consommation augmente uniquement sur autoroute"],
    correct: [1],
    explanation: "Des pneus sous-gonflés augmentent la résistance au roulement, ce qui accroît la consommation de carburant d'environ 3 à 5 % par 0,5 bar de déficit. De plus, cela accélère l'usure des pneus et dégrade la tenue de route. Il faut vérifier la pression à froid au moins une fois par mois.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "L'utilisation de la climatisation augmente la consommation de carburant d'environ :",
    answers: ["1 à 2 %", "5 à 20 % selon les conditions", "30 à 40 %", "Elle n'a aucun impact"],
    correct: [1],
    explanation: "La climatisation augmente la consommation de 5 à 20 % selon la température extérieure et le type de trajet (l'impact est plus fort en ville). Il est recommandé de limiter l'écart de température intérieur/extérieur à 5°C et d'aérer d'abord avant de climatiser.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "En éco-conduite, la meilleure façon de ralentir est de :",
    answers: ["Freiner fort au dernier moment", "Anticiper et utiliser le frein moteur", "Passer au point mort pour économiser du carburant", "Couper le moteur en roulant"],
    correct: [1],
    explanation: "Anticiper les ralentissements et utiliser le frein moteur (pied levé, rapport engagé) est la technique la plus économe. Dans cette situation, la consommation est nulle car l'injection est coupée. Rouler au point mort consomme au ralenti et est dangereux.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Qu'est-ce que la vignette Crit'Air ?",
    answers: ["Un contrôle technique renforcé", "Un certificat qualité de l'air classant les véhicules selon leurs émissions polluantes", "Une assurance spéciale pour les zones urbaines", "Un abonnement de stationnement écologique"],
    correct: [1],
    explanation: "La vignette Crit'Air est un certificat qualité de l'air obligatoire pour circuler dans les ZFE (Zones à Faibles Émissions). Elle classe les véhicules de 0 (électriques) à 5 (les plus polluants) selon leur motorisation et leur année de mise en circulation.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "En 2026, quels véhicules peuvent être interdits de circulation dans une ZFE-m ? (plusieurs réponses)",
    answers: ["Les véhicules non classés (sans vignette Crit'Air)", "Les véhicules Crit'Air 5", "Les véhicules Crit'Air 4 dans certaines métropoles", "Tous les véhicules thermiques sans exception"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "En 2026, les ZFE-m interdisent progressivement les véhicules polluants. Les non classés et Crit'Air 5 sont exclus presque partout. Crit'Air 4 est interdit dans plusieurs grandes métropoles (Paris, Lyon, Marseille). Les véhicules thermiques récents (Crit'Air 1) restent autorisés.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quel est l'impact d'une galerie de toit vide sur la consommation ?",
    answers: ["Aucun impact notable", "Environ 10 à 15 % de surconsommation sur autoroute", "Moins de 1 % de surconsommation", "Un impact uniquement au-dessus de 130 km/h"],
    correct: [1],
    explanation: "Une galerie de toit, même vide, modifie l'aérodynamisme du véhicule et peut entraîner une surconsommation de 10 à 15 % sur autoroute (la résistance aérodynamique croît avec le carré de la vitesse). Il est recommandé de la démonter quand elle n'est pas utilisée.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Lors d'un arrêt prolongé (plus de 20 secondes), que faut-il faire pour économiser du carburant ?",
    answers: ["Rester au point mort moteur tournant", "Couper le moteur", "Passer en première et embrayer", "Accélérer légèrement pour maintenir le moteur chaud"],
    correct: [1],
    explanation: "Au-delà de 20 secondes d'arrêt, il est plus économique de couper le moteur que de le laisser tourner au ralenti. Les véhicules modernes sont équipés du système Start & Stop qui automatise cette action. Redémarrer consomme moins que 20 secondes de ralenti.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Le bonus écologique en 2026 concerne principalement :",
    answers: ["Tous les véhicules neufs", "Les véhicules électriques et hydrogène neufs sous conditions de prix et de poids", "Uniquement les véhicules hybrides", "Les véhicules diesel récents"],
    correct: [1],
    explanation: "En 2026, le bonus écologique est réservé aux véhicules électriques et hydrogène neufs, sous conditions de prix (plafond autour de 47 000 €) et de score environnemental (prenant en compte l'empreinte carbone de fabrication). Les hybrides rechargeables n'y sont plus éligibles depuis 2023.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Quel polluant émis par les moteurs diesel est principalement responsable des pics de pollution urbaine ?",
    answers: ["Le CO₂ (dioxyde de carbone)", "Les particules fines (PM2.5) et les oxydes d'azote (NOx)", "Le monoxyde de carbone (CO)", "Le plomb"],
    correct: [1],
    explanation: "Les moteurs diesel émettent principalement des particules fines (PM2.5 et PM10) et des oxydes d'azote (NOx) responsables des pics de pollution en ville. Le CO₂ contribue au réchauffement climatique mais n'est pas un polluant local. Le plomb a été supprimé de l'essence depuis 2000.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Un véhicule électrique en ville a une autonomie réduite en hiver principalement parce que :",
    answers: ["La batterie se décharge plus vite au froid et le chauffage consomme beaucoup d'énergie", "Les roues adhèrent moins", "Le moteur électrique est moins puissant par temps froid", "La réglementation impose de rouler moins vite"],
    correct: [0],
    explanation: "Le froid réduit les performances électrochimiques de la batterie (perte de 20 à 40 % d'autonomie). De plus, le chauffage de l'habitacle consomme une énergie importante prélevée sur la batterie (pas de chaleur résiduelle du moteur comme en thermique). La pompe à chaleur limite cet effet.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Le malus écologique au poids (malus masse) en 2026 s'applique aux véhicules neufs dépassant :",
    answers: ["1 400 kg", "1 600 kg", "1 800 kg", "2 000 kg"],
    correct: [2],
    explanation: "En 2026, le malus au poids s'applique aux véhicules neufs dont la masse en ordre de marche dépasse 1 800 kg. Il s'ajoute au malus CO₂. Les véhicules électriques et hybrides rechargeables bénéficient d'un abattement. Ce seuil a été progressivement abaissé depuis son introduction.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Le contrôle technique mesure les émissions polluantes. Un véhicule diesel peut être recalé si :",
    answers: ["Son opacité des fumées dépasse le seuil réglementaire", "Il consomme plus de 8 L/100 km", "Il n'a pas de vignette Crit'Air", "Il a plus de 10 ans"],
    correct: [0],
    explanation: "Lors du contrôle technique, les émissions des véhicules diesel sont mesurées par opacimétrie (mesure de l'opacité des fumées). Si l'opacité dépasse le seuil réglementaire (variable selon l'année du véhicule), c'est une défaillance majeure nécessitant une contre-visite.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Quels sont les avantages d'un véhicule hybride rechargeable par rapport à un hybride simple ? (plusieurs réponses)",
    answers: ["Il peut rouler en mode 100% électrique sur une distance significative (30-80 km)", "Il peut être rechargé sur une borne ou prise domestique", "Il ne consomme jamais de carburant", "Il est éligible à la vignette Crit'Air 0"],
    correct: [0, 1],
    multi: true,
    explanation: "L'hybride rechargeable (PHEV) possède une batterie plus grande permettant 30 à 80 km en mode 100% électrique, rechargeable sur prise ou borne. L'hybride simple (HEV) n'a que quelques km d'autonomie électrique et se recharge uniquement en roulant. Le PHEV obtient Crit'Air 1 (pas 0, réservé aux 100% électriques).",
    schema: null,
    tags: []
  },

  // ===== AUTOROUTE — Lot 2 =====
  {
    series: 'autoroute',
    difficulty: 1,
    text: "Quelle est la vitesse maximale autorisée sur autoroute par temps de pluie ?",
    answers: ["100 km/h", "110 km/h", "120 km/h", "90 km/h"],
    correct: [1],
    explanation: "Par temps de pluie, la vitesse maximale sur autoroute est réduite de 130 km/h à 110 km/h. Cette réduction tient compte de l'allongement des distances de freinage sur chaussée mouillée et de la réduction de visibilité.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Quels véhicules sont interdits de circuler sur autoroute ? (plusieurs réponses)",
    answers: ["Les véhicules ne pouvant pas dépasser 80 km/h", "Les piétons, cyclistes et cavaliers", "Les véhicules diesel de plus de 10 ans", "Les EDPM (trottinettes, gyropodes)"],
    correct: [0, 1, 3],
    multi: true,
    explanation: "Sont interdits sur autoroute : les véhicules dont la vitesse maximale est < 80 km/h (tracteurs, certains scooters), les piétons, cyclistes, cavaliers, et les EDPM (trottinettes). L'âge ou le type de motorisation (diesel) n'est pas un critère d'interdiction sur autoroute.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'autoroute',
    difficulty: 1,
    text: "Combien de tirets de marquage au sol devez-vous compter entre vous et le véhicule devant pour respecter la distance de sécurité sur autoroute ?",
    answers: [
      "1 tiret suffit",
      "Au moins 2 tirets (lignes de rive)",
      "3 tirets minimum",
      "5 tirets"
    ],
    correct: [1],
    explanation: "Sur autoroute, les tirets de marquage au sol (trait + intervalle) mesurent environ 38 mètres. À 130 km/h, 2 tirets (environ 76 m) correspondent à environ 2 secondes de distance de sécurité, ce qui est le minimum requis.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 1,
    text: "Quelle est la vitesse maximale sur autoroute lorsque la visibilité est réduite à moins de 50 mètres (brouillard épais) ?",
    answers: ["70 km/h", "50 km/h", "80 km/h", "60 km/h"],
    correct: [1],
    explanation: "Lorsque la visibilité est inférieure à 50 mètres (brouillard dense, forte pluie), la vitesse est limitée à 50 km/h sur toutes les routes, y compris l'autoroute. Les feux de brouillard avant et arrière doivent être allumés.",
    schema: `<svg width="280" height="120" viewBox="0 0 280 120">
  <rect width="280" height="120" fill="#eceff1" rx="8"/>
  <!-- Route -->
  <rect x="0" y="45" width="280" height="35" fill="#888"/>
  <!-- Brouillard dense -->
  <ellipse cx="60" cy="55" rx="40" ry="25" fill="#b0bec5" opacity="0.4"/>
  <ellipse cx="140" cy="60" rx="50" ry="30" fill="#b0bec5" opacity="0.5"/>
  <ellipse cx="220" cy="50" rx="45" ry="28" fill="#b0bec5" opacity="0.45"/>
  <!-- Voiture à peine visible -->
  <rect x="120" y="52" width="28" height="14" rx="3" fill="#e74c3c" opacity="0.7"/>
  <!-- Panneaux limitation -->
  <circle cx="250" cy="25" r="14" fill="white" stroke="red" stroke-width="2"/>
  <text x="240" y="30" fill="#333" font-size="11" font-weight="bold" font-family="Inter,sans-serif">50</text>
  <!-- Labels -->
  <text x="10" y="15" fill="#37474f" font-size="9" font-weight="bold" font-family="Inter,sans-serif">Visibilité &lt; 50m</text>
  <text x="40" y="108" fill="#c62828" font-size="10" font-weight="bold" font-family="Inter,sans-serif">50 km/h max sur TOUTES routes</text>
</svg>`,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Quelles règles devez-vous respecter lors de l'insertion sur autoroute ? (plusieurs réponses)",
    answers: ["Accélérer sur la voie d'insertion pour atteindre la vitesse du trafic", "Vérifier les rétroviseurs et l'angle mort avant de s'insérer", "Utiliser le clignotant gauche", "S'arrêter au bout de la voie d'insertion si le trafic est dense"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Pour s'insérer sur autoroute : accélérer sur la voie d'insertion pour adapter sa vitesse au flux, vérifier rétroviseurs + angle mort, et signaler avec le clignotant gauche. Ne jamais s'arrêter au bout de la voie d'insertion (extrêmement dangereux), sauf en dernier recours absolu.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Vous tombez en panne sur autoroute. Quelle est la première chose à faire ?",
    answers: [
      "Appeler immédiatement le 15 (SAMU)",
      "Allumer les feux de détresse, se garer sur la BAU, enfiler le gilet et se mettre derrière la glissière",
      "Rester dans le véhicule avec la ceinture",
      "Sortir par la gauche pour atteindre la voie du milieu"
    ],
    correct: [1],
    explanation: "En cas de panne sur autoroute : allumez immédiatement les feux de détresse, dirigez-vous vers la BAU, enfilez votre gilet de haute visibilité AVANT de sortir, sortez par la droite, et placez-vous derrière la glissière de sécurité. Ensuite utilisez la borne d'appel d'urgence (tous les 2 km) ou appelez le 112.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "À quoi servent les bornes d'appel d'urgence orange sur autoroute ?",
    answers: [
      "À signaler un radar fixe",
      "À contacter directement le centre d'exploitation autoroutier pour signaler un incident ou une panne",
      "À appeler les pompiers uniquement",
      "À commander une dépanneuse payante"
    ],
    correct: [1],
    explanation: "Les bornes d'appel d'urgence (orange) sont situées tous les 2 km sur autoroute. Elles permettent de contacter directement le PC sécurité de la société d'autoroute, qui enverra les secours adaptés. Elles géolocalisent automatiquement l'appel, ce qui est un avantage par rapport au téléphone portable.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Un véhicule arrive en contresens sur l'autoroute. Que faites-vous ?",
    answers: [
      "Vous faites des appels de phares pour le prévenir et continuez",
      "Vous ralentissez, serrez à droite, allumez vos feux de détresse et ne tentez pas de l'éviter à la dernière seconde",
      "Vous vous arrêtez immédiatement au milieu de la chaussée",
      "Vous changez de voie vers la gauche pour l'éviter"
    ],
    correct: [1],
    explanation: "Face à un contresens sur autoroute : ralentir immédiatement, se rabattre le plus à droite possible (voire sur la BAU), allumer les feux de détresse pour prévenir les usagers derrière, et ne jamais tenter un évitement brusque. Après le danger, prévenir les secours au 112.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "La marche arrière est-elle autorisée sur autoroute ?",
    answers: [
      "Oui, sur la BAU uniquement",
      "Oui, si vous avez raté votre sortie, sur 50 m maximum",
      "Non, la marche arrière, le demi-tour et la circulation à contresens sont strictement interdits",
      "Oui, en cas d'embouteillage pour rejoindre une sortie"
    ],
    correct: [2],
    explanation: "La marche arrière, le demi-tour et la circulation à contresens sont formellement interdits sur autoroute et voies rapides. Si vous ratez votre sortie, vous devez continuer jusqu'à la prochaine sortie. L'infraction est passible de 2 ans d'emprisonnement et 4 500 € d'amende.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Vous arrivez à un péage avec une file « télépéage » (voie marquée 't'). Vous n'avez pas de badge. Pouvez-vous l'emprunter ?",
    answers: [
      "Oui, elle fonctionne aussi par carte bancaire",
      "Non, vous devez emprunter une voie avec barrière ou guichet",
      "Oui, vous pouvez passer et payer en ligne après",
      "Oui, si vous roulez très lentement pour être photographié"
    ],
    correct: [1],
    explanation: "Les voies de péage marquées 't' (ou avec le pictogramme orange) sont réservées aux véhicules équipés d'un badge télépéage. Sans badge, vous devez utiliser une voie classique (pièces, CB, ou guichet). Emprunter une voie télépéage sans badge constitue une infraction de péage impayé.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "En sortant de l'autoroute par la voie de décélération, à quel moment devez-vous ralentir ?",
    answers: [
      "Sur la voie de droite de l'autoroute, progressivement avant la sortie",
      "Uniquement dans la bretelle de sortie, après avoir quitté la voie de décélération",
      "Dans la voie de décélération elle-même, pas avant sur les voies de circulation",
      "Dès que vous apercevez le panneau de sortie à 1000 m"
    ],
    correct: [2],
    explanation: "Le ralentissement ne doit s'effectuer que dans la voie de décélération. Freiner sur les voies de circulation de l'autoroute est dangereux car les véhicules derrière roulent à 130 km/h. Signalez votre intention au clignotant droit, quittez la voie de circulation, puis décélérez dans la voie prévue à cet effet.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Le dépassement par la droite est-il toléré sur autoroute dans certaines situations ?",
    answers: [
      "Oui, si le véhicule devant roule trop lentement",
      "Oui, en cas de bouchon où toutes les files avancent à des vitesses différentes",
      "Non, c'est toujours interdit sans exception",
      "Oui, si vous utilisez votre clignotant"
    ],
    correct: [1],
    explanation: "Le dépassement par la droite est interdit sur autoroute. Toutefois, en cas de circulation dense en files parallèles (bouchon, ralentissement), si la file de droite avance plus vite que celle de gauche, ce n'est pas considéré comme un dépassement mais comme une circulation normale en files. C'est la seule exception tolérée.",
    schema: `<svg width="280" height="120" viewBox="0 0 280 120">
  <rect width="280" height="120" fill="#e3f2fd" rx="8"/>
  <!-- Autoroute 3 voies -->
  <rect x="0" y="25" width="280" height="75" fill="#888"/>
  <!-- Séparations voies -->
  <rect x="0" y="48" width="280" height="2" fill="white" opacity="0.6"/>
  <rect x="0" y="73" width="280" height="2" fill="white" opacity="0.6"/>
  <!-- Voiture lente voie gauche -->
  <rect x="100" y="30" width="30" height="15" rx="3" fill="#f39c12"/>
  <text x="107" y="40" fill="white" font-size="7" font-weight="bold" font-family="Inter,sans-serif">60</text>
  <!-- Votre voiture voie droite -->
  <rect x="140" y="78" width="30" height="15" rx="3" fill="#e74c3c"/>
  <text x="145" y="88" fill="white" font-size="7" font-weight="bold" font-family="Inter,sans-serif">Vous</text>
  <!-- Flèches direction -->
  <path d="M132 37 L145 37" stroke="#f39c12" stroke-width="1.5" marker-end="url(#arrD)"/>
  <path d="M172 85 L185 85" stroke="#e74c3c" stroke-width="1.5" marker-end="url(#arrD)"/>
  <!-- Croix interdit -->
  <text x="60" y="110" fill="#c62828" font-size="9" font-weight="bold" font-family="Inter,sans-serif">✗ Interdit sauf bouchon (files parallèles)</text>
  <defs>
    <marker id="arrD" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L5,2.5 z" fill="#333"/>
    </marker>
  </defs>
</svg>`,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Quelle est la sanction pour circuler sur la bande d'arrêt d'urgence en dehors d'une situation d'urgence ?",
    answers: [
      "Amende de 35 € (contravention de 2e classe)",
      "Amende de 135 € et retrait de 3 points",
      "Simple avertissement",
      "Amende de 68 € sans retrait de points"
    ],
    correct: [1],
    explanation: "Circuler sur la BAU en dehors d'une situation d'urgence est une contravention de 4e classe punie d'une amende de 135 € et d'un retrait de 3 points sur le permis. La BAU est exclusivement réservée aux arrêts d'urgence (panne, malaise) et aux véhicules de secours.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Sur autoroute, un jeune conducteur (permis probatoire) doit respecter quelle limitation de vitesse ?",
    answers: ["110 km/h", "100 km/h", "90 km/h", "120 km/h"],
    correct: [0],
    explanation: "Un conducteur en période probatoire est limité à 110 km/h sur autoroute (au lieu de 130 km/h), 100 km/h sur les routes à chaussées séparées (au lieu de 110 km/h) et 80 km/h sur les routes à double sens. Le disque 'A' doit être apposé à l'arrière du véhicule.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Lors d'un bouchon sur autoroute, qu'est-ce que le « corridor de secours » ?",
    answers: [
      "Un espace dégagé sur la BAU uniquement",
      "Un espace libre créé entre la voie de gauche et la voie immédiatement à sa droite, permettant aux secours de passer",
      "Une voie réservée aux taxis et bus",
      "La voie de gauche laissée libre par les usagers"
    ],
    correct: [1],
    explanation: "Le corridor de secours (ou couloir d'urgence) consiste à créer un passage entre la voie la plus à gauche (dont les véhicules se décalent vers la gauche) et la voie adjacente (dont les véhicules se décalent vers la droite). Cela permet aux véhicules de secours de progresser rapidement dans le bouchon. Ce réflexe doit être adopté dès le début du ralentissement.",
    schema: null,
    tags: ['2026']
  },

  // ===== VULNÉRABLES — Lot 2 =====
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Quelles règles s'appliquent au dépassement d'un cycliste ? (plusieurs réponses)",
    answers: ["Au moins 1 mètre de distance latérale en agglomération", "Au moins 1,5 mètre hors agglomération", "Ralentir et vérifier la possibilité de dépasser en sécurité", "Toujours klaxonner avant de dépasser pour prévenir"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Pour dépasser un cycliste : 1 m minimum en ville, 1,5 m minimum hors agglomération. Toujours ralentir et vérifier qu'on peut dépasser sans danger. Ne pas klaxonner (cela peut surprendre et déstabiliser le cycliste). Contravention de 135 € si non respecté.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 1,
    text: "Que signifie une zone de rencontre (panneau carré bleu avec piéton, vélo et voiture) ?",
    answers: [
      "Zone piétonne totalement interdite aux voitures",
      "Zone où les piétons sont prioritaires et la vitesse limitée à 20 km/h pour tous les véhicules",
      "Zone réservée aux cyclistes et piétons uniquement",
      "Zone où la vitesse est limitée à 30 km/h"
    ],
    correct: [1],
    explanation: "Une zone de rencontre est un espace partagé où les piétons sont prioritaires sur tous les autres usagers. La vitesse y est limitée à 20 km/h. Tous les véhicules (voitures, vélos, trottinettes) peuvent y circuler mais doivent céder le passage aux piétons à tout moment.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Un bus de transport en commun quitte son arrêt en agglomération. Que devez-vous faire ? (plusieurs réponses)",
    answers: ["Le laisser se réinsérer dans la circulation", "Ralentir pour faciliter sa manœuvre", "Surveiller les piétons qui pourraient traverser derrière le bus", "L'obliger à attendre car vous êtes prioritaire"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "En agglomération, les bus en service qui quittent leur arrêt sont prioritaires (clignotant gauche). Vous devez les laisser se réinsérer, ralentir, et rester vigilant car des piétons peuvent surgir de derrière le bus pour traverser. Vous n'êtes pas prioritaire dans cette situation.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Vous approchez d'une école à l'heure de sortie des classes. Que devez-vous faire ? (plusieurs réponses)",
    answers: ["Ralentir fortement et redoubler de vigilance", "Être prêt à vous arrêter à tout moment", "Surveiller les enfants entre les voitures stationnées", "Klaxonner pour prévenir les enfants de votre présence"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Aux abords d'une école : réduire la vitesse, être prêt à freiner (les enfants sont imprévisibles), surveiller entre les voitures garées (un enfant peut surgir). Le klaxon peut effrayer les enfants et aggraver le danger.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Un piéton aveugle (canne blanche) s'apprête à traverser. Quelles sont vos obligations ? (plusieurs réponses)",
    answers: ["S'arrêter pour le laisser passer en toute sécurité", "Ne pas klaxonner (il pourrait être désorienté)", "Rester à l'arrêt tant qu'il n'a pas terminé sa traversée", "Faire des appels de phares pour signaler votre présence"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Face à un piéton aveugle (canne blanche ou chien-guide) : arrêt obligatoire, ne pas klaxonner (désorientant), rester arrêté jusqu'à la fin de la traversée. Les appels de phares sont inutiles (il ne les voit pas) et le bruit moteur peut le guider. Amende de 135 € et 6 points si non-respect.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Quelle est la vitesse maximale autorisée pour une trottinette électrique (EDPM) sur la voie publique en 2026 ?",
    answers: ["20 km/h", "25 km/h", "30 km/h", "6 km/h"],
    correct: [1],
    explanation: "En 2026, la vitesse maximale des EDPM (engins de déplacement personnel motorisés) reste fixée à 25 km/h. Elles doivent circuler sur les pistes cyclables quand elles existent, ou à défaut sur la chaussée (routes à 50 km/h max). Elles sont interdites sur les trottoirs (sauf si le maire l'autorise, au pas).",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Avant d'ouvrir votre portière en stationnement, quelles vérifications devez-vous faire ? (plusieurs réponses)",
    answers: ["Vérifier dans le rétroviseur extérieur qu'aucun usager n'approche", "Tourner la tête pour vérifier l'angle mort", "Ouvrir la portière progressivement (technique de la main hollandaise)", "Attendre que la route soit complètement dégagée des deux côtés"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Avant d'ouvrir la portière : vérifier le rétroviseur, tourner la tête (angle mort), et ouvrir progressivement. La technique hollandaise (ouvrir avec la main opposée) force à se retourner. On n'attend pas que les deux côtés soient dégagés, seulement le côté d'ouverture.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Vous doublez un groupe de cavaliers sur une route de campagne. Que devez-vous faire ? (plusieurs réponses)",
    answers: ["Ralentir et laisser au moins 1,5 m de distance latérale", "Ne pas klaxonner (risque d'effrayer les chevaux)", "Passer doucement et sans accélération brusque", "Les dépasser rapidement pour réduire la durée du dépassement"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Face à des cavaliers : ralentir, laisser 1,5 m (hors agglomération), ne pas klaxonner (les chevaux sont des animaux craintifs), passer doucement sans bruit brusque. Un cheval effrayé peut se cabrer et blesser son cavalier ou se jeter sur la chaussée.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Quel est l'âge minimum pour conduire une trottinette électrique sur la voie publique en 2026 ?",
    answers: ["12 ans", "14 ans", "16 ans", "Pas d'âge minimum"],
    correct: [1],
    explanation: "Depuis septembre 2023, l'âge minimum pour conduire un EDPM (trottinette électrique, gyroroue, etc.) sur la voie publique est de 14 ans. En 2026, cette règle est maintenue. Les enfants de moins de 14 ans ne peuvent utiliser une trottinette électrique que dans les espaces privés.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Où se situe l'angle mort le plus dangereux d'un poids lourd ou d'un bus ?",
    answers: [
      "Uniquement à l'arrière du véhicule",
      "Sur le côté droit et immédiatement devant la cabine",
      "Uniquement sur le côté gauche",
      "Seulement à plus de 20 mètres derrière"
    ],
    correct: [1],
    explanation: "Les angles morts d'un poids lourd sont particulièrement étendus sur le côté droit (le conducteur est à gauche) et juste devant la cabine. Un cycliste ou piéton peut être totalement invisible du chauffeur dans ces zones. C'est pourquoi il ne faut jamais se placer à droite d'un camion qui tourne, ni s'arrêter devant sa cabine.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Dans une aire piétonne, quels véhicules sont autorisés à circuler ?",
    answers: [
      "Aucun véhicule, c'est totalement interdit",
      "Les véhicules de livraison aux horaires autorisés, les riverains, et les secours, au pas",
      "Tous les véhicules à condition de rouler à 20 km/h",
      "Uniquement les vélos et trottinettes"
    ],
    correct: [1],
    explanation: "L'aire piétonne est en principe réservée aux piétons. Toutefois, les véhicules de secours, les riverains accédant à leur domicile, et les véhicules de livraison (aux créneaux horaires définis par arrêté municipal) peuvent y circuler à l'allure du pas (environ 6 km/h). Les cyclistes peuvent y circuler au pas sans gêner les piétons.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Un motocycliste pratique la circulation inter-files (remontée de files). Dans quelles conditions est-ce autorisé en 2026 ?",
    answers: [
      "C'est totalement interdit en France",
      "Uniquement sur autoroute et voies à 2x2 voies minimum, quand le trafic est congestionné, à 50 km/h max entre les deux files les plus à gauche",
      "Partout en agglomération à moins de 30 km/h",
      "Sur toutes les routes à double sens quand le trafic est dense"
    ],
    correct: [1],
    explanation: "La circulation inter-files est autorisée à titre expérimental (pérennisée depuis 2021) sur les routes à au moins 2x2 voies où la vitesse est ≥ 70 km/h, uniquement quand le trafic est congestionné. Le deux-roues doit circuler entre les deux files les plus à gauche, sans dépasser 50 km/h (et pas plus de 30 km/h au-dessus de la vitesse des files).",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Vous tournez à droite à une intersection. Un cycliste remonte la file par la droite dans la bande cyclable. Qui est prioritaire ?",
    answers: [
      "Vous, car vous avez enclenché votre clignotant",
      "Le cycliste, car il circule dans sa voie dédiée et vous coupez sa trajectoire",
      "C'est au premier arrivé de passer",
      "Vous, car le cycliste doit s'arrêter quand un véhicule tourne"
    ],
    correct: [1],
    explanation: "Lorsqu'un cycliste circule sur une bande ou piste cyclable, il a priorité sur les véhicules qui coupent cette voie pour tourner. Avant de tourner à droite, vous devez vérifier votre angle mort droit et céder le passage au cycliste. Le non-respect de cette règle est une cause majeure d'accidents mortels.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Une personne âgée traverse très lentement un passage piéton. Le feu passe au vert pour vous. Que faites-vous ?",
    answers: [
      "Vous avancez doucement en la contournant",
      "Vous attendez qu'elle ait entièrement quitté la chaussée avant de démarrer",
      "Vous klaxonnez pour la presser",
      "Vous avancez car le feu est vert et elle est en tort"
    ],
    correct: [1],
    explanation: "Un piéton engagé sur la chaussée est toujours prioritaire, même si le feu passe au vert pour les véhicules. Vous devez attendre que la personne ait entièrement terminé sa traversée. Les personnes âgées ont un temps de réaction et de déplacement plus long, ce qui nécessite une patience accrue.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "En 2026, une trottinette électrique a-t-elle le droit de circuler sur le trottoir ?",
    answers: [
      "Oui, à condition de ne pas dépasser 10 km/h",
      "Non, sauf si le maire l'autorise par arrêté, et dans ce cas uniquement à l'allure du pas (6 km/h)",
      "Oui, sans restriction en zone 30",
      "Non, c'est interdit dans tous les cas sans exception"
    ],
    correct: [1],
    explanation: "Par défaut, les trottinettes électriques sont interdites sur les trottoirs. Le maire peut toutefois autoriser la circulation sur le trottoir par arrêté municipal, à condition de rouler à l'allure du pas (6 km/h) sans gêner les piétons. En cas d'infraction, l'amende est de 135 €.",
    schema: null,
    tags: ['2026']
  },

  // ===== SECOURS (ajout) =====
  {
    series: 'secours',
    difficulty: 1,
    text: "Quel numéro d'urgence européen peut être composé dans tous les pays de l'UE ?",
    answers: ["15", "17", "18", "112"],
    correct: [3],
    explanation: "Le 112 est le numéro d'urgence européen unique, accessible gratuitement depuis tout téléphone (même sans carte SIM) dans tous les pays de l'Union Européenne. En France, il coexiste avec le 15 (SAMU), le 17 (Police) et le 18 (Pompiers).",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 1,
    text: "Que signifie l'acronyme PAS en matière de premiers secours ?",
    answers: ["Prévenir, Agir, Soigner", "Protéger, Alerter, Secourir", "Prévenir, Appeler, Secourir", "Protéger, Agir, Sauver"],
    correct: [1],
    explanation: "PAS signifie Protéger (sécuriser la zone), Alerter (appeler les secours), Secourir (pratiquer les gestes adaptés). Cet ordre est impératif.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 1,
    text: "Quand devez-vous enfiler votre gilet de haute visibilité ? (plusieurs réponses)",
    answers: ["Avant de sortir du véhicule en cas de panne ou d'accident", "De nuit sur le bord de la route", "En cas d'arrêt d'urgence sur autoroute", "Uniquement quand la police vous le demande"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Le gilet doit être enfilé AVANT de sortir du véhicule en cas d'immobilisation d'urgence (panne, accident), de nuit ou par visibilité réduite. Il doit être à portée du conducteur (pas dans le coffre). L'obligation existe sans demande de la police. Amende de 135 € si absent.",
    schema: `<svg width="270" height="130" viewBox="0 0 270 130" xmlns="http://www.w3.org/2000/svg">
  <rect width="270" height="130" fill="#fff3e0" rx="8"/>
  <rect x="0" y="70" width="270" height="45" fill="#888"/>
  <rect x="0" y="70" width="270" height="4" fill="#ffeb3b"/>
  <rect x="20" y="40" width="80" height="35" rx="4" fill="#bdbdbd"/>
  <circle cx="155" cy="65" r="16" fill="#f9a825"/>
  <line x1="155" y1="45" x2="155" y2="80" stroke="#f57f17" stroke-width="3"/>
  <line x1="139" y1="60" x2="171" y2="60" stroke="#f57f17" stroke-width="3"/>
  <text x="145" y="95" fill="white" font-size="7" font-family="Inter,sans-serif">Personne</text>
  <text x="10" y="20" fill="#e65100" font-size="9" font-family="Inter,sans-serif" font-weight="bold">Gilet haute visibilité obligatoire</text>
  <text x="10" y="33" fill="#555" font-size="8" font-family="Inter,sans-serif">Sur accotement hors agglomération</text>
  <rect x="135" y="45" width="40" height="18" rx="3" fill="#f9a825" opacity="0.3"/>
  <text x="173" y="60" fill="#e65100" font-size="8" font-family="Inter,sans-serif">⬅ gilet jaune</text>
</svg>`,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 1,
    text: "Une victime saigne abondamment au bras. Que faites-vous en premier ?",
    answers: ["Poser un garrot", "Appuyer fortement sur la plaie avec un tissu propre", "Surélever le bras au-dessus du cœur", "Asperger la plaie d'eau froide"],
    correct: [1],
    explanation: "Face à une hémorragie, la priorité est la compression directe : appuyer fortement sur la plaie avec un tissu propre et maintenir la pression. Le garrot n'est utilisé qu'en dernier recours.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 1,
    text: "Le 114 est le numéro d'urgence destiné à quel public ?",
    answers: ["Les touristes étrangers", "Les personnes sourdes ou malentendantes", "Les médecins de garde", "Les appels depuis l'étranger"],
    correct: [1],
    explanation: "Le 114 est le numéro d'urgence national pour les personnes sourdes ou malentendantes. Il permet de contacter les secours par SMS ou visio, disponible 24h/24.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Lors d'un massage cardiaque sur un adulte, quel est le rythme recommandé ?",
    answers: ["60 compressions par minute", "100 à 120 compressions par minute", "80 compressions par minute", "140 compressions par minute"],
    correct: [1],
    explanation: "Le rythme recommandé est de 100 à 120 compressions par minute, avec une profondeur de 5 à 6 cm au centre du sternum. On alterne 30 compressions et 2 insufflations.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Dans quelle situation est-il justifié de déplacer un blessé après un accident ?",
    answers: ["Quand il pleut", "Quand il y a un danger immédiat (incendie, risque d'explosion)", "Quand le blessé le demande", "Quand on veut dégager la circulation"],
    correct: [1],
    explanation: "On ne déplace JAMAIS un blessé sauf en cas de danger vital immédiat : incendie, risque d'explosion, submersion. Déplacer un blessé peut aggraver des lésions vertébrales.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Comment utiliser un défibrillateur automatique externe (DAE) ?",
    answers: ["Uniquement sur instruction du SAMU", "Coller les électrodes sur la poitrine nue et suivre les instructions vocales", "Uniquement si la victime est consciente", "Ne jamais l'utiliser si la victime est mouillée"],
    correct: [1],
    explanation: "Le DAE est conçu pour tout public sans formation. Dénuder la poitrine, coller les électrodes aux emplacements indiqués et suivre les instructions vocales. L'appareil ne délivre un choc que si nécessaire.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Une personne s'étouffe et ne peut plus parler ni tousser. Quel geste pratiquer ?",
    answers: ["Lui taper dans le dos en la penchant vers l'avant", "Lui faire boire de l'eau", "La mettre en PLS", "Lui comprimer le thorax en la couchant"],
    correct: [0],
    explanation: "Face à un étouffement total, pratiquer jusqu'à 5 claques vigoureuses dans le dos entre les omoplates, la victime penchée en avant. Si inefficace, enchaîner avec la manœuvre de Heimlich.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Un motard accidenté est inconscient. Devez-vous retirer son casque ?",
    answers: ["Oui, systématiquement", "Non, sauf s'il ne respire pas et que le casque empêche la réanimation", "Oui, pour le mettre en PLS", "Non, jamais en aucune circonstance"],
    correct: [1],
    explanation: "Le casque ne doit être retiré que si la victime ne respire pas et que le casque empêche la libération des voies aériennes. Le retrait doit idéalement être fait à deux personnes.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Quelle est la conduite à tenir face à une brûlure thermique étendue ?",
    answers: ["Appliquer du beurre ou de la crème grasse", "Refroidir sous l'eau tempérée (15-25°C) pendant 15 minutes et alerter le 15", "Percer les cloques pour éviter l'infection", "Couvrir avec un pansement serré"],
    correct: [1],
    explanation: "Refroidir sous l'eau tempérée (15-25°C, pas glacée) pendant au moins 15 minutes. Ne jamais appliquer de corps gras ni percer les cloques. Alerter le 15 si étendue ou profonde.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Quels éléments sont obligatoires dans tout véhicule en France ? (plusieurs réponses)",
    answers: ["Un gilet de haute visibilité (norme EN 20471)", "Un triangle de présignalisation", "Un éthylotest chimique ou électronique", "Une trousse de premiers secours"],
    correct: [0, 1],
    multi: true,
    explanation: "Seuls le gilet haute visibilité (norme EN 20471, à portée du conducteur) et le triangle de présignalisation sont strictement obligatoires et sanctionnés. L'éthylotest n'est plus sanctionné depuis 2020. La trousse de secours est recommandée mais pas obligatoire.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "À quelle distance du véhicule devez-vous placer le triangle de présignalisation sur route ?",
    answers: ["Au minimum 30 mètres en amont", "Au minimum 50 mètres en amont", "Au minimum 100 mètres en amont", "Juste derrière le véhicule"],
    correct: [0],
    explanation: "Le triangle doit être placé à au moins 30 mètres en amont, visible à 100 mètres. Sur autoroute, la distance minimale est de 100 mètres.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Un piéton en arrêt cardiaque ne respire pas. Quelles actions pratiquer ?",
    answers: ["Le mettre en PLS et attendre les secours", "Faire alerter le 15, commencer le massage cardiaque et faire chercher un DAE", "Pratiquer uniquement le bouche-à-bouche", "Le couvrir et surveiller"],
    correct: [1],
    explanation: "Alerter le 15, commencer le massage cardiaque (30 compressions / 2 insufflations) et envoyer quelqu'un chercher un DAE. Chaque minute sans massage réduit les chances de survie de 10%.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "L'application 'Sauv Life' permet aux citoyens formés d'être alertés en cas d'arrêt cardiaque à proximité. Quel service la coordonne ?",
    answers: ["La Police nationale", "Le SAMU (15)", "Les Pompiers (18)", "La Croix-Rouge"],
    correct: [1],
    explanation: "L'application Sauv Life, coordonnée par le SAMU, géolocalise les citoyens volontaires formés et les alerte lors d'un arrêt cardiaque à proximité pour intervenir avant l'ambulance.",
    schema: null,
    tags: ['2026']
  },

  // ===== ÉCLAIRAGES (ajout) =====
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Les feux de position seuls sont-ils autorisés pour circuler ?",
    answers: ["Oui, en agglomération éclairée", "Non, ils ne servent qu'au stationnement", "Oui, par temps de pluie modérée", "Oui, dans les parkings"],
    correct: [1],
    explanation: "Les feux de position seuls ne permettent pas de circuler. Ils servent uniquement à signaler un véhicule en stationnement. Pour rouler, il faut au minimum les feux de croisement (135 € d'amende).",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Quand est-il obligatoire d'utiliser les clignotants ?",
    answers: ["Uniquement pour tourner à une intersection", "Pour tout changement de direction ou de voie, y compris en rond-point", "Uniquement sur autoroute", "Seulement si d'autres véhicules sont visibles"],
    correct: [1],
    explanation: "Les clignotants sont obligatoires pour tout changement de direction, de voie, dépassement, entrée/sortie de rond-point, stationnement et démarrage. Contravention de 35 €.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Que faire si vous êtes ébloui par un véhicule en face la nuit ?",
    answers: ["Faire des appels de phares", "Ralentir, fixer le bord droit de la route et éventuellement s'arrêter", "Allumer vos pleins phares", "Fermer un œil"],
    correct: [1],
    explanation: "En cas d'éblouissement : ralentir, regarder le bord droit de la chaussée pour garder une référence visuelle, et si nécessaire s'arrêter. Ne jamais répondre par des pleins phares.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Les feux de détresse (warnings) servent à quoi ?",
    answers: ["Stationner en double file", "Signaler un danger, un arrêt d'urgence ou un ralentissement brusque", "Remercier un conducteur", "Chercher une place de stationnement"],
    correct: [1],
    explanation: "Les feux de détresse signalent un danger immédiat : panne, accident, arrêt d'urgence, ou ralentissement brusque sur voie rapide. Les utiliser pour du stationnement abusif ne protège pas d'une verbalisation.",
    schema: `<svg width="270" height="130" viewBox="0 0 270 130" xmlns="http://www.w3.org/2000/svg">
  <rect width="270" height="130" fill="#fff3e0" rx="8"/>
  <rect x="0" y="60" width="270" height="55" fill="#888"/>
  <rect x="90" y="35" width="90" height="40" rx="4" fill="#bdbdbd"/>
  <polygon points="90,50 75,75 90,75" fill="#f39c12" opacity="0.9"/>
  <polygon points="180,50 195,75 180,75" fill="#f39c12" opacity="0.9"/>
  <polygon points="108,35 135,18 162,35" fill="#f39c12" opacity="0.9"/>
  <polygon points="108,75 135,92 162,75" fill="#f39c12" opacity="0.9"/>
  <text x="102" y="60" fill="#333" font-size="9" font-family="Inter,sans-serif" font-weight="bold">DANGER</text>
  <text x="30" y="20" fill="#e65100" font-size="9" font-family="Inter,sans-serif" font-weight="bold">Feux de détresse (warning)</text>
  <text x="30" y="33" fill="#555" font-size="8" font-family="Inter,sans-serif">4 clignotants simultanés</text>
</svg>`,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Quelle est la portée approximative des feux de croisement ?",
    answers: ["30 mètres", "50 mètres", "100 mètres", "200 mètres"],
    correct: [0],
    explanation: "Les feux de croisement éclairent à environ 30 mètres. C'est pourquoi à 90 km/h (distance d'arrêt ~70 m), ils sont insuffisants hors agglomération. Les feux de route éclairent à ~100 mètres.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Les feux de brouillard avant peuvent-ils être utilisés en complément des feux de croisement ?",
    answers: ["Oui, en cas de brouillard, pluie forte ou neige uniquement", "Oui, à tout moment", "Non, ils remplacent les feux de croisement", "Non, ils sont interdits en France"],
    correct: [0],
    explanation: "Les feux de brouillard avant s'utilisent EN COMPLÉMENT des feux de croisement, uniquement par brouillard, pluie forte, neige ou poussière.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Quels feux utiliser en entrant dans un tunnel éclairé ?",
    answers: ["Feux de position", "Feux de croisement obligatoirement", "Feux de route si le tunnel est long", "Aucun si bien éclairé"],
    correct: [1],
    explanation: "Les feux de croisement sont obligatoires dans tous les tunnels, même éclairés. Les feux de route sont interdits en tunnel car ils éblouissent les autres conducteurs.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "La nuit, vous suivez un véhicule. Quels feux utiliser ?",
    answers: ["Feux de route", "Feux de croisement", "Feux de position", "Feux de brouillard avant"],
    correct: [1],
    explanation: "Lorsque vous suivez un véhicule, utilisez les feux de croisement pour ne pas éblouir le conducteur précédent via ses rétroviseurs. Repasser en feux de route uniquement après dépassement.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Comment vérifier l'angle mort avant un changement de voie ?",
    answers: ["Tourner la tête brièvement du côté concerné après avoir vérifié les rétroviseurs", "Se fier uniquement au rétroviseur intérieur", "Klaxonner avant de changer", "Accélérer rapidement"],
    correct: [0],
    explanation: "Vérification en trois étapes : rétroviseur intérieur, rétroviseur extérieur du côté concerné, puis contrôle visuel direct (tourner brièvement la tête). Obligatoire et évalué à l'examen.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Un automobiliste vous fait un appel de phares. Que signifie ce geste ?",
    answers: ["Il vous cède la priorité", "Il signale un danger ou prévient, mais ne vaut pas cession de priorité", "Il vous demande de vous arrêter", "Il signale que vos feux sont éteints"],
    correct: [1],
    explanation: "L'appel de phares est un signal d'avertissement (danger, contrôle, oubli d'éclairage). Il ne constitue JAMAIS une cession de priorité au sens du Code.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Quels équipements d'éclairage sont obligatoires pour les trottinettes électriques de nuit ? (plusieurs réponses)",
    answers: ["Un feu avant blanc ou jaune", "Un feu arrière rouge", "Des catadioptres latéraux et arrière", "Un gilet haute visibilité hors agglomération"],
    correct: [0, 1, 2, 3],
    multi: true,
    explanation: "Les trottinettes électriques de nuit doivent avoir : feu avant blanc/jaune, feu arrière rouge, catadioptres (latéraux et arrière). Le gilet haute visibilité est obligatoire hors agglomération de nuit ou par visibilité insuffisante. En ville il est seulement recommandé.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Quels défauts d'éclairage entraînent une contre-visite au contrôle technique ? (plusieurs réponses)",
    answers: ["Un feu de croisement défaillant ou mal réglé", "Un feu stop non fonctionnel", "Un clignotant défaillant", "Une ampoule de plafonnier intérieur grillée"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Entraînent une contre-visite : feu de croisement défaillant ou mal réglé, feu stop non fonctionnel, clignotant défaillant, feu arrière défaillant. L'éclairage intérieur (plafonnier) n'est pas contrôlé au CT. Le véhicule doit repasser dans les 2 mois.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Sur autoroute de nuit, vos feux de route tombent en panne. Que faire ?",
    answers: ["Continuer avec les feux de croisement en réduisant votre vitesse", "Allumer les feux de brouillard avant", "S'arrêter sur la bande d'arrêt d'urgence", "Continuer à la même vitesse"],
    correct: [0],
    explanation: "Les feux de croisement éclairent à ~30 m. À 130 km/h, la distance d'arrêt dépasse 170 m. Réduire impérativement la vitesse pour l'adapter à la distance éclairée.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Depuis 2026, les véhicules neufs en Europe doivent être équipés de quel système d'éclairage ?",
    answers: ["Feux de jour (DRL) à allumage automatique", "Phares laser longue portée", "Éclairage intérieur automatique", "Feux de brouillard adaptatifs"],
    correct: [0],
    explanation: "Tous les véhicules neufs doivent avoir des feux de jour (DRL) à allumage automatique dès le démarrage. Ils améliorent la visibilité de jour mais ne remplacent pas les feux de croisement de nuit.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Quelles sont les obligations d'éclairage pour un vélo circulant de nuit ? (plusieurs réponses)",
    answers: ["Un feu avant blanc ou jaune", "Un feu arrière rouge", "Un gilet haute visibilité hors agglomération", "Des catadioptres (réflecteurs) sur les roues et pédales"],
    correct: [0, 1, 2, 3],
    multi: true,
    explanation: "De nuit, un vélo doit avoir : feu avant blanc/jaune, feu arrière rouge, catadioptres (orange latéraux, rouge arrière, blancs avant, orange sur les pédales). Le gilet haute visibilité est obligatoire hors agglomération de nuit. Amende de 11 € en cas de non-respect.",
    schema: null,
    tags: []
  },

  // ===== QUESTIONS SUPPLEMENTAIRES (Lot 1) =====
// === SIGNALISATION (5) ===
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Que signifie un panneau carré bleu avec un P blanc suivi d'un pictogramme de prise électrique ?",
    answers: ["Parking réservé aux véhicules électriques en charge", "Parking avec borne Wi-Fi", "Station de recharge payante interdite au stationnement", "Parking souterrain avec éclairage"],
    correct: [0],
    explanation: "Ce panneau indique un emplacement de stationnement réservé aux véhicules électriques en cours de recharge. Stationner sans recharger est passible d'une amende.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Un panneau triangulaire de danger suivi d'un panonceau M9z portant la mention '200 m' et d'un panonceau d'étendue M2. Que signifie cette combinaison ?",
    answers: ["Le danger commence dans 200 m et s'étend sur une certaine distance", "Le danger est situé exactement à 200 m", "La limitation dure 200 m", "Le panneau est valable pour les 200 prochains mètres uniquement"],
    correct: [0],
    explanation: "Le panonceau de distance indique que le danger commence à 200 m, et le panonceau d'étendue M2 précise que ce danger s'étend sur une distance indiquée. Les deux panonceaux se combinent.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Que signifie un panneau de service bleu représentant une flamme orange dans un carré ?",
    answers: ["Station de distribution de gaz (GNV/GPL)", "Aire de pique-nique avec barbecue", "Risque d'incendie", "Chauffage disponible dans l'aire de repos"],
    correct: [0],
    explanation: "Ce panneau de service CE15f indique la présence d'un poste de distribution de carburant gaz (GNV ou GPL) pour véhicules.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Un panneau rond à fond bleu avec une flèche blanche pointant vers le haut signifie :",
    answers: ["Obligation d'aller tout droit", "Sens unique", "Début d'autoroute", "Voie prioritaire"],
    correct: [0],
    explanation: "Un panneau rond à fond bleu est un panneau d'obligation. La flèche vers le haut impose de continuer tout droit à la prochaine intersection.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Vous voyez un panneau C24a (voie verte) suivi d'un panonceau indiquant 'sauf engins de déplacement personnel motorisés'. Qui peut circuler ?",
    answers: ["Piétons et cyclistes uniquement", "Piétons, cyclistes et trottinettes électriques", "Tous les usagers non motorisés et les EDPM", "Piétons uniquement"],
    correct: [0],
    explanation: "La voie verte est normalement ouverte aux piétons, cyclistes et EDPM. Avec le panonceau 'sauf EDPM', les trottinettes électriques et autres engins motorisés personnels sont exclus. Seuls piétons et cyclistes peuvent y circuler.",
    schema: null,
    tags: ['2026']
  },

  // === PRIORITES (5) ===
  {
    series: 'priorites',
    difficulty: 3,
    text: "À une intersection sans signalisation, un tramway arrive à votre gauche, un cycliste à votre droite et un véhicule en face tourne à gauche. Dans quel ordre passez-vous ?",
    answers: ["Tramway, cycliste, vous, véhicule d'en face", "Cycliste, tramway, véhicule d'en face, vous", "Tramway, vous, cycliste, véhicule d'en face", "Vous, tramway, cycliste, véhicule d'en face"],
    correct: [0],
    explanation: "Le tramway a toujours la priorité absolue quel que soit son côté d'arrivée. Ensuite la règle de la priorité à droite s'applique : le cycliste à votre droite passe, puis vous, puis le véhicule qui tourne à gauche (il doit céder à ceux venant en face).",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Un agent de circulation lève le bras verticalement au-dessus de sa tête. Que devez-vous faire ?",
    answers: ["Vous arrêter, même si le feu est vert", "Accélérer pour dégager le carrefour", "Continuer si vous êtes déjà engagé dans l'intersection", "Ralentir et passer prudemment"],
    correct: [0],
    explanation: "Le bras levé de l'agent signifie arrêt pour tous les usagers de toutes les directions. Les ordres de l'agent prévalent sur la signalisation lumineuse et les panneaux.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Quatre véhicules arrivent simultanément à un carrefour en croix sans signalisation, chacun venant d'une direction différente. Que se passe-t-il ?",
    answers: ["Situation de blocage : les conducteurs doivent se concerter par gestes", "Le véhicule le plus lourd passe en premier", "Celui venant du nord a la priorité", "On applique la priorité à droite en alternance automatique"],
    correct: [0],
    explanation: "Quand 4 véhicules arrivent simultanément des 4 directions, chacun a un véhicule à sa droite : c'est un blocage de priorité à droite. Les conducteurs doivent se concerter par gestes pour se céder mutuellement le passage.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Vous arrivez à un rond-point signalé par un panneau 'Cédez le passage' et un panneau 'Sens giratoire'. Un cycliste est déjà engagé dans le rond-point. Que faites-vous ?",
    answers: ["Vous cédez le passage au cycliste qui est prioritaire dans l'anneau", "Vous passez car les véhicules motorisés sont prioritaires sur les cyclistes", "Vous klaxonnez pour signaler votre présence", "Vous entrez dans le rond-point si le cycliste est éloigné de plus de 50 m"],
    correct: [0],
    explanation: "Dans un rond-point avec 'Cédez le passage', tous les usagers déjà engagés dans l'anneau sont prioritaires, y compris les cyclistes. Vous devez attendre que la voie soit libre.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "Un véhicule prioritaire (gyrophare bleu + sirène) arrive derrière vous sur une route à une voie par sens. Que devez-vous faire ?",
    answers: ["Vous ranger à droite dès que possible pour le laisser passer", "Accélérer pour ne pas le gêner", "Vous arrêter immédiatement où vous êtes", "Allumer vos warnings et freiner"],
    correct: [0],
    explanation: "Vous devez faciliter le passage du véhicule prioritaire en vous rangeant à droite dès que vous pouvez le faire en sécurité, sans freiner brusquement ni vous arrêter brutalement au milieu de la chaussée.",
    schema: null,
    tags: []
  },

  // === VITESSES (5) ===
  {
    series: 'vitesses',
    difficulty: 2,
    text: "À 90 km/h sur route sèche, quelle est approximativement la distance totale d'arrêt (réaction + freinage) ?",
    answers: ["Environ 70 mètres", "Environ 45 mètres", "Environ 90 mètres", "Environ 120 mètres"],
    correct: [0],
    explanation: "À 90 km/h : distance de réaction ≈ 25 m (1 seconde) + distance de freinage ≈ 45 m = distance totale d'arrêt ≈ 70 m sur chaussée sèche. La formule simplifiée est (vitesse/10)² × 0.5 pour le freinage.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Sur route mouillée, par combien la distance de freinage est-elle multipliée par rapport à une route sèche ?",
    answers: ["Par 2 environ", "Par 1.5", "Par 3", "Elle reste identique avec des pneus neufs"],
    correct: [0],
    explanation: "Sur chaussée mouillée, la distance de freinage est environ doublée en raison de la réduction de l'adhérence. À 90 km/h, cela porte la distance d'arrêt totale à environ 115 m.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Quelle est la vitesse maximale autorisée par temps de pluie sur autoroute pour un conducteur confirmé ?",
    answers: ["110 km/h", "130 km/h", "100 km/h", "90 km/h"],
    correct: [0],
    explanation: "Par temps de pluie, la vitesse maximale sur autoroute est réduite de 130 à 110 km/h. Sur route à 2×2 voies elle passe de 110 à 100 km/h, et sur les autres routes de 80 à 80 km/h (pas de changement).",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "Un jeune conducteur (permis probatoire) roule sur autoroute. Quelle est sa vitesse maximale ?",
    answers: ["110 km/h", "130 km/h", "100 km/h", "90 km/h"],
    correct: [0],
    explanation: "En période probatoire, la vitesse est limitée à 110 km/h sur autoroute, 100 km/h sur route à 2×2 voies séparées et 80 km/h sur les autres routes.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Un radar mobile embarqué dans un véhicule banalisé en mouvement applique une marge technique de :",
    answers: ["10 km/h en dessous de 100 km/h, 10 % au-dessus de 100 km/h", "5 km/h quelle que soit la vitesse", "10 % quelle que soit la vitesse", "5 km/h en dessous de 100 km/h, 5 % au-dessus"],
    correct: [0],
    explanation: "Les radars mobiles embarqués (en mouvement) appliquent une marge technique de 10 km/h pour les vitesses inférieures à 100 km/h et de 10 % pour les vitesses supérieures ou égales à 100 km/h. Ces marges sont plus élevées que pour les radars fixes.",
    schema: null,
    tags: []
  },

  // === ALCOOL (5) ===
  {
    series: 'alcool',
    difficulty: 1,
    text: "Quel est le taux d'alcool maximal autorisé dans le sang pour un jeune conducteur en période probatoire ?",
    answers: ["0.2 g/L de sang", "0.5 g/L de sang", "0 g/L de sang", "0.3 g/L de sang"],
    correct: [0],
    explanation: "Depuis 2015, le taux d'alcool autorisé pour les conducteurs en permis probatoire est de 0.2 g/L de sang (soit 0.10 mg/L d'air expiré), ce qui correspond en pratique à zéro verre d'alcool.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "En cas de récidive de conduite en état d'ivresse manifeste (taux ≥ 0.8 g/L), quelles sanctions maximales encourt le conducteur ?",
    answers: ["4 ans de prison et 9 000 € d'amende", "2 ans de prison et 4 500 € d'amende", "1 an de prison et 15 000 € d'amende", "6 mois de prison et 3 750 € d'amende"],
    correct: [0],
    explanation: "La récidive de conduite avec un taux ≥ 0.8 g/L ou en état d'ivresse manifeste est punie de 4 ans d'emprisonnement et 9 000 € d'amende (peines doublées par rapport à la première infraction).",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Depuis 2024, dans quel cas l'installation d'un éthylotest anti-démarrage (EAD) peut-il être imposé par le juge ou le préfet ?",
    answers: ["Dès la première infraction avec un taux ≥ 0.8 g/L ou en récidive", "Uniquement après la troisième infraction alcool", "Seulement si le conducteur est professionnel", "Uniquement en cas d'accident corporel sous alcool"],
    correct: [0],
    explanation: "Le juge ou le préfet peut imposer un EAD dès la première infraction grave (taux ≥ 0.8 g/L) ou en cas de récidive. Le conducteur ne peut alors démarrer son véhicule qu'après avoir soufflé un taux nul dans l'éthylotest intégré.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Vous avez bu 3 verres standard d'alcool à 22h. À quelle heure approximative pouvez-vous reprendre le volant en étant sous 0.5 g/L (conducteur confirmé) ?",
    answers: ["Vers 4h du matin", "Vers 1h du matin", "Vers 23h", "Le lendemain à 8h"],
    correct: [0],
    explanation: "Chaque verre standard élève le taux d'environ 0.20-0.25 g/L. Trois verres ≈ 0.60-0.75 g/L. Le corps élimine environ 0.10-0.15 g/L par heure. Il faut environ 5-6 heures pour repasser sous 0.5 g/L, soit vers 4h du matin.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "En 2026, quels véhicules neufs doivent être équipés d'une interface permettant l'installation d'un éthylotest anti-démarrage ?",
    answers: ["Tous les véhicules neufs homologués selon le règlement GSR2 européen", "Uniquement les poids lourds", "Seulement les véhicules de transport en commun", "Aucun, c'est prévu pour 2030"],
    correct: [0],
    explanation: "Le règlement européen GSR2 (General Safety Regulation 2) impose depuis juillet 2024 que tous les véhicules neufs soient équipés d'une interface de connexion permettant l'installation ultérieure d'un EAD, facilitant ainsi son déploiement en cas de condamnation.",
    schema: null,
    tags: ['2026']
  },

  // === SECOURS (5) ===
  {
    series: 'secours',
    difficulty: 2,
    text: "Vous êtes premier arrivé sur un accident avec une victime inconsciente qui respire. Après avoir sécurisé la zone et alerté les secours, quelle position adoptez-vous pour la victime ?",
    answers: ["Position latérale de sécurité (PLS)", "Position assise dos calé", "Sur le dos tête en hyperextension", "Ne pas la toucher du tout en attendant les secours"],
    correct: [0],
    explanation: "Une victime inconsciente qui respire doit être mise en PLS pour éviter l'étouffement par la chute de la langue ou des vomissements. On ne déplace une victime que si danger immédiat (incendie, explosion).",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Une victime présente des brûlures chimiques sur l'avant-bras suite à un accident impliquant un transport de matières dangereuses. Que faites-vous en premier ?",
    answers: ["Arroser abondamment à l'eau courante pendant au moins 20 minutes", "Appliquer une crème grasse sur la brûlure", "Retirer les vêtements collés à la peau", "Frotter la zone pour enlever le produit chimique"],
    correct: [0],
    explanation: "Pour une brûlure chimique, il faut arroser immédiatement et abondamment à l'eau tiède/courante pendant au minimum 20 minutes pour diluer et éliminer le produit. Ne jamais frotter ni retirer les vêtements adhérents.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Quels sont les signes d'un AVC (accident vasculaire cérébral) justifiant un appel immédiat au 15 ?",
    answers: ["Paralysie d'un côté du visage, difficulté à parler, faiblesse d'un membre", "Forte douleur dans la poitrine irradiant dans le bras gauche", "Perte de conscience avec arrêt respiratoire", "Saignement abondant au niveau de la tête"],
    correct: [0],
    explanation: "Les signes FAST de l'AVC : Face (paralysie faciale asymétrique), Arm (faiblesse d'un bras), Speech (troubles de la parole), Time (appeler le 15 immédiatement). Chaque minute compte pour limiter les séquelles.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 1,
    text: "Quel numéro composez-vous pour joindre les secours médicaux (SAMU) en France ?",
    answers: ["15", "17", "18", "112"],
    correct: [0],
    explanation: "Le 15 est le numéro du SAMU (urgences médicales). Le 17 est la police/gendarmerie, le 18 les pompiers, et le 112 le numéro d'urgence européen universel.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Une victime d'accident est en arrêt cardiaque. Vous n'avez pas de défibrillateur. Quel rythme de massage cardiaque appliquez-vous ?",
    answers: ["30 compressions puis 2 insufflations, au rythme de 100-120 compressions/min", "15 compressions puis 1 insufflation, au rythme de 80 compressions/min", "50 compressions sans insufflation", "10 compressions puis 5 insufflations au rythme de 60/min"],
    correct: [0],
    explanation: "Le protocole de réanimation cardio-pulmonaire (RCP) pour un adulte est de 30 compressions thoraciques suivies de 2 insufflations, à un rythme de 100 à 120 compressions par minute, en appuyant de 5-6 cm sur le sternum.",
    schema: null,
    tags: []
  },

  // === ECLAIRAGES (5) ===
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Vous roulez de nuit sur une route non éclairée et un véhicule arrive en face. Quelle combinaison de feux utilisez-vous ?",
    answers: ["Feux de croisement uniquement", "Feux de route jusqu'au dernier moment puis croisement", "Feux de position uniquement", "Feux de brouillard avant"],
    correct: [0],
    explanation: "À l'approche d'un véhicule en face, vous devez passer en feux de croisement pour ne pas éblouir le conducteur. Le passage doit se faire suffisamment tôt (au moins 150 m avant).",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Votre feu de croisement droit tombe en panne de nuit sur une route départementale. Que devez-vous faire ?",
    answers: ["Réparer ou faire réparer immédiatement, et en attendant utiliser les feux de position + feu de brouillard avant si disponible, en réduisant la vitesse", "Continuer avec le feu gauche seul", "Allumer les feux de route en continu", "Vous arrêter et attendre le jour"],
    correct: [0],
    explanation: "Rouler avec un seul feu de croisement est dangereux (confusion avec un deux-roues) et interdit. Vous devez faire réparer au plus vite. En attendant, réduisez votre vitesse et utilisez les éclairages de substitution disponibles.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Quand pouvez-vous utiliser le feu de brouillard arrière ?",
    answers: ["Uniquement quand la visibilité est inférieure à 50 m (brouillard, pluie forte, neige)", "Dès qu'il pleut", "De nuit systématiquement", "Quand vous roulez sur autoroute de nuit"],
    correct: [0],
    explanation: "Le feu de brouillard arrière ne doit être utilisé que par visibilité inférieure à 50 m. Sinon il éblouit les véhicules qui suivent. Il est interdit de l'utiliser par simple pluie ou de nuit sans brouillard.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Vous suivez un véhicule de nuit sur une route non éclairée. Quels feux devez-vous utiliser ?",
    answers: ["Feux de croisement pour ne pas éblouir le conducteur devant via ses rétroviseurs", "Feux de route pour bien voir la chaussée", "Feux de position uniquement", "Feux de brouillard avant"],
    correct: [0],
    explanation: "Lorsque vous suivez un véhicule, les feux de route éblouissent le conducteur précédent par ses rétroviseurs. Les feux de croisement sont obligatoires dans cette situation, comme lors d'un croisement.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "En agglomération bien éclairée de nuit, quels feux devez-vous utiliser ?",
    answers: ["Feux de croisement", "Feux de position suffisent", "Feux de route", "Aucun éclairage n'est obligatoire en zone éclairée"],
    correct: [0],
    explanation: "En agglomération, même bien éclairée, les feux de croisement sont obligatoires de nuit. Les feux de position seuls sont insuffisants pour voir et être vu. Les feux de route sont interdits en ville.",
    schema: null,
    tags: []
  },

  // === AUTOROUTE (5) ===
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Qu'est-ce que le 'corridor de secours' (ou couloir d'urgence) sur autoroute en cas de bouchon ?",
    answers: ["Un espace libre entre la voie de gauche et les autres voies, créé par les véhicules pour laisser passer les secours", "La bande d'arrêt d'urgence utilisée par les pompiers", "Une voie spéciale ouverte par le gestionnaire d'autoroute", "L'espace entre la glissière centrale et la voie de gauche"],
    correct: [0],
    explanation: "Le corridor de secours est formé par les usagers : les véhicules de la voie la plus à gauche se décalent à gauche, les autres à droite, créant un passage au milieu pour les véhicules de secours. C'est une obligation depuis 2018.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Vous tombez en panne sèche sur autoroute. Quelles sanctions risquez-vous ?",
    answers: ["Une amende de 2e classe (35 €) pour immobilisation sur autoroute par négligence", "Aucune sanction, c'est un cas de force majeure", "Un retrait de 3 points", "Une contravention de 4e classe (135 €)"],
    correct: [0],
    explanation: "La panne sèche est considérée comme une négligence du conducteur (il devait vérifier son carburant avant de prendre l'autoroute). C'est une contravention de 2e classe passible d'une amende forfaitaire de 35 €.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Vous approchez d'un bouchon sur autoroute. Que devez-vous faire immédiatement ?",
    answers: ["Allumer les feux de détresse (warnings) pour prévenir les véhicules derrière", "Changer de voie rapidement pour trouver la plus fluide", "Freiner fort pour vous arrêter au plus vite", "Rouler sur la bande d'arrêt d'urgence pour dépasser le bouchon"],
    correct: [0],
    explanation: "En approchant d'un bouchon ou d'un ralentissement brusque sur autoroute, allumez immédiatement vos feux de détresse pour avertir les véhicules qui vous suivent du danger. Puis freinez progressivement.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 1,
    text: "Un animal traverse l'autoroute devant vous. Que faites-vous ?",
    answers: ["Freiner sans faire d'écart brusque et rester dans votre voie", "Donner un coup de volant pour l'éviter", "Accélérer pour passer avant lui", "Vous arrêter sur la bande d'arrêt d'urgence et descendre récupérer l'animal"],
    correct: [0],
    explanation: "Sur autoroute à grande vitesse, un écart brusque est extrêmement dangereux (tonneaux, collision avec d'autres véhicules). Il faut freiner progressivement sans dévier de sa trajectoire, même si cela signifie heurter l'animal.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Quelle est la distance minimale de sécurité entre deux véhicules sur autoroute à 130 km/h ?",
    answers: ["Environ 90 mètres (2 secondes)", "50 mètres", "130 mètres", "2 bandes blanches de la bande d'arrêt d'urgence"],
    correct: [0],
    explanation: "La règle des 2 secondes donne à 130 km/h : 130 000 m / 3600 s × 2 = environ 72 m minimum. En pratique, on retient 90 m (un repère = 2 lignes de balisage). Le code impose un minimum de 2 secondes soit environ 73 m à cette vitesse.",
    schema: null,
    tags: []
  },

  // === VULNERABLES (5) ===
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Quelle distance latérale minimale devez-vous respecter en dépassant un cycliste en agglomération ?",
    answers: ["1 mètre", "1.5 mètre", "50 centimètres", "2 mètres"],
    correct: [0],
    explanation: "En agglomération, la distance latérale minimale pour dépasser un cycliste (ou tout usager vulnérable) est de 1 mètre. Hors agglomération, elle passe à 1.5 mètre.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Vous approchez d'un groupe d'enfants sur le trottoir à proximité d'une école. L'un d'eux tient un ballon. Que devez-vous anticiper ?",
    answers: ["Qu'un enfant peut surgir sur la chaussée à tout moment pour récupérer le ballon", "Que les enfants sont surveillés donc pas de risque", "Que les enfants connaissent les règles de sécurité", "Qu'il suffit de klaxonner pour les prévenir"],
    correct: [0],
    explanation: "Les enfants sont imprévisibles et n'ont pas conscience du danger. Un ballon près de la route est un indice fort qu'un enfant peut surgir. Il faut ralentir, couvrir le frein et être prêt à s'arrêter.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Vous arrivez derrière un convoi agricole de plus de 25 m sur une route départementale. Que devez-vous savoir ?",
    answers: ["Il peut déborder largement lors des virages et vous ne devez doubler que si la visibilité permet de voir au-delà du convoi entier", "Vous pouvez le doubler par la droite s'il roule à gauche", "Il est obligé de s'arrêter toutes les 5 minutes pour laisser passer les voitures", "Vous pouvez le dépasser dans un virage car il roule lentement"],
    correct: [0],
    explanation: "Un convoi agricole large et long peut occuper toute la chaussée en virage. Pour le doubler, vous devez avoir une visibilité totale sur toute la longueur du dépassement. Ne jamais s'engager si vous ne voyez pas au-delà du convoi.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 1,
    text: "Comment devez-vous réagir face à un cavalier sur la chaussée ?",
    answers: ["Ralentir, ne pas klaxonner, dépasser lentement et à bonne distance", "Klaxonner pour signaler votre présence au cheval", "Passer rapidement pour ne pas rester à côté du cheval trop longtemps", "Allumer les feux de route pour que le cavalier vous voie"],
    correct: [0],
    explanation: "Les chevaux sont des animaux craintifs. Le bruit du klaxon, un passage rapide ou des phares éblouissants peuvent les effrayer et provoquer un accident. Il faut ralentir fortement et dépasser doucement avec une large distance latérale.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Vous passez devant un chantier où des ouvriers travaillent en bord de route. Quelle précaution prenez-vous ?",
    answers: ["Ralentir, s'écarter au maximum des ouvriers et être prêt à s'arrêter", "Maintenir votre vitesse car les ouvriers sont protégés par les balises", "Klaxonner pour les prévenir de votre passage", "Allumer les feux de détresse"],
    correct: [0],
    explanation: "Les travailleurs sur chantier sont des usagers vulnérables. Même avec des balises, un ouvrier peut reculer sur la chaussée. Réduisez votre vitesse, écartez-vous au maximum et soyez prêt à vous arrêter.",
    schema: null,
    tags: []
  },

  // === STATIONNEMENT (5) ===
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Vous dépassez la durée de stationnement payée à l'horodateur. Quel type de sanction encourez-vous depuis la réforme du stationnement ?",
    answers: ["Un forfait de post-stationnement (FPS) dont le montant est fixé par la commune", "Une amende pénale de 17 €", "Un retrait de points", "La mise en fourrière automatique"],
    correct: [0],
    explanation: "Depuis 2018, le dépassement de stationnement payant n'est plus une contravention pénale mais donne lieu à un FPS (forfait de post-stationnement) dont le montant est fixé par chaque commune (généralement entre 20 et 60 €).",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Dans quels cas votre véhicule peut-il être mis en fourrière ?",
    answers: ["Stationnement gênant/dangereux/abusif (+ de 7 jours), ou véhicule non assuré, ou décision judiciaire", "Uniquement en cas de stationnement sur place handicapé", "Seulement après 30 jours de stationnement au même endroit", "Uniquement sur décision d'un tribunal"],
    correct: [0],
    explanation: "La mise en fourrière peut être ordonnée pour : stationnement gênant, dangereux ou abusif (+ de 7 jours au même endroit), véhicule non assuré, épave, contrôle technique dépassé de plus de 2 mois, ou décision de justice.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 1,
    text: "Quelle est la distance minimale de stationnement à respecter avant un passage piéton ?",
    answers: ["5 mètres", "10 mètres", "3 mètres", "Aucune distance imposée"],
    correct: [0],
    explanation: "Il est interdit de stationner à moins de 5 mètres en amont d'un passage piéton (dans le sens de circulation) pour ne pas masquer la visibilité des piétons qui s'engagent.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Qu'est-ce que le 'stationnement résidentiel' dans les zones de stationnement payant ?",
    answers: ["Un tarif préférentiel pour les résidents du quartier qui ont un abonnement auprès de la mairie", "Un stationnement gratuit et illimité pour les habitants", "Une place réservée nominativement devant son domicile", "Un garage souterrain communal réservé aux résidents"],
    correct: [0],
    explanation: "Le stationnement résidentiel permet aux habitants d'un quartier de bénéficier d'un tarif très réduit (souvent 0.50-1.50 €/jour) en s'abonnant auprès de la commune. Ce n'est ni gratuit ni une place réservée spécifique.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Vous stationnez sur un emplacement réservé aux personnes handicapées sans carte de stationnement valide. Quelle sanction risquez-vous ?",
    answers: ["Amende de 135 € (4e classe) + possible mise en fourrière", "Amende de 35 €", "Simple avertissement", "Amende de 750 € et retrait de 6 points"],
    correct: [0],
    explanation: "Le stationnement sur une place handicapée sans carte (CMI stationnement) est une contravention de 4e classe punie de 135 € d'amende forfaitaire. Le véhicule peut également être mis en fourrière.",
    schema: null,
    tags: []
  },

  // === ECOCONDUITE (5) ===
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quel est le principal critère du malus écologique automobile en 2026 en France ?",
    answers: ["Les émissions de CO2 en g/km selon le cycle WLTP", "La puissance fiscale du véhicule", "Le poids du véhicule uniquement", "La cylindrée du moteur"],
    correct: [0],
    explanation: "Le malus écologique 2026 est basé principalement sur les émissions de CO2 mesurées en cycle WLTP. Le seuil de déclenchement baisse chaque année (113 g/km en 2026) et le malus maximum continue d'augmenter.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Que deviennent les batteries des véhicules électriques en fin de vie selon la réglementation européenne 2026 ?",
    answers: ["Elles doivent être recyclées avec un taux minimum de récupération des matériaux fixé par la loi, ou réutilisées en stockage stationnaire", "Elles sont enfouies dans des décharges spécialisées", "Elles sont renvoyées au constructeur sans obligation de recyclage", "Elles sont incinérées avec les déchets industriels"],
    correct: [0],
    explanation: "Le règlement européen batteries (2023/1542) impose des taux de recyclage croissants : 50% du lithium et 90% du cobalt/nickel/cuivre doivent être récupérés. Les batteries peuvent aussi connaître une seconde vie en stockage d'énergie stationnaire.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quelle technique d'écoconduite permet d'économiser le plus de carburant en ville ?",
    answers: ["Anticiper les freinages et utiliser le frein moteur plutôt que freiner au dernier moment", "Rouler systématiquement en première vitesse", "Couper le moteur à chaque feu rouge manuellement", "Gonfler les pneus à 3 bars au-dessus de la pression recommandée"],
    correct: [0],
    explanation: "L'anticipation est le pilier de l'écoconduite : lever le pied tôt et utiliser le frein moteur (consommation nulle en décélération sur les véhicules modernes) plutôt que freiner tardivement économise jusqu'à 20% de carburant en ville.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Quel est l'état actuel du déploiement des stations hydrogène pour véhicules particuliers en France en 2026 ?",
    answers: ["Réseau très limité (moins de 100 stations), principalement orienté vers les flottes professionnelles et utilitaires", "Plus de 1 000 stations couvrant tout le territoire", "L'hydrogène pour véhicules particuliers a été abandonné en France", "Chaque station-service classique propose aussi de l'hydrogène"],
    correct: [0],
    explanation: "En 2026, le réseau hydrogène français reste embryonnaire pour les particuliers. Le développement est concentré sur les flottes captives (bus, utilitaires, poids lourds). Le coût élevé et le faible nombre de véhicules limitent le déploiement.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "De combien la climatisation augmente-t-elle la consommation de carburant en moyenne ?",
    answers: ["10 à 20 % en ville", "Moins de 1 %", "50 % sur autoroute", "Elle n'affecte pas la consommation sur les véhicules modernes"],
    correct: [0],
    explanation: "La climatisation augmente la consommation de 10 à 20 % en ville (jusqu'à 35 % dans les embouteillages) et environ 5 % sur autoroute. C'est l'un des postes de surconsommation les plus importants. Préférer la ventilation quand la température le permet.",
    schema: null,
    tags: ['2026']
  },

  // ===== QUESTIONS SUPPLEMENTAIRES (Lot 2) =====
// === SIGNALISATION (5) ===
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Un panneau de localisation à fond vert avec des caractères blancs indique :",
    answers: ["Une agglomération", "Un lieu-dit", "Une autoroute ou une sortie d'autoroute", "Un itinéraire touristique"],
    correct: [2],
    explanation: "Les panneaux de localisation à fond vert concernent le réseau autoroutier. Le fond bleu indique les routes, le fond blanc les agglomérations, le fond marron le tourisme.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Les panneaux de jalonnement piétonnier (fond blanc, pictogramme piéton) servent à :",
    answers: ["Interdire la circulation piétonne", "Indiquer un passage piéton à proximité", "Guider les piétons vers des destinations locales", "Signaler une zone piétonne obligatoire"],
    correct: [2],
    explanation: "Les panneaux de jalonnement piétonnier orientent les piétons vers des destinations locales (gare, mairie, office de tourisme). Ils ne sont ni une interdiction ni une obligation.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Sur un aéroport, les lignes de balisage au sol jaunes continues signifient :",
    answers: ["Stationnement autorisé", "Voie réservée aux bus", "Interdiction de franchissement pour les aéronefs", "Zone de chargement"],
    correct: [2],
    explanation: "La signalisation aéroportuaire utilise des lignes jaunes continues pour interdire le franchissement aux aéronefs. Cette signalisation est spécifique aux aires de manœuvre.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Une glissière de sécurité métallique en bord de route sert principalement à :",
    answers: ["Empêcher les piétons de traverser", "Retenir les véhicules sortant de la chaussée", "Délimiter les voies de circulation", "Protéger les canalisations souterraines"],
    correct: [1],
    explanation: "Les glissières de sécurité sont des dispositifs de retenue qui empêchent les véhicules de quitter la route en cas de perte de contrôle, réduisant la gravité des accidents.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Les balises de virage (chevrons blancs et rouges) indiquent :",
    answers: ["Un sens interdit", "La direction du virage et sa dangerosité", "Une zone de travaux", "Un passage à niveau"],
    correct: [1],
    explanation: "Les balises de virage à chevrons indiquent le sens du virage. Plus il y a de panneaux successifs, plus le virage est prononcé. Elles aident à anticiper la trajectoire.",
    schema: null,
    tags: []
  },

  // === PRIORITES (5) ===
  {
    series: 'priorites',
    difficulty: 2,
    text: "Un panneau de priorité ponctuelle (flèche rouge/noire) au passage d'un pont étroit signifie :",
    answers: ["Priorité au véhicule le plus lourd", "Priorité au véhicule qui s'engage en premier", "Le sens de la flèche noire a la priorité de passage", "Interdiction de croiser sur le pont"],
    correct: [2],
    explanation: "Le panneau de priorité ponctuelle donne la priorité au sens indiqué par la flèche noire (plus grande). La flèche rouge indique le sens qui doit céder le passage.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Dans un double giratoire (deux ronds-points successifs reliés), quelle règle s'applique entre les deux :",
    answers: ["Priorité à droite systématique", "On conserve la priorité acquise dans le premier giratoire", "Chaque giratoire a ses propres règles : on cède le passage en entrant dans le second", "Le véhicule le plus rapide est prioritaire"],
    correct: [2],
    explanation: "Chaque giratoire fonctionne indépendamment. En entrant dans le second rond-point, il faut céder le passage aux véhicules déjà engagés, comme pour tout giratoire.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Un véhicule particulier peut-il emprunter une voie de bus si elle est indiquée 'sauf riverains' ?",
    answers: ["Oui, tous les véhicules peuvent l'emprunter", "Non, seuls les riverains habitant la rue peuvent y circuler", "Oui, seulement les riverains y ayant accès pour rejoindre leur domicile", "Non, seuls les bus et taxis sont autorisés"],
    correct: [2],
    explanation: "La mention 'sauf riverains' autorise les résidents à emprunter la voie de bus uniquement pour accéder à leur domicile ou en sortir, pas pour traverser la zone.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Une zone tampon matérialisée par des hachures blanches au sol entre deux voies de sens opposé :",
    answers: ["Peut être franchie pour dépasser", "Est strictement interdite à la circulation", "Peut être empruntée pour tourner à gauche si la visibilité le permet", "Sert de voie d'arrêt d'urgence"],
    correct: [1],
    explanation: "Les zones tampons (hachures bordées de lignes continues) sont strictement interdites à la circulation et au franchissement. Elles séparent les flux pour la sécurité.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "À un croisement étroit où deux véhicules ne peuvent pas se croiser, qui doit reculer ?",
    answers: ["Toujours celui qui monte", "Celui qui a le moins de manœuvres à effectuer pour dégager le passage", "Toujours celui qui descend", "Le véhicule le plus petit"],
    correct: [1],
    explanation: "En l'absence de signalisation, c'est le véhicule pouvant effectuer la manœuvre la plus facile qui doit reculer. En montagne, le véhicule descendant recule sauf exception.",
    schema: null,
    tags: []
  },

  // === VITESSES (5) ===
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Dans un convoi de véhicules lents (tracteurs, convois exceptionnels), quelle distance minimale doit être maintenue entre chaque véhicule du convoi ?",
    answers: ["25 mètres", "50 mètres", "100 mètres", "150 mètres"],
    correct: [1],
    explanation: "Les véhicules d'un convoi doivent maintenir 50 mètres entre eux minimum pour permettre aux autres usagers de dépasser en sécurité.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "Un panneau de limitation de vitesse temporaire (fond jaune) dans une zone de travaux :",
    answers: ["Est seulement indicatif", "Est obligatoire et remplace la limitation permanente", "Ne s'applique qu'aux poids lourds", "N'est valable que de jour"],
    correct: [1],
    explanation: "Les limitations temporaires en zone de travaux sont obligatoires et se substituent aux limitations permanentes. Elles s'appliquent à tous les véhicules, jour et nuit.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "Dans une zone de rencontre (zone résidentielle), la vitesse est limitée à :",
    answers: ["30 km/h", "20 km/h", "50 km/h", "10 km/h"],
    correct: [1],
    explanation: "La zone de rencontre limite la vitesse à 20 km/h. Le piéton y est prioritaire et peut circuler sur la chaussée. La zone 30 est différente (30 km/h).",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Sur une route à 2x2 voies avec terre-plein central en zone périurbaine, la vitesse maximale par défaut est de :",
    answers: ["90 km/h", "110 km/h", "80 km/h", "70 km/h"],
    correct: [1],
    explanation: "Sur une route à chaussées séparées par un terre-plein central, la vitesse maximale est de 110 km/h (90 km/h pour les jeunes conducteurs), sauf signalisation contraire.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Sur autoroute à 130 km/h, la distance de sécurité minimale entre deux véhicules correspond à :",
    answers: ["50 mètres (environ 2 secondes)", "73 mètres (environ 2 secondes)", "100 mètres (environ 3 secondes)", "130 mètres (environ 4 secondes)"],
    correct: [1],
    explanation: "À 130 km/h, on parcourt environ 36 m/s. La règle des 2 secondes donne ~73 mètres. C'est le repère des bandes blanches sur autoroute (espacement de 38m, 2 bandes = ok).",
    schema: null,
    tags: []
  },

  // === ALCOOL (5) ===
  {
    series: 'alcool',
    difficulty: 2,
    text: "L'alcool provoque un rétrécissement du champ visuel. À 0,5 g/l, le champ visuel passe environ de :",
    answers: ["180° à 150°", "180° à 100°", "180° à 140°", "180° à 120°"],
    correct: [1],
    explanation: "Dès 0,5 g/l, le champ visuel se réduit significativement, passant d'environ 180° à 100°, créant un effet tunnel très dangereux surtout en intersection.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Un conducteur contrôlé à plus de 0,8 g/l pour la deuxième fois en 5 ans peut être obligé de suivre :",
    answers: ["Un simple rappel à la loi", "Un stage de sensibilisation à la sécurité routière à ses frais", "Uniquement une visite médicale", "Un stage gratuit organisé par la préfecture"],
    correct: [1],
    explanation: "En cas de récidive, le tribunal peut imposer un stage de sensibilisation à la sécurité routière aux frais du contrevenant, en plus des autres sanctions (amende, suspension).",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "En cas de conduite sous l'emprise de l'alcool (>0,8 g/l), le véhicule peut être :",
    answers: ["Seulement mis en fourrière", "Immobilisé et/ou mis en fourrière sur décision du procureur ou du préfet", "Confisqué définitivement dans tous les cas", "Restitué immédiatement après le dégrisement"],
    correct: [1],
    explanation: "Le véhicule peut être immobilisé et mis en fourrière. La confiscation définitive n'est possible qu'en cas de récidive ou sur décision judiciaire, pas systématiquement.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Un conducteur en état d'ivresse qui cause un accident voit sa couverture d'assurance :",
    answers: ["Inchangée, l'assurance couvre toujours", "L'assureur indemnise la victime mais peut se retourner contre le conducteur", "Totalement annulée rétroactivement", "Suspendue uniquement pour l'accident en cours"],
    correct: [1],
    explanation: "L'assureur doit indemniser les victimes (obligation légale), mais peut exercer un recours contre son propre assuré pour récupérer les sommes versées. Le conducteur paie au final.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Un conducteur titulaire d'un permis étranger circulant en France est soumis au taux d'alcool :",
    answers: ["De son pays d'origine", "Français (0,5 g/l ou 0,2 g/l si permis < 3 ans)", "Le plus favorable entre les deux législations", "Aucune limite si séjour < 3 mois"],
    correct: [1],
    explanation: "Tout conducteur circulant en France est soumis au Code de la route français, quel que soit le pays de délivrance de son permis. Le taux légal français s'applique.",
    schema: null,
    tags: []
  },

  // === SECOURS (5) ===
  {
    series: 'secours',
    difficulty: 3,
    text: "En cas d'accident impliquant un véhicule portant une plaque orange (matières dangereuses), la première action est :",
    answers: ["Éteindre un éventuel incendie avec son extincteur", "S'éloigner à au moins 100 mètres, ne pas toucher le produit, alerter les secours en indiquant le code matière", "Porter secours aux occupants immédiatement", "Arroser le produit répandu pour le diluer"],
    correct: [1],
    explanation: "Les matières dangereuses nécessitent un périmètre de sécurité (100m minimum). Il faut relever le code matière sur la plaque orange pour le communiquer au 18/112. Ne jamais toucher ni inhaler.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Un bébé de moins d'un an s'étouffe et ne peut plus respirer. La manœuvre appropriée est :",
    answers: ["Le mettre tête en bas et donner 5 tapes dans le dos, puis 5 compressions thoraciques si inefficace", "Faire le Heimlich classique", "Mettre un doigt dans la bouche pour retirer l'objet", "L'allonger sur le dos et pratiquer le bouche-à-bouche"],
    correct: [0],
    explanation: "Pour un nourrisson : 5 tapes dorsales (bébé sur l'avant-bras, tête plus basse que le corps), puis si inefficace, 5 compressions thoraciques avec 2 doigts sur le sternum. Jamais de Heimlich.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Face à une personne en crise d'épilepsie (convulsions) au bord de la route, il faut :",
    answers: ["Maintenir fermement la personne pour arrêter les convulsions", "Mettre un objet dans sa bouche pour éviter qu'elle se morde la langue", "Écarter les objets dangereux, protéger la tête, ne pas la maintenir, la mettre en PLS après la crise", "Asseoir la personne et lui donner de l'eau"],
    correct: [2],
    explanation: "Ne jamais contraindre une personne en crise ni mettre d'objet dans sa bouche. Protéger la tête, écarter les dangers, chronométrer la crise, PLS après les convulsions, appeler le 15.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Un motard est victime d'hypothermie après un accident sous la pluie. En attendant les secours, il faut :",
    answers: ["Le frictionner vigoureusement pour le réchauffer", "L'isoler du sol froid, le couvrir avec une couverture de survie (côté doré vers l'extérieur), ne pas le mobiliser", "Lui donner de l'alcool pour se réchauffer", "Le plonger dans un bain chaud"],
    correct: [1],
    explanation: "L'hypothermie se traite par isolation (du sol et de l'air). La couverture de survie côté doré vers l'extérieur retient la chaleur. Ne jamais frictionner, donner d'alcool ou réchauffer brutalement.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Un cycliste est percuté et se plaint du dos après une chute. Quelle est la bonne conduite :",
    answers: ["Le relever doucement pour le mettre sur le trottoir", "Ne pas le déplacer, maintenir sa tête dans l'axe du corps, couvrir, alerter le 15", "Retirer son casque immédiatement pour vérifier sa tête", "Le mettre en PLS rapidement"],
    correct: [1],
    explanation: "Une douleur dorsale après un choc suggère une atteinte de la colonne vertébrale. Ne pas déplacer la victime, maintenir l'axe tête-cou-tronc, et attendre les secours spécialisés.",
    schema: null,
    tags: []
  },

  // === ECLAIRAGES (5) ===
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Les feux additionnels longue portée (phares additionnels) sont autorisés :",
    answers: ["Sans restriction sur tout véhicule", "Uniquement si l'ensemble des feux avant ne dépasse pas un total de 4 phares allumés simultanément", "Seulement sur les 4x4 et utilitaires", "Uniquement hors agglomération de nuit"],
    correct: [1],
    explanation: "La réglementation limite à 4 le nombre de feux allumés simultanément à l'avant (2 codes + 2 longue portée ou 2 antibrouillard). Les additionnels comptent dans ce total.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Un réglage trop haut des phares peut :",
    answers: ["Améliorer la visibilité du conducteur", "Éblouir les usagers venant en face sans améliorer l'éclairage de la route", "Provoquer une surchauffe de l'ampoule", "N'avoir aucun effet notable"],
    correct: [1],
    explanation: "Des phares mal réglés (trop hauts) éblouissent les conducteurs en face et éclairent moins bien la route devant soi. Le réglage doit être vérifié régulièrement et après chargement.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Remplacer ses ampoules halogènes par des LED non homologuées (aftermarket) est :",
    answers: ["Autorisé si la puissance est identique", "Interdit : le véhicule ne sera plus conforme et peut être refusé au contrôle technique", "Autorisé uniquement pour les feux de croisement", "Toléré si on conserve les ampoules d'origine dans le véhicule"],
    correct: [1],
    explanation: "Monter des LED dans des optiques conçues pour l'halogène est interdit (non homologué). Le faisceau lumineux est modifié et éblouit. Le véhicule peut être refusé au contrôle technique.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Une remorque tractée de nuit doit obligatoirement être équipée de :",
    answers: ["Seulement de catadioptres arrière", "Feux arrière, stop, clignotants, éclairage plaque, et catadioptres", "Uniquement d'un triangle de signalisation", "Des mêmes feux que le véhicule tracteur"],
    correct: [1],
    explanation: "Toute remorque doit posséder ses propres feux arrière rouges, feux stop, clignotants, éclairage de plaque d'immatriculation et catadioptres (réflecteurs) triangulaires rouges à l'arrière.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Les feux de recul (blancs à l'arrière) s'allument :",
    answers: ["Quand on active les warnings", "Automatiquement quand la marche arrière est enclenchée", "Manuellement via un interrupteur au tableau de bord", "Uniquement de nuit"],
    correct: [1],
    explanation: "Les feux de recul sont automatiques : ils s'activent dès que le conducteur passe la marche arrière. Ils signalent aux autres usagers la manœuvre et éclairent l'arrière.",
    schema: null,
    tags: []
  },

  // === AUTOROUTE (5) ===
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Après 2 heures de conduite continue sur autoroute, il est recommandé de :",
    answers: ["Continuer si on ne ressent pas de fatigue", "Faire une pause d'au moins 15-20 minutes", "Ralentir à 110 km/h", "Ouvrir les fenêtres et continuer"],
    correct: [1],
    explanation: "La règle est de faire une pause toutes les 2 heures minimum. La fatigue est la première cause de mortalité sur autoroute. 15-20 minutes de pause permettent de récupérer.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Les voies réservées au covoiturage sur autoroute sont identifiées par :",
    answers: ["Un panneau bleu avec un diamant blanc et le nombre minimum d'occupants", "Une ligne jaune continue", "Un feu vert clignotant", "Un panneau vert avec une voiture"],
    correct: [0],
    explanation: "Les voies de covoiturage (2+ ou 3+ occupants) sont signalées par un losange (diamant) blanc sur fond bleu, avec le nombre minimum d'occupants indiqué.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'autoroute',
    difficulty: 1,
    text: "Le télépéage permet de :",
    answers: ["Payer moins cher le péage", "Franchir la barrière de péage sans s'arrêter grâce à un badge", "Réserver sa place sur l'autoroute", "Circuler plus vite que la limitation"],
    correct: [1],
    explanation: "Le badge de télépéage communique avec la borne au passage et débite automatiquement le compte. Le véhicule passe à vitesse réduite (30 km/h) sans s'arrêter.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Sur autoroute, quelle est la vitesse minimale autorisée dans des conditions normales de circulation ?",
    answers: ["60 km/h", "80 km/h", "Il n'y a pas de vitesse minimale sur autoroute", "90 km/h"],
    correct: [1],
    explanation: "Sur autoroute, il est interdit de circuler à moins de 80 km/h sur la voie la plus à gauche dans des conditions normales. De manière générale, circuler à une vitesse anormalement réduite sans raison valable est une infraction. La voie de droite doit être utilisée sauf pour dépasser.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Un convoi exceptionnel sur autoroute est généralement :",
    answers: ["Libre de circuler comme tout véhicule", "Encadré par des véhicules de protection, limité en vitesse et soumis à un arrêté préfectoral", "Interdit sur autoroute", "Autorisé uniquement la nuit"],
    correct: [1],
    explanation: "Les convois exceptionnels nécessitent un arrêté préfectoral, des véhicules d'accompagnement, et sont limités en vitesse (généralement 60-80 km/h). Ils circulent souvent de nuit mais pas obligatoirement.",
    schema: null,
    tags: []
  },

  // === VULNERABLES (5) ===
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Un gyropode (type Segway) est autorisé à circuler :",
    answers: ["Sur la chaussée comme un vélo", "Sur les trottoirs à l'allure du pas et sur les pistes cyclables", "Uniquement dans les parcs et espaces privés", "Sur toutes les voies sans restriction"],
    correct: [1],
    explanation: "Les gyropodes sont des EDPM mais de catégorie spéciale. Ils sont autorisés sur les trottoirs à allure modérée (6 km/h max) et sur les pistes cyclables (25 km/h max).",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Les personnes en rollers/patins à roulettes sont assimilées à :",
    answers: ["Des cyclistes", "Des piétons", "Des EDPM", "Des véhicules à moteur"],
    correct: [1],
    explanation: "Les rollers sont assimilés à des piétons par le Code de la route. Ils doivent emprunter les trottoirs et respecter les feux piétons. Sur la chaussée, ils suivent les règles piétonnes.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 1,
    text: "Un piéton poussant une poussette sur la chaussée (absence de trottoir) doit marcher :",
    answers: ["À droite dans le sens de la circulation", "À gauche face à la circulation", "Indifféremment à droite ou à gauche", "Au milieu de la chaussée"],
    correct: [1],
    explanation: "Les piétons hors agglomération sans trottoir doivent marcher à gauche, face aux véhicules qui arrivent. En agglomération sans trottoir, la recommandation est identique pour la sécurité.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Un vélo cargo de livraison peut-il circuler sur une piste cyclable ?",
    answers: ["Non, il est trop large", "Oui, s'il respecte les dimensions maximales autorisées (1m de large)", "Seulement en dehors des heures de pointe", "Uniquement en zone 30"],
    correct: [1],
    explanation: "Les vélos cargo sont des cycles et peuvent emprunter les pistes cyclables tant qu'ils respectent la largeur maximale. Ils sont soumis aux mêmes règles que les vélos classiques.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Un skateboard électrique (e-skate) est classé comme :",
    answers: ["Un jouet sans réglementation", "Un EDPM soumis aux mêmes règles que les trottinettes électriques", "Un véhicule motorisé nécessitant un permis", "Un équipement sportif interdit sur la voie publique"],
    correct: [1],
    explanation: "Les skateboards électriques sont des EDPM (Engins de Déplacement Personnel Motorisés) : vitesse max 25 km/h, interdits sur les trottoirs, obligatoires sur pistes cyclables ou chaussée à 50 km/h max.",
    schema: null,
    tags: ['2026']
  },

  // === STATIONNEMENT (5) ===
  {
    series: 'stationnement',
    difficulty: 1,
    text: "Un parking relais (P+R) est conçu pour :",
    answers: ["Le stationnement longue durée à l'aéroport", "Stationner son véhicule et emprunter les transports en commun", "Les poids lourds uniquement", "Le covoiturage exclusivement"],
    correct: [1],
    explanation: "Les parkings relais permettent de laisser sa voiture en périphérie et de rejoindre le centre-ville en transport en commun, réduisant le trafic et la pollution urbaine.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 1,
    text: "Une zone de stationnement 'minute' (dépose-minute) autorise un arrêt de :",
    answers: ["Exactement 1 minute", "Généralement 10 à 15 minutes, pour déposer ou prendre des passagers", "30 minutes maximum", "Le temps nécessaire sans limite"],
    correct: [1],
    explanation: "Le stationnement minute permet un arrêt court (10-15 min selon les villes) pour déposer ou récupérer quelqu'un. Le conducteur doit rester à proximité du véhicule.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "La carte de stationnement pour personnes handicapées (carte mobilité inclusion mention stationnement) permet :",
    answers: ["De stationner uniquement sur les places réservées", "De stationner gratuitement et sans limite de durée sur toutes les places, y compris réservées", "De stationner gratuitement seulement sur les places réservées", "De stationner 2 heures gratuitement partout"],
    correct: [1],
    explanation: "La CMI stationnement donne droit à la gratuité et à l'absence de limitation de durée sur TOUTES les places (réservées ou non), dans toute la France.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Le stationnement de nuit d'un véhicule en panne sans éclairage sur une route non éclairée nécessite :",
    answers: ["Rien de spécial si le véhicule est sur le bas-côté", "La pose du triangle de signalisation et le port du gilet, et si possible l'allumage des warnings", "Uniquement le gilet jaune", "L'appel immédiat d'une dépanneuse"],
    correct: [1],
    explanation: "De nuit sans éclairage public, un véhicule immobilisé doit être signalé : triangle à 30m minimum, warnings si la batterie le permet, et gilet pour le conducteur sortant.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Un camping-car peut-il stationner sur la voie publique en agglomération ?",
    answers: ["Non, il doit obligatoirement aller dans une aire dédiée", "Oui, aux mêmes conditions qu'une voiture, sauf réglementation locale contraire", "Seulement pour une nuit maximum", "Oui, mais uniquement sur les places de parking payant"],
    correct: [1],
    explanation: "Un camping-car a le même droit de stationnement qu'un autre véhicule, sauf arrêté municipal l'interdisant. Stationner n'est pas camper : il ne doit pas déployer ses équipements extérieurs.",
    schema: null,
    tags: []
  },

  // === ECOCONDUITE (5) ===
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "En France, le transport routier représente quelle part des émissions de CO2 du secteur des transports ?",
    answers: ["Environ 50%", "Environ 70%", "Environ 94%", "Environ 30%"],
    correct: [2],
    explanation: "Le transport routier représente environ 94% des émissions de CO2 du secteur des transports en France. Les voitures particulières comptent pour plus de la moitié de ce total.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Les pneus 4 saisons par rapport aux pneus été en été :",
    answers: ["Sont strictement équivalents", "Ont une distance de freinage légèrement plus longue et une consommation supérieure", "Sont plus performants grâce à leur polyvalence", "N'ont aucun impact sur la consommation"],
    correct: [1],
    explanation: "Les pneus 4 saisons ont une gomme plus tendre qui s'use plus vite en été, augmente la distance de freinage de 1 à 3 mètres et la consommation d'environ 2-5% par rapport à des pneus été.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Le diagnostic OBD (On-Board Diagnostics) est contrôlé lors du contrôle technique pour vérifier :",
    answers: ["La puissance du moteur", "Le bon fonctionnement du système anti-pollution et les émissions polluantes", "L'état des freins", "Le niveau d'huile"],
    correct: [1],
    explanation: "Depuis 2019, le contrôle technique vérifie via la prise OBD les données du calculateur moteur relatives aux émissions polluantes. Un voyant moteur allumé peut entraîner une contre-visite.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Le rétrofit électrique (conversion d'un véhicule thermique en électrique) est :",
    answers: ["Interdit en France", "Autorisé sous conditions : véhicule de plus de 5 ans, homologation par un installateur agréé", "Autorisé sans restriction", "Réservé aux véhicules de collection"],
    correct: [1],
    explanation: "Le rétrofit est légal depuis 2020 pour les véhicules de plus de 5 ans. L'installation doit être réalisée par un professionnel agréé et le véhicule repasse une homologation.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "Le covoiturage domicile-travail peut donner droit à :",
    answers: ["Aucun avantage fiscal", "Un forfait mobilités durables versé par l'employeur, exonéré d'impôt jusqu'à un plafond", "Une réduction d'impôt de 50%", "Un remboursement intégral des frais par l'État"],
    correct: [1],
    explanation: "Le forfait mobilités durables permet aux employeurs de verser jusqu'à 800€/an (2024) exonérés de charges et d'impôt pour les salariés covoiturant. Il est cumulable avec le remboursement transport.",
    schema: null,
    tags: []
  }
,
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Quels panneaux ont une forme triangulaire à bordure rouge ? (plusieurs réponses)",
    answers: ["Les panneaux de danger", "Les panneaux d'intersection avec priorité", "Les panneaux d'obligation", "Le panneau Cédez le passage (pointe en bas)"],
    correct: [0, 1, 3],
    multi: true,
    explanation: "Les panneaux triangulaires à bordure rouge comprennent : les panneaux de danger (pointe en haut), les panneaux d'intersection et de priorité (pointe en haut), et le Cédez le passage (pointe en bas, seul panneau inversé). Les panneaux d'obligation sont ronds et bleus.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Quelles informations peut-on trouver sur un panneau de signalisation directionnelle vert ? (plusieurs réponses)",
    answers: ["Le nom d'une ville ou d'un lieu-dit", "La distance jusqu'à la destination", "La limitation de vitesse en vigueur", "Le numéro de la route ou de l'autoroute"],
    correct: [0, 1, 3],
    multi: true,
    explanation: "Les panneaux directionnels verts (autoroutes) indiquent les destinations (noms de villes), les distances, et les numéros de routes. Les limitations de vitesse figurent sur des panneaux ronds à bordure rouge, jamais sur les panneaux directionnels.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Quels marquages au sol sont de couleur jaune ? (plusieurs réponses)",
    answers: ["Le marquage en zigzag d'interdiction de stationnement", "La ligne de rive sur autoroute", "Le marquage des arrêts de bus", "La ligne d'effet d'un cédez le passage"],
    correct: [0, 2],
    multi: true,
    explanation: "En France, le marquage jaune au sol est utilisé pour les interdictions de stationnement (zigzag jaune) et les zones d'arrêt de bus (ligne jaune continue). Les lignes de rive et les lignes d'effet des cédez le passage sont blanches.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Quels panneaux indiquent une interdiction ? (plusieurs réponses)",
    answers: ["Panneau rond à bordure rouge sur fond blanc", "Panneau carré bleu avec pictogramme blanc", "Panneau rond rouge barré d'un trait diagonal", "Panneau triangulaire bordé de rouge"],
    correct: [0, 2],
    multi: true,
    explanation: "Les panneaux d'interdiction sont ronds à bordure rouge sur fond blanc (interdiction de tourner, de dépasser, vitesse...) ou le sens interdit (rond rouge avec barre blanche). Les panneaux carrés bleus sont d'indication, les triangulaires rouges sont de danger.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Dans quelles situations la priorité à droite ne s'applique-t-elle pas ? (plusieurs réponses)",
    answers: ["En présence d'un panneau STOP ou Cédez le passage", "Sur un rond-point avec panneau Cédez le passage à l'entrée", "Quand on sort d'un chemin de terre pour rejoindre une route", "Aux intersections en T où l'on est sur la barre du T"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "La priorité à droite ne s'applique pas quand une signalisation l'annule (STOP, cédez le passage), dans les ronds-points signalés, ni quand on quitte un chemin de terre, un parking ou une station-service pour rejoindre une route.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Quelles règles s'appliquent à un carrefour giratoire ? (plusieurs réponses)",
    answers: ["Céder le passage aux véhicules déjà engagés dans le giratoire", "Mettre le clignotant à droite en sortant du giratoire", "Circuler dans le sens inverse des aiguilles d'une montre", "S'arrêter obligatoirement avant d'entrer"],
    correct: [0, 1],
    multi: true,
    explanation: "Dans un carrefour giratoire (avec panneau cédez le passage à l'entrée) : on cède le passage à ceux déjà engagés, on met le clignotant droit en sortant. On circule dans le sens inverse des aiguilles d'une montre (sens unique, on tourne à gauche autour de l'îlot central). L'arrêt n'est pas obligatoire (c'est un cédez, pas un STOP).",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Face à un panneau STOP, quelles sont vos obligations ? (plusieurs réponses)",
    answers: ["Marquer un arrêt complet (roues immobiles)", "Céder le passage à tous les véhicules de la route prioritaire", "Céder le passage aux piétons engagés sur la chaussée", "Klaxonner pour signaler votre présence avant de repartir"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Au STOP : arrêt complet obligatoire (même si la voie est libre), puis céder le passage à tous les usagers de la route prioritaire y compris piétons. Le klaxon n'est pas requis et son usage abusif est interdit en agglomération.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Quels véhicules sont prioritaires sur tous les autres usagers en intervention ? (plusieurs réponses)",
    answers: ["Les véhicules de pompiers (gyrophare bleu + sirène deux tons)", "Les ambulances du SAMU (gyrophare bleu + sirène)", "Les véhicules de police/gendarmerie (gyrophare bleu + sirène)", "Un taxi transportant une urgence médicale"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Sont prioritaires les véhicules d'intérêt général prioritaires en intervention avec gyrophare bleu ET sirène deux tons activés simultanément : pompiers, SAMU, police, gendarmerie, douanes. Un taxi n'est jamais un véhicule prioritaire, quelle que soit la situation.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Quelles conditions météorologiques imposent une réduction légale de la vitesse maximale autorisée ? (plusieurs réponses)",
    answers: ["La pluie (réduction de 20 km/h sur les voies rapides)", "Le brouillard avec visibilité inférieure à 50 m (limite à 50 km/h)", "Le vent fort latéral", "Le verglas sur la chaussée"],
    correct: [0, 1],
    multi: true,
    explanation: "Par temps de pluie, les vitesses sont réduites de 20 km/h (130→110, 110→100). Par brouillard (visibilité < 50 m), la vitesse est limitée à 50 km/h partout. Le vent et le verglas imposent la prudence mais n'ont pas de réduction légale chiffrée spécifique.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Quelles sont les vitesses maximales réduites pour un jeune conducteur en permis probatoire ? (plusieurs réponses)",
    answers: ["110 km/h sur autoroute (au lieu de 130)", "100 km/h sur route à 2x2 voies séparées (au lieu de 110)", "70 km/h sur route hors agglomération (au lieu de 80)", "40 km/h en agglomération (au lieu de 50)"],
    correct: [0, 1],
    multi: true,
    explanation: "En permis probatoire : 110 sur autoroute (au lieu de 130), 100 sur voie rapide à chaussées séparées (au lieu de 110). Les limites de 80 km/h sur route et 50 km/h en ville sont identiques pour tous les conducteurs, y compris les jeunes.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Quels facteurs augmentent la distance de réaction du conducteur ? (plusieurs réponses)",
    answers: ["La fatigue ou la somnolence", "L'alcool même à faible dose (dès 0,2 g/l)", "L'utilisation du téléphone au volant", "Le poids du véhicule"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "La distance de réaction dépend du temps de perception-réaction du conducteur. La fatigue, l'alcool et les distractions (téléphone) augmentent ce temps. Le poids du véhicule n'affecte pas le temps de réaction mais la distance de freinage.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Quelles limitations de vitesse peut-on rencontrer en agglomération ? (plusieurs réponses)",
    answers: ["50 km/h par défaut sur toutes les voies", "30 km/h dans les zones 30", "20 km/h dans les zones de rencontre", "70 km/h sur certains axes urbains si signalé"],
    correct: [0, 1, 2, 3],
    multi: true,
    explanation: "En agglomération : 50 km/h par défaut, 30 km/h en zone 30, 20 km/h en zone de rencontre (piétons prioritaires), et certains axes peuvent être relevés à 70 km/h par arrêté municipal avec signalisation spécifique.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Quels sont les effets de l'alcool sur les capacités de conduite ? (plusieurs réponses)",
    answers: ["Allongement du temps de réaction", "Rétrécissement du champ visuel (vision tunnel)", "Surestimation de ses capacités (désinhibition)", "Amélioration de la concentration à faible dose"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "L'alcool dégrade toutes les fonctions nécessaires à la conduite : temps de réaction allongé, champ visuel réduit, surestimation de soi. Même à très faible dose, l'alcool n'améliore jamais la concentration — c'est une idée reçue dangereuse.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Quels facteurs accélèrent le passage de l'alcool dans le sang ? (plusieurs réponses)",
    answers: ["Boire à jeun (estomac vide)", "Boire des boissons gazeuses (champagne, bière)", "Être de faible corpulence", "Boire un café ou une boisson énergisante après"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "L'absorption est accélérée à jeun (pas de nourriture pour ralentir le passage), avec des boissons gazeuses (le CO2 accélère l'absorption), et chez les personnes de faible corpulence (moins de volume sanguin pour diluer). Le café ne modifie pas le taux d'alcool.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Quelles sanctions s'appliquent pour une alcoolémie entre 0,5 et 0,8 g/l (contravention) ? (plusieurs réponses)",
    answers: ["Retrait de 6 points sur le permis", "Amende forfaitaire de 135 €", "Immobilisation possible du véhicule", "Peine d'emprisonnement de 2 ans"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Entre 0,5 et 0,8 g/l, c'est une contravention de 4ème classe : 135 € d'amende, retrait de 6 points, immobilisation possible du véhicule et suspension du permis jusqu'à 3 ans. Pas d'emprisonnement car c'est une contravention, pas un délit (le délit commence à 0,8 g/l).",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Quelles affirmations sur l'élimination de l'alcool par l'organisme sont vraies ? (plusieurs réponses)",
    answers: ["Le foie élimine environ 0,10 à 0,15 g/l par heure", "Rien n'accélère l'élimination (ni café, ni douche froide)", "Le pic d'alcoolémie est atteint environ 30 min après ingestion à jeun", "Dormir permet d'éliminer l'alcool plus rapidement"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Le foie élimine l'alcool à rythme constant (0,10 à 0,15 g/l/h). Rien ne peut accélérer ce processus. Le pic est atteint en 30 min à jeun (1h pendant un repas). Dormir ne change pas la vitesse d'élimination — attention au lendemain matin après une soirée.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Quelles informations devez-vous communiquer aux secours lors d'un appel d'urgence ? (plusieurs réponses)",
    answers: ["Le lieu exact de l'accident (route, commune, sens de circulation)", "Le nombre de victimes et leur état apparent", "Votre numéro de téléphone pour être rappelé", "La marque et couleur de votre véhicule personnel"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Lors de l'appel au 15, 18 ou 112, communiquez : localisation précise, nature de l'accident, nombre de victimes et état, risques particuliers (incendie, matières dangereuses) et votre numéro pour être rappelé. La description de votre véhicule n'est pas une information prioritaire.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Quels signes indiquent qu'une victime est inconsciente mais respire ? (plusieurs réponses)",
    answers: ["Elle ne répond pas aux questions ni aux stimulations", "Sa poitrine se soulève régulièrement", "On sent un souffle d'air à sa bouche ou son nez", "Elle saigne abondamment d'une plaie"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Victime inconsciente qui respire : ne répond pas aux stimulations (verbales et physiques), mais présente des mouvements thoraciques réguliers et un souffle perceptible. Elle doit être mise en PLS. Le saignement est un signe distinct nécessitant un autre geste (compression).",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Dans quels cas exceptionnels peut-on déplacer une victime d'accident ? (plusieurs réponses)",
    answers: ["Si le véhicule prend feu et risque d'exploser", "Si la victime est exposée à des fumées toxiques", "Si la victime se plaint de douleurs au dos", "Si la route doit être dégagée pour la circulation"],
    correct: [0, 1],
    multi: true,
    explanation: "On ne déplace une victime que face à un danger vital immédiat : incendie, risque d'explosion, inondation, fumée toxique. Les douleurs ou la circulation ne justifient jamais un déplacement qui pourrait aggraver une lésion de la colonne vertébrale.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 1,
    text: "Quels numéros d'urgence pouvez-vous appeler en cas d'accident en France ? (plusieurs réponses)",
    answers: ["Le 15 (SAMU — urgence médicale)", "Le 18 (pompiers — secours et incendie)", "Le 112 (numéro européen universel)", "Le 3114 (numéro national de prévention du suicide)"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "En cas d'accident : 15 (SAMU, urgence médicale), 18 (pompiers, secours et incendie), 112 (numéro unique européen, fonctionne même sans réseau ni carte SIM). Le 3114 est dédié à la prévention du suicide, pas aux accidents de la route.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Quand pouvez-vous utiliser les feux de brouillard avant ? (plusieurs réponses)",
    answers: ["Par temps de brouillard épais", "Par forte pluie réduisant fortement la visibilité", "En cas de chute de neige importante", "De nuit sur route non éclairée par beau temps"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Les feux de brouillard avant peuvent être utilisés par brouillard, pluie forte ou neige (conditions réduisant fortement la visibilité). Ils ne doivent pas être utilisés de nuit par temps clair car ils peuvent éblouir les autres usagers.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Dans quelles situations devez-vous passer des feux de route aux feux de croisement ? (plusieurs réponses)",
    answers: ["Quand vous croisez un véhicule venant en face", "Quand vous suivez un véhicule à distance rapprochée", "En entrant dans une agglomération éclairée", "Quand vous êtes seul sur une route de campagne déserte"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "On repasse en croisement pour ne pas éblouir : un véhicule en face, un véhicule qu'on suit (éblouissement via son rétroviseur), et en agglomération éclairée. Seul sur route déserte sans aucun autre usager, on peut rester en feux de route pour mieux voir.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Quelles affirmations sont correctes concernant le feu de brouillard arrière ? (plusieurs réponses)",
    answers: ["Il ne doit être allumé que par visibilité inférieure à 50 m", "Il est interdit de l'utiliser par simple pluie", "Il peut éblouir les conducteurs qui suivent s'il est utilisé à tort", "Chaque véhicule doit obligatoirement en posséder deux"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Le feu de brouillard arrière (très puissant, rouge) ne s'utilise que par visibilité < 50 m (brouillard dense). Par simple pluie il est interdit car il éblouit fortement les conducteurs suivants. Un seul feu arrière de brouillard est obligatoire (pas forcément deux).",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Quelles précautions prendre pour l'éclairage en traversant un tunnel ? (plusieurs réponses)",
    answers: ["Allumer les feux de croisement (obligatoire même si le tunnel est éclairé)", "Retirer les lunettes de soleil pour adapter sa vision", "Allumer les feux de route si le tunnel est long et vide", "Augmenter la distance de sécurité avec le véhicule précédent"],
    correct: [0, 1, 3],
    multi: true,
    explanation: "Dans un tunnel : feux de croisement obligatoires, retirer les lunettes de soleil (transition luminosité), augmenter les distances (évacuation difficile en cas d'accident). Les feux de route sont interdits (réverbération sur les murs = éblouissement).",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Quelles règles s'appliquent sur la bande d'arrêt d'urgence (BAU) ? (plusieurs réponses)",
    answers: ["Elle est réservée exclusivement aux arrêts d'urgence", "Vous devez activer vos feux de détresse en vous y arrêtant", "Tous les occupants doivent sortir et se placer derrière la glissière", "Vous pouvez y circuler lentement en cas de bouchon"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "La BAU est exclusivement réservée aux pannes et urgences. En cas d'arrêt : feux de détresse, gilet avant de sortir, triangle à 30 m, et tous les occupants sortent côté droit et se placent derrière la glissière. Circuler sur la BAU est un délit (amende + suspension de permis).",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Comment évaluer la distance de sécurité sur autoroute à 130 km/h ? (plusieurs réponses)",
    answers: ["Compter au moins 2 secondes avec le véhicule qui précède", "Maintenir environ 90 mètres de distance", "Se repérer avec 2 bandes blanches de marquage de la BAU", "Rester à au moins 50 mètres en toute circonstance"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "La distance de sécurité est d'au minimum 2 secondes, soit environ 90 m à 130 km/h. Repère pratique : 2 bandes blanches de la BAU ≈ 90 m. À 130 km/h, 50 m ne laissent qu'environ 1,4 seconde, ce qui est insuffisant.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Que devez-vous faire en cas de panne sur autoroute ? (plusieurs réponses)",
    answers: ["Rejoindre la bande d'arrêt d'urgence ou un refuge", "Enfiler le gilet de haute visibilité avant de sortir du véhicule", "Appeler les secours (borne orange ou 112)", "Rester dans le véhicule en attendant les secours"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "En cas de panne : se ranger sur la BAU ou un refuge, enfiler le gilet AVANT de sortir, poser le triangle, faire évacuer tous les passagers derrière la glissière, et appeler les secours. Ne jamais rester dans le véhicule (risque majeur de sur-accident).",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Quelles manœuvres sont strictement interdites sur autoroute ? (plusieurs réponses)",
    answers: ["Faire demi-tour ou marche arrière", "S'arrêter ou stationner sur la chaussée (hors urgence)", "Circuler à contresens, même sur quelques mètres", "Dépasser un véhicule par la voie de gauche"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Sur autoroute sont strictement interdits : demi-tour, marche arrière, contresens (même bref), arrêt/stationnement sur la chaussée. Ces infractions constituent des délits passibles de prison. Le dépassement par la gauche est la règle normale autorisée.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Quelles obligations avez-vous envers un piéton au bord d'un passage piéton ? (plusieurs réponses)",
    answers: ["Vous arrêter dès qu'il manifeste l'intention de traverser", "Vous arrêter dès qu'il est engagé sur la chaussée", "Lui laisser le temps de terminer sa traversée complète", "Klaxonner pour le presser de traverser plus vite"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Depuis 2018, le conducteur doit s'arrêter dès qu'un piéton manifeste l'intention de traverser (pas seulement quand il est engagé) et attendre qu'il ait terminé. Non-respect : 135 € d'amende et 6 points. Klaxonner pour presser un piéton est interdit.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Quelles précautions devez-vous prendre à l'approche d'un groupe de cyclistes ? (plusieurs réponses)",
    answers: ["Vérifier l'angle mort avant de tourner à droite ou de se rabattre", "Respecter 1 m en ville et 1,5 m hors ville pour le dépassement", "Ralentir et attendre un moment sûr pour dépasser", "Les serrer à droite pour fluidifier le trafic"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "En présence de cyclistes : vérifier les angles morts (accidents fréquents aux intersections), respecter les distances latérales (1 m / 1,5 m), et ralentir en attendant un moment sûr. Ne jamais serrer un cycliste, c'est une mise en danger sanctionnable.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Quelles règles s'appliquent aux EDPM (trottinettes électriques) en 2026 ? (plusieurs réponses)",
    answers: ["Vitesse maximale de 25 km/h", "Obligation de circuler sur les pistes cyclables quand elles existent", "Interdiction de circuler sur les trottoirs (sauf dérogation municipale)", "Port du casque obligatoire pour tous les utilisateurs"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Les EDPM en 2026 : max 25 km/h, pistes cyclables obligatoires si disponibles, interdiction sur les trottoirs (sauf dérogation locale, moteur éteint). Le casque est obligatoire uniquement pour les moins de 12 ans, recommandé pour tous les autres.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Quels comportements adopter aux abords d'un arrêt de bus scolaire ? (plusieurs réponses)",
    answers: ["Ralentir fortement et être prêt à s'arrêter", "Surveiller les enfants qui peuvent traverser devant ou derrière le bus", "Être vigilant même après le départ du bus (enfants retardataires)", "Dépasser le bus rapidement pendant qu'il est à l'arrêt"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Aux abords d'un bus scolaire : prudence maximale car les enfants sont imprévisibles, ils peuvent surgir devant ou derrière le bus, et certains peuvent arriver en retard après le redémarrage. Ne jamais dépasser rapidement un bus à l'arrêt.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Où le stationnement est-il interdit par défaut sans signalisation ? (plusieurs réponses)",
    answers: ["Sur les passages piétons et à moins de 5 m en amont", "Sur les pistes cyclables et bandes cyclables", "Sur les ponts et dans les tunnels", "Dans les parkings publics après 20h"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Le stationnement est interdit sans qu'un panneau soit nécessaire : sur les passages piétons (et 5 m avant), les pistes/bandes cyclables, les ponts, tunnels, passages à niveau, voies de bus, devant les entrées carrossables. Les parkings publics ont leurs propres horaires.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Quelles sont les conséquences d'un stationnement très gênant ? (plusieurs réponses)",
    answers: ["Amende de 135 € (contravention de 4ème classe)", "Mise en fourrière immédiate possible sans délai", "Retrait de 3 points sur le permis de conduire", "Frais de fourrière à la charge du contrevenant"],
    correct: [0, 1, 3],
    multi: true,
    explanation: "Le stationnement très gênant (passage piéton, place PMR, piste cyclable, trottoir) : amende 135 €, mise en fourrière immédiate possible, frais à la charge du propriétaire. Il n'entraîne aucun retrait de points (les infractions de stationnement ne retirent jamais de points).",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Quelles précautions prendre pour stationner en côte ? (plusieurs réponses)",
    answers: ["Serrer le frein à main fermement", "Engager une vitesse (1ère en montée, marche arrière en descente)", "Braquer les roues vers le trottoir si stationné en montée", "Laisser le moteur tourner au ralenti pour éviter le calage"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "En côte : frein à main serré, vitesse engagée (1ère en montée, marche arrière en descente) pour bloquer mécaniquement, et roues braquées vers le trottoir (le véhicule butera contre le trottoir s'il se met à rouler). Le moteur doit être coupé.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Quelles différences distinguent l'arrêt du stationnement ? (plusieurs réponses)",
    answers: ["L'arrêt est de courte durée, le conducteur reste à proximité immédiate", "Le stationnement implique que le conducteur quitte le véhicule ou s'absente", "L'arrêt est toujours gratuit alors que le stationnement peut être payant", "L'arrêt en double file est toujours autorisé si c'est bref"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "L'arrêt = immobilisation momentanée, conducteur à bord ou à proximité immédiate. Le stationnement = immobilisation prolongée, conducteur absent. L'arrêt est gratuit, le stationnement peut être payant. L'arrêt en double file n'est jamais autorisé, même bref.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quelles pratiques d'éco-conduite réduisent la consommation de carburant ? (plusieurs réponses)",
    answers: ["Anticiper les freinages et décélérer en levant le pied (frein moteur)", "Passer les rapports tôt (2000 tr/min diesel, 2500 essence)", "Couper le moteur lors d'arrêts de plus de 20 secondes", "Rouler en sous-régime permanent (1000 tr/min) pour économiser"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "L'éco-conduite repose sur l'anticipation (utiliser le frein moteur), le passage des rapports au bon régime, et la coupure du moteur aux arrêts prolongés (système start & stop). Rouler en sous-régime abîme le moteur et ne fait pas économiser (le moteur force).",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quels éléments augmentent significativement la consommation de carburant ? (plusieurs réponses)",
    answers: ["Les barres de toit et coffre de toit (traînée aérodynamique)", "La climatisation en ville (jusqu'à +20%)", "Les pneus sous-gonflés (résistance au roulement)", "Les vitres fermées sur autoroute"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Surconsommation : barres/coffre de toit (+10 à 15% par résistance aérodynamique), climatisation (+10 à 20% en ville), pneus sous-gonflés (+5% par résistance au roulement accrue). Les vitres fermées sur autoroute réduisent au contraire la traînée.",
    schema: null,
    tags: []
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Quels véhicules peuvent circuler dans les Zones à Faibles Émissions (ZFE) en 2026 ? (plusieurs réponses)",
    answers: ["Les véhicules Crit'Air 0 (100% électriques et hydrogène)", "Les véhicules Crit'Air 1 (essence récents, hybrides rechargeables)", "Les véhicules Crit'Air 2 (dans la majorité des ZFE actuelles)", "Tous les véhicules diesel quel que soit leur âge"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "En 2026, les ZFE autorisent généralement Crit'Air 0, 1 et 2. Les véhicules Crit'Air 3, 4, 5 et non classés sont progressivement exclus selon les métropoles. Les vieux diesels (avant 2006) sont Crit'Air 4 ou 5 et sont donc interdits dans la plupart des ZFE.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quels sont les bons réflexes d'entretien pour réduire la consommation et la pollution ? (plusieurs réponses)",
    answers: ["Vérifier la pression des pneus chaque mois (à froid)", "Remplacer régulièrement le filtre à air", "Utiliser l'huile moteur préconisée par le constructeur", "Laver le véhicule chaque semaine au nettoyeur haute pression"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Entretien éco-responsable : pression des pneus correcte (vérification mensuelle à froid), filtre à air propre (un filtre encrassé = +10% de consommation), huile adaptée (réduit les frottements internes). Le lavage n'a aucun impact sur la consommation ou les émissions.",
    schema: null,
    tags: []
  },

  // ===== SUJETS 2026 MANQUANTS =====
  // --- ADAS / Aides à la conduite ---
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Quel est le rôle de l'ABS (système antiblocage des roues) ?",
    answers: ["Réduire la distance de freinage", "Empêcher le blocage des roues pour garder le contrôle directionnel", "Freiner automatiquement en cas de danger", "Empêcher le dérapage en virage"],
    correct: [1],
    explanation: "L'ABS empêche les roues de se bloquer lors d'un freinage d'urgence. Cela permet au conducteur de continuer à diriger le véhicule pendant le freinage. L'ABS ne réduit pas nécessairement la distance de freinage, il maintient le contrôle directionnel.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "L'ESP (Electronic Stability Program) intervient automatiquement quand :",
    answers: ["Le véhicule freine trop fort", "Le véhicule commence à déraper ou perdre sa trajectoire", "Le conducteur dépasse la vitesse autorisée", "Le moteur surchauffe"],
    correct: [1],
    explanation: "L'ESP détecte la perte de trajectoire (sous-virage ou survirage) et freine individuellement une ou plusieurs roues pour rétablir la stabilité du véhicule. Il est obligatoire sur tous les véhicules neufs depuis 2014.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Quelles aides à la conduite (ADAS) sont obligatoires sur les véhicules neufs depuis juillet 2024 en Europe ? (plusieurs réponses)",
    answers: ["Freinage automatique d'urgence", "Alerte de franchissement de ligne", "Boîte noire (enregistreur de données)", "Régulateur de vitesse adaptatif"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Depuis juillet 2024 (règlement GSR2), les véhicules neufs doivent intégrer : le freinage automatique d'urgence (AEB), l'alerte de franchissement de ligne (LDW), et un enregistreur de données d'événement (boîte noire/EDR). Le régulateur adaptatif n'est pas obligatoire.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "L'ISA (Intelligent Speed Assistance) obligatoire sur les véhicules neufs depuis 2024 sert à :",
    answers: ["Empêcher le véhicule de dépasser la vitesse autorisée", "Avertir le conducteur qu'il dépasse la vitesse autorisée", "Freiner automatiquement en cas d'excès de vitesse", "Couper le moteur en cas de grand excès de vitesse"],
    correct: [1],
    explanation: "L'ISA est un système d'adaptation intelligente de la vitesse. Il avertit le conducteur (alerte sonore/visuelle et résistance sur l'accélérateur) quand il dépasse la limite. Le conducteur peut toujours passer outre — le système ne bloque pas le véhicule. Il est désactivable mais se réactive à chaque démarrage.",
    schema: null,
    tags: ['2026']
  },

  // --- Boîte noire / EDR ---
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Qu'est-ce que la « boîte noire » (EDR) obligatoire dans les voitures neuves depuis 2024 ?",
    answers: ["Un GPS qui enregistre tous les trajets", "Un enregistreur de données techniques juste avant et pendant un accident", "Une caméra de surveillance intérieure", "Un dispositif antivol"],
    correct: [1],
    explanation: "L'EDR (Event Data Recorder) enregistre les données techniques (vitesse, freinage, accélération, port de ceinture, etc.) quelques secondes avant et pendant un accident. Ces données peuvent être consultées par les enquêteurs. Il ne s'agit pas d'un GPS et il n'enregistre pas en continu.",
    schema: null,
    tags: ['2026']
  },

  // --- SAS vélo ---
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Un sas vélo (zone avancée pour cyclistes) au feu rouge est :",
    answers: ["Une zone où les voitures peuvent s'arrêter si aucun vélo n'est présent", "Une zone réservée aux cyclistes, les véhicules motorisés doivent s'arrêter avant", "Une zone de stationnement pour vélos", "Un espace de circulation partagé vélos/voitures"],
    correct: [1],
    explanation: "Le sas vélo est un espace matérialisé entre la ligne d'arrêt des véhicules motorisés et le passage piéton. Au feu rouge, les voitures doivent s'arrêter AVANT le sas, même s'il n'y a aucun cycliste. S'arrêter dans le sas est passible d'une amende de 135 € et d'un retrait de 2 points (contravention de 4e classe).",
    schema: `<svg width="260" height="180" viewBox="0 0 260 180">
      <rect width="260" height="180" fill="#e8f5e9" rx="8"/>
      <rect x="90" y="0" width="80" height="180" fill="#888"/>
      <rect x="90" y="70" width="80" height="30" fill="#4caf50" opacity="0.4"/>
      <text x="105" y="88" fill="white" font-size="9" font-weight="bold" font-family="Inter,sans-serif">SAS VÉLO</text>
      <rect x="90" y="100" width="80" height="3" fill="white"/>
      <rect x="90" y="67" width="80" height="3" fill="white"/>
      <text x="100" y="62" fill="#2e7d32" font-size="8" font-family="Inter,sans-serif">Feu rouge</text>
      <circle cx="95" cy="55" r="5" fill="#e74c3c"/>
      <rect x="110" y="115" width="22" height="35" rx="4" fill="#e74c3c"/>
      <text x="113" y="135" fill="white" font-size="8" font-weight="bold" font-family="Inter,sans-serif">🚗</text>
      <text x="55" y="140" fill="#1a73e8" font-size="8" font-family="Inter,sans-serif">Arrêt ici ↑</text>
      <circle cx="130" cy="82" r="6" fill="#2ecc71"/>
      <text x="128" y="85" fill="white" font-size="7" font-family="Inter,sans-serif">🚲</text>
    </svg>`,
    tags: ['2026']
  },

  // --- Angles morts camions ---
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Depuis 2021, les poids lourds doivent afficher des autocollants « angles morts ». Que signifient-ils ?",
    answers: ["Le camion est en surcharge", "Des zones autour du camion sont invisibles pour le conducteur", "Le camion transporte des matières dangereuses", "Le camion est un véhicule d'auto-école"],
    correct: [1],
    explanation: "Les autocollants « Attention angles morts » signalent que des zones importantes autour du poids lourd (côtés et arrière) sont invisibles depuis la cabine du conducteur. Ils alertent les cyclistes, piétons et motards de ne pas rester dans ces zones. Obligatoire depuis janvier 2021 pour les véhicules de plus de 3,5 tonnes.",
    schema: `<svg width="280" height="140" viewBox="0 0 280 140">
      <rect width="280" height="140" fill="#fff3e0" rx="8"/>
      <rect x="100" y="40" width="80" height="50" rx="4" fill="#546e7a"/>
      <rect x="80" y="50" width="25" height="30" rx="3" fill="#78909c"/>
      <text x="120" y="68" fill="white" font-size="9" font-weight="bold" font-family="Inter,sans-serif">CAMION</text>
      <path d="M80 45 L40 20 L40 90 L80 80" fill="#e74c3c" opacity="0.25" stroke="#e74c3c" stroke-width="1"/>
      <path d="M180 45 L220 20 L220 90 L180 80" fill="#e74c3c" opacity="0.25" stroke="#e74c3c" stroke-width="1"/>
      <path d="M100 90 L70 120 L210 120 L180 90" fill="#e74c3c" opacity="0.25" stroke="#e74c3c" stroke-width="1"/>
      <text x="30" y="55" fill="#e74c3c" font-size="8" font-weight="bold" font-family="Inter,sans-serif">⚠️</text>
      <text x="215" y="55" fill="#e74c3c" font-size="8" font-weight="bold" font-family="Inter,sans-serif">⚠️</text>
      <text x="70" y="130" fill="#bf360c" font-size="9" font-weight="bold" font-family="Inter,sans-serif">Zones rouges = angles morts</text>
    </svg>`,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "En tant qu'automobiliste, que devez-vous faire face à un poids lourd affichant « Attention angles morts » ? (plusieurs réponses)",
    answers: ["Ne pas rester à côté du camion, le dépasser ou rester derrière", "Klaxonner pour signaler votre présence", "Éviter de le dépasser par la droite", "Augmenter la distance de sécurité"],
    correct: [0, 2, 3],
    multi: true,
    explanation: "Face à un poids lourd : ne jamais rester dans l'angle mort (à côté ou juste derrière), ne jamais le dépasser par la droite, et maintenir une distance de sécurité accrue. Klaxonner n'est pas une solution fiable car le conducteur du camion peut ne pas entendre.",
    schema: null,
    tags: ['2026']
  },

  // --- Tunnel ---
  {
    series: 'autoroute',
    difficulty: 3,
    text: "En cas d'incendie dans un tunnel routier, que devez-vous faire ? (plusieurs réponses)",
    answers: ["Arrêter le véhicule, couper le moteur, laisser la clé sur le contact", "Fuir en suivant les panneaux vers les issues de secours", "Faire demi-tour pour sortir par où vous êtes entré", "Utiliser les niches de sécurité ou abris si disponibles"],
    correct: [0, 1, 3],
    multi: true,
    explanation: "En cas d'incendie en tunnel : arrêter le véhicule sur la droite, couper le moteur, laisser la clé sur le contact (ou le véhicule déverrouillé) pour que les secours puissent le déplacer. Ne JAMAIS faire demi-tour. Évacuer à pied vers les issues de secours en se baissant sous la fumée. Les niches SOS et abris pressurisés offrent une protection temporaire.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Dans un tunnel, quelles sont les obligations pour tous les conducteurs ? (plusieurs réponses)",
    answers: ["Allumer les feux de croisement", "Respecter les distances de sécurité affichées", "Garder les vitres fermées en cas d'alerte", "Rouler au maximum à 50 km/h"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "En tunnel : feux de croisement obligatoires (même éclairé), respect strict des distances de sécurité (souvent 100m, indiquées par signalisation), vitres fermées en cas d'alerte incendie (pour ne pas respirer les fumées). La vitesse dépend de la signalisation du tunnel, elle n'est pas systématiquement limitée à 50 km/h.",
    schema: null,
    tags: ['2026']
  }
,

  // ===== BATCH: BATCH1 =====
{
    series: 'signalisation',
    difficulty: 1,
    text: "Que signifie un panneau rond à fond blanc barré d'une ligne diagonale noire ?",
    answers: ["Fin de limitation de vitesse", "Fin de toutes les interdictions précédemment signalées", "Zone de stationnement libre", "Fin d'interdiction de dépasser"],
    correct: [1],
    explanation: "Le panneau rond à fond blanc barré d'une ligne diagonale noire indique la fin de toutes les interdictions précédemment signalées (vitesse, dépassement, klaxon, etc.). Il ne concerne pas une seule interdiction spécifique mais les annule toutes simultanément.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Un panonceau représentant un camion sous un panneau d'interdiction signifie que l'interdiction concerne :",
    answers: ["Tous les véhicules de plus de 3,5 tonnes", "Uniquement les poids lourds transportant des marchandises", "Les véhicules de transport en commun", "Tous les véhicules à moteur"],
    correct: [0],
    explanation: "Le panonceau représentant un camion restreint l'application du panneau aux seuls véhicules dont le PTAC dépasse 3,5 tonnes. Cela inclut les poids lourds, certains camping-cars et véhicules utilitaires dépassant ce poids, qu'ils transportent ou non des marchandises.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Quelles informations un panonceau de distance peut-il indiquer sous un panneau de danger ?",
    answers: ["La distance entre le panneau et le début du danger", "La longueur de la zone dangereuse", "Les deux selon le type de panonceau", "La distance jusqu'à la prochaine sortie"],
    correct: [2],
    explanation: "Un panonceau de distance sous un panneau de danger peut indiquer soit la distance jusqu'au danger (panonceau simple avec une valeur), soit l'étendue de la zone dangereuse (panonceau avec double flèche ou mention de longueur). Il est crucial de les distinguer pour adapter sa conduite.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Que signifient des lignes en zigzag jaunes peintes sur la chaussée ?",
    answers: ["Zone de stationnement payant", "Arrêt de bus : stationnement et arrêt interdits", "Zone de chargement/déchargement", "Piste cyclable temporaire"],
    correct: [1],
    explanation: "Les lignes en zigzag jaunes marquent un emplacement d'arrêt de bus. Le stationnement et l'arrêt y sont strictement interdits pour ne pas gêner la montée et la descente des passagers ni perturber la circulation des transports en commun.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Un feu vert en forme de flèche orientée vers la droite signifie :",
    answers: ["Obligation de tourner à droite pour tous les véhicules", "Autorisation de tourner à droite uniquement", "Voie réservée aux véhicules tournant à droite", "Indication d'une déviation à droite"],
    correct: [1],
    explanation: "Un feu vert en forme de flèche directionnelle autorise uniquement le mouvement dans la direction indiquée. Si la flèche pointe à droite, seuls les véhicules souhaitant tourner à droite peuvent s'engager. Les autres directions restent au rouge.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Quels panneaux parmi les suivants sont des panneaux d'indication (fond bleu ou vert) ?",
    answers: ["Panneau de parking", "Panneau d'hôpital à proximité", "Panneau d'impasse", "Panneau de passage piéton"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Les panneaux d'indication à fond bleu incluent le parking (P blanc sur fond bleu), l'hôpital (H blanc sur fond bleu) et l'impasse (rectangle bleu avec symbole). Le panneau de passage piéton est un panneau de signalisation triangulaire de danger à fond blanc bordé de rouge.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Un panneau carré bleu avec un 'P' blanc suivi d'un panonceau '+ relais' indique :",
    answers: ["Un parking avec borne de recharge électrique", "Un parking relais avec correspondance transport en commun", "Un parking pour covoiturage", "Un parking de longue durée"],
    correct: [1],
    explanation: "Le panneau P+R (Parking Relais) signale un parking où l'on peut garer son véhicule pour emprunter un transport en commun (tramway, bus, métro). Ces parkings sont généralement situés en périphérie des villes pour réduire le trafic en centre-ville.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Que signifie un marquage au sol constitué de triangles blancs successifs (dents de requin) ?",
    answers: ["Ralentisseur à proximité", "Ligne de cédez-le-passage vue du côté de celui qui doit céder", "Zone de dépassement interdit", "Marquage de voie de décélération"],
    correct: [1],
    explanation: "Les triangles blancs peints au sol (dents de requin) matérialisent la ligne de cédez-le-passage. Leur pointe est dirigée vers le conducteur qui doit céder le passage. Ce marquage complète le panneau triangulaire inversé et la ligne discontinue transversale.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 1,
    text: "Un panneau rond à fond bleu avec une flèche blanche orientée vers le haut signifie :",
    answers: ["Route à sens unique", "Direction obligatoire tout droit", "Voie express", "Début d'autoroute"],
    correct: [1],
    explanation: "Un panneau rond à fond bleu avec une flèche blanche est un panneau d'obligation. La flèche vers le haut impose la direction tout droit. Il ne faut pas le confondre avec le panneau rectangulaire de sens unique qui est un panneau d'indication.",
    schema: null,
    tags: []
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Quelles sont les caractéristiques d'un panneau de fin de zone 30 ?",
    answers: ["Rond, fond blanc, chiffre 30 barré", "Rectangulaire, fond blanc, chiffre 30 barré de rouge", "Carré, fond gris, chiffre 30 barré", "Rectangulaire, fond blanc, chiffre 30 barré de lignes diagonales grises"],
    correct: [3],
    explanation: "Le panneau de fin de zone 30 est rectangulaire à fond blanc avec l'inscription '30' barrée de fines lignes diagonales grises. Il ne faut pas le confondre avec le panneau rond de fin de limitation qui ne concerne qu'une section de route et non une zone entière.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "À une intersection, un tramway arrive en même temps que vous. Qui a la priorité ?",
    answers: ["Moi, car je suis à sa droite", "Le tramway, dans tous les cas sauf signal contraire", "Celui qui arrive le premier", "Cela dépend du marquage au sol"],
    correct: [1],
    explanation: "Le tramway bénéficie d'une priorité absolue sur tous les autres usagers dans presque toutes les situations, qu'il vienne de droite ou de gauche. Seul un feu rouge ou un signal spécifique peut limiter cette priorité. Cette règle existe car le tramway ne peut pas dévier de sa trajectoire.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Dans quelles situations le tramway perd-il sa priorité ?",
    answers: ["Quand il franchit un feu rouge clignotant", "Quand un agent de la circulation lui impose l'arrêt", "Quand il sort de son dépôt", "Quand il circule sur une voie partagée avec les voitures"],
    correct: [1, 2],
    multi: true,
    explanation: "Le tramway perd sa priorité dans deux cas principaux : lorsqu'un agent de la circulation lui impose l'arrêt, et lorsqu'il sort de son dépôt pour s'insérer dans la circulation. Dans ces situations, les autres véhicules reprennent la priorité normale selon les règles habituelles.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "À une intersection en T sans signalisation, qui est prioritaire ?",
    answers: ["Celui qui est sur la route principale (la barre du T)", "Celui qui vient de la droite", "Celui qui circule tout droit", "Il n'y a pas de règle spécifique"],
    correct: [1],
    explanation: "En l'absence de toute signalisation, la règle de la priorité à droite s'applique, même dans une intersection en T. Le conducteur venant de la droite est prioritaire, quelle que soit la configuration de l'intersection. Seule une signalisation peut modifier cette règle.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "À l'approche d'un passage à niveau sans barrière avec un panneau STOP, que devez-vous faire ?",
    answers: ["Ralentir et passer si la voie est libre", "Marquer un arrêt absolu avant la voie ferrée", "Klaxonner puis passer", "S'arrêter uniquement si un train est visible"],
    correct: [1],
    explanation: "Devant un passage à niveau équipé d'un panneau STOP, l'arrêt est obligatoire dans tous les cas, même si aucun train n'est visible. Vous devez vous arrêter à la ligne d'effet du STOP, vérifier dans les deux sens qu'aucun train n'approche, puis redémarrer.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Quelles règles s'appliquent aux voies réservées aux bus ?",
    answers: ["Les taxis peuvent les emprunter si un panonceau le permet", "Les vélos peuvent toujours y circuler", "Les véhicules d'urgence peuvent les emprunter", "Les voitures peuvent les utiliser pour tourner à droite juste avant l'intersection"],
    correct: [0, 2, 3],
    multi: true,
    explanation: "Les voies de bus peuvent être empruntées par les taxis (si panonceau), les véhicules d'urgence en intervention, et les automobilistes juste avant une intersection pour tourner à droite (sur les derniers mètres en pointillés). Les vélos ne sont autorisés que si un panonceau vélo le précise explicitement.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Un véhicule prioritaire (gyrophare et sirène) arrive derrière vous sur une route à une voie. Que faites-vous ?",
    answers: ["Accélérer pour libérer la voie plus vite", "Se rabattre à droite et, si nécessaire, s'arrêter", "S'arrêter immédiatement sur place", "Continuer normalement car il peut vous doubler"],
    correct: [1],
    explanation: "Face à un véhicule prioritaire en intervention (gyrophare ET sirène), vous devez faciliter son passage en vous rabattant sur la droite. Si la chaussée est trop étroite, arrêtez-vous sur le côté droit. Ne freinez jamais brutalement et ne vous arrêtez pas au milieu de la voie.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "À un rond-point (carrefour giratoire), qui a la priorité ?",
    answers: ["Les véhicules qui entrent dans le rond-point", "Les véhicules déjà engagés sur l'anneau", "Les véhicules venant de la droite", "Les poids lourds"],
    correct: [1],
    explanation: "Dans un carrefour giratoire (signalé par un panneau rond-point avec cédez-le-passage), les véhicules déjà engagés sur l'anneau sont prioritaires. Ceux qui souhaitent entrer doivent céder le passage. Attention à ne pas confondre avec un rond-point à l'ancienne avec priorité à droite.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Lors d'un croisement difficile en montagne, qui doit manœuvrer pour laisser passer l'autre ?",
    answers: ["Le véhicule qui descend doit reculer", "Le véhicule qui monte doit reculer", "Le véhicule le plus léger", "Le véhicule le plus éloigné d'une aire de croisement"],
    correct: [0],
    explanation: "En montagne, lors d'un croisement impossible, c'est le véhicule qui descend qui doit reculer pour laisser passer celui qui monte. La raison est que le redémarrage en côte est plus difficile et dangereux. Exception : les véhicules lourds ont priorité sur les légers.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 2,
    text: "Un piéton est engagé sur un passage piéton non protégé par un feu. Quelles sont vos obligations ?",
    answers: ["Ralentir pour le laisser finir de traverser", "S'arrêter pour lui céder le passage", "Klaxonner pour le prévenir", "S'arrêter et ne pas redémarrer tant qu'il n'a pas atteint le trottoir opposé"],
    correct: [1],
    explanation: "Depuis 2018, le conducteur doit s'arrêter dès qu'un piéton manifeste son intention de traverser sur un passage piéton, pas seulement quand il est engagé. Le non-respect de cette règle entraîne une amende de 135€ et un retrait de 6 points.",
    schema: null,
    tags: []
  },
  {
    series: 'priorites',
    difficulty: 1,
    text: "À une intersection avec un cédez-le-passage, vous devez :",
    answers: ["Vous arrêter obligatoirement", "Laisser passer les véhicules sur la route prioritaire, en vous arrêtant si nécessaire", "Ralentir et passer si personne n'est visible", "Klaxonner pour signaler votre arrivée"],
    correct: [1],
    explanation: "Le cédez-le-passage impose de laisser la priorité aux usagers de la route que vous allez couper ou rejoindre. Contrairement au STOP, l'arrêt n'est pas obligatoire si la voie est clairement libre. Cependant, vous devez être prêt à vous arrêter à tout moment.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Quelle est la vitesse maximale autorisée dans une zone de chantier sur autoroute, sauf indication contraire ?",
    answers: ["70 km/h", "90 km/h", "110 km/h", "La vitesse est toujours indiquée par des panneaux"],
    correct: [3],
    explanation: "Il n'existe pas de vitesse réglementaire fixe pour les zones de chantier. La limitation est toujours signalée par des panneaux temporaires (jaunes). Elle varie généralement entre 50 et 90 km/h selon la configuration. Il faut impérativement respecter la signalisation temporaire qui prévaut sur la permanente.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Par temps de verglas, quelles adaptations de vitesse sont recommandées ?",
    answers: ["Réduire sa vitesse de 20 km/h par rapport à la limite", "Diviser sa vitesse habituelle par deux au minimum", "Rouler à 50 km/h maximum quelle que soit la route", "Adapter sa vitesse pour pouvoir s'arrêter sur la distance de visibilité"],
    correct: [1, 3],
    multi: true,
    explanation: "Sur verglas, la distance de freinage est multipliée par 4 à 6. Il est recommandé de diviser sa vitesse au moins par deux et de toujours pouvoir s'arrêter sur la distance visible devant soi. Aucune vitesse fixe n'est imposée par la loi mais la prudence exige ces adaptations drastiques.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "Quelle est la distance de réaction moyenne à 50 km/h sur route sèche ?",
    answers: ["5 mètres", "14 mètres", "25 mètres", "28 mètres"],
    correct: [1],
    explanation: "La distance de réaction correspond au trajet parcouru pendant le temps de réaction du conducteur (environ 1 seconde). À 50 km/h, on parcourt environ 14 mètres avant même de commencer à freiner. Cette distance s'ajoute à la distance de freinage pour donner la distance d'arrêt totale.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "L'effet tunnel en conduite se manifeste principalement :",
    answers: ["Dans les tunnels routiers uniquement", "À haute vitesse, avec un rétrécissement du champ de vision", "La nuit, à cause de l'éblouissement des phares", "En cas de fatigue prolongée au volant"],
    correct: [1],
    explanation: "L'effet tunnel est un phénomène physiologique : plus la vitesse augmente, plus le champ de vision se réduit. À 130 km/h, il passe d'environ 180° à l'arrêt à seulement 30°. Le conducteur perd la perception des éléments latéraux (piétons, véhicules aux intersections), ce qui augmente considérablement les risques.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Quelle est la limitation de vitesse pour un jeune conducteur (permis probatoire) sur autoroute ?",
    answers: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
    correct: [1],
    explanation: "Les conducteurs en période probatoire sont limités à 110 km/h sur autoroute (au lieu de 130 km/h), 100 km/h sur routes à chaussées séparées (au lieu de 110 km/h) et 80 km/h sur routes hors agglomération. Ces limitations s'appliquent pendant 3 ans (ou 2 ans en conduite accompagnée).",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "À 90 km/h, quelle est la distance d'arrêt approximative sur route mouillée ?",
    answers: ["45 mètres", "70 mètres", "105 mètres", "130 mètres"],
    correct: [2],
    explanation: "Sur route mouillée, la distance de freinage est multipliée par 2 environ. À 90 km/h : distance de réaction ≈ 25 m + distance de freinage sur sec ≈ 40 m × 2 = 80 m. Total ≈ 105 m. C'est pourquoi les limitations sont abaissées de 10 à 20 km/h par temps de pluie sur les routes à grande vitesse.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "En agglomération, la vitesse est généralement limitée à :",
    answers: ["30 km/h", "50 km/h", "70 km/h", "80 km/h"],
    correct: [1],
    explanation: "La vitesse en agglomération est limitée à 50 km/h par défaut, sauf signalisation contraire. Certaines zones peuvent être limitées à 30 km/h (zone 30) ou même 20 km/h (zone de rencontre). À Paris et dans certaines villes, la vitesse est désormais limitée à 30 km/h sur la majorité des voies.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Quels facteurs augmentent la distance de freinage ?",
    answers: ["Chaussée mouillée ou verglacée", "Pneus usés ou sous-gonflés", "Véhicule chargé lourdement", "Conduite en descente"],
    correct: [0, 1, 2, 3],
    multi: true,
    explanation: "Tous ces facteurs augmentent la distance de freinage. La chaussée glissante réduit l'adhérence, les pneus usés diminuent le grip, le poids supplémentaire augmente l'inertie, et la pente descendante ajoute une force gravitationnelle. Combinés, ces facteurs peuvent multiplier la distance de freinage par 4 ou plus.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Par temps de pluie, la vitesse maximale sur autoroute est réduite à :",
    answers: ["100 km/h", "110 km/h", "120 km/h", "La limitation ne change pas"],
    correct: [1],
    explanation: "Par temps de pluie, les limitations de vitesse sont abaissées : 110 km/h sur autoroute (au lieu de 130), 100 km/h sur routes à chaussées séparées (au lieu de 110), et 80 km/h sur les autres routes hors agglomération. En cas de visibilité inférieure à 50 m, la limite est de 50 km/h partout.",
    schema: null,
    tags: []
  },
  {
    series: 'vitesses',
    difficulty: 1,
    text: "La règle des '2 secondes' sert à évaluer :",
    answers: ["Le temps de réaction du conducteur", "La distance de sécurité avec le véhicule qui précède", "Le temps nécessaire pour un dépassement", "La durée d'un feu orange"],
    correct: [1],
    explanation: "La règle des 2 secondes permet d'évaluer simplement la distance de sécurité : choisir un repère fixe, quand le véhicule précédent le dépasse, compter 'un-mille-un, un-mille-deux'. Si vous atteignez le repère avant la fin du décompte, vous êtes trop près. Par temps de pluie, augmenter à 4 secondes.",
    schema: null,
    tags: []
  },

  // ===== BATCH: BATCH2 =====
{
    series: 'alcool',
    difficulty: 1,
    text: "Quel est le taux d'alcoolémie maximum autorisé pour un conducteur en période probatoire ?",
    answers: ["0,5 g/l de sang", "0,2 g/l de sang", "0,8 g/l de sang", "0,0 g/l de sang"],
    correct: [1],
    explanation: "Depuis 2015, le taux maximum autorisé pour les conducteurs en période probatoire (permis de moins de 3 ans ou 2 ans en conduite accompagnée) est de 0,2 g/l de sang, soit pratiquement zéro verre d'alcool. Cette mesure vise à protéger les jeunes conducteurs, particulièrement vulnérables aux effets de l'alcool.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Quels sont les effets combinés de l'alcool et de médicaments portant un pictogramme de niveau 2 (orange) ?",
    answers: ["Les effets s'annulent mutuellement", "Les effets de l'alcool sont multipliés et le risque d'accident augmente considérablement", "Seuls les effets des médicaments sont ressentis", "Il n'y a aucune interaction connue"],
    correct: [1],
    explanation: "L'association alcool + médicaments de niveau 2 ou 3 provoque une potentialisation des effets : somnolence accrue, temps de réaction allongé, troubles de la vision et de la coordination. Le risque d'accident est multiplié par un facteur pouvant dépasser 14. Il est formellement déconseillé de conduire dans ces conditions.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Qu'est-ce qu'un éthylotest anti-démarrage (EAD) et dans quelles situations peut-il être imposé ?",
    answers: ["Un dispositif qui empêche le démarrage si le taux d'alcool dans l'air expiré dépasse le seuil autorisé", "Un simple éthylotest chimique intégré au tableau de bord", "Un dispositif réservé uniquement aux poids lourds", "Un appareil qui mesure la fatigue du conducteur"],
    correct: [0],
    explanation: "L'EAD est un dispositif électronique relié au système de démarrage du véhicule. Le conducteur doit souffler dedans avant de démarrer : si le taux d'alcool dépasse le seuil, le véhicule ne démarre pas. Il peut être imposé par un juge comme alternative à la suspension du permis, ou dans le cadre d'une composition pénale. En 2026, il est obligatoire dans tous les autocars de transport d'enfants.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Quelles sont les conséquences immédiates lors d'un contrôle positif à l'alcool entre 0,5 et 0,8 g/l de sang pour un conducteur expérimenté ?",
    answers: ["Rétention du permis de conduire pour 72 heures", "Immobilisation du véhicule", "Simple avertissement verbal", "Retrait de 6 points et amende forfaitaire de 135 €"],
    correct: [3],
    explanation: "Pour un taux compris entre 0,5 et 0,8 g/l, il s'agit d'une contravention de 4e classe : amende forfaitaire de 135 € et retrait de 6 points. La rétention immédiate du permis pour 72h et l'immobilisation du véhicule s'appliquent à partir de 0,8 g/l (délit). Cependant, les forces de l'ordre peuvent procéder à une rétention même en contravention si l'état du conducteur le justifie.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Quels effets l'alcool combiné à la fatigue produit-il sur la conduite ?",
    answers: ["La fatigue annule les effets de l'alcool", "L'alcool donne un regain d'énergie qui compense la fatigue", "Les effets se cumulent : somnolence amplifiée, vigilance effondrée et risque d'endormissement multiplié", "La fatigue empêche l'absorption de l'alcool"],
    correct: [2],
    explanation: "L'alcool et la fatigue ont des effets synergiques sur le système nerveux central. Ensemble, ils provoquent une baisse dramatique de la vigilance, un allongement majeur du temps de réaction et un risque très élevé d'endormissement au volant. Un conducteur fatigué avec seulement 0,5 g/l présente un risque comparable à celui d'un conducteur reposé à 0,8 g/l.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 1,
    text: "Combien de temps faut-il en moyenne à l'organisme pour éliminer un verre standard d'alcool ?",
    answers: ["30 minutes", "1 heure", "1h30 environ", "3 heures"],
    correct: [2],
    explanation: "L'organisme élimine l'alcool à un rythme moyen de 0,10 à 0,15 g/l par heure. Un verre standard (contenant environ 10 g d'alcool pur) fait monter le taux d'environ 0,20 à 0,25 g/l. Il faut donc compter environ 1h30 pour éliminer un seul verre. Aucun moyen (café, douche froide, exercice) ne permet d'accélérer cette élimination.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Dans quels cas un stage de sensibilisation à la sécurité routière est-il obligatoire en lien avec l'alcool ?",
    answers: ["Après toute infraction liée à l'alcool pour un conducteur en période probatoire", "Uniquement si le juge le décide", "Après un accident mortel uniquement", "Seulement en cas de récidive"],
    correct: [0],
    explanation: "Le stage de sensibilisation est obligatoire pour tout conducteur en période probatoire ayant commis une infraction liée à l'alcool (ou stupéfiants) entraînant un retrait d'au moins 3 points. Il doit être effectué dans les 4 mois suivant la réception de la lettre recommandée. Il peut aussi être imposé par un juge comme peine complémentaire ou comme alternative aux poursuites (composition pénale) pour tout conducteur.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 3,
    text: "Quelles affirmations sont vraies concernant la rétention immédiate du permis de conduire pour alcoolémie ?",
    answers: ["Elle est possible dès 0,8 g/l de sang (délit)", "Elle dure 72 heures maximum avant décision du préfet", "Le conducteur peut continuer à conduire un autre véhicule pendant la rétention", "Le préfet peut ensuite prononcer une suspension administrative pouvant aller jusqu'à 6 mois"],
    correct: [0, 1, 3],
    multi: true,
    explanation: "Lors d'un contrôle révélant un taux supérieur ou égal à 0,8 g/l, les forces de l'ordre procèdent à la rétention immédiate du permis pour 72 heures. Pendant cette période, toute conduite est interdite. Le préfet dispose ensuite de ces 72h pour décider d'une éventuelle suspension administrative (jusqu'à 6 mois), en attendant le jugement qui peut prononcer une suspension judiciaire plus longue.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Un conducteur prend un médicament antihistaminique (contre les allergies) portant un pictogramme de niveau 3 (rouge). Que risque-t-il s'il conduit après avoir bu un seul verre d'alcool ?",
    answers: ["Rien de particulier car un seul verre est sans danger", "Un risque majeur d'accident car l'interaction médicament-alcool décuple la somnolence et les troubles de la vigilance", "Un risque uniquement si le traitement dure plus d'une semaine", "Le médicament protège contre les effets de l'alcool"],
    correct: [1],
    explanation: "Un pictogramme de niveau 3 signifie que la conduite est formellement déconseillée. Combiné à l'alcool, même en faible quantité, les effets sédatifs sont considérablement amplifiés. La somnolence, les vertiges et la baisse de réflexes peuvent survenir brutalement. Dans ce cas, il ne faut absolument pas conduire, quelle que soit la quantité d'alcool consommée.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 1,
    text: "Que signifie la notion de « verre standard » en matière d'alcool ?",
    answers: ["Un verre contenant exactement 10 g d'alcool pur, quel que soit le type de boisson", "Un verre de bière uniquement", "Un verre de 25 cl quel que soit l'alcool", "Une dose servie uniquement dans les bars"],
    correct: [0],
    explanation: "Le verre standard (ou unité d'alcool) contient environ 10 g d'alcool pur. Cela correspond à un demi de bière (25 cl à 5°), un verre de vin (12,5 cl à 12°), un verre d'apéritif (7 cl à 18°) ou un shooter de whisky (2,5 cl à 40°). Tous ces verres élèvent le taux d'alcoolémie de façon équivalente, soit environ 0,20 à 0,25 g/l.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Face à une hémorragie externe abondante, quelle est la première action à réaliser ?",
    answers: ["Poser un garrot", "Allonger la victime et appuyer fortement sur la plaie avec un tissu propre ou la main protégée", "Surélever le membre blessé au-dessus du cœur", "Nettoyer la plaie à grande eau"],
    correct: [1],
    explanation: "La compression directe de la plaie est le geste prioritaire face à une hémorragie. Il faut appuyer fortement avec la paume de la main (protégée si possible par un tissu propre, un gant ou un sac plastique) directement sur la source du saignement. Le garrot est un geste de dernier recours réservé aux cas où la compression directe est impossible ou inefficace. Alerter les secours (15 ou 112) en parallèle.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 1,
    text: "Quel numéro devez-vous composer pour joindre le SAMU en France ?",
    answers: ["17", "15", "18", "114"],
    correct: [1],
    explanation: "Le 15 est le numéro du SAMU (Service d'Aide Médicale Urgente). Le 17 correspond à la police/gendarmerie, le 18 aux pompiers, et le 114 est le numéro d'urgence par SMS pour les personnes sourdes ou malentendantes. Le 112 est le numéro d'urgence européen qui redirige vers le service approprié.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Quelles actions sont correctes pour protéger les lieux d'un accident sur une route hors agglomération ?",
    answers: ["Allumer ses feux de détresse dès l'approche de l'accident", "Placer le triangle de présignalisation à au moins 30 mètres en amont, visible à 100 mètres", "Baliser avec des objets lumineux ou réfléchissants si disponibles", "Rester sur la chaussée pour faire signe aux autres véhicules"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "La protection des lieux est la première étape (Protéger-Alerter-Secourir). Il faut : allumer ses feux de détresse, enfiler un gilet haute visibilité, placer le triangle à au moins 30 mètres (voire 100 m sur autoroute) pour être visible à distance suffisante. Des lampes, cônes ou objets réfléchissants renforcent le balisage. Ne jamais rester sur la chaussée inutilement pour éviter un sur-accident.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Vous trouvez une personne inconsciente qui ne respire pas. Un défibrillateur automatisé externe (DAE) est disponible à proximité. Que devez-vous faire ?",
    answers: ["Commencer immédiatement le massage cardiaque et envoyer quelqu'un chercher le DAE", "Attendre l'arrivée des secours sans intervenir", "Utiliser le DAE uniquement si vous êtes médecin", "Placer la victime en PLS et attendre"],
    correct: [0],
    explanation: "Face à un arrêt cardiaque (inconscience + absence de respiration), il faut alerter les secours (15/112) et commencer immédiatement le massage cardiaque (30 compressions / 2 insufflations). Le DAE doit être mis en place dès que possible sans interrompre le massage plus de 10 secondes. Tout citoyen peut utiliser un DAE sans formation préalable : l'appareil guide vocalement l'utilisateur et analyse lui-même le rythme cardiaque.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Quelle est la conduite à tenir face à une brûlure thermique grave (plus grande que la paume de la main de la victime) ?",
    answers: ["Appliquer du beurre ou de la crème grasse sur la brûlure", "Refroidir immédiatement la brûlure sous l'eau tiède (15-25°C) pendant au moins 15 minutes, puis alerter le 15", "Percer les cloques pour soulager la douleur", "Retirer les vêtements collés à la peau brûlée"],
    correct: [1],
    explanation: "Le refroidissement sous l'eau tiède courante (pas froide ni glacée) pendant 15 à 20 minutes est le premier geste essentiel. L'eau doit couler sans pression directement sur la brûlure. Ne jamais appliquer de corps gras, ne pas percer les cloques, ne pas retirer un vêtement adhérent à la peau. Pour une brûlure étendue, profonde, ou située sur le visage/mains/articulations, alerter le 15 systématiquement.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Quelles informations devez-vous communiquer lors d'un appel au 15 ou au 112 après un accident de la route ?",
    answers: ["La localisation précise (route, commune, sens, point kilométrique ou repère)", "Le nombre de victimes et leur état apparent (conscient, respire, saigne…)", "Les circonstances de l'accident et les risques particuliers (incendie, matières dangereuses)", "Votre numéro de téléphone pour être rappelé"],
    correct: [0, 1, 2, 3],
    multi: true,
    explanation: "Un appel d'urgence efficace doit contenir : la localisation exacte (indispensable pour envoyer les secours), le nombre de victimes et leur état (permet d'adapter les moyens), les circonstances et dangers (incendie, fuite de carburant, personne coincée), et votre numéro de rappel. Ne jamais raccrocher avant que le régulateur ne vous y invite, car il peut avoir besoin d'informations complémentaires ou vous donner des consignes de premiers secours.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 1,
    text: "Quel numéro d'urgence européen peut être composé depuis n'importe quel pays de l'Union européenne ?",
    answers: ["15", "911", "112", "114"],
    correct: [2],
    explanation: "Le 112 est le numéro d'urgence européen, accessible gratuitement depuis tout téléphone (même sans carte SIM, même verrouillé) dans tous les pays de l'UE. Il redirige vers le service d'urgence approprié. Il fonctionne en complément des numéros nationaux (15, 17, 18 en France). Il est particulièrement utile lors de déplacements à l'étranger.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Une personne est victime d'un malaise et s'effondre devant vous. Elle est inconsciente mais respire normalement. Que faites-vous ?",
    answers: ["Vous la laissez sur le dos et attendez les secours", "Vous la placez en position latérale de sécurité (PLS) après avoir alerté le 15", "Vous lui donnez de l'eau pour la réhydrater", "Vous pratiquez un massage cardiaque"],
    correct: [1],
    explanation: "Une victime inconsciente qui respire doit être placée en PLS (sur le côté, tête en extension, bouche vers le sol) pour éviter que la langue ou des vomissements n'obstruent les voies aériennes. Il faut alerter le 15 avant ou simultanément. Le massage cardiaque n'est nécessaire que si la victime ne respire pas. Ne jamais donner à boire ou à manger à une personne inconsciente.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Lors d'un accident, une victime présente un corps étranger (morceau de verre) planté dans la cuisse. Quelles sont les bonnes pratiques ?",
    answers: ["Retirer le corps étranger pour stopper le saignement", "Ne pas retirer le corps étranger et immobiliser la zone", "Faire des points de compression autour du corps étranger sans appuyer dessus", "Alerter les secours car seul un professionnel doit retirer l'objet"],
    correct: [1, 2, 3],
    multi: true,
    explanation: "Il ne faut JAMAIS retirer un corps étranger planté dans le corps : il fait office de bouchon et son retrait pourrait aggraver l'hémorragie ou léser des structures profondes. Il faut immobiliser l'objet (calage avec des compresses ou tissu autour), exercer une pression autour sans appuyer sur l'objet, et alerter les secours. Seul un chirurgien en milieu hospitalier procédera au retrait dans des conditions sécurisées.",
    schema: null,
    tags: []
  },
  {
    series: 'secours',
    difficulty: 2,
    text: "Le numéro 114 est destiné aux personnes sourdes ou malentendantes. Comment fonctionne-t-il ?",
    answers: ["Par appel vocal classique avec amplification du son", "Par SMS, fax ou application dédiée permettant une communication écrite avec les secours", "Par visioconférence uniquement", "Il redirige automatiquement vers un interprète en langue des signes"],
    correct: [1],
    explanation: "Le 114 est le numéro d'urgence accessible par SMS, fax, ou via l'application 114. Il permet aux personnes sourdes, malentendantes ou ne pouvant pas parler de contacter les secours par écrit 24h/24. Un opérateur formé reçoit le message et alerte le service d'urgence adapté (SAMU, police, pompiers). Il est également utile dans les situations où parler mettrait en danger (violences, intrusion).",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Que sont les feux diurnes (DRL - Daytime Running Lights) et quand s'allument-ils ?",
    answers: ["Des feux qui remplacent les phares la nuit", "Des feux de faible intensité qui s'allument automatiquement au démarrage du moteur pour être vu de jour", "Des feux anti-brouillard utilisés par temps clair", "Des feux de recul activés en marche arrière"],
    correct: [1],
    explanation: "Les feux diurnes (DRL) sont des feux de faible consommation qui s'allument automatiquement au démarrage du véhicule. Leur but est d'améliorer la visibilité du véhicule par les autres usagers en plein jour. Ils sont obligatoires sur tous les véhicules neufs depuis 2011. Attention : ils n'éclairent pas la route et ne remplacent pas les feux de croisement en cas de faible luminosité ou la nuit.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Quand devez-vous utiliser les feux de croisement ?",
    answers: ["Uniquement la nuit en ville", "La nuit, par temps de pluie, de brouillard, ou dès que la visibilité est insuffisante", "Uniquement sur autoroute", "Seulement quand il pleut fort"],
    correct: [1],
    explanation: "Les feux de croisement doivent être allumés dès que la luminosité baisse (nuit, tunnel, parking souterrain), par mauvais temps (pluie, neige, brouillard), ou dans toute situation de visibilité réduite. En France, ils éclairent la route sur environ 30 mètres sans éblouir les autres usagers. Ils sont obligatoires dès le crépuscule, pas seulement la nuit complète.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Quelles sont les obligations d'éclairage pour une trottinette électrique circulant de nuit en France ?",
    answers: ["Feu avant blanc ou jaune", "Feu arrière rouge", "Catadioptres latéraux orange et arrière rouge", "Aucun éclairage n'est obligatoire si le conducteur porte un gilet jaune"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Depuis la réglementation des EDPM (Engins de Déplacement Personnel Motorisés), une trottinette électrique doit obligatoirement être équipée d'un feu avant blanc ou jaune, d'un feu arrière rouge, et de dispositifs rétroréfléchissants (catadioptres) latéraux et arrière. De nuit ou en visibilité insuffisante, le port d'un gilet haute visibilité est également obligatoire. Le non-respect est passible d'une amende de 35 €.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Dans quelle situation pouvez-vous utiliser l'avertisseur lumineux (appel de phares) ?",
    answers: ["Pour saluer un autre conducteur", "Pour avertir d'un danger ou signaler votre présence à un autre usager", "Pour demander à un véhicule devant vous de se ranger", "Pour exprimer votre mécontentement"],
    correct: [1],
    explanation: "L'appel de phares (avertisseur lumineux) ne doit être utilisé que pour deux raisons légales : signaler sa présence (notamment avant un dépassement hors agglomération) ou avertir d'un danger immédiat. L'utiliser pour presser un conducteur ou exprimer sa frustration constitue un usage abusif passible d'une amende. C'est un moyen de communication de sécurité, pas d'expression personnelle.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Qu'est-ce que les feux adaptatifs (AFS/ADB) et quels sont leurs avantages ?",
    answers: ["Des feux qui s'adaptent automatiquement à la vitesse, à la direction et aux conditions de circulation", "Des feux qui changent de couleur selon la météo", "Des feux uniquement décoratifs pour les véhicules haut de gamme", "Des feux qui s'éteignent automatiquement à l'arrêt du véhicule"],
    correct: [0],
    explanation: "Les feux adaptatifs (Adaptive Front-lighting System) ajustent automatiquement le faisceau lumineux en fonction de la vitesse, de l'angle de braquage et de la présence d'autres usagers. Les systèmes les plus avancés (Matrix LED, Digital Light) peuvent créer des zones d'ombre ciblées pour ne pas éblouir les véhicules en face tout en éclairant le reste de la route en plein phares. Ils améliorent considérablement la sécurité nocturne.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "À quelle distance minimum les feux de route (pleins phares) éclairent-ils la route ?",
    answers: ["30 mètres", "75 mètres", "100 mètres au minimum", "200 mètres maximum"],
    correct: [2],
    explanation: "Les feux de route éclairent la route sur au moins 100 mètres devant le véhicule. Ils doivent être utilisés hors agglomération lorsqu'il n'y a pas d'éclairage public et en l'absence de véhicule en sens inverse ou précédant. Dès qu'un autre usager est en vue (à l'avant ou en face), il faut repasser en feux de croisement pour ne pas l'éblouir.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Quelles affirmations sont correctes concernant le réglage des phares ?",
    answers: ["Des phares mal réglés peuvent éblouir les usagers en face même en feux de croisement", "Le réglage doit être vérifié au contrôle technique", "Il faut ajuster le réglage quand le véhicule est chargé (coffre plein, passagers arrière)", "Un mauvais réglage ne concerne que l'esthétique du véhicule"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Des phares mal réglés sont dangereux : trop hauts, ils éblouissent les usagers en face ; trop bas, ils réduisent la distance de vision. Le réglage est vérifié au contrôle technique et peut constituer un motif de contre-visite. En cas de chargement important (bagages, passagers arrière), la molette de correcteur de site (présente au tableau de bord) permet d'abaisser le faisceau pour compenser l'inclinaison du véhicule.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Un cycliste circulant de nuit hors agglomération doit obligatoirement disposer de quels équipements d'éclairage ?",
    answers: ["Feu avant jaune ou blanc uniquement", "Feu avant blanc ou jaune ET feu arrière rouge", "Catadioptre rouge arrière et catadioptres orange sur les roues et pédales", "Gilet haute visibilité"],
    correct: [1, 2, 3],
    multi: true,
    explanation: "De nuit ou en visibilité insuffisante, un vélo doit être équipé d'un feu avant blanc ou jaune, d'un feu arrière rouge, d'un catadioptre rouge arrière, de catadioptres orange sur les roues (ou pneus à flancs réfléchissants) et sur les pédales. Hors agglomération de nuit, le gilet haute visibilité rétroréfléchissant est obligatoire pour le cycliste et son passager éventuel.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Dans quel cas est-il autorisé d'utiliser les feux de brouillard arrière ?",
    answers: ["Dès qu'il pleut légèrement", "Uniquement lorsque la visibilité est inférieure à environ 50 mètres (brouillard épais, chute de neige dense)", "Par temps clair sur autoroute pour être mieux vu", "En complément des feux de détresse lors d'un ralentissement"],
    correct: [1],
    explanation: "Le feu de brouillard arrière (très puissant, environ 20 fois plus lumineux qu'un feu stop) ne doit être utilisé qu'en cas de brouillard épais ou de chute de neige réduisant la visibilité à moins de 50 mètres environ. L'utiliser par temps de pluie ou sans nécessité éblouit dangereusement les conducteurs suiveurs et masque les feux stop. Son usage abusif est passible d'une amende de 35 €.",
    schema: null,
    tags: []
  },
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Quel voyant au tableau de bord indique que les feux de route (pleins phares) sont allumés ?",
    answers: ["Un voyant vert avec des traits horizontaux", "Un voyant bleu avec des traits horizontaux", "Un voyant orange en forme de phare", "Un voyant rouge clignotant"],
    correct: [1],
    explanation: "Le voyant des feux de route est toujours de couleur bleue, représentant un phare avec des traits horizontaux partant vers la gauche. Le voyant vert (traits inclinés vers le bas) indique les feux de croisement. Cette distinction de couleur est universelle sur tous les véhicules et permet au conducteur de vérifier rapidement quel éclairage est actif pour éviter d'éblouir les autres usagers.",
    schema: null,
    tags: []
  },

  // ===== BATCH: BATCH3 =====
{
    series: 'autoroute',
    difficulty: 1,
    text: "Quelle est la distance de sécurité minimale à respecter dans un tunnel autoroutier ?",
    answers: ["50 mètres", "100 mètres", "150 mètres", "200 mètres"],
    correct: [1],
    explanation: "Dans un tunnel autoroutier, la distance de sécurité minimale entre deux véhicules est de 100 mètres (ou deux traits de la bande d'arrêt d'urgence). Cette distance accrue par rapport à la rase campagne s'explique par l'espace confiné et les risques amplifiés en cas d'accident.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Tomber en panne sèche sur autoroute constitue :",
    answers: ["Une simple infraction au code de la route", "Une contravention de 4ème classe pouvant entraîner une immobilisation du véhicule", "Un délit passible du tribunal correctionnel", "Aucune infraction si on se range sur la bande d'arrêt d'urgence"],
    correct: [1],
    explanation: "La panne sèche sur autoroute est une contravention de 4ème classe (amende de 135 €) car elle est considérée comme un arrêt dangereux sur une voie où l'arrêt est interdit. Le conducteur est tenu de s'assurer d'avoir suffisamment de carburant avant d'emprunter l'autoroute.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Sur une voie d'accélération (bretelle d'insertion), que devez-vous faire ?",
    answers: ["Vous arrêter au bout de la voie si vous ne trouvez pas de créneau", "Accélérer pour atteindre la vitesse des véhicules sur l'autoroute et vous insérer en cédant le passage", "Forcer le passage car vous avez la priorité en tant que véhicule entrant", "Rouler lentement et attendre qu'un véhicule vous laisse passer"],
    correct: [1],
    explanation: "Sur la voie d'accélération, vous devez adapter votre vitesse à celle du flot de circulation sur l'autoroute et vous insérer en cédant le passage aux véhicules déjà engagés. Vous n'avez jamais la priorité lors de l'insertion. Il ne faut jamais s'arrêter sur la voie d'accélération sauf en cas de force majeure.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Que signifie le panneau J14 sur autoroute ?",
    answers: ["Aire de repos dans 14 km", "Présignalisation de travaux avec réduction du nombre de voies", "Sortie d'autoroute dans 14 km", "Zone de péage à 14 km"],
    correct: [1],
    explanation: "Le panneau J14 est un panneau de présignalisation de chantier sur autoroute. Il indique des travaux à venir avec modification de la circulation (réduction de voies, déviations). Il est généralement accompagné d'indications de vitesse réduite et de distances.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 1,
    text: "Tous les combien de kilomètres trouve-t-on au minimum une aire de repos sur autoroute ?",
    answers: ["Tous les 10 km", "Tous les 25 km", "Tous les 50 km", "Tous les 100 km"],
    correct: [0],
    explanation: "La réglementation française impose une aire de repos au minimum tous les 10 km sur autoroute (aires de repos simples avec parking). Les aires de service avec station-service et restauration sont espacées d'environ 40 à 50 km. Ces aires permettent aux conducteurs de faire des pauses régulières.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "Quelles sont les conduites à adopter si vous constatez qu'un véhicule roule à contresens sur l'autoroute ?",
    answers: ["Allumer les feux de détresse", "Se rabattre sur la voie de droite ou la bande d'arrêt d'urgence", "Alerter les secours via le 112 ou une borne d'appel d'urgence", "Faire des appels de phares pour tenter d'arrêter le véhicule à contresens"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Face à un contresens sur autoroute, il faut immédiatement allumer ses feux de détresse, se rabattre le plus à droite possible (BAU si nécessaire), et prévenir les secours. Il ne faut surtout pas tenter d'arrêter le véhicule soi-même ni faire de manœuvres brusques qui pourraient créer un sur-accident.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Au péage, dans quelle voie devez-vous vous engager si vous n'avez pas de badge télépéage ?",
    answers: ["Uniquement la voie avec le pictogramme 't' orange", "N'importe quelle voie ouverte signalée par une flèche verte", "Les voies signalées par le pictogramme de carte bancaire ou de pièces de monnaie", "La voie la plus à gauche réservée aux paiements manuels"],
    correct: [2],
    explanation: "Sans badge télépéage, vous devez emprunter les voies signalées par les pictogrammes de carte bancaire (CB) ou de pièces/billets. Les voies marquées d'un 't' orange sont réservées aux abonnés télépéage. S'engager dans une voie télépéage sans badge bloque la circulation et constitue une infraction.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Quelle est la vitesse maximale autorisée sur la voie de décélération (bretelle de sortie) d'une autoroute ?",
    answers: ["130 km/h comme sur l'autoroute", "110 km/h", "La vitesse indiquée par la signalisation sur la bretelle", "70 km/h systématiquement"],
    correct: [2],
    explanation: "Sur la voie de décélération, vous devez réduire progressivement votre vitesse et respecter la limitation indiquée par les panneaux présents sur la bretelle (souvent 70 ou 90 km/h selon la courbure). Il est essentiel de ne commencer à freiner qu'une fois engagé sur la voie de décélération, jamais sur la voie principale.",
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 3,
    text: "En cas de panne sur autoroute, quelles affirmations sont correctes ?",
    answers: ["Vous devez vous garer sur la bande d'arrêt d'urgence le plus à droite possible", "Tous les occupants doivent sortir du côté droit du véhicule et se placer derrière la glissière", "Vous pouvez rester dans le véhicule avec la ceinture attachée en attendant les secours", "Vous devez poser le triangle de signalisation à 30 mètres derrière le véhicule"],
    correct: [0, 1],
    multi: true,
    explanation: "En cas de panne sur autoroute, il faut se garer le plus à droite possible sur la BAU, faire sortir tous les passagers côté droit (côté glissière) et se mettre en sécurité derrière la glissière. Rester dans le véhicule est extrêmement dangereux. Depuis 2024, il est déconseillé de poser le triangle sur autoroute car cela expose le conducteur au risque de collision.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'autoroute',
    difficulty: 1,
    text: "Par temps de pluie, quelle est la vitesse maximale autorisée sur autoroute ?",
    answers: ["130 km/h", "110 km/h", "90 km/h", "80 km/h"],
    correct: [1],
    explanation: "Par temps de pluie, la vitesse maximale sur autoroute est réduite à 110 km/h (au lieu de 130 km/h). Cette réduction tient compte de l'allongement des distances de freinage sur chaussée mouillée et de la réduction de visibilité. En cas de visibilité inférieure à 50 mètres, la vitesse est limitée à 50 km/h.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "À quelle vitesse maximale un EDPM (trottinette électrique, gyroroue) est-il autorisé à circuler en 2026 ?",
    answers: ["20 km/h", "25 km/h", "30 km/h", "6 km/h sur trottoir, 25 km/h sur chaussée"],
    correct: [1],
    explanation: "En 2026, la vitesse maximale des EDPM (Engins de Déplacement Personnel Motorisés) est limitée à 25 km/h. Ils sont interdits sur les trottoirs (sauf si le maire l'autorise, auquel cas la vitesse est limitée à 6 km/h). Ils doivent circuler sur les pistes cyclables quand elles existent, sinon sur la chaussée en agglomération.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 1,
    text: "À l'approche d'une sortie d'école signalée par un panneau, que devez-vous faire ?",
    answers: ["Klaxonner pour avertir les enfants", "Ralentir et être prêt à vous arrêter à tout moment", "Maintenir votre vitesse si le feu est vert", "Vous arrêter systématiquement devant l'école"],
    correct: [1],
    explanation: "À l'approche d'une sortie d'école (panneau A13a), vous devez ralentir et redoubler de vigilance. Les enfants peuvent surgir de manière imprévisible, courir sans regarder ou traverser entre les véhicules stationnés. Il faut être prêt à s'arrêter immédiatement même en l'absence de passage piéton.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Quelle distance latérale minimale devez-vous respecter pour dépasser un cavalier hors agglomération ?",
    answers: ["0,50 mètre", "1 mètre", "1,50 mètre", "2 mètres"],
    correct: [2],
    explanation: "Hors agglomération, la distance latérale minimale pour dépasser un cavalier est de 1,50 mètre (comme pour les piétons et les cyclistes). En agglomération, cette distance minimale est de 1 mètre. Un cheval peut être effrayé par un véhicule qui passe trop près ou trop vite, ce qui représente un danger pour tous.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Quelles obligations s'appliquent aux utilisateurs d'EDPM (trottinettes électriques) depuis la réglementation 2024-2026 ?",
    answers: ["Port du casque obligatoire pour tous les utilisateurs", "Port d'un gilet rétroréfléchissant la nuit ou par visibilité insuffisante", "Âge minimum de 14 ans pour conduire un EDPM", "Interdiction de transporter un passager"],
    correct: [1, 2, 3],
    multi: true,
    explanation: "Depuis la mise à jour réglementaire, les utilisateurs d'EDPM doivent porter un gilet rétroréfléchissant de nuit, avoir au moins 14 ans et ne pas transporter de passager. Le casque est obligatoire uniquement pour les moins de 12 ans (vélo) mais fortement recommandé pour les EDPM. L'âge minimum est passé de 12 à 14 ans.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Vous arrivez derrière un convoi agricole qui roule à 25 km/h sur une route nationale. Que devez-vous faire ?",
    answers: ["Klaxonner pour demander au conducteur de se rabattre", "Patienter derrière et ne doubler que si la visibilité et l'espace le permettent en toute sécurité", "Le dépasser par la droite s'il y a un accotement praticable", "Allumer vos feux de route pour signaler votre présence"],
    correct: [1],
    explanation: "Face à un convoi agricole, la patience est de rigueur. Ces engins sont larges et lents, et leur dépassement nécessite une grande distance de visibilité. Il ne faut jamais dépasser par la droite ni forcer le passage. Attendez une zone offrant une visibilité suffisante et un espace de dépassement sûr.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 1,
    text: "Une personne en fauteuil roulant circule sur la chaussée. Pourquoi ?",
    answers: ["Elle n'a pas le droit de circuler sur le trottoir", "Le trottoir est probablement inaccessible (bordure haute, travaux, encombrement)", "Elle est en infraction et doit rejoindre le trottoir", "Les fauteuils roulants sont assimilés à des véhicules"],
    correct: [1],
    explanation: "Les personnes en fauteuil roulant sont assimilées à des piétons et devraient normalement circuler sur le trottoir. Si elles sont sur la chaussée, c'est généralement parce que le trottoir est inaccessible (bordures non abaissées, travaux, véhicules garés sur le trottoir). Le conducteur doit alors leur laisser toute la place nécessaire.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Un vélo cargo transporte des enfants dans son bac avant. Quelles précautions particulières devez-vous prendre ?",
    answers: ["Anticiper un temps de réaction et de freinage plus long du vélo cargo", "Laisser une distance latérale supérieure car le vélo est plus large", "Éviter de klaxonner à proximité pour ne pas effrayer les enfants ou le conducteur", "Aucune précaution particulière, un vélo reste un vélo"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Le vélo cargo est plus large, plus long et plus lourd qu'un vélo classique. Son freinage est plus long, surtout chargé. Il faut laisser plus d'espace latéral au dépassement, anticiper ses manœuvres plus lentes et éviter les coups de klaxon brusques qui pourraient surprendre le conducteur et compromettre son équilibre.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "À quelle vitesse maximale un EDPM peut-il rouler sur une aire piétonne si le maire l'a autorisé ?",
    answers: ["6 km/h (allure du pas)", "10 km/h", "15 km/h", "Les EDPM sont toujours interdits sur les aires piétonnes"],
    correct: [0],
    explanation: "Lorsque le maire autorise la circulation des EDPM sur les trottoirs ou aires piétonnes, la vitesse est strictement limitée à 6 km/h, soit l'allure du pas. Cette mesure vise à protéger les piétons, notamment les personnes âgées et les enfants, qui restent toujours prioritaires dans ces espaces.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Un cycliste tend le bras gauche. Que signifie ce geste ?",
    answers: ["Il signale un danger sur la route", "Il indique qu'il va tourner à gauche ou se déporter à gauche", "Il demande aux véhicules derrière lui de le dépasser", "Il signale qu'il va s'arrêter"],
    correct: [1],
    explanation: "Lorsqu'un cycliste tend le bras gauche horizontalement, il indique son intention de tourner à gauche ou de se déporter vers la gauche. Ce signal est l'équivalent du clignotant pour les véhicules motorisés. Le conducteur suivant doit ralentir et ne pas tenter de dépasser le cycliste à ce moment.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Quelles sont les obligations d'éclairage pour un EDPM circulant de nuit ?",
    answers: ["Feu avant blanc ou jaune", "Feu arrière rouge", "Catadioptres (réflecteurs) latéraux et arrière", "Gilet haute visibilité ou équipement rétroréfléchissant"],
    correct: [0, 1, 2, 3],
    multi: true,
    explanation: "De nuit ou par visibilité insuffisante, un EDPM doit être équipé d'un feu avant blanc ou jaune, d'un feu arrière rouge, de catadioptres (réflecteurs). Le conducteur doit en plus porter un gilet ou un équipement rétroréfléchissant. Ces obligations visent à assurer la visibilité de ces engins peu perceptibles dans l'obscurité.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Quelle est la durée maximale de stationnement en zone bleue avec un disque bleu ?",
    answers: ["30 minutes", "1 heure", "1 heure 30", "2 heures"],
    correct: [2],
    explanation: "En zone bleue, la durée maximale de stationnement est généralement de 1 heure 30 (sauf indication contraire sur la signalisation locale). Le disque doit être placé de manière visible derrière le pare-brise avec l'heure d'arrivée. Certaines communes peuvent fixer des durées différentes, indiquées sur les panneaux.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 1,
    text: "Un stationnement est dit 'gênant' lorsque le véhicule est garé :",
    answers: ["Sur un trottoir", "Sur un passage piéton", "En double file", "Sur une place réservée aux personnes handicapées"],
    correct: [0],
    explanation: "Le stationnement sur un trottoir est qualifié de gênant (contravention de 2ème classe, 35 €). Le stationnement sur un passage piéton ou en double file est qualifié de très gênant (4ème classe, 135 €). Le stationnement sur une place handicapée est également très gênant et passible de 135 € d'amende.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Quelles situations constituent un stationnement 'très gênant' passible d'une amende de 135 € ?",
    answers: ["Stationner sur un passage piéton", "Stationner sur une place réservée aux personnes handicapées", "Stationner en double file", "Stationner sur une piste cyclable"],
    correct: [0, 1, 2, 3],
    multi: true,
    explanation: "Toutes ces situations constituent un stationnement très gênant (contravention de 4ème classe à 135 €). S'y ajoutent le stationnement devant une bouche d'incendie, sur un emplacement de bus ou de taxi, et devant les entrées d'immeubles. Le stationnement très gênant peut aussi entraîner la mise en fourrière du véhicule.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Qu'est-ce qu'un stationnement dangereux ?",
    answers: ["Un stationnement qui gêne la visibilité des autres usagers (virage, sommet de côte, intersection)", "Un stationnement en zone de travaux", "Un stationnement de plus de 7 jours au même endroit", "Un stationnement sans serrer le frein à main"],
    correct: [0],
    explanation: "Le stationnement dangereux est celui qui met en danger les autres usagers en réduisant leur visibilité : à proximité d'un virage, au sommet d'une côte, près d'une intersection sans visibilité. C'est une contravention de 4ème classe (135 €) qui peut entraîner la mise en fourrière et un retrait de 3 points sur le permis.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Dans quels cas votre véhicule peut-il être mis en fourrière ?",
    answers: ["Stationnement gênant simple sur trottoir", "Stationnement très gênant (passage piéton, double file, place handicapée)", "Stationnement dangereux (virage, sommet de côte)", "Stationnement abusif (plus de 7 jours au même emplacement)"],
    correct: [1, 2, 3],
    multi: true,
    explanation: "La mise en fourrière est possible pour un stationnement très gênant, dangereux ou abusif (plus de 7 jours consécutifs au même endroit). Le stationnement gênant simple (trottoir) n'entraîne généralement qu'une amende de 35 €. Les frais de fourrière (enlèvement + garde) sont à la charge du propriétaire du véhicule.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 1,
    text: "Comment doit-on positionner le disque de stationnement en zone bleue ?",
    answers: ["Sur le tableau de bord, visible depuis l'extérieur", "Derrière le pare-brise, côté trottoir, avec l'heure d'arrivée arrondie à la demi-heure suivante", "Dans la boîte à gants avec le ticket de stationnement", "Accroché au rétroviseur intérieur"],
    correct: [1],
    explanation: "Le disque bleu doit être placé derrière le pare-brise, visible de l'extérieur côté trottoir. L'heure d'arrivée doit être réglée sur la prochaine demi-heure suivant l'heure réelle d'arrivée (par exemple, si vous arrivez à 9h10, indiquez 9h30). Le non-respect de ces règles peut entraîner une amende de 35 €.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Qu'est-ce que le stationnement résidentiel et quel est son avantage ?",
    answers: ["Un abonnement annuel permettant de stationner gratuitement dans tout Paris", "Un tarif préférentiel pour les résidents d'un quartier leur permettant de stationner à moindre coût dans leur zone", "Une place réservée devant son domicile avec un marquage au sol", "Un garage souterrain subventionné par la mairie"],
    correct: [1],
    explanation: "Le stationnement résidentiel est un dispositif proposé par de nombreuses communes permettant aux habitants d'un quartier de bénéficier d'un tarif réduit pour stationner dans leur zone de résidence. À Paris par exemple, le tarif résidentiel est nettement inférieur au tarif visiteur. Il nécessite une inscription auprès de la mairie avec justificatif de domicile.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 2,
    text: "Quelle est l'amende pour non-paiement ou dépassement de la durée au parcmètre (FPS) ?",
    answers: ["11 €", "17 à 75 € selon la ville (forfait post-stationnement)", "135 €", "35 €"],
    correct: [1],
    explanation: "Depuis 2018, l'ancien PV de stationnement a été remplacé par le FPS (Forfait de Post-Stationnement) dont le montant est fixé par chaque commune. Il varie de 17 € dans certaines petites villes à 75 € à Paris. Ce forfait est contestable via un recours administratif préalable (RAPO) auprès de la commune dans les 30 jours.",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Après combien de jours un stationnement au même endroit est-il considéré comme abusif ?",
    answers: ["3 jours", "5 jours", "7 jours", "30 jours"],
    correct: [2],
    explanation: "Un véhicule stationné au même emplacement pendant plus de 7 jours consécutifs est en situation de stationnement abusif. Le propriétaire s'expose alors à une contravention de 2ème classe (35 €) et à la mise en fourrière du véhicule. Cette règle s'applique même si le stationnement est par ailleurs régulier (zone autorisée, parcmètre payé).",
    schema: null,
    tags: []
  },
  {
    series: 'stationnement',
    difficulty: 1,
    text: "À quelle distance minimale d'une bouche d'incendie est-il interdit de stationner ?",
    answers: ["3 mètres", "5 mètres", "10 mètres", "Il est interdit de stationner devant, sans notion de distance précise"],
    correct: [1],
    explanation: "Il est interdit de stationner à moins de 5 mètres d'une bouche d'incendie. Cette distance permet aux pompiers d'y raccorder facilement leurs tuyaux en cas d'intervention. Le non-respect de cette règle constitue un stationnement très gênant (135 € d'amende) avec possibilité de mise en fourrière immédiate.",
    schema: null,
    tags: []
  },

  // ===== BATCH: BATCH4 =====
{
    series: 'ecoconduite',
    difficulty: 1,
    text: "Quelle est la principale conséquence de pneus sous-gonflés sur la conduite ?",
    answers: ["Une meilleure adhérence en virage", "Une augmentation de la consommation de carburant", "Une réduction du bruit de roulement", "Un freinage plus efficace"],
    correct: [1],
    explanation: "Des pneus sous-gonflés augmentent la résistance au roulement, ce qui entraîne une surconsommation de carburant pouvant atteindre 5 à 8 %. De plus, ils s'usent de manière irrégulière et réduisent la tenue de route du véhicule."
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Pour adopter une conduite éco-responsable, comment faut-il anticiper un feu rouge au loin ?",
    answers: ["Accélérer pour passer avant qu'il ne passe au rouge", "Maintenir sa vitesse et freiner au dernier moment", "Lever le pied de l'accélérateur et utiliser le frein moteur", "Passer au point mort pour économiser du carburant"],
    correct: [2],
    explanation: "L'anticipation consiste à lever le pied de l'accélérateur suffisamment tôt pour décélérer en douceur grâce au frein moteur. Cette technique réduit la consommation de carburant et l'usure des freins. Rouler au point mort est dangereux car on perd le contrôle moteur du véhicule."
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quels sont les avantages du régulateur de vitesse sur autoroute ?",
    answers: ["Il réduit la fatigue du conducteur", "Il maintient une vitesse constante et limite la surconsommation", "Il freine automatiquement en cas d'obstacle", "Il permet de rouler plus vite légalement"],
    correct: [0, 1],
    multi: true,
    explanation: "Le régulateur de vitesse maintient une allure constante, évitant les accélérations inutiles qui augmentent la consommation. Il réduit aussi la fatigue du pied droit sur de longs trajets. Attention : il ne freine pas automatiquement (sauf régulateur adaptatif) et ne modifie pas les limitations."
  },
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "De combien la climatisation peut-elle augmenter la consommation de carburant en ville ?",
    answers: ["1 à 2 %", "5 à 10 %", "10 à 25 %", "Plus de 40 %"],
    correct: [2],
    explanation: "En ville, la climatisation peut augmenter la consommation de 10 à 25 % car le compresseur sollicite le moteur davantage à bas régime. Sur route et autoroute, l'impact est moindre (environ 5 %) car le moteur tourne déjà à un régime plus élevé."
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Quelles affirmations sont correctes concernant le bonus-malus écologique en France en 2026 ?",
    answers: ["Le malus s'applique uniquement aux véhicules neufs", "Le bonus peut concerner l'achat d'un véhicule électrique neuf", "Le malus est calculé en fonction des émissions de CO₂", "Le bonus s'applique aussi aux véhicules diesel récents"],
    correct: [0, 1, 2],
    multi: true,
    explanation: "Le malus écologique s'applique lors de la première immatriculation d'un véhicule neuf et est calculé selon les émissions de CO₂. Le bonus encourage l'achat de véhicules à faibles émissions, notamment électriques. Les véhicules diesel, même récents, ne bénéficient pas du bonus écologique."
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Lors du contrôle technique 2026, quel défaut peut entraîner une contre-visite ?",
    answers: ["Un autocollant manquant sur la plaque d'immatriculation", "Un niveau d'huile légèrement bas", "Des émissions polluantes dépassant les seuils autorisés", "Un rétroviseur intérieur absent sur un véhicule avec rétroviseurs extérieurs"],
    correct: [2],
    explanation: "Le contrôle technique vérifie les émissions polluantes du véhicule. Si les seuils sont dépassés, c'est une défaillance majeure entraînant une contre-visite obligatoire sous 2 mois. Le niveau d'huile n'est pas un point de contrôle technique, il relève de l'entretien courant."
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quel est le rôle du liquide de refroidissement dans le moteur ?",
    answers: ["Lubrifier les pièces mécaniques du moteur", "Réguler la température du moteur et éviter la surchauffe", "Alimenter le système de climatisation", "Nettoyer les injecteurs"],
    correct: [1],
    explanation: "Le liquide de refroidissement circule dans le moteur pour absorber la chaleur et la dissiper via le radiateur. Un niveau insuffisant peut provoquer une surchauffe moteur et des dommages graves. Il faut le vérifier régulièrement, moteur froid, et ne jamais ouvrir le bouchon du vase d'expansion moteur chaud."
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Quelles affirmations sont vraies concernant les véhicules hybrides rechargeables ?",
    answers: ["Ils possèdent un moteur thermique et un moteur électrique", "Leur batterie se recharge uniquement au freinage", "Ils peuvent rouler en mode 100 % électrique sur une distance limitée", "Ils ne nécessitent jamais de carburant fossile"],
    correct: [0, 2],
    multi: true,
    explanation: "Un véhicule hybride rechargeable combine un moteur thermique et un moteur électrique. Sa batterie se recharge sur une prise ou une borne ET au freinage régénératif. Il peut rouler en mode tout-électrique sur 40 à 80 km environ, mais utilise le moteur thermique au-delà ou à haute vitesse."
  },
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "Quelle action simple permet de réduire la consommation de carburant avant de démarrer ?",
    answers: ["Faire chauffer le moteur 5 minutes à l'arrêt", "Retirer les charges inutiles du coffre et les barres de toit non utilisées", "Gonfler les pneus en dessous de la pression recommandée", "Rouler en première le plus longtemps possible"],
    correct: [1],
    explanation: "Chaque kilogramme supplémentaire augmente la consommation. Les barres de toit, même vides, créent une résistance aérodynamique importante (+10 à 15 % de consommation sur autoroute). Il est recommandé de les retirer quand elles ne sont pas utilisées."
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quelle est la différence entre le limiteur et le régulateur de vitesse ?",
    answers: ["Le limiteur maintient la vitesse, le régulateur la limite", "Le limiteur empêche de dépasser une vitesse choisie, le régulateur maintient une vitesse constante", "Le limiteur fonctionne en ville, le régulateur uniquement sur autoroute", "Il n'y a aucune différence, ce sont deux noms pour le même dispositif"],
    correct: [1],
    explanation: "Le limiteur de vitesse fixe un seuil maximal : le conducteur accélère normalement mais ne peut pas dépasser la vitesse programmée. Le régulateur de vitesse maintient automatiquement une vitesse constante sans action sur l'accélérateur. Les deux sont utilisables sur tout type de route."
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Quels sont les avantages du covoiturage reconnus par la réglementation française ?",
    answers: ["Accès aux voies réservées sur certaines autoroutes et voies rapides", "Réduction de l'empreinte carbone par passager", "Stationnement gratuit dans toutes les communes de France", "Possibilité de circuler dans les ZFE sans restriction"],
    correct: [0, 1],
    multi: true,
    explanation: "Le covoiturage permet d'utiliser les voies réservées signalées par un losange sur certains axes. Il divise l'empreinte carbone par le nombre d'occupants. Le stationnement gratuit n'est pas garanti partout, et les ZFE imposent des restrictions basées sur la vignette Crit'Air du véhicule, pas sur le nombre de passagers."
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "À quel moment faut-il passer au rapport supérieur pour une conduite économique ?",
    answers: ["Quand le moteur atteint la zone rouge du compte-tours", "Autour de 2 000 tr/min pour un moteur diesel et 2 500 tr/min pour un moteur essence", "Le plus tard possible pour avoir plus de puissance", "Uniquement quand le véhicule atteint 50 km/h"],
    correct: [1],
    explanation: "Pour une conduite économique, il est recommandé de passer le rapport supérieur vers 2 000 tr/min en diesel et 2 500 tr/min en essence. Cela permet au moteur de fonctionner dans sa plage de rendement optimal et réduit significativement la consommation de carburant."
  },
  {
    series: 'ecoconduite',
    difficulty: 1,
    text: "Quel est l'intérêt principal de vérifier régulièrement la pression des pneus ?",
    answers: ["Augmenter la vitesse maximale du véhicule", "Réduire la consommation et améliorer la sécurité", "Éviter de passer le contrôle technique", "Augmenter le confort uniquement"],
    correct: [1],
    explanation: "Des pneus correctement gonflés assurent une adhérence optimale, une distance de freinage réduite et une consommation maîtrisée. La pression doit être vérifiée au moins une fois par mois, à froid, en incluant la roue de secours."
  },
  {
    series: 'ecoconduite',
    difficulty: 3,
    text: "Concernant le véhicule électrique, quelles affirmations sont exactes ?",
    answers: ["Il n'émet aucun CO₂ à l'usage (échappement)", "Son bilan carbone total est nul sur l'ensemble de son cycle de vie", "Le freinage régénératif permet de récupérer de l'énergie", "Il est exempté de contrôle technique"],
    correct: [0, 2],
    multi: true,
    explanation: "Un véhicule électrique n'émet pas de CO₂ au roulage (zéro émission à l'échappement). Le freinage régénératif transforme l'énergie cinétique en énergie électrique stockée dans la batterie. Cependant, son bilan carbone total inclut la fabrication de la batterie, et il est soumis au contrôle technique comme tout véhicule."
  },
  {
    series: 'ecoconduite',
    difficulty: 2,
    text: "Quelle est la prime à la conversion en 2026 ?",
    answers: ["Une aide pour transformer un véhicule thermique en électrique", "Une aide financière pour remplacer un ancien véhicule polluant par un véhicule plus propre", "Un bonus automatique versé à tous les conducteurs", "Une réduction d'impôt pour les trajets en covoiturage"],
    correct: [1],
    explanation: "La prime à la conversion est une aide de l'État destinée aux propriétaires qui mettent à la casse un ancien véhicule polluant (Crit'Air 3 et plus) pour acheter un véhicule neuf ou d'occasion moins émetteur de CO₂. Son montant varie selon les revenus du foyer et le type de véhicule acheté."
  },
  {
    series: 'signalisation',
    difficulty: 3,
    text: "Vous rencontrez un panneau rond à fond blanc barré d'un trait noir oblique avec le chiffre 30. Que signifie-t-il ?",
    answers: ["Fin de la zone 30, la vitesse redevient celle de la voie", "Interdiction de rouler à plus de 30 km/h", "Fin de limitation à 30 km/h, vous devez rouler à 30 km/h minimum", "Vitesse conseillée de 30 km/h"],
    correct: [0],
    explanation: "Le panneau rond à fond blanc barré d'un trait noir avec le chiffre 30 indique la fin de la limitation de vitesse à 30 km/h. La vitesse applicable redevient celle de la voie (50 km/h en agglomération par défaut). À ne pas confondre avec le panneau de fin de zone 30 qui est rectangulaire."
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Un agent de police vous fait signe de passer alors que le feu est rouge. Que devez-vous faire ?",
    answers: ["Attendre que le feu passe au vert", "Obéir à l'agent et passer", "Klaxonner pour signaler le problème", "Attendre et prévenir le commissariat"],
    correct: [1],
    explanation: "Les indications d'un agent de la circulation prévalent sur la signalisation lumineuse et les panneaux. C'est la hiérarchie des signaux : agent > feux > panneaux > règles générales. Il faut donc obéir à l'agent même si le feu est rouge."
  },
  {
    series: 'vitesses',
    difficulty: 3,
    text: "Vous tractez une remorque dont le PTAC dépasse 750 kg. Quelle est votre vitesse maximale sur autoroute ?",
    answers: ["130 km/h comme les autres véhicules", "110 km/h", "90 km/h", "80 km/h"],
    correct: [2],
    explanation: "Un véhicule tractant une remorque dont le PTAC est supérieur à 750 kg est limité à 90 km/h sur autoroute (au lieu de 130 km/h). Cette limitation tient compte de l'allongement des distances de freinage et de la stabilité réduite de l'attelage à haute vitesse."
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Dans quelle situation ne devez-vous PAS mettre une victime en position latérale de sécurité (PLS) ?",
    answers: ["La victime est inconsciente et respire", "La victime est consciente et se plaint du dos", "La victime est inconsciente et a un traumatisme crânien suspecté", "La victime est inconsciente, respire, mais vous suspectez une lésion de la colonne vertébrale"],
    correct: [3],
    explanation: "La PLS ne doit PAS être effectuée si on suspecte un traumatisme de la colonne vertébrale (accident violent, chute de hauteur), car le mouvement pourrait aggraver une lésion médullaire. Dans ce cas, on maintient la tête en position neutre et on surveille la respiration sans bouger la victime, sauf si elle vomit."
  },
  {
    series: 'eclairages',
    difficulty: 2,
    text: "Dans quelle situation l'utilisation du feu de brouillard arrière est-elle interdite ?",
    answers: ["Par temps de pluie forte", "Quand la visibilité est inférieure à 50 mètres", "Quand la visibilité est supérieure à 50 mètres", "La nuit sur route non éclairée"],
    correct: [2],
    explanation: "Le feu de brouillard arrière ne doit être utilisé que lorsque la visibilité est réduite à moins de 50 mètres (brouillard épais, chute de neige dense). Au-delà de 50 mètres de visibilité, il éblouit les conducteurs qui suivent. Par pluie forte, la visibilité dépasse souvent 50 m, donc il est généralement interdit."
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Quelles manœuvres sont strictement interdites sur autoroute ?",
    answers: ["Faire marche arrière", "S'arrêter sur la bande d'arrêt d'urgence pour téléphoner", "Circuler à pied sur la chaussée", "Faire demi-tour"],
    correct: [0, 2, 3],
    multi: true,
    explanation: "Sur autoroute, il est formellement interdit de faire marche arrière, demi-tour, ou de circuler à pied sur la chaussée. La bande d'arrêt d'urgence est réservée aux situations d'urgence (panne, malaise) et non aux appels téléphoniques. Les piétons, cyclistes et véhicules lents y sont interdits."
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Quelle distance latérale minimale devez-vous respecter pour dépasser un cycliste hors agglomération ?",
    answers: ["50 centimètres", "1 mètre", "1,50 mètre", "2 mètres"],
    correct: [2],
    explanation: "Hors agglomération, la distance latérale minimale pour dépasser un cycliste est de 1,50 mètre. En agglomération, cette distance minimale est de 1 mètre. Ces distances sont des minimums : il est recommandé de laisser plus d'espace si la vitesse est élevée ou si les conditions sont défavorables."
  },
  {
    series: 'stationnement',
    difficulty: 3,
    text: "Quelle est la différence entre un arrêt et un stationnement ?",
    answers: ["L'arrêt dure moins de 5 minutes, le stationnement dure plus", "L'arrêt implique que le conducteur reste à proximité et peut repartir immédiatement, le stationnement non", "L'arrêt est toujours gratuit, le stationnement est payant", "Il n'y a pas de différence juridique"],
    correct: [1],
    explanation: "Juridiquement, un arrêt est l'immobilisation momentanée d'un véhicule dont le conducteur reste à proximité pour pouvoir le déplacer immédiatement si nécessaire. Le stationnement est toute immobilisation qui ne correspond pas à la définition de l'arrêt, quelle que soit la durée. Un arrêt peut durer plus de 5 minutes si le conducteur reste disponible."
  },
  {
    series: 'signalisation',
    difficulty: 2,
    text: "Vous voyez un panneau rectangulaire bleu avec le chiffre 30 barré. Que signifie-t-il ?",
    answers: ["Fin de la vitesse minimale de 30 km/h", "Fin de la zone 30", "Fin de limitation à 30 km/h", "Zone où la vitesse est limitée à 30 km/h"],
    correct: [1],
    explanation: "Le panneau rectangulaire (de zone) bleu/blanc avec le chiffre 30 barré signifie la fin de la zone 30. Dans une zone 30, toutes les rues sont limitées à 30 km/h et les piétons ont priorité. Le panneau rond barré indique la fin d'une simple limitation ponctuelle à 30 km/h. Cette distinction est un piège fréquent à l'examen."
  },
  {
    series: 'priorites',
    difficulty: 3,
    text: "Vous arrivez à une intersection où un feu tricolore est en panne (éteint). Un panneau cédez-le-passage est installé sous le feu. Que faites-vous ?",
    answers: ["La règle de la priorité à droite s'applique", "Vous cédez le passage conformément au panneau", "Vous vous arrêtez comme à un stop", "Vous passez car le feu éteint signifie voie libre"],
    correct: [1],
    explanation: "Quand un feu est éteint ou en panne, c'est la signalisation fixe (panneaux) qui reprend ses droits. S'il y a un panneau cédez-le-passage, vous devez laisser passer les véhicules prioritaires. En l'absence de tout panneau, la règle de la priorité à droite s'appliquerait."
  },
  {
    series: 'vitesses',
    difficulty: 2,
    text: "Sur un pont étroit signalé par un panneau de priorité, quelle précaution devez-vous prendre concernant votre vitesse ?",
    answers: ["Maintenir la vitesse de la route", "Accélérer pour libérer le pont rapidement", "Ralentir et adapter sa vitesse à l'étroitesse de la voie", "S'arrêter systématiquement avant le pont"],
    correct: [2],
    explanation: "Sur un pont étroit, il faut réduire sa vitesse car la chaussée rétrécie laisse peu de marge de manœuvre. Le vent latéral peut être plus fort sur un pont, et le croisement avec un autre véhicule nécessite une vitesse adaptée. Il n'y a pas d'obligation de s'arrêter, mais la prudence impose un net ralentissement."
  },
  {
    series: 'secours',
    difficulty: 3,
    text: "Dans quel cas est-il justifié de déplacer un blessé lors d'un accident de la route ?",
    answers: ["Quand la victime se plaint de douleurs au dos", "Quand il y a un risque imminent d'incendie ou d'explosion", "Quand on veut dégager la chaussée rapidement", "Quand la victime demande à être mise plus à l'aise"],
    correct: [1],
    explanation: "On ne déplace jamais un blessé sauf en cas de danger vital immédiat : risque d'incendie, d'explosion, de sur-accident inévitable, ou de noyade. Déplacer une victime ayant un traumatisme de la colonne vertébrale peut provoquer une paralysie définitive. Dans tous les autres cas, on protège, on alerte et on attend les secours."
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "De nuit, vous suivez un véhicule à 30 mètres sur une route nationale. Quels feux devez-vous utiliser ?",
    answers: ["Feux de route pour bien voir la chaussée", "Feux de croisement pour ne pas éblouir le conducteur précédent", "Feux de position uniquement", "Feux de brouillard avant pour mieux éclairer"],
    correct: [1],
    explanation: "Lorsque vous suivez un véhicule, vous devez utiliser les feux de croisement pour ne pas éblouir le conducteur via ses rétroviseurs. Les feux de route sont interdits à moins de 150 mètres d'un véhicule que l'on suit. Les feux de position seuls ne sont pas suffisants pour circuler de nuit hors agglomération."
  },
  {
    series: 'vulnerables',
    difficulty: 3,
    text: "Vous circulez en agglomération et souhaitez dépasser un cycliste, mais un véhicule arrive en face. Que devez-vous faire ?",
    answers: ["Dépasser rapidement en laissant moins d'1 mètre pour ne pas gêner le véhicule en face", "Rester derrière le cycliste et attendre que la voie soit libre pour dépasser avec 1 mètre minimum", "Klaxonner pour que le cycliste se range", "Monter sur le trottoir pour dépasser"],
    correct: [1],
    explanation: "En agglomération, il faut respecter un écart latéral minimum d'1 mètre avec le cycliste. Si la chaussée est trop étroite pour respecter cette distance en croisant un véhicule venant en face, vous devez patienter derrière le cycliste. Klaxonner pour faire se ranger un cycliste est interdit et dangereux."
  },
  {
    series: 'autoroute',
    difficulty: 2,
    text: "Vous avez raté votre sortie sur autoroute. Que devez-vous faire ?",
    answers: ["Faire marche arrière sur la bande d'arrêt d'urgence", "Faire demi-tour au prochain passage réservé aux services d'urgence", "Continuer jusqu'à la prochaine sortie", "Vous arrêter sur la bande d'arrêt d'urgence pour consulter votre GPS"],
    correct: [2],
    explanation: "Si vous ratez une sortie sur autoroute, vous devez impérativement continuer jusqu'à la prochaine sortie. La marche arrière et le demi-tour sont formellement interdits et extrêmement dangereux. La bande d'arrêt d'urgence n'est pas un lieu de stationnement pour consulter un GPS."
  }
];