import {Playlist} from "@/types/playlist";
import {Song} from "@/types/playlist";
import {playlists} from "@/data/example_data";
import {useRouter} from 'next/router';

export default function PlaylistDetails() {
    const router = useRouter();
    const {id} = router.query;

    const playlist = playlists.find((p) => p.id == id);

    if (!playlist) {
        return <h1 className = "text-white text-center mt-10">Playlist not found</h1>
    }
    return (
        <div className="bg-gray-700 flex grow flex-col items-center justify-center">
         <h1 className="text-2xl font-bold m-10 text-center text-white">{playlist.title}</h1>
        <ul>
        {playlist.songs.map((song: Song) => (
            <li key = {song.id} className = "text-white m-5">
                {song.title} by {song.artist} - {song.duration} seconds
            </li>
        ))}
    </ul>

        </div>

    )

}
