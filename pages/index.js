import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const [name, setName] = useState();
  const [error, setError] = useState(false);

  return (
    <div className="text-primaryText bg-black bg-backgroundPattern h-full  ">
      <div className="items-start justify-between  flex">
        <Image src="/decors.svg" alt="image" width="190" height="60" />
        <div className="mt-2">
          <Image src="/balloons.svg" alt="image" width="140" height="170" />
        </div>
      </div>
      <div className="text-2xl font-bold w-44 -mt-24 ml-6 ">
        WISH YOUR FRIENDS AND FAMILY A HAPPY NEW YEAR
        <div className="text-6xl mt-5">2022</div>
      </div>
      <div className="mt-32 m-1">
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          className="text-primaryText placeholder:text-primaryText placeholder:text-center bg-black border-2
         border-primaryText outline-none w-full h-8"
          onChange={(e) => setName(e.target.value)}
        />
        {error ? name ? "" : <p>fill the name</p> : ""}
        <div className="text-primaryText   text-black bg-primaryText text-center mt-2 ">
          {name ? (
            <Link href={`/share/${name}`}>
              <button className="font-extrabold h-8">CREATE YOUR WISH</button>
            </Link>
          ) : (
            <button
              onClick={() => setError(true)}
              className="font-extrabold h-8"
            >
              CREATE YOUR WISH
            </button>
          )}
        </div>
        <div className="mt-10 pb-20  text-sm text-center  font-semibold ">
          CREATE AND SHARE YOUR LOVELY WISH TO ALL
        </div>
      </div>
    </div>
  );
}
