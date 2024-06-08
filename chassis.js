const chassis = [
    {
        name: "Docking Ship",
        id: 0,
        effect1: "<em><strong>Vaisseau-Mère :</strong></em> MISE EN PLACE: vous <mark>DEVEZ</mark> avoir un vaisseau arrimé avec vous avec la capacité <em>Co-Pilot</em>. Considérez les boucliers de votre vaisseau arrimé comme les vôtres.",
    },
    {
        name: "Copilot",
        id: 1,
        effect1: "<em><strong>Copilote :</strong></em> Tant que vous êtes arrimé, votre Vaisseau-Mère considère aussi votre capacité de pilote comme étant le sien."
    },
    {
        name: "Sensor Blindspot",
        id: 2,
        effect1: "<em><strong>Angle-Mort des Senseurs :</strong></em> Tant que vous effectuez une attaque principale à portée 0-1, lancez 1 dé d'attaque en moins. Tant que vous défendez à portée 1, lancez 1 dé de défense en moins"

    },
    {
        name: "Servomotor S-Foils",
        id: 3,
        effect1: "<em><strong>Servomoteurs S-Foils :</strong></em> Avant de vous activez, vous pouvez retourner cette carte",
        effect2: ""
    },
    {
        name: "Pivot Wing",
        id: 4,
        effect1: "<em><strong>Aile Pivot (Baissée):</strong></em> ",
        effect2: "<em><strong>Aile Pivot (Relevée):</strong></em> "
    },
    {
        name: "Vectored Thrusters",
        id: 5,
        effect1: "<em><strong>Propulseurs Vectorisés :</strong></em> "
    },
    {
        name: "Stabilized S-Foils",
        id: 6,
        effect1: "<em><strong>S-Foils Stabilisés :</strong></em> ",
        effect2: "<em><strong>S-Foils Stabilisés :</strong></em> "
    },
    {
        name: "Advanced Targetting Computer",
        id: 7,
        effect1: "<em><strong>Ordinateur de Visée Avancé:</strong></em> Tant que vous effectuez une attaque principale contre un défenseur que vous avez vérouillé, lancez 1 dé d'attaque supplémentaire et changez 1 résultat #hit# en un résultat #crit#"
    },
    {
        name: "Nimble Bomber",
        id: 8,
        effect1: "<em><strong>Bombardier Agile :</strong></em> Si vous devez utiliser un gabarit #straight# pour larguer un engin, vous pouvez utiliser un gabarit #Lbank# ou #Rbank# de même vitesse à la place."
    },
    {
       name: "Swivel Wing",
    id: 9,   
    effect1: "<em><strong>Aile Basculante (Baissée):</strong></em> Après avoir executé une manoeuvre [0#stop#], vous pouvez pivoter votre vaisseau de 90° ou 180°. Dans ce cas vous <strong>devez</strong> retourner cette carte.",
       effect2: "<em><strong>Aile Basculante (Relevée):</strong></em> Tant que vous défendez, lancez 1 dé de défense en moins. Après avoir entièrement executé une manoeuvre non-stationnaire [0#stop#], vous pouvez retourner cette carte." 
    },
    {
        name: "Autothrusters",
        id: 10,
        effect1: "<em><strong>Autopropulseurs :</strong></em> Après avoir effectué une action, vous pouvez effectuer une action #BR# rouge ou #BO# rouge."
    },
    {
        name: "Full Throttle",
        id: 11,
        effect1: "<em><strong>Plein Gaz :</strong></em> Après avoir entièrement executé une manoeuvre à vitesse 3-5, vous pouvez gagner un jeton évasion."
    },
    {
        name: "Controlled Ailerons",
        id: 12,
        effect1: "<em><strong>Ailerons Contrôlables :</strong></em> Avant de révéler votre cadran, si vous n'êtes pas stressé, vous pouvez accélérer."
    },
    {
        name: "Rotating Cannons",
        id: 13,
        effect1: "<em><strong>Canons Rotatifs :</strong></em> Vous pouvez pivoter votre indicateur #tur# uniquement, vers votre #Farc# ou #Barc#. Vous <strong>devez</strong> considérer le prérequis #Farc# de cos améliorations #can# équipées comme étant #tur#."
    },
    {
        name: "Adaptative Ailerons",
        id: 14,
        effect1: "<em><strong>Ailerons Adaptables :</strong></em> Avant de révéler votre cadran, si vous n'êtes pas stressé, vous <strong>devez</strong> accélérer."
    },
    {
        name: "Rigged Energy Cells",
        id: 15,
        effect1: "<em><strong>Cellules Énergétiques Bidouillées :</strong></em> Pendant la phase de système, si vous n’êtes pas arrimé, perdez 1 #ch# . À la fin de la phase d’activation, vous êtes détruit si vous avez 0 #ch#. Avant de retirer votre figurine, chaque vaisseau à porté 0–1 subit 1 dégât #crit#"
    },








]