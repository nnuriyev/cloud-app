<template>
  <a-layout
    :style="{
      display: 'flex !important',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 22px)',
    }"
    id="components-layout-demo-top"
    class="layout"
  >
    <Header />
    <CloudComponent/>
    <Footer />
  </a-layout>
</template>

<script>
import CloudComponent from "../components/cloud/CloudComponent.vue";
import Header from "../components/shared/Header.vue";
import Footer from "../components/shared/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Footer,
    CloudComponent,
  }
};
</script>
