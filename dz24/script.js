function tag(tag, className, innerHTML) {
    const el = document.createElement(tag);
    Array.isArray(className) ? className.forEach(item => el.classList.add(item)) : el.classList.add(className);
    el.innerHTML = innerHTML;
    return el;
}

const textArea = document.querySelector('.textarea');
const container = document.querySelector('.container');

const newDiv = tag('div', ['newDiv', 'bgBlue'], 'New div');
textArea.onfocus = function() {
    container.append(newDiv);
}

textArea.onblur = function() {
    container.lastChild.remove();
}
