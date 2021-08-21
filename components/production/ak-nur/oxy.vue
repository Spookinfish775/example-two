<template>
  <div class="ak-nur-oxy-wrapper">
    <div v-for="item in 4" :key="item">
      <div :class="`bubble bubble${item}`" />
    </div>
    <div class="ak-nur-oxy-wrapper-title">
      <h1 class="page-title title">
        {{ $t("production.aknur.oxy.title") }}
      </h1>
      <p class="page-text subtitle">
        {{ $t("production.aknur.oxy.subTitle") }}
      </p>
    </div>
    <div class="product-wrapper">
      <div>
        <div class="product-image">
          <div
            class="image"
            :style="`background-image: url('/img/products/${products[activeIndex].image}')`"
          ></div>
        </div>
      </div>
      <div class="product-description">
        <div class="description-block">
          <h2 class="second-page-title">{{ $t("production.compount") }}:</h2>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.oxy.compount") }}
          </p>
        </div>
        <div class="description-block">
          <h2 class="second-page-title">
            {{ $t("production.precautionaryMeasures") }}:
          </h2>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.oxy.precautionaryMeasures") }}
          </p>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.oxy.precautionaryMeasures2") }}
          </p>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.oxy.precautionaryMeasures3") }}
          </p>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.oxy.precautionaryMeasures4") }}
          </p>
        </div>
        <div class="description-block">
          <h2 class="second-page-title">
            {{ $t("production.storageConditions") }}:
          </h2>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.oxy.storageConditions") }}
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
          image: "aknur-oxygen.png",
        },
      ];
    },
  },
};
</script>

<style lang="scss">
.ak-nur-oxy-wrapper {
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
    width: 25em;
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
      background-color: $pink;
      display: flex;
      align-items: center;
      justify-content: center;
      @include max($large) {
        margin: 0 auto 10em auto;
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
          width: 25em;
          height: 35em;
          background-size: 100%;
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