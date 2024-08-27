const ListItem = ({ id, name, completed, onDelete, onComplete }) => {
  return (
    <div
      className={`flex justify-between ${
        completed ? "line-through text-gray-700" : ""
      }`}
    >
      {name}
      <div className="space-x-2">
        <button
          className="rounded-lg p-2 bg-red-400"
          onClick={() => onDelete(id)}
        >
          DEL
        </button>
        <button
          className="rounded-lg p-2 bg-green-400"
          onClick={() => onComplete(id)}
        >
          COM
        </button>
      </div>
    </div>
  );
};

export default ListItem;
