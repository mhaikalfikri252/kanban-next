import { Task, TASK_MODAL_TYPE } from '@/types'
import { ModalTypes, TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from '@/constants'
import TaskIcon from '../TaskIcon'
import TaskMenu from '../TaskMenu'
import { useManageModal } from '@/hooks/useManageModal'
import TaskModal from '../TaskModal'

interface TaskListItemProps {
  task: Task
}

const getProgressCategory = (progressOrder: number): string => {
  switch (progressOrder) {
    case TASK_PROGRESS_ID.NOT_STARTED:
      return TASK_PROGRESS_STATUS.NOT_STARTED
    case TASK_PROGRESS_ID.IN_PROGRESS:
      return TASK_PROGRESS_STATUS.IN_PROGRESS
    case TASK_PROGRESS_ID.WAITING:
      return TASK_PROGRESS_STATUS.WAITING
    case TASK_PROGRESS_ID.COMPLETED:
      return TASK_PROGRESS_STATUS.COMPLETED
    default:
      return TASK_PROGRESS_STATUS.NOT_STARTED
  }
}

const TaskListItem = ({ task }: TaskListItemProps): JSX.Element => {
  const { openModal, modal } = useManageModal()

  return (
    <div className="flex items-stretch border-b border-b-gray-300 text-xl relative *:p-4 *:items-center *:border-r-gray-300">
      <div className="w-1/4 border-r">
        <TaskIcon task={task} />
        {task.title}
      </div>
      <div className="w-[30%] border-r">{task.detail}</div>
      <div className="w-1/5 border-r">{task.dueDate}</div>
      <div className="w-[15%] border-r-0">{getProgressCategory(task.progressOrder)}</div>
      <div className="relative">
        <span
          className="material-icons cursor-pointer"
          onClick={(): void => openModal(ModalTypes.TASKMENU, task)}
        >
          more_horiz
        </span>
        {modal.typeModal === ModalTypes.TASKMENU && modal.props?.id === task.id && (
          <TaskMenu task={task} />
        )}
        {modal.typeModal === ModalTypes.EDIT && modal.props?.id === task.id && (
          <TaskModal
            headingTitle="Edit Task"
            type={TASK_MODAL_TYPE.EDIT}
            task={task}
            defaultProgressOrder={task.progressOrder}
          />
        )}
      </div>
    </div>
  )
}

export default TaskListItem
