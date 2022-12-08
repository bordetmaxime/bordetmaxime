import Header from '../Header'

import Bodychange from '../../assets/bodychange.png'
import Datepicker from '../../assets/datepicker.jpg'
import Familydeck from '../../assets/familydeck.png'
import Frenchinformation from '../../assets/french-information.jpg'
import Githubsearch from '../../assets/github-search.jpg'
import Pastrylover from '../../assets/pastrylover.jpg'
import Digitalize from '../../assets/digitalize.jpg'
import SYB from '../../assets/syb.jpg'
import './style.css'

const Projects = () => {

	return(
	<div className="projects">
	
	<Header/>
	
	<section class="text-gray-600 body-font ">
  <div class="container px-5 py-16 mx-auto">
	  	 <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center responsiveTitle text-lime-400">
              MVP Projects
          </h2>
    <div class="flex flex-wrap -m-4 ">
	

      <a href="https://digitalize-you.netlify.app/" class="p-4 md:w-1/3 fade-in1 ">
        <div class="h-full border border-solid border-lime-800  border-opacity-60 rounded-lg overflow-hidden">
		<img class="lg:h-48 p-6 border-b border-solid border-lime-400 md:h-36 w-full object-cover object-top" src={Digitalize} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT / TAILWIND - NODEJS / EXPRESS / POSTGRES / SEQUELIZE / DOTENV</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Digitalize</h1>
            <p class="leading-relaxed mb-3">Digitalize is a showcase site for a digital company </p>
            <div class="flex items-center flex-wrap">
              <a href="https://digitalize-you.netlify.app/" class="text-lime-600 hover:text-lime-8000 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </a>

	  <a href="https://digitalize-you.netlify.app/" class="p-4 md:w-1/3 fade-in2 ">
        <div class="h-full border border-solid border-lime-800  border-opacity-60 rounded-lg overflow-hidden">
		<img class="lg:h-48 p-6 border-b border-solid border-lime-400 md:h-36 w-full object-cover object-top" src={SYB} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">ANGULAR / TAILWIND - NODEJS / EXPRESS / POSTGRES / SEQUELIZE / DOTENV</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">SaveYourBrain</h1>
            <p class="leading-relaxed mb-3">SYB is an application of informations stockage </p>
            <div class="flex items-center flex-wrap">
              <a href="https://digitalize-you.netlify.app/" class="text-lime-600 hover:text-lime-8000 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </a>
	  

  <a href="https://family-deck.surge.sh/" class="p-4 md:w-1/3 fade-in ">
  <div class="h-full border border-solid border-lime-800 border-opacity-60 rounded-lg overflow-hidden">
  <img class="lg:h-48 p-6 border-b border-solid border-lime-400 md:h-36 w-full object-cover object-center" src={Familydeck} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT / REDUX / SCSS - NODEJS / POSTGRESQL / EXPRESS / JOI / ESLINT / DEBUG / DOTENV / SQITCH </h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Family-deck</h1>
            <p class="leading-relaxed mb-3">Family-deck is an application developed for the  family management</p>
            <div class="flex items-center flex-wrap ">
              <a href="https://family-deck.surge.sh/" class="text-lime-600 hover:text-lime-800 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
		</a>

	 
      <a href="https://bodychange.netlify.app/" class="p-4 md:w-1/3 fade-in4 ">
        <div class="h-full border border-solid border-lime-800  border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 p-6 border-b border-solid border-lime-400 md:h-36 w-full object-cover object-top" src={Bodychange} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT / SCSS / BOOTSTRAP - NODEJS / EXPRESS / POSTGRES / SEQUELIZE / DOTENV</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Body-change</h1>
            <p class="leading-relaxed mb-3">bodychange is a bodybuilding training program app</p>
            <div class="flex items-center flex-wrap">
              <a href="https://bodychange.netlify.app/" class="text-lime-600 hover:text-lime-800 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </a>


      <a href="https://datepicker-maximeb.netlify.app/" class="p-4 md:w-1/3 0 fade-in5">
        <div class="h-full border border-solid border-lime-800  rounded-lg overflow-hidden">
          <img class="lg:h-48 p-6 border-b border-solid border-lime-400 md:h-36 w-full object-cover object-top" src={Datepicker} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Date Picker</h1>
            <p class="leading-relaxed mb-3">Date Picker is an application of making appointments</p>
            <div class="flex items-center flex-wrap ">
              <a href="https://datepicker-maximeb.netlify.app/" class="text-lime-600 hover:text-lime-800 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </a>



	  <a href="https://find-the-repo.netlify.app/" class="p-4 md:w-1/3  fade-in6">
        <div class="h-full border border-solid border-lime-800  border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 p-6 border-b border-solid border-lime-400 md:h-36 w-full object-cover object-top" src={Githubsearch} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Github-Search</h1>
            <p class="leading-relaxed mb-3">Github-Search is an application of research of github repository</p>
            <div class="flex items-center flex-wrap">
              <a href="https://find-the-repo.netlify.app/" class="text-lime-600 hover:text-lime-800 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </a>


	  <a href="https://french-information.netlify.app/" class="p-4 md:w-1/3 fade-in7">
        <div class="h-full border border-solid border-lime-800  border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 p-6 border-b border-solid border-lime-400 md:h-36 w-full object-cover object-center" src={Frenchinformation} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">French-Information</h1>
            <p class="leading-relaxed mb-3">French-information is an information application on France regions</p>
            <div class="flex items-center flex-wrap">
              <a href="https://french-information.netlify.app/" class=" inline-flex items-center md:mb-2 lg:mb-0 text-lime-600 hover:text-lime-800">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </a>


	  <a href="https://bordetmaxime.github.io/pastrylover/" class=" p-4 md:w-1/3 slide-in-left fade-in8">
        <div class="h-full border border-solid border-lime-800  border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 p-6 border-b border-solid border-lime-400 md:h-36 w-full object-cover object-bottom" src={Pastrylover} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">HTML / CSS</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Pastry Lover</h1>
            <p class="leading-relaxed mb-3">PastryLover is a pastry showcase site </p>
            <div class="flex items-center flex-wrap">
              <a href="https://bordetmaxime.github.io/pastrylover/" class="text-lime-600 hover:text-lime-800 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </a>


    </div>
  </div>
</section>
	
	</div>
	
	)
	
	};

	export default Projects;
	
