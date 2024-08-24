const ListItem = ({ id, name, completed }) => {
  return (
    <div className="flex justify-between">
      {name}
      <div className="space-x-2">
        <button className="rounded-lg p-2 bg-red-400">DEL</button>
        <button className="rounded-lg p-2 bg-green-400">COM</button>
      </div>
    </div>
  );
};

export default ListItem;
