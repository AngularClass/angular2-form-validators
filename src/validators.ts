// problem with chrome
// const creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
export function isCreditCard(value?: any): boolean {
  let sanitized = value.replace(/[^0-9]+/g, '');
  // problem with chrome
  if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized))) {
    return false;
  }
  let sum = 0;
  let digit;
  let tmpNum;
  let shouldDouble;
  for (let i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, (i + 1));
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += ((tmpNum % 10) + 1);
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return Boolean((sum % 10) === 0 ? sanitized : false);
}




export function isJSON(value?: any): boolean {
  try {
    let obj = JSON.parse(value);
    return Boolean(obj) && typeof obj === 'object';
  } catch (e) {}
  return false;
}



// problem with chrome
// const validatorExp = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i;
export function isBase64(value?: any): boolean {
// problem with chrome
  return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(value);
}





const phones = {
  'zh-CN': /^(\+?0?86\-?)?((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'pt-PT': /^(\+351)?9[1236]\d{7}$/,
  'el-GR': /^(\+?30)?(69\d{8})$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'en-ZM': /^(\+26)?09[567]\d{7}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'vi-VN': /^(0|\+?84)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/
};
export function isPhone(value?: any, locale?: any): boolean {
  let pattern = phones[locale] || uuid['en-US'];
  // problem with chrome
  return (new RegExp(pattern)).test(value);
};




const uuid = {
  '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
export function isUUID(value: string, version?: string): boolean {
  let pattern = uuid[version] || uuid.all;
  // problem with chrome
  return (new RegExp(pattern)).test(value);
}





var default_email_options = {
  allow_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;

var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;

var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;

export function isEmail (str?: any, opts: any = {}) {
  var options = Object.assign({}, opts, default_email_options);

  if (options.allow_display_name) {
    var display_email = str.match((new RegExp(displayName, 'i')));
    if (display_email) {
      str = display_email[1];
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  // if (!isByteLength(user, 0, 64) ||
  //   !isByteLength(domain, 0, 256)) {
  //   return false;
  // }

  // if (!isFQDN(domain, {require_tld: options.require_tld})) {
  //   return false;
  // }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ?
      (new RegExp(quotedEmailUserUtf8, 'i')).test(user) :
      (new RegExp(quotedEmailUser, 'i')).test(user);
  }

  var pattern = options.allow_utf8_local_part ?
    (new RegExp(emailUserUtf8Part, 'i')) : (new RegExp(emailUserPart, 'i'));

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
