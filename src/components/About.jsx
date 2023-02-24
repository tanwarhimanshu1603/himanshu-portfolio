import React from 'react'

const About = () => {
    
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl'>
                Hi, I'm Himanshu Tanwar, I am from New Delhi, India, and I'm currently enrolled in a Bachelors degree in the field of Software Engineering from Delhi Technological University. I started programming because I have a strong passion for learning new languages and technologies. I've a very strong problem solving skills and has solved over 500+ problems on different platforms like Leetcode, CodeChef, Codeforces and secured a global rank of 60 in CodeChef Starters.
            </p> 
        </div>
    </div>
  )
}

export default About