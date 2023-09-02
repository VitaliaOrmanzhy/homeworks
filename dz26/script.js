function createChart(rows, columns) {
    const table = document.createElement('table');

    //число, яке буде виводитись у кожній клітці
    let num = 1;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('td');
            column.textContent = num;
            row.append(column);
            num++;
        }

        table.append(row);
    }

    return table;
}

document.querySelector('.container').append(createChart(10, 10)) ;