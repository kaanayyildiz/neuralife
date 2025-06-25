import SignInView from "@/modules/auth/ui/views/sign-in-view";

const SignInPage = () => {


  return (
    <div className='bg-white text-[#0f0f0f] flex justify-center items-center'>
      <div className='w-full'>
        <SignInView />
      </div>
    </div>
  )
}

export default SignInPage;