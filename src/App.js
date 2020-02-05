import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import generateColumnDefsAndRowData from './generator';
import calculateColumnWidths from './calculator';

import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const textWidthsCache = new Map();

const App = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [useWidthsCache, setUseWidthsCache] = useState(true);

    const [columnDefs, setColumnDefs] = useState([]);
    const [rowData, setRowData] = useState([]);

    const handleGenerateClick = () => {
        const { columnDefs, rowData } = generateColumnDefsAndRowData(300, 100);
        setColumnDefs(columnDefs);
        setRowData(rowData);
    };

    const handleResizeWithAutoClick = () => {
        if (gridColumnApi) {
            console.time('Resize with autoSizeColumns');

            const colIds = gridColumnApi.getAllColumns().map(c => c.colId);
            gridColumnApi.autoSizeColumns(colIds);

            console.timeEnd('Resize with autoSizeColumns');
        }
    };

    const handleResizeWithCustomClick = () => {
        console.time('Resize all columns (including widths calculation)');

        if (gridApi && gridColumnApi) {
            // Here ALL columns and rows are used because there are no hidden columns
            // and the the grid has neither paging nor filtering enabled!
            const updatedColumDefs = calculateColumnWidths({
                columnDefs,
                rowData,
                measureHeaders: true,
                headerFont: 'bold 12px Arial',
                rowFont: 'normal 12px Arial',
                padding: 30,
                cache: useWidthsCache ? textWidthsCache : null
            });

            // Setting width by setColumnWidth has the advantage of preserving column
            // changes done by user such as sorting or filters. The disadvantage is that
            // initial resize might be slow if the grid was scrolled towards later columns
            // before resizing was invoked (bug in the gird?).
            // Resize by gridApi.setColumnDefs(updatedColumDefs) or setColumnDefs(updatedColumDefs)
            // should be faster but columns settings could be reset (mind deltaColumnMode)...            
            updatedColumDefs.forEach(def => gridColumnApi.setColumnWidth(def.field, def.width));
        }

        console.timeEnd('Resize all columns (including widths calculation)');
    };

    return (
        <div className="App">
            <div>
                <div>
                    <button onClick={handleGenerateClick}>Generate data (100 rows with 300 columns)</button>
                </div>
                <div>
                    <button onClick={handleResizeWithAutoClick}>Resize columns with columnApi.autoSizeColumns</button>
                </div>
                <div>
                    <button onClick={handleResizeWithCustomClick}>Resize columns with custom text measure</button>
                    <label>
                        <input type="checkbox" checked={useWidthsCache} onChange={() => setUseWidthsCache(!useWidthsCache)} />
                        Use widths cache
                    </label>
                </div>
            </div>
            <div className="ag-theme-balham">
                <AgGridReact
                    defaultColDef={{
                        width: 300,
                        resizable: true,
                        sortable: true
                    }}
                    columnDefs={columnDefs}
                    rowData={rowData}
                    getRowNodeId={data => data.id}
                    deltaRowDataMode
                    onGridReady={params => {
                        setGridApi(params.api);
                        setGridColumnApi(params.columnApi);
                    }}
                />
            </div>
            <div className="about">
                Example app for <a href="https://morzel.net">morzel.net</a> blog post
            </div>
        </div>
    );
}

export default App;
