const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup'); // Corrigido: alterado para 'btnlogin-popup'
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => { // Corrigido: alterado para 'registerLink'
    wrapper.classList.add('active'); // Corrigido: alterado para 'active'
});

loginLink.addEventListener('click', () => { // Corrigido: alterado para 'loginLink'
    wrapper.classList.remove('active'); // Corrigido: alterado para 'active'
});

btnPopup.addEventListener('click', () => { // Corrigido: alterado para 'btnPopup'
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
