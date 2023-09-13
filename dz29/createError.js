function createError(input, text) {
    const inputParent = input.parentElement;
    inputParent.classList.add('error');

    const thisFieldIsEmpty = document.createElement('p');
    thisFieldIsEmpty.textContent = text;
    thisFieldIsEmpty.classList.add('warning');

    inputParent.append(thisFieldIsEmpty);
}