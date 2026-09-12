import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Matthew Walter home">
          <span className="brand-mark">MW</span>
          <span className="brand-name">Matthew Walter</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
