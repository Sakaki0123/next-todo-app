import { createTask } from "@/actions/createActions"

const ServerActionsPage = () => {
  return (
    <div>
        <form action={createTask}>
            <input type="text" name="name" id="name" className="border bg-gray-300" /> 
            <button type="submit" className="bg-gray-400 ml-2 px-2">送信</button>
        </form>
    </div>
  )
}

export default ServerActionsPage