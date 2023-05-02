import { useCountUp } from 'react-countup'

type Props = {
  title: string
  id: string
  end: number
  measurement?: string
  duration?: number
}

const CounterItem = ({ title, id, measurement = '', end, duration = 2 }: Props) => {
  useCountUp({ ref: id, end, duration })

  return (
    <div className="mb-20 sm:mb-0">
      <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
        <span id={id} /> {measurement}
      </h2>
      <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
        {title}
      </span>
    </div>
  )
}

export default CounterItem
