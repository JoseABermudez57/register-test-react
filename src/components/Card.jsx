import "../assets/styles/card.css";

function Card({ name, type, placeholderText }) {
  return (
    <>
      <div className="inputContainer">
        <p>
          <strong>{name}</strong>
        </p>
        <input type={type} placeholder={placeholderText} />
      </div>
    </>
  );
}

export default Card;
