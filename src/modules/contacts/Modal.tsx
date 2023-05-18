import Modal from '@/components/feedback/Modal'
import { ComponentProps } from 'react'
import ContactForm from './Form'

interface Props extends ComponentProps<typeof Modal> {
  onRequest: () => void
}

function ContactMeModal({ onRequest, onClose, ...others }: Props) {
  return (
    <Modal
      onClose={onClose}
      bodyRenderer={() => (
        <ContactForm showTitle={false} onRequest={onRequest} onCancel={onClose} />
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
