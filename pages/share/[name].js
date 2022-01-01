import { useRouter } from "next/router";
import Image from "next/image";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { useEffect, useState } from "react";

const Share = () => {
  const router = useRouter();
  const { name } = router.query;
  let capsName;
  if (name) {
    capsName = name.toUpperCase();
  }

  const [host, setHost] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHost(window.location.origin);
    }
  }, []);

  return (
    <>
      <div
        className="text-primaryText bg-black 
 h-screen text-center pt-28 bg-backgroundSpeedEffect"
      >
        <div className="flex flex-col space-y-3">
          <div className="text-3xl font-extrabold text-thirdText">
            {capsName}
          </div>
          <div className="text-xl font-semibold">
            WISHING YOU AND YOUR FAMILY
          </div>
          <div className="text-4xl font-semibold">HAPPY NEW YEAR</div>
          <div className="text-9xl font-extrabold text-secondaryText">2022</div>
        </div>

        <div className="bg-black border-2 border-secondaryText text-thirdText h-20 w-64 ml-16 mt-8 text-center pt-4 text-sm font-semibold">
          CHEERS TO HEALTH, HAPPINESS AND PROSPERITY
        </div>

        <div className="flex flex-col justify-center items-center mt-6">
          <div className="pb-1">SHARE :</div>
          <WhatsappShareButton
            url={`*${name}*
send you a surprise message 
👇*open*👇 
${host}/wish/${name}
     `}
          >
            <Image
              src="/whatsappIcon.svg"
              width="50%"
              height="50%"
              alt="whatsApp"
            />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default Share;
