import AppHeader from '../shared/Header'
import AppFooter from '../shared/Footer'
import PagesMetaHead from '../shared/PagesMetaHead'

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  )
}

export default DefaultLayout
