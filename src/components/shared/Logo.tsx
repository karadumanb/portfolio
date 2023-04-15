import Image from 'next/image'

import personalIcon from '@/../public/personal_icon.svg'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-xl bg-gray-200 p-2">
        <Image src={personalIcon} width={40} className="cursor-pointer" alt="Profile Image" />
      </div>

      <div className="font-medium text-xl text-primary-dark dark:text-primary-light">Baturay</div>
    </div>
  )
}

export default Logo
