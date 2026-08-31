/* ===========================================================
   LibroAmore — navegación interna y datos de ejemplo
   =========================================================== */

// ============================================
//  VERIFICACIÓN DE ENTORNO (Telegram vs Web)
// ============================================

function checkTelegramEnvironment() {
    const tg = window.Telegram?.WebApp;
    const isTelegram = !!(tg && tg.initDataUnsafe && tg.initDataUnsafe.user);
    
    if (!isTelegram) {
        const appShell = document.getElementById('appShell');
        if (appShell) appShell.style.display = 'none';
        const blockedMsg = document.getElementById('blocked-message');
        if (blockedMsg) {
            blockedMsg.style.display = 'flex';
        }
        document.title = 'Solo en Telegram';
        return false;
    }
    
    const appShell = document.getElementById('appShell');
    if (appShell) appShell.style.display = 'block';
    return true;
}

// ============================================
//  DATOS DE EJEMPLO
// ============================================

const tg = window.Telegram?.WebApp;

/* ---------- Libros disponibles ---------- */
const BOOKS = [
  {
    id: "Banging My Birthday Bear",
    title: "Banging My Birthday Bear",
    author: "Holly Wilde",
    series: "Sentient Celebrations",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Objeto Consciente"],
    synopsis: "Pasar su trigésimo cumpleaños con amigas escondidas en las montañas es exactamente lo que quiere. Pero tener una aventura cruda y apasionada con un osito de peluche de tamaño real es exactamente lo que necesita. ¡Es el Dirty Thirty de Mia y está lista para divertirse! Cuando sus amigas la sorprenden con un osito de peluche gigante, con una anatomía realista, su día especial se convierte en algo de ensueño. Y me refiero a rellena, que es exactamente como pasa la noche con su sorpresa de cumpleaños, llena hasta el borde y lista para explotar. ¿Estás lista para enamorarte de Bear?",
    coverUrl: "https://m.media-amazon.com/images/I/81R8l1TBpWL._SY425_.jpg",
    hue: 340
  },
  {
    id: "Pounded By Poseidon",
    title: "Pounded By Poseidon",
    author: "Thea Masen - Holly Wilde",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Objeto Consciente"],
    synopsis: "Se suponía que ganar el concurso de esculturas de arena de Mountcastle Cove sería el boleto de Isla Moore para superar las acciones destructivas de su padre en el evento del año pasado. Cuando pierde y su impresionante escultura de arena es alcanzada por un rayo, cree que sus esperanzas se han desvanecido como la marea. Pero entonces conoce a un nuevo papi que quiere cuidarla y hacerla suya. Todo lo que necesita hacer es confiar en él y dejar todo bajo su control. Es más fácil decirlo que hacerlo. Papi viene por ti.",
    coverUrl: "https://m.media-amazon.com/images/I/81NbDUhl0nL._SY425_.jpg",
    hue: 25
  },
  {
    id: "Say My Name",
    title: "Say My Name",
    author: "CJ Raine",
    series: "The Ode To The Peculiar",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Fantasía oscura", "Misterio"],
    synopsis: "Un trato con una demonio es su único camino hacia la libertad, pero ¿cuál será el precio?",
    coverUrl: "https://m.media-amazon.com/images/I/81qF3fLWVCL._SY425_.jpg",
    hue: 260
  },
  {
    id: "MONSTROUS",
    title: "MONSTROUS",
    author: "Cora Raven",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Histórico", "Romance", "Retelling"],
    synopsis: "En la Inglaterra victoriana de la década de 1840, la botánica Camellia Reed acepta un puesto como asistente de investigación del reservado Dr. Nicholas Ambrose, un brillante pero atormentado médico que estudia la pérdida de memoria mediante peligrosos experimentos con plantas. Desesperada por recuperar sus propios recuerdos perdidos después de un misterioso colapso que dejó vacíos en su pasado, Camellia se siente atraída tanto por la revolucionaria investigación del doctor como por el propio hombre. Pero la Casa Ambrose oculta oscuros secretos: un sirviente vegetal llamado Hawthorne, un invernadero lleno de especímenes que brillan en la oscuridad y el fantasma de la difunta esposa del doctor, cuya presencia impregna cada rincón de la casa. Sin embargo, Camellia también guarda sus propios secretos y jamás se quita la cinta de terciopelo verde que rodea su garganta. ¿Qué oculta?",
    coverUrl: "https://m.media-amazon.com/images/I/417DqRE5fmL._SY445_SX342_QL70_FMwebp_.jpg",
    hue: 200
  },
  {
    id: "Fervor",
    title: "Fervor",
    author: "Meg Smitherman",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Dark", "Romance", "Fantasía"],
    synopsis: "La ha llamado durante toda su vida, pero ella nunca pudo responderle… Midonia, una transportista interplanetaria independiente, se encuentra en una situación delicada después de un accidente fatal ocurrido durante uno de sus trabajos. Por eso, no protesta cuando le encomiendan la tediosa tarea de llevar a la devota hermana Irena a un remoto planeta en los confines del espacio, donde una pequeña colonia religiosa venera a una extraña deidad llamada Angustia. Hasta ahora. Cuando una llamarada solar deja su nave en tierra, Midonia se encuentra atrapada junto a las hermanas de aquella secta. Y, para empeorar las cosas, él se le aparece durante la noche, con aquella voz familiar más fuerte que nunca. Invade su mente con su hambre, despertando en ella una obsesión voraz de la que será casi imposible escapar.",
    coverUrl: "https://m.media-amazon.com/images/I/41egFhRk3UL._SY445_SX342_FMwebp_.jpg",
    hue: 150
  },
  {
    id: "Hopeless Necromantic",
    title: "Hopeless Necromantic",
    author: "Shiloh Briar",
    series: "The Catseye Chronicles",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Fantasía", "Aventura", "Romance"],
    synopsis: "ELLA DESATA EL INFIERNO. ÉL LEVANTA A LOS MUERTOS. ¿QUÉ PODRÍA SALIR MAL? Cuando la nueva recluta Helspira acepta la misión suicida que ningún otro soldado quiere, la vida —y la muerte— empiezan a complicarse un poco. Helspira deberá escoltar a Sikras, un necromante frustrantemente guapo con el poder de levantar a los muertos, mientras él intenta llevar a cabo una misión que ya ha fracasado dos veces: detener a un ejército de no muertos en las fronteras del reino. Nadie cree que vaya a lograrlo. Ni siquiera Sikras. Pero, cuanto más tiempo pasan juntos, más fácil les resulta imaginar un futuro mejor. A medida que salen a la luz los secretos y ambos estrechan su vínculo —y el esquelético compañero de Sikras, Benjamin, intente desesperadamente no ser un tercero en discordia—, ¿serán suficientes los sentimientos que nacen entre Sikras y Helspira para superar el peligro cada vez mayor? ALZA UNA COPA. LEVANTA A LOS MUERTOS. SOLO NO ALBERGUES DEMASIADAS ESPERANZAS.",
    coverUrl: "https://m.media-amazon.com/images/I/91t8wUTqFNL._SL1500_.jpg",
    hue: 15
  },
  {
    id: "Handle Me",
    title: "Handle Me",
    author: "Unfortunate Reads",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["MM", "Hockey", "Objeto Consciente"],
    synopsis: "Jace Masterson es un dios. Hábil con las manos y con una boca deliciosamente obscena, es uno de los hombres más codiciados de Toronto. Y es mío. Si pudiera sonreír, lo haría. Amo estar aquí. Amo a Jace. Pero, sobre todo, amo la forma en que Jace me trata.",
    coverUrl: "https://m.media-amazon.com/images/I/717qK5s0vCL._SL1500_.jpg",
    hue: 15
  },
  {
    id: "Spackled",
    title: "Spackled",
    author: "Thea Masen - Nicole Parker - Clover Holloway",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Omegaverse", "Betas", "Clinica de celo"],
    synopsis: "Asher trabaja en la clínica de celos por motivos que van más allá de un simple sueldo, pero algunos días pueden ser realmente duros. Omegas en celo, alfas posesivos y muchísimo lubricante. Menos mal que el atractivo contratista nuevo aparece para levantarle el ánimo... y alguna que otra cosa más. Emmett no tiene ninguna ilusión por su nuevo contrato para remodelar una antigua clínica de celo en el centro de la ciudad, hasta que ve al adorable beta de recepción. Es lujuria a primera vista, y de repente ambos hombres empiezan a entender a los pacientes que no pueden quitarse las manos el uno del otro. Después de un alfa fuera de control, un tranquilizante y una visita al hospital, Emmett y Asher finalmente se rinden a lo que sienten y descubren lo bien que pueden estar juntos.",
    coverUrl: "https://m.media-amazon.com/images/I/81NzAYTHJlL._SL1500_.jpg",
    hue: 15
  },
  {
    id: "My Date With A Rubber Duckie",
    title: "My Date With A Rubber Duckie",
    author: "Thea Masen",
    series: "The Sentient Object Holiday",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Objeto Consciente", "Patito de goma"],
    synopsis: "La hora del baño acaba de volverse mucho más divertida. Cuando Anita compra un patito de goma igual al que tenía de niña, cree que su terrible día está a punto de mejorar. No hay mejor confidente que un patito de goma, y ahora que tiene uno, está decidida a resolver todos los problemas de su vida con un largo baño. Pero este patito de goma no es lo que parece…",
    coverUrl: "https://m.media-amazon.com/images/I/712GotZnc5L._SL1500_.jpg",
    hue: 15
  },
  {
    id: "Step Brother Bear",
    title: "Step Brother Bear",
    author: "G.M. Fairy",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Cambiaforma", "Hermanastros", "Romance prohibido"],
    synopsis: "Su hermanastro es un animal, y ella es su presa. Isabella siempre ha odiado a su rebelde hermanastro, Derek. Por suerte para ella, él pasó la mayor parte de su solitaria infancia y adolescencia en un internado para niños problemáticos. Ahora que es adulta y ha regresado a la casa donde creció, odia aún más al hombre tatuado y malhumorado en el que se ha convertido. Principalmente porque está justo en la habitación de al lado, decidido a hacerle la vida imposible y comportarse como un auténtico animal. La situación empeora aún más cuando su madre y su padrastro se marchan de la ciudad y le encargan cuidar del animal y de sus recién adquiridas heridas de bala. La cercanía entre ellos revela secretos acalorados con consecuencias monstruosas. Hay más en Derek de lo que parece a simple vista, dejando a Isabella excavar en sentimientos aterradores y confusos. ¿Podrá ver más allá de las garras, o decidirá que son simplemente especies completamente diferentes? ",
    coverUrl: "https://m.media-amazon.com/images/I/81fDa8WnlEL._SL1500_.jpg",
    hue: 15
  },
  {
    id: "Shower Head",
    title: "Shower Head",
    author: "Ames B. Winterbourne",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Objeto Consciente"],
    synopsis: "Lydia adora una buena ducha. Pero el cabezal de su ducha ya casi no tiene presión de agua. Cuando un cabezal de ducha con el rostro de un hombre absurdamente atractivo aparece en la puerta de su casa, sabe que no es para ella, pero no puede evitar relacionarlo con su problema en la ducha. Solo que este cabezal de ducha no es lo que parece. Es un cabezal de ducha consciente, dispuesto a darle a Lydia la mejor ducha de su vida. Solo para lectores mayores de 18 años. Esta es una historia corta y erótica sobre un objeto consciente.",
    coverUrl: "https://m.media-amazon.com/images/I/812LK39vQ+L._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Fully Charged",
    title: "Fully Charged",
    author: "Nicole Parker - Unfortunate Reads",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Conejo rosa mitico"],
    synopsis: "Jewel es una madre recién soltera que solo quiere relajarse en su escaso tiempo a solas. Los niños no están en casa, y es hora de que mamá se divierta... consigo misma. Excepto que las baterías genéricas de su juguete favorito se agotan a mitad de la sesión. Cuando las reemplaza por las de la marca líder de la industria, Ohm-azing, Jewel obtiene mucho más que placer de larga duración. Wattson ha sido enviado desde la sede de Ohm-azing para garantizar que Jewel esté 100% satisfecha.",
    coverUrl: "https://m.media-amazon.com/images/I/81LZwossbBL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Bad BeehAvior",
    title: "Bad BeehAvior",
    author: "G.M. Fairy",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Abeja", "Secuestro", "Dubcon"],
    synopsis: "Un polinizador y una florista: un amor que florece a través de la galaxia. Baryx emprende un viaje por el universo para repoblar a los de su especie y salvar el planeta Tierra. Cuando llega, toma su forma más pequeña, y un hombre humano intenta aplastarlo, casi matándolo. Jennessa, una florista dulce y amable, lo rescata y lo cuida hasta devolverle la salud. A medida que Baryx pasa más tiempo con ella, revela su verdadera identidad mientras descubre emociones nuevas y prohibidas. Dividido entre el deber y el deseo, Bee, como le gusta llamarlo a Jennessa, debe elegir: cumplir su misión o entregarse a un amor prohibido con la mujer que le mostró el verdadero significado de la pasión más allá de los mundos.",
    coverUrl: "https://m.media-amazon.com/images/I/71CKqbFqtmL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Gimme A Pizza Dat Azz",
    title: "Gimme A Pizza Dat Azz",
    author: "T.R. Oldin - Nerdy Reed",
    series: "Erotic Eatz",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Comida", "Pizza", "Drogas alucinógenas"],
    synopsis: "Sage está disfrutando de un agradable día en la playa cuando pide una Pizza Everything en un nuevo local de la ciudad. Su deliciosa combinación de queso es justo lo que necesita para recuperarse después de pasar toda la mañana surfeando. Pero, sin que Sage lo supiera, la pizza tiene algunos ingredientes especiales. Al despertar de una siesta en la orilla, descubre que su pizza ha cobrado vida y que la piña que había arrancado busca venganza por haber sido rechazada. Ahora Sage debe afrontar las consecuencias de sus actos … y tragarse sus propias decisiones. Muy pronto descubrirá cuánto le gusta realmente un poco de piña en su pizza.",
    coverUrl: "https://m.media-amazon.com/images/I/811EttuL+wL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Rake",
    title: "Rake",
    author: "Nicole Parker",
    series: "Kyleverse",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Objeto consciente", "Rastrillo"],
    synopsis: "Taylor es una chica que necesita sacar sus hojas al contenedor antes de que pase el camión de la basura. Connor es un “rastrillo” en todos los sentidos de la palabra. Kyle es el mejor amigo que está ahí para acompañar en todo. Lo que comenzó como un día extraño se convertirá en mucho más. Taylor sabe que necesita limpiar su patio antes de la recolección de basura de mañana, pero cuando va al garaje a buscar sus herramientas, algo parece fuera de lugar. Por suerte, su mejor amigo Kyle está disponible para ofrecer su ayuda. Cuando ambos se unen para encargarse de las hojas, Taylor conoce a Connor, quien sacude su mundo por completo.",
    coverUrl: "https://m.media-amazon.com/images/I/81S9sZoDBmL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Formaldehyde",
    title: "Formaldehyde",
    author: "J.N. Bamforth",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Dark romance", "Taboo", "Horror"],
    synopsis: "Ethan no tiene miedo de cruzar los límites cuando se trata de su hermana. De hecho, está más que dispuesto a hacer lo que sea necesario para reclamar a Alina. Incluso si está viva o muerta.",
    coverUrl: "https://m.media-amazon.com/images/I/81VF8xV4JgL._SL1473_.jpg",
    hue: 180
  },
  {
    id: "Laid by the Lint Monster",
    title: "Laid by the Lint Monster",
    author: "Holly Wilde",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Pelusa gigante", "Lavadora"],
    synopsis: "Cuando tu casa nueva tiene una larga lista de problemas que arreglar, lo último que necesitas es que una criatura literalmente salida de la lavadora te aceche... ¿o no?",
    coverUrl: "https://m.media-amazon.com/images/I/91ohW9OpCiL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Goldie and the Bear Affair",
    title: "Goldie and the Bear Affair",
    author: "Liana Valerian - S. D. Paine",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Misterio"],
    synopsis: "Goldie tiene tres problemas: Acaba de escapar de un matrimonio arreglado (sí, todavía existen) con un hombre horrible. Está perdida en medio del bosque, usando un vestido de ensayo espantoso y sin ningún instinto de supervivencia. Acaba de irrumpir en una cabaña que, por desgracia, no está vacía. No, la cabaña pertenece a tres hombres. Hombres enormes, feroces y peligrosamente atractivos. Ahí está Kieran, el cambiaformas oso pardo de buen corazón con una sonrisa traviesa tan dulce como la miel. Adrian, el oso polar de actitud fría como el hielo, con una peligrosa tormenta gestándose tras sus ojos. Y Marcus, el oso negro increíblemente atractivo cuyos profundos gruñidos son imposibles de resistir. Deberían echarla a patadas por su bonito trasero. En cambio, la mantienen abrigada. Alimentada. Y completamente satisfecha. Pero el pasado de Goldie aún no ha terminado con ella, y los tres cambiaformas oso tendrán que decidir si el “felices para siempre” realmente es cosa de cuatr.",
    coverUrl: "https://m.media-amazon.com/images/I/81EJjebs5WL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Scream For Me",
    title: "Scream For Me",
    author: "G.M. Fairy",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Misterio"],
    synopsis: "El heraldo del miedo, el depredador de la noche... Me alimento del terror humano, bebiendo sus gritos como el néctar más dulce. Pero cuando tropiezo a través del portal hacia su habitación y escucho sus gritos de placer, un hambre mucho más oscura y primitiva se apodera de mí. Ahora ella me pertenece. Necesito oírla gritar así otra vez, y lo haré, aunque tenga que romperla en pedazos. La mujer arrancada de su mundo y arrojada a un reino de pesadillas... Lo sentí, unos ojos observándome desde la oscuridad, dorados e inquebrantables desde las sombras de mi armario. El pensamiento me provocó un escalofrío, transformándose en algo ilícito mientras dejaba que mis dedos vagaran. Pero cuando se lanzó sobre mí, arrastrándome a su mundo frío y despiadado, la emoción se convirtió en terror. Ahora, exige mi placer, mis gritos… pero me niego a rendirme sin luchar.",
    coverUrl: "https://m.media-amazon.com/images/I/81I3R6Ka5ZL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Dead... Serious About You",
    title: "Dead... Serious About You",
    author: "Dee Garcia",
    series: "Crimes Of Passion (Literally)",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Asesinato", "DarkRomcom"],
    synopsis: "Ya me estaba divorciando. No planeaba matar a mi esposo. Descubrir que me engañaba ya era bastante malo. Reclamarle la pensión alimenticia lo empeoró aún más. Peor en el sentido de que ahora estoy en medio del bosque con un cadáver, sufriendo un ataque de pánico y dándome cuenta de repente de que no tengo idea de cómo deshacerme de un cuerpo. Fue en defensa propia —lo juro— pero luego lo empeore todo. Moví el cuerpo y ahora estoy intentando arrastrar a un hombre adulto por un parque nacional yo sola. Ahí es cuando aparece Crew. Es un guardabosques con fríos ojos azules, manos ásperas y la inquietante calma de un hombre que ya ha hecho esto antes. Dice que le debe un favor a mi padre. No hace preguntas. Simplemente toma el control y me ayuda a hacer desaparecer el problema. Luego nos refugiamos en un puesto remoto de guardabosques para asegurarnos de que siga desaparecido. Porque, al parecer, esta es mi vida ahora. Se supone que es temporal. Estrictamente supervivencia y definitivamente nada sexy. Pero hay una atracción peligrosamente intensa que se siente tan ilegal como todo lo demás que hemos hecho. No quería matar a mi esposo. Definitivamente no quería enredarme con el hombre que me ayudó a salirme con la mía. Pero si enamorarme de Crew es un delito... estoy completamente dispuesta a cometerlo. Algunos secretos atan más fuerte que unas esposas.",
    coverUrl: "https://m.media-amazon.com/images/I/41KY3ClizwL.SX316.SY480._SL500_.jpg",
    hue: 180
  },
  {
    id: "Fear, and Other Love Languages",
    title: "Fear, and Other Love Languages",
    author: "Aveda Vice",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Misterio"],
    synopsis: "En cualquier momento, los sueños alcanzarán a Elia. Pero Elia está demasiado ocupada intentando no perder su trabajo como para dejar que las pesadillas recurrentes la distraigan. Si tan solo pudiera averiguar qué quiere su inquietante jefe de ella, quizá por fin podría dormir un poco. Porque sus sueños son solo sueños… ¿verdad? Pero cuando Elia finalmente se encuentra con las criaturas de su pesadilla que la han estado atormentando durante años, empieza a cuestionar las líneas que creía que existían entre los sueños y la realidad, el miedo y el poder, el amor y el tormento.",
    coverUrl: "https://m.media-amazon.com/images/I/51UjRxAmC6L._SY445_SX342_QL70_FMwebp_.jpg",
    hue: 180
  },
  {
    id: "Hopper",
    title: "Hopper",
    author: "Daisy Jane",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "cambiaformas", "Conejo"],
    synopsis: "Jack Hopper. Nunca fue mi intención que ella me viera así, mitad hombre, mitad bola de pelo, saltando en mi propio jardín bajo la luna llena que me convertía en un conejo gigante. Me he pasado la vida ocultando este peludo secreto, porque ¿qué más podía hacer? ¿Quién quiere una pareja con temporada de apareamiento, cola de algodón y orejas caídas? Pero cuando Esther Basquette se mudó a la casa de al lado, para ayudar a salvar la famosa Eggstravaganza de Pascua de Carrot Creek, una palabra resonó en mi cabeza de conejo: mía. Ella es un rayo de sol cuando sonríe, y su risa es tan linda que cuando la escucho, tengo que luchar contra el impulso de transformarme en Hopper, mi alter ego conejo, perseguirla a través de los campos de zanahorias y aparearla para hacerla mía. Con la luna llena saliendo y mi celo de Pascua acercándose, espero que Esther salte a mi cama y a mi corazón. ¿Pero todavía le agradaré cuando sepa que soy un hombre conejo?",
    coverUrl: "https://m.media-amazon.com/images/I/410vKWT8jhL._SY445_SX342_QL70_FMwebp_.jpg",
    hue: 180
  },
  {
    id: "Eat Your Heart Out",
    title: "Eat Your Heart Out",
    author: "J.N. Bamforth",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Dar romance", "Asesinato", "Victimas"],
    synopsis: "¿Quieres saber cuál es la mejor manera de llegar al corazón de un hombre? Es con un cuchillo, directo al pecho. Mi nombre es Cherry, y hace tres años la vida que tenía terminó, pero no me mató. En cambio, me convirtió en la mujer que soy ahora. Una perra del infierno en un camino de venganza para encontrar al hombre —y a otros como él— que arruinó mi vida. Pero lo único que nunca esperé encontrar fue el amor.",
    coverUrl: "https://m.media-amazon.com/images/I/71QqsHpEjrL._SY425_.jpg",
    hue: 180
  },
  {
    id: "SPF ME",
    title: "SPF ME",
    author: "Holly Wilded",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Objeto consciente"],
    synopsis: "El verano está empacado y listo para su escapada de fin de semana. Quizás un poco demasiado lista, considerando que llevó consigo suficiente protector solar para toda una vida. Poco sabía ella que la nueva línea de cuidado de la piel de Sentientscreen venía con una mini sorpresa. Esta es una historia donde la obscenidad es la trama. Si buscas algo sustancial, no lo encontrarás dentro de estas páginas. Lo que sí encontrarás son hombres en miniatura con miembros en miniatura. Solo no dejes que eso te engañe haciéndote pensar que no pueden causar un gran impacto donde cuenta.",
    coverUrl: "https://m.media-amazon.com/images/I/51vg3m7ZGsL._SY445_SX342_QL70_FMwebp_.jpg",
    hue: 180
  },
  {
    id: "SINFUL",
    title: "SINFUL",
    author: "J. Snow",
    series: "AFTER DARK TABOO",
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Taboo", "Hermanastros", "Prohibido"],
    synopsis: "En el silencioso confesionario de su propia iglesia, un devoto sacerdote escucha mientras su hermana confiesa sus deseos más oscuros y prohibidos. Que él, su hermano, peque con ella en el confesionario.",
    coverUrl: "https://dwtr67e3ikfml.cloudfront.net/bookCovers/5b19c91e-fb97-4d07-a2d0-d837b4e0a660.jpg__300x0",
    hue: 180
  },
  {
    id: "Slay Bells",
    title: "Slay Bells",
    author: "J.N. Bamforth",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Necrofilia", "Dubcon", "Asesinato"],
    synopsis: "Este podría ser mi Navidad más sangrienta hasta ahora. Hay un nuevo Santa en la ciudad. Con un tajo de mi hacha y una puñalada de mi cuchillo, haré que todas tus pesadillas navideñas se vuelvan realidad.",
    coverUrl: "https://m.media-amazon.com/images/I/714-963eegL._SY385_.jpg",
    hue: 180
  },
  {
    id: "Hallowpeen",
    title: "Hallowpen",
    author: "Holly Wilde",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Objeto Consciente"],
    synopsis: "Tres mujeres, un ritual oculto y una leyenda urbana hecha realidad te esperan para descubrir lo deliciosamente aterrador que puede ser Halloween. Todos en el pequeño pueblo de Hollow Springs saben que la noche de Halloween es cuando el velo de la conciencia es más delgado. Así que nadie intentaría un ritual ridículo en la noche de luna llena, ¿verdad? Falso.",
    coverUrl: "https://m.media-amazon.com/images/I/41JO9ez9uLL._SY445_SX342_QL70_FMwebp_.jpg",
    hue: 180
  },
  {
    id: "Taking Daddys Load",
    title: "Taking Daddys Load",
    author: "J. Snow",
    series: "After Dark Taboo",
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Taboo", "Dark"],
    synopsis: "Era una chica mala por las cosas sucias que quería. Por con quién quería estar. Mi padre. Él era la única persona que no podía tener. ¿O sí?.",
    coverUrl: "https://m.media-amazon.com/images/I/81wM1hKJ3bL._SY425_.jpg",
    hue: 180
  },
  {
    id: "susurros-en-la-oscuridad",
    title: "Susurros en la oscuridad",
    author: "A. C. QUINTERO",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Misterio"],
    synopsis: "Una historia de suspense y romance donde los secretos del pasado amenazan con destruir el futuro.",
    coverUrl: "https://m.media-amazon.com/images/I/81wM1hKJ3bL._SY425_.jpg",
    hue: 180
  },
  {
    id: "susurros-en-la-oscuridad",
    title: "Susurros en la oscuridad",
    author: "A. C. QUINTERO",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "Misterio"],
    synopsis: "Una historia de suspense y romance donde los secretos del pasado amenazan con destruir el futuro.",
    coverUrl: "https://m.media-amazon.com/images/I/81wM1hKJ3bL._SY425_.jpg",
    hue: 180
  },
];

/* ---------- Libros próximos (para sección "Próximos proyectos") ---------- */
const UPCOMING_BOOKS = [
  {
    id: "upcoming-1",
    title: "El susurro del océano",
    author: "Marina Sol",
    coverUrl: null,
    hue: 200
  },
  {
    id: "upcoming-2",
    title: "Bajo la luna de octubre",
    author: "Luna Ríos",
    coverUrl: null,
    hue: 30
  },
  {
    id: "upcoming-3",
    title: "El jardín de las mariposas",
    author: "Abril Montes",
    coverUrl: null,
    hue: 150
  }
];

const SCREEN_TITLES = {
  anuncios: "Anuncios",
  libros: "Libros disponibles",
  autores: "Autores",
  extras: "Contenido extra",
  "libro-detail": "Detalle del libro",
  proximos: "Próximos proyectos",
  actualizaciones: "Actualizaciones",
  nsfw: "🔞 NSFW",
  sfw: "🖼️ SFW",
  "illustration-detail": "Detalle",
  nosotras: "Nosotras",
  "serie-detail": "Detalle de serie"
};

/* ---------- Navegación ---------- */
const navStack = ["home"];

// FUNCIÓN showScreen (definida PRIMERO)
function showScreen(name) {
  document.querySelectorAll(".screen").forEach((el) => {
    el.hidden = el.dataset.screen !== name;
  });
  window.scrollTo({ top: 0, behavior: "auto" });
  renderTopbar(name);
  updateTelegramBackButton(name);
  
  // Actualizar barra inferior
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === name);
  });
}

// FUNCIONES DE NAVEGACIÓN (definidas DESPUÉS)
window.openScreen = function(name) {
  if (navStack[navStack.length - 1] !== name) navStack.push(name);
  showScreen(name);
};

window.goBack = function() {
  if (navStack.length > 1) navStack.pop();
  showScreen(navStack[navStack.length - 1]);
};

window.goHome = function() {
  navStack.length = 1;
  navStack[0] = "home";
  showScreen("home");
};

function renderTopbar(name) {
  const topbar = document.getElementById("topbar");
  
  const themeBtn = `
    <button id="themeToggle" onclick="toggleTheme()" style="
      background: rgba(192, 57, 122, 0.12);
      border: 1px solid var(--pink-strong);
      border-radius: 50%;
      width: 38px;
      height: 38px;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-left: 8px;
      color: var(--pink-strong);
    ">🌙</button>
  `;
  
  if (name === "home") {
    topbar.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 4px;">
        <span class="topbar-brand">
          <svg viewBox="0 0 24 24" aria-hidden="true" style="width:24px;height:24px;"><use href="#icon-book"></use></svg>
          <span style="font-family:var(--font-display);font-weight:600;font-size:20px;color:var(--ink);">LibroAmore</span>
        </span>
        ${themeBtn}
      </div>
    `;
  } else {
    const title = SCREEN_TITLES[name] || name;
    topbar.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 4px;">
        <div style="display:flex;align-items:center;gap:8px;overflow:hidden;flex:1;">
          <button class="back-btn" onclick="goBack()" style="display:flex;align-items:center;gap:4px;background:none;border:none;color:var(--pink-ink);font-weight:600;font-size:15px;padding:8px 4px;cursor:pointer;">
            <svg viewBox="0 0 24 24" style="width:20px;height:20px;"><use href="#icon-chevron-left"></use></svg>
            <span>Volver</span>
          </button>
          <span style="font-family:var(--font-display);font-weight:600;font-size:18px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(title)}</span>
        </div>
        ${themeBtn}
      </div>
    `;
  }
  
  const btn = document.getElementById('themeToggle');
  if (btn) {
    const savedTheme = localStorage.getItem('theme');
    btn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  }
}

/* ---------- Telegram ---------- */
if (tg) {
  tg.ready();
  tg.expand();
  try {
    tg.BackButton.onClick(goBack);
  } catch (e) {}
}

function updateTelegramBackButton(name) {
  if (!tg || !tg.BackButton) return;
  try {
    if (name === "home") tg.BackButton.hide();
    else tg.BackButton.show();
  } catch (e) {}
}

/* ---------- Utilidades ---------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

let toastTimer;
window.showToast = function(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
};

// ============================================
//  MODO OSCURO
// ============================================

function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('themeToggle');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    if (btn) btn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    if (btn) btn.textContent = '🌙';
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const btn = document.getElementById('themeToggle');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (btn) btn.textContent = '☀️';
  } else {
    if (btn) btn.textContent = '🌙';
  }
}

/* ---------- Portadas ---------- */
function coverMarkup(book, big) {
  if (book.coverUrl) {
    return `<img src="${escapeHtml(book.coverUrl)}" alt="Portada de ${escapeHtml(book.title)}" loading="lazy"
      onerror="bookCoverFallback(this, '${book.id}', ${big ? "true" : "false"})">`;
  }
  return placeholderCoverMarkup(book, big);
}

function placeholderCoverMarkup(book, big) {
  const letter = book.title.trim().charAt(0).toUpperCase();
  return `
    <div class="cover-placeholder${big ? " cover-placeholder--lg" : ""}" style="--hue:${book.hue}">
      <svg class="cover-icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-book"></use></svg>
      <span class="cover-letter">${escapeHtml(letter)}</span>
    </div>
  `;
}

window.bookCoverFallback = function(imgEl, bookId, big) {
  const book = BOOKS.find((b) => b.id === bookId);
  if (!book || !imgEl.parentElement) return;
  imgEl.parentElement.innerHTML = placeholderCoverMarkup(book, big);
};

/* ---------- Libros disponibles ---------- */
function renderBooksGrid() {
  const grid = document.getElementById("booksGrid");
  if (!grid) return;
  grid.innerHTML = BOOKS.map((book, i) => `
    <button class="book-card" style="--i:${i}" onclick="openBookDetail('${book.id}')">
      <div class="book-cover">${coverMarkup(book, false)}</div>
      <h3 class="book-title">${escapeHtml(book.title)}</h3>
      <p class="book-author">${escapeHtml(book.author)}</p>
      <span class="status-badge status-${book.statusClass}">${escapeHtml(book.status)}</span>
    </button>
  `).join("");
}

window.openBookDetail = function(bookId) {
  const book = BOOKS.find((b) => b.id === bookId);
  if (!book) return;
  const detailEl = document.getElementById("bookDetail");
  if (detailEl) {
    detailEl.innerHTML = bookDetailMarkup(book);
  }
  openScreen("libro-detail");
};

function bookDetailMarkup(book) {
  const formats = ["epub", "pdf", "fb2"].map((fmt) => {
    const available = book.status === "Disponible";
    return `
      <button class="format-btn${available ? "" : " format-btn--disabled"}"
        ${available ? `onclick="downloadFormat('${fmt}')"` : "disabled"}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-download"></use></svg>
        ${fmt.toUpperCase()}
      </button>
    `;
  }).join("");

  const saved = getReactions(book.id);
  const heartActive = saved.heart ? 'active-heart' : '';
  const starCount = saved.stars || 0;

  return `
    <div class="detail-cover">${coverMarkup(book, true)}</div>
    <h1 class="detail-title">${escapeHtml(book.title)}</h1>
    <p class="detail-author">${escapeHtml(book.author)}</p>
    <div class="detail-badge-row">
      <span class="status-badge status-${book.statusClass}">${escapeHtml(book.status)}</span>
    </div>
    <div class="detail-meta">
      <div class="meta-item">
        <span class="meta-label">Serie</span>
        <span class="meta-value">${escapeHtml(book.series || "Único")}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Parte</span>
        <span class="meta-value">${book.part ?? "—"}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Clasificación</span>
        <span class="meta-value">${escapeHtml(book.classification)}</span>
      </div>
    </div>

    <div class="reactions">
      <button class="reaction-btn ${heartActive}" onclick="toggleHeart('${book.id}')">
        <span class="icon">❤️</span>
        <span class="count" id="heart-count-${book.id}">${saved.heart ? '1' : '0'}</span>
      </button>
      <button class="reaction-btn ${starCount > 0 ? 'active-star' : ''}" onclick="openStarSelector('${book.id}')">
        <span class="icon">⭐</span>
        <span class="count" id="star-count-${book.id}">${starCount > 0 ? starCount : '0'}</span>
      </button>
    </div>

    <div class="tag-row">
      ${book.tags.map((tag) => `
        <span class="tag">
          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><use href="#icon-tag"></use></svg>
          ${escapeHtml(tag)}
        </span>
      `).join("")}
    </div>
    <h2 class="detail-subheading">Sinopsis</h2>
    <p class="detail-synopsis">${escapeHtml(book.synopsis)}</p>
    <h2 class="detail-subheading">Descargar</h2>
    <div class="format-row">${formats}</div>
    ${book.status !== "Disponible"
      ? `<p class="detail-note">Este título todavía no está disponible para descarga.</p>`
      : ""}
  `;
}

window.downloadFormat = function(format) {
  showToast(`Este es un libro de ejemplo — el archivo ${format.toUpperCase()} real se habilitará más adelante.`);
};

/* ---------- Orden de lectura (sección Autores) ---------- */
function renderReadingOrder() {
  const container = document.getElementById('orderList');
  if (!container) return;

  const orderIds = [
    'mortal-vows',
    'righteous-vows',
    'treacherous-vows',
    'reckless-vows',
    'wrong-vows'
  ];

  const orderTitles = {
    'mortal-vows': 'Смертельные клятвы',
    'righteous-vows': 'Праведные клятвы',
    'treacherous-vows': 'Коварные клятвы',
    'reckless-vows': 'Безумные клятвы',
    'wrong-vows': 'Неправильные клятвы'
  };

  const subtitles = {
    'mortal-vows': 'НАЧАЛО ИСТОРИИ',
    'righteous-vows': 'ПРОДОЛЖЕНИЕ',
    'treacherous-vows': 'ПРОДОЛЖЕНИЕ',
    'reckless-vows': 'ПРОДОЛЖЕНИЕ',
    'wrong-vows': 'ФИНАЛ СЕРИИ'
  };

  container.innerHTML = orderIds.map((id, index) => {
    const book = BOOKS.find(b => b.id === id);
    const statusText = book && book.status === 'Disponible' ? '✅ перевод завершен' : '⏳ перевод в процессе';
    return `
      <div class="order-item" onclick="openBookDetail('${id}')">
        <span class="order-number">${String(index + 1).padStart(2, '0')}</span>
        <div class="order-info">
          <div class="order-title">${orderTitles[id] || id}</div>
          <div class="order-subtitle">${subtitles[id] || ''}</div>
        </div>
        <span class="order-status">${statusText}</span>
      </div>
    `;
  }).join('');
}

/* ---------- Próximos proyectos ---------- */
function renderUpcomingBooks() {
  const grid = document.getElementById('upcomingGrid');
  if (!grid) return;

  grid.innerHTML = UPCOMING_BOOKS.map((book, i) => `
    <div class="book-card" style="--i:${i}">
      <div class="book-cover">
        ${book.coverUrl 
          ? `<img src="${book.coverUrl}" alt="${book.title}" loading="lazy">`
          : `<div class="cover-placeholder" style="--hue:${book.hue}">
              <svg class="cover-icon" viewBox="0 0 24 24"><use href="#icon-book"></use></svg>
              <span class="cover-letter">${book.title.charAt(0)}</span>
            </div>`
        }
      </div>
      <h3 class="book-title">${escapeHtml(book.title)}</h3>
      <p class="book-author">${escapeHtml(book.author)}</p>
      <span class="status-badge status-soon">Próximo</span>
    </div>
  `).join('');
}

/* ---------- Actualizaciones ---------- */
function renderUpdates() {
  const container = document.getElementById('updatesList');
  if (!container) return;

  const updates = [
    { version: "v1.0.0", date: "30/08/2026", desc: "Lanzamiento inicial de LibroAmore con catálogo básico." },
    { version: "v1.1.0", date: "Próximamente", desc: "Sección de 'Próximos proyectos' y 'Actualizaciones' añadida." }
  ];

  container.innerHTML = updates.map(update => `
    <div class="update-item">
      <div>
        <span class="update-version">${update.version}</span>
        <span class="update-date">${update.date}</span>
      </div>
      <div class="update-desc">${escapeHtml(update.desc)}</div>
    </div>
  `).join('');
}

// ============================================
//  ILUSTRACIONES
// ============================================

const ILUSTRACIONES = {
  nsfw: [
    {
      id: "nsfw-1",
      nombre: "Wattson x Jewel",
      libro: "Fully Charged",
      imagen: "https://m.media-amazon.com/images/I/81R8l1TBpWL._SY425_.jpg",
      descripcion: "Jewel y su Conejito."
    },
    {
      id: "nsfw-2",
      nombre: "Mia x Bear",
      libro: "Banging My Birthday Bear",
      imagen: "https://m.media-amazon.com/images/I/81NbDUhl0nL._SY425_.jpg",
      descripcion: "Mia y su osito de peluche en la cabaña de montaña."
    }
  ],
  sfw: [
    {
      id: "sfw-1",
      nombre: "Paisaje de Nimbus",
      libro: "Nimbus",
      imagen: "https://m.media-amazon.com/images/I/81R8l1TBpWL._SY425_.jpg",
      descripcion: "Ilustración del paisaje de Nimbus al atardecer."
    }
  ]
};

// ============================================
//  SERIES (para la sección Autores)
// ============================================

const SERIES = [
  {
    id: "wittmore",
    title: "Уиттмор и хоккей",
    subtitle: "ХОККЕЙНАЯ РОМАНТИКА • 4 книги + бонус",
    image: "https://drive.google.com/uc?export=view&id=TU_ID_1",
    description: "На льду играют жестко. Влюбляются — еще жестче. Четыре самостоятельные истории из университета Уиттмор: капитан, вратарь, защитник и тафгай — и девушки, рядом с которыми правила команды перестают работать.",
    books: [
      { number: "01", title: "Игра в любовь с форвардом", subtitle: "НАЧАЛО ИСТОРИИ", status: "✅ перевод завершен", id: "Say My Name" },
      { number: "02", title: "Под защитой вратаря", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "MONSTROUS" },
      { number: "03", title: "Мой дерзкий защитник", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "Fervor" },
      { number: "3.1", title: "Мой дерзкий защитник. Бонус", subtitle: "БОНУС К КНИГЕ 3", status: "✅ перевод завершен", id: "mapa-constelado" },
      { number: "04", title: "Соблазн для тафгая", subtitle: "ФИНАЛ СЕРИИ", status: "✅ перевод завершен", id: "Banging My Birthday Bear" }
    ]
  },
  {
    id: "wolf-king",
    title: "Король волков",
    subtitle: "РОМЭНТЕЗИ • 3 книги",
    image: "https://drive.google.com/uc?export=view&id=TU_ID_2",
    description: "3 книги • 2 из 3 готовы",
    books: [
      { number: "01", title: "Книга 1", subtitle: "НАЧАЛО", status: "✅ перевод завершен", id: "Pounded By Poseidon" },
      { number: "02", title: "Книга 2", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "Say My Name" },
      { number: "03", title: "Книга 3", subtitle: "ФИНАЛ", status: "⏳ перевод в процессе", id: "MONSTROUS" }
    ]
  },
  {
    id: "mortal-vows",
    title: "Смертельные клятвы",
    subtitle: "МАФИОЗНАЯ РОМАНТИКА • 5 книг",
    image: "https://drive.google.com/uc?export=view&id=TU_ID_3",
    description: "5 книг • перевод завершен",
    books: [
      { number: "01", title: "Смертельные клятвы", subtitle: "НАЧАЛО ИСТОРИИ", status: "✅ перевод завершен", id: "Banging My Birthday Bear" },
      { number: "02", title: "Праведные клятвы", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "Pounded By Poseidon" },
      { number: "03", title: "Коварные клятвы", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "Say My Name" },
      { number: "04", title: "Безумные клятвы", subtitle: "ПРОДОЛЖЕНИЕ", status: "✅ перевод завершен", id: "MONSTROUS" },
      { number: "05", title: "Неправильные клятвы", subtitle: "ФИНАЛ СЕРИИ", status: "✅ перевод завершен", id: "Fervor" }
    ]
  }
];

// ============================================
//  RENDERIZAR SERIES
// ============================================

function renderSeriesGrid() {
  const grid = document.getElementById('seriesGrid');
  if (!grid) return;

  grid.innerHTML = SERIES.map(serie => `
    <div class="serie-card" style="background-image: url('${serie.image}');" onclick="openSerieDetail('${serie.id}')">
      <div class="overlay">
        <h3>${escapeHtml(serie.title)}</h3>
        <div class="serie-sub">${escapeHtml(serie.subtitle)}</div>
        <div class="serie-btn">Порядок чтения ›</div>
      </div>
    </div>
  `).join('');
}

window.openSerieDetail = function(serieId) {
  const serie = SERIES.find(s => s.id === serieId);
  if (!serie) return;

  const container = document.getElementById('serieDetail');
  if (!container) return;

  container.innerHTML = `
    <div class="serie-detail-card">
      <div class="serie-detail-header">
        <h2>${escapeHtml(serie.title)}</h2>
        <p>${escapeHtml(serie.subtitle)}</p>
      </div>
      <div class="serie-detail-body">
        <p class="desc">${escapeHtml(serie.description)}</p>
        <div class="order-list">
          ${serie.books.map(book => `
            <div class="order-item" onclick="openBookDetail('${book.id}')" style="cursor:pointer;">
              <span class="num">${book.number}</span>
              <div class="info">
                <div class="title">${escapeHtml(book.title)}</div>
                <div class="sub">${escapeHtml(book.subtitle)}</div>
              </div>
              <span class="status">${escapeHtml(book.status)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  openScreen('serie-detail');
};

function mostrarIlustraciones(categoria, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;
  
  const items = ILUSTRACIONES[categoria] || [];
  contenedor.innerHTML = items.map(item => `
    <div class="illustration-card" onclick="abrirDetalleIlustracion('${categoria}', '${item.id}')">
      <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">
      <div class="illustration-name">${item.nombre}</div>
    </div>
  `).join('');
}

window.abrirDetalleIlustracion = function(categoria, id) {
  const items = ILUSTRACIONES[categoria] || [];
  const item = items.find(i => i.id === id);
  if (!item) return;

  const detailEl = document.getElementById('illustrationDetail');
  if (detailEl) {
    detailEl.innerHTML = `
      <div class="detail-illustration">
        <img src="${item.imagen}" alt="${item.nombre}">
        <div class="detail-info">
          <h2>${item.nombre}</h2>
          <p class="detail-book">📖 <strong>Libro:</strong> ${item.libro}</p>
          <p class="detail-desc">${item.descripcion}</p>
        </div>
      </div>
    `;
  }
  openScreen('illustration-detail');
};

// ============================================
//  NAVEGACIÓN INFERIOR
// ============================================

window.navigateTo = function(screenName) {
  openScreen(screenName);
  
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === screenName);
  });
};

// ============================================
//  REACCIONES (Heart y Stars)
// ============================================

function getReactions(bookId) {
  try {
    const data = JSON.parse(localStorage.getItem('reacciones') || '{}');
    return data[bookId] || { heart: false, stars: 0 };
  } catch {
    return { heart: false, stars: 0 };
  }
}

function saveReaction(bookId, type, value) {
  const data = JSON.parse(localStorage.getItem('reacciones') || '{}');
  if (!data[bookId]) data[bookId] = { heart: false, stars: 0 };
  
  if (type === 'heart') {
    data[bookId].heart = value;
  } else if (type === 'stars') {
    data[bookId].stars = value;
  }
  
  localStorage.setItem('reacciones', JSON.stringify(data));
  updateReactionUI(bookId);
}

function updateReactionUI(bookId) {
  const saved = getReactions(bookId);
  
  const heartCount = document.getElementById(`heart-count-${bookId}`);
  if (heartCount) {
    heartCount.textContent = saved.heart ? '1' : '0';
    const heartBtn = heartCount.closest('.reaction-btn');
    if (heartBtn) {
      heartBtn.classList.toggle('active-heart', saved.heart);
    }
  }
  
  const starCount = document.getElementById(`star-count-${bookId}`);
  if (starCount) {
    const count = saved.stars || 0;
    starCount.textContent = count > 0 ? count : '0';
    const starBtn = starCount.closest('.reaction-btn');
    if (starBtn) {
      starBtn.classList.toggle('active-star', count > 0);
    }
  }
}

window.toggleHeart = function(bookId) {
  const saved = getReactions(bookId);
  const newValue = !saved.heart;
  saveReaction(bookId, 'heart', newValue);
  showToast(newValue ? '❤️ Añadido a favoritos' : '💔 Eliminado de favoritos');
};

window.openStarSelector = function(bookId) {
  const saved = getReactions(bookId);
  const currentStars = saved.stars || 0;
  
  const overlay = document.createElement('div');
  overlay.className = 'star-selector-overlay show';
  overlay.id = 'starSelectorOverlay';
  overlay.innerHTML = `
    <div class="star-selector">
      <h3>⭐ Califica este libro</h3>
      <div class="stars">
        ${[1, 2, 3, 4, 5].map(n => `
          <button data-value="${n}" class="${n <= currentStars ? 'active' : ''}" onclick="selectStar('${bookId}', ${n})">
            ${n <= currentStars ? '⭐' : '☆'}
          </button>
        `).join('')}
      </div>
      <button class="close-btn" onclick="closeStarSelector()">Cerrar</button>
    </div>
  `;
  
  overlay.addEventListener('click', function(e) {
    if (e.target === this) closeStarSelector();
  });
  
  document.body.appendChild(overlay);
};

window.selectStar = function(bookId, value) {
  saveReaction(bookId, 'stars', value);
  
  document.querySelectorAll('.star-selector .stars button').forEach(btn => {
    const val = parseInt(btn.dataset.value);
    btn.textContent = val <= value ? '⭐' : '☆';
    btn.classList.toggle('active', val <= value);
  });
  
  const countEl = document.getElementById(`star-count-${bookId}`);
  if (countEl) {
    countEl.textContent = value;
    const starBtn = countEl.closest('.reaction-btn');
    if (starBtn) {
      starBtn.classList.toggle('active-star', true);
    }
  }
  
  showToast(`⭐ Calificación: ${value} estrella${value > 1 ? 's' : ''}`);
  setTimeout(closeStarSelector, 800);
};

window.closeStarSelector = function() {
  const overlay = document.getElementById('starSelectorOverlay');
  if (overlay) overlay.remove();
};

// ============================================
//  INICIO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  if (!checkTelegramEnvironment()) return;
  
  loadTheme();
  
  renderTopbar("home");
  renderBooksGrid();
  renderReadingOrder();
  renderUpcomingBooks();
  renderUpdates();
  mostrarIlustraciones('nsfw', 'nsfwGrid');
  mostrarIlustraciones('sfw', 'sfwGrid');
  renderSeriesGrid();
});
