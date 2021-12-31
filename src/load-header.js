import barLogo from './mystic-logo-nobkg.png'
import backgroundImage from './beer-img.jpg'

export default function loadHeader() {
    const mainHeader = document.createElement('header')

    const headerLogo = new Image()
    headerLogo.src = barLogo
    headerLogo.setAttribute('id', 'logo')

    const headerLinks = document.createElement('div')
    headerLinks.setAttribute('id', 'header-bar')

    // Hold header link names.
    const headerNames = ['menu', 'contact']
    // Appends links to headerLinks. Does not get appended to mainHeader.
    headerNames.forEach(name => {
        let link = document.createElement('a')
        link.innerText = name.charAt(0).toUpperCase() + name.slice(1)
        link.setAttribute('id', name)
        link.classList.add('head-link')
        headerLinks.appendChild(link)
    })

    const pageBackground = new Image()
    pageBackground.src = backgroundImage
    pageBackground.setAttribute('id', 'beer-img')

    mainHeader.append(headerLogo, headerLinks, pageBackground)
    return mainHeader
}