<template>
  <div class="menu-wrapper">
    <div class="link-group">
      <nuxt-link to="/" class="link product">{{
        $t("menu.productLink")
      }}</nuxt-link>
      <div class="productSubMenu">
        <ProductSubMenu />
      </div>
      <nuxt-link to="/" class="link">{{ $t("menu.aboutLink") }}</nuxt-link>
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="logo" />
    </div>
    <div class="link-group">
      <nuxt-link to="/" class="link">{{ $t("menu.articlesLink") }}</nuxt-link>
      <nuxt-link to="/" class="link">{{ $t("menu.contactLink") }}</nuxt-link>
      <div class="contactSubMenu">
        <ContactSubMenu />
      </div>
      <span class="lang-bar link">{{ $t("menu.langBar") }}</span>
    </div>
  </div>
</template>

<script>
import ProductSubMenu from "./productsSubMenu.vue";
import ContactSubMenu from "./contactsSubMenu.vue";
export default {
  components: {
    ProductSubMenu,
    ContactSubMenu,
  },
};
</script>

<style lang="scss">
.menu-wrapper {
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;

  .link-group {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .link {
      padding: 4.3em 0;
      font-size: 1.4em;
      font-weight: 700;
      text-transform: uppercase;
    }
    .productSubMenu {
      display: none;
      position: absolute;
      top: 8.5em;
      left: 17.8em;
    }
    .contactSubMenu {
      display: none;
      position: absolute;
      top: 8.5em;
      right: 17.8em;
    }
  }
  // @include max($large) {

  // }
}
</style>