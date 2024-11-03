import TaskCard from './TaskCard'
import { Task, TASK_MODAL_TYPE } from '@/types'
import { useState } from 'react'
import TaskModal from '@/components/TaskModal'

interface TaskColumnProps {
  columnTitle: string
  columnId: number
  tasks: Task[]
}

const TaskColumn = ({ columnTitle, tasks, columnId }: TaskColumnProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className="max-w-[400px]">
      <div className="flex justify-between items-center p-1">
        <h2 className="font-bold text-xl">{columnTitle}</h2>
        <div className="material-icons cursor-pointer" onClick={(): void => setIsModalOpen(true)}>
          add
        </div>
        {isModalOpen && (
          <TaskModal
            headingTitle="Add Task"
            type={TASK_MODAL_TYPE.ADD}
            setIsModalOpen={setIsModalOpen}
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
