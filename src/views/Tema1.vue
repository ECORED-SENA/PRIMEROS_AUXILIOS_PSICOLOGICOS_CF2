<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Valoración y activación de ruta

    .row.justify-content-center.mb-4
      .col-lg-7
        p Una situación de crisis puede ser desencadenada por una emergencia que atañe a muchas personas o por un evento traumático que involucra a una sola víctima, en cualquiera de #[span.txt-blue los escenarios los primeros auxilios psicológicos (conocidos como PAP) deben mantener tres condiciones que permiten activar las rutas de atención], para prestar ayuda en el lugar que se presenten y direccionar las intervenciones.
        .cp.mb-4
          .waves--h.d-none.d-lg-block
          .cp_title
            .crd.crd-verde        
              p.mb-0 Las condiciones para activar rutas de atención en casos de crisis son: observar, escuchar y conectar, las que se explican con mayor detalle a continuación.

      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/t1_01.png", alt="alt").m-auto

    p.mb-4 #[span.txt-blue La observación es la forma de valorar la situación y determinar cuáles son las condiciones del entorno], dentro de los observables a tener presentes están las siguientes:

    .row.justify-content-center.gx-0.mb-4
      .col-lg-4
        .crd.crd-darkBlue.crd--100
          figure.mb-4
            img(src="@/assets/curso/tema1/t1_02.svg", alt="alt", style="width:100px;")
          h4.txt-mint.mb-4 Seguridad del entorno
          p.text-white Determinar los peligros que pueden estar presentes en la zona, por ejemplo, que el conflicto que desencadena la crisis esté activo o que en caso de una emergencia por desastre natural haya causado daños estructurales que pueden poner en peligro la vida de las personas, incluso la de quien acude a prestar la ayuda. 
      .col-lg-4
        .crd.crd-blue.crd--100
          figure.mb-4
            img(src="@/assets/curso/tema1/t1_03.svg", alt="alt", style="width:100px;")
          h4.txt-mint.mb-4 Seguridad del entorno
          p.text-white Es necesario identificar si se presentan heridas, si están expuestas, sin ropa, si requieren una ayuda especializada o si pueden sufrir de alguna forma de discriminación por una necesidad especial que presentan, ya sea por condiciones de discapacidades físicas o mentales o pertenencia a un grupo étnico.  
      .col-lg-4
        .crd.crd-darkBlue.crd--100
          figure.mb-4
            img(src="@/assets/curso/tema1/t1_04.svg", alt="alt", style="width:100px;")
          h4.txt-mint.mb-4 Seguridad del entorno
          p.text-white La observación debe permitir determinar el estado emocional y psicológico de la persona, si la alteración es grave y presenta síntomas evidentes de agresividad, o está totalmente alejada de la realidad, tiembla y no responde con atención a las preguntas y estímulos, es necesario solicitar y activar las rutas de atención en salud para ser valorado en servicios de urgencias. Si en la crisis usted determina que puede ser manejada en sitio, inicie el protocolo.

    .cp.mb-5
      .waves.d-none.d-lg-block
      .cp_title 
        p.mb-0 #[span.txt-blue La escucha es la mejor herramienta de acercamiento empático] que debe realizarse de forma consciente a través de los sentidos, escuchando con los ojos, con los oídos, con la piel, con las emociones; es decir, prestar toda la atención de forma activa, entendiendo las condiciones del otro, sin juzgarlas.

    .clrBG.clrBG__mint.mb-5
      p.text-center.mb-5 A continuación, se describen los pasos a seguir en el proceso de activación de escucha:

      SlyderE(indicadores="derecha")
        .row        
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Acérquese las personas que pueden estar necesitando el apoyo
            ul.lista-ul--color.blt-blue
              li 
                i.fas.fa-check-circle
                | Preséntese con su nombre y el de la organización que representa (solo en caso de que así sea).
              li 
                i.fas.fa-check-circle
                | Exprese su intención de ayuda y escuche si la persona quiere recibirla.
              li 
                i.fas.fa-check-circle
                | Busque un lugar tranquilo y seguro para la conversación.
              li 
                i.fas.fa-check-circle
                | Haga todo lo posible para que la persona se sienta cómoda, sin saturarla de información o exceso de confianza.
              li 
                i.fas.fa-check-circle
                | Ofrézcale agua y ayúdela a acomodarse.
              li 
                i.fas.fa-check-circle
                | Proteja a la persona de cualquier peligro.
              li 
                i.fas.fa-check-circle
                | Proteja la privacidad de la persona.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/t1_05.png', alt='')
        .row        
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Pregunte qué necesita la persona en ese momento
            ul.lista-ul--color.blt-blue
              li 
                i.fas.fa-check-circle
                | No siempre lo evidente es lo que se requiere, puede ser que la persona que presta ayuda perciba que debe cubrirla o calmarla, pero la víctima puede estar necesitando ir al baño, llamar a un familiar, rescatar la mascota… las posibilidades son muchas y es mejor no suponer.
              li 
                i.fas.fa-check-circle
                | Trate de indagar qué sería lo más importante que ellos requieren y ayúdelos a establecer las prioridades.            
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/t1_06.png', alt='')
        .row        
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Escuche y preste ayuda para dar tranquilidad
            ul.lista-ul--color.blt-blue
              li 
                i.fas.fa-check-circle
                | Permanezca cerca de la persona.
              li 
                i.fas.fa-check-circle
                | No la presione para que haga algo que usted considere necesario.
              li 
                i.fas.fa-check-circle
                | No la obligue a hablar.
              li 
                i.fas.fa-check-circle
                | Si la persona decide contar lo que le ha pasado, escuche y guarde silencio.
              li 
                i.fas.fa-check-circle
                | Si hay angustia ayúdele a calmarse manejando un tono de voz suave, ayudándole a controlar su respiración, mirándola a los ojos.
              li 
                i.fas.fa-check-circle
                | Recuérdele a la persona que ya está a salvo y que usted está ahí para ayudar.   
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/t1_07.png', alt='')

    p.mb-5 #[span.txt-blue La conexión se desarrolla en el marco de las necesidades específicas de la persona afectada] teniendo en cuenta la siguiente escala:

    .row.justify-content-center.mb-5
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Necesidades básicas")
            .col-12
              p Como refugio, alimentos, agua, higiene personal, entre otros. 
          .row(titulo="Necesidades de salud")
            .col-12
              p Si requiere servicios de salud prioritarios debe comunicarse con las líneas de emergencia de cada ciudad y solicitar el apoyo. 
          .row(titulo="Información fidedigna")
            .col-12
              p Las personas en una crisis se sienten desubicadas, en ocasiones no entienden lo que les pasó, es importante brindar la información que tenga clara de los hechos, informar acerca de los derechos y del proceso a seguir.
          .row(titulo="Contacto con redes de apoyo")
            .col-12
              p Es necesario ayudar a la persona a ponerse en contacto con su red de apoyo, facilitar el medio o hacerlo directamente quien presta la ayuda, en caso de que la persona no se sienta en condiciones. 
          .row(titulo="Acceso a apoyo específico relacionado con la propia cultura o religión")
            .col-12
              p En ocasiones la persona pide tener contacto con su líder de la comunidad o personas que hacen parte de su cultura y creencias, pero lo más importante es comprender que la espiritualidad es una excelente forma de superar dificultades. Acudir a la ideología religiosa de las personas y su creencia que invita a la fe, ayuda a reestructurar la confianza, la idea de Dios, cualquiera que sea, puede ayudar a que la persona se sienta mejor, además, la fe y la certeza de no estar solo en momentos de angustia genera seguridad.
          .row(titulo="Necesidad de generar autonomía")
            .col-12
              p Permita que la persona participe de las decisiones a tomar frente a su situación, cada crisis tiene su particularidad dependiendo del  evento o trauma vivido. En ocasiones deben ser remitidas a refugios o activar ruta de atención, por lo cual se les debe dar claridad en el proceso o acciones a seguir, cabe resaltar que la persona puede estar en un estado de estrés que no le permite pensar con claridad, por tanto, estas decisiones deben ser consultadas con las redes de apoyo de forma ágil y pertinente.
          .row(titulo="Ayudar a las personas a recuperar el control en el momento y hacia delante")
            .col-12
              p Es necesario ayudar a las personas a generar procesos adaptativos para enfrentar el problema.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/t1_08.jpg", alt="alt").m-auto

    p.mb-5 Se deben comprender, entonces, las herramientas de afrontamiento basadas en el problema para orientar las personas y usarlas en el momento que se requieran, en el siguiente gráfico interactivo se presentan:

    .bg_waves_01
      .row.justify-content-center
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/info_interactiva_01.svg', alt='herramientas de afrontamiento')

            .tarjeta.icrd-orange.p-3(x="81%" y="40%" numero="1")       
              p.mb-0 Entender el problema ocurrido sin juzgarlo como bueno o malo, simplemente entender. 

            .tarjeta.icrd-orange.p-3(x="50%" y="0%" numero="2")       
              p.mb-0 No hacer la situación más difícil, poniendo obstáculos frente a las soluciones.

            .tarjeta.icrd-orange.p-3(x="50%" y="55%" numero="3")       
              p.mb-0 Relajarse para poder analizar lo ocurrido desde diferentes circunstancias.

            .tarjeta.icrd-orange.p-3(x="20%" y="20%" numero="4")       
              p.mb-0 Confiar en las propias capacidades.

            .tarjeta.icrd-orange.p-3(x="20%" y="55%" numero="5")       
              p.mb-0 Entender los límites personales y las vulnerabilidades.

            .tarjeta.icrd-orange.p-3(x="50%" y="37%" numero="6")       
              p.mb-0 Comprender que todos necesitan ayuda y dejar que se reciba.

      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1  Protocolo de ACERCARSE

      .cp.mb-5
        .waves.d-none.d-lg-block
        .cp_title 
          p.mb-0  El protocolo de intervención #[span.txt-blue ACERCARSE] es una herramienta de organización para la aplicación de los primeros auxilios psicológicos; la persona que presta la atención, podrá realizar las adaptaciones del protocolo de acuerdo con las condiciones individuales de la o las personas atendidas.

      .row.justify-content-center.mb-5
        .col-lg-5
          p.mb-4 En el siguiente recurso de aprendizaje se describe el significado de cada letra del protocolo, con una descripción corta para mejor comprensión (adaptado de García, Ruiz, Salinero y Vicario, 2019, p. 252):
          figure.mb-4
            img(src="@/assets/curso/tema1/t1_09.svg", alt="alt", style="width:500px;").m-auto
        .col-lg-7
          LineaTiempoD.color-primario
            .row(numero="A" titulo="Ambiente")              
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Obtener información para contextualizar el incidente.
                li.mb-0
                  i.fas.fa-angle-right
                  | Realizar una evaluación para hacerse una idea de las necesidades, seleccionar el paciente y aproximarse.
                       
            .row(numero="C" titulo="Contacto")              
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Utilizar la comunicación verbal, con respeto, confianza y ambiente de tranquilidad.
                li.mb-0
                  i.fas.fa-angle-right
                  | Comenzar con las primeras preguntas.         

            .row(numero="E" titulo="Evaluación")              
              p.mb-0 Realizar la evaluación del paciente en cuanto a afectación, orientación y recursos de los que dispone tanto personales como sociales.

            .row(numero="R" titulo="Restablecimiento emocional")              
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Aprovechando el ambiente de confianza, potenciar la escucha activa y la expresión emocional.
                li.mb-0
                  i.fas.fa-angle-right
                  | Se deben ofrecer técnicas de desactivación (respiración, etc.).

            .row(numero="C" titulo="Comprensión de la crisis")              
              p Facilitar información sobre cuáles suelen ser las reacciones esperadas y habituales.

            .row(numero="A" titulo="Activación")              
              p Con la colaboración del paciente comenzar a crear un plan de acción.

            .row(numero="R" titulo="Recuperación")              
              p Animar y promover la vuelta a la independencia, con acompañamiento si es necesario, así como valorar la necesidad de derivación a especialista en el hospital.

            .row(numero="SE" titulo="Seguimiento")              
              p Animar y promover la vuelta a la independencia, con acompañamiento si es necesario, así como valorar la necesidad de derivación a especialista en el hospital.


    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Etapas

    p.mb-5 A continuación, se abordarán las etapas de protocolo #[span.txt-blue ACERCARSE], con el fin de brindar elementos clave en la aplicación del protocolo, tomando como referencia el manual presentado por Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja (2003), en el texto Apoyo psicológico basado en la comunidad.

    .bg_waves_avatar.mb-5
      .row.justify-content-center
        .col-lg-5.mb-5.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/t1_10.png", alt="alt", style="width:500px;").m-auto
        .col-lg-7
          h3.pill Ambiente
          p.mb-4 Es la primera fase y está directamente relacionada con el contacto inicial que se establece entre la persona que presta ayuda y la comunidad o persona afectada, aquí se realiza una contextualización de los hechos, si lo sucedido está en el marco de un desastre o un acontecimiento que afecta una comunidad, es necesario analizar la magnitud de los hechos y el nivel de afectación de las víctimas. #[span.txt-blue La evaluación del ambiente permite determinar las necesidades e intervenciones se requieren a nivel individual y colectivo]. 
          .crd.crd-verde.mb-4
            p.mb-0 En este primer contacto se establecen las #[span.txt-blue prioridades de atención], seguramente hay personas que requieren más apoyo que otras o, en caso de ser una condición individual, se determina si requiere PAP, atención profesional o una orientación para que logre equilibrar la condición actual. Es importante determinar el nivel de peligrosidad que la persona o las personas pueden representar para ellas mismas o para los demás, dado que una situación de crisis puede desencadenar reacciones violentas, ataques de pánico, pérdida de la conciencia frente a los actos, desorientación. 
          p.mb-0 #[span.txt-blue Esta fase termina con la selección de la o las personas que requieren los PAP y la evaluación inicial de las mismas].

    h3.pill Contacto

    p.mb-4 Habiendo identificado a las personas que requieren de la aplicación de los PAP, inicia la etapa de contacto con la persona afectada. 

    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        p.mb-0 El primer momento involucra una excelente #[span.txt-blue comunicación verbal y no verbal]. El qué se dice y cómo se dice, son fundamentales para generar confianza y trasmitir tranquilidad. Aquí juega un papel importante el tono de voz y la frecuencia del lenguaje ya que el objetivo es desactivar a la persona, bajar su ansiedad y ayudarle a entender lo que está pasando. Por este motivo hablar suave, calmado, utilizando las palabras adecuadas, utilizar lenguaje afectivo, mirar a los ojos, mantener una cercanía que produzca seguridad y estar al lado de la persona afectada son algunos de los aspectos que se deben contemplar.

      .col-lg-8
        .row.gx-0.gy-0
          .col-lg-6
            .crd.crd-lightBlue.crd--100              
              figure.h-center
                img(src="@/assets/curso/tema1/t1_11.svg", alt="alt", style="width:400px;").m-auto
          .col-lg-6
            .crd.crd-verde
              figure.mb-4
                img(src="@/assets/curso/dots.svg", alt="alt", style="width:65px;")
              p.mb-0 De igual manera, en esta etapa se requiere establecer una relación, intentando consolar, tranquilizar, aceptando las características individuales y lo más importante, sin emitir juicios de valor, así la persona atendida haya sido víctima de situaciones muy graves, quien presta los PAP, no es juez y no es autoridad.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-7.mb-4.mb-lg-0
        .bg_img_01
      .col-lg-5
        figure.mb-4.d-none.d-lg-block
          img(src="@/assets/curso/warpLines.svg", alt="alt", style="width:85px;")

        p #[span.txt-blue El distanciamiento psicológico] permite que la víctima se distancie de la situación que ha generado la crisis. La persona que aplica los PAP debe establecer estrategias para lograr este objetivo, tales como caminar, tomar un café y buscar finalmente un lugar tranquilo y adecuado para iniciar el abordaje.

        p De esta forma inicia el #[span.txt-blue abordaje] que consiste en realizar las primeras preguntas que permitan entender lo sucedido. Estas preguntas deben ser concretas, que permitan respuestas puntuales y objetivas, por ejemplo: #[span.txt-blue ¿qué sucedió?, ¿dónde ocurrió y porqué estabas allí?, ¿qué hiciste después de lo ocurrido?], importante tener en cuenta que las preguntas no deben llevar al desborde emocional, por tanto, deben estar dirigidas a los hechos.

    h3.pill Evaluación

    .row.mb-4
      .col-auto
        figure.mb-4.d-none.d-lg-block
          img(src="@/assets/curso/warpLines.svg", alt="alt", style="width:85px;")
      .col-lg
        p.mb-4 Una vez realizado el primer abordaje la persona que va a realizar la aplicación de los PAP, debe evaluar si está en capacidad de hacerlo, ya que puede ser un caso para ser tratado directamente con un profesional. 

    .bg_waves_01.mb-5

      h4.mb-5 Para determinar esto se debe tener en cuenta los siguientes aspectos:

      .row.justify-content-end
        .col-lg-10    
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .crd.crd-white.crd--100.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema1/t1_13.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Exploración inicial
              p.text-center Examen básico del estado mental a través de preguntas de orientación espacio-temporal: ¿qué día es hoy?, ¿sabes en qué año estamos?, ¿en qué ciudad?, ¿recuerdas dónde vives?, ¿con quién vives?

            .crd.crd-white.crd--100.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema1/t1_14.svg' alt='AvatarTop', style="width:90px;").m-auto
              h4.text-center Identificación de problemas
              p.text-center Estado emocional actual: estrés, pánico, agresividad; estado cognitivo desubicación, distorsión de la realidad, confusión, negación, culpa.

            .crd.crd-white.crd--100.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema1/t1_15.svg' alt='AvatarTop', style="width:90px;").m-auto
              h4.text-center Identificar habilidades de afrontamiento
              p.text-center Determinar si está evitando asumir la situación o si está en una posición activa para manejarla y gestionarla.

            .crd.crd-white.crd--100.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema1/t1_16.svg' alt='AvatarTop', style="width:90px;").m-auto              
              p.text-center Identificar si la persona afectada cuenta con una #[strong red de apoyo cercana] a la que se pueda acudir.

      h3.pill Restablecimiento emocional

      p.mb-5 Esta fase se enfoca en el restablecimiento del sistema adaptativo para ayudar a contrarrestar la reacción. Esto se realiza a través de los siguientes pasos:

      .row.justify-content-center.my-5
        .col-lg-10
          ImagenInfografica.color-acento-botones.my-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/info_interactiva_02.svg', alt='herramientas de afrontamiento')

            .tarjeta.icrd-orange.p-3(x="15%" y="0%" numero="1")       
              p.text-center.mb-0 Inducir la expresión de emociones a través de preguntas desencadenantes tales como: ¿quieres contarme sobre lo que sucedió?, ¿quisieras hablar conmigo?, ¿cómo te estás sintiendo?

            .tarjeta.icrd-orange.p-3(x="38%" y="100%" numero="2")       
              p.text-center.mb-0 Atención frente las expresiones verbales y no verbales que indiquen que la persona puede entrar en crisis, utilizando la escucha y la observación conscientes.

            .tarjeta.icrd-orange.p-3(x="62%" y="0%" numero="3")       
              p.text-center.mb-0 Utilizar técnicas de desactivación fisiológica que ayuden a la persona a entrar en estado de equilibrio utilizando técnicas de relajación, respiración consciente, #[i mindfulness]

            .tarjeta.icrd-orange.p-3(x="87%" y="100%" numero="4")       
              p.text-center.mb-0  Facilitar el contacto con las redes de apoyo de la persona afectada.

      h3.pill Comprensión de la crisis
      
      p.mb-5 La persona afectada debe comprender lo ocurrido y hacer conciencia de lo que se está viviendo, para ello se debe:

      .row.justify-content-center
        .col-7.col-lg-3.mb-4.mb-lg-0
          .crd.crd-darkBlue.roudBorders
            img(src='@/assets/curso/tema1/t1_17.svg' alt='AvatarTop', style="width:90px;").m-auto.mb-4 
            p.text-center.text-white.mb-0 Brindar información acerca del estrés y sus consecuencias inmediatas y en el largo plazo.
        .col-7.col-lg-3
          .crd.crd-darkBlue.roudBorders
            img(src='@/assets/curso/tema1/t1_17.svg' alt='AvatarTop', style="width:90px;").m-auto.mb-4 
            p.text-center.text-white.mb-0 Brindar información acerca del estrés y sus consecuencias inmediatas y en el largo plazo.

    .bg_waves_avatar.mb-4
      .row.justify-content-center
        .col-lg-5.mb-5.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/t1_18.png", alt="alt", style="width:500px;").m-auto
        .col-lg-7
          h3.pill Activar
          p.mb-4 En esta etapa el objetivo es preparar a la persona afectada para la acción, lo que debe contemplar lo siguiente: 
          ul.lista-ul--color.blt-blue.mb-5
            li 
              i.fas.fa-check-circle
              | Recuperar la capacidad de procesamiento cognitivo: organización de ideas, centrar a la persona en hechos y acciones concretas a seguir, después de superada la crisis.
            li 
              i.fas.fa-check-circle
              | Concertar un plan de acción, sencillo y viable que ayude a la persona afectada a recuperar y fortalecer sus recursos para enfrentar situaciones difíciles.
            li 
              i.fas.fa-check-circle
              | Establecer un contrato verbal que genere compromiso frente a las acciones a seguir.

          h3.pill Recuperación del funcionamiento
          p.mb-4 Esta etapa representa el cierre de la aplicación de los PAP y por lo general se debe tener presente:
          ul.lista-ul--color.blt-blue
            li 
              i.fas.fa-check-circle
              | Dejarle acompañado de un familiar o una persona de su red apoyo.
            li 
              i.fas.fa-check-circle
              | Orientar frente a intervenciones o pasos a seguir: traslado, rutas para entablar denuncias o reposo y tranquilidad en casa.
            li 
              i.fas.fa-check-circle
              | Planificar alojamientos o refugios en caso de requerirlo.
            li 
              i.fas.fa-check-circle
              | Recordar las actividades para el hogar que le ayudarán a mantener el equilibrio en los días próximos.


    .row.justify-content-center
      .col-lg-6.mb-4.mb-lg-0
        h3.pill Seguimiento
        p Al terminar todas las acciones que permitan regular a la persona, se invita a entablar contacto posterior para poder apoyar en un corto o mediano plazo, cualquier tipo de situación derivada de los acontecimientos vividos. Este periodo de seguimiento puede ser realizado por la misma persona que prestó la ayuda o con el apoyo de un profesional en salud mental, para lo cual se orienta a la persona para que realice las gestiones pertinentes para obtener cita con psicología o psiquiatría, según sea el caso.
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/t1_19.jpg", alt="alt").m-auto


              







              





    


        


      
        

      

      





                  




                  

     




      
      

           
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
