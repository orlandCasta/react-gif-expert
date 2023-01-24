export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ddBo6qmWaa1JNDSS4uVPNxueNNEgvFTo&q=${category}&limit=50`
  const resp = await fetch(url)
  const fetchData = await resp.json()

  const gifs = fetchData.data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return {
    gifs,
    paginationData: fetchData.pagination
  }
}
