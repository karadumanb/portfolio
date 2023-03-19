import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../shared/PagesMetaHead';

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<PagesMetaHead />
			<AppHeader />
			<div>{children}</div>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;
