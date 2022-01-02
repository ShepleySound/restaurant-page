import loadHeader from "./load-header";
import loadContact from "./load-contact";
import loadFooter from "./load-footer";

const content = document.querySelector('#content')
content.appendChild(loadHeader())
content.appendChild(loadContact())
content.appendChild(loadFooter())

const contactButton = document.querySelector('#contact')
contactButton.classList.add('selected')