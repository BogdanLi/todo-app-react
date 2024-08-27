import { useEffect, useState } from "react";
import Box from "./Box";
import ListItem from "./ListItem";

const tasksFromLS = localStorage.getItem("tasks");

const ToDo = () => {
  const [tasks, setTasks] = useState(
    tasksFromLS ? JSON.parse(tasksFromLS) : []
  );

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = (event) => {
    event.preventDefault();

    if (inputValue.length === 0) return;

    const newTask = {
      id: new Date(),
      name: inputValue,
      completed: false,
    };

    setTasks([...tasks, ...[newTask]]);

    setInputValue("");
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((el) => el.id != id);

    setTasks(newTasks);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const newTask = { ...task, completed: !task.completed };
        return newTask;
      } else {
        return task;
      }
    });

    setTasks(newTasks);
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
            <ListItem
              onComplete={completeTask}
              onDelete={deleteTask}
              key={task.id}
              {...task}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ToDo;
