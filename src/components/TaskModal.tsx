import React from 'react'
import TaskForm from './TaskForm'
import { Task } from '@/types'
import { useManageModal } from '@/hooks/useManageModal'

type TaskModalProps = {
  headingTitle: string
  type: string
  defaultProgressOrder: number
  task?: Task
}

const TaskModal = ({
  headingTitle,
  type,
  defaultProgressOrder,
  task,
}: TaskModalProps): JSX.Element => {
  const { closeModal } = useManageModal()

  return (
    <div className="fixed top-1/4 left-[40%] p-8 border border-gray-500 w-1/4 z-10 bg-white">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-2xl">{headingTitle}</h1>
        <span className="material-icons cursor-pointer" onClick={(): void => closeModal()}>
          close
        </span>
      </div>
      <TaskForm type={type} task={task} defaultProgressOrder={defaultProgressOrder} />
    </div>
  )
}

export default TaskModal
