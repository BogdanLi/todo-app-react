import Box from "./Box";

const ToDo = () => {
  return (
    <Box>
      <div>
        <h1 className="text-3xl text-center">ToDo App</h1>
        <form className="space-x-4 my-4">
          <input
            type="text"
            className="p-2 border border-slate-300 rounded-xl"
          />
          <button className="bg-indigo-200 px-4 py-2 rounded-xl hover:bg-indigo-400 active:bg-indigo-500">
            Добавить
          </button>
        </form>
      </div>
    </Box>
  );
};

export default ToDo;
