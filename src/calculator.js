const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const collectMaxWidth = (text, group, maxWidths) => {
    const width = context.measureText(text).width;

    const maxWidth = maxWidths.get(group);

    if (maxWidth === undefined || width > maxWidth) {
        maxWidths.set(group, width);
    }
};

const collectMaxWidthCached = (text, group, maxWidths, widthsCache) => {
    const cachedWidth = widthsCache.get(text);

    let width;

    if (cachedWidth === undefined) {
        width = context.measureText(text).width;
        widthsCache.set(text, width);
    } else {
        width = cachedWidth;
    }

    const maxWidth = maxWidths.get(group);

    if (maxWidth === undefined || width > maxWidth) {
        maxWidths.set(group, width);
    }
};

const calculateColumnWidths = config => {
    console.time('Column widths calculation');

    const maxWidths = new Map()

    if (config.measureHeaders) {
        context.font = config.headerFont;

        config.columnDefs.forEach(column => {
            collectMaxWidth(column.headerName, column.field, maxWidths);
        });
    }

    context.font = config.rowFont;

    config.rowData.forEach(row => {
        config.columnDefs.forEach(column => {
            if (config.cache) {
                collectMaxWidthCached(row[column.field], column.field, maxWidths, config.cache);
            } else {
                collectMaxWidth(row[column.field], column.field, maxWidths);
            }
        });
    });

    const updatedColumnDefs = config.columnDefs.map(cd => ({
        ...cd,
        width: Math.ceil(maxWidths.get(cd.field) + config.padding)// + Math.ceil(Math.random() * 10)
    }));

    console.timeEnd('Column widths calculation');

    return updatedColumnDefs;
};

export default calculateColumnWidths;