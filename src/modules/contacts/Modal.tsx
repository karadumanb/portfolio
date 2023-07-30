import Modal from '@/components/feedback/Modal'
import { ComponentProps } from 'react'
import ContactForm from './Form'

interface Props extends ComponentProps<typeof Modal> {
  onSuccess: () => void
}

function ContactMeModal({ onSuccess, onClose, ...others }: Props) {
  return (
    <Modal
      onClose={onClose}
      bodyRenderer={() => (
        <ContactForm showTitle={false} onSuccess={onSuccess} onCancel={onClose} />
      )}
      headerRenderer={() => (
        <h5 className=" text-primary-dark dark:text-primary-light text-xl">
          {"Let's keep in touch!"}
        </h5>
      )}
      {...others}
    />
  )
}

export default ContactMeModal
