let type = document.querySelector('select[name="type"]');
let timeout = document.querySelector('input[name="timeout"]');
let message = document.querySelector('textarea');
document.querySelector('button').onclick = function () {
  notice(message.value, type.value, timeout.value);
}