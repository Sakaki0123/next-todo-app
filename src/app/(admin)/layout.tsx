import React from 'react'

const TaskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-green-300 p-4'>
        <div>タスクレイアウト</div>
        {children}</div>
  )
}
export default TaskLayout