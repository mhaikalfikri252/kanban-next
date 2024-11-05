import type { Dispatch, SetStateAction } from 'react'
import { TASK_MODAL_TYPE } from '@/types'
import { useState } from 'react'
import { useTasksAction } from '@/hooks/useTasksAction'
import { Task } from '@/types'
import TaskModal from './TaskModal'

interface TaskMenuProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  task: Task
}

const TaskMenu = ({ setIsMenuOpen, task }: TaskMenuProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { deleteTask } = useTasksAction()

  return (
    <div className="absolute flex flex-col bg-white right-4 top-4 py-2 px-4 border border-gray-500 gap-y-2">
      <div
        className="flex items-center cursor-pointer gap-x-1"
        onClick={(): void => setIsModalOpen(true)}
      >
        <span className="material-icons">edit</span>Edit
      </div>
      {isModalOpen && (
        <TaskModal
          headingTitle="Edit Task"
          type={TASK_MODAL_TYPE.EDIT}
          task={task}
          defaultProgressOrder={task.progressOrder}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <div
        className="flex items-center cursor-pointer gap-x-1"
        onClick={(): void => deleteTask(task.id)}
      >
        <span className="material-icons">delete</span>
        Delete
      </div>
      <span
        className="material-icons absolute top-1 right-1 cursor-pointer"
        onClick={(): void => setIsMenuOpen(false)}
      >
        close
      </span>
    </div>
  )
}

export default TaskMenu
