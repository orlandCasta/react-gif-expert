import { useState, useEffect } from 'react'
import { getGifs } from './../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [pagination, setPagination] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [foundFirstTime, setFoundFirstTime] = useState(true)

  const getImages = async () => {
    const { gifs, paginationData } = await getGifs(category)
    if (!paginationData?.count) {
      const { gifs, paginationData } = await getGifs('pixel art')
      setImages(gifs)
      setPagination(paginationData)
      setFoundFirstTime(false)
      setIsLoading(false)
    } else {
      setImages(gifs)
      setPagination(paginationData)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    images,
    pagination,
    foundFirstTime,
    isLoading
  }
}
