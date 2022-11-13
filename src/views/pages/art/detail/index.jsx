import React from "react";
import img1 from './img/instagram.png';

const ArtDetail = () => {
	return <>
	<div className="container pr-2 pl-2 lg:px-6 lg:max-w-7xl mx-auto grid md:grid-cols-12 sm:grid-cols-6 my-4 mb:my-8 lg:my-16">
		<div className="col-span-2 md:col-span-2 sm:col-span-1"></div>
		<div className="md:col-span-8 sm:col-span-4">
			<img className="object-cover mt-8 rounded-t-sm rounded-b-sm"
			src="/src/views/pages/art/detail/img/picture.jpg" sizes="(max-width: 1110px) 100vw, 1110px" height="592"/>
			<div className="flex items-center space-x-3 mt-2">
				<img class="w-14 h-14 rounded-full object-cover" src="/src/views/pages/art/detail/img/profile.jpg"/>
				<div className="pt-1 pb-2 sm:flex justify-between">
					<p className="font-bold lg:mr-96 md:mr-14">Watercolor Paintings from Aqua
						<br />
						<p className="font-normal">John Doe</p>
					</p>
					<p className="md:text-right sm:text-left xl:text-right lg:-ml-4">January 2022</p>
				</div>
			</div>
			<p className="text-justify mt-2">
				Housework could be everyone’s work, not just “women’s work”. 
				Why do women enable men to act oblivious to cleaning, grocery shopping, pet feeding, etc? Somehow when men live alone they figure out how to do all of those things all on their own. 
				My friend’s husband claimed he didn’t know that sheets should be washed more than once a season. 
				He said he didn’t know one had to clean toilets. He assumed that since you flush toilets they clean themselves. 
				She tried to get him to help but he did an awful job so she let him off the hook. Wouldn’t it be better if she spent the time and energy to get him to do it right instead of letting him claim he is “just bad at it”. 
				My sons were raised to clean toilets and change their own sheets. Hopefully, in their future homes, the housework will be equally divided.
			</p>
		</div>
	</div>


	<footer className="md:p-4 bg-white md:px-0 md:py-2">
		<hr class="flex my-2 sm:mx-auto dark:border-2 border-gray-200/70 w-full"></hr>
		<div class="md:flex container mx-auto">
			<h1 className="pt-0 ml-4 font-semibold w-auto">PAW</h1>
			<div class="flex w-full md:mt-1 ml-4 space-x-4">
				<a href="https://instagram.com" className="md:ml-10 sm:ml-0 max-w-[18px]"><img src="/src/views/pages/art/detail/img/instagram.png" alt="" /></a>
				<a href="https://twitter.com" className="ml-2 -mt-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" fill="rgba(50,152,219,1)"/></svg></a>
				<a href="https://youtube.com" className="ml-2 -mt-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" fill="rgba(231,76,60,1)"/></svg></a>
				<a href="https://facebook.com" className="ml-2 -mt-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="rgba(66,103,178,1)"/></svg></a>
			</div>
			<div className="flex flex-row text-right w-auto mx-auto md:mt-0 ml-4">
				<a href="#" class="mr-4 hover:underline md:mr-3">Homepage</a>
				<p className="mr-4 md:mr-3">|</p>
				<a href="#" class="mr-4 hover:underline md:mr-3">Login</a>
			</div>
		</div>
	</footer>
	</>;
};

export default ArtDetail;
