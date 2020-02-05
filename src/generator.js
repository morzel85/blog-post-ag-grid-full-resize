const getRandomCellValue = type => {
    const random = Math.random();

    switch (type) {
        case 0:
            return random;
        case 1:
            return Math.floor(random * 1000);
        case 2:
            return 'Lorem ipsum! '.repeat(Math.floor(random * 3));
        case 3:
            return random > 0.5 ? 'ON' : 'OFF';
        case 4:
            return Math.floor(random * 1000000);
        case 5:
            return '!@#$%^&*'.charAt(Math.floor(random * 8)).repeat(random * 5);
        case 6:
            return 'Lorem ipsum! '.repeat(Math.ceil(random * 5));
        case 7:
            return ['AA', 'BBB', 'CCCC', 'DDDDD'][Math.floor(random * 4)];
        case 8:
            return ['X-Y-Z', 'asdf', 'qaz'][Math.floor(random * 3)].repeat(random * 5);
        default:
            return '?';
    }
}

const generateColumnDefsAndRowData = (columnsCount, rowsCount) => {
    const columnDefs = [];
    const rowData = [];

    for (let c = 0; c < columnsCount; c++) {
        columnDefs.push({
            headerName: 'Column ' + c,
            field: 'field_' + c
        });
    }

    for (let r = 0; r < rowsCount; r++) {
        const row = { id: r }

        for (let c = 0; c < columnsCount; c++) {
            const type = c % 10;
            const value = getRandomCellValue(type);

            row['field_' + c] = value;
        }

        rowData.push(row);
    }

    return { columnDefs, rowData };
}

export default generateColumnDefsAndRowData;