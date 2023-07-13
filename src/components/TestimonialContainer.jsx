import emilyImg from '../assets/images/image-emily.jpg'
import thomasImg from '../assets/images/image-thomas.jpg'
import jennieImg from '../assets/images/image-jennie.jpg'

import { Testimonial } from "./Testimonial"
export const TestimonialContainer = () => {
  return (
    <section className='px-6 pt-16 desktop:pt-40 bg-white'>
      <h2 className='text-center uppercase font-Fraunces mb-16 text-Grayish-blue xl:text-xl desktop:mb-20'>Client testimonials</h2>
      <div className='lg:flex lg:w-[900px] lg:mx-auto xl:w-[1110px]'>
        <Testimonial
          img={emilyImg}
          testimonial='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
          name='Emily R.'
          position='Marketing Director'
        />
        <Testimonial
          img={thomasImg}
          testimonial='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
          name='Thomas S.'
          position='Chief Operating Officer'
        />
        <Testimonial
          img={jennieImg}
          testimonial='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
          name='Jennie F.'
          position='Business Owner'
        />
      </div>
    </section>
  )
}
