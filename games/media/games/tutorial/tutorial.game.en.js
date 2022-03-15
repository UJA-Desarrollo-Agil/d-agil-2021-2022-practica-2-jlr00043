// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Te encuentras en tu cuarto</h1>\
        <img src='media/games/tutorial/habitacion.jpg' class='float_right' align='top' width='200px' height='200px'>\
        <p>Te encuentras en tu cuarto por la mañana y te acuerdas que tienes clase a la que no puedes saltártela, por lo que vas a tener que ser un vago\
		que llevas 4 días sin ir a clase, por lo que te preparas y bajas a la universidad.</p>\
        \
        <p>Al estar llegando, ves que pasa algo raro, debido a que hay 4 coches de policía aparcados en la puerta y mucha gente en la puerta del A4. Ves que hay\
		un par de amigos tuyos por allí y le preguntas y resulta que ha aparecido un cadáver en el cuarto de baño esta mañana y se encuentra la policía investigando el caso.</p>\
		<p>Haz click <a href='todo'>aquí</a> para continuar.... </p>"
    ),
    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    todo: new undum.SimpleSituation(
		"<p>Decides ir a clase pero no puedes pensar cómo ha podido haber un asesinato en tu universidad, por lo que no te deja prestar atención lo que está diciendo el profesor.</p>\
        <p>En mitad de clase te propones salir de clase para enterarte de cómo ha sido, por lo que te levantas y sales de la clase con dirección a los baños, pero va a ser complicado\
		entrar debido a que hay un par de policías asegurándose que no entre nadie.</p>\
		<p>Te acercas a ellos y ves que uno de los policías resulta que es un amigo de tu padre que está cada dos por tres en tu casa de cervezas y te pones a <a href='informacion'>hablar</a> con el.</p>",
        {
            actions: {
                'do-something': "<p></p>"
            }
        }
    ),
    informacion: new undum.SimpleSituation(
        "<p>Te cuenta que la pasada noche había aparecido un muchacho de 26 años muerto y que estaban investigando si había podido ser un asesinato o un suicidio.\
		Parecia que se trataba de un chico de Ingeniería Informática y que estaba metido en algunos sitios turbios, me comentaron los agentes y les preguntas si puedes\
		<a href='oneshot2'>investigar</a> qué podría haber sido.</p>",
        {
            actions: {
                "one-time-action": "<p></p>"
            }
        }
    ),
	oneshot2: new undum.SimpleSituation(
        "<p>Tras varios intentos de persuadir el policía, al final accede a dejarte pasar al cuarto de baño, por lo que entras con cuidado y te encuentras allí el cadaver\
		en el suelo con el móvil de la víctima, lo que enciendes la pantalla y ves que tiene 40 llamadas perdidas de su madre, pero no tiene ningún mensaje sospechoso pero podría deberse que no tenía conexión a internet\
		en ese momento, por lo que vas a tener que decidir entre <a href='activar'>activar</a> conexión a internet o <a href='dejarlo'>dejarlo</a> y seguir viendo la escena del crimen. </p>",
        {
            actions: {
                "one-time-action": "<p></p>"
            }
        }
    ),
	activar: new undum.SimpleSituation(
        "<img src='media/games/tutorial/movil.jpg' class='float_right' align='top' width='200px' height='200px'>\
		<p>Decides que lo mejor es activar los datos del móvil para ver si ha llegado un mensaje importante, enciendes la pantalla del móvil y tras un par de segundos, le llegan al móvil todos los mensajes y \
		resulta que a la víctima le dejo su novia por haberse metido en el mundo de la venta de drogas porque eso sólo podía en que lo pillase la policía tarde o temprano y lo metiesen en la cárcel.\
		Tras haber estado revisando el móvil, entra el policía que te habia dejado entrar a los baños y te dice que te tienes que marchar que en 10 minutos iba a llegar su superior y que no ibas a poder seguir dentro. Por lo tanto\
		decides que va siendo hora de <a href='volver'>volver</a> a casa.</p>",
        {
            enter: function(character, system, to){
				system.setQuality("pistas", 1);
				system.setQuality("movil",  1);
			}
        }
    ),
	dejarlo: new undum.SimpleSituation(
		"<img src='media/games/tutorial/pastillas.jpg' class='float_right' align='top' width='200px' height='200px'>\
        <p>Dejas el móvil donde se encontraba cuidadosamente, y sigues investigando, y al lado del lavabo se encontraba un bote de pastillas vacío que todo apuntaba que había sido una intoxicación\
		por parte de la víctima que lo habría llevado al suicidio, desafortunadamente. Llamas a tu colega, el policía, tras descubrirlo y dijo que se fuese de allí que estaba a punto de venir su superior y si le\
		veía dentro del cuarto de baño, iba a apuntar a ser el principal sospechoso él. Tras todo lo ocurrido, no vas a poder seguir prestando atención a las maravillosas clases de hoy que te esperaban por lo tanto decides\
		<a href='volver'>volver</a> a casa.</p>",
        {
            enter: function(character, system, to){
				system.setQuality("pistas", 1);
				system.setQuality("pastillas",  1);
			}
        }
    ),
	volver: new undum.SimpleSituation(
        "<p>Una vez que sales del edificio te pones de camino a tu casa, y ves como están llegan 4 coches de policía más a la universidad y una ambulancia con el médico que está a cargo del caso.</p>\
		<img src='media/games/tutorial/end.jpg' width='500px' height='200px'>",
        {
            actions: {
                "one-time-action": "<p></p>"
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topic"],
            heading: "Showing a Progress Bar",
            displayOrder: 4,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 7,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    pistas: new undum.IntegerQuality(
        "Pistas", {priority:"0001", group:'stats'}
    ),
	movil: new undum.YesNoQuality("Movil",{
	priority:"0002",
	group:'stats',
	yesDisplay:"Sí",
	noDisplay:"No"}
	),
	pastillas: new undum.YesNoQuality("Pastillas",{
	priority:"0002",
	group:'stats',
	yesDisplay:"Sí",
	noDisplay:"No"}
	)
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.pistas = 0;
	character.qualities.movil = 0;
	character.qualities.pastillas = 0;
    system.setCharacterText("<p>Pistas encontradas</p>");
};
