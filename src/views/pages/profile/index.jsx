import { Cog6ToothIcon,BanknotesIcon } from '@heroicons/react/24/solid';

import { useParams } from 'react-router-dom';

const User = () => {
	const params = useParams();
	return (
	<div className="bg-slate-200 h-screen w-full">
	
		Hello profile page!

		<div className="flex flex-col bg-white absolute p-6  gap-[24px] items-center h-40 w-100 r-[26px] t-[112px]  
						right-[26px]  h-auto top-[80px] ">  
						
		<Cog6ToothIcon className="h-4 w-4  absolute top-0 right-0 " />			
		<img 
			src= "https://picsum.photos/200/300"
			className="aspect-square rounded-full w-40" />
			

		<div className="flex flex-col bg-white  padding-[24px] gap-[4px] items-start h-auto w-auto ">
			<h1 className = "text-xl not-italic font-semibold leading-7" > John Doe </h1>
			<h2 className = "text-sm leading-5 font-normal text-sm text-center not-italic" > Martial Artist</h2>
		</div>
		
		<div className="flex flex-row bg-white  gap-[8px] items-start h-auto w-auto ">

			<BanknotesIcon className = "h-4 w-4"/>
		</div>
		
		<div className="flex flex-col bg-white  gap-[8px] items-start h-auto w-auto ">

			<h3 className ="text-xs not-italic text-start font-normal leading-5"> Other Information</h3>
			<h4 className ="text-sm not-italic font-normal leading-5">At vero eos et accusamus et iusto odio </h4>
	</div>

		<h5 className = "text-xs not-italic font-normal text-center leading-4"> Member since: Aug 20, 2020</h5>
	
			 	 
		</div>
		
	 </div>
	


);
};

export default User;
