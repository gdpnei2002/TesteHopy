import React from "react";
import './App.css';

function App() {
  const options = {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
  };
  
  fetch('https://api.hopypay.com.br/v1/customers/customerId/cards', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div className="App">
      <form>
        <h2>Cadastro de cliente</h2>
        <div className="grid">
          <label>
            Nome:
            <input type="text" />
          </label>
          <label>
            Sobrenome:
            <input type="text" />
          </label>
          <label>
            Endereço
            <input type="text" />
          </label>
          <label>
            Telefone
            <input type="text" />
          </label>
        </div>
        <input className="btn" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
