import React from 'react'

// images
import github from "../images/github.jpg"
import slack from "../images/slack.jpg"

export default function HomeBody() {
  return (
    <>
      <body>
        <div className="my-7 flex flex-col mx-auto sm:w-9/12">
          <a
            className='py-6 px-8 w-full bg-gray-200 mb-6 text-base sm:text-xl font-semibold rounded-lg'
            href="https://twitter.com/mayana_techkid"
            rel="noreferrer"
            subtext='Connect with me on twitter'
            target="_blank" id="twitter"
          >Twitter</a>

          <a
            className='py-6 px-8 w-full bg-gray-200 mb-6 text-base sm:text-xl font-semibold rounded-lg'
            href="https://training.zuri.team/"
            id="btn__zuri"
            rel="noreferrer"
            target="_blank"
          >Zuri Team</a>

          <a
            className='anchor-tags py-6 px-8 w-full bg-gray-200 mb-6 text-base sm:text-xl font-semibold rounded-lg' 
            href="http://books.zuri.team"
            id="books" 
            rel="noreferrer"
            subtext='Great books to help you grow as you learn to code.'
            target="_blank"
          >Zuri Books</a>

          <a 
            className='anchor-tags py-6 px-8 w-full bg-gray-200 mb-6 text-base sm:text-xl font-semibold rounded-lg' 
            href="https://books.zuri.team/python-for-beginners?ref_id=Techkid" 
            id="book__python"
            rel="noreferrer"
            subtext="Right books that'll take your python skills to next level" 
            target="_blank" 
          >Python Books</a>

          <a 
            className='anchor-tags py-6 px-8 w-full bg-gray-200 mb-6 text-base sm:text-xl font-semibold rounded-lg' 
            href="https://background.zuri.team/" 
            id="pitch" 
            rel="noreferrer"
            subtext="Get to know more about your developers"
            target="_blank" 
          >Background Check For Coders</a>

          <a 
            className='anchor-tags py-6 px-8 mb-6 w-full bg-gray-200 text-base sm:text-xl font-semibold rounded-lg' 
            href="https://books.zuri.team/design-rules" 
            id="book__design" 
            rel="noreferrer"
            subtext="Tips to create mindblowing designs"
            target="_blank" 
          >Designs Books</a>

          <a 
            className='anchor-tags py-6 px-8 w-full bg-gray-200 text-base sm:text-xl font-semibold rounded-lg'
            href="/contact"
            id="contact" 
            subtext="Reach out to me here👋🏽"
          >Contact</a>
        </div>
        
        <div className="w-2/5 sm:w-1/5 flex justify-around mx-auto mt-10 mb-20">
          <img src={slack} alt="slack-icon" />
          <img src={github} alt="github-icon" />
        </div>
      </body>
    </>
  )
}
