import Link from 'next/link';

interface ButtonProps {
    text: String;

}

export default function Button({text} : ButtonProps) {
    return (
        <Link href="/playlists">
            <div className="bg-green-500 hover:bg-green-600 rounded-sm p-3 text-white font-semibold font-md">
                {text}
            </div>
        </Link>
    )
}