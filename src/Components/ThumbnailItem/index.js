import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, isClickedSame} = props
  const {id, thumbnailUrl} = thumbnailDetails
  const compareWithImage = () => {
    isClickedSame(id)
  }
  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={compareWithImage}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
