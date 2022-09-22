import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { Asterisk, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { CloseButton, Content, Overlay, Title } from './styles'

const newBenefitFormSchema = z.object({
  title: z.string().min(3),
})

interface NewItemModalProps {
  setOpen: (state: boolean) => void
  addBenefitItem: (newBenefitItemTitle: string) => void
}

type NewBenefitFormInputs = z.infer<typeof newBenefitFormSchema>

export function NewBenefitModal({
  setOpen,
  addBenefitItem,
}: NewItemModalProps) {
  const { reset, handleSubmit, register } = useForm<NewBenefitFormInputs>({
    resolver: zodResolver(newBenefitFormSchema),
  })

  function handleNewBenefitItem(data: NewBenefitFormInputs) {
    const { title } = data
    addBenefitItem(title)

    reset()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>
          <Asterisk size={32} />
          <span>Benefícios</span>
        </Title>
        <CloseButton asChild onClick={() => reset()}>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewBenefitItem)}>
          <textarea
            placeholder="Benefícios de uma tentativa ou de um sucesso parcial..."
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
