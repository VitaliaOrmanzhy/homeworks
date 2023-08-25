class Student {
    constructor(name, surname, year, marks) {
        this.name = name;
        this.surname = surname;
        this.year = year;
        this.marks = marks;
    }

    count = 0;
    attendance = new Array(25);

    getAge() {
        const date = new Date()
        return date.getFullYear() - this.year;
    }

    getGPA() {
        const sum = this.marks.reduce((a, b) => a + b);
        return sum / this.marks.length;
    }

    present() {
        if (this.attendance[this.attendance.length - 1] == undefined) {
            this.attendance[this.count] = true;
            this.count++;
        }
    }

    absent() {
        if (this.attendance[this.attendance.length - 1] == undefined) {
            this.attendance[this.count] = false;
            this.count++;
        }
    }

    summary() {
        const averagePresentLessons = this.attendance.filter(el => el === true).length / this.attendance.length;
        if (this.getGPA() >= 90 && averagePresentLessons >= 0.9) {
            return 'Молодець!';
        } else if (this.getGPA() < 90 && averagePresentLessons < 0.9) {
            return 'Редиска!';
        } else {
            return 'Добре, але можна краще'
        }
    }
}