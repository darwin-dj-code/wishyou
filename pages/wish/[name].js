import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
const Wish = () => {
  const router = useRouter();
  const { name } = router.query;

  let capsName;
  if (name) {
    capsName = name.toUpperCase();
  }

  const [enteredName, setEnteredName] = useState();
  const [error, setError] = useState(false);

  return (
    <>
      <div
        className="text-primaryText bg-black 
h-full text-center pt-20 
bg-backgroundSpeedEffect"
      >
        <div className="flex flex-col space-y-3">
          <div
            className="text-3xl font-extrabold 
text-thirdText"
          >
            {capsName}
          </div>
          <div className="text-xl font-semibold">
            WISHING YOU AND YOUR FAMILY
          </div>
          <div
            className="text-4xl 
font-semibold"
          >
            HAPPY NEW YEAR
          </div>
          <div
            className="text-9xl font-extrabold 
text-secondaryText "
          >
            2022
          </div>
        </div>
        <div
          className="bg-black border-2 
border-secondaryText 
text-thirdText h-20 w-64 ml-16 mt-8 
text-center pt-4 
text-sm font-semibold"
        >
          CHEERS TO HEALTH, HAPPINESS AND PROSPERITY
        </div>
        <div className="mt-24 m-1 ">
          <input
            type="text"
            placeholder="ENTER YOUR NAME"
            className="text-primaryText 
placeholder:text-primaryText 
placeholder:text-center bg-black 
border-2
    border-primaryText outline-none 
w-full h-8"
            onChange={(e) => setEnteredName(e.target.value)}
          />
          {error ? enteredName ? "" : <p>fill the name</p> : ""}
          <div
            className="text-primaryText   
text-black bg-primaryText text-center 
mt-2 "
          >
            {enteredName ? (
              <Link href={`/share/${enteredName}`}>
                <button
                  className="font-extrabold 
h-8"
                >
                  CREATE YOUR WISH
                </button>
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
        </div>
        <div className="pb-8"></div>
      </div>
    </>
  );
};

export default Wish;
