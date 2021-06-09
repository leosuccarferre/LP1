
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['QjRHpHmEJ32NBpDRFrUUm'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  