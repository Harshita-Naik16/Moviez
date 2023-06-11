
export default async function fetchApi(urlParam) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${urlParam}?api_key=${process.env.API_KEY}`)

    return res.json();
}


// export default async function fetchApi(urlParam, setState) {
//     fetch(`https://api.themoviedb.org/3/movie/${urlParam}?api_key=${process.env.API_KEY}`)
//     .then(response => response.json())
//     .then(data => setState(data.results))
//     .catch(err => console.log(err.message))
// }