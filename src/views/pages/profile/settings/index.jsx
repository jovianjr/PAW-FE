import { Cog6ToothIcon,BanknotesIcon } from '@heroicons/react/24/solid';

import { useParams } from 'react-router-dom';
const User = () => {
	const params = useParams();
	return (
      <footer class = "p-4 bg-white shadow md:px-0 md : py-2">
      <hr class="my-2 sm:mx-auto dark:border-2 border-gray-200/70"></hr>
      <div class="md:flex container">
        <div className ="pt-0 m1-4 font-semibold"> 
          <h1>PAW</h1>
        
        </div>

        <div className="bg-slate-200 h-screen w-full">

             <div className="flex flex-col bg-white absolute p-6  gap-[24px] items-center h-40 w-100 r-[26px] t-[112px]  
						right-[26px]  h-auto top-[80px] "> 
                        
                        
                        
            </div>





          </div>
       
        </div>
      </footer>

    )
    };
    export default User;