
export default function Header() {
    return (
        <div className="flex justify-between bg-slate-800 text-green-500 p-5 font-bold">
            <p className="text-xl">PlayList Creator</p>
            <div className="flex justify-end gap-4 text-lg">
                <p>Home</p>
                <p>Playlists</p>
            </div>
        </div>
    )
}