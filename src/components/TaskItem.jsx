import { deleteTask } from "../services/api";

function TaskItem({ task, refresh }) {

  const handleDelete = async () => {
    await deleteTask(task.id);
    refresh();
  };

  return (

    <li className="flex justify-between items-center bg-gray-50 border rounded-lg px-3 py-2">

      <span className="text-gray-800">
        {task.title}
      </span>

      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>

    </li>
  );
}

export default TaskItem;