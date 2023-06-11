export default async function getVideo(id) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`)

    return res.json();
}