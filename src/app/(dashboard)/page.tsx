"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [hasCheckedSession, setHasCheckedSession] = useState(false);

  const { data: session, isPending: sessionLoading } = authClient.useSession();

  useEffect(() => {
    // Add a small delay to ensure session is properly loaded
    const timer = setTimeout(() => {
      if (!sessionLoading) {
        setHasCheckedSession(true);
        if (!session) {
          router.push("/sign-in");
        }
      }
    }, 100); // 100ms delay to ensure session is ready

    return () => clearTimeout(timer);
  }, [session, sessionLoading, router]);

  // Show loading state while session is being fetched or during initial check
  if (sessionLoading || !hasCheckedSession) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Only render content if we have a session and are not loading
  if (session) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">Logged in as {session.user.name}!</h1>
        <Button onClick={() => authClient.signOut()} className="cursor-pointer w-full">
          Sign Out
        </Button>
      </div>
    );
  }

  // This should not be reached, but just in case
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-2 text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
