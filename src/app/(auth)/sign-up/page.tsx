import SignUpView from "@/modules/auth/ui/views/sign-up-view";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    return redirect("/");
  }
  return (
    <div className="bg-muted text-[#0f0f0f] flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <SignUpView />
      </div>
    </div>
  );
};

export default SignUpPage;
