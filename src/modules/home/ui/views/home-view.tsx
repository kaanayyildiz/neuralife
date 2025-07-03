"use client"

import { trpc } from "@/trpc/client";

const HomeView = () => {
  const { data } = trpc.hello.useQuery({ text: "Kaan" });

  return <div>{data?.greeting}</div>;
};

export default HomeView;