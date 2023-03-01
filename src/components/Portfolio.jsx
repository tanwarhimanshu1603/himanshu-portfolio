import React from 'react'
import booklist from '../assets/booklist.jpeg'
import happyEatings from '../assets/happyEatings.jpeg'
import icoder from '../assets/icoder.jpeg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: icoder,
            demo: 'https://tanwarhimanshu1603.github.io/icoder.github.io/',
            code: 'https://github.com/tanwarhimanshu1603/icoder.github.io'
        },
        {
            id: 2,
            src: happyEatings,
            demo: 'https://happyeatings-1603.web.app/',
            code: 'https://github.com/tanwarhimanshu1603/Project-HappyEatings-Using-React'
        },
        {
            id: 3,
            src: booklist,
            demo: 'https://tanwarhimanshu1603.github.io/BookListApp.github.io/',
            code: 'https://github.com/tanwarhimanshu1603/BookListApp.github.io'
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-60'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work</p>
            </div>
            {/* Structure for Card. */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id,src,demo,code})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                        <a href={demo}  target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-110'>Demo</button></a>
                        <a href={code} target='_blank' rel='noreferrer'><button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-110'>Code</button></a>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div> 
  )
}

export default Portfolio