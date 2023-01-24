export const GifItem = ({ title, url }) => {
  return (
    <>
      <img className="grid-item" src={url} alt={title} />
    </>
  )
}
