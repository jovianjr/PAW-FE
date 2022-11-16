import { Cog6ToothIcon, BanknotesIcon } from '@heroicons/react/24/solid';
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
                <div className="h-screen w-1/4 rounded bg-white p-4">
                    <div className="padding-[24px] mb-10 flex h-auto  w-auto flex-col items-center gap-[4px] bg-white ">
                        <img
                            src="https://picsum.photos/200/300"
                            className="aspect-square w-40 rounded-full"
                        />
                        <h1 className="text-center text-xl font-semibold not-italic leading-7">
                            John Doe{' '}
                        </h1>

                        <h2 className="text-center text-sm text-sm font-normal not-italic leading-5">
                            Martial Artist
                        </h2>
                    </div>
                    <div className="padding-[16px] flex h-[237px]  w-full flex-col items-start gap-[24px]">
                        <h3 className="w-full py-2 px-3 text-start text-xs font-bold not-italic leading-5 transition-all  hover:bg-purple-50 hover:text-purple-700 disabled:bg-gray-300 disabled:hover:border-transparent disabled:hover:text-white  ">
                            General settings
                        </h3>

                        {/* diganti kayak atas ini nanti */}
                        <div className="padding-[16px] flex h-[36px]  w-full flex-row items-center gap-[10px] bg-white ">
                            <h4 className="w-full py-2 px-3 text-start text-xs font-bold not-italic leading-5 transition-all  hover:bg-purple-50 hover:text-purple-700 disabled:bg-gray-300 disabled:hover:border-transparent disabled:hover:text-white ">
                                {' '}
                                Password
                            </h4>
                        </div>
                        <div className="padding-[10px] flex h-[35px] w-full flex-row items-center gap-[10px] bg-white hover:bg-purple-50 ">
                            <h5 className="w-full py-2 px-3 text-start text-xs font-bold not-italic leading-5 transition-all  hover:bg-purple-50 hover:text-purple-700 disabled:bg-gray-300 disabled:hover:border-transparent disabled:hover:text-white">
                                {' '}
                                Help
                            </h5>
                        </div>

                        <div className="padding-[10px] h-[35px] w-full  flex-row items-center gap-[10px] bg-white ">
                            <h5 className="w-full py-2 px-3 text-start text-xs font-bold not-italic text-red-500">
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
                            Password
                        </h1>

                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-3">
                                <h5 className="px-3 text-start text-xs font-bold not-italic">
                                    {' '}
                                    Current Password
                                </h5>
                            </div>
                            <div className="col-span-9">
                                <input
                                    control={control}
                                    name="current password"
                                    className="w-2/3 !bg-slate-200"
                                    inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-base font-medium text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none "
                                    rules={{ required: true }}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-3">
                                <h5 className="px-3 text-start text-xs font-bold not-italic">
                                    {' '}
                                    New Password
                                </h5>
                            </div>
                            <div className="col-span-9">
                                <input
                                    control={control}
                                    name="New password"
                                    className="w-2/3 !bg-slate-200"
                                    inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-sm font-medium text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none "
                                    rules={{ required: true }}
                                />
                            </div>
                        </div>

                        <div className="grid-row-1 grid grid-cols-12 items-center">
                            <div className="col-span-3 ">
                                <h5 className="px-3 text-xs font-bold not-italic">
                                    {' '}
                                    Confirm New Password
                                </h5>
                            </div>

                            <div className=" col-span-9">
                                <input
                                    control={control}
                                    name="Confirm new password"
                                    className="w-2/3 !bg-slate-200"
                                    inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-base font-medium text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none "
                                    rules={{ required: true }}
                                />
                            </div>
                        </div>

                        <div className="mt-60 flex w-full items-center">
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