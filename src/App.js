import './App.css';

// images
import profilePic from "./images/profile-img.jpg"
import backNav from "./images/back-icon.jpg"
import threeDots from "./images/threeDots.jpg"
import github from "./images/github.jpg"
import slack from "./images/slack.jpg"
import zuri from "./images/zuri-icon.jpg"
import i4g from "./images/I4G.jpg"

function App() {
  return (
    <div className="App py-16 px-24">
      <header>
        <div className="nav flex w-5/6 justify-end"><img src={backNav} alt="" className='cursor-pointer' /></div>
        <div className="profile-img-con flex justify-center">
          <img id='profile__img' src={profilePic} alt="profile-icture" />
        </div>
        <div className="profile-usernames my-2.5">
          <h2 id='twitter' className='text-2xl font-bold'>mayana_techkid</h2>
          {/* hidden */}
          <h4 id='slack' className='invisible'>Mayana</h4>
        </div>
      </header>
      <body>
        <div className="btn-container my-7 flex flex-col">
          <a href="#" id="btn__zuri" className='py-6 px-8 w-full 
          bg-gray-200 mb-3 text-xl font-semibold rounded-lg'>Zuri Team</a>
          <a href="#" id="books" className='py-6 px-8 w-full 
          bg-gray-200 mb-3 text-xl font-semibold rounded-lg'>Zuri Books</a>
          <a href="#" id="book__python" className='py-6 px-8 w-full 
          bg-gray-200 mb-3 text-xl font-semibold rounded-lg'>Python Books</a>
          <a href="#" id="pitch" className='py-6 px-8 w-full 
          bg-gray-200 mb-3 text-xl font-semibold rounded-lg'>Background Check For Coders</a>
          <a href="#" id="book__design" className='py-6 px-8 w-full 
          bg-gray-200 text-xl font-semibold rounded-lg'>Designs Books</a>
        </div>
        <div className="slack--github w-1/5 flex justify-around mx-auto mt-10 mb-20">
          <img src={slack} alt="slack-icon" className="slack" />
          <img src={github} alt="github-icon" className="github" />
        </div>
      </body>
      <hr className='my-7' />
      <footer>
        <div className='footer flex flex-col justify-between my-9 text-left sm:flex-row'>
          <img src={zuri} alt="zuri-icon" className='w-2/6 sm:w-1/6' />
          <p className='my-5 text-[1.05rem] sm:text-2xl'>HNG Internship 9 Frontend Task</p>
          <img src={i4g} alt="i4g-icon" className='w-2/6 sm:w-1/6' />
        </div>
      </footer>
    </div>
  );
}

export default App;
