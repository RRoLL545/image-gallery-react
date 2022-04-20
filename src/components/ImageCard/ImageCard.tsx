import React from 'react';
import { ImageCardData } from '../../interfaces/ImageCardData';
import { store } from '../../StateManagement';
import { ActionCreator } from '../../StateManagement/actionCreators';
import EditComment from '../EditComment/EditComment';
import EditCommentButton from '../EditCommentButton/EditCommentButton';
import './ImageCard.css';

/**
 * Returns ImageCard element
 * @param props - arguments for component
 * @returns ImageCard element
 */
const ImageCard = (props: ImageCardData): JSX.Element => {
  const {id, imageComment, imageUrl} = props;
  return (
    <div className="card-unit">
      <div  className={`card-unit__image card-unit__image_${id}`} 
            data-item-id={id} 
            style={{backgroundImage: `url(${imageUrl})`}} 
            onClick={showImage}
      ></div>
      <div className='edit-button-wrapper'>
        <EditCommentButton id={id} />
      </div>
      <div className='card-unit__comment'>{imageComment}</div>
      {<EditComment id={id} comment={imageComment}/>}
    </div>
  )
}

export default ImageCard;

/**
 * Shows big image of the icon
 * @param e MouseEvent
 */
const showImage = (e: React.MouseEvent<HTMLDivElement>): void => {
  const overlayLayer: Element | null = document.querySelector('.overlay-layer');
  overlayLayer?.classList.add('overlay');

  const clickedImage = e.target as HTMLButtonElement;
  const itemId: number = parseInt(clickedImage.dataset.itemId as unknown as string, 10);
  const imageUrl = (store.getState().galleryState.galleryItems.filter(item => item.id === itemId))[0].imageUrl;
  ActionCreator.showImage(imageUrl);
}