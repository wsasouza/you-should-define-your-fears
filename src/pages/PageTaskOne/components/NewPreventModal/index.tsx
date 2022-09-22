import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { Lifebuoy, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { CloseButton, Content, Overlay, Title } from './styles'

const newPreventFormSchema = z.object({
  title: z.string().min(3),
})

interface NewItemModalProps {
  setOpen: (state: boolean) => void
  addPreventItem: (newPreventItemTitle: string) => void
}

type NewPreventFormInputs = z.infer<typeof newPreventFormSchema>

export function NewPreventModal({
  setOpen,
  addPreventItem,
}: NewItemModalProps) {
  const { reset, handleSubmit, register } = useForm<NewPreventFormInputs>({
    resolver: zodResolver(newPreventFormSchema),
  })

  function handleNewPreventItem(data: NewPreventFormInputs) {
    const { title } = data
    addPreventItem(title)

    reset()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>
          <Lifebuoy size={32} />
          <span>Previnir</span>
        </Title>
        <CloseButton asChild onClick={() => reset()}>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewPreventItem)}>
          <textarea
            placeholder="O que posso fazer para impedir que essas coisas aconteçam ou, pelo menos, diminuir um pouco a probabilidade..."
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
