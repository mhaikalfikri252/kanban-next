import { useManageModal } from '@/hooks/useManageModal'
import { useTasksAction } from '@/hooks/useTasksAction'
import { Task } from '@/types'
import { ModalTypes } from '@/constants'

interface TaskMenuProps {
  task: Task
}

const TaskMenu = ({ task }: TaskMenuProps): JSX.Element => {
  const { openModal, closeModal } = useManageModal()
  const { deleteTask } = useTasksAction()

  return (
    <div className="absolute flex flex-col bg-white right-4 top-4 py-2 px-4 border border-gray-500 gap-y-2">
      <div
        className="flex items-center cursor-pointer gap-x-1"
        onClick={(): void => {
          openModal(ModalTypes.EDIT, task)
        }}
      >
        <span className="material-icons">edit</span>Edit
      </div>
      
      <div
        className="flex items-center cursor-pointer gap-x-1"
        onClick={(): void => deleteTask(task.id)}
      >
        <span className="material-icons">delete</span>
        Delete
      </div>
      <span
        className="material-icons absolute top-1 right-1 cursor-pointer"
        onClick={(): void => closeModal()}
      >
        close
      </span>
    </div>
  )
}

export default TaskMenu
