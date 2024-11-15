/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilState } from 'recoil'
import { activeModalState } from '@/features/taskAtoms'
import { ModalStates, Task } from '@/types'

export const useManageModal = () => {
  const [modal, setModal] = useRecoilState<ModalStates>(activeModalState)

  const closeModal = () => {
    setModal({
      isOpen: false,
      typeModal: null,
      props: null,
    })
  }

  const openModal = (typeModal: string, props: Task | null) => {
    setModal({
      isOpen: true,
      typeModal,
      props,
    })
  }

  return {
    openModal,
    closeModal,
    modal,
  }
}
