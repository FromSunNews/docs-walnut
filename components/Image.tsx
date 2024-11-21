import { ComponentProps } from 'react'

type Props = ComponentProps<'img'>

const Image = (props: Props) => {
  const { alt = "c4l image", ...rest } = props
  return <img alt={alt} {...rest} className="mx-auto my-2" />
}

export default Image