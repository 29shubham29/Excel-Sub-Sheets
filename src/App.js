import React, {useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import XLSX, { read } from 'xlsx';

function App() {

  const handleUpload = (e) => {
    e.preventDefault();

    let files = e.target.files,
    file = files[0];
    let reader = new FileReader();
    reader.onload = function (evnt) {
        var data = evnt.target.result;
        let readedData = XLSX.read(data, {type: 'binary'});
        readedData.SheetNames.map((fileName) => {
          console.log(fileName)
          const row = XLSX.utils.sheet_to_json(readedData.Sheets[fileName])
          // use sheet_to_csv for converting in csv
          // use sheet_to_html for conversion in html
        })
    };
    reader.readAsBinaryString(file)
  }

  return (
    <input 
    type='file'
    accept='.xlsx'
    onChange={handleUpload}/>
  );
}

export default App;
