<template>
  <div class="pakize-soap-wrapper">
    <div v-for="item in 4" :key="item">
      <div :class="`bubble bubble${item}`" />
    </div>
    <div class="pakize-soap-wrapper-title">
      <h1 class="page-title title">
        {{ $t("production.pakize.soap.title") }}
      </h1>
      <p class="page-text subtitle">
        {{ $t("production.pakize.soap.subTitle") }}
      </p>
    </div>
    <div class="product-wrapper">
      <div>
        <div class="product-image" :class="`color${activeIndex}`">
          <div class="product-name" :class="`color${activeIndex}`">
            <span>
              {{ products[activeIndex].name }}
            </span>
          </div>
          <div
            class="image"
            :style="`background-image: url('/img/products/${products[activeIndex].image}')`"
          ></div>
        </div>
        <div class="product-buttons">
          <div
            class="button"
            v-for="(button, index) in buttons"
            :key="index"
            :style="`background-image: url('/img/buttons/${
              activeIndex === index ? button.activeImage : button.image
            }'`"
            @click="activeIndex = index"
            :class="{ active: activeIndex === index }"
          ></div>
        </div>
      </div>
      <div class="product-description">
        <div class="description-block">
          <h2 class="second-page-title">{{ $t("production.compount") }}:</h2>
          <p class="page-text product-description-text">
            {{ $t("production.pakize.soap.compount") }}
          </p>
        </div>
        <div class="description-block">
          <h2 class="second-page-title">
            {{ $t("production.precautionaryMeasures") }}:
          </h2>
          <p class="page-text product-description-text">
            {{ $t("production.pakize.soap.precautionaryMeasures") }}
          </p>
        </div>
        <div class="description-block">
          <h2 class="second-page-title">
            {{ $t("production.storageConditions") }}:
          </h2>
          <p class="page-text product-description-text">
            {{ $t("production.pakize.soap.storageConditions") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    products() {
      return [
        {
          image: "pakize-purple.png",
          name: this.$t("production.pakize.soap.lavender"),
        },
        {
          image: "pakize-green.png",
          name: this.$t("production.pakize.soap.mint"),
        },
        {
          image: "pakize-pink.png",
          name: this.$t("production.pakize.soap.garnet"),
        },
        {
          image: "pakize-red.png",
          name: this.$t("production.pakize.soap.peach"),
        },
      ];
    },
    buttons() {
      return [
        {
          image: "bubble-purple.png",
          activeImage: "purple.png",
        },
        {
          image: "bubble-green.png",
          activeImage: "green.png",
        },
        {
          image: "bubble-pink.png",
          activeImage: "pink.png",
        },
        {
          image: "bubble-red.png",
          activeImage: "red.png",
        },
      ];
    },
  },
};
</script>

<style lang="scss">
.pakize-soap-wrapper {
  width: 100%;
  min-height: 50em;
  padding: 11.4em 0 0 12em;
  position: relative;
  margin: 13em 0 15em 0;
  @include max($large) {
    padding: 1em 4em 0 1em;
  }

  @include max($small) {
    margin: 0 0 0 0;
    padding: 1em;
  }
  .bubble {
    position: absolute;
    background: url("/img/main/bubble.png") center no-repeat;
    background-size: cover;
    &.bubble1 {
      width: 8em;
      height: 10em;
      right: 29em;
      bottom: 0;
      animation: bubble1 linear infinite 4s;
      @include max($large) {
        display: none;
      }
    }
    &.bubble2 {
      width: 13em;
      height: 15em;
      right: 11em;
      bottom: 5em;
      animation: bubble1 linear infinite 6s;
      @include max($large) {
        display: none;
      }
    }
    &.bubble3 {
      width: 8em;
      height: 10em;
      right: 11em;
      bottom: 20em;
      animation: bubble1 linear infinite 4s;
      @include max($large) {
        display: none;
      }
    }
    &.bubble4 {
      width: 4em;
      height: 5em;
      right: 19em;
      bottom: 27em;
      animation: bubble1 linear infinite 6s;
      @include max($large) {
        display: none;
      }
    }
  }

  .subtitle {
    width: 44.4em;
    margin: 2.7em 0 0 0;
    @include max($large) {
      width: 35.4em;
      margin: 1.7em 0 0 2em;
    }

    @include max($small) {
      width: 100%;
      margin: 1.7em 0 0 0.7em;
    }
  }
  .title {
    @include max($large) {
      width: 100%;
      margin: 5em 0 0 1.2em;
    }

    @include max($small) {
      width: 100%;
      margin: 5em 0 0 0.5em;
    }
  }

  .product-wrapper {
    margin: 10em 0 0 0;
    display: flex;
    @include max($large) {
      flex-direction: column;
    }
    .product-image {
      width: 45em;
      height: 65em;
      border-radius: 12em;
      margin: 0 14em 0 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &.color0 {
        background-color: $purple;
      }
      &.color1 {
        background-color: $green;
      }
      &.color2 {
        background-color: $pink;
      }
      &.color3 {
        background-color: $pink;
      }
      .product-name {
        width: 7.5em;
        height: 7.5em;
        border-radius: 50%;
        position: absolute;
        left: 4em;
        bottom: 4em;
        font-family: "TT Hazelnuts";
        font-style: normal;
        font-weight: 900;
        font-size: 1.5em;
        line-height: 1.2em;
        letter-spacing: 0.2em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $default-text-color;
        transition: 0.3s;
        @include max($small) {
          font-size: 1.2em;
        }
        &.color0 {
          background-color: #523191;
        }
        &.color1 {
          background-color: #36b264;
        }
        &.color2 {
          background-color: #c72a85;
        }
        &.color3 {
          background-color: #eb5f44;
        }
      }
      @include max($large) {
        margin: 0 auto;
      }
      @include max($small) {
        width: 28em;
        height: 42em;
        border-radius: 10em;
      }
      .image {
        width: 40em;
        height: 60em;
        transition: 0.3s;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        @include max($small) {
          width: 20em;
          height: 35em;
          background-size: 100%;
        }
      }
    }
    .product-buttons {
      display: flex;
      align-items: center;
      margin: 5em 0 0 0;
      @include max($large) {
        justify-content: center;
        margin: 5em 0 5em 0;
      }

      .button {
        width: 7em;
        height: 7em;
        margin: 0 2em 0 0;
        cursor: pointer;
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0.7;
        transition: 0.3s;
        &.active {
          opacity: 1;
        }
        @include max($small) {
          width: 5em;
          height: 5em;
        }
      }
    }
    .product-description {
      @include max($large) {
        margin: 0 0 0 3.5em;
      }
      @include max($small) {
        margin: 0 0 0 1em;
      }
      .description-block {
        margin: 0 0 3em 0;
      }
      .product-description-text {
        width: 29.5em;
        margin: 0.5em 0 0 0;
        @include max($small) {
          width: 100%;
        }
      }
    }
  }
}
</style>