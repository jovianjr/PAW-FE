import React from "react";
import img1 from './img/instagram.png';

const ArtDetail = () => {
	return <>
		<div className="max-w-[720px] ml-64">
			<img className="w-full max-h-[1080px] object-cover mt-12 rounded-t-sm rounded-b-sm" src="/src/views/pages/art/detail/img/picture.jpg" alt="" />
			<div class="flex justify-between mt-1">
				<div className="flex items-center space-x-3 mt-2">
					<img class="w-14 h-14 rounded-full object-cover" src="/src/views/pages/art/detail/img/profile.jpg"/>
					<div className="flex flex-col">
						<strong>Watercolor Paintings from Aqua</strong>
						<span>John Doe</span>
					</div>
				</div>								
				<div className="flex items-center -mt-4">
					<span >January 2022</span>
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
	</>;
};

export default ArtDetail;
