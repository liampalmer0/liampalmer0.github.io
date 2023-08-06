import Link from "next/link";
import "../styles/css/header.css";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="main-nav">
        <div className="left">
          <span className="nav-link">
            <Link href="/">Liam Palmer</Link>
          </span>
        </div>
        <div className="right">
          <span className="nav-link">
            <Link href="/#projects">Projects</Link>
            <Link href="https://github.com/liampalmer0">GitHub</Link>
          </span>
        </div>
      </nav>
    </header>
  );
}
