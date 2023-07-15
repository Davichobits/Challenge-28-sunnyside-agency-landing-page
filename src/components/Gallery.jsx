import milkbottlesImgMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg'
import milkbottlesImgDesktop from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import orangeImgMobile from '../assets/images/mobile/image-gallery-orange.jpg'
import orangeImgDesktop from '../assets/images/desktop/image-gallery-orange.jpg'
import coneImgMobile from'../assets/images/mobile/image-gallery-cone.jpg'
import coneImgDesktop from'../assets/images/desktop/image-gallery-cone.jpg'
import sugarCubesImgMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesImgDesktop from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

import { Image } from './Image'

export const Gallery = () => {
  return (
    <section className='grid grid-cols-2 sm:flex'>
      <Image
        imgMobile={milkbottlesImgMobile}
        imgDesktop={milkbottlesImgDesktop}
      />
      <Image
        imgMobile={orangeImgMobile}
        imgDesktop={orangeImgDesktop}
      />
      <Image
        imgMobile={coneImgMobile}
        imgDesktop={coneImgDesktop}
      />
      <Image
        imgMobile={sugarCubesImgMobile}
        imgDesktop={sugarCubesImgDesktop}
      />
    </section>
  )
}
