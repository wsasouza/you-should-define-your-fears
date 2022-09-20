import { SectionContainer, Text } from './styles'

interface SectionProps {
  texts: string[]
  image: string
  legend: string
}

export function Section({ texts, image, legend }: SectionProps) {
  const hasImage = !!image
  console.log(hasImage)
  return (
    <SectionContainer hasImage={hasImage}>
      <Text>
        {texts.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Text>
      {image && (
        <figure>
          <img src={image} alt="" />
          <figcaption>{legend}</figcaption>
        </figure>
      )}
    </SectionContainer>
  )
}
