import { Link } from "react-router-dom";
import './style.css'

const Header = () => {

	return(
	<div className="header">

	<ul class="flex border-b text-center border-solid border-lime-400 " >
  <li class="flex-1">
    <Link
      class="relative block bg-white p-4 text-sm font-medium hover:border   "
      to="/"
    >
	<span class="absolute inset-x-0 bottom-px h-px w-full bg-white  "></span>
      Home
    </Link>

  </li>

  <li class="flex-1">
    <Link class="block p-4 text-sm font-medium text-gray-500   " to="/projects">
      Projects
    </Link>
  </li>

  <li class="flex-1">
    <a class="block p-4 text-sm font-medium text-gray-500  " href="https://github.com/bordetmaxime"> Github </a>
  </li>

  <li class="flex-1 no-underline">
    <a class="block p-4 text-sm font-medium text-gray-500  no-underline " href="https://www.linkedin.com/in/maxime-bordet-1b1789173/">
      Linkedin
    </a>
  </li>
</ul>
	
	
	</div>
	
	)
	
	}
	
	export default Header;
