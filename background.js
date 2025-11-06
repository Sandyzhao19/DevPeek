// Create context menu items when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  // Parent menu
  chrome.contextMenus.create({
    id: "converterParent",
    title: "Quick Convert with DevPeek",
    contexts: ["selection"]
  });
  
  // Time & Date submenu
  chrome.contextMenus.create({
    id: "timeParent",
    parentId: "converterParent",
    title: "⏰ Time & Date",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "convertTimestamp",
    parentId: "timeParent",
    title: "Timestamp → UTC",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "convertToTimestamp",
    parentId: "timeParent",
    title: "Date → Timestamp",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "relativeTime",
    parentId: "timeParent",
    title: "Relative Time",
    contexts: ["selection"]
  });
  
  // Encoding submenu
  chrome.contextMenus.create({
    id: "encodingParent",
    parentId: "converterParent",
    title: "🔐 Encoding",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "base64Encode",
    parentId: "encodingParent",
    title: "Base64 Encode",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "base64Decode",
    parentId: "encodingParent",
    title: "Base64 Decode",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "urlEncode",
    parentId: "encodingParent",
    title: "URL Encode",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "urlDecode",
    parentId: "encodingParent",
    title: "URL Decode",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "htmlEncode",
    parentId: "encodingParent",
    title: "HTML Entities Encode",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "htmlDecode",
    parentId: "encodingParent",
    title: "HTML Entities Decode",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "jwtDecode",
    parentId: "encodingParent",
    title: "JWT Decode",
    contexts: ["selection"]
  });
  
  // Hash submenu
  chrome.contextMenus.create({
    id: "hashParent",
    parentId: "converterParent",
    title: "🔒 Hash & Crypto",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "sha256",
    parentId: "hashParent",
    title: "SHA-256",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "sha1",
    parentId: "hashParent",
    title: "SHA-1",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "md5",
    parentId: "hashParent",
    title: "MD5",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "generateUUID",
    parentId: "hashParent",
    title: "Generate UUID",
    contexts: ["selection"]
  });
  
  // Color submenu
  chrome.contextMenus.create({
    id: "colorParent",
    parentId: "converterParent",
    title: "🎨 Color",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "colorConvert",
    parentId: "colorParent",
    title: "Convert Color (HEX/RGB/HSL)",
    contexts: ["selection"]
  });
  
  // Number submenu
  chrome.contextMenus.create({
    id: "numberParent",
    parentId: "converterParent",
    title: "🔢 Number",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "baseConvert",
    parentId: "numberParent",
    title: "Base Converter (Bin/Oct/Dec/Hex)",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "bytesConvert",
    parentId: "numberParent",
    title: "Bytes → KB/MB/GB",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "numberFormat",
    parentId: "numberParent",
    title: "Format with Commas",
    contexts: ["selection"]
  });
  
  // Text submenu
  chrome.contextMenus.create({
    id: "textParent",
    parentId: "converterParent",
    title: "📝 Text",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "caseUpper",
    parentId: "textParent",
    title: "UPPERCASE",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "caseLower",
    parentId: "textParent",
    title: "lowercase",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "caseTitle",
    parentId: "textParent",
    title: "Title Case",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "caseCamel",
    parentId: "textParent",
    title: "camelCase",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "caseSnake",
    parentId: "textParent",
    title: "snake_case",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "caseKebab",
    parentId: "textParent",
    title: "kebab-case",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "textStats",
    parentId: "textParent",
    title: "Text Statistics",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "jsonFormat",
    parentId: "textParent",
    title: "Format JSON",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "jsonMinify",
    parentId: "textParent",
    title: "Minify JSON",
    contexts: ["selection"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  const selectedText = info.selectionText.trim();
  
  switch(info.menuItemId) {
    // Time & Date
    case "convertTimestamp":
      convertTimestamp(selectedText, tab.id);
      break;
    case "convertToTimestamp":
      convertToTimestamp(selectedText, tab.id);
      break;
    case "relativeTime":
      convertRelativeTime(selectedText, tab.id);
      break;
    
    // Encoding
    case "base64Encode":
      base64Encode(selectedText, tab.id);
      break;
    case "base64Decode":
      base64Decode(selectedText, tab.id);
      break;
    case "urlEncode":
      urlEncode(selectedText, tab.id);
      break;
    case "urlDecode":
      urlDecode(selectedText, tab.id);
      break;
    case "htmlEncode":
      htmlEncode(selectedText, tab.id);
      break;
    case "htmlDecode":
      htmlDecode(selectedText, tab.id);
      break;
    case "jwtDecode":
      jwtDecode(selectedText, tab.id);
      break;
    
    // Hash
    case "sha256":
      hashText(selectedText, tab.id, 'SHA-256');
      break;
    case "sha1":
      hashText(selectedText, tab.id, 'SHA-1');
      break;
    case "md5":
      hashText(selectedText, tab.id, 'MD5');
      break;
    case "generateUUID":
      generateUUID(tab.id);
      break;
    
    // Color
    case "colorConvert":
      convertColor(selectedText, tab.id);
      break;
    
    // Number
    case "baseConvert":
      convertBase(selectedText, tab.id);
      break;
    case "bytesConvert":
      convertBytes(selectedText, tab.id);
      break;
    case "numberFormat":
      formatNumber(selectedText, tab.id);
      break;
    
    // Text
    case "caseUpper":
      changeCase(selectedText, tab.id, 'upper');
      break;
    case "caseLower":
      changeCase(selectedText, tab.id, 'lower');
      break;
    case "caseTitle":
      changeCase(selectedText, tab.id, 'title');
      break;
    case "caseCamel":
      changeCase(selectedText, tab.id, 'camel');
      break;
    case "caseSnake":
      changeCase(selectedText, tab.id, 'snake');
      break;
    case "caseKebab":
      changeCase(selectedText, tab.id, 'kebab');
      break;
    case "textStats":
      showTextStats(selectedText, tab.id);
      break;
    case "jsonFormat":
      formatJSON(selectedText, tab.id);
      break;
    case "jsonMinify":
      minifyJSON(selectedText, tab.id);
      break;
    
    default:
      break;
  }
});

// ============== TIME & DATE FUNCTIONS ==============

function convertTimestamp(text, tabId) {
  const timestamp = parseFloat(text);
  
  if (isNaN(timestamp)) {
    showAlert(tabId, "❌ Invalid Timestamp", "Please select a valid number.");
    return;
  }
  
  let date;
  
  if (timestamp.toString().replace('.', '').length <= 10) {
    date = new Date(timestamp * 1000);
  } else {
    date = new Date(timestamp);
  }
  
  if (isNaN(date.getTime())) {
    showAlert(tabId, "❌ Invalid Timestamp", "Could not convert to a valid date.");
    return;
  }
  
  const utcString = date.toUTCString();
  const isoString = date.toISOString();
  const localString = date.toString();
  
  const message = `Original: ${timestamp}\n\n` +
    `📅 UTC:\n${utcString}\n\n` +
    `🌐 ISO 8601:\n${isoString}\n\n` +
    `📍 Local Time:\n${localString}`;
  
  showAlert(tabId, "⏰ Timestamp Converter", message);
}

function convertToTimestamp(text, tabId) {
  const date = new Date(text);
  
  if (isNaN(date.getTime())) {
    showAlert(tabId, "❌ Invalid Date", "Could not parse the date string. Try formats like:\n• 2024-11-05\n• Nov 5, 2024\n• 11/05/2024");
    return;
  }
  
  const timestampSec = Math.floor(date.getTime() / 1000);
  const timestampMs = date.getTime();
  
  const message = `Input: ${text}\n\n` +
    `🕐 Seconds: ${timestampSec}\n\n` +
    `🕐 Milliseconds: ${timestampMs}\n\n` +
    `📅 UTC: ${date.toUTCString()}\n\n` +
    `📍 Local: ${date.toString()}`;
  
  showAlert(tabId, "⏰ Date to Timestamp", message);
}

function convertRelativeTime(text, tabId) {
  const timestamp = parseFloat(text);
  
  if (isNaN(timestamp)) {
    showAlert(tabId, "❌ Invalid Timestamp", "Please select a valid number.");
    return;
  }
  
  let date;
  if (timestamp.toString().replace('.', '').length <= 10) {
    date = new Date(timestamp * 1000);
  } else {
    date = new Date(timestamp);
  }
  
  if (isNaN(date.getTime())) {
    showAlert(tabId, "❌ Invalid Timestamp", "Could not convert to a valid date.");
    return;
  }
  
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);
  
  let relative;
  if (Math.abs(diffSec) < 60) {
    relative = `${Math.abs(diffSec)} seconds ${diffSec < 0 ? 'from now' : 'ago'}`;
  } else if (Math.abs(diffMin) < 60) {
    relative = `${Math.abs(diffMin)} minutes ${diffMin < 0 ? 'from now' : 'ago'}`;
  } else if (Math.abs(diffHour) < 24) {
    relative = `${Math.abs(diffHour)} hours ${diffHour < 0 ? 'from now' : 'ago'}`;
  } else if (Math.abs(diffDay) < 30) {
    relative = `${Math.abs(diffDay)} days ${diffDay < 0 ? 'from now' : 'ago'}`;
  } else if (Math.abs(diffMonth) < 12) {
    relative = `${Math.abs(diffMonth)} months ${diffMonth < 0 ? 'from now' : 'ago'}`;
  } else {
    relative = `${Math.abs(diffYear)} years ${diffYear < 0 ? 'from now' : 'ago'}`;
  }
  
  const message = `Timestamp: ${timestamp}\n\n` +
    `⏱️ Relative: ${relative}\n\n` +
    `📅 Date: ${date.toUTCString()}`;
  
  showAlert(tabId, "⏰ Relative Time", message);
}

// ============== ENCODING FUNCTIONS ==============

function base64Encode(text, tabId) {
  try {
    const encoded = btoa(unescape(encodeURIComponent(text)));
    showAlert(tabId, "🔐 Base64 Encoded", encoded, true);
  } catch (e) {
    showAlert(tabId, "❌ Encoding Error", "Could not encode text to Base64.");
  }
}

function base64Decode(text, tabId) {
  try {
    const decoded = decodeURIComponent(escape(atob(text)));
    showAlert(tabId, "🔓 Base64 Decoded", decoded, true);
  } catch (e) {
    showAlert(tabId, "❌ Decoding Error", "Invalid Base64 string.");
  }
}

function urlEncode(text, tabId) {
  try {
    const encoded = encodeURIComponent(text);
    showAlert(tabId, "🔗 URL Encoded", encoded, true);
  } catch (e) {
    showAlert(tabId, "❌ Encoding Error", "Could not URL encode text.");
  }
}

function urlDecode(text, tabId) {
  try {
    const decoded = decodeURIComponent(text);
    showAlert(tabId, "🔗 URL Decoded", decoded, true);
  } catch (e) {
    showAlert(tabId, "❌ Decoding Error", "Invalid URL encoded string.");
  }
}

function htmlEncode(text, tabId) {
  const encoded = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  
  showAlert(tabId, "🌐 HTML Entities Encoded", encoded, true);
}

function htmlDecode(text, tabId) {
  const decoded = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  
  showAlert(tabId, "🌐 HTML Entities Decoded", decoded, true);
}

function jwtDecode(text, tabId) {
  try {
    const parts = text.split('.');
    if (parts.length !== 3) {
      showAlert(tabId, "❌ Invalid JWT", "JWT must have 3 parts separated by dots.");
      return;
    }
    
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));
    
    const message = `📋 Header:\n${JSON.stringify(header, null, 2)}\n\n` +
      `📦 Payload:\n${JSON.stringify(payload, null, 2)}\n\n` +
      `⚠️ Signature: ${parts[2].substring(0, 20)}...`;
    
    showAlert(tabId, "🔐 JWT Decoded", message);
  } catch (e) {
    showAlert(tabId, "❌ Decoding Error", "Invalid JWT token.");
  }
}

// ============== HASH FUNCTIONS ==============

function hashText(text, tabId, algorithm) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: async (txt, algo) => {
      try {
        let hash;
        if (algo === 'MD5') {
          // Simple MD5 implementation
          hash = await simpleMD5(txt);
        } else {
          const encoder = new TextEncoder();
          const data = encoder.encode(txt);
          const hashBuffer = await crypto.subtle.digest(algo, data);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        }
        return hash;
      } catch (e) {
        return null;
      }
      
      // Simple MD5 implementation
      function simpleMD5(string) {
        function rotateLeft(value, shift) {
          return (value << shift) | (value >>> (32 - shift));
        }
        
        function addUnsigned(x, y) {
          const lsw = (x & 0xFFFF) + (y & 0xFFFF);
          const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return (msw << 16) | (lsw & 0xFFFF);
        }
        
        function md5cmn(q, a, b, x, s, t) {
          return addUnsigned(rotateLeft(addUnsigned(addUnsigned(a, q), addUnsigned(x, t)), s), b);
        }
        
        function md5ff(a, b, c, d, x, s, t) {
          return md5cmn((b & c) | ((~b) & d), a, b, x, s, t);
        }
        
        function md5gg(a, b, c, d, x, s, t) {
          return md5cmn((b & d) | (c & (~d)), a, b, x, s, t);
        }
        
        function md5hh(a, b, c, d, x, s, t) {
          return md5cmn(b ^ c ^ d, a, b, x, s, t);
        }
        
        function md5ii(a, b, c, d, x, s, t) {
          return md5cmn(c ^ (b | (~d)), a, b, x, s, t);
        }
        
        function convertToWordArray(string) {
          const wordArray = [];
          for (let i = 0; i < string.length * 8; i += 8) {
            wordArray[i >> 5] |= (string.charCodeAt(i / 8) & 0xFF) << (i % 32);
          }
          return wordArray;
        }
        
        function utf8Encode(string) {
          string = string.replace(/\r\n/g, "\n");
          let utftext = "";
          for (let n = 0; n < string.length; n++) {
            const c = string.charCodeAt(n);
            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
            } else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
            }
          }
          return utftext;
        }
        
        let x = convertToWordArray(utf8Encode(string));
        let a = 0x67452301;
        let b = 0xEFCDAB89;
        let c = 0x98BADCFE;
        let d = 0x10325476;
        
        x[string.length * 8 >> 5] |= 0x80 << (string.length * 8 % 32);
        x[(((string.length * 8 + 64) >>> 9) << 4) + 14] = string.length * 8;
        
        for (let i = 0; i < x.length; i += 16) {
          const olda = a;
          const oldb = b;
          const oldc = c;
          const oldd = d;
          
          a = md5ff(a, b, c, d, x[i + 0], 7, 0xD76AA478);
          d = md5ff(d, a, b, c, x[i + 1], 12, 0xE8C7B756);
          c = md5ff(c, d, a, b, x[i + 2], 17, 0x242070DB);
          b = md5ff(b, c, d, a, x[i + 3], 22, 0xC1BDCEEE);
          a = md5ff(a, b, c, d, x[i + 4], 7, 0xF57C0FAF);
          d = md5ff(d, a, b, c, x[i + 5], 12, 0x4787C62A);
          c = md5ff(c, d, a, b, x[i + 6], 17, 0xA8304613);
          b = md5ff(b, c, d, a, x[i + 7], 22, 0xFD469501);
          a = md5ff(a, b, c, d, x[i + 8], 7, 0x698098D8);
          d = md5ff(d, a, b, c, x[i + 9], 12, 0x8B44F7AF);
          c = md5ff(c, d, a, b, x[i + 10], 17, 0xFFFF5BB1);
          b = md5ff(b, c, d, a, x[i + 11], 22, 0x895CD7BE);
          a = md5ff(a, b, c, d, x[i + 12], 7, 0x6B901122);
          d = md5ff(d, a, b, c, x[i + 13], 12, 0xFD987193);
          c = md5ff(c, d, a, b, x[i + 14], 17, 0xA679438E);
          b = md5ff(b, c, d, a, x[i + 15], 22, 0x49B40821);
          a = md5gg(a, b, c, d, x[i + 1], 5, 0xF61E2562);
          d = md5gg(d, a, b, c, x[i + 6], 9, 0xC040B340);
          c = md5gg(c, d, a, b, x[i + 11], 14, 0x265E5A51);
          b = md5gg(b, c, d, a, x[i + 0], 20, 0xE9B6C7AA);
          a = md5gg(a, b, c, d, x[i + 5], 5, 0xD62F105D);
          d = md5gg(d, a, b, c, x[i + 10], 9, 0x02441453);
          c = md5gg(c, d, a, b, x[i + 15], 14, 0xD8A1E681);
          b = md5gg(b, c, d, a, x[i + 4], 20, 0xE7D3FBC8);
          a = md5gg(a, b, c, d, x[i + 9], 5, 0x21E1CDE6);
          d = md5gg(d, a, b, c, x[i + 14], 9, 0xC33707D6);
          c = md5gg(c, d, a, b, x[i + 3], 14, 0xF4D50D87);
          b = md5gg(b, c, d, a, x[i + 8], 20, 0x455A14ED);
          a = md5gg(a, b, c, d, x[i + 13], 5, 0xA9E3E905);
          d = md5gg(d, a, b, c, x[i + 2], 9, 0xFCEFA3F8);
          c = md5gg(c, d, a, b, x[i + 7], 14, 0x676F02D9);
          b = md5gg(b, c, d, a, x[i + 12], 20, 0x8D2A4C8A);
          a = md5hh(a, b, c, d, x[i + 5], 4, 0xFFFA3942);
          d = md5hh(d, a, b, c, x[i + 8], 11, 0x8771F681);
          c = md5hh(c, d, a, b, x[i + 11], 16, 0x6D9D6122);
          b = md5hh(b, c, d, a, x[i + 14], 23, 0xFDE5380C);
          a = md5hh(a, b, c, d, x[i + 1], 4, 0xA4BEEA44);
          d = md5hh(d, a, b, c, x[i + 4], 11, 0x4BDECFA9);
          c = md5hh(c, d, a, b, x[i + 7], 16, 0xF6BB4B60);
          b = md5hh(b, c, d, a, x[i + 10], 23, 0xBEBFBC70);
          a = md5hh(a, b, c, d, x[i + 13], 4, 0x289B7EC6);
          d = md5hh(d, a, b, c, x[i + 0], 11, 0xEAA127FA);
          c = md5hh(c, d, a, b, x[i + 3], 16, 0xD4EF3085);
          b = md5hh(b, c, d, a, x[i + 6], 23, 0x04881D05);
          a = md5hh(a, b, c, d, x[i + 9], 4, 0xD9D4D039);
          d = md5hh(d, a, b, c, x[i + 12], 11, 0xE6DB99E5);
          c = md5hh(c, d, a, b, x[i + 15], 16, 0x1FA27CF8);
          b = md5hh(b, c, d, a, x[i + 2], 23, 0xC4AC5665);
          a = md5ii(a, b, c, d, x[i + 0], 6, 0xF4292244);
          d = md5ii(d, a, b, c, x[i + 7], 10, 0x432AFF97);
          c = md5ii(c, d, a, b, x[i + 14], 15, 0xAB9423A7);
          b = md5ii(b, c, d, a, x[i + 5], 21, 0xFC93A039);
          a = md5ii(a, b, c, d, x[i + 12], 6, 0x655B59C3);
          d = md5ii(d, a, b, c, x[i + 3], 10, 0x8F0CCC92);
          c = md5ii(c, d, a, b, x[i + 10], 15, 0xFFEFF47D);
          b = md5ii(b, c, d, a, x[i + 1], 21, 0x85845DD1);
          a = md5ii(a, b, c, d, x[i + 8], 6, 0x6FA87E4F);
          d = md5ii(d, a, b, c, x[i + 15], 10, 0xFE2CE6E0);
          c = md5ii(c, d, a, b, x[i + 6], 15, 0xA3014314);
          b = md5ii(b, c, d, a, x[i + 13], 21, 0x4E0811A1);
          a = md5ii(a, b, c, d, x[i + 4], 6, 0xF7537E82);
          d = md5ii(d, a, b, c, x[i + 11], 10, 0xBD3AF235);
          c = md5ii(c, d, a, b, x[i + 2], 15, 0x2AD7D2BB);
          b = md5ii(b, c, d, a, x[i + 9], 21, 0xEB86D391);
          
          a = addUnsigned(a, olda);
          b = addUnsigned(b, oldb);
          c = addUnsigned(c, oldc);
          d = addUnsigned(d, oldd);
        }
        
        function wordToHex(value) {
          let hex = "";
          for (let i = 0; i < 4; i++) {
            hex += ((value >> (i * 8)) & 0xFF).toString(16).padStart(2, '0');
          }
          return hex;
        }
        
        return wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
      }
    },
    args: [text, algorithm]
  }).then(results => {
    if (results && results[0] && results[0].result) {
      const hash = results[0].result;
      showAlert(tabId, `🔒 ${algorithm} Hash`, hash, true);
    } else {
      showAlert(tabId, "❌ Hashing Error", `Could not generate ${algorithm} hash.`);
    }
  });
}

function generateUUID(tabId) {
  const uuid = crypto.randomUUID();
  showAlert(tabId, "🆔 Generated UUID", uuid, true);
}

// ============== COLOR FUNCTIONS ==============

function convertColor(text, tabId) {
  text = text.trim().replace(/\s+/g, '');
  
  let hex = '', rgb = '', hsl = '';
  
  // Try HEX
  if (/^#?[0-9A-Fa-f]{6}$/.test(text)) {
    hex = text.startsWith('#') ? text : '#' + text;
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    rgb = `rgb(${r}, ${g}, ${b})`;
    hsl = rgbToHsl(r, g, b);
  }
  // Try RGB
  else if (/^rgb\((\d+),(\d+),(\d+)\)$/.test(text)) {
    const match = text.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    rgb = text;
    hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    hsl = rgbToHsl(r, g, b);
  }
  // Try HSL
  else if (/^hsl\((\d+),(\d+)%?,(\d+)%?\)$/.test(text)) {
    const match = text.match(/^hsl\((\d+),(\d+)%?,(\d+)%?\)$/);
    const h = parseInt(match[1]);
    const s = parseInt(match[2]);
    const l = parseInt(match[3]);
    hsl = `hsl(${h}, ${s}%, ${l}%)`;
    const [r, g, b] = hslToRgb(h, s, l);
    rgb = `rgb(${r}, ${g}, ${b})`;
    hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  } else {
    showAlert(tabId, "❌ Invalid Color", "Please select a valid color format:\n• HEX: #FF5733 or FF5733\n• RGB: rgb(255,87,51)\n• HSL: hsl(9,100%,60%)");
    return;
  }
  
  const message = `🎨 HEX: ${hex.toUpperCase()}\n\n` +
    `🎨 RGB: ${rgb}\n\n` +
    `🎨 HSL: ${hsl}\n\n` +
    `Color preview: ■`;
  
  showAlertWithColor(tabId, "🎨 Color Converter", message, hex);
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

function hslToRgb(h, s, l) {
  h /= 360; s /= 100; l /= 100;
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// ============== NUMBER FUNCTIONS ==============

function convertBase(text, tabId) {
  const num = text.replace(/\s+/g, '');
  
  let decimal;
  
  // Try to detect format
  if (/^0b[01]+$/i.test(num)) {
    decimal = parseInt(num.slice(2), 2);
  } else if (/^0o[0-7]+$/i.test(num)) {
    decimal = parseInt(num.slice(2), 8);
  } else if (/^0x[0-9a-f]+$/i.test(num)) {
    decimal = parseInt(num.slice(2), 16);
  } else if (/^[01]+$/.test(num)) {
    decimal = parseInt(num, 2);
  } else if (/^[0-7]+$/.test(num)) {
    decimal = parseInt(num, 8);
  } else if (/^[0-9]+$/.test(num)) {
    decimal = parseInt(num, 10);
  } else if (/^[0-9a-f]+$/i.test(num)) {
    decimal = parseInt(num, 16);
  } else {
    showAlert(tabId, "❌ Invalid Number", "Could not parse the number.");
    return;
  }
  
  if (isNaN(decimal)) {
    showAlert(tabId, "❌ Invalid Number", "Could not convert the number.");
    return;
  }
  
  const message = `Input: ${text}\n\n` +
    `🔢 Decimal: ${decimal}\n\n` +
    `💻 Binary: ${decimal.toString(2)}\n\n` +
    `🎯 Octal: ${decimal.toString(8)}\n\n` +
    `🔣 Hexadecimal: ${decimal.toString(16).toUpperCase()}`;
  
  showAlert(tabId, "🔢 Base Converter", message);
}

function convertBytes(text, tabId) {
  const bytes = parseFloat(text);
  
  if (isNaN(bytes)) {
    showAlert(tabId, "❌ Invalid Number", "Please select a valid number.");
    return;
  }
  
  const kb = bytes / 1024;
  const mb = kb / 1024;
  const gb = mb / 1024;
  const tb = gb / 1024;
  
  const message = `Input: ${bytes.toLocaleString()} bytes\n\n` +
    `📦 Kilobytes (KB): ${kb.toFixed(2)}\n\n` +
    `📦 Megabytes (MB): ${mb.toFixed(2)}\n\n` +
    `📦 Gigabytes (GB): ${gb.toFixed(4)}\n\n` +
    `📦 Terabytes (TB): ${tb.toFixed(6)}`;
  
  showAlert(tabId, "💾 Bytes Converter", message);
}

function formatNumber(text, tabId) {
  const num = parseFloat(text.replace(/,/g, ''));
  
  if (isNaN(num)) {
    showAlert(tabId, "❌ Invalid Number", "Please select a valid number.");
    return;
  }
  
  const formatted = num.toLocaleString('en-US');
  showAlert(tabId, "🔢 Formatted Number", formatted, true);
}

// ============== TEXT FUNCTIONS ==============

function changeCase(text, tabId, caseType) {
  let result;
  
  switch(caseType) {
    case 'upper':
      result = text.toUpperCase();
      break;
    case 'lower':
      result = text.toLowerCase();
      break;
    case 'title':
      result = text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      break;
    case 'camel':
      result = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
      break;
    case 'snake':
      result = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '_').replace(/(^_|_$)/g, '');
      break;
    case 'kebab':
      result = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      break;
  }
  
  showAlert(tabId, "📝 Case Converted", result, true);
}

function showTextStats(text, tabId) {
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  const lines = text.split(/\r\n|\r|\n/).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
  
  const message = `📊 Characters: ${chars.toLocaleString()}\n\n` +
    `📊 Characters (no spaces): ${charsNoSpaces.toLocaleString()}\n\n` +
    `📊 Words: ${words.toLocaleString()}\n\n` +
    `📊 Lines: ${lines.toLocaleString()}\n\n` +
    `📊 Sentences: ${sentences.toLocaleString()}\n\n` +
    `📊 Paragraphs: ${paragraphs.toLocaleString()}`;
  
  showAlert(tabId, "📊 Text Statistics", message);
}

function formatJSON(text, tabId) {
  try {
    const obj = JSON.parse(text);
    const formatted = JSON.stringify(obj, null, 2);
    showAlert(tabId, "📋 Formatted JSON", formatted, true);
  } catch (e) {
    showAlert(tabId, "❌ Invalid JSON", "Could not parse JSON: " + e.message);
  }
}

function minifyJSON(text, tabId) {
  try {
    const obj = JSON.parse(text);
    const minified = JSON.stringify(obj);
    showAlert(tabId, "📋 Minified JSON", minified, true);
  } catch (e) {
    showAlert(tabId, "❌ Invalid JSON", "Could not parse JSON: " + e.message);
  }
}

// ============== UTILITY FUNCTIONS ==============

function showAlert(tabId, title, message, addCopy = false) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: (ttl, msg, copy) => {
      const existingPopup = document.getElementById('quick-convert-popup');
      if (existingPopup) existingPopup.remove();
      const existingOverlay = document.getElementById('quick-convert-overlay');
      if (existingOverlay) existingOverlay.remove();
      
      const popup = document.createElement('div');
      popup.id = 'quick-convert-popup';
      popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border: 2px solid #4CAF50;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        z-index: 2147483647;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: #333;
      `;
      
      const msgEscaped = msg.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      
      popup.innerHTML = `
        <h3 style="margin: 0 0 16px 0; color: #4CAF50; font-size: 18px; font-weight: 600;">${ttl.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>
        <div style="white-space: pre-wrap; line-height: 1.6; font-size: 14px; background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 16px; font-family: 'Consolas', 'Monaco', monospace; word-break: break-all;">${msgEscaped}</div>
        <div style="display: flex; gap: 8px;">
          ${copy ? '<button id="copy-result" style="flex: 1; padding: 10px 20px; background: #2196F3; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">Copy</button>' : ''}
          <button id="close-popup" style="flex: 1; padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">Close</button>
        </div>
      `;
      
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        z-index: 2147483646;
        backdrop-filter: blur(2px);
      `;
      overlay.id = 'quick-convert-overlay';
      
      document.body.appendChild(overlay);
      document.body.appendChild(popup);
      
      const closePopup = () => {
        popup.remove();
        overlay.remove();
        document.removeEventListener('keydown', escHandler);
      };
      
      document.getElementById('close-popup').addEventListener('click', closePopup);
      overlay.addEventListener('click', closePopup);
      
      if (copy) {
        document.getElementById('copy-result').addEventListener('click', () => {
          navigator.clipboard.writeText(msg).then(() => {
            const btn = document.getElementById('copy-result');
            const originalText = btn.textContent;
            btn.textContent = '✓ Copied!';
            btn.style.background = '#4CAF50';
            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.background = '#2196F3';
            }, 2000);
          });
        });
      }
      
      const escHandler = (e) => {
        if (e.key === 'Escape') closePopup();
      };
      document.addEventListener('keydown', escHandler);
    },
    args: [title, message, addCopy]
  });
}

function showAlertWithColor(tabId, title, message, color) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: (ttl, msg, clr) => {
      const existingPopup = document.getElementById('quick-convert-popup');
      if (existingPopup) existingPopup.remove();
      const existingOverlay = document.getElementById('quick-convert-overlay');
      if (existingOverlay) existingOverlay.remove();
      
      const popup = document.createElement('div');
      popup.id = 'quick-convert-popup';
      popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border: 2px solid #4CAF50;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        z-index: 2147483647;
        max-width: 600px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: #333;
      `;
      
      const msgEscaped = msg.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      
      popup.innerHTML = `
        <h3 style="margin: 0 0 16px 0; color: #4CAF50; font-size: 18px; font-weight: 600;">${ttl.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>
        <div style="white-space: pre-wrap; line-height: 1.6; font-size: 14px; background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 16px; font-family: 'Consolas', 'Monaco', monospace;">${msgEscaped}</div>
        <div style="width: 100%; height: 60px; background: ${clr}; border-radius: 8px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);"></div>
        <div style="display: flex; gap: 8px;">
          <button id="copy-result" style="flex: 1; padding: 10px 20px; background: #2196F3; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">📋 Copy</button>
          <button id="close-popup" style="flex: 1; padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">Close</button>
        </div>
      `;
      
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        z-index: 2147483646;
        backdrop-filter: blur(2px);
      `;
      overlay.id = 'quick-convert-overlay';
      
      document.body.appendChild(overlay);
      document.body.appendChild(popup);
      
      const closePopup = () => {
        popup.remove();
        overlay.remove();
        document.removeEventListener('keydown', escHandler);
      };
      
      document.getElementById('close-popup').addEventListener('click', closePopup);
      overlay.addEventListener('click', closePopup);
      
      document.getElementById('copy-result').addEventListener('click', () => {
        const copyText = msg.split('Color preview:')[0].trim();
        navigator.clipboard.writeText(copyText).then(() => {
          const btn = document.getElementById('copy-result');
          const originalText = btn.textContent;
          btn.textContent = '✓ Copied!';
          btn.style.background = '#4CAF50';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#2196F3';
          }, 2000);
        });
      });
      
      const escHandler = (e) => {
        if (e.key === 'Escape') closePopup();
      };
      document.addEventListener('keydown', escHandler);
    },
    args: [title, message, color]
  });
}