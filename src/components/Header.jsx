import logo from '../assets/images/logo.svg'

import { Nav } from './Nav'

export const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8 '>
      <div className='flex h-[24px] place-content-between m-auto'>
        <img className='w-[124px] h-6 xl:w-[170px] xl:h-[33px]' src={logo} alt="Logo sunnyside" />
        <Nav />
      </div>
    </header>
  )
}
