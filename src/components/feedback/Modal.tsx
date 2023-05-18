import { motion } from 'framer-motion'
import { ComponentProps } from 'react'
import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'
import Button from '../general/Button'

type Props = {
  onClose?: () => void
  closeButtonProps?: Partial<ComponentProps<typeof Button>>
  isOpen: boolean
  headerRenderer?: () => ReactNode
  bodyRenderer?: () => ReactNode
  footerRenderer?: () => ReactNode
}

const Modal = ({
  headerRenderer,
  bodyRenderer,
  footerRenderer,
  isOpen,
  onClose,
  closeButtonProps = {}
}: Props) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500">
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30 w-full md:w-auto">
          <div className="modal min-w-full max-w-md w-full md:w-auto md:mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              {headerRenderer?.()}
              <Button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
                title={<FiX className="text-3xl" />}
                {...closeButtonProps}
              />
            </div>
            <div className="modal-body p-5 w-full h-full">{bodyRenderer?.()}</div>
            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              {footerRenderer?.()}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default Modal
