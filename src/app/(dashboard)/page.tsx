"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const { data: session } = authClient.useSession();


  if (session) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">Logged in as {session.user.name}!</h1>
        <Button onClick={() => authClient.signOut()} className="cursor-pointer w-full">
          Sign Out
        </Button>
      </div>
    );
  } else {
    return router.push("/sign-in");
  }
}
