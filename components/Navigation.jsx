import Link from 'next/link';

function Navigation() {
  return (
    <ul className="flex gap-4 px-1 py-3">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
    </ul>
  );
}

export default Navigation;
