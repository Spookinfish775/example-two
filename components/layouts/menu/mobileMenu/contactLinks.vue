<template>
  <div class="contact-links-wrapper">
    <div class="contact-link-group">
      <div class="link-wrapper">
        <a to="/" class="contact-link">{{ $t("menu.contactsSubMenuLink") }}</a>
      </div>
    </div>
    <div class="contact-info">
      <div class="info">
        <img src="/img/phone.svg" alt="phone" />
        <div class="text">
          <p>+99312 576239</p>
          <p>+99312 576240</p>
        </div>
      </div>
      <div class="info">
        <img src="/img/mail.svg" alt="mail" />
        <div class="text">
          <p>info@bagtlyzamana.com</p>
        </div>
      </div>
      <div class="info">
        <img src="/img/location.svg" alt="location" />
        <div class="text">
          <p>
            Туркменистан, Ахалалский велаят, Ак бугдай этрап, город Анев, улица
            Телекечилер, дом № 14
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
      font-size: 2em;
      color: $default-text-color;
      font-weight: 900;
      padding-left: 6.2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .contact-link {
        text-transform: uppercase;
        color: $default-text-color;
      }
    }
  }
  .contact-info {
    width: 100%;
    height: 23em;
    position: absolute;
    bottom: 0;
    padding-left: 10.6em;
    .info {
      padding: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      img {
        width: 1.12em;
        margin: 0.1em 1em 1em 1em;
      }
      .text {
        width: 30.1em;
        p {
          font-size: 1.4em;
          color: $default-text-color;
        }
      }
    }
  }
}
</style>