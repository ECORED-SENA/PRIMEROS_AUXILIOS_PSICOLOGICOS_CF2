<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias de manejo 

    .cp.mb-5
      .waves.d-none.d-lg-block
      .cp_title 
        p.mb-0  Los recursos con los cuales cuenta una persona para manejar, enfrentar y superar una crisis son diversos, ya que cada uno conoce formas efectivas de regularse, sin embargo, #[span.txt-blue existe una serie de estrategias que pueden ser muy útiles a la hora de enfrentar la adversidad], las que se presentan en el siguiente recurso de aprendizaje:

    .clrBG.clrBG__mint
      SlyderE(indicadores="derecha")
        .row        
          .col-md-6.mb-4.mb-md-0
            h4.txt-blue.mb-4 Comprender que las crisis son pasajeras
            p Este es un recurso de tipo cognitivo que permite disminuir el sufrimiento asociado a la condición de trauma o estrés y cuando se piensa que el dolor perdurará y es más difícil avanzar.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_01.jpg', alt='')
        .row        
          .col-md-6.mb-4.mb-md-0
            h4.txt-blue.mb-4 Trabajar en la perspectiva de las soluciones para dejar de enfocarse en el problema
            p Es muy común que el problema se convierta en el pensamiento recurrente, lo que agudiza el miedo y las reacciones frente al mismo, por tanto, pensar en cómo salir y cuáles son las posibles soluciones, ayuda a que el cerebro realice otro tipo de interconexiones para crear alternativas de solución creativas.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_02.jpg', alt='')
        .row        
          .col-md-6.mb-4.mb-md-0
            h4.txt-blue.mb-4 Conectarse con el aquí y el ahora
            p Entendiendo que gran parte del sufrimiento humano está basado en pensamientos que no son parte del presente. El exceso de pasado o de futuro genera angustia, más cuando se ha vivido una situación de crisis por un evento traumático.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_03.jpg', alt='')
        .row        
          .col-md-6.mb-4.mb-md-0
            h4.txt-blue.mb-4 Ser compasivo
            p La compasión permite que las personas se piensen a sí mismas desde una mirada más empática con su dolor, sin culpas y entendiendo que lo que ha sucedido puede ocurrirle a muchas personas, haciendo de la humanidad compartida una forma de ser más bondadosa con consigo mismo.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_04.jpg', alt='')
        .row        
          .col-md-6.mb-4.mb-md-0
            h4.txt-blue.mb-4 Trabajar en la aceptación
            p Cuando se viven situaciones adversas entender que hay límites y que los seres humanos son vulnerables, permite aceptar la ayuda de otros con más facilidad, dejando de luchar contra lo que no se puede cambiar.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2_05.jpg', alt='')

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Adversidad

    .row.justify-content-center.mb-4
      .col-lg-7        
        .cp.mb-4
          .waves--h.d-none.d-lg-block
          .cp_title
            p.mb-0 #[span.txt-blue La adversidad está relacionada con la vivencia de situaciones que hacen daño y producen sufrimiento emocional], por lo general, la vida tiene dosis de adversidad que la mayoría de las personas logra sobrellevar, pero otras necesitan ayuda para poder hacerlo.

        .crd.crd-verde      
          p.mb-0 Estas reacciones frente al daño suelen ser normales y tienden a desaparecer con el tiempo, sin embargo, algunas secuelas derivadas de estos episodios de exposición al trauma pueden #[span.txt-blue dejar secuelas en el largo plazo] y es necesario que las personas y sus familias así lo entiendan y si las manifestaciones perduran por más de una algunas personas, deben buscar apoyo psicológico prioritario.

      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema2/t2_06.jpg", alt="alt").m-auto

    .mb-5 En el #[span.txt-blue manual de primeros auxilios psicológicos] escrito por Hernández y Gutiérrez (2014) de la Universidad de Guadalajara, se describen tres tipos de reacciones de estrés derivadas del mismo:

    .row.justify-content-center.gx-0.mb-4
      .col-lg-4
        .crd.grad1.crd--100(data-aos="flip-right")
          figure.mb-4
            img(src="@/assets/curso/tema2/t2_07.svg", alt="alt", style="width:100px;")
          h4.txt-mint.mb-4 Reacciones intrusivas
          p.text-white Son formas en las que la experiencia traumática vuelve a la memoria. Estas reacciones incluyen pensamientos o imágenes mentales perturbadores del evento (por ejemplo, representación mental de lo que vio) o sueños de lo que sucedió. 
      .col-lg-4
        .crd.crd-deepBlue.crd--100(data-aos="flip-right")
          figure.mb-4
            img(src="@/assets/curso/tema2/t2_08.svg", alt="alt", style="width:100px;")
          h4.txt-mint.mb-4 Reacciones de evitación y retraimiento
          p.text-white Son formas que las personas usan para mantenerse alejados o protegidos de la angustia. Estas reacciones incluyen tratar de evitar hablar, pensar y tener sentimientos sobre el evento traumático y evitar cualquier situación que le traiga a la memoria el evento, como lugares y personas relacionadas con lo que sucedió.  
      .col-lg-4
        .crd.grad1.crd--100(data-aos="flip-right")
          figure.mb-4
            img(src="@/assets/curso/tema2/t2_09.svg", alt="alt", style="width:100px;")
          h4.txt-mint.mb-4 Reacciones de excitación física
          p.text-white Corresponden a cambios físicos que hacen que el cuerpo reaccione como si todavía hubiera peligro. 

    p Estas reacciones deben ser trabajadas para que la persona afectada logre modular sus pensamientos y emociones y el estrés no produzca daños más grandes en la salud física y psicológica de la persona.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Afrontamiento


    .row.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        .row.gx-0.gy-0
          .col-lg-6
            .crd.crd-verde
              figure.mb-4
                img(src="@/assets/curso/dots.svg", alt="alt", style="width:65px;")
              p.mb-0 La inteligencia emocional está relacionada con este concepto, que se refiere a #[span.txt-blue la forma como cada persona gestiona sus emociones y logra sobrellevar las descargas que una situación] estresante puede producir en las personas.
          .col-lg-6
            .crd.crd-lightBlue.crd--100              
              figure.h-center
                img(src="@/assets/curso/tema2/t2_10.svg", alt="alt", style="width:400px;").m-auto
          

      .col-lg-4.mb-4.mb-lg-0
        p.mb-0 Vázquez y Crespo (2018), #[span.txt-blue plantean estrategias de afrontamiento que puede manejar un individuo, el uso de unas u otras en buena medida suele estar determinado por la naturaleza del estresor y las circunstancias en las que se produce]. Por ejemplo, las situaciones en las que se puede hacer algo constructivo favorecen estrategias focalizadas en la solución del problema, mientras que las situaciones en las que lo único que cabe es la aceptación favorecen el uso de estrategias focalizadas en las emociones.

    p.mb-5 Cabe resaltar que la complejidad de la estructura psicológica y emocional de las personas hace que no sea tan sencillo entender la forma como cada una afronta la adversidad, sin embargo, se han identificado patrones de conducta asociados a diferentes tipos de respuestas, agrupando siete (7) estilos afrontamiento, los cuales se explican en el siguiente recurso de aprendizaje:

    .clrBG.clrBG__gradient1
      .row.justify-content-center
        .col-lg-7
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--mint")
            .row(titulo="Confrontación")             
              p Se evidencia cuando la persona trata de encontrar soluciones directas frente a la situación vivida, ya sea a través de la agresión o con acciones que pueden generar peligro.     
            .row(titulo="Planificación")             
              p Esta estrategia se basa más en la capacidad de pensar la situación, los problemas y planear diversas formas de solucionarlos.     
            .row(titulo="Distanciamiento")             
              p Esta estrategia se basa en el distanciamiento del problema para evitar afectaciones mayores.    
            .row(titulo="Autocontrol")             
              p La persona hace un ejercicio consciente para controlar sus emociones, esforzándose por no dejar salir sus respuestas emocionales de forma desbordada.    
            .row(titulo="Aceptación de responsabilidad")             
              p Está basada en el reconocimiento que la persona logra hacer frente a su papel en el problema y el mantenimiento del mismo.    
            .row(titulo="Escape-evitación")             
              p Esta estrategia utiliza mecanismos de evasión de la realidad que le ayudan a disminuir el dolor o sufrimiento que le produce la situación. 
              p Drogas, alcohol, exceso de comida, actividad sexual desmedida, pueden ser formas de evitar enfrentar el problema.    
            .row(titulo="Reevaluación positiva")             
              p La persona busca encontrar los saldos pedagógicos o aspectos positivos que la situación estresante haya podido dejar.              

        .col-lg-5(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema2/t2_11.png", alt="alt", style="width:500px;").m-auto

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Técnicas de respiración

    .row.justify-content-center
      .col-lg-7
        p La respiración es la función biológica básica de #[span.txt-blue inhalar aire y absorber oxígeno, y exhalar y expulsar dióxido de carbono]. 
        .cp.mb-5
          .dots.d-none.d-lg-block
          .cp_title 
            .crd.crd-verde
              p.mb-0 Las técnicas de respiración son ejercicios simples, con base científica y al alcance de todos, que permiten modificar rápidamente el sistema nervioso autónomo, la respuesta al estrés, el estado de ánimo y el nivel de energía, el objetivo de estas técnicas es empoderar a las personas proporcionándoles una poderosa herramienta para el bienestar y el cuidado personal. 

      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema2/t2_12.jpg", alt="alt").m-auto

    .ctn.blueWaves.pt-5 
      h3.text-center.text-white.py-5 A continuación, se presentan algunos tipos de respiración:     
      .row.justify-content-center.pb-5
        .col-auto.mb-4.mb-lg-0
          .flip
            .flip-content
              .flip-front
                img(src="@/assets/curso/tema2/t2_13.png", alt="alt")
              .flip-back.p-4             
                h4.text-center.txt-mint.pt-3 Respiración agua
                p Es una respiración neutra, de tipo equilibrante. Para visualizar la forma como se realiza esta respiración ingrese al siguiente enlace.
                  br
                  br
                  |Esta respiración mantiene el 50% de la «frecuencia normal» pero aumenta 2 veces el volumen inhalado, el objetivo es de 4 a 6 litros por minuto, solo respiración nasal (si es posible), lo mejor es utilizar respiración diafragmática.		
        .col-auto.mb-4.mb-lg-0
          .flip
            .flip-content
              .flip-front
                img(src="@/assets/curso/tema2/t2_14.png", alt="alt")
              .flip-back.p-4             
                h4.text-center.txt-mint  Respiración whisky
                p Es una respiración de tipo relajante que ayuda a activar el sistema nervioso parasimpático, responsable de la respuesta de relajación del organismo. 
                  br
                  br
                  |Esta técnica maneja alrededor de < 3 respiraciones por minuto, la proporción 1:2 (lo habitual es inhalar en 4 y exhalar en 8 tiempos), respiración diafragmática, se puede realizar sentado o en posición supina, solo por la nariz o inhalación por la nariz y exhalación por la boca. 



      


    
    

</template>

<script>
export default {
  name: 'Tema2',
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
