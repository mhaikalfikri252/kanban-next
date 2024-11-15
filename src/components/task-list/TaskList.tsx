'use client'
import { Task, TASK_MODAL_TYPE } from '@/types'
import { useRecoilValue } from 'recoil'
import TaskListItem from './TaskListItem'
import { ModalTypes, TASK_PROGRESS_ID } from '@/constants'
import { useState } from 'react'
import TaskModal from '@/components/TaskModal'
import FilterMenu from './FilterMenu'
import { filteredTaskListState } from '@/features/taskSelector'
import { useManageModal } from '@/hooks/useManageModal'

const TaskList = (): JSX.Element => {
  const tasks = useRecoilValue(filteredTaskListState)
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const { openModal, modal } = useManageModal()

  return (
    <div className="w-full p-10">
      <h1 className="text-green-500 mb-16 font-bold text-3xl">Your Tasks</h1>
      <div className="flex mb-8 gap-x-4">
        <button
          className="p-4 flex items-center bg-cyan-500 text-white gap-x-2 relative"
          onClick={(): void => openModal(ModalTypes.ADD, null)}
        >
          <span className="material-icons">add</span>Add task
        </button>
        {modal.typeModal === ModalTypes.ADD && (
          <TaskModal
            headingTitle="Add Task"
            type={TASK_MODAL_TYPE.ADD}
            defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
          />
        )}
        <div className="relative">
          <button
            className="p-4 flex items-center bg-cyan-500 text-white gap-x-2 "
            onClick={(): void => setIsFilterOpen(true)}
          >
            <span className="material-icons">sort</span>Filter tasks
          </button>
          {isFilterOpen && <FilterMenu setIsFilterOpen={setIsFilterOpen} />}
        </div>
      </div>
      <div>
        <div className="flex text-2xl border-b border-b-gray-300 *:p-4">
          <div className="w-1/4">Task Name</div>
          <div className="w-[30%]">Detail</div>
          <div className="w-1/5">Due Date</div>
          <div className="w-[15%]">Progress</div>
        </div>
        {tasks.map((task: Task) => {
          return <TaskListItem key={task.id} task={task} />
        })}
      </div>
    </div>
  )
}

export default TaskList
