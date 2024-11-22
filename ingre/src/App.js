import React, { useState } from 'react'; 
import logo from './logon.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BuscarRegistros from './Buscar_registro'; // Importa el componente

function App() {
  const [registros, setRegistros] = useState([]); 
  const [formData, setFormData] = useState({
    torre: '',
    apartamento: '',
    tipoEntrega: '',
    fechaHora: '',
    nombreEntrega: '',
    detalles: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGuardarRegistro = () => {
    setRegistros((prevRegistros) => [...prevRegistros, formData]);
    setFormData({ torre: '', apartamento: '', tipoEntrega: '', fechaHora: '', nombreEntrega: '', detalles: '' }); 
    alert('Registro guardado con éxito!');
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <button className="header-button"><Link to="/">Formulario</Link></button>
          <button className="header-button"><Link to="/buscar">Buscar Registros</Link></button>
        </header>
        
        <Routes>
          <Route 
            path="/" 
            element={
              <main className="main">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Ingreso Seguro</h1>
                <div className="form">
                  <div className="form-group">
                    <label>Torre</label>
                    <select name="torre" value={formData.torre} onChange={handleInputChange}>
                      <option value="">Seleccionar</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Apartamento</label>
                    <select name="apartamento" value={formData.apartamento} onChange={handleInputChange}>
                      <option value="">Seleccionar</option>
                      <option value="101">101</option>
                      <option value="202">202</option>
                      <option value="303">303</option>
                      <option value="404">404</option>
                      <option value="505">505</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Tipo de entrega</label>
                    <select name="tipoEntrega" value={formData.tipoEntrega} onChange={handleInputChange}>
                      <option value="">Seleccionar</option>
                      <option value="Paquete">Paquete</option>
                      <option value="Recibo">Recibo</option>
                      <option value="Comida">Comida</option>
                      <option value="Ropa">Ropa</option>
                      <option value="Servicio">Servicio</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Fecha y hora</label>
                    <input
                      type="datetime-local"
                      name="fechaHora"
                      value={formData.fechaHora}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nombre de quien entrega</label>
                    <input
                      type="text"
                      name="nombreEntrega"
                      value={formData.nombreEntrega}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Detalles de entrega</label>
                    <textarea
                      name="detalles"
                      rows="4"
                      value={formData.detalles}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button className="submit-button" onClick={handleGuardarRegistro}>
                    Guardar registro
                  </button>
                </div>
              </main>
            }
          />
         <Route 
          path="/buscar" 
         element={<BuscarRegistros registros={registros} setRegistros={setRegistros} />} 
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;