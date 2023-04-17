import namesService from "../services/names";

const Name = ({ person, onDelete }) => {
  const { id, name, number } = person;

  return (
    <div>
      <li>
        {name} {number}
      </li>
      <button onClick={() => onDelete(id, name)}>delete</button>
    </div>
  );
};

export default Name;
