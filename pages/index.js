import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState();
  const [error, setError] = useState(false);

  return (
    <div>
      <label>Enter your name</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {error ? name ? "" : <p>fill the name</p> : ""}

      {name ? (
        <Link href={`/share/${name}`}>GO</Link>
      ) : (
        <p onClick={() => setError(true)}>GO</p>
      )}
    </div>
  );
}
