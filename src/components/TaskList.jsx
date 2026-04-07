import TaskItem from "./TaskItem";

function TaskList({ tasks, refresh }) {

  if (!tasks.length) {
    return (
      <p className="text-gray-500 text-center">
        No tasks yet
      </p>
    );
  }

  return (

    <ul className="space-y-2">

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          refresh={refresh}
        />
      ))}

    </ul>
  );
}

export default TaskList;