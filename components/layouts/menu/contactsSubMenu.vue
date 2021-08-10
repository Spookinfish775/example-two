<template>
  <div class="contacts-submenu-wrapper">
    <div class="arrow"></div>
    <div class="contacts-submenu">
      <nuxt-link to="/" class="sublink">{{
        $t("menu.contactsSubMenuLink")
      }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contacts-submenu-wrapper {
  width: 22.4em;
  height: 10.4em;
  position: relative;
  .arrow {
    position: relative;
    left: 4.3em;
    top: 2px;
    width: 0;
    height: 0;
    border-left: 1.2em solid transparent;
    border-right: 1.2em solid transparent;
    border-bottom: 1.2em solid $main-color;
  }
  .contacts-submenu {
    width: 100%;
    height: 100%;
    background-color: $main-color;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .sublink {
      color: $default-text-color;
      font-size: 1.4em;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>