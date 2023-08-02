function simplifyTheNumber(str) {
    if (/\+?\d{3}[\s-]\d{2}[\s-]\d{3}([\s-]\d{2}){2}/.test(str)) {
        return str.replace(/\+?\d{3}[\s-]/, '0').split(/[\s-]/).join('');
    } else {
        return null;
    }
}

console.log(simplifyTheNumber('+380 44 364 83 65'));
console.log(simplifyTheNumber('380 44 364 83 65'));
console.log(simplifyTheNumber('380-44-364-83-65'));
console.log(simplifyTheNumber('+380-44-364-83-65'));