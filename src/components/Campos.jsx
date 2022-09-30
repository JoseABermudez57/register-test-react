import "../assets/styles/campos.css";
import Card from "./Card";

function Campos() {
  const camposTexto = [
    {
      nombre: "Nombre",
      input: "text",
      placeholder: "Ingresa tu nombre",
    },
    {
      nombre: "Apellidos",
      input: "text",
      placeholder: "Ingresa tus apellidos",
    },
    {
      nombre: "Ciudad",
      input: "text",
      placeholder: "Ingresa tu ciudad",
    },
    {
      nombre: "Correo",
      input: "email",
      placeholder: "Ingresa tus correo",
    },
    {
      nombre: "Contraseña",
      input: "password",
      placeholder: "Ingresa tu contraseña",
    },
    {
      nombre: "Fecha de nacimiento",
      input: "date",
      placeholder: "Ingresa tu contraseña",
    },
    {
      nombre: "Número de teléfono",
      input: "number",
      placeholder: "Ingrese su número de telefono",
    },
  ];

  return (
    <div className="camposDesign">
      {camposTexto.map((camposTexto) => {
        return (
          <Card
            name={camposTexto.nombre}
            type={camposTexto.input}
            placeholderText={camposTexto.placeholder}
            option={camposTexto.option}
          />
        );
      })}
    </div>
  );
}

export default Campos;
