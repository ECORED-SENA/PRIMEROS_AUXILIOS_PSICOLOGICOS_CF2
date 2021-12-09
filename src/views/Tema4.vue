<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Familia

    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        p.mb-0 #[span.txt-blue La familia se define como una unidad ecosistémica de supervivencia y de construcción de solidaridades de destino], a través de los rituales cotidianos, es ese lugar donde la vida confluye para aprender a través del ejemplo, del buen trato, de las caricias, del afecto, de las conversaciones.

      .col-lg-8
        .row.gx-0.gy-0
          .col-lg-6
            .crd.crd-lightBlue.crd--100              
              figure.h-center
                img(src="@/assets/curso/tema4/t4_01.svg", alt="alt", style="width:400px;").m-auto
          .col-lg-6
            .crd.crd-verde              
              p.mb-4 La familia está llamada a enseñar a amar, esta es la esencia de las relaciones humanas y por sencillo que parezca, es la falla más común del sistema familiar, cabe resaltar que el lugar de protección por excelencia de los seres humanos es la #[span.txt-blue familia].
              figure.mb-0
                img(src="@/assets/curso/dots.svg", alt="alt", style="width:65px;")

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Tipos de familia

    .bg_waves_01  
      .row.justify-content-center.mb-4
        .col-lg-5.mb-5.mb-lg-0
          .cp.mb-4
            .waves.d-none.d-lg-block
            .cp_title                  
              p.mb-0 Es importante conocer la familia en la sociedad actual, así Llavona y Méndez (2015), describen nueve tipos de familia:
          figure
            img(src="@/assets/curso/tema4/t4_02.svg", alt="alt").m-auto         
        .col-lg-7
          SlyderF.mb-5(columnas="col-lg-6 col-md-6")
            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_03.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Matrimonio
              p.text-center Conformada por parejas sin hijos.

            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_04.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Monoparental
              p.text-center Cuenta con solo uno de los padres (madre o padre)           

            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_05.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Nuclear biológica
              p.text-center Padres e hijos todos de la misma unión parental.

            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_06.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Familia homoparental
              p.text-center Pareja de hombres o de mujeres que se convierten el progenitor.

            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_07.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Familia adoptiva
              p.text-center Parejas que conforman familia a través de la adopción.

            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_08.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Con reproducción asistida
              p.text-center Parejas que tienen hijos de forma no natural: inseminación, alquiler de vientres.

            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_09.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Familia reconstituida
              p.text-center Parejas que conforman familia con hijos de relaciones anteriores y sus propios hijos.

            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_10.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Familias de otra cultura 
              p.text-center Parejas de culturas distintas en donde convergen diferentes tipos de crianza y visión de vida.

            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_11.svg' alt='AvatarTop',style="width:90px;").m-auto
              h4.text-center Familia extensa 
              p.text-center Son todos los familiares que hacen parte de la vida de la pareja: hermanos, primos, abuelos, tíos.

          p #[span.txt-blue Entender que la familia se ha transformado a lo largo de la vida y que en la actualidad la diversidad familiar es una realidad], es muy importante para realizar cualquier tipo de abordaje en PAP, pues la función de la familia va más allá de su conformación, lo realmente importante es tener claridad frente a la responsabilidad que significa el desarrollo de vínculos afectivos sanos, el impacto de esto frente a la salud mental y el desarrollo de la estructura psicológica.  

      p.mb-5 La siguiente tabla, tomada del Manual del psicólogo de familia, describe la función de la familia en cada etapa del ciclo vital y las responsabilidades frente al desarrollo psicológico.

      .titulo-sexto.color-acento-contenido
        h5 Tabla. Ámbito psicológico propio de la familia
       

      .tabla-a.color-acento-botones
        table
          caption Nota. Tomada de Llavona y Méndez (2012).
          thead
            tr
              th Tipos de familia
              th Funciones
              th Ciclo vital   
              th Relaciones       
          tbody
            tr
              td
                | * Matrimonio/pareja de hecho sin hijo. <br><br>* Monoparental (madre/padre).<br><br>* Monoparental (madre/padre).<br><br>* Nuclear biológica.<br><br>* Homoparental (mujeres/hombres).<br><br>* Adoptiva.<br><br>* Con reproducción asistida.<br><br>* Reconstituida.<br><br>* De otra cultura (extranjera).<br><br>* Extensa.
                  
              td
                | * Relación emocional-afectiva de los cónyuges/pareja.<br><br>* Aspectos relacionados con la procreación.<br><br>* Aspectos relacionados con la adopción/acogimiento y custodia.<br><br>* Cuidado básico de los niños/mayores/enfermos crónicos.<br><br>* Educación de los hijos: hábitos básicos/control de los impulsos/Preparación para la vida.<br><br>* Socialización de sus miembros, especialmente de los hijos.<br><br>* Protección de sus miembros, especialmente frente a la violencia psicológica, física, sexual o social.<br><br>* Atención emocional-afectiva de sus miembros.
              td
                | * Parejas casadas (sin hijos).<br><br>* Familias con bebés (hijo mayor nacimiento-30 meses).<br><br>* Familia con hijos preescolares (hijo mayor 2 1/2-6 años).<br><br>* Familia con hijos escolares (hijo mayor 6-13 años).<br><br>* Familias con adolescentes (hijo mayor entre 13-20 años).<br><br>* Familias con bases de lanzamiento de los adultos jóvenes (desde que se va el primer hijo hasta que el último deja la casa).<br><br>* Padres de media-edad (Nido vacío) hasta jubilación.<br><br>*  Familias ancianas (desde la jubilación hasta el fallecimiento de ambos esposos).
              td
                |* Entre la pareja.<br><br>* Entre padres e hijos.<br><br>* Entre hijos.<br><br>* Entre los padres/hijos y abuelos.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Factores de riesgo

    .bloque-texto-a.cts-banner.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/t4_12.svg", alt="alt").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Estos tienen que ver con la probabilidad de que un hecho ocurra, en este caso se habla de factores asociados a la salud mental de los miembros de la familia y la probabilidad de que ocurran hechos traumáticos que puedan generar crisis en la familia o en alguno de sus integrantes. 

    p.mb-5 En el siguiente video se presentan los principales factores de riesgo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

    separador

    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Factores protectores

    .clrBG.clrBG__gradient1
      .row.mb-5
        .col-auto.d-none.d-lg-block
          figure
            img(src="@/assets/curso/warpLines.svg", alt="alt", style="width:85px;").m-auto
        .col
          p Son los modelos de relaciones, conductas y actitudes que se conforman en el entorno familiar, estos neutralizan los factores de riesgo y ayudan a afrontar en familia situaciones adversas, a continuación, se presentan los principales:

      .row.justify-content-center
        .col-lg-7
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--mint")
            .row(titulo="Integración familiar")             
              p Los miembros de la familia se sienten parte de un grupo y logran desarrollarse sanamente.
            .row(titulo="Límites, normas y figuras de autoridad")             
              p Estos aspectos son claros, bien definidos y cada uno de los integrantes de la familia conoce su límite frente al otro.
            .row(titulo="Definición de hábitos saludables")             
              p Creación de rutinas claras frente al descanso, alimentación, actividad física, jornadas de estudio, lectura.
            .row(titulo="Afectividad positiva")             
              p Los integrantes de la familia demuestran afecto a través de sus actos, son respetuosos con la palabra y bien tratantes, establecen una comunicación sana y fluida.
            .row(titulo="Reconocimiento")             
              p Los integrantes de la familia reconocen sus logros, se estimulan y motivan de forma asertiva.
            .row(titulo="Gestión positiva de conflictos")             
              p Los conflictos hacen parte de la convivencia y en la familia son muy normales, sin embargo, su manejo y resolución hacen la diferencia; cuando se logra entender los problemas, trabajarlos, hablarlos e incluso buscar ayuda para solucionarlos, los conflictos no se potencializan.
        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/t4_13.png", alt="alt", style="width:500px;").m-auto

    separador

    
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Violencia intrafamiliar

    .row.justify-content-center.mb-4
      .col-lg-6
        p #[span.txt-blue La violencia al interior de la familia en muchas ocasiones se naturaliza], es decir que los comportamientos de agresión, violencia psicológica manifestada en los insultos y humillaciones, terminan siendo un comportamiento normal que a pesar de dañar psicológicamente, se repite generación tras generación.
        .crd.crd-verde
          p.mb-0 Cuando un hecho de violencia intrafamiliar ocurre y se vulneran los derechos de algún miembro de la familia, se debe #[span.txt-blue saber que existen unos derechos que protegen a la víctima: derecho a ser escuchado, a tener una atención digna, a recibir asesoría jurídica y psicológica, a solicitar o recibir medidas de protección].
      .col-lg-6
        figure
          img(src="@/assets/curso/tema4/t4_14.jpg", alt="alt", style="width:600px;")

    p.mb-4 A continuación, se presentan los tipos de violencia intrafamiliar:

    .bgSlider.p-5
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h4.text-white Maltrato infantil
            p.text-white Cuando un niño o niña y/o adolescente esté siendo víctima de algún prejuicio, castigo, humillación, descuido, malos tratos, abuso o explotación sexual, por parte de sus padres o representantes legales o por cualquier otra persona, es necesario denunciar, sea usted la víctima o no. 
            p.text-white Las víctimas de maltrato infantil tienen derecho al restablecimiento de sus derechos, es decir a que sean protegidos y se les respete su vida e integridad; además, tienen derecho a recibir atención integral en salud y educación.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/t4_16.png', alt='',style="width:350px;").m-auto
        .row
          .col-md-7.mb-4.mb-md-0
            h4.text-white Violencia contra la mujer por razón de género
            p.text-white Cuando una mujer al interior de la familia o fuera de ella es sometida a actos de violencia física, psicológica, abuso sexual, explotación o causar la muerte, por el hecho de ser mujer. Este tipo de violencia es muy peligrosa, porque pasa desapercibida y en ocasiones solo se evidencia cuando se desencadenan hechos trágicos como la muerte o agresión física.
              br
              br
              |Las mujeres deben entender que no están solas, que existen mecanismos de protección y que nadie tiene derecho a hacerles daño. 
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/t4_17.png', alt='',style="width:350px;").m-auto

    separador

    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Activación de rutas de atención

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p Para salvaguardar los derechos fundamentales de los niños, niñas, adolescentes, mujeres o cualquier individuo que este siendo vulnerado, #[span.txt-blue es importante conocer las rutas de atención y ayuda], con el fin de denunciar en cualquiera de las siguientes instituciones de forma directa:
        ul.lista-ul--color.blt-blue
          li 
            i.fas.fa-check-circle
            | Comisaría de Familia más cercana.
          li 
            i.fas.fa-check-circle
            | Centro de Atención a Víctimas de Violencia Intrafamiliar – CAVIF.
          li 
            i.fas.fa-check-circle
            | Centro de Atención a Víctimas de Abuso Sexual – CAIVAS.
          li 
            i.fas.fa-check-circle
            | Unidad de Reacción Inmediata URI – Fiscalía más cercana.
          li 
            i.fas.fa-check-circle
            | ICBF – Centro Zonal.
          li 
            i.fas.fa-check-circle
            | Casas de Justicia.
          li 
            i.fas.fa-check-circle
            | Personería más cercana.

      .col-lg-6 
        figure
          img(src="@/assets/curso/tema4/t4_18.png", alt="alt").m-auto

    .bg_waves_01  
      .row.justify-content-center.mb-4
        .col-lg-2.mb-5.mb-lg-0
          p #[strong Además, también es necesario conocer los centros de atención médica integral más cercana, tales como:]        
        .col-lg-10
          SlyderF.mb-5(columnas="col-lg-3")
            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_19.svg' alt='AvatarTop',style="width:90px;").m-auto              
              p.text-center Hospitales locales
            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_19.svg' alt='AvatarTop',style="width:90px;").m-auto              
              p.text-center IPS
            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_19.svg' alt='AvatarTop',style="width:90px;").m-auto              
              p.text-center CAMI (Centro de Atención Médica Inmediata)
            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_19.svg' alt='AvatarTop',style="width:90px;").m-auto              
              p.text-center UPA (Unidad Primaria de Atención)
            .crd.crd--100.crd-gray.p-4
              .row.justify-content-center.mb-4
                .col-8
                  img(src='@/assets/curso/tema4/t4_19.svg' alt='AvatarTop',style="width:90px;").m-auto              
              p.text-center ABA (Unidad Básica de atención)


      .row
        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/t4_24.jpg", alt="alt").m-auto
        .col-lg-6
          p.mb-4 También existen líneas de emergencia que brinda respuesta y atención prioritaria dependiendo de la denuncia o situación, comuníquese a cualquiera de las siguientes líneas:
          ul.lista-ul--color.blt-blue
            li 
              i.fas.fa-check-circle
              | Línea 112: Policía Nacional.
            li 
              i.fas.fa-check-circle
              | Línea 123: Emergencia Distrital o la línea de su ciudad.
            li 
              i.fas.fa-check-circle
              | Línea 132: Cruz Roja.
            li 
              i.fas.fa-check-circle
              | Línea 141: Instituto Colombiano de Bienestar Familiar. 
            li 
              i.fas.fa-check-circle
              | Línea 144: Defensa Civil.
            li 
              i.fas.fa-check-circle
              | Línea 106: Secretaría Distrital de Salud.
            li 
              i.fas.fa-check-circle
              | Línea 195: Secretaría general.
            li 
              i.fas.fa-check-circle
              | www.policia.gov.co
            li 
              i.fas.fa-check-circle
              | www.fiscalia.gov.co/colombia/

    separador

    #t_4_6.titulo-segundo.color-acento-contenido
      h2 4.6 PAP en familias

    .row
      .col-xl-5.mb-4.mb-xl-0
        p.mb-4 #[span.txt-blue Los primeros auxilios psicológicos como herramienta de intervención se consideran flexibles y adaptables a diferentes condiciones y situaciones], esto aplica también para casos en el contexto de la familia, donde las guías y protocolos estudiados son aplicables y adaptables, sin embargo, es necesario tener en cuenta los siguientes aspectos:

        img(src='@/assets/curso/tema4/t4_25.jpg' alt='',style="width:500px;").m-auto 

      .col-xl-7
        SlyderF.mb-5(columnas="col-lg-6")
          .crd.crd--100.crd-gray.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema4/t4_26.svg' alt='AvatarTop',style="width:90px;").m-auto
            h4.text-center Contexto
            p.text-center Comprender la vida de la familia, su realidad desde lo social, económico, relacional y tipo de familia.
          .crd.crd--100.crd-gray.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema4/t4_27.svg' alt='AvatarTop',style="width:90px;").m-auto
            h4.text-center Edad de la familia
            p.text-center Establecer si es una familia joven o madura, edad de los padres hijos, ya que esto determina el tipo de conflictos que se gestan al interior de la familia.
          .crd.crd--100.crd-gray.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema4/t4_28.svg' alt='AvatarTop',style="width:90px;").m-auto
            h4.text-center Tipo de conflicto
            p.text-center Entender las circunstancias que han llevado a la desestabilización del sistema familiar y los antecedentes del mismo.
          .crd.crd--100.crd-gray.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema4/t4_29.svg' alt='AvatarTop',style="width:90px;").m-auto
            h4.text-center Alerta frente a circunstancias de violencia o abuso
            p.text-center La persona que realiza la aplicación de los PAP en familia debe determinar si la familia está abusando o maltratando a algunos a varios de sus integrantes, si hay alguna sospecha de esto, se deben activar las rutas correspondientes.
          .crd.crd--100.crd-gray.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema4/t4_30.svg' alt='AvatarTop',style="width:90px;").m-auto
            h4.text-center Apertura
            p.text-center La familia debe estar dispuesta y abierta a recibir ayuda, permitiendo que un tercero intervenga en la gestión de estrés y crisis familiar.


        p A continuación, se presentan las estrategias de autorregulación familiar que la persona que realiza la aplicación de PAP puede ayudar frente a situaciones de estrés psicológico en un entorno familiar:
        ul.lista-ul--color.blt-blue
          li 
            i.fas.fa-check-circle
            | Reestructuración: capacidad de la familia para redefinir los eventos estresantes para hacerlos más manejables. 
          li 
            i.fas.fa-check-circle
            | Evaluación pasiva: capacidad familiar para aceptar asuntos problemáticos, minimizando su reactividad.  
          li 
            i.fas.fa-check-circle
            | Atención de apoyo social: capacidad de la familia para ocuparse activamente en la obtención de apoyo por parte de parientes, amigos, vecinos y familia extensa.
          li 
            i.fas.fa-check-circle
            | Búsqueda de apoyo espiritual: habilidad familiar para obtener apoyo espiritual. 
          li 
            i.fas.fa-check-circle
            | Movilización familiar: la habilidad familiar para buscar recursos en la comunidad y aceptar ayuda de otros (Macías, Madariaga, Valle y Zambrano, 2013). 

        

 




    













          
         







      

</template>

<script>
export default {
  name: 'Tema4',
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
