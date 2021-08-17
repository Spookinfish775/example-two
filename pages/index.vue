<template>
  <div class="main-page-wrapper">
    <Hero />
    <Description />
    <OurProduts />
    <ProdutsDescription />
    <Contacts />
    <articles />
  </div>
</template>

<script>
import Hero from "~/components/mainPage/hero.vue";
import Description from "~/components/mainPage/description.vue";
import OurProduts from "~/components/mainPage/our-products/index.vue";
import ProdutsDescription from "~/components/mainPage/products-description/index.vue";
import Contacts from "~/components/mainPage/contacts.vue";
import Articles from "~/components/mainPage/articles/index.vue";
export default {
  components: {
    Hero,
    Description,
    OurProduts,
    ProdutsDescription,
    Contacts,
    Articles,
  },
};
</script>

<style lang="scss">
.main-page-wrapper {
  width: 100%;
  min-height: 100vh;
  position: relative;
}
</style>