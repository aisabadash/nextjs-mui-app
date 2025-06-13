const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'cs', 'en'],
  },
  localePath: path.resolve('./public/locales'),
};