// ==UserScript==
// @name         PoETransferJPLanguage
// @namespace    https://github.com/ryusus4/poe_transfer_jp_language
// @version      1.3.24.0
// @description  PoEのトレードサイトで日本語と英語を一部変換できるようにします。
// @author       ryusus4
// @match        https://*.pathofexile.com/trade*
// @downloadURL  https://github.com/ryusus4/poe_transfer_jp_language/raw/main/poe_transfer_jp_language.user.js
// @updateURL    https://github.com/ryusus4/poe_transfer_jp_language/raw/main/poe_transfer_jp_language.user.js
// @supportURL   https://github.com/ryusus4/poe_transfer_jp_language
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pathofexile.com
// @grant        GM_addStyle
// ==/UserScript==

document.getElementsByClassName('language-select')[0].addEventListener('click', function (event) {
  event.preventDefault();

  var url = ''
  if (location.host == 'jp.pathofexile.com') {
    url = 'https://www.pathofexile.com' + location.pathname;
    location = url;
  } else if (location.host == 'www.pathofexile.com') {
    url = 'https://jp.pathofexile.com' + location.pathname;
    location = url;
  }
});

// ----------------------------------------- CSS編集 -----------------------------------------
var css = ''

// 言語
css += '.br-lang { display: none; } .ru-lang { display: none; } .th-lang { display: none; } .de-lang { display: none; } .fr-lang { display: none; } .es-lang { display: none; } .kr-lang { display: none; }'

GM_addStyle(css)
