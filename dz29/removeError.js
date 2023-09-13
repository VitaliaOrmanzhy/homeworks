function removeError(input) {
    const inputParent = input.parentElement;

    if (inputParent.classList.contains('error')) {
        inputParent.lastElementChild.remove();
        inputParent.classList.remove('error');
    }
}