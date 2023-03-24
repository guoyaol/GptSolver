var supportLanguages = [
  ["auto", "auto"],
  ["zh-Hans", "zh-CN"],
  ["zh-Hant", "zh-TW"],
  ["en", "en"],
];

exports.supportLanguages = supportLanguages;
exports.langMap = new Map(supportLanguages);
exports.langMapReverse = new Map(
  supportLanguages.map(([standardLang, lang]) => [lang, standardLang])
);
