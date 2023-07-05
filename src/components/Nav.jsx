import { useState } from 'react'
import burgerMenu from '../assets/images/icon-hamburger.svg'

export const Nav = () => {

  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked((state)=>!state)
  }
  
  console.log(menuClicked)
  return (
    <nav className='font-Barlow'>
      <ul className={`${menuClicked ? 'flex' : 'hidden' } bg-white w-[329px] h-[305px] absolute top-[106px] left-0 right-0 mx-auto z-10 flex-col place-content-between py-[39px] items-center text-Dark-grayish-blue text-xl after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-white after:border-t-transparent after:border-l-transparent 
      
      sm:after:hidden sm:bg-transparent sm:relative sm:flex sm:flex-row sm:h-full sm:top-0 sm:w-[400px] sm:py-0 sm:text-White 
      
      lg:w-[490px]`}>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Services</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer bg-Yellow  w-[140px] h-[56px] grid place-content-center rounded-full text-Very-dark-desaturated-blue uppercase font-Fraunces 
        
        sm:bg-White sm:hover:text-white sm:hover:bg-opacity-25'>Contact</li>
      </ul>
      <div className='cursor-pointer sm:hidden' onClick={handleClick}>
        <img src={burgerMenu} alt="menu hamburger" />
      </div>
    </nav>
  )
}
