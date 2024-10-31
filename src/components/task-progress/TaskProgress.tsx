'use client'
import {
  notStartedTasksSelector,
  inProgressTasksSelector,
  waitingTasksSelector,
  completedTasksSelector,
} from '@/features/taskSelector'
import type { Task } from '@/types'
import { useRecoilValue } from 'recoil'
import TaskColumn from './TaskColumn'

const TaskProgress = (): JSX.Element => {
  const notStartedTasks: Task[] = useRecoilValue(notStartedTasksSelector)
  const inProgressTasks: Task[] = useRecoilValue(inProgressTasksSelector)
  const waitingTasks: Task[] = useRecoilValue(waitingTasksSelector)
  const completedTasks: Task[] = useRecoilValue(completedTasksSelector)

  return (
    <div className="w-full p-10">
      <h1 className="text-green-500 mb-16 font-bold text-3xl">Task Progress</h1>
      <div className="grid grid-cols-4 gap-x-4">
        <TaskColumn columnTitle="Not Started" tasks={notStartedTasks}></TaskColumn>
        <TaskColumn columnTitle="In Progress" tasks={inProgressTasks}></TaskColumn>
        <TaskColumn columnTitle="In Review / Waiting" tasks={waitingTasks}></TaskColumn>
        <TaskColumn columnTitle="Completed" tasks={completedTasks}></TaskColumn>
      </div>
    </div>
  )
}

export default TaskProgress
