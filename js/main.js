let type = document.querySelector('select[name="type"]');
let lifetime = document.querySelector('input[name="lifetime"]');
let message = document.querySelector('textarea');

document.querySelector('button').onclick = () => {

  notice(message.value, type.value, lifetime.value);

}