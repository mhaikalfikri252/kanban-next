import { TASK_PROGRESS_ID } from '@/constants'
import type { Task } from '@/types'
import { useTasksAction } from '@/hooks/useTasksAction'

interface TaskIconProps {
  task: Task
}

const TaskIcon = ({ task }: TaskIconProps) => {
  const isProgressCompleted = task.progressOrder === TASK_PROGRESS_ID.COMPLETED
  const { completeTask } = useTasksAction()

  return (
    <div
      className={`material-icons mr-4 text-3xl ${isProgressCompleted ? 'text-green-500 cursor-default' : 'text-grey-400 cursor-pointer'}`}
      onClick={(): void => {
        completeTask(task.id)
      }}
    >
      check_circle
    </div>
  )
}

export default TaskIcon
