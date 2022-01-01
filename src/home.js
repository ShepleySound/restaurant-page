import loadHeader from "./load-header";
import loadHome from "./load-home";
import loadFooter from "./load-footer";

const content = document.querySelector('#content')
content.appendChild(loadHeader())
content.appendChild(loadHome())
content.appendChild(loadFooter())