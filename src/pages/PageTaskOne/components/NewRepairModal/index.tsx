import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { Bandaids, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { CloseButton, Content, Overlay, Title } from './styles'

const newRepairFormSchema = z.object({
  title: z.string().min(3),
})

interface NewItemModalProps {
  setOpen: (state: boolean) => void
  addRepairItem: (newRepairItemTitle: string) => void
}

type NewRepairFormInputs = z.infer<typeof newRepairFormSchema>

export function NewRepairModal({ setOpen, addRepairItem }: NewItemModalProps) {
  const { reset, handleSubmit, register } = useForm<NewRepairFormInputs>({
    resolver: zodResolver(newRepairFormSchema),
  })

  function handleNewRepairItem(data: NewRepairFormInputs) {
    const { title } = data
    addRepairItem(title)

    reset()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>
          <Bandaids size={32} />
          <span>Reparar</span>
        </Title>
        <CloseButton asChild onClick={() => reset()}>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewRepairItem)}>
          <textarea
            placeholder="Se acontecer o pior, o que posso fazer para reparar um pouco o dano, ou a quem posso pedir ajuda..."
            rows={5}
            {...register('title')}
            required
          />

          <button type="submit">Adicionar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
