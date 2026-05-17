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
];