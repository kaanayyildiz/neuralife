import SignInView from "@/modules/auth/ui/views/sign-in-view";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    return redirect("/");
  }

  return (
    <div className="bg-muted text-[#0f0f0f] flex justify-center items-center">
      <div className="w-full">
        <SignInView />
      </div>
    </div>
  );
};

export default SignInPage;
