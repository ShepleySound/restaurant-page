import loadHeader from "./load-header";
import loadMenu from "./load-menu";
import loadFooter from "./load-footer";

const content = document.querySelector('#content')
content.appendChild(loadHeader())
content.appendChild(loadMenu())
content.appendChild(loadFooter())

const menuButton = document.querySelector('#menu')
menuButton.classList.add('selected')