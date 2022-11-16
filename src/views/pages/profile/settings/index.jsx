import {
    Cog6ToothIcon,
    BanknotesIcon,
    PhotoIcon
} from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';
import Button from '@/views/elements/button';
import { useForm } from 'react-hook-form';
import TextField from '@/views/elements/text-field';
import MainLayout from '@/views/layouts/main-layout';
const User = () => {
    const params = useParams();
    const {
        control,
        handleSubmit,
        reset,
        formState: { isDirty, isValid }
    } = useForm({
        defaultValues: {
            title: '',
            description: ''
        }
    });

    return (
        <MainLayout>
            <div className="flex w-screen gap-10 bg-slate-200 py-4 px-10">
                <div className="hidden h-screen w-1/4 rounded bg-white p-4 lg:block">
                    <div className="padding-[24px] mb-10 flex h-auto  w-auto flex-col items-center gap-[4px] bg-white ">
                        <img
                            src="https://picsum.photos/200/300"
                            className="aspect-square w-40 rounded-full"
                        />
                        <h1 className="text-center text-xl font-semibold not-italic leading-7">
                            {' '}
                            John Doe{' '}
                        </h1>

                        <h2 className="text-center text-sm text-sm font-normal not-italic leading-5">
                            {' '}
                            Martial Artist
                        </h2>
                    </div>
                    <div className="padding-[16px] flex h-[237px]  w-auto flex-col items-start gap-[24px] bg-white ">
                        <div className="padding-[10px] flex h-[36px]  w-auto flex-row items-center gap-[10px] bg-white ">
                            <h3 className="purple text-start text-xs font-bold not-italic leading-5 transition-all  hover:bg-purple-50 hover:text-purple-700 disabled:bg-gray-300 disabled:hover:border-transparent disabled:hover:text-white ">
                                {' '}
                                General settings
                            </h3>
                        </div>
                        <div className="padding-[10px] flex  h-[36px] w-auto flex-row items-center gap-[10px] bg-white ">
                            <h4 className="text-start text-xs font-bold not-italic transition-all  hover:bg-purple-50 hover:text-purple-700 disabled:bg-gray-300 disabled:hover:border-transparent disabled:hover:text-white">
                                {' '}
                                Password
                            </h4>
                        </div>
                        <div className="padding-[10px] flex  h-[36px] w-auto flex-row items-center gap-[10px] bg-white ">
                            <h4 className="text-start text-xs font-bold not-italic transition-all  hover:bg-purple-50 hover:text-purple-700 disabled:bg-gray-300 disabled:hover:border-transparent disabled:hover:text-white">
                                {' '}
                                Help
                            </h4>
                        </div>
                        <div className="padding-[10px] h-[35px] w-auto  flex-row items-center gap-[10px] bg-white ">
                            <h5 className="text-start text-xs font-bold not-italic text-red-500 ">
                                {' '}
                                Logout
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="container w-3/4 rounded bg-white p-4">
                    <div className="flex flex-col gap-9">
                        <h1 className="mt-3 text-start text-xs text-2xl font-normal font-bold not-italic">
                            {' '}
                            General Settings
                        </h1>
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-3">
                                <h5 className="text-start text-xs font-normal not-italic">
                                    {' '}
                                    Profile picture
                                </h5>
                            </div>
                            <div className="col-span-9">
                                <div className="flex h-auto w-auto  flex-row items-start gap-[8px] bg-white">
                                    <PhotoIcon className="h-5 w-5" />

                                    <h3 className="text-start text-xs font-normal not-italic leading-5 text-purple-700">
                                        {' '}
                                        Upload image
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-3">
                                <h5 className="text-start text-xs font-normal not-italic">
                                    {' '}
                                    Email
                                </h5>
                            </div>
                            <div className="col-span-9">
                                <input
                                    control={control}
                                    name="Email"
                                    className="w-2/3 !bg-slate-200"
                                    inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-base font-medium text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none "
                                    rules={{ required: true }}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-3">
                                <h5 className="text-start text-xs font-normal not-italic">
                                    {' '}
                                    Username
                                </h5>
                            </div>
                            <div className="col-span-9">
                                <input
                                    control={control}
                                    name="Username"
                                    className="w-2/3 !bg-slate-200"
                                    inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-base font-medium text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none "
                                    rules={{ required: true }}
                                />
                            </div>
                        </div>

                        <div className="grid-row-1 grid grid-cols-12 items-center">
                            <div className="items-top  col-span-3 flex">
                                <h5 className="text-xs font-normal not-italic">
                                    {' '}
                                    Display Name
                                </h5>
                                <span className="text-red-500">*</span>
                            </div>

                            <div className=" col-span-9">
                                <input
                                    control={control}
                                    name="Display Name"
                                    className="w-2/3 !bg-slate-200"
                                    inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-base font-medium text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none "
                                    rules={{ required: true }}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-3">
                                <h5 className="text-start text-xs font-normal not-italic">
                                    {' '}
                                    Title
                                </h5>
                            </div>
                            <div className="col-span-9">
                                <input
                                    control={control}
                                    name="Title"
                                    className="w-2/3 !bg-slate-200"
                                    inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-base font-medium text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none"
                                    rules={{ required: true }}
                                />
                            </div>
                        </div>
                        <div className=" grid grid-cols-12  items-center">
                            <div className="col-span-3">
                                <h5 className="text-start text-xs font-normal not-italic">
                                    {' '}
                                    Bio
                                </h5>
                            </div>
                            <div className="col-span-9 ">
                                <input
                                    control={control}
                                    name="Bio"
                                    className="h-20 w-2/3 !bg-slate-200"
                                    inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-base font-medium text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none "
                                    rules={{ required: true }}
                                />
                            </div>
                        </div>
                        <div className="flex w-full items-center">
                            <button
                                type="button"
                                className="mr-5 rounded border border-transparent bg-purple-700 py-1 px-4 text-xs font-medium text-white transition-all hover:border-purple-700 hover:bg-white hover:text-purple-700 disabled:bg-gray-300 disabled:hover:border-transparent disabled:hover:text-white"
                            >
                                Update
                            </button>

                            <button
                                type="button"
                                className="text-grey mr-5 rounded border border-transparent  py-1 px-4 text-xs font-medium transition-all  hover:bg-white hover:text-purple-900 disabled:bg-gray-300 disabled:hover:border-transparent disabled:hover:text-white"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
export default User;
