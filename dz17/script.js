function simplifyTheNumber(str) {
    if (/\+?\d{3}[ -]\d{2}[ -]\d{3}([ -]\d{2}){2}/.test(str)) {
        return str.replace(/\+?\d{3}[ -]/, '0').split(/[ -]/).join('');
    } else {
        return null;
    }
}

console.log(simplifyTheNumber('+380 44 364 83 65'));
console.log(simplifyTheNumber('380 44 364 83 65'));
console.log(simplifyTheNumber('380-44-364-83-65'));
console.log(simplifyTheNumber('+380-44-364-83-65'));