(()=>{"use strict";var __webpack_modules__={698:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval("\n// EXTERNAL MODULE: ./src/mystic-logo-nobkg.png\nvar mystic_logo_nobkg = __webpack_require__(867);\n// EXTERNAL MODULE: ./src/beer-img.jpg\nvar beer_img = __webpack_require__(402);\n;// CONCATENATED MODULE: ./src/load-header.js\n\n\n\nfunction loadHeader() {\n    const mainHeader = document.createElement('header')\n\n    const headerLink = document.createElement('a')\n    headerLink.setAttribute('href', './index.html')\n    const headerLogo = new Image()\n    headerLogo.src = mystic_logo_nobkg\n    headerLogo.setAttribute('id', 'logo')\n    headerLink.setAttribute('id', 'logo-link')\n    headerLink.append(headerLogo)\n\n    const headerLinks = document.createElement('div')\n    headerLinks.setAttribute('id', 'header-bar')\n\n    // Hold header link names.\n    const headerNames = ['menu', 'contact']\n    // Appends links to headerLinks. Does not get appended to mainHeader.\n    headerNames.forEach(name => {\n        let link = document.createElement('a')\n        link.innerText = name.charAt(0).toUpperCase() + name.slice(1)\n        link.setAttribute('id', name)\n        link.setAttribute('href', `./${name}.html`)\n        link.classList.add('head-link')\n        headerLinks.appendChild(link)\n    })\n\n    const pageBackground = new Image()\n    pageBackground.src = beer_img\n    pageBackground.setAttribute('id', 'beer-img')\n\n    mainHeader.append(headerLink, headerLinks, pageBackground)\n    return mainHeader\n}\n;// CONCATENATED MODULE: ./src/load-menu.js\nfunction loadMenu() {\n    const content = document.createElement('div')\n    content.setAttribute('id', 'menu-content')\n\n    const categoryInfo = [\n        {\n            name: 'Drafts',\n            id: 'cat-drafts'\n        },\n        {\n            name: 'Ciders',\n            id: 'cat-ciders'\n        },\n        {\n            name: 'Food',\n            id: 'cat-food'\n        }\n    ]\n    const categories = []\n    \n    categoryInfo.forEach(category => {\n        const newCategory = document.createElement('div')\n        newCategory.setAttribute('id', category.id)\n        newCategory.classList.add('menu-category')\n        const categoryHeader = document.createElement('h2')\n        categoryHeader.classList.add('category-title')\n        categoryHeader.innerText = category.name\n        newCategory.append(categoryHeader)\n        categories.push(newCategory)\n    })\n\n\n\n\n    const drafts = categories[0]\n    const ciders = categories[1]\n    const food = categories[2]\n\n    const draftItems = [\n        {\n            name: 'Draft 1',\n            price: '$4.99',\n            description: 'Laoreet sit amet cursus sit amet.',\n        },\n        {\n            name: 'Draft 2',\n            price: '$5.99',\n            description: 'Varius sit amet mattis vulputate enim nulla aliquet porttitor.',\n        },\n        {\n            name: 'Draft 3',\n            price:'$5.99',\n            description: 'Ut etiam sit amet nisl purus.',\n        },\n        {\n            name: 'Draft 4',\n            price: '$4.99',\n            description: 'Mattis aliquam faucibus purus in massa tempor nec feugiat.',\n        },\n    ]\n\n    const ciderItems = [\n        {\n            name: 'Cider 1',\n            price: '$3.99',\n            description: 'Condimentum mattis pellentesque id nibh tortor id. Maecenas sed enim ut sem viverra aliquet eget sit.',\n        },\n        {\n            name: 'Cider 2',\n            price: '$5.99',\n            description: 'Nulla facilisi cras fermentum odio eu feugiat. Quis lectus nulla at volutpat diam.',\n        },\n        {\n            name: 'Cider 3',\n            price: '$2.99',\n            description: 'Condimentum mattis pellentesque id nibh tortor id.',\n        },\n        {\n            name: 'Cider 4',\n            price: '$4.99',\n            description: 'Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio.',\n        },\n    ]\n\n    const FoodItems = [\n        {\n            name: 'Food 1',\n            price: '$8.99',\n            description: 'Blandit volutpat maecenas volutpat blandit aliquam etiam. Sit amet risus nullam eget felis. Risus quis varius quam quisque id diam.',\n        },\n        {\n            name: 'Food 2',\n            price: '$9.99',\n            description: 'Viverra aliquet eget sit amet tellus cras. Eget sit amet tellus cras adipiscing enim eu turpis egestas. In ornare quam viverra orci sagittis eu volutpat.',\n        },\n        {\n            name: 'Food 3',\n            price: '$11.99',\n            description: 'Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Pharetra magna ac placerat vestibulum lectus mauris.',\n        },\n        {\n            name: 'Food 4',\n            price: '$6.99',\n            description: 'Quam vulputate dignissim suspendisse in est. Dolor magna eget est lorem ipsum dolor. Aliquam id diam maecenas ultricies. Auctor elit sed vulputate mi sit amet.',\n        },\n    ]\n\n    const addToMenu = function(categoryNode, itemsArray){\n        itemsArray.forEach(item => {\n            const menuItem = document.createElement('div')\n            menuItem.classList.add('menu-item')\n\n            const itemHead = document.createElement('div')\n            itemHead.classList.add('item-head')\n\n            const itemTitle = document.createElement('div')\n            itemTitle.classList.add('item-title')\n            itemTitle.innerText = item.name\n\n            const itemPrice = document.createElement('div')\n            itemPrice.classList.add('item-price')\n            itemPrice.innerText = item.price\n\n            const itemDescription = document.createElement('div')\n            itemDescription.classList.add('item-description')\n            itemDescription.innerText = item.description\n\n            itemHead.append(itemTitle, itemPrice)\n            menuItem.append(itemHead, itemDescription)\n            categoryNode.append(menuItem)\n        })\n    }\n\n    addToMenu(drafts, draftItems)\n    addToMenu(ciders, ciderItems)\n    addToMenu(food, FoodItems)\n\n    content.append(ciders, drafts, food)\n    return content\n}\n;// CONCATENATED MODULE: ./src/load-footer.js\nfunction loadFooter() {\n    const footer = document.createElement('footer')\n    const footerText = document.createElement('a')\n    footerText.setAttribute('id', 'copyright')\n    footerText.innerText = \"Robert Shepley 2022\"\n\n    footer.append(footerText)\n    return footer\n}\n;// CONCATENATED MODULE: ./src/menu.js\n\n\n\n\nconst content = document.querySelector('#content')\ncontent.appendChild(loadHeader())\ncontent.appendChild(loadMenu())\ncontent.appendChild(loadFooter())\n\nconst menuButton = document.querySelector('#menu')\nmenuButton.classList.add('selected')\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js_+_3_modules?")},402:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "7aaf276f12f7b42cf684.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/beer-img.jpg?')},867:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "0874b48be879c207ee86.png";\n\n//# sourceURL=webpack://restaurant-page/./src/mystic-logo-nobkg.png?')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var n=__webpack_require__.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__=__webpack_require__(698)})();