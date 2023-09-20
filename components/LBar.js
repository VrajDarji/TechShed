import Link from "next/link";

const links = [
  { link: "/shop all", t: "shop all" },
  { link: "/shop all?q=computers", t: "computers" },
  { link: "/shop all?q=tablets", t: "tablets" },
  { link: "/shop all?q=drones and cameras", t: "drones & cameras" },
  { link: "/shop all?q=speaker", t: "speaker" },
  { link: "/shop all?q=headphone", t: "headphone" },
  { link: "/shop all?q=mobile", t: "mobile" },
  { link: "/shop all?q=T.V. and home cinema", t: "T.V. & home cinema" },
  { link: "/shop all?q=wearable tech", t: "wearable tech" },
  { link: "/shop all?q=sale", t: "sale" },
];
const LBar = () => {
  return (
    <div className="flex flex-row px-10 py-2 bg-slate-100 gap-7">
      {links.map((e, index) => (
        <Link href={e.link} key={index} className="capitalize">
          {e.t}
        </Link>
      ))}
    </div>
  );
};
export default LBar;
