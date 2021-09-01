export default function ({
  app: {
    $axios,
    i18n
  }
}) {
  $axios.setBaseURL(`${document.location.origin}/api`);
  $axios.onError(error => {
    throw error
  });
  $axios.setHeader("Accept-Language", i18n.locale);
}
