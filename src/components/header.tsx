"use client"
import Link from 'next/link';

export default function Header() {
  return (
    <main className="bg-cover bg-center text-center text-[#6c0303] shadow-md p-10 md:p-40 pic" >
      <img src="/img/logo-final-1.png" alt="Logo" className="mx-auto" />
      <h1 className="text-3xl font-semibold">Seerat E Nabwi & Khatam E Nabuwat S.A.W</h1>
      <nav className="mt-4">
        <ul className="flex justify-center flex-wrap space-x-4">
        <li><Link href="/" className="text-[rgb(13,115,31)] font-bold text-lg hover:underline">Home</Link></li>
          <li><Link href="/seerat-nabvi" className="text-[rgb(13,115,31)] font-bold text-lg hover:underline">Seerat E Nabwi</Link></li>
          <li><Link href="/khatam-e-nabuwat" className="text-[rgb(13,115,31)] font-bold text-lg hover:underline">Khatam E Nabuwat</Link></li>
          <li><Link href="/gallery" className="text-[rgb(13,115,31)] font-bold text-lg hover:underline">Gallery</Link></li>
          <li><Link href="/book" className="text-[rgb(13,115,31)] font-bold text-lg hover:underline">Books</Link></li>
          <li><Link href="/contact" className="text-[rgb(13,115,31)] font-bold text-lg hover:underline">Contact Us</Link></li>
         
        </ul>
      </nav>
    </main>
  );
}
