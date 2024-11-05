import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import TaskForm from './TaskForm'
import { Task } from '@/types'

type TaskModalProps = {
  headingTitle: string
  type: string
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  defaultProgressOrder: number
  task?: Task
}

const TaskModal = ({
  headingTitle,
  type,
  setIsModalOpen,
  defaultProgressOrder,
  task,
}: TaskModalProps): JSX.Element => {
  return (
    <div className="fixed top-1/4 left-[40%] p-8 border border-gray-500 w-1/4 z-10 bg-white">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-2xl">{headingTitle}</h1>
        <span className="material-icons cursor-pointer" onClick={(): void => setIsModalOpen(false)}>
          close
        </span>
      </div>
      <TaskForm
        type={type}
        task={task}
        defaultProgressOrder={defaultProgressOrder}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  )
}

export default TaskModal
