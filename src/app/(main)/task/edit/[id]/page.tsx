import React from 'react'

const TaskEditIDPage = ({ params }: {
    params: { id: string }
}) => {
    return (
        <div>{params.id}</div>
    )
}

export default TaskEditIDPage