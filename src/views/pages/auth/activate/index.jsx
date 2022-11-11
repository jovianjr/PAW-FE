import StatusResult from '@/views/components/status-result';

const ResetPasswordSuccess = () => {
  const error = true;

  if (!error)
    return (
      <StatusResult
        type="success"
        title="Email Verified!"
        button="Back to Login"
        href="/login"
      />
    );

  return (
    <StatusResult
      type="danger"
      title="Invalid Token"
      detail="Please try again"
      button="Back to Login"
      href="/login"
    />
  );
};

export default ResetPasswordSuccess;
