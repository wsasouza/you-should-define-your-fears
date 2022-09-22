import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { Crosshair, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { CloseButton, Content, Overlay, Title } from './styles'

const newDefineFormSchema = z.object({
  title: z.string().min(3),
})

interface NewItemModalProps {
  setOpen: (state: boolean) => void
  addDefineItem: (newDefineItemTitle: string) => void
}

type NewDefineFormInputs = z.infer<typeof newDefineFormSchema>

export function NewDefineModal({ setOpen, addDefineItem }: NewItemModalProps) {
  const { reset, handleSubmit, register } = useForm<NewDefineFormInputs>({
    resolver: zodResolver(newDefineFormSchema),
  })

  function handleNewDefineItem(data: NewDefineFormInputs) {
    const { title } = data
    addDefineItem(title)

    reset()
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>
          <Crosshair size={32} />
          <span>Definir</span>
        </Title>
        <CloseButton asChild onClick={() => reset()}>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewDefineItem)}>
          <textarea
            placeholder="Escreva tudo de pior que pode imaginar acontecer se tomar essa decisão..."
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
