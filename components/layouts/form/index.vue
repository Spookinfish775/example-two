<template>
  <div class="form-wrapper">
    <form action="" class="main-form">
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
      namePlaceholder: this.$t("form.namePlaceholder"),
      surnamePlaceholder: this.$t("form.surnamePlaceholder"),
      emailPlaceholder: this.$t("form.emailPlaceholder"),
      numberPlaceholder: this.$t("form.numberPlaceholder"),
      countryPlaceholder: this.$t("form.countryPlaceholder"),
      cityPlaceholder: this.$t("form.cityPlaceholder"),
      textPlaceholder: this.$t("form.textPlaceholder"),
    };
  },
};
</script>

<style lang="scss">
.form-wrapper {
  .main-form {
    width: 67.75em;
    height: 97.18em;
    background-color: $default-text-color;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid $main-color;
    input {
      outline: none;
      width: 80%;
      background-color: transparent;
      padding: 0em 0em 1em 1em;
      border: none;
      color: $main-color;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.85em;
      border-bottom: 2px solid $main-color;
    }
    select {
      outline: none;
      width: 80%;
      background-color: transparent;
      padding: 0em 0em 1em 1em;
      border: none;
      color: $main-color;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.85em;
      border-bottom: 2px solid $main-color;
    }
    textarea {
      outline: none;
      width: 80%;
      background-color: transparent;
      padding: 0em 0em 1em 1em;
      border: none;
      color: $main-color;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.85em;
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
        border-color: #0b76ef;
        background-color: #0b76ef;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      }
      label {
        font-weight: 400;
        font-size: 1.82em;
        color: $main-color;
        font-family: Montserrat;
        margin-left: 1em;
      }
    }
    .submit {
      width: 11.39em;
      height: 4.09em;
      background-color: $blue-sky;
      border: none !important;
      padding: 0 !important;
      border-radius: 2em;
      color: $default-text-color;
      font-size: 1.85em;
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: 0.1em;
    }
  }
}
</style>