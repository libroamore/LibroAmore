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
    id: "ice scream for you",
    title: "ice scream for you",
    author: "T.R. Oldin - Nerdy Reed",
    series: "Erotic Eatz",
    part: 4,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Objetto Consciente", "FF"],
    synopsis: "Nikki y Rae están de viaje para celebrar su aniversario cuando alguien les recomienda una nueva tienda de champán y helados a la vuelta de la esquina. Incapaces de resistirse, la visitan y descubren un delicioso helado de fresa que combina a la perfección con un mágico Prosecco rosado. Su acogedor viaje de aniversario da un giro inesperado cuando una mujer fresa con conciencia propia aparece en su habitación de hotel. Al principio, nadie sabe qué hacer con una mujer capaz de hacer que el helado brote de las yemas de sus dedos, así como de… otros lugares. Nikki y Rae siempre están dispuestas a hacerle un lugar a una tercera, pero nunca habían vivido una experiencia como esta. Las dos se lo pasan tan bien con ella que temen que algo así no pueda repetirse jamás. Cuando después pasan un tiempo solas en su habitación de hotel, la decepción se apodera de ellas. Pero no se preocupen: una aventura más hará que encuentren a su unicornio perfecto. Uno que hará que griten pidiendo helado.",
    coverUrl: "https://m.media-amazon.com/images/I/71OSC2qOjoL._SL1500_.jpg",
    hue: 340
  },
  {
    id: "paper-and-passion",
    title: "Paper and Passion",
    author: "Thea Masen",
    series: "Ghostlight Falls",
    part: 2,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Fantasía", "MMF"],
    synopsis: "Tillie lleva poco tiempo siendo dueña de Sheet-y Stationery, y ya desearía no haberlo sido. La tienda es rebelde e impredecible. No deja de cambiar de lugar y de ahuyentar a los posibles empleados que intenta contratar. Después de incontables entrevistas que salen mal, se queda sorprendida cuando una hermosa criatura a la que nunca antes había visto entra por la puerta para solicitar trabajo. Alex es preciosa, segura de sí misma, serena y deja muy claro que quiere algo más que un empleo. Quiere a Tillie. Y su esposo también la quiere. Pero Tillie ya ha sufrido antes y no está segura de querer formar parte de una relación ya establecida. Ni siquiera si ellos dicen que es su pareja destinada.",
    coverUrl: "https://m.media-amazon.com/images/I/71sUZHOlmhL._SL1500_.jpg",
    hue: 200
  },
  {
    id: "spread",
    title: "Spread",
    author: "Nicole Parker",
    series: "Kyleverse",
    part: 5,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Demonio", "Objeto Consciente"],
    synopsis: "Me recoge a mí en su lugar, frotando sus manos sobre mi mango ergonómico. —Bueno. La silicona es silicona, ¿no? Mel está limpiando después de una fiesta cuando encuentra algo que no le pertenece. Ella no sabe que su hallazgo es afortunado en más de un sentido. Cuando una apuesta sale mal, Spatha termina atrapado en una situación bastante desafortunada. Por suerte, cae en las excelentes manos de Mel.",
    coverUrl: "https://m.media-amazon.com/images/I/818YLTs7DvL._SL1500_.jpg",
    hue: 180
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
    id: "Caked",
    title: "Caked",
    author: "Holly Wilde",
    series: "Sentient Celebrations",
    part: 2,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Objeto Consciente", "Cumpleaños"],
    synopsis: "Me arrodillo y pido un deseo en silencio. — Quiero tener a mi pastel y poder comérmelo también.— Susurro en la habitación silenciosa.",
    coverUrl: "https://m.media-amazon.com/images/I/71Y3cnHqPsL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Getting His Fill",
    title: "Getting His Fill",
    author: "J. Snow",
    series: "After Dark Taboo",
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Taboo", "Tío"],
    synopsis: "Fui a la granja de mi tío Brook durante el verano para ayudar. Lo que no esperaba era convertirme en su HuCow.",
    coverUrl: "https://jenikasnow.com/wp-content/uploads/2025/07/Getting-His-Fill-Kindle.jpg",
    hue: 180
  },
  {
    id: "CUPPED",
    title: "CUPPED",
    author: "Holly Wilde",
    series: "Sentient Celebrations",
    part: 3,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Objeto Consciente", "Cumpleaños"],
    synopsis: "Nada grita más 'cumpleaños' que una escapada a una cabaña con Michelle, Mia y Anna. Para el tercer libro de la serie Sentient Celebrations, contamos los sucios treinta de Anna. Esta vez, la afortunada cumpleañera recibe el doble de regalos: dos tazas de alta gama que se supone que están hechos de metal apto para microondas. Sin embargo, las cosas van mal muy rápidamente cuando calentar un café recién hecho provoca un incendio. ¿Podrá apagar el incendio o las cosas se pondrán demasiado calientes para Anna cuando sus vasos cobren vida y decidan tener su propia fiesta?",
    coverUrl: "https://m.media-amazon.com/images/I/71LbUnohUML._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Spread Wider For Uncle",
    title: "Spread Wider For Uncle",
    author: "J. Snow",
    series: "After Dark Taboo",
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Taboo", "Trío", "Gemelos - Hermanos"],
    synopsis: "Necesitaba ganar algo de dinero extra. Y vender mi cuerpo en línea era la forma más rápida de conseguirlo. Pero luego descubrí que mi tío era un cliente y lo que quería de mí era un trío en directo no solo con él, sino también con mi padre, su gemelo",
    coverUrl: "https://jenikasnow.com/wp-content/uploads/2024/06/Spread_Wider_For_Uncle_Final-scaled.jpg",
    hue: 180
  },
  {
    id: "Airpeen",
    title: "Airpeen",
    author: "Holly Wilde",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Avión", "Objeto Consciente"],
    synopsis: "Sentient Air Exclusive: Es un lugar donde el vino se sirve sin costo adicional, y lo mismo ocurre con los pasajeros. Los viajes de trabajo son estresantes, y este último no fue la excepción. Gracias a Dios por la posibilidad de mejorar a la Sección Exclusiva. Aprende de dónde viene realmente la turbulencia mientras compartes el vuelo con Cushy, tu propia Silla Sentient Air. Él puede mostrarte cómo funciona todo y ayudarte a mantenerte entretenida mientras estás a bordo. ¡Si eres realmente buena, puede que incluso invite a algunos amigos a unirse a la fiesta! Gracias por elegir Sentient Air, esperamos que disfrute su vuelo",
    coverUrl: "https://m.media-amazon.com/images/I/71AB0+EDdJL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "My Sleep Paralysis Demon",
    title: "My Sleep Paralysis Demon",
    author: "Rune Hunt",
    series: null,
    part: null,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Monstruo", "Paralisis de seueño"],
    synopsis: "'Haz conmigo lo que quieras, demonio de la parálisis del sueño. Por favor… solo déjame dormir…', murmuró Seren, cansada. Sus ojos color chocolate se cerraron y su respiración se volvió pesada. Se quedó dormida en cuestión de segundos. Me senté en silencio, delineando su hermoso cuerpo a la luz de la luna. Cada curva hacía que me doliera el deseo de tenerla entre mis manos. Todas las noches la observaba dormir. Su respiración se entrecortaba, pero su cuerpo estaba paralizado. Me quedaba simplemente mirando sus curvas mientras ella me miraba, el miedo danzando en el aire. Por primera vez, ella me habló. Soy su demonio de la parálisis del sueño. Lo he sido durante un año y esta noche, por fin, fue la noche en que sus labios pronunciaron esas palabras: 'Haz conmigo lo que quieras, demonio.' Con mucho gusto mi dulce Seren",
    coverUrl: "https://m.media-amazon.com/images/I/71W0-dzwXkL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Slash or Smash",
    title: "Slash or Smash",
    author: "Dee Garcia",
    series: "Festive ASF",
    part: 5,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Hermanastros", "MMF"],
    synopsis: "Raven Vexley es esa chica: con su bebida de pumpkin spice en mano, suéteres acogedores que repite sin cesar y un amor profundo por todo lo relacionado con lo espeluznante. Muy apropiado —o tal vez un poco obvio— si se considera que vive en Hollow’s Moor, un pequeño pueblo donde Halloween comienza a finales de agosto y no termina hasta el último suspiro de noviembre. La mayoría de los años, Raven y sus amigas pasan la Noche de Halloween yendo de fiesta en fiesta y buscando emociones, pero esta vez, después de unos tragos y unos sustos a medias, deciden hacer algo diferente: Un Escape Room. The Lock Box es la nueva atracción del Moor. Propiedad de dos hermanastros que se toman Halloween tan en serio como el resto del pueblo, están disfrazados de asesinos de película y esperan a su próxima víctima cuando Raven y su grupo de amigas, entre risas y algo mareadas, entran por la puerta principal. Después de que las chicas eligen la experiencia 'Mansión Embrujada', los pseudo-hermanos les explican las reglas, terminando con una advertencia críptica: Si las paredes se mueven y su grupo se separa, no miren atrás. La mansión favorece a quienes siguen adelante… Todo es diversión hasta que las luces se apagan y Raven se encuentra de pronto sola, acorralada y vulnerable frente a Ghostface y Jason. Su instinto le dice que grite, que corra, pero hay algo en la forma en que esas miradas vacías tras las máscaras se fijan en ella, mientras se acercan, que deja claro que están jugando un nuevo y escalofriante juego… y ella es el premio mayor.",
    coverUrl: "https://m.media-amazon.com/images/I/91N+4Yt3sRL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Romanced By The Rat",
    title: "Romanced By The Rat",
    author: "G.M. Fairy",
    series: "Ghostlight Falls",
    part: 3,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Ratatouille", "Experimento"],
    synopsis: "Esta rata tira del cabello… y de las fibras del corazón. Cuando un experimento científico militar sale mal, Ramsay despierta en el cuerpo de una rata. Se refugia en la cocina de Ratcliffs, un restaurante de alta gama en Ghostlight Falls. Rebuscando comida y esquivando peligros, se resigna a vivir en las sombras… hasta que ella cruza la puerta. Charlotte es nueva en la ciudad y busca un nuevo comienzo. Ratcliffs, con su ambiente acogedor y su ratatouille perfecto, se convierte rápidamente en su escape favorito. No espera llamar la atención del encantador mesero, ni que su presencia despierte algo inesperado en cierto observador peludo. Jeremy nunca quiso ser camarero, pero el trabajo financia sus sueños de culturismo. Cuando una rata toma inesperadamente las riendas, Jeremy se descubre agradecido por la inusual alianza. Con Ramsay guiando sus manos, Jeremy ve una oportunidad no solo para sobrevivir al caos de la cocina, sino para conquistar a la mujer de sus sueños. Mientras la tensión hierve a fuego lento y las emociones se desbordan, los tres deberán decidir si están dispuestos a compartir este romance poco convencional… o si los celos arruinarán la receta perfecta.",
    coverUrl: "https://m.media-amazon.com/images/I/712S4hlgauL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Faulty",
    title: "Faulty",
    author: "Nicole Parker",
    series: "Kyleverse",
    part: 2,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Hechizo", "Objeto Consciente"],
    synopsis: "Chloe se siente inexplicablemente atraída hacia una tienda de juguetes donde consigue un adorable nuevo amigo peludo con algunas peculiares. Puede que esté defectuoso, pero Chloe no se siente decepcionada cuando descubre que su nuevo juguete comparte una idea muy similar de lo que significa divertirse. Ella y su compañero de trabajo, Kyle, descubriran juntos lo bien que se lo pasan jugando con su nuevo amigo.",
    coverUrl: "https://m.media-amazon.com/images/I/91zeQMOFguL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Wrapped",
    title: "Wrapped",
    author: "Nicole Parker",
    series: "Kyleverse",
    part: 3,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Cumpleaños", "Objeto Consciente"],
    synopsis: "Lena llega a casa y encuentra una enorme caja de regalo esperándola con una nota que dice: '¡No abrir hasta tu cumpleaños!'. Cuando su cumpleaños finalmente llega, descubre que el regalo es mucho más de lo que esperaba.",
    coverUrl: "https://m.media-amazon.com/images/I/91vgEtwFA9L._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Hello, Nurse!",
    title: "Hello, Nurse!",
    author: "Nicole Parker",
    series: "Ghostlight Falls",
    part: 9,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Escape", "Experimentos"],
    synopsis: "Al crecer en Ghostlight Falls, Rebecca ha visto una buena cantidad de cosas inusuales, pero cuando se cruza con tres misteriosas criaturas que se esconden de su pasado, su curiosidad la lleva por un camino que jamás esperó recorrer. ¿Su oscuro pasado se interpondrá en el camino de un futuro brillante, o Rebecca podrá ayudar a Blabbo, Absurdo y Angelina a encontrar una forma de liberarse para siempre del Dr. Sinister? Dicen que Portland es extraño, pero Ghostlight Falls lo es aún más.",
    coverUrl: "https://m.media-amazon.com/images/I/71TaE4jsuBL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "The Totally Typical Tale Of Mappy McMapface",
    title: "The Totally Typical Tale Of Mappy McMapface",
    author: "Nicole Parker",
    series: "Ghostlight Falls",
    part: 1,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "Himbo", "MM"],
    synopsis: "Mappy McMapface está orgulloso de ser el propio himbo de Ghostlight Falls. ¿Quién necesita cerebro cuando tiene unas alas como esas? Carter se arrepiente de haberle dado protagonismo a Mappy. Su amargura y su afán de venganza podrían llevar a un final no tan feliz para todos. Pero Mappy esconde un secreto. Un secreto tan secreto que ni siquiera él mismo sabe que existe. Cuando la verdad salga a la luz, ¿el pueblo seguirá queriendo a su adorable himbo? ¿Podrá Mappy conservar el amor de su vida, Miguel? ¿O su vida terminará descarrilándose?",
    coverUrl: "https://m.media-amazon.com/images/I/711ZM6LQUZL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Taco Dirty To Me",
    title: "Taco Dirty To Me",
    author: "T.R. Oldin - Nerdy Reed",
    series: "Erotic Eatz",
    part: 2,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Comida", "Delirios", "Tacos"],
    synopsis: "Beaux está cayendo en espiral tras una reciente ruptura con su novia de muchos años cuando su mejor amiga, Marg, le dice que vaya al bar y parrilla donde ella trabaja para disfrutar del Martes de Tacos. Siendo la increíble amiga que es, le invita varios tragos de tequila para ahogar sus penas y le da todos los tacos que pueda comer, mientras también se asegura de avergonzarlo un poco en su cumpleaños. Sin embargo, cuando Beaux se queda dormido, completamente ebrio, en uno de los reservados después del cierre, unas extrañas figuras cobran vida ante sus ojos al despertar. Un taco, una chalupa y un churro muy apuesto aparecen para darle un toque atrevido y muy picante a la celebración de cumpleaños de Beaux. Se comparten ingredientes, se exploran pliegues, y resulta que los frijoles son mucho más mágicos de lo que cualquiera podría imaginar. La dulce y salada combinación, mezclada con una experiencia única en la vida, podría darle a Beaux la claridad que necesitaba desde el principio para ver lo que siempre había estado justo delante de él.",
    coverUrl: "https://m.media-amazon.com/images/I/814MrtzcvHL._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Donut Put It There",
    title: "Donut Put It There",
    author: "T.R. Oldin - Nerdy Reed",
    series: "Erotic Eatz",
    part: 3,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Comida", "Delirios", "Donas"],
    synopsis: "Leo, un pasante tímido en una prestigiosa empresa, tiene una importante presentación próximamente que determinará el rumbo de su futuro inmediato. Para prepararse y cautivar al comité, pasó por la tienda de donas favorita del pueblo para llenar la mesa de la sala de juntas con un surtido de dulces. Sin embargo, el día de Leo no transcurre según lo planeado. El café sale volando, se cae y, cuándo despierta, algo no está bien. Está siendo atendido por una Dominatriz Dona, vestida de látex blanco con chispas en forma de falo y pechos en su glaseado rosa. Cuando un hombre misterioso se revela más tarde para unirse a la diversión, Leo se ve arrastrado por un agujero de dona lleno de nuevas experiencias que aumentan su confianza, mientras descubre cosas nuevas sobre sí mismo en el proceso. Con todo lo que aprende y descubre, ¿logrará arrasar con esta presentación o terminará hecho un desastre, con su carrera completamente cubierta de glaseado?",
    coverUrl: "https://m.media-amazon.com/images/I/81EL2zwY95L._SL1500_.jpg",
    hue: 180
  },
  {
    id: "Nimbus",
    title: "Nimbus",
    author: "Nicole Parker",
    series: "Kyleverse",
    part: 4,
    classification: "+18",
    status: "Disponible",
    statusClass: "available",
    tags: ["Romance", "MM", "Nube"],
    synopsis: "Un tipo agradable como tú merece a alguien que le ayude a superar la tormenta. Owen está teniendo otro de esos días de el cielo se está cayendo. Un día en el que nada le sale bien y su ansiedad se descontrola por completo. Se lleva más que una sorpresa al descubrir que esta vez el cielo realmente se cae, pero no de la manera que temía. Le espera algo mucho más impactante",
    coverUrl: "https://m.media-amazon.com/images/I/812JO7GmLwL._SL1500_.jpg",
    hue: 180
  }
];

/* ---------- Libros próximos ---------- */
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

// ============================================
//  ESTADO DE BÚSQUEDA Y ORDEN
// ============================================

let currentSort = 'alpha-asc';
let searchTerm = '';
let categoriaIlustraciones = 'nsfw';
let autorSeleccionado = null;

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
  "serie-detail": "Detalle de autor",
  "ilustraciones-autores": "Autores"
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

// FUNCIONES DE NAVEGACIÓN
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
    let title = SCREEN_TITLES[name] || name;
    if ((name === 'nsfw' || name === 'sfw') && autorSeleccionado) {
        title = `👤 ${escapeHtml(autorSeleccionado)}`;
    }
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

// ============================================
//  FILTRAR Y ORDENAR LIBROS
// ============================================

function filterBooks() {
  const input = document.getElementById('searchInput');
  searchTerm = input ? input.value.toLowerCase().trim() : '';
  renderBooksGrid();
}

function sortBooks(order) {
  currentSort = order;
  
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const btn = document.getElementById(order === 'alpha-asc' ? 'sortAlphaAsc' : 'sortAlphaDesc');
  if (btn) btn.classList.add('active');
  
  renderBooksGrid();
}

function renderBooksGrid() {
  const grid = document.getElementById("booksGrid");
  if (!grid) return;

  let filtered = BOOKS;
  if (searchTerm) {
    filtered = filtered.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
  }

  if (currentSort === 'alpha-asc') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === 'alpha-desc') {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

  grid.innerHTML = filtered.map((book, i) => `
    <button class="book-card" style="--i:${i}" onclick="openBookDetail('${book.id}')">
      <div class="book-cover">${coverMarkup(book, false)}</div>
      <h3 class="book-title">${escapeHtml(book.title)}</h3>
      <p class="book-author">${escapeHtml(book.author)}</p>
      <span class="status-badge status-${book.statusClass}">${escapeHtml(book.status)}</span>
    </button>
  `).join('');
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

/* ---------- Orden de lectura ---------- */
function renderReadingOrder() {
  // Vacío
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
      bookId: "Fully Charged",
      autor: "Nicole Parker",
      imagen: "https://files.catbox.moe/ss2vl3.png",
      descripcion: "Jewel y su Conejito."
    },
    {
      id: "nsfw-2",
      nombre: "Angelina, Absurdo, Blabbo x Rebecca",
      libro: "Hello, Nurse!",
      bookId: "Hello, Nurse!",
      autor: "Nicole Parker",
      imagen: "https://files.catbox.moe/cfsuac.webp",
      descripcion: "Ritual"
    },
    {
      id: "nsfw-3",
      nombre: "Angelina x Blabbo",
      libro: "Hello, Nurse!",
      bookId: "Hello, Nurse!",
      autor: "Nicole Parker",
      imagen: "https://files.catbox.moe/cfsuac.webp",
      descripcion: "Momento de Rebecca y Blabbo"
    },
    {
      id: "nsfw-4",
      nombre: "Wattson x Jewel 2",
      libro: "Fully Charged",
      bookId: "Fully Charged",
      autor: "Holly Wilde",
      imagen: "URL_DE_TU_NUEVA_IMAGEN",
      descripcion: "Otra escena de Jewel y su Conejito."
    }
  ],
  sfw: [
    {
      id: "sfw-1",
      nombre: "Paisaje de Nimbus",
      libro: "Nimbus",
      bookId: "Nimbus",
      autor: "Nicole Parker",
      imagen: "https://m.media-amazon.com/images/I/81R8l1TBpWL._SY425_.jpg",
      descripcion: "Ilustración del paisaje de Nimbus al atardecer."
    }
  ]
};

// ============================================
//  AUTORES DE ILUSTRACIONES
// ============================================

window.abrirAutoresIlustraciones = function(categoria) {
  // Solo mostramos la advertencia si es NSFW
  if (categoria === 'nsfw') {
    // Mostrar el popup de advertencia
    if (window.Telegram && Telegram.WebApp) {
      Telegram.WebApp.showPopup({
        title: '⚠️ Advertencia',
        message: 'El contenido presentado es para personas mayores de 18 años.\n\nCréditos respectivos a cada autor.',
        buttons: [
          { id: 'cancel', type: 'cancel', text: 'Cancelar' },
          { id: 'accept', type: 'default', text: 'Soy mayor de 18 años' }
        ]
      }, function(buttonId) {
        if (buttonId === 'accept') {
          // Si acepta, navegar a la sección
          categoriaIlustraciones = categoria;
          autorSeleccionado = null;
          openScreen('ilustraciones-autores');
        }
        // Si es 'cancel' o se cierra, no hace nada
      });
    } else {
      // Fallback para navegadores web (por si acaso)
      if (confirm('¿Eres mayor de 18 años para ver este contenido?')) {
        categoriaIlustraciones = categoria;
        autorSeleccionado = null;
        openScreen('ilustraciones-autores');
      }
    }
  } else {
    // Para SFW, no mostrar advertencia
    categoriaIlustraciones = categoria;
    autorSeleccionado = null;
    openScreen('ilustraciones-autores');
  }
};

function renderAutoresIlustraciones() {
  const grid = document.getElementById('autoresGrid');
  if (!grid) return;
  
  const items = ILUSTRACIONES[categoriaIlustraciones] || [];
  
  const autoresMap = {};
  items.forEach(item => {
    autoresMap[item.autor] = (autoresMap[item.autor] || 0) + 1;
  });
  
  const autores = Object.keys(autoresMap);
  
  if (autores.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <span class="empty-state-icon">🖼️</span>
        <h3>No hay ilustraciones</h3>
        <p>No hay ilustraciones disponibles en esta categoría.</p>
      </div>
    `;
    return;
  }

  const colores = ['#eeb0c0', '#c9a3c2', '#f3d9ad', '#b8d4e3', '#d9ecda', '#f6e6c4', '#e6e1ea'];
  
  grid.innerHTML = autores.map((autor, index) => {
    const inicial = autor.charAt(0).toUpperCase();
    const colorFondo = colores[index % colores.length];
    const count = autoresMap[autor];
    
    return `
      <div class="autor-card" onclick="abrirGaleriaAutor('${autor}')">
        <div class="autor-avatar" style="background:${colorFondo};">
          ${inicial}
        </div>
        <div class="autor-name">${escapeHtml(autor)}</div>
        <div class="autor-count">${count} ${count === 1 ? 'ilustración' : 'ilustraciones'}</div>
      </div>
    `;
  }).join('');
}

window.abrirGaleriaAutor = function(autor) {
  autorSeleccionado = autor;
  mostrarIlustraciones(categoriaIlustraciones, categoriaIlustraciones === 'nsfw' ? 'nsfwGrid' : 'sfwGrid');
  openScreen(categoriaIlustraciones);
};

function mostrarIlustraciones(categoria, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;
  
  let items = ILUSTRACIONES[categoria] || [];
  if (autorSeleccionado) {
    items = items.filter(item => item.autor === autorSeleccionado);
  }
  
  if (items.length === 0) {
    contenedor.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🖼️</span>
        <h3>No hay ilustraciones</h3>
        <p>${autorSeleccionado ? 'Este autor no tiene ilustraciones en esta categoría.' : 'No hay ilustraciones disponibles.'}</p>
      </div>
    `;
    return;
  }

  // Si hay un autor seleccionado, agrupar por libro
  if (autorSeleccionado) {
    const grupos = {};
    items.forEach(item => {
      if (!grupos[item.bookId]) {
        grupos[item.bookId] = {
          bookId: item.bookId,
          libro: item.libro,
          autor: item.autor,
          imagenes: []
        };
      }
      grupos[item.bookId].imagenes.push(item);
    });

    const gruposArray = Object.values(grupos);
    window.listaIlustracionesActual = gruposArray;

    contenedor.innerHTML = gruposArray.map((grupo) => {
      const primeraImagen = grupo.imagenes[0];
      return `
        <div class="illustration-card" onclick="abrirGaleriaLibro('${categoria}', '${grupo.bookId}')">
          <img src="${primeraImagen.imagen}" alt="${grupo.libro}" loading="lazy">
          <div class="illustration-name">${escapeHtml(grupo.libro)}</div>
          <div style="font-size: 12px; color: var(--muted); margin-top: 2px;">${grupo.imagenes.length} ilustraciones</div>
        </div>
      `;
    }).join('');
  } else {
    // Sin autor seleccionado, mostrar todas las ilustraciones
    window.listaIlustracionesActual = items;
    contenedor.innerHTML = items.map((item, index) => `
      <div class="illustration-card" onclick="abrirDetalleIlustracion('${categoria}', '${item.id}', ${index})">
        <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">
        <div class="illustration-name">${escapeHtml(item.nombre)}</div>
      </div>
    `).join('');
  }
}

// ============================================
//  GALERÍA DE ILUSTRACIONES POR LIBRO
// ============================================

window.abrirGaleriaLibro = function(categoria, bookId) {
  const items = ILUSTRACIONES[categoria] || [];
  const imagenes = items.filter(item => item.bookId === bookId && item.autor === autorSeleccionado);
  if (imagenes.length === 0) return;

  window.galeriaImagenes = imagenes;
  window.galeriaIndex = 0;
  window.galeriaCategoria = categoria;

  renderGaleriaLibro();
  openScreen('illustration-detail');
};

function renderGaleriaLibro() {
  const imagenes = window.galeriaImagenes;
  const index = window.galeriaIndex || 0;
  if (!imagenes || imagenes.length === 0) return;

  const item = imagenes[index];
  const detailEl = document.getElementById('illustrationDetail');
  if (!detailEl) return;

  // Navegación entre ilustraciones (flechas)
  const navButtons = imagenes.length > 1 ? `
    <div class="detail-nav">
      <button class="nav-arrow" onclick="cambiarIlustracion(-1)" ${index === 0 ? 'disabled' : ''}>‹</button>
      <span class="nav-counter">${index + 1} / ${imagenes.length}</span>
      <button class="nav-arrow" onclick="cambiarIlustracion(1)" ${index === imagenes.length - 1 ? 'disabled' : ''}>›</button>
    </div>
  ` : '';

  // Miniaturas de todas las ilustraciones del libro
  const thumbnails = imagenes.map((img, i) => `
    <div class="thumbnail ${i === index ? 'active' : ''}" onclick="cambiarIlustracionA(${i})">
      <img src="${img.imagen}" alt="${img.nombre}">
    </div>
  `).join('');

  detailEl.innerHTML = `
    <div class="galeria-libro">
      <div class="galeria-header">
        <h2>${escapeHtml(item.libro)}</h2>
        <p class="galeria-autor">${escapeHtml(item.autor)}</p>
      </div>
      <div class="galeria-imagen-principal">
        <img src="${item.imagen}" alt="${item.nombre}">
      </div>
      ${navButtons}
      <div class="galeria-info">
        <h3>${escapeHtml(item.nombre)}</h3>
        <p class="galeria-desc">${escapeHtml(item.descripcion)}</p>
        <button class="btn-libro" onclick="openBookDetail('${item.bookId}')">📚 Ver libro</button>
      </div>
      <div class="galeria-thumbnails">
        ${thumbnails}
      </div>
      <button class="back-btn" onclick="goBack()" style="margin-top:16px;">← Volver</button>
    </div>
  `;
}

// Cambiar a la siguiente/anterior ilustración
window.cambiarIlustracion = function(direccion) {
  const imagenes = window.galeriaImagenes;
  if (!imagenes) return;
  let nuevoIndex = (window.galeriaIndex || 0) + direccion;
  if (nuevoIndex < 0) nuevoIndex = imagenes.length - 1;
  if (nuevoIndex >= imagenes.length) nuevoIndex = 0;
  window.galeriaIndex = nuevoIndex;
  renderGaleriaLibro();
};

// Cambiar a una ilustración específica (desde miniatura)
window.cambiarIlustracionA = function(index) {
  const imagenes = window.galeriaImagenes;
  if (!imagenes || index < 0 || index >= imagenes.length) return;
  window.galeriaIndex = index;
  renderGaleriaLibro();
};

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
          <h2>${escapeHtml(item.nombre)}</h2>
          <p class="detail-book">📖 <strong>Libro:</strong> ${escapeHtml(item.libro)}</p>
          <p class="detail-desc">${escapeHtml(item.descripcion)}</p>
          <button class="btn-libro" onclick="openBookDetail('${item.bookId}')">📚 Ver libro</button>
        </div>
      </div>
    `;
  }
  openScreen('illustration-detail');
};

// ============================================
//  AUTORES (tarjetas en la sección "Autores")
// ============================================

const AUTORES = [
  {
    id: "gm-fairy",
    nombre: "G.M. Fairy",
    descripcion: "Libros de romance, Fantasía y Ciencia ficción",
    imagen: "https://i.postimg.cc/25rZPQWB/1.png",
    series: [
      {
        id: "ghostlight",
        nombre: "Serie Ghostlight Falls",
        libros: [
          { number: "01", title: "The Totally Typical Tale of Mappy McMapface", id: "The Totally Typical Tale Of Mappy McMapface" },
          { number: "02", title: "Paper and Passion", id: "Paper and Passion" },
          { number: "03", title: "Romanced By The Rat", id: "Romanced By The Rat" },
          { number: "04", title: "Bread by the Grim", id: null },
          { number: "05", title: "Cooking Up a Demon", id: null },
          { number: "06", title: "Twi-Flight", id: null },
          { number: "07", title: "Taking a Tumble", id: null },
          { number: "08", title: "Defined and Defiled", id: null },
          { number: "09", title: "Hello, Nurse!", id: "Hello, Nurse!" },
          { number: "10", title: "Her Wonderful Wonder Belle", id: null },
          { number: "11", title: "Knot Falling in Love", id: null },
          { number: "12", title: "Cirrus About You", id: null }
        ]
      }
    ],
    librosUnicos: [
      { title: "Step Brother Bear", id: "Step Brother Bear" },
      { title: "Bad BeehAvior", id: "Bad BeehAvior" }
    ]
  },
  {
    id: "wolf-king",
    nombre: "Король волков",
    descripcion: "РОМЭНТЕЗИ • 3 книги",
    imagen: "https://i.postimg.cc/Y2ZmpKgp/2.png",
    series: [
      {
        id: "wolf-king-saga",
        nombre: "Saga del Rey Lobo",
        libros: [
          { number: "01", title: "Книга 1", id: "Pounded By Poseidon" },
          { number: "02", title: "Книга 2", id: "Say My Name" },
          { number: "03", title: "Книга 3", id: "MONSTROUS" }
        ]
      }
    ],
    librosUnicos: [
      { title: "Fervor", id: "Fervor" }
    ]
  },
  {
    id: "mortal-vows",
    nombre: "Смертельные клятвы",
    descripcion: "МАФИОЗНАЯ РОМАНТИКА • 5 книг",
    imagen: "https://i.postimg.cc/BnGLKTMB/3.png",
    series: [
      {
        id: "mortal-vows-saga",
        nombre: "Saga de las Cláusulas Mortales",
        libros: [
          { number: "01", title: "Смертельные клятвы", id: "The Totally Typical Tale Of Mappy McMapface" },
          { number: "02", title: "Праведные клятвы", id: "Pounded By Poseidon" },
          { number: "03", title: "Коварные клятвы", id: "Say My Name" },
          { number: "04", title: "Безумные клятвы", id: "MONSTROUS" },
          { number: "05", title: "Неправильные клятвы", id: "Fervor" }
        ]
      }
    ],
    librosUnicos: []
  }
];


// ============================================
//  RENDERIZAR AUTORES (tarjetas)
// ============================================

function renderAutores() {
  const grid = document.getElementById('seriesGrid');
  if (!grid) return;

  grid.innerHTML = AUTORES.map(autor => `
    <div class="serie-card" style="background-image: url('${autor.imagen}');" onclick="openAutorDetail('${autor.id}')">
      <div class="overlay">
        <h3>${escapeHtml(autor.nombre)}</h3>
        <div class="serie-sub">${escapeHtml(autor.descripcion)}</div>
        <div class="serie-btn">Порядок чтения ›</div>
      </div>
    </div>
  `).join('');
}

// ============================================
//  DETALLE DE AUTOR (series y libros únicos)
// ============================================

let autorSeleccionadoDetalle = null;

window.openAutorDetail = function(autorId) {
  const autor = AUTORES.find(a => a.id === autorId);
  if (!autor) return;
  
  autorSeleccionadoDetalle = autorId;
  
  const categorias = [];
  
  autor.series.forEach(serie => {
    categorias.push({
      id: serie.id,
      label: `📚 ${serie.nombre}`,
      type: 'series',
      seriesData: serie
    });
  });
  
  if (autor.librosUnicos && autor.librosUnicos.length > 0) {
    categorias.push({
      id: 'libros-unicos',
      label: '📖 Libros únicos',
      type: 'books',
      bookIds: autor.librosUnicos.map(libro => libro.id)
    });
  }
  
  renderCategoryMenuDetail(categorias);
  openScreen('serie-detail');
};

function renderCategoryMenuDetail(categorias) {
  const menu = document.getElementById('categoryMenuDetail');
  if (!menu) return;
  
  menu.innerHTML = categorias.map(cat => `
    <button class="category-btn" data-category="${cat.id}" onclick="selectCategoryDetail('${cat.id}')">
      ${cat.label}
    </button>
  `).join('');
  
  if (categorias.length > 0) {
    selectCategoryDetail(categorias[0].id);
  }
}

function selectCategoryDetail(categoryId) {
  document.querySelectorAll('#categoryMenuDetail .category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === categoryId);
  });
  
  const autor = AUTORES.find(a => a.id === autorSeleccionadoDetalle);
  if (!autor) return;
  
  let categoria = null;
  let seriesData = null;
  
  for (const serie of autor.series) {
    if (serie.id === categoryId) {
      categoria = {
        id: serie.id,
        type: 'series',
        seriesData: serie
      };
      break;
    }
  }
  
  if (!categoria && categoryId === 'libros-unicos') {
    categoria = {
      id: 'libros-unicos',
      type: 'books',
      bookIds: autor.librosUnicos.map(libro => libro.id)
    };
  }
  
  if (!categoria) return;
  
  const container = document.getElementById('categoryContentDetail');
  if (!container) return;
  
  if (categoria.type === 'series') {
    const serie = categoria.seriesData;
    container.innerHTML = `
      <div class="serie-detail-card">
        <div class="serie-detail-header">
          <h2>${escapeHtml(serie.nombre)}</h2>
        </div>
        <div class="serie-detail-body">
          <div class="order-list">
            ${serie.libros.map(libro => `
              <div class="order-item" onclick="openBookDetail('${libro.id}')" style="cursor:pointer;">
                <span class="num">${libro.number}</span>
                <div class="info">
                  <div class="title">${escapeHtml(libro.title)}</div>
                </div>
                <span class="status">✅ Disponible</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (categoria.type === 'books') {
    const booksList = categoria.bookIds
      .map(id => BOOKS.find(b => b.id === id))
      .filter(b => b !== undefined);
    
    container.innerHTML = `
      <div class="books-grid">
        ${booksList.map(book => `
          <button class="book-card" onclick="openBookDetail('${book.id}')">
            <div class="book-cover">${coverMarkup(book, false)}</div>
            <h3 class="book-title">${escapeHtml(book.title)}</h3>
            <p class="book-author">${escapeHtml(book.author)}</p>
          </button>
        `).join('')}
      </div>
    `;
  }
}

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
  renderUpcomingBooks();
  renderUpdates();
  mostrarIlustraciones('nsfw', 'nsfwGrid');
  mostrarIlustraciones('sfw', 'sfwGrid');
  renderAutores();
  renderAutoresIlustraciones();
});
