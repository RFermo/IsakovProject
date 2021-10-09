import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (url, typeOfCall) => {

    const [albums, setAlbums] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState("");
    const [tracks, setTracks] = useState([]);

    useEffect(() => {

        // Functions to fetch music data

        const getAlbums = (token) => {
            axios(url, {
                method: 'GET',
                headers: {'Authorization' : 'Bearer ' + token}
            })
            .then(albumResponse => {
                setIsPending(false);

                if (typeOfCall === "allAlbums") {
                    albumResponse.data.items.splice(1, 1); // Deleting album at index 1 since it is duplicated.
                }

                else if (typeOfCall === "one") {
                    const albumInfo = {
                        albumName: albumResponse.data.name,
                        releaseDate: albumResponse.data.release_date,
                        totalTracks: albumResponse.data.total_tracks,
                        label: albumResponse.data.label,
                        img: albumResponse.data.images[0].url
                    };

                    setTracks(albumResponse.data.tracks.items);
                    albumResponse.data = albumInfo;
                }

                setAlbums(albumResponse.data);
                // console.log(albums);
            })
            .catch(err => {
                if (err.response || err.request) {
                    setError("Albums could not be fetched! Please try again later.");
                    setIsPending(false);
                }
            })
        };

        // API fetching

        axios("https://accounts.spotify.com/api/token", {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + Buffer.from(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64')
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
        .then(tokenResponse => {
            const token = tokenResponse.data.access_token;
            getAlbums(token);
        })
        .catch(err => {
            if (err.response || err.request) {
                setError("Albums could not be fetched! Please try again later.");
                setIsPending(false);
            }
        })

    }, [url, typeOfCall]);

    return {albums, isPending, error, tracks};
};
 
export default useFetch;