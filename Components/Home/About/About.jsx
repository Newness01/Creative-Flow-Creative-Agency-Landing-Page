import React from 'react'
import AboutProgress from './AboutProgress'

const About = () => {
  return (
    <div id='about' className='pt-16 pb-16 bg-white scroll-mt-24'>
<div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
{/* Image Content */}
<div 
data-aos ='zoom-in'
data-aos-anchor-placement='top-center'
className="relative flex justify-center items-center">
    {/* Main Image */}
    <img src={'/images/a3.png'} height={500} width={500} className='animate-spin [animation-duration:20s]' alt="img" />

{/* Centered Image */}
<img src="/images/a4.png" width={350} height={350}
className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:ml-4 w-50
h-50 md:w-87.5 md:h-87.5' alt="" />
</div>

{/* Text Content */}
<div>
{/* subheading */}
<h1 
data-aos='fade-up'
data-aos-anchor-placement='top-center'
data-aos-delay='150'
className="text-blue-700 text-lg font-medium tracking-widest">About Us</h1>
{/* Main heading */}
<h1 
data-aos='fade-up'
data-aos-anchor-placement='top-center'
data-aos-delay='300'
className='text-3xl md:text-5xl font-bold mt-4'>
    Innovative solutions for digital success
</h1>
{/* Descriptions */}
<p 
data-aos='fade-up'
data-aos-anchor-placement='top-center'
data-aos-delay='450'
className='ml-0 md:ml-12 md:mt-10 mt-5 text-black text-sm md:text-base font-semibold
leading-loose'>
    Payment solutions enable businesses to accept payments Payment
solutions enable businesses to accept payments from customers
conveniently securely from customers and securely </p>
{/* Progress Content */}
<AboutProgress/>
</div>
</div>
    </div>
  )
}

export default About