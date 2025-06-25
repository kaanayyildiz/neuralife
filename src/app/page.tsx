"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();
  
  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (!session) {
      router.push("/sign-in");
    }
  }, [session, router]);

  if (session) {
    return (
      <div>
        <h1>User is logged in {session.user.name}</h1>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
