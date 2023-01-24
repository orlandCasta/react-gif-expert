import { useEffect } from 'react'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import './../styles/GifGrid.css'

export const GifGrid = ({ category }) => {
  const { images, pagination, foundFirstTime, isLoading } =
    useFetchGifs(category)

  return (
    <>
      {isLoading && <h2>Cargando...</h2>}
      <div className="gifgrid-head">
        <span className="gifgrid-head-category">
          {!foundFirstTime ? 'pixel art' : category}
        </span>
        <span className="gifgrid-head-count">
          {pagination.total_count} GIFs
        </span>
      </div>

      <div className="grid-container">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}
