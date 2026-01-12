
import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";

interface Params {
    params: Promise<{
        id: string;
    }>;
}

const getTask = async (id: string) => {
    console.log("getTask id:", id);
    const res = await fetch(`${process.env.API_URL}/tasks/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error("Failed to fetch tasks");
    }
    const data = await res.json();
    return data.task;
}


const EditTaskPage = async ({ params }: Params) => {
    const { id } = await params;
    console.log("EditTaskPage id:", id);
    const task = await getTask(id);
    return (
        <div className="flex flex-col justify-center py-20">
            <h2 className="text-center text-2xl font-bold">Edit New Task</h2>
            <EditTaskForm id={id} task={task} />
        </div>
    )
}

export default EditTaskPage