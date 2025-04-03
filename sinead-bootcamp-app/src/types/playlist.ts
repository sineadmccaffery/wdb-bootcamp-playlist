interface Song {
    id: string;
    title: string;
    artist: string;
    duration: number; // in seconds
  }
  
interface Playlist {
    id: string;
    name: string;
    songs: Song[];
  }