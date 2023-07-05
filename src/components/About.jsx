import eggImgMobile from '../assets/images/mobile/image-transform.jpg'
import eggImgDesktop from '../assets/images/desktop/image-transform.jpg'
import glassImgMobile from '../assets/images/mobile/image-stand-out.jpg'
import glassImgDesktop from '../assets/images/desktop/image-stand-out.jpg'

export const About = () => {
  return (
    <section>
      <div className='tablet:flex'>
        <picture className='tablet:flex-1'>
          <source media='(max-width:640px)' srcSet={eggImgMobile} />
          <source media='(min-width:641px)' srcSet={eggImgDesktop} />
          <img src={eggImgMobile} alt="transform image" />
        </picture>
        <div className='text-center px-6 tablet:flex-1 tablet:px-0'>
          <h2 className='font-Fraunces text-[2rem] mt-16 font-black font-tracki'>Transform your brand</h2>
          <p className='font-Barlow text-Dark-grayish-blue mt-8 text-[1.125rem] leading-[1.875rem]'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <div className='relative mt-12 mb-16'>
            <button className='font-Fraunces uppercase'>Learn more</button>
            <div className='bg-Yellow bg-opacity-25 w-[137px] h-[10px] absolute bottom-0 -z-10 rounded-full left-0 right-0 mx-auto'></div>
          </div>
        </div>
      </div>

      <div className='tablet:flex tablet:flex-row-reverse'>
        <picture className='flex-1'>
          <source media='(max-width:640px)' srcSet={glassImgMobile} />
          <source media='(min-width:641px)' srcSet={glassImgDesktop} />
          <img src={eggImgMobile} alt="transform image" />
        </picture>
        <div className='text-center px-6 tablet:flex-1'>
          <h2 className='font-Fraunces text-[2rem] mt-16 font-black font-tracki'>Stand out to the right audience</h2>
          <p className='font-Barlow text-Dark-grayish-blue mt-8 text-[1.125rem] leading-[1.875rem]'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <div className='relative mt-12 mb-16'>
            <button className='font-Fraunces uppercase'>Learn more</button>
            <div className='bg-Soft-red bg-opacity-25 w-[137px] h-[10px] absolute bottom-0 -z-10 rounded-full left-0 right-0 mx-auto'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
