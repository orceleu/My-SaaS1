import Link from "next/link";
export default function PageNotFound() {
  return (
    <>
      <div className="mx-auto max-w-md">
        <h3>la page nexiste pas </h3>
        <Link href="/">go to Home?</Link>
      </div>
    </>
  );
}
