

const NewTaskForm = () => {
    return (
        <div className="mt-10 mx-auto w-full max-w-sm">
            <form action="">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium">
                        タイトル
                    </label>
                    <input type="text" name="title" id="title" required className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
                </div>
                <div className="mt-6">
                    <label htmlFor="description" className="block text-sm font-medium">
                        説明
                    </label>
                    <input type="text" name="description" id="description" required className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
                </div>
                <div className="mt-6">
                    <label htmlFor="dueDate" className="block text-sm font-medium">
                        期限日
                    </label>
                    <input type="date" name="dueDate" id="dueDate" min=
                        "2020-01-01" max="2999-12-31" required className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
                </div>
                <button type="submit" className="mt-8 py-2 w-full bg-gray-800 text-white rounded-md hover:bg-gray-700 font-semibold">
                    Create
                </button>
            </form>

        </div>
    )
}

export default NewTaskForm