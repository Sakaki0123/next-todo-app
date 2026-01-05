import React from 'react'

export function generateStaticParams() {
  return [{ id: [1,2,3,4,5] }];
}

const TaskEditIDPage = ({ params }: {
    params: { id: string }
}) => {
    return (
        <div>{params.id}</div>
    )
}

export default TaskEditIDPage