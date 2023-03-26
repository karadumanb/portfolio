import { motion } from 'framer-motion';
import ContactDetails from '@/modules/contacts/Details';
import ContactForm from '@/modules/contacts/Form';
import PagesMetaHead from '@/components/shared/PagesMetaHead';

function contact() {
	return (
		<div>
			<PagesMetaHead title="Contact" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
			>
				<ContactForm />

				<ContactDetails />
			</motion.div>
		</div>
	);
}

export default contact;