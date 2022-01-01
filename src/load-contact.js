export default function loadContact() {
    const content = document.createElement('div')
    content.setAttribute('id', 'contact-content')

    const form = document.createElement('form')
    form.setAttribute('action', 'javascript:void(0);')
    form.setAttribute('id', 'contact-form')

    const fNameLabel = document.createElement('label')
    const lNameLabel = document.createElement('label')
    const emailLabel = document.createElement('label')
    const subjectLabel = document.createElement('label')
    const messageLabel = document.createElement('label')

    Object.assign(fNameLabel, {
        for: 'fname',
        innerText: 'First Name'
    })
    Object.assign(lNameLabel, {
        for: 'lname',
        innerText: 'Last Name'
    })
    Object.assign(emailLabel, {
        for: 'email',
        innerText: 'Email'
    })
    Object.assign(subjectLabel, {
        for: 'subject',
        innerText: 'Subject'
    })
    Object.assign(messageLabel, {
        for: 'message',
        innerText: 'Message'
    })
    
    const fNameInput = document.createElement('input')
    const lNameInput = document.createElement('input')
    const emailInput = document.createElement('input')
    const subjectInput = document.createElement('input')
    const messageInput = document.createElement('textarea')
    const submitButton = document.createElement('input')

    Object.assign(fNameInput, {
        type: 'text',
        name: 'firstname',
        id: 'fname'
    })
    Object.assign(lNameInput, {
        type: 'text',
        name: 'lastname',
        id: 'lname'
    })
    Object.assign(emailInput, {
        type: 'text',
        name: 'email',
        id: 'email'
    })
    Object.assign(subjectInput, {
        type: 'text',
        name: 'subject',
        id: 'subject'
    })
    Object.assign(messageInput, {
        name: 'message',
        id: 'message',
    })
    Object.assign(messageInput.style, {
        height: '200px'
    })
    Object.assign(submitButton, {
        type: 'submit',
        value: 'Submit'
    })

    const submitModal = document.createElement('div')
    submitModal.setAttribute('id', 'submit-modal')
    const modalContent = document.createElement('div')
    modalContent.classList.add('modal-content')
    const modalClose = document.createElement('span')
    modalClose.classList.add('close')
    modalClose.innerText = '𝗑'
    const modalText = document.createElement('p')
    modalText.innerText = 'Thanks for contacting us!'
    modalContent.append(modalClose, modalText)
    submitModal.append(modalContent)

    submitButton.addEventListener('click', () => {
        submitModal.style.display = 'block'
    })

    modalClose.addEventListener('click', () => {
        submitModal.style.display = 'none'
    })

    window.addEventListener('click', e => {
        if (e.target == submitModal) {
            submitModal.style.display = 'none'
        }
    })

    form.append(fNameLabel, 
                fNameInput, 
                lNameLabel, 
                lNameInput,
                emailLabel,
                emailInput,
                subjectLabel,
                subjectInput,
                messageLabel,
                messageInput,
                submitButton)
    content.append(form, submitModal)
    return content
}