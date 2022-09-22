import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { HourglassMedium, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { CloseButton, Content, Overlay, Title } from './styles'

const newOneYearFormSchema = z.object({
  title: z.string().min(3),
})

interface NewItemModalProps {
  setOpen: (state: boolean) => void
  addOneYearItem: (newOneYearItemTitle: string) => void
}

type NewOneYearFormInputs = z.infer<typeof newOneYearFormSchema>

export function NewOneYearModal({
  setOpen,
  addOneYearItem,
}: NewItemModalProps) {
  const { reset, handleSubmit, register } = useForm<NewOneYearFormInputs>({
    resolver: zodResolver(newOneYearFormSchema),
  })

  function handleNewOneYearItem(data: NewOneYearFormInputs) {
    const { title } = data
    addOneYearItem(title)

    reset()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>
          <HourglassMedium size={32} />
          <span>1 ano</span>
        </Title>
        <CloseButton asChild onClick={() => reset()}>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewOneYearItem)}>
          <textarea
            placeholder="Escreva, caso eu evitar essa ação ou decisão e ações e decisões como esta, como estará minha vida em 1 ano..."
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
