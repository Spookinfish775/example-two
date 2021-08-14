<template>
  <div class="dealer-wrapper">
    <div class="dealer-header">
      <div class="title">{{ $t("dealer.title") }}</div>
      <div class="description">{{ $t("dealer.description") }}</div>
    </div>
    <form>
      <input type="text" :placeholder="namePlaceholder" />
      <input type="text" :placeholder="surnamePlaceholder" />
      <input type="text" :placeholder="emailPlaceholder" />
      <div class="number">
        <select>
          <option value="">+993</option>
          <option value="">+972</option>
          <option value="">+893</option>
          <option value="">+673</option>
          <option value="">+713</option>
          <option value="">+773</option>
          <option value="">+93</option>
          <option value="">+53</option>
          <option value="">+29</option>
          <option value="">+323</option>
        </select>
        <input type="text" :placeholder="numberPlaceholder" />
      </div>
      <div class="location">
        <input type="text" :placeholder="countryPlaceholder" />
        <input type="text" :placeholder="cityPlaceholder" />
      </div>
      <textarea cols="15" rows="5" :placeholder="textPlaceholder"></textarea>
      <div class="checkbox">
        <input type="checkbox" id="agree" />
        <label for="agree">{{ $t("form.agreePlaceholder") }}</label>
      </div>
      <input type="submit" class="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namePlaceholder: this.$t("dealer.fullNamePlaceholder"),
      surnamePlaceholder: this.$t("dealer.companyPlaceholder"),
      emailPlaceholder: this.$t("dealer.emailPlaceholder"),
      numberPlaceholder: this.$t("dealer.numberPlaceholder"),
      countryPlaceholder: this.$t("dealer.countryPlaceholder"),
      cityPlaceholder: this.$t("dealer.cityPlaceholder"),
      textPlaceholder: this.$t("dealer.textPlaceholder"),
    };
  },
};
</script>

<style lang="scss">
.dealer-wrapper {
  width: 100%;
  height: 110vh;
  padding-left: 12.13em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  font-family: Montserrat;
  .dealer-header {
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2em;
    .title {
      font-family: TT Hazelnuts;
      font-size: 3em;
      font-weight: 900;
      color: $main-color;
      text-transform: uppercase;
    }
    .description {
      font-size: 1.4em;
      font-weight: 400;
      color: $main-color;
    }
  }
  form {
    margin-bottom: 10em;
    height: 55%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    input {
      outline: none;
      width: 80%;
      background-color: transparent;
      padding: 0em 0em 0.5em 0.5em;
      border: none;
      color: $main-color;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.2em;
      border-bottom: 2px solid $main-color;
    }
    select {
      outline: none;
      width: 80%;
      background-color: transparent;
      padding: 0em 0em 0.5em 0.5em;
      border: none;
      color: $main-color;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.2em;
      border-bottom: 2px solid $main-color;
    }
    textarea {
      outline: none;
      width: 80%;
      background-color: transparent;
      padding: 0em 0em 0.5em 0.5em;
      border: none;
      color: $main-color;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.2em;
      border-bottom: 2px solid $main-color;
      resize: none;
    }
    .number {
      display: flex;
      justify-content: space-between;
      width: 80%;
      select {
        width: 30%;
      }
      input {
        width: 60%;
      }
    }
    .location {
      display: flex;
      justify-content: space-between;
      width: 80%;
      input {
        width: 45%;
      }
    }
    .checkbox {
      display: flex;
      justify-content: flex-start;
      width: 80%;
      input {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }
      #agree + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
      }
      #agree + label::before {
        content: "";
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid $main-color;
        margin-right: 1.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
      }
      #agree:checked + label::before {
        border-color: $main-color;
        background-color: $main-color;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      }
      label {
        font-weight: 400;
        font-size: 1.2em;
        color: $main-color;
        font-family: Montserrat;
        margin-left: 1em;
      }
    }
    .submit {
      width: 10em;
      height: 3.2em;
      background-color: $blue-sky;
      border: none !important;
      padding: 0 !important;
      border-radius: 2em;
      color: $default-text-color;
      font-size: 1.2em;
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: 0.1em;
    }
  }
  @include max($xlarge) {
    padding-left: 12.13em;
    justify-content: center;
    align-items: flex-start;
    .dealer-header {
      height: 10%;
      margin-bottom: 7em;
      .title {
        font-size: 3.83em;
      }
      .description {
        font-size: 1.81em;
      }
    }
    form {
      margin-bottom: 0em;
      height: 55%;
      width: 50%;
      input {
        width: 80%;
        padding: 0em 0em 0.7em 0.7em;
        font-size: 1.81em;
      }
      select {
        width: 80%;
        padding: 0em 0em 0.7em 0.7em;
        font-size: 1.81em;
      }
      textarea {
        width: 80%;
        padding: 0em 0em 0.7em 0.7em;
        font-size: 1.81em;
      }
      .number {
        width: 80%;
        select {
          width: 30%;
        }
        input {
          width: 60%;
        }
      }
      .location {
        width: 80%;
        input {
          width: 45%;
        }
      }
      .checkbox {
        width: 80%;
        #agree + label::before {
          width: 1.5em;
          height: 1.5em;
          margin-right: 1.5em;
        }
        label {
          font-size: 1.81em;
          margin-left: 1em;
        }
      }
      .submit {
        width: 11.64em;
        height: 4.18em;
        border-radius: 2em;
        font-size: 1.81em;
        font-weight: 900;
        letter-spacing: 0.1em;
      }
    }
  }
  @include max($large) {
    padding-left: 4em;
    justify-content: center;
    align-items: flex-start;
    .dealer-header {
      height: 10%;
      margin-bottom: 7em;
      .title {
        font-size: 4.73em;
      }
      .description {
        font-size: 2.71em;
      }
    }
    form {
      height: 55%;
      width: 100%;
      input {
        width: 80%;
        padding: 0em 0em 0.7em 0.7em;
        font-size: 2.71em;
      }
      select {
        width: 80%;
        padding: 0em 0em 0.7em 0.7em;
        font-size: 2.71em;
      }
      textarea {
        width: 80%;
        padding: 0em 0em 0.7em 0.7em;
        font-size: 2.71em;
      }
      .number {
        width: 80%;
        select {
          width: 30%;
        }
        input {
          width: 60%;
        }
      }
      .location {
        width: 80%;
        input {
          width: 45%;
        }
      }
      .checkbox {
        width: 80%;
        label {
          font-size: 2.71em;
          margin-left: 0em;
        }
      }
      .submit {
        width: 13.04em;
        height: 4.68em;
        border-radius: 4em;
        font-size: 2.71em;
      }
    }
  }
  @include max($small) {
    padding-left: 2.4em;
    justify-content: center;
    align-items: flex-start;
    .dealer-header {
      height: 10%;
      margin-bottom: 6em;
      .title {
        font-size: 3.12em;
      }
      .description {
        font-size: 2em;
      }
    }
    form {
      height: 70%;
      width: 100%;
      input {
        width: 95%;
        padding: 0em 0em 0.7em 0.7em;
        font-size: 2em;
      }
      select {
        width: 95%;
        padding: 0em 0em 0.7em 0.7em;
        font-size: 2em;
      }
      textarea {
        width: 95%;
        padding: 0em 0em 0.7em 0.7em;
        font-size: 2em;
      }
      .number {
        width: 95%;
        select {
          width: 30%;
        }
        input {
          width: 60%;
        }
      }
      .location {
        width: 95%;
        height: 20%;
        flex-direction: column;
        justify-content: space-around;
        input {
          width: 100%;
        }
      }
      .checkbox {
        width: 95%;
        label {
          font-size: 2em;
          margin-left: 0em;
        }
      }
      .submit {
        margin-top: 2em;
        width: 20.4em;
        height: 4.9em;
        border-radius: 4em;
        font-size: 2em;
      }
    }
  }
}
</style>