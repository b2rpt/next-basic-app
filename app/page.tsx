import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello Nest</h1>
      <Link href="/users">User</Link>
    </main>
  );
}
