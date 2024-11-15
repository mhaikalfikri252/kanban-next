/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Task {
  id: number
  title: string
  detail: string
  dueDate: string
  progressOrder: number
}

export const TASK_MODAL_TYPE = {
  ADD: 'add',
  EDIT: 'edit',
}

export interface ModalStates {
  isOpen: boolean
  typeModal: string | null
  props: Task | null
}
