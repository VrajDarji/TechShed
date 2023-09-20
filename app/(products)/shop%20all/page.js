"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [q, setQ] = useState("");
  useEffect(() => {
    const a = new URLSearchParams(window.location.search);
    const b = a.get("q");
    setQ(b);
  });

  return <div>{q}</div>;
};
export default Page;
