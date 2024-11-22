import React, { useState } from 'react';

function BuscarRegistros({ registros, setRegistros }) {
  const [filtro, setFiltro] = useState({ torre: '', apartamento: '' });
  const [resultados, setResultados] = useState([]);
  const [editableIndex, setEditableIndex] = useState(null);

  const handleBuscar = () => {
    const encontrados = registros.filter(
      (registro) =>
        (filtro.torre === '' || registro.torre === filtro.torre) &&
        (filtro.apartamento === '' || registro.apartamento === filtro.apartamento)
    );
    setResultados(encontrados);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setResultados((prevResultados) =>
      prevResultados.map((registro, i) =>
        i === index ? { ...registro, [name]: value } : registro
      )
    );
  };

  const handleGuardarCambios = (index) => {
    const registroModificado = resultados[index];
    setRegistros((prevRegistros) =>
      prevRegistros.map((registro) =>
        registro === editableIndex ? registroModificado : registro
      )
    );
    setEditableIndex(null);
    alert('Registro modificado con éxito!');
  };

  const handleEliminarRegistro = (index) => {
    const registroEliminado = resultados[index];
    setRegistros((prevRegistros) => prevRegistros.filter((r) => r !== registroEliminado));
    setResultados((prevResultados) => prevResultados.filter((_, i) => i !== index));
    alert('Registro eliminado con éxito!');
  };

  return (
    <div>
      <h2>Buscar y Modificar Registros</h2>
      <div className="form-group">
        <label>Torre</label>
        <select
          name="torre"
          value={filtro.torre}
          onChange={(e) => setFiltro({ ...filtro, torre: e.target.value })}
        >
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
        <select
          name="apartamento"
          value={filtro.apartamento}
          onChange={(e) => setFiltro({ ...filtro, apartamento: e.target.value })}
        >
          <option value="">Seleccionar</option>
          <option value="101">101</option>
          <option value="202">202</option>
          <option value="303">303</option>
          <option value="404">404</option>
          <option value="505">505</option>
        </select>
      </div>
      <button onClick={handleBuscar}>Buscar</button>

      {resultados.map((registro, index) => (
        <div key={index} className="form">
          <div className="form-group">
            <label>Torre</label>
            <select
              name="torre"
              value={registro.torre}
              onChange={(e) => handleInputChange(e, index)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label>Apartamento</label>
            <select
              name="apartamento"
              value={registro.apartamento}
              onChange={(e) => handleInputChange(e, index)}
            >
              <option value="101">101</option>
              <option value="202">202</option>
              <option value="303">303</option>
              <option value="404">404</option>
              <option value="505">505</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tipo de entrega</label>
            <select
              name="tipoEntrega"
              value={registro.tipoEntrega}
              onChange={(e) => handleInputChange(e, index)}
            >
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
              value={registro.fechaHora}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div className="form-group">
            <label>Nombre de quien entrega</label>
            <input
              type="text"
              name="nombreEntrega"
              value={registro.nombreEntrega}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div className="form-group">
            <label>Detalles de entrega</label>
            <textarea
              name="detalles"
              rows="4"
              value={registro.detalles}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <button onClick={() => handleGuardarCambios(index)}>Guardar cambios</button>
          <button onClick={() => handleEliminarRegistro(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default BuscarRegistros;