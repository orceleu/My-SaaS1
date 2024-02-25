import Link from "next/link";
export default function PageNotFound() {
  return (
    <div className="mx-auto max-w-md">
      <div>
        <h3>la page n'existe pas </h3>
        <Link href="/">go to Home?</Link>
      </div>
      ;
    </div>
  );
}
