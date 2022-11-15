import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import LoadingScreen from '@/views/components/loading';
import StatusResult from '@/views/components/status-result';
import RenderIf from '@/views/components/render-if';

import MainLayout from '@/views/layouts/main-layout';

import { activate } from '@/utils/services/auth';

const ResetPasswordSuccess = () => {
    let [searchParams] = useSearchParams();

    const { isLoading, isFetching, isIdle, isError, isSuccess, error } =
        useQuery(
            ['reset-password-check'],
            () => activate(searchParams.get('token')),
            {
                refetchOnWindowFocus: false,
                refetchInterval: false,
                onSuccess: res => {},
                onError: err => {},
                retry: (failureCount, error) => {
                    if (error?.response?.status === 498) return false;
                    else if (failureCount === 2) return false;
                    else return true;
                }
            }
        );

    return (
        <>
            <LoadingScreen when={isLoading || isFetching || isIdle} />
            <RenderIf when={isSuccess}>
                <MainLayout screen>
                    <StatusResult
                        type="success"
                        title="Email Verified!"
                        button="Back to Login"
                        href="/login"
                        className="!h-full"
                    />
                </MainLayout>
            </RenderIf>
            <RenderIf when={isError}>
                <MainLayout screen>
                    <StatusResult
                        type="danger"
                        title={
                            error?.response?.status === 498
                                ? 'Invalid / Expired Token'
                                : error?.response?.data?.errors ??
                                  'An unexpected error occurred'
                        }
                        detail={error?.response?.data?.details}
                        button="Back to Login"
                        href="/login"
                        className="!h-full"
                    />
                </MainLayout>
            </RenderIf>
        </>
    );
};

export default ResetPasswordSuccess;
