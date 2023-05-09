import "./IdCard.css";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <img src={picture} className="photo" alt="photo" />
      <div className="id-info">
        <ul>
          <p>
            <strong>firstName:</strong> {firstName}
          </p>
          <p>lastName: {lastName}</p>
          <p>gender: {gender}</p>
          <p>height: {height}</p>
          <p>birth: {birth.toDateString()}</p>
        </ul>
      </div>
    </div>
  );
}

export default IdCard;
