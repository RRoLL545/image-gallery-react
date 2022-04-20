import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ImageCardData } from '../../interfaces/ImageCardData';
import { StateStep } from '../../interfaces/ImageCardsActions';
import ImageCard from '../ImageCard/ImageCard';
import './ImageCardsList.css'

/**
 * Returns ImageCardsList element
 * @returns ImageCardsList element
 */
const ImageCardsList = (): JSX.Element => {
  const {galleryState} = useTypedSelector(state => state)
  const {getCardsData} = useActions();
  useEffect(() => {
    galleryState.stateStep === StateStep.GET_CARDS_DATA && getCardsData();
  })
  
  const data: ImageCardData[] | [] = galleryState.galleryItems;

  if(!data.length) {
    return (
      <div className='image-cards-list'>Изображений в коллекции нет. Нажмите кнопку "+" чтобы добавить</div>
    )
  }
  return (
    <div className='image-cards-list'>
      {data.map(card => {
        return (
          <ImageCard key={card.id} id={card.id} imageUrl={card.imageUrl} imageComment={card.imageComment} />
        )
      })}
    </div>
  )
}

export default ImageCardsList;