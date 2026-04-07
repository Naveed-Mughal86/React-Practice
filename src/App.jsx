import { useEffect, useState } from "react"
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./services/api";

export default function App(){

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data)
  };

  useEffect(() => {
    fetchTasks();
  },[])
  return<>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-[420px]">

        <h1 className="text-2xl font-bold text-center mb-6">
          Task Manager
        </h1>

        <TaskForm refresh={fetchTasks}/>

        <TaskList tasks={tasks} refresh={fetchTasks}/>

    </div>
      </div>

  </>
}