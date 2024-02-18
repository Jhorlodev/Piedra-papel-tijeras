import React, { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const fetchData = async () => {
    const spreadsheetId = 'ID_DE_TU_HOJA_DE_CÁLCULO';
    const range = 'A1:C'; // Rango donde están almacenados tus datos
    const apiKey = 'https://sheetdb.io/api/v1/m229wfgdnf3v2'; // Tu clave de API de Google Sheets

    //const url = https:/docs.google.com/spreadsheets/d/1rnI18y-yywgp2e3eCfpQKW6TpvPornGOVFjADmBOAHA/edit#gid=0
    //sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}&q=${keyword};

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.values);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="Ingresa la palabra clave"
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;