import { Category } from './data'

const selectOptions = Object.values(Category)

type Props = {
  onChange: (value: string) => void
}

function ProjectsFilter({ onChange }: Props) {
  return (
    <select
      onChange={(e) => {
        onChange(e.target.value)
      }}
      className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            ">
      <option className="text-sm sm:text-md">All Projects</option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default ProjectsFilter
