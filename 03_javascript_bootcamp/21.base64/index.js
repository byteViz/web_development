const url = `${window.location}`;

const {hash} = window.location;
const message = atob(hash.replace('#',''));

if(message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
}
document.querySelector('#message-input').value = message;
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    const input = document.querySelector('#message-input');
    console.log(input.value);
    const encrypted = btoa(input.value);
    const link = document.querySelector('#link-input');
    link.value = `${url}#${encrypted}`;
    link.select();
});