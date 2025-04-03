import React from 'react';
import Link from "next/link";

import {Playlist} from "@/types/playlist";
import { playlists } from "@/data/example_data";

function PlaylistIndex() {
    return (
        <div className="bg-gray-700 flex grow flex-col items-center justify-center">
            <h1 className="text-4xl font-bold m-5 text-center text-green-500">Playlists</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-20">
                {playlists.map((playlist : Playlist) => (
                    <div 
                        key={playlist.id} 
                        className="bg-slate-800 text-white rounded-lg p-4 shadow-lg flex flex-col items-center justify-center text-center h-[200px] transition-transform transform hover:scale-103"
                    >
                        <h2 className="text-xl font-semibold">{playlist.title}</h2>
                        <p className="text-sm mb-2">{playlist.description}</p>
                        <p className="text-xs">{playlist.songs.length} songs</p>
                        <Link 
                            href={`/playlists/${playlist.id}`} 
                            className="text-green-500 hover:underline text-sm mt-2"
                        >
                            View Playlist
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlaylistIndex;