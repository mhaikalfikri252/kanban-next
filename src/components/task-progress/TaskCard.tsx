import { TASK_MODAL_TYPE, type Task } from '@/types'
import { TASK_PROGRESS_ID } from '@/constants'
import TaskIcon from '../TaskIcon'
import { useTasksAction } from '@/hooks/useTasksAction'
import { useManageModal } from '@/hooks/useManageModal'
import { ModalTypes } from '@/constants'
import TaskMenu from '../TaskMenu'
import TaskModal from '../TaskModal'

interface TaskCardProps {
  task: Task
}

const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  const isStarted = task.progressOrder === TASK_PROGRESS_ID.NOT_STARTED
  const { moveTaskCard } = useTasksAction()
  const { openModal, modal } = useManageModal()

  return (
    <div className="bg-green-200 p-6 rounded-xl my-2 flex flex-col gap-y-2 text-xl relative">
      <div className="flex justify-between">
        <TaskIcon task={task} />
        <div
          className="material-icons cursor_pointer"
          onClick={(): void => openModal(ModalTypes.TASKMENU, task)}
        >
          more_vert
        </div>
      </div>
      <p className="text-3xl font-medium mt-2">{task.title}</p>
      <div>
        <p>{task.detail}</p>
      </div>
      <div>
        <p>Due on {task.dueDate}</p>
      </div>
      <div className={`flex ${isStarted ? 'justify-end' : 'justify-between'}`}>
        {task.progressOrder !== TASK_PROGRESS_ID.NOT_STARTED && (
          <button className="material-icons" onClick={(): void => moveTaskCard(task.id, -1)}>
            chevron_left
          </button>
        )}
        {task.progressOrder !== TASK_PROGRESS_ID.COMPLETED && (
          <button className="material-icons" onClick={(): void => moveTaskCard(task.id, 1)}>
            chevron_right
          </button>
        )}
      </div>
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
  )
}

export default TaskCard
