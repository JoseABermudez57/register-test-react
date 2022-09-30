import "../assets/styles/inputRadio.css";

function InputRadio() {
  return (
    <>
      <div className="sexChoice">
        <p><strong>Sexo</strong></p>
        <input type="radio" name="sexo" /> Hombre
        <input type="radio" name="sexo" /> Mujer
      </div>
    </>
  );
}

export default InputRadio;
