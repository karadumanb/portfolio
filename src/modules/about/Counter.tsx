import CounterItem from './CounterItem'

function AboutCounter() {
  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem title="Years of experience" id="experienceCounter" end={8} />
        <CounterItem
          title="Total contribution per year"
          id="githubStarsCounter"
          measurement="+"
          end={1636}
        />
        <CounterItem title="Total projects" id="feedbackCounter" end={12} />
        <CounterItem title="Projects completed" id="projectsCounter" measurement="%" end={82} />
      </div>
    </div>
  )
}

export default AboutCounter
