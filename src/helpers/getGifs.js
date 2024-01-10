export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KX2xx5itrOaB2tq771sNDfBpwybWywLr&q=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();

    // mirar todo esto haciendo un:
    // console.log( data )
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs

}