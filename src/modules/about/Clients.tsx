import { clientsData } from './data'
import ClientItem from './ClientItem'

function AboutClients() {
  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
        {'Some of the brands I worked with'}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
        {clientsData.map((client) => (
          <ClientItem title={client.title} image={client.img} key={client.id} />
        ))}
      </div>
    </div>
  )
}

export default AboutClients
