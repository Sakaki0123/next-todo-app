import { createTask } from "@/actions/createActions"

const ServerActionsPage = () => {
    const id = 1;
    const boundCreateTaskWithId = createTask.bind(null, id);
  return (
    <div>
        <form action={boundCreateTaskWithId}>
            <input type="text" name="name" id="name" className="border bg-gray-300" /> 
            <button type="submit" className="bg-gray-400 ml-2 px-2">送信</button>
        </form>
    </div>
  )
}

export default ServerActionsPage