
import { Task } from '@/app/api/tasks/route';

const getTasks = async () => {
  const res = await fetch('http://localhost:3000/api/tasks', { method: 'GET', cache: 'no-store' });
  const data = await res.json();
  return data.tasks;
}

const TaskPage = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskPage