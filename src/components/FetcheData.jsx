import { useState, useEffect } from "react";


function fetchData()  {
    const [consulta, setConsulta] =  useState(null);
    
    
    useEffect(() => {
        fetch('https://sheetdb.io/api/v1/m229wfgdnf3v2')
    }, [])
    .then((Response) => Response.json())
    .then((data) => setConsulta(data))
return(
   
<div className="flex flex-col justify-center items-center">
    <h1>Busca por Descripcion</h1>
        <input
        className="border-2 border-violet-500 rounded-lg text-gray-200 text-center py-3 px-14 text-bolt bg-[#3b426a] hover:bg-violet-600"
        type="text"
            
           
        />

        <button
        className="border-2 border-violet-500 rounded-lg text-gray-200 text-center py-3 px-14 text-bolt bg-[#3b426a] hover:bg-violet-600"
        type="submit"
        >
                Buscar
        </button>
</div>
)
 }

export default fetchData;