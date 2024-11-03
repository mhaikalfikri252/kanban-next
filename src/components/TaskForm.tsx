import React, { Dispatch, SetStateAction, useState } from 'react'
import { TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from '@/constants'
import { TASK_MODAL_TYPE } from '@/types'
import { useTasksAction } from '@/hooks/useTasksAction'

interface TaskFromProps {
  type: string
  defaultProgressOrder: number
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const TaskFrom = ({ type, defaultProgressOrder, setIsModalOpen }: TaskFromProps): JSX.Element => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [progressOrder, setProgressOrder] = useState<number>(defaultProgressOrder)

  const { addTask } = useTasksAction()

  const handleSubmit = (): void => {
    if (type === TASK_MODAL_TYPE.ADD) {
      addTask(title, detail, dueDate, progressOrder)
      setIsModalOpen(false)
    }
  }

  return (
    <form className="text-2xl flex flex-col gap-y-4">
      <div className="flex flex-col">
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e): void => setTitle(e.target.value)}
          className="border border-gray-500 h-10 text-xl"
        />
      </div>
      <div className="flex flex-col">
        <label>Detail: </label>
        <textarea
          value={detail}
          onChange={(e): void => setDetail(e.target.value)}
          className="border border-gray-500 h-10 text-xl"
        />
      </div>
      <div className="flex flex-col">
        <label>Due Date: </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e): void => setDueDate(e.target.value)}
          className="border border-gray-500 h-10 text-xl"
        />
      </div>
      <div className="flex flex-col">
        <label>Progress: </label>
        <select
          className="border border-gray-500 h-10 text-xl"
          defaultValue={progressOrder}
          onChange={(e): void => setProgressOrder(Number(e.target.value))}
        >
          <option value={TASK_PROGRESS_ID.NOT_STARTED}>{TASK_PROGRESS_STATUS.NOT_STARTED}</option>
          <option value={TASK_PROGRESS_ID.IN_PROGRESS}>{TASK_PROGRESS_STATUS.IN_PROGRESS}</option>
          <option value={TASK_PROGRESS_ID.WAITING}>{TASK_PROGRESS_STATUS.WAITING}</option>
          <option value={TASK_PROGRESS_ID.COMPLETED}>{TASK_PROGRESS_STATUS.COMPLETED}</option>
        </select>
      </div>
      <button
        type="button"
        className="self-start bg-green-500 text-white text-xl py-3 px-6 rounded"
        onClick={(): void => handleSubmit()}
      >
        Submit
      </button>
    </form>
  )
}

export default TaskFrom