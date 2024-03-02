import React, { useState, useEffect } from 'react';

 export default function App() {
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/m229wfgdnf3v2')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    realizarBusqueda();
  }

  const realizarBusqueda = () => {
    const resultadoDeBusquedad = data.filter((elemento) =>
      elemento.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(resultadoDeBusquedad);
    setBusquedaRealizada(true);
  
}
  return (
    <main className="h-screen" >
     <a 
		    href="/" 
		    className=" flex justify-end text-white text-2xl font-bold pt-8 pr-10 pb-6"
		    >Volver a Inicio</a>
      <form 
          className="flex items-center justify-center gap-2"
          onSubmit={handleSubmit}>
         
        <input 
          className="border-2 border-violet-500 rounded-lg  text-gray-200 text-center py-3 px-2 text-bolt bg-[#3b426a]"
          type="text" 
          value={busqueda}                      
          placeholder=" Descripcion a Buscar" 
          onChange={handleChange} />
        <button 
          type="submit"
          className="grid rounded-lg bg-indigo-500 text-white py-3 px-3 gap-1.5 font-bold"
          >buscar</button>
      </form>

      {busquedaRealizada && (
        <table className=" container  w-[80%] flex flex-col mt-7 mx-auto text-gray-200 text-center justify-between ">
          <thead className="  text-bolt text-gray-100 ">
            <tr className="flex justify-between pt-20 pb-4" >
              <th>Descripcion</th>
              <th>Correo</th>
              <th>Contraseña</th>
            </tr>
          </thead>
            <hr className="mb-3" />
          <tbody className="  w-[100%] max-h-60 mx-auto items-center  m-2">
            {resultados.map((item, index) => (
              <tr 
                key={index}
                className="container flex flex-row justify-between ">
                <td>{item.descripcion}</td>
                <td>{item.correo}</td>
                <td>{item.contraseña}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

