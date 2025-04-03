import Button from "../components/Button";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <main className="bg-gray-700 flex grow flex-col items-center justify-center">
        <Link href="/playlists">
          <Button text="Go to PlayLists"/>
        </Link>
      </main>
    </div>
  );
}