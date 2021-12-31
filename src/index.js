import loadHeader from "./load-header";
import loadHome from "./load-home";
import loadFooter from "./load-footer";

const content = document.querySelector('#content')
content.append(loadHeader())
content.append(loadHome())
content.append(loadFooter())
