<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Los Primeros Auxilios Psicológicos, como conocidos como PAP, son una herramienta de carácter científico que deben ser aplicados de forma consistente, basados en las guías y protocolos. Uno de los protocolos más reconocidos es el ACERCARSE que sirve como guía para la aplicación de los PAP, sin embargo, sus fases pueden ser adaptadas de acuerdo con la situación y el contexto al momento de ayudar a las personas a recuperar su capacidad de afrontamiento frente a la crisis, por esto, es necesario comprender que cada persona maneja diferentes recursos y capacidades.
    p La psicoeducación es una pieza clave dentro de la aplicación de los PAP, ya que brinda posibilidades de acción para los afectados en el marco de su autonomía y autorregulación.
    p.mb-5 La familia puede convertirse en un factor de riesgo o de protección para las personas, debido a la forma como esta se configura e interactúa, por esto es importante reconocer las situaciones de violencia o maltrato, con el fin de recibir atención integral y activar las rutas de atención en salud y educación.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
