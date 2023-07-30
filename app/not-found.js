import Link from "next/link";
import "./styles/css/notFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Error 404!</h2>
      <span>There's nothing here</span>
      <br></br>
      <span>
        <Link href="/">Go home</Link>
      </span>
    </div>
  );
}

export const metadata = {
  title: "Liam Palmer - 404 Error",
};
