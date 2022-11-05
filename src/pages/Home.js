import '../App.css';
import HomeBody from "../components/HomeBody"
import Footer from '../components/Footer';

// images
import profilePic from "../images/profile-img.jpg"
import backNav from "../images/back-icon.jpg"

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
          <h4 id='slack' className='invisible'>Techkid</h4>
        </div>
      </header>
      <HomeBody />
      <hr className='my-7' />
      <Footer />
    </div>
  );
}

export default App;
