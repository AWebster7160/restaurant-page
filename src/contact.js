import './styles.css';

export default function contactLoad() {
    const container = document.querySelector('#container');
    container.setAttribute('class', 'contact');
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    container.style.backgroundImage = "url('./assets/chopsticks.jpg')";
    const contactMainWrapper = document.createElement('div');
    contactMainWrapper.setAttribute('id', 'contact-main-wrapper');
    container.appendChild(contactMainWrapper);
    const contactMessage = document.createElement('div');
    contactMessage.setAttribute('id', 'contact-message');
    contactMainWrapper.appendChild(contactMessage);
    const contactHead = document.createElement('h2');
    contactHead.textContent = 'Hungry for more?';
    contactMessage.appendChild(contactHead);
    const contactMain = document.createElement('p');
    contactMain.textContent = 'Let\'s talk about it!';
    contactMessage.appendChild(contactMain);
    const contactInfoWrapper = document.createElement('div');
    contactInfoWrapper.setAttribute('id', 'contact-info-wrapper');
    contactMessage.appendChild(contactInfoWrapper);
    const contactEmail = document.createElement('a');
    contactEmail.textContent = 'sushi.contact@ginkgo.com';
    contactEmail.href = 'mailto:sushi.contact@ginkgo.com'
    contactMessage.appendChild(contactEmail);
    const contactPhone = document.createElement('span');
    contactPhone.textContent = '(123)-455-4321';
    contactMessage.appendChild(contactPhone);
    const formWrapper = document.createElement('div');
    formWrapper.setAttribute('id', 'form-wrapper');
    contactMainWrapper.appendChild(formWrapper);
    const contactForm = document.createElement('form');
    formWrapper.appendChild(contactForm);
    const formLabel = document.createElement('h3');
    formLabel.textContent = 'Prefer to leave a message? Great!';
    contactForm.appendChild(formLabel);
    const firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.id = 'first-name'
    const firstNameLabel = document.createElement('label');
    firstNameLabel.textContent = 'First Name';
    firstNameLabel.htmlFor = 'first-name';
    contactForm.appendChild(firstNameLabel);
    contactForm.appendChild(firstName);
    const lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.id = 'last-name'
    const lastNameLabel = document.createElement('label');
    lastNameLabel.textContent = 'Last Name';
    lastNameLabel.htmlFor = 'last-name';
    contactForm.appendChild(lastNameLabel);
    contactForm.appendChild(lastName);
    const email = document.createElement('input');
    email.type = 'email';
    email.id = 'email'
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'E-mail';
    emailLabel.htmlFor = 'email';
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(email);
    const phone = document.createElement('input');
    phone.type = 'tel';
    phone.id = 'phone'
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone';
    phoneLabel.htmlFor = 'phone';
    contactForm.appendChild(phoneLabel);
    contactForm.appendChild(phone);
    const message = document.createElement('textarea');
    message.id = 'message'
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message';
    messageLabel.htmlFor = 'message';
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(message);
    const submit = document.createElement('button');
    submit.id = 'submit';
    submit.textContent = 'Submit';
    contactForm.appendChild(submit);
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
    });

}