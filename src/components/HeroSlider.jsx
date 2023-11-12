import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import {EffectFade, Autoplay} from 'swiper/modules'
import { data } from '../utils'





const HeroSlider = () => {
  return (
    <Swiper
    modules={[EffectFade, Autoplay]}
    effect='fade'
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false
    }}
    className='heroSlider h-[600px] lg:h-[860px]'
    >
      {
        data.heroSlides.map(({ bg, title, btnText }, i) => (
          <SwiperSlide key={i}
          className='h-full relative flex justify-center items-center'
          >
            <div className='z-20 text-white text-center flex items-center justify-center
             flex-col absolute top-[30%] left-0 right-0'>
              <p className='uppercase font-tertiary tracking-[6px] mb-5'>
                Jus enjoy and relax</p>
                <h1 className='text-[2rem] font-primary uppercase tracking-[2px]
                max-w-[920px] lg:text-[4rem] leading-tight mb-6'>
                  {title}
                </h1>
                <div>
                <button className='btn btn-lg btn-primary mx-auto'>
                  {btnText}
                </button>
                </div>
                
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img 
              className='object-cover h-full w-full'
              src={bg} alt="" />
            </div>
            <div className='absolute w-full h-full bg-black/70 top-0' />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default HeroSlider