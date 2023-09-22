"use client";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const b = new URLSearchParams(window.location.search);
    const a = b.get("id");
    console.log(a);
  });
  return <div>page</div>;
};
export default Page;
