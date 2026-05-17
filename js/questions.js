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
    schema: null,
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
    text: "Quels éléments permettent de distinguer une ligne de dissuasion (axiale) d'une ligne continue ?",
    answers: ["La ligne de dissuasion est jaune, la continue est blanche", "La ligne de dissuasion a des traits plus longs que les intervalles mais reste franchissable, la continue est infranchissable", "Il n'y a aucune différence, les deux sont infranchissables", "La ligne de dissuasion est doublée, la continue est simple"],
    correct: [1],
    explanation: "La ligne de dissuasion (type T3 : trait de 3 m, intervalle de 1,33 m) a des traits plus longs que ses intervalles, ce qui la distingue visuellement d'une ligne discontinue classique. Contrairement à la ligne continue, elle est franchissable mais le dépassement y est fortement déconseillé car la visibilité est insuffisante.",
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
    schema: null,
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
    schema: null,
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
    schema: null,
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
    schema: null,
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
    schema: null,
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
    text: "Un véhicule de pompiers arrive derrière vous avec gyrophare et sirène dans un embouteillage. Que devez-vous faire ?",
    answers: ["Accélérer pour libérer la voie", "Vous ranger au maximum sur la droite, voire monter sur le trottoir si nécessaire, pour créer un couloir de passage", "Vous arrêter immédiatement sur place", "Ignorer car vous êtes dans un embouteillage"],
    correct: [1],
    explanation: "Face à un véhicule prioritaire en intervention (gyrophare ET sirène), vous devez faciliter son passage par tous les moyens possibles. En embouteillage, cela peut impliquer de se décaler sur la droite pour créer un couloir. Monter légèrement sur un trottoir est toléré dans ce cas précis.",
    schema: null,
    tags: []
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
    text: "À 90 km/h, quelle est approximativement la distance de freinage sur route sèche ?",
    answers: ["30 mètres", "55 mètres", "75 mètres", "100 mètres"],
    correct: [1],
    explanation: "À 90 km/h, la distance de freinage (réaction + freinage) est d'environ 55 à 60 mètres sur route sèche avec une voiture moderne. En route mouillée, comptez 85 à 90 mètres. Le temps de réaction moyen est de 1 seconde. Retenir la règle : distance = (vitesse ÷ 10)² ÷ 2.",
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
      "Amende de 135 € et 3 points retirés",
      "Amende de 750 € et 6 points retirés",
      "Suspension immédiate du permis",
      "Amende de 45 € et avertissement"
    ],
    correct: [1],
    explanation: "Entre 0,5 et 0,8 g/L de sang, c'est une contravention de 4ème classe : amende forfaitaire de 135 € (minorée à 90 €, majorée à 375 €) et retrait de 6 points. Le permis peut être suspendu jusqu'à 3 ans. Au-delà de 0,8 g/L, c'est un délit pénal (2 ans d'emprisonnement, 4 500 € d'amende).",
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
    tags: ['2026'],
    multi: true
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
    schema: null,
    tags: []
  },

  // ===== ÉCLAIRAGES =====
  {
    series: 'eclairages',
    difficulty: 1,
    text: "Quand devez-vous allumer vos feux de croisement (codes) de jour ?",
    answers: [
      "Uniquement la nuit",
      "En cas de mauvaise visibilité et lorsque la réglementation l'impose (tunnel, pluie intense...)",
      "Uniquement dans les tunnels",
      "Jamais de jour, les codes brûlent les ampoules"
    ],
    correct: [1],
    explanation: "Les feux de croisement sont obligatoires : la nuit, dans les tunnels, en cas de visibilité inférieure à 200 mètres (brouillard, neige, forte pluie). De nombreux pays (et constructeurs) recommandent les feux allumés en permanence. En France, c'est obligatoire dans les situations précitées mais recommandé en toutes circonstances.",
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
    schema: null,
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
    schema: null,
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
      "50 mètres (2 secondes)",
      "130 mètres correspondant à 3 secondes de distance",
      "100 mètres",
      "2 tirets de marquage"
    ],
    correct: [1],
    explanation: "La règle officielle est une distance de sécurité de 2 secondes minimum (3 secondes recommandés). À 130 km/h, 2 secondes = environ 72 mètres et 3 secondes ≈ 108 mètres. Les marquages sur autoroute (tirets espacés de 33m avec intervalle de 100m) permettent d'évaluer la distance. En cas de pluie, doublez cette distance.",
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
    schema: null,
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
    schema: null,
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
    schema: null,
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
    schema: null,
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
    answers: ["1,2", "1,5", "2", "3"],
    correct: [1],
    explanation: "Sur route mouillée, la distance de freinage est multipliée par environ 1,5 à 2. On retient généralement le coefficient 1,5 pour une chaussée mouillée standard. Cela signifie qu'à 90 km/h, la distance de freinage passe d'environ 40 m à 60 m (freinage seul).",
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
    difficulty: 2,
    text: "Quelles sont les sanctions encourues pour conduite sous l'emprise de cannabis (délit) ?",
    answers: ["135 € d'amende", "2 ans de prison et 4 500 € d'amende", "Amende forfaitaire de 750 €", "Simple rappel à la loi"],
    correct: [1],
    explanation: "La conduite après usage de stupéfiants (cannabis, cocaïne, etc.) est un délit puni de 2 ans d'emprisonnement et 4 500 € d'amende, avec retrait de 6 points et suspension/annulation du permis. Les peines sont identiques quel que soit le stupéfiant.",
    schema: null,
    tags: []
  },
  {
    series: 'alcool',
    difficulty: 2,
    text: "Que risque un conducteur contrôlé positif à la fois à l'alcool ET au cannabis ?",
    answers: ["Les deux sanctions s'additionnent", "3 ans de prison et 9 000 € d'amende", "Seule la sanction la plus grave s'applique", "6 mois de prison et 1 500 € d'amende"],
    correct: [1],
    explanation: "La combinaison alcool + stupéfiants est une circonstance aggravante. Les peines maximales passent à 3 ans d'emprisonnement et 9 000 € d'amende (au lieu de 2 ans et 4 500 € pour l'un ou l'autre seul). Le retrait de 6 points s'applique également.",
    schema: null,
    tags: ['2026']
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
      "Retrait de 6 points, mais il garde son permis car il a 8 points",
      "Retrait de 6 points, il lui reste 2 points sur 8",
      "Retrait de 6 points = permis invalidé (solde à 0)",
      "Aucun retrait en attente du test sanguin"
    ],
    correct: [1],
    explanation: "Un permis probatoire démarre à 6 points et gagne 2 points par an (3 avec AAC). À 18 mois sans AAC, le conducteur a 8 points. Un retrait de 6 points le ramène à 2 points. Le permis n'est pas invalidé mais quasi vidé. Une lettre 48M sera envoyée l'obligeant à un stage de récupération de points.",
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
    schema: null,
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
    difficulty: 3,
    text: "Quelles situations constituent un stationnement dangereux ?",
    answers: ["Stationner en double file", "Stationner près d'un sommet de côte ou d'un virage sans visibilité", "Stationner sur un passage piéton", "Stationner devant une entrée de garage"],
    correct: [1],
    explanation: "Le stationnement dangereux (article R417-9) concerne les situations où le véhicule stationné met en danger les autres usagers par défaut de visibilité : près d'un sommet de côte, dans un virage, ou à proximité d'une intersection sans visibilité. Il est puni d'une amende de 135 € (4e classe).",
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
    schema: null,
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
    text: "En 2026, quels véhicules peuvent être interdits de circulation dans une ZFE-m ?",
    answers: ["Uniquement les véhicules diesel", "Les véhicules non classés et Crit'Air 5, voire Crit'Air 4 ou 3 selon les métropoles", "Tous les véhicules thermiques", "Uniquement les véhicules de plus de 20 ans"],
    correct: [1],
    explanation: "En 2026, les restrictions varient selon les métropoles. Les véhicules non classés et Crit'Air 5 sont généralement interdits. Certaines ZFE-m excluent aussi les Crit'Air 4 ou 3. L'objectif est d'améliorer la qualité de l'air. La liste des ZFE-m s'étend progressivement aux agglomérations de plus de 150 000 habitants.",
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
    difficulty: 1,
    text: "Quels véhicules sont interdits de circuler sur autoroute ?",
    answers: [
      "Les véhicules ne pouvant pas dépasser 80 km/h",
      "Les véhicules de moins de 5 CV fiscaux",
      "Les véhicules diesel de plus de 10 ans",
      "Les véhicules sans climatisation"
    ],
    correct: [0],
    explanation: "L'accès à l'autoroute est interdit aux véhicules ou ensembles de véhicules ne pouvant pas atteindre au moins 80 km/h sur route plate. Cela inclut les cyclomoteurs, vélos, piétons, cavaliers et certains engins agricoles.",
    schema: null,
    tags: []
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
    schema: null,
    tags: []
  },
  {
    series: 'autoroute',
    difficulty: 1,
    text: "Lors de l'insertion sur autoroute, à quel moment devez-vous accélérer ?",
    answers: [
      "Sur la voie d'accélération, pour atteindre la vitesse du flux avant de s'insérer",
      "Uniquement une fois inséré dans la circulation",
      "Dès le début de la bretelle d'accès",
      "Jamais, il faut attendre un créneau à l'arrêt"
    ],
    correct: [0],
    explanation: "La voie d'accélération sert à atteindre progressivement la vitesse du flux de circulation sur l'autoroute. Vous devez accélérer dans cette voie pour vous insérer à la même vitesse que les autres usagers, en contrôlant votre angle mort et en utilisant le clignotant.",
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
    schema: null,
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
    difficulty: 1,
    text: "En agglomération, quelle distance latérale minimale devez-vous laisser en dépassant un cycliste ?",
    answers: ["0,5 mètre", "1 mètre", "1,5 mètre", "2 mètres"],
    correct: [1],
    explanation: "En agglomération, la distance latérale minimale pour dépasser un cycliste est de 1 mètre. Hors agglomération, cette distance passe à 1,5 mètre. Si l'espace est insuffisant pour respecter cette distance, vous devez patienter derrière le cycliste.",
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
    difficulty: 1,
    text: "Un bus de transport en commun quitte son arrêt en agglomération avec son clignotant gauche activé. Que devez-vous faire ?",
    answers: [
      "Le dépasser rapidement avant qu'il ne s'insère",
      "Lui céder le passage car il est prioritaire en sortie d'arrêt en agglomération",
      "Klaxonner pour signaler votre présence",
      "Accélérer car il doit vous laisser passer"
    ],
    correct: [1],
    explanation: "En agglomération, les bus de transport en commun bénéficient d'une priorité lorsqu'ils quittent leur arrêt en signalant leur intention par le clignotant. Les autres usagers doivent leur céder le passage et ralentir pour leur permettre de se réinsérer dans le flux de circulation.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 1,
    text: "Vous approchez d'une école à l'heure de sortie des classes. Que devez-vous faire ?",
    answers: [
      "Rouler à vitesse normale si le feu est vert",
      "Ralentir fortement, être prêt à s'arrêter car des enfants peuvent surgir de manière imprévisible",
      "Klaxonner pour signaler votre présence aux enfants",
      "Accélérer pour passer avant la sortie des élèves"
    ],
    correct: [1],
    explanation: "Les abords des écoles sont des zones à risque majeur. Les enfants ont un comportement imprévisible (traversées soudaines, jeux). Vous devez réduire votre vitesse, surveiller les deux côtés de la route et être prêt à freiner à tout instant, même si aucun panneau de zone 30 n'est affiché.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 1,
    text: "Un piéton aveugle (canne blanche) s'apprête à traverser. Quelle est votre obligation ?",
    answers: [
      "Klaxonner pour l'informer de votre présence",
      "Vous arrêter obligatoirement pour le laisser traverser en toute sécurité",
      "Ralentir et le contourner",
      "Continuer si vous avez la priorité au feu vert"
    ],
    correct: [1],
    explanation: "Les piétons aveugles ou malvoyants (identifiés par leur canne blanche ou leur chien guide) bénéficient d'une priorité absolue. Tout conducteur doit s'arrêter pour leur permettre de traverser, quel que soit l'endroit et même en l'absence de passage piéton. Ne jamais klaxonner car cela peut les désorienter.",
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
    text: "Avant d'ouvrir votre portière en stationnement, quelle vérification est obligatoire ?",
    answers: [
      "Vérifier dans le rétroviseur intérieur uniquement",
      "Contrôler le rétroviseur ET l'angle mort en tournant la tête pour vérifier l'absence de cycliste ou piéton",
      "Ouvrir lentement la portière, cela suffit",
      "Klaxonner avant d'ouvrir"
    ],
    correct: [1],
    explanation: "L'ouverture de portière sans vérification est une cause fréquente d'accidents graves avec les cyclistes et deux-roues. Vous devez vérifier le rétroviseur extérieur ET tourner la tête pour contrôler l'angle mort. La technique hollandaise (ouvrir avec la main opposée) force naturellement à se retourner.",
    schema: null,
    tags: []
  },
  {
    series: 'vulnerables',
    difficulty: 2,
    text: "Vous doublez un groupe de cavaliers sur une route de campagne. Que devez-vous faire ?",
    answers: [
      "Les dépasser à vitesse normale car ils sont sur le bas-côté",
      "Ralentir fortement, laisser au minimum 1,5 m et ne pas klaxonner pour ne pas effrayer les chevaux",
      "Klaxonner pour signaler votre approche puis dépasser rapidement",
      "Les dépasser à 1 mètre de distance comme pour un cycliste en ville"
    ],
    correct: [1],
    explanation: "Les cavaliers sont des usagers vulnérables. Vous devez ralentir considérablement, laisser au moins 1,5 mètre de distance latérale (comme hors agglomération pour les cyclistes), et surtout ne pas klaxonner ni accélérer brusquement, car les chevaux peuvent être effrayés et provoquer un accident grave.",
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
    text: "Un conducteur doit avoir un gilet de haute visibilité. Quand doit-il l'enfiler ?",
    answers: ["Après avoir posé le triangle", "Avant de sortir du véhicule", "Uniquement de nuit", "Uniquement sur autoroute"],
    correct: [1],
    explanation: "Le gilet doit être enfilé AVANT de sortir du véhicule, y compris de jour. Il doit être à portée de main (pas dans le coffre). Son absence est sanctionnée de 135 €.",
    schema: null,
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
    difficulty: 3,
    text: "Quels éléments sont obligatoires dans tout véhicule en France ?",
    answers: ["Gilet jaune, triangle, éthylotest, trousse de secours", "Gilet jaune et triangle de présignalisation uniquement", "Gilet jaune, triangle, extincteur", "Gilet jaune, triangle, éthylotest"],
    correct: [1],
    explanation: "Seuls le gilet haute visibilité (norme EN 20471) et le triangle de présignalisation sont strictement obligatoires. L'éthylotest n'est plus sanctionné en cas d'absence depuis 2020.",
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
    schema: null,
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
    difficulty: 3,
    text: "Quels équipements d'éclairage sont obligatoires pour les trottinettes électriques de nuit ?",
    answers: ["Un simple catadioptre arrière", "Feu avant blanc, feu arrière rouge, catadioptres latéraux et arrière, gilet haute visibilité", "Uniquement un gilet réfléchissant", "Les mêmes feux qu'un vélo sans gilet"],
    correct: [1],
    explanation: "Les trottinettes doivent avoir feu avant blanc, feu arrière rouge, catadioptres latéraux et arrière. De nuit, le gilet haute visibilité est obligatoire hors agglomération et recommandé en ville.",
    schema: null,
    tags: ['2026']
  },
  {
    series: 'eclairages',
    difficulty: 3,
    text: "Quels défauts d'éclairage entraînent une contre-visite au contrôle technique ?",
    answers: ["Uniquement un phare grillé", "Feu de croisement défaillant, mauvais réglage, feu stop non fonctionnel", "Uniquement si les deux phares sont grillés", "Aucun, l'éclairage est juste vérifié visuellement"],
    correct: [1],
    explanation: "Entraînent une contre-visite : feu de croisement défaillant, mauvais réglage des phares, feu stop ou arrière non fonctionnel, clignotant défaillant. Le véhicule doit repasser dans les 2 mois.",
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
    difficulty: 3,
    text: "Quelle est l'obligation d'éclairage pour un vélo circulant de nuit ?",
    answers: ["Aucune en ville grâce à l'éclairage public", "Feu avant jaune ou blanc, feu arrière rouge, catadioptres sur roues et pédales", "Un simple gilet réfléchissant", "Uniquement un catadioptre arrière rouge"],
    correct: [1],
    explanation: "Un vélo de nuit doit avoir : feu avant jaune ou blanc, feu arrière rouge, catadioptres orange sur les roues et pédales, catadioptre arrière rouge. Le gilet est obligatoire hors agglomération.",
    schema: null,
    tags: ['2026']
  },
];