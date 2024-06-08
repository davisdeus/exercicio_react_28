import { useState } from "react";
import "./App.css";
import InputMask from "react-input-mask";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularIMC() {
    let resultado = (peso / (altura * altura)).toFixed(2);

    if (resultado >= 40)
      return setResultado(
        "IMC:" + resultado + " Você está com Obesidade III (mórbida)"
      );
    if (resultado >= 34.9)
      return setResultado(
        "IMC:" + resultado + " Você está com Obesidade II (severa)"
      );
    if (resultado >= 30)
      return setResultado("IMC:" + resultado + " Você está com Obesidade I");
    if (resultado >= 25)
      return setResultado("IMC:" + resultado + " Você está Acima do peso");
    if (resultado >= 18.5)
      return setResultado("IMC:" + resultado + " Você está com o Peso normal");
    if (resultado >= 17)
      return setResultado("IMC:" + resultado + " Você está Abaixo do peso");
    if (resultado < 17)
      return setResultado(
        "IMC:" + resultado + " Você está Muito abaixo do peso"
      );
  }

  function reset() {
    setPeso("");
    setAltura("");
    setResultado("");
  }

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <form className="form">
        <div className="formInputs">
          <label htmlFor="peso">Peso</label>
          <InputMask
            placeholder="Insira sua altura (mt)"
            name="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            id="peso"
          />

          <label htmlFor="altura">Altura</label>
          <InputMask
            placeholder="Insira seu peso (kg)"
            mask="9.99"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            id="altura"
          />
        </div>

        <div className="btn">
          <button className=" btn-reset" type="button" onClick={reset}>
            Resetar
          </button>

          <button type="button" onClick={calcularIMC}>
            Calculadora IMC
          </button>
        </div>

        {resultado}
      </form>

      <table className="tabela">
        <thead>
          <tr>
            <th>Resultado</th>
            <th>Situação</th>
          </tr>
        </thead>

        <tbody>
          <tr>
              <td>  Abaixo de 17</td>
              <td> Muito abaixo do peso</td>
          </tr>
          <tr>
              <td> Entre 17 e 18,49</td>
              <td> Abaixo do peso</td>
          </tr>
          <tr>
              <td> Entre 18,5 e 24,99</td>
              <td> Peso normal</td>
          </tr>
          <tr>
              <td> Entre 25 e 29,99</td>
              <td> Acima do peso</td>
          </tr>
          <tr>
              <td> Entre 30 e 34,99</td>
              <td> 	Obesidade I</td>
          </tr>
          <tr>
              <td> Entre 35 e 39,99</td>
              <td> Obesidade II (severa)</td>
          </tr>
          <tr>
              <td> Acima de 40</td>
              <td>	Obesidade III (mórbida)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
