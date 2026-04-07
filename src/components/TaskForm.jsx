import { useState } from "react";
import { createTask } from "../services/api";

function TaskForm({ refresh }) {

  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await createTask(title);
    setTitle("");
    refresh();
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-4"
    >

      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add
      </button>

    </form>
  );
}

export default TaskForm;