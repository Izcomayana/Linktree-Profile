import './App.css';

// images
import profilePic from "./images/profile-img.jpg"
import backNav from "./images/back-icon.jpg"
import github from "./images/github.jpg"
import slack from "./images/slack.jpg"
import zuri from "./images/zuri-icon.jpg"
import i4g from "./images/I4G.jpg"

function App() {
  return (
    <div className="App py-4 px-6 sm:py-16 sm:px-24">
      <header>
        <div className="flex w-5/6 justify-end">
          <img src={backNav} alt="" className='cursor-pointer' />
        </div>
        <div className="flex justify-center">
          <img id='profile__img' src={profilePic} alt="profile-icture" />
        </div>
        <div className="my-2.5">
          <h2 id='twitter' className='text-2xl font-bold'>mayana_techkid</h2>
          {/* hidden */}
          <h4 id='slack' className='invisible'>Mayana</h4>
        </div>
      </header>
      <body>
        <div className="my-7 flex flex-col mx-auto sm:w-9/12">
          <a href="https://training.zuri.team/" target="_blank" id="btn__zuri" 
          className='py-6 px-8 w-full bg-gray-200 mb-6 text-base sm:text-xl font-semibold rounded-lg'
          >Zuri Team</a>

          <a href="http://books.zuri.team" subtext='Great books to help you grow as you learn to code.' 
          target="_blank" id="books" className='anchor-tags py-6 px-8 w-full bg-gray-200 mb-6 
          text-base sm:text-xl font-semibold rounded-lg'>Zuri Books</a>

          <a href="https://books.zuri.team/python-for-beginners?ref_id=Mayana" target="_blank" id="book__python"
          subtext="Right books that'll take your python skills to next level" className='anchor-tags py-6 
          px-8 w-full bg-gray-200 mb-6 text-base sm:text-xl font-semibold rounded-lg'>Python Books</a>

          <a href="https://background.zuri.team/" target="_blank" subtext="Get to know more about your developers" 
          id="pitch" className='anchor-tags py-6 px-8 w-full bg-gray-200 mb-6 text-base sm:text-xl 
          font-semibold rounded-lg'>Background Check For Coders</a>

          <a href="https://books.zuri.team/design-rules" target="_blank" subtext="Tips to create mindblowing designs" 
          id="book__design" className='anchor-tags py-6 px-8 w-full bg-gray-200 text-base sm:text-xl 
          font-semibold rounded-lg'>Designs Books</a>
        </div>
        <div className="w-2/5 sm:w-1/5 flex justify-around mx-auto mt-10 mb-20">
          <img src={slack} alt="slack-icon" />
          <img src={github} alt="github-icon" />
        </div>
      </body>
      <hr className='my-7' />
      <footer>
        <div className='flex flex-col justify-between my-9 mx-auto text-left sm:w-9/12 sm:flex-row'>
          <img src={zuri} alt="zuri-icon" className='w-2/6 sm:w-1/6 sm:h-[10%]' />
          <p className='my-5 text-[1.05rem] text-gray-500 sm:my-0'>HNG Internship 9 Frontend Task</p>
          <img src={i4g} alt="i4g-icon" className='w-2/6 sm:w-1/6 sm:h-[10%]' />
        </div>
      </footer>
    </div>
  );
}

export default App;
