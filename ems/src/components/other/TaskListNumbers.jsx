import React from 'react'

const TaskListNumbers = ({data}) => {

    // console.log(data)
  return (
    <div id='taskList' className='flex mt-10 screen justify-between gap-5'>
        <div className='rounded-xl py-6 px-9 w-[45%] p-10 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>

        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] p-10 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-3xl font-semibold'>Completed Task</h3>

        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] p-10 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-3xl font-semibold'>Accepted Task</h3>

        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] p-10 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-3xl font-semibold'>Failed Task</h3>

        </div>
      
    </div>
  )
}

export default TaskListNumbers
