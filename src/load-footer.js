export default function loadFooter() {
    const footer = document.createElement('footer')
    const footerText = document.createElement('a')
    footerText.setAttribute('id', 'copyright')
    footerText.innerText = "Robert Shepley 2022"

    footer.append(footerText)
    return footer
}