var Validation = {
  REGEX: {
    email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    website: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
    phoneInternational: /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
    nameExtra: /^[^`\\{}$%:*();<>"~]+$/,
    role: /^[^`\\{}$%:*();<>"~]{0,25}$/,
    businessExtra: /^[^*|\":<>[\]{}`\\()';@&$]+$/,
    industry: /^[A-Za-z0-9 .'-,\(\)]+$/,
    memberID: /^[a-zA-Z0-9](([a-zA-Z0-9-]+)?[a-zA-Z0-9])?$/,
    imageFormat: /.(?:jpe?g|png|gif)$/
  },
  isPostalCode: function (code, countryCode) {
    var postalCodeRegexes = {
      'CA': /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1}( )?\d{1}[A-Z]{1}\d{1}$/,
      'US': /^\d{5}(-\d{4})?$/,
      'default': /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1}( )?\d{1}[A-Z]{1}\d{1}$/
    }
    var reg = postalCodeRegexes[countryCode]
    if (!reg) reg = postalCodeRegexes['default']
    return reg.test(code)
  }
}

module.exports = Validation
