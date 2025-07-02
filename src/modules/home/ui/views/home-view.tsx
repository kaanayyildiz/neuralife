"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/loader";

const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Spinner size="large" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Logged in as {session?.user?.email}</p>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/sign-in");
              },
            },
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
};

export default HomeView;
