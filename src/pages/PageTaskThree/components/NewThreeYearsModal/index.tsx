import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { HourglassLow, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { CloseButton, Content, Overlay, Title } from './styles'

const newThreeYearsFormSchema = z.object({
  title: z.string().min(3),
})

interface NewItemModalProps {
  setOpen: (state: boolean) => void
  addThreeYearsItem: (newThreeYearsItemTitle: string) => void
}

type NewThreeYearsFormInputs = z.infer<typeof newThreeYearsFormSchema>

export function NewThreeYearsModal({
  setOpen,
  addThreeYearsItem,
}: NewItemModalProps) {
  const { reset, handleSubmit, register } = useForm<NewThreeYearsFormInputs>({
    resolver: zodResolver(newThreeYearsFormSchema),
  })

  function handleNewThreeYearsItem(data: NewThreeYearsFormInputs) {
    const { title } = data
    addThreeYearsItem(title)

    reset()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>
          <HourglassLow size={32} />
          <span>3 anos</span>
        </Title>
        <CloseButton asChild onClick={() => reset()}>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewThreeYearsItem)}>
          <textarea
            placeholder="Escreva, caso eu evitar essa ação ou decisão e ações e decisões como esta, como estará minha vida em 3 anos..."
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
