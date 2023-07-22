const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//цикл, который добавляет в строку рандомные символы
//Math.random()
function generateKey(length, characters) {
    let str = '';

    for (let i = 1; i <= length; i++) {
        str += characters[Math.floor(Math.random() * characters.length)];
    }

    return str;
}

console.log(generateKey(15, characters));