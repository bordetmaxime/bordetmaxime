import Header from '../Header'

import Bodychange from '../../assets/bodychange.png'
import Datepicker from '../../assets/datepicker.jpg'
import Familydeck from '../../assets/familydeck.png'
import Frenchinformation from '../../assets/french-information.jpg'
import Githubsearch from '../../assets/github-search.jpg'
import Pastrylover from '../../assets/pastrylover.jpg'


const Projects = () => {

	return(
	<div className="projects">
	
	<Header/>
	
	<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
	  	 <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center responsiveTitle">
              MVP Projects
          </h2>
    <div class="flex flex-wrap -m-4">
	
      <div class="p-4 md:w-1/3">
	 
        <div class="h-full border border-solid border-gray-200 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={Familydeck} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT / REDUX / SCSS - NODEJS / POSTGRESQL / EXPRESS / JOI / ESLINT / DEBUG / DOTENV / SQITCH </h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Family-deck</h1>
            <p class="leading-relaxed mb-3">Family-deck is an application developed for the  family management</p>
            <div class="flex items-center flex-wrap ">
              <a href="https://family-deck.surge.sh/" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div class="p-4 md:w-1/3">
        <div class="h-full border border-solid border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-top" src={Bodychange} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT / SCSS / BOOTSTRAP - NODEJS / EXPRESS / POSTGRES / SEQUELIZE / DOTENV</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Body-change</h1>
            <p class="leading-relaxed mb-3">bodychange is a bodybuilding training program app</p>
            <div class="flex items-center flex-wrap">
              <a href="https://bodychange.netlify.app/" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div class="p-4 md:w-1/3">
        <div class="h-full border border-solid border-gray-200 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-top" src={Datepicker} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Date Picker</h1>
            <p class="leading-relaxed mb-3">Date Picker is an application of making appointments</p>
            <div class="flex items-center flex-wrap ">
              <a href="https://datepicker-maximeb.netlify.app/" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>



	  <div class="p-4 md:w-1/3">
        <div class="h-full border border-solid border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-top" src={Githubsearch} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Github-Search</h1>
            <p class="leading-relaxed mb-3">Github-Search is an application of research of github repository</p>
            <div class="flex items-center flex-wrap">
              <a href="https://find-the-repo.netlify.app/" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>


	  <div class="p-4 md:w-1/3">
        <div class="h-full border border-solid border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={Frenchinformation} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">REACT</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">French-Information</h1>
            <p class="leading-relaxed mb-3">French-information is an information application on France regions</p>
            <div class="flex items-center flex-wrap">
              <a href="https://french-information.netlify.app/" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>


	  <div class="p-4 md:w-1/3">
        <div class="h-full border border-solid border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-bottom" src={Pastrylover} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">HTML / CSS</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Pastry Lover</h1>
            <p class="leading-relaxed mb-3">PastryLover is a pastry showcase site </p>
            <div class="flex items-center flex-wrap">
              <a href="./projet/projet.html" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Discover
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</section>
	
	</div>
	
	)
	
	};

	export default Projects;
	
