import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { HourglassHigh, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { CloseButton, Content, Overlay, Title } from './styles'

const newSixMonthsFormSchema = z.object({
  title: z.string().min(3),
})

interface NewItemModalProps {
  setOpen: (state: boolean) => void
  addSixMonthsItem: (newSixMonthsItemTitle: string) => void
}

type NewSixMonthsFormInputs = z.infer<typeof newSixMonthsFormSchema>

export function NewSixMonthsModal({
  setOpen,
  addSixMonthsItem,
}: NewItemModalProps) {
  const { reset, handleSubmit, register } = useForm<NewSixMonthsFormInputs>({
    resolver: zodResolver(newSixMonthsFormSchema),
  })

  function handleNewSixMonthsItem(data: NewSixMonthsFormInputs) {
    const { title } = data
    addSixMonthsItem(title)

    reset()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>
          <HourglassHigh size={32} />
          <span>6 meses</span>
        </Title>
        <CloseButton asChild onClick={() => reset()}>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewSixMonthsItem)}>
          <textarea
            placeholder="Escreva, caso eu evitar essa ação ou decisão e ações e decisões como esta, como estará minha vida em 6 meses..."
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
