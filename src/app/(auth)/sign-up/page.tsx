import SignUpView from "@/modules/auth/ui/views/sign-up-view";

const SignUpPage = () => {
  return (
    <div className='bg-muted text-[#0f0f0f] flex justify-center items-center h-screen'>
      <div className='w-full max-w-md'>
        <SignUpView />
      </div>
    </div>
  )
}

export default SignUpPage;