import React, { useState } from 'react';
import FetcheData  from '../components/FetcheData.jsx';


const enviardatos = (e, data) => {
  e.preventDefault();
  fetch('https://sheetdb.io/api/v1/m229wfgdnf3v2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
}

export default function App() {
  const [data, setData] = useState({
      descripcion:'', 
      correo:'',
      contraseña:''
  });

  const handleChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    
  }


  const handleSubmit =(e) => {
    enviardatos(e, data)
    console.log(e.target.value)
    e.target.reset()
  }

 
  

  return (
    <div className='container ml-auto mr-auto flex flex-col items-center justify-center' >
    <div className='w-full md:w-1/2'>
    <form
      className=" flex flex-col px-8  pb-8 mb-4 h-screen  justify-center items-center  "
      onSubmit={handleSubmit} >
        <div  className="mb-4">
            <div  className="grid grid-flow-row sm:grid-flow-col gap-4  ">
                <div className='sm:col-span-4 justify-center flex flex-col gap-2'>
 <h1 className="font-bold text-4xl text-white mb-8 underline underline-offset-8 flex justify-center items-center"><strong> Caja Fuerte </strong></h1> 

      <a 
        href="DataResults"
        className=" flex justify-end text-white text-2xl font-bold pt-8 pr-10 pb-6"
         >Busqueda De Datos</a>
    <label className="text-white flex gap-0 text-2xl font-semibold"> Descripcion:</label>
      <input 
className="border-2 border-violet-500 rounded-lg text-center py-3 px-14 text-bolt bg-[#3b426a] text-gray-200"        type="text" 
        name="descripcion" 
        placeholder="Detalle"
        onChange={handleChange}
      />
    
    <label className="text-white flex gap-0 text-2xl font-semibold"> Correo:</label>
      <input 
        className="border-2 border-violet-500 rounded-lg text-gray-200 text-center py-3 px-14 text-bolt bg-[#3b426a] hover:bg-violet-600"
        name="correo" 
        type="email"
        placeholder="Correo@correo.com" 
        onChange={handleChange}
      />
    
    <label className="text-white flex gap-0 text-2xl font-semibold"> Contraseña:</label>
      <input 
        className="border-2 border-violet-500 rounded-lg  text-gray-200 text-center py-3 px-14 text-bolt bg-[#3b426a]"
        name="contraseña" 
        type="password"
        placeholder="...**..." 
        onChange={handleChange}
      />
    
      <button 
        className="rounded-lg bg-indigo-500 text-white py-3 px-14 mt-8 font-bold"
        type="submit">Enviar</button>
        </div>
        </div>
        </div>
    </form>
    </div>
   
    
</div>
  )
}