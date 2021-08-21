<template>
  <div class="ak-nur-automat-wrapper">
    <div class="ak-nur-automat-wrapper-title">
      <h1 class="page-title title">
        {{ $t("production.aknur.automat.title") }}
      </h1>
      <p class="page-text subtitle">
        {{ $t("production.aknur.automat.subTitle") }}
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
            {{ $t("production.aknur.automat.compount") }}
          </p>
        </div>
        <div class="description-block">
          <h2 class="second-page-title">
            {{ $t("production.precautionaryMeasures") }}:
          </h2>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.automat.precautionaryMeasures") }}
          </p>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.automat.precautionaryMeasures2") }}
          </p>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.automat.precautionaryMeasures3") }}
          </p>
        </div>
        <div class="description-block">
          <h2 class="second-page-title">
            {{ $t("production.storageConditions") }}:
          </h2>
          <p class="page-text product-description-text">
            {{ $t("production.aknur.automat.storageConditions") }}
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
          image: "aknur-automat-400gr.png",
        },
        {
          image: "aknur-automat-3kg.png",
        },
        {
          image: "aknur-automat-6kg.png",
        },
        {
          image: "aknur-automat-9kg.png",
        },
      ];
    },
    buttons() {
      return [
        {
          image: "bubble400gr.png",
          activeImage: "active400gr.png",
        },
        {
          image: "bubble3kg.png",
          activeImage: "active3kg.png",
        },
        {
          image: "bubble6kg.png",
          activeImage: "active6kg.png",
        },
        {
          image: "bubble9kg.png",
          activeImage: "active9kg.png",
        },
      ];
    },
  },
};
</script>

<style lang="scss">
.ak-nur-automat-wrapper {
  width: 100%;
  min-height: 50em;
  padding: 11.4em 0 0 12em;
  position: relative;
  margin: 13em 0 0 0;
  @include max($large) {
    padding: 1em 4em 0 1em;
  }

  @include max($small) {
    margin: 0 0 0 0;
    padding: 1em;
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
      background-color: $blue-sky;
      display: flex;
      align-items: center;
      justify-content: center;
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
          width: 25em;
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
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
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