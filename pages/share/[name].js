import { useRouter } from "next/router";
import Link from "next/link";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { useEffect, useState } from "react";

const Share = () => {
  const router = useRouter();
  const { name } = router.query;

  const [host, setHost] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHost(window.location.origin);
    }
  }, []);

  return (
    <>
      <div>{name}</div>
      <WhatsappShareButton
        url={`surprise for you
       ${host}/wish/${name}
      `}
      >
        <WhatsappIcon />
      </WhatsappShareButton>

      <Link href={`/wish/${name}`}>hi</Link>
    </>
  );
};

export default Share;
