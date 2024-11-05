import type { Dispatch, SetStateAction } from 'react'
import { useRecoilState } from 'recoil'
import { taskFilterState } from '@/features/taskAtoms'

interface FilterMenuProps {
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>
}

const FilterMenu = ({ setIsFilterOpen }: FilterMenuProps): JSX.Element => {
  const [filter, setFilter] = useRecoilState(taskFilterState)

  return (
    <div className="absolute flex flex-col bg-white right-4 top-4 py-2 px-4 border border-gray-500 gap-y-2">
      {/* <div
        className="flex items-center cursor-pointer gap-x-1"
        onClick={(): void => {
          setIsFilterOpen(false)
        }}
      >
        <span className="material-icons">done</span>Completed Tasks
      </div>
      <div
        className="flex items-center cursor-pointer gap-x-1"
        onClick={(): void => {
          setIsFilterOpen(false)
        }}
      >
        <span className="material-icons">pending_actions</span>
        Uncompleted Tasks
      </div>
      <div
        className="flex items-center cursor-pointer gap-x-1"
        onClick={(): void => {
          setIsFilterOpen(false)
        }}
      >
        <span className="material-icons">view_list</span>
        All Tasks
      </div>
      <span
        className="material-icons absolute top-1 right-1 cursor-pointer"
        onClick={(): void => setIsFilterOpen(false)}
      >
        close
      </span> */}

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all" onClick={(): void => setIsFilterOpen(false)}>
          All
        </option>
        <option value="completed" onClick={(): void => setIsFilterOpen(false)}>
          Completed
        </option>
        <option value="uncompleted" onClick={(): void => setIsFilterOpen(false)}>
          Uncompleted
        </option>
      </select>
    </div>
  )
}

export default FilterMenu
