import React from 'react';
import MainLayout from '@/views/layouts/main-layout';
import { Link } from 'react-router-dom';

const ArtDetail = () => {
    return (
        <MainLayout className="lg:my-12 lg:px-40">
            <div className="flex flex-col-reverse lg:flex-col">
                <img
                    className="aspect-[16/9] w-full rounded"
                    src="/images/dummy.jpg"
                />
                <div className="flex items-center justify-between p-4 lg:mt-4 lg:p-0">
                    <div className="flex gap-2">
                        <img
                            class="aspect-square w-8 rounded-full object-cover lg:w-14"
                            src="https://picsum.photos/200"
                        />
                        <span className="flex flex-col">
                            <p className="text-xs font-bold lg:text-2xl lg:font-semibold">
                                Watercolor Paintings from Aqua
                            </p>
                            <Link
                                to="/johndoe"
                                className="cursor-pointer text-xs hover:underline lg:text-base"
                            >
                                John Doe
                            </Link>
                        </span>
                    </div>
                    <p className="hidden text-base lg:block">January 2022</p>
                </div>
            </div>
            <div className="px-6 py-8 lg:p-0">
                <div className="flex flex-col lg:hidden">
                    <p className="text-xs text-slate-500">January 2022</p>
                    <p className="text-base font-semibold">
                        Watercolor Paintings from Aqua
                    </p>
                </div>
                <p className="mt-4 text-justify text-base">
                    Housework could be everyone’s work, not just “women’s work”.
                    Why do women enable men to act oblivious to cleaning,
                    grocery shopping, pet feeding, etc? Somehow when men live
                    alone they figure out how to do all of those things all on
                    their own. My friend’s husband claimed he didn’t know that
                    sheets should be washed more than once a season. He said he
                    didn’t know one had to clean toilets. He assumed that since
                    you flush toilets they clean themselves. She tried to get
                    him to help but he did an awful job so she let him off the
                    hook. Wouldn’t it be better if she spent the time and energy
                    to get him to do it right instead of letting him claim he is
                    “just bad at it”. My sons were raised to clean toilets and
                    change their own sheets. Hopefully, in their future homes,
                    the housework will be equally divided.
                </p>
            </div>
        </MainLayout>
    );
};

export default ArtDetail;
