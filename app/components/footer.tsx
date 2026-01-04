import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/"><span>Home</span></Link>
        <Link href="/doctors"><span>Doctors</span></Link>
        <Link href="/ratna-medicals"><span>Ratna Medicals</span></Link>
        <Link href="/terms-and-conditions"><span>Terms and Conditions</span></Link>
        <Link href="/privacy-policy"><span>Privacy Policy</span></Link>
        <Link href="/contact"><span>Contact</span></Link>

    </footer>
  )
}
