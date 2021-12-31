import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
const Wish = () => {
  const router = useRouter();
  const { name } = router.query;

  const [enteredName, setEnteredName] = useState();
  const [error, setError] = useState(false);

  if (typeof window !== "undefined") {
    const origin = window.location.origin;
  }

  const convertToUppercase = name ? name.toUpperCase() : undefined;

  return (
    <>
      {name}
      <br />
      <label>Enter your name</label>
      <input type="text" onChange={(e) => setEnteredName(e.target.value)} />
      {error ? enteredName ? "" : <p>fill the name</p> : ""}
      {enteredName ? (
        <Link href={`/share/${enteredName}`}>GO</Link>
      ) : (
        <p onClick={() => setError(true)}>GO</p>
      )}
    </>
  );
};

export default Wish;
