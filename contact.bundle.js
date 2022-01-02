(()=>{"use strict";var __webpack_modules__={788:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval("\n// EXTERNAL MODULE: ./src/mystic-logo-nobkg.png\nvar mystic_logo_nobkg = __webpack_require__(867);\n// EXTERNAL MODULE: ./src/beer-img.jpg\nvar beer_img = __webpack_require__(402);\n;// CONCATENATED MODULE: ./src/load-header.js\n\n\n\nfunction loadHeader() {\n    const mainHeader = document.createElement('header')\n\n    const headerLink = document.createElement('a')\n    headerLink.setAttribute('href', './index.html')\n    const headerLogo = new Image()\n    headerLogo.src = mystic_logo_nobkg\n    headerLogo.setAttribute('id', 'logo')\n    headerLink.setAttribute('id', 'logo-link')\n    headerLink.append(headerLogo)\n\n    const headerLinks = document.createElement('div')\n    headerLinks.setAttribute('id', 'header-bar')\n\n    // Hold header link names.\n    const headerNames = ['menu', 'contact']\n    // Appends links to headerLinks. Does not get appended to mainHeader.\n    headerNames.forEach(name => {\n        let link = document.createElement('a')\n        link.innerText = name.charAt(0).toUpperCase() + name.slice(1)\n        link.setAttribute('id', name)\n        link.setAttribute('href', `./${name}.html`)\n        link.classList.add('head-link')\n        headerLinks.appendChild(link)\n    })\n\n    const pageBackground = new Image()\n    pageBackground.src = beer_img\n    pageBackground.setAttribute('id', 'beer-img')\n\n    mainHeader.append(headerLink, headerLinks, pageBackground)\n    return mainHeader\n}\n;// CONCATENATED MODULE: ./src/load-contact.js\nfunction loadContact() {\n    const content = document.createElement('div')\n    content.setAttribute('id', 'contact-content')\n\n    const form = document.createElement('form')\n    form.setAttribute('action', 'javascript:void(0);')\n    form.setAttribute('id', 'contact-form')\n\n    const fNameLabel = document.createElement('label')\n    const lNameLabel = document.createElement('label')\n    const emailLabel = document.createElement('label')\n    const subjectLabel = document.createElement('label')\n    const messageLabel = document.createElement('label')\n\n    Object.assign(fNameLabel, {\n        for: 'fname',\n        innerText: 'First Name'\n    })\n    Object.assign(lNameLabel, {\n        for: 'lname',\n        innerText: 'Last Name'\n    })\n    Object.assign(emailLabel, {\n        for: 'email',\n        innerText: 'Email'\n    })\n    Object.assign(subjectLabel, {\n        for: 'subject',\n        innerText: 'Subject'\n    })\n    Object.assign(messageLabel, {\n        for: 'message',\n        innerText: 'Message'\n    })\n    \n    const fNameInput = document.createElement('input')\n    const lNameInput = document.createElement('input')\n    const emailInput = document.createElement('input')\n    const subjectInput = document.createElement('input')\n    const messageInput = document.createElement('textarea')\n    const submitButton = document.createElement('input')\n\n    Object.assign(fNameInput, {\n        type: 'text',\n        name: 'firstname',\n        id: 'fname'\n    })\n    Object.assign(lNameInput, {\n        type: 'text',\n        name: 'lastname',\n        id: 'lname'\n    })\n    Object.assign(emailInput, {\n        type: 'text',\n        name: 'email',\n        id: 'email'\n    })\n    Object.assign(subjectInput, {\n        type: 'text',\n        name: 'subject',\n        id: 'subject'\n    })\n    Object.assign(messageInput, {\n        name: 'message',\n        id: 'message',\n    })\n    Object.assign(messageInput.style, {\n        height: '200px'\n    })\n    Object.assign(submitButton, {\n        type: 'submit',\n        value: 'Submit'\n    })\n\n    const submitModal = document.createElement('div')\n    submitModal.setAttribute('id', 'submit-modal')\n    const modalContent = document.createElement('div')\n    modalContent.classList.add('modal-content')\n    const modalClose = document.createElement('span')\n    modalClose.classList.add('close')\n    modalClose.innerText = '𝗑'\n    const modalText = document.createElement('p')\n    modalText.innerText = 'Thanks for contacting us!'\n    modalContent.append(modalClose, modalText)\n    submitModal.append(modalContent)\n\n    submitButton.addEventListener('click', () => {\n        submitModal.style.display = 'block'\n    })\n\n    modalClose.addEventListener('click', () => {\n        submitModal.style.display = 'none'\n    })\n\n    window.addEventListener('click', e => {\n        if (e.target == submitModal) {\n            submitModal.style.display = 'none'\n        }\n    })\n\n    form.append(fNameLabel, \n                fNameInput, \n                lNameLabel, \n                lNameInput,\n                emailLabel,\n                emailInput,\n                subjectLabel,\n                subjectInput,\n                messageLabel,\n                messageInput,\n                submitButton)\n    content.append(form, submitModal)\n    return content\n}\n;// CONCATENATED MODULE: ./src/load-footer.js\nfunction loadFooter() {\n    const footer = document.createElement('footer')\n    const footerText = document.createElement('a')\n    footerText.setAttribute('id', 'copyright')\n    footerText.innerText = \"Robert Shepley 2022\"\n\n    footer.append(footerText)\n    return footer\n}\n;// CONCATENATED MODULE: ./src/contact.js\n\n\n\n\nconst content = document.querySelector('#content')\ncontent.appendChild(loadHeader())\ncontent.appendChild(loadContact())\ncontent.appendChild(loadFooter())\n\nconst contactButton = document.querySelector('#contact')\ncontactButton.classList.add('selected')\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js_+_3_modules?")},402:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "7aaf276f12f7b42cf684.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/beer-img.jpg?')},867:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "0874b48be879c207ee86.png";\n\n//# sourceURL=webpack://restaurant-page/./src/mystic-logo-nobkg.png?')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var n=__webpack_require__.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__=__webpack_require__(788)})();