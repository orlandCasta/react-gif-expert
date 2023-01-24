import { useState, useEffect } from 'react'
import { AddCategory, GifGrid } from './components'
import './styles/GifExpertApp.css'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  const onAddCategory = (value) => {
    if (categories.includes(value)) return
    setCategories([value])
  }

  const getRandomGifs = async () => {
    const url = 'https://catfact.ninja/fact'
    const resp = await fetch(url)
    const fetchData = await resp.json()
    const wordsOfTheText = fetchData.fact.split(' ')
    const randomText = `${wordsOfTheText[0]} ${wordsOfTheText[1]}`
    setCategories(randomText)
  }

  useEffect(() => {
    getRandomGifs()
  }, [])

  return (
    <>
      <div className="container">
        <div className="head-component">
          <div className="head-title">
            <span>GIPHY</span>
          </div>
          <div>
            <ul>
              <li>Chess</li>
              <li>Games</li>
              <li>Foot</li>
              <li>Meme</li>
              <li>Fotball</li>
              <li>Pixelart</li>
              <li>Love</li>
              <li>Artist</li>
              <li>Retro</li>
            </ul>
          </div>
        </div>
        <div className="search-component">
          <AddCategory onAddCategory={onAddCategory} />
        </div>
        <div className="body-component">
          {categories.length >= 1 && (
            <GifGrid key={categories} category={categories} />
          )}
        </div>
      </div>
    </>
  )
}
