function notice(message, type = 'info', timeremove = 3000 ) {
    let notice = document.createElement('div');
    let icon = document.createElement('div');
    let close = document.createElement('button');
    let msg = document.createElement('div');
    notice.classList.add('notice');
    notice.classList.add('notice--' + type);
    icon.classList.add('notice__icon');
    msg.classList.add('notice__message');
    close.classList.add('notice__close');
    notice.appendChild(icon);
    notice.appendChild(msg);
    notice.appendChild(close);
    close.innerHTML = '<svg class="notice__img" aria-label="close" width="10" height="10" viewBox="0 0 10 10" fill-rule="evenodd"><path d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"></path></svg>'
    switch (type) {
        case 'info':
            icon.innerHTML = '<svg class="notice__img" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm2 8H6v-1h1V8H6V7h3v4h1v1z"></path></svg>';
            break;
        case 'success':
            icon.innerHTML = '<svg class="notice__img" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z"></path></svg>';
            break;
        case 'warning':
            icon.innerHTML = '<svg class="notice__img" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd"><path d="M8 1L0 15h16L8 1zm-.8 5h1.5v1.4L8.3 11h-.8l-.4-3.6V6h.1zm.8 8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"></path></svg>';
            break;
        case 'error':
            icon.innerHTML = '<svg class="notice__img" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM5.1 13.3L3.5 12 11 2.6l1.5 1.2-7.4 9.5z"></path></svg>';
            break;
    }
    msg.innerHTML = message;
    addNotice(notice);
    setTimeout(function () { notice.style.opacity = 1 }, 100);
    close.onclick = closeNotice;
    setTimeout(function () { deleteNotice(notice) }, timeremove);
}

function closeNotice() {
    let thisNotice = this;
    this.parentNode.style.opacity = 0;
    setTimeout(function () { thisNotice.parentNode.remove() }, 500);
    let allnotice = document.querySelectorAll('.notice-wrap .notice');
    if (allnotice.length == 0) document.querySelector('.notice-wrap').remove();
}

function deleteNotice(notice) {
    notice.style.opacity = 0;
    setTimeout(function () { notice.remove() }, 500);
    let allnotice = document.querySelectorAll('.notice-wrap .notice');
    if (allnotice.length == 0) document.querySelector('.notice-wrap').remove();
}

function addNotice(notice) {
    let noticeField = document.querySelector('.notice-wrap');
    if (noticeField === null) {
        noticeField = document.createElement('div');
        noticeField.classList.add('notice-wrap');
        document.querySelector('body').appendChild(noticeField);
        addNotice(notice);
        return false;
    }
    noticeField.appendChild(notice);
}