'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { createTask } from "@/actions/createActions"

const ServerActionsPage = () => {
  const id = 1;
  const createTaskWithId = createTask.bind(null, id);
  const initialState = { error: '' }
  const [state, formAction] = useFormState(createTaskWithId, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button type="submit" className="bg-gray-400 disabled:bg-gray-300 ml-2 px-2" disabled={pending}>
        {pending ? '送信中' : '送信'}
      </button>
    )
  }
  return (
    <div>
      <form action={formAction}>
        <input type="text" name="name" id="name" className="border bg-gray-300" />
        <SubmitButton />
        <div>{state.error}</div>
      </form>
    </div>
  )
}

export default ServerActionsPage