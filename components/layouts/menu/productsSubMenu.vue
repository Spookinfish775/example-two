<template>
  <div class="products-submenu-wrapper">
    <div class="arrow"></div>
    <div class="product-submenu">
      <nuxt-link to="/" class="sublink">{{
        $t("menu.productSubMenuLinks[0]")
      }}</nuxt-link>
      <nuxt-link to="/" class="sublink">{{
        $t("menu.productSubMenuLinks[1]")
      }}</nuxt-link>
      <nuxt-link to="/" class="sublink">{{
        $t("menu.productSubMenuLinks[2]")
      }}</nuxt-link>
      <nuxt-link to="/" class="sublink">{{
        $t("menu.productSubMenuLinks[3]")
      }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.products-submenu-wrapper {
  position: relative;
  width: 38.4em;
  height: 25.6em;
  .arrow {
    position: relative;
    left: 3em;
    top: 2px;
    width: 0;
    height: 0;
    border-left: 1.2em solid transparent;
    border-right: 1.2em solid transparent;
    border-bottom: 1.2em solid $main-color;
  }
  .product-submenu {
    width: 100%;
    height: 100%;
    background-color: $main-color;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    .sublink {
      color: $default-text-color;
      font-size: 1.4em;
      font-weight: 700;
      text-transform: uppercase;
      padding-left: 1.5em;
    }
  }
}
</style>