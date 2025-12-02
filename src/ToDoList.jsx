import { useState, useEffect } from "react";

const ToDoList = () => {
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      assignedTo,
      done: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setAssignedTo("");
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearAll = () => {
    setTasks([]);
  };

  const editTask = (id) => {
    const newTitle = prompt("Novo título:");
    const newAssigned = prompt("Novo responsável:");

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: newTitle || task.title,
              assignedTo: newAssigned || task.assignedTo,
            }
          : task
      )
    );
  };

  return (
    <>
      <h1>To do list</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "fit-content",
        }}
      >
        <input
          type="text"
          placeholder="Digite o título…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Responsável pela tarefa…"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        />

        <button onClick={handleAdd}>Adicionar</button>
        <button onClick={clearAll} style={{ marginTop: "10px" }}>
          Limpar todas as tasks
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginTop: "10px" }}>
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {task.title} — {task.assignedTo}
            </span>

            <button onClick={() => toggleDone(task.id)}>
              {task.done ? "Desfazer" : "Concluir"}
            </button>

            <button onClick={() => editTask(task.id)} style={{ marginLeft: 10 }}>
              Editar
            </button>

            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: 10, color: "red" }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
