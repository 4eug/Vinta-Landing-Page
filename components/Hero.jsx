import Image from "next/image";

export default function Hero() {
  return (
    <div className='text-center mt-16'>
        <h1 className='text-secondary-text-color text-font-medium text-mobile-big-font-size md:text-big-font-size leading-mobile-big-line-weight md:leading-big-line-weight'>
       <span className='text-primary-text-color'>Vintage</span> Item Collections <br/> for Header Images.
        </h1>
        <p className='text-primary-text-color text-font-regular text-small-font-size'>
        Design created with figma and thanks to ohMy! Designer for the Images. Available for Free.
        </p>
        <div className="">
        <Image width={2000} height={1200} layout='fill' objectFit='cover' src='/Hero Images.png' alt='' />
        </div>
    </div>
  )
}
