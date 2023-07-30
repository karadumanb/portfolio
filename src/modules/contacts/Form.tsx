import Button from '@/components/general/Button'
import FormInput from '@/components/general/FormInput'
import { sendEmail } from '@/services/email'
import { FormEvent } from 'react'

interface Props {
  onSuccess?: () => void
  className?: string
  onCancel?: () => void
  showTitle?: boolean
}

function ContactForm({ onSuccess, className, onCancel, showTitle = true }: Props) {
  function submitForm(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()
      const form = e.target
      // @ts-ignore
      const formFields = form.elements

      sendEmail({
        from: formFields.email.value,
        name: formFields.name.value,
        subject: formFields.subject.value,
        message: formFields.message.value
      })

      onSuccess?.()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={submitForm} className={`text-left ${className}`}>
      {showTitle && (
        <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
          Contact Form
        </p>
      )}

      <FormInput
        inputLabel="Full Name"
        labelFor="name"
        inputType="text"
        inputId="name"
        inputName="name"
        placeholderText="Your Name"
        ariaLabelName="Name"
      />
      <FormInput
        inputLabel="Email"
        labelFor="email"
        inputType="email"
        inputId="email"
        inputName="email"
        placeholderText="Your email"
        ariaLabelName="Email"
      />
      <FormInput
        inputLabel="Subject"
        labelFor="subject"
        inputType="text"
        inputId="subject"
        inputName="subject"
        placeholderText="Subject"
        ariaLabelName="Subject"
      />

      <div className="mt-6">
        <label
          className="block text-lg text-primary-dark dark:text-primary-light mb-2"
          htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
          id="message"
          name="message"
          cols={14}
          rows={6}
          aria-label="Message"></textarea>
      </div>

      <div className="mt-6">
        {onCancel && (
          <Button
            className="px-4 py-2 mr-4 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
            onClick={onCancel}
            title="Cancel"
            aria-label="Cancel Form"
          />
        )}

        <Button
          title="Send Message"
          type="submit"
          aria-label="Send Message"
          className="font-general-medium px-4 py-2 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
        />
      </div>
    </form>
  )
}

export default ContactForm
