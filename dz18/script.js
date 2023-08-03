const monthes = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
}

function findDates(str) {
    let findedDates = str.matchAll(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d\d)/g);
    let datesObjects = [];

    for (el of findedDates) {
        if (monthes[el[2]]) {
            datesObjects.push({
                day : +el[3],
                month : +el[2],
                monthName : monthes[el[2]],
                year : +el[1]
            })
        }  
    }

    return datesObjects;
}

console.log(findDates("The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34"))