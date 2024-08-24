import { useState } from "react";
import Box from "./Box";
import ListItem from "./ListItem";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Закрыть задачу",
      completed: false,
    },
    {
      id: 2,
      name: "Приготовить ужин",
      completed: false,
    },
    {
      id: 3,
      name: "Купить продукты",
      completed: false,
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const addTodo = (event) => {
    event.preventDefault();

    const newTask = {
      id: 1,
      name: inputValue,
      completed: false,
    };

    setTasks([...tasks, ...[newTask]]);

    setInputValue("");
  };

  return (
    <Box>
      <div>
        <h1 className="text-3xl text-center">ToDo App</h1>
        <form className="space-x-4 my-4" onSubmit={addTodo}>
          <input
            type="text"
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            className="p-2 border border-slate-300 rounded-xl"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-200 px-4 py-2 rounded-xl hover:bg-indigo-400 active:bg-indigo-500"
          >
            Добавить
          </button>
        </form>
        <div className="space-y-2">
          {tasks.map((task) => (
            <ListItem key={task.id} {...task} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ToDo;
