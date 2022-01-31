import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Descubra a palavra certa em 6 tentativas. Depois de cada tentativa, as
  cores mostram o quão perto você está da solução.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" status="correct" />
        <Cell value="U" />
        <Cell value="R" />
        <Cell value="M" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra T faz parte da palavra e está na posição correta.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="I" />
        <Cell value="O" status="present" />
        <Cell value="L" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra O faz parte da palavra mas em outra posição.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="U" />
        <Cell value="L" />
        <Cell value="G" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra G não faz parte da palavra.
      </p>
    </BaseModal>
  )
}
