<template>
  <div class="contact-links-wrapper">
    <div class="contact-link-group">
      <div class="link-wrapper">
        <nuxt-link to="/dealership" class="contact-link">{{
          $t("menu.contactsSubMenuLink")
        }}</nuxt-link>
      </div>
    </div>
    <div class="contact-info">
      <div class="info">
        <img src="/img/phone.svg" alt="phone" />
        <div class="text">
          <p>
            <a href="tel:+99312 576239">+99312 576239</a>
          </p>
          <p>
            <a href="tel:+99312 576240">+99312 576240</a>
          </p>
        </div>
      </div>
      <div class="info">
        <img src="/img/mail.svg" alt="mail" />
        <div class="text">
          <p>
            <a href="mailto:info@bagtlyzamana.com">info@bagtlyzamana.com</a>
          </p>
        </div>
      </div>
      <div class="info">
        <img src="/img/location.svg" alt="location" />
        <div class="text">
          <p>
            {{ $t("menu.contactsSubMenuLocation") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contact-links-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $main-color;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .contact-link-group {
    width: 100%;
    height: 40.3em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .link-wrapper {
      width: 92%;
      color: $default-text-color;
      font-weight: 900;
      padding-left: 12.3em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .contact-link {
        font-size: 2em;
        text-transform: uppercase;
        color: $default-text-color;
      }
    }
  }
  .contact-info {
    width: 100%;
    height: 36em;
    position: absolute;
    bottom: 0;
    padding-left: 12.3em;
    .info {
      padding: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      img {
        width: 1.2em;
        margin: 0.4em 2em 2em 0em;
      }
      .text {
        width: 62em;
        p {
          font-size: 1.4em;
          font-weight: 300;
          color: $default-text-color;
        }
        a {
          text-decoration: none;
          color: $default-text-color;
        }
      }
    }
  }
  @include max($small) {
    justify-content: center;
    align-items: center;
    .contact-link-group {
      width: 100%;
      height: 30em;
      justify-content: space-between;
      align-items: flex-start;
      .link-wrapper {
        font-weight: 700;
        padding-left: 1.6em;
        justify-content: space-between;
        align-items: center;
        .contact-link {
          font-size: 1.8em;
        }
      }
    }
    .contact-info {
      width: 100%;
      height: 25em;
      padding-left: 1.6em;
      .info {
        padding: 5px;
        justify-content: flex-start;
        align-items: flex-start;
        img {
          width: 1.12em;
          margin: 0.9em 2em 2em 0em;
        }
        .text {
          width: 62em;
          p {
            font-size: 1.2em;
            font-weight: 400;
            line-height: 2em;
          }
        }
      }
    }
  }
}
</style>