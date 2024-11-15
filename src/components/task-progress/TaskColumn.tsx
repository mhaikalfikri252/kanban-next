import TaskCard from './TaskCard'
import { Task, TASK_MODAL_TYPE } from '@/types'
import TaskModal from '@/components/TaskModal'
import { ModalTypes } from '@/constants'
import { useManageModal } from '@/hooks/useManageModal'

interface TaskColumnProps {
  columnTitle: string
  columnId: number
  tasks: Task[]
}

const TaskColumn = ({ columnTitle, tasks, columnId }: TaskColumnProps): JSX.Element => {
  const { openModal, modal } = useManageModal()

  return (
    <div className="max-w-[400px]">
      <div className="flex justify-between items-center p-1">
        <h2 className="font-bold text-xl">{columnTitle}</h2>
        <div
          className="material-icons cursor-pointer"
          onClick={(): void => openModal(ModalTypes.ADD, null)}
        >
          add
        </div>
        {modal.typeModal === ModalTypes.ADD && (
          <TaskModal
            headingTitle="Add Task"
            type={TASK_MODAL_TYPE.ADD}
            defaultProgressOrder={columnId}
          />
        )}
      </div>
      <div>
        {tasks.map((task: Task) => {
          return <TaskCard key={task.id} task={task} />
        })}
      </div>
    </div>
  )
}

export default TaskColumn
