import { useState } from 'react'

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false)

  function getHtmlEl() {
    return document.getElementsByTagName('html')[0]
  }

  function onOpen() {
    getHtmlEl().classList.add('overflow-y-hidden')
    setIsOpen(true)
  }

  function onClose() {
    getHtmlEl().classList.remove('overflow-y-hidden')
    setIsOpen(false)
  }

  function onToggle() {
    if (!isOpen) {
      onOpen()
    } else {
      onClose()
    }
  }

  return { onOpen, onClose, onToggle, isOpen }
}
