import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Header />
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
