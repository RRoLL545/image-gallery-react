import { ActionCreator } from '../../StateManagement/actionCreators';
import './AddButton.css'

/**
 * Returns AddButton element
 * @returns AddButton element
 */
const AddButton = (): JSX.Element => {
  return (
    <button className="add-button" onClick={openNewCardForm}>+</button>
  )
}

export default AddButton;

/**
 * Open new card input data form
 */
const openNewCardForm = (): void => {
  const overlayLayer: Element | null = document.querySelector('.overlay-layer');
  overlayLayer?.classList.add('overlay');
  ActionCreator.inputNewCardData();
}