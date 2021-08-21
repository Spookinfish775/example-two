<template>
  <div class="contact-btn-wrapper">
    <button class="detail-button" @click="open = true">
      <span> {{ $t("mainPage.contacts.contact") }}</span>
    </button>

    <transition name="popup">
      <div v-if="open" class="dialog">
        <div class="dialog-content">
          <ContactForm @successSended="open = false" v-if="open" />
        </div>
        <div class="close-btn" @click="open = false">
          <span>&#10006;</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ContactForm from "~/components/layouts/form/index.vue";
export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      open: false,
    };
  },
  watch: {
    open(val) {
      if (val) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-enter-active,
.popup-leave-active {
  transition: 0.6s;
}
.popup-enter,
.popup-leave-to {
  opacity: 0;
}
.contact-btn-wrapper {
  position: relative;
  .detail-button {
    display: block;
    max-width: 23em;
    height: 8em;
    margin: 3.2em 0 0 0;
    padding: 0 1em;
    border-radius: 11.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $blue-sky;
    @include max($small) {
      max-width: 100%;
      margin: 1em;
    }
    span {
      font-family: "TT Hazelnuts";
      font-style: normal;
      font-weight: 900;
      font-size: 1.8em;
      line-height: 0.8em;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #ffffff;
      @include max($large) {
        font-size: 1.8em;
      }
      @include max($small) {
        font-size: 1.6em;
      }
    }
  }
  .dialog {
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: $main-color, $alpha: 0.7);
    .dialog-content {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-y: scroll;
      @include max($small) {
        align-items: flex-start;
      }
    }
    .close-btn {
      position: absolute;
      right: 0.5em;
      top: 0.5em;
      color: $default-text-color;
      font-size: 4em;
      z-index: 100011;
      @include max($large) {
        font-size: 3em;
        color: $main-color;
        text-shadow: 0 0 3px #fff; /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 3px #fff;
        -webkit-text-shadow: 0 0 3px #fff;
      }
      @include max($small) {
        font-size: 2em;
        right: 1em;
      }
    }
  }
}
</style>