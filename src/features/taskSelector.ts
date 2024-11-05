import { selector } from 'recoil'
import { tasksState, taskFilterState } from '@/features/taskAtoms'
import type { Task } from '@/types'
import { SelectorKeys } from '@/constants'

export const notStartedTasksSelector = selector<Task[]>({
  key: SelectorKeys.NOT_STARTED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 1
    })
  },
})

export const inProgressTasksSelector = selector<Task[]>({
  key: SelectorKeys.IN_PROGRESS_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 2
    })
  },
})

export const waitingTasksSelector = selector<Task[]>({
  key: SelectorKeys.WAITING_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 3
    })
  },
})

export const uncompletedTasksSelector = selector<Task[]>({
  key: SelectorKeys.UNCOMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder !== 4
    })
  },
})

export const completedTasksSelector = selector<Task[]>({
  key: SelectorKeys.COMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 4
    })
  },
})

export const filteredTaskListState = selector<Task[]>({
  key: 'filteredTaskListState',
  get: ({ get }) => {
    const filter = get(taskFilterState)
    const list = get(tasksState)

    switch (filter) {
      case 'completed':
        return list.filter((task) => task.progressOrder === 4)
      case 'uncompleted':
        return list.filter((task) => task.progressOrder !== 4)
      default:
        return list
    }
  },
})
