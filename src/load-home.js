import barImage from './bar-img.jpg'

export default function loadHome() {
    const content = document.createElement('div')
    content.setAttribute('id', 'home-content')

    const homeImage = new Image()
    homeImage.src = barImage
    homeImage.setAttribute('id', 'bar-img')

    const homeText = document.createElement('div')
    homeText.setAttribute('id', 'home-text')
    const bigText = document.createElement('h2')
    bigText.innerText = 'Find your inner Mystic'
    const smallText = document.createElement('p')
    smallText.innerText = 'Eu mi bibendum neque egestas congue quisque.<br>Arcu felis bibendum ut tristique et egestas.'
    homeText.append(bigText, smallText)

    content.append(homeImage, homeText)
    return content
}