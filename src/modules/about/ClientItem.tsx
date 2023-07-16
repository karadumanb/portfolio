import Image from 'next/image'

type Props = {
  title: string
  image: string
}

function AboutClientSingle({ title, image }: Props) {
  return (
    <div className="flex justify-center py-5 px-2 shadow-sm rounded-lg mb-5 cursor-pointer">
      <Image src={image} alt={title} width={100} height={50} />
    </div>
  )
}

export default AboutClientSingle
