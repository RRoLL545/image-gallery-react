import './BrowseImage.css';

/**
 * Returns BrowseImage element
 * @param props - arguments for component
 * @returns BrowseImage element
 */
const BrowseImage = (props: {imageUrl: string}): JSX.Element => {
  const {imageUrl} = props;
  return (
    // <div className="image-browse" style={{backgroundImage: `url(${imageUrl})`}}></div>
    <img className="image-browse" src={imageUrl} alt="big-image" />
  )
}

export default BrowseImage;