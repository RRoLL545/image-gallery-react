import { store } from '../../StateManagement';
import { ActionCreator } from '../../StateManagement/actionCreators';
import './AddCardForm.css'

/**
 * Returns AddCardForm element
 * @returns AddCardForm element
 */
const AddCardForm = (): JSX.Element => {
  return (
    <div className="add-card-form">
      <h3 className='add-card-form-heading'>New card data</h3>
      <label>
        Image url: <input type="text" placeholder='type image url' className='input-url'/>
      </label>
      <label>
        Image comment: <input type="text" placeholder='type image comment' className='input-comment' />
      </label>
      <div className="add-card-form-control">
        <button onClick={addCard}>Add</button>
        <button onClick={closeForm}>Close</button>
      </div>
    </div>
  )
}

export default AddCardForm;

/**
 * Close overlay layer
 */
export const closeOverlay = (): void => {
  const overlayLayer: Element | null = document.querySelector('.overlay-layer');
  overlayLayer?.classList.remove('overlay');
}

/**
 * get next id value for cards
 * @returns id value
 */
const getNextId = (): number => {
  const itemsId = store.getState().galleryState.galleryItems.map(item => item.id);
  return itemsId.length ? Math.max(...itemsId) + 1 : 1;
}

/**
 * add card to gallery
 */
const addCard = () => {
  const url = (document.querySelector('.input-url') as HTMLInputElement).value;
  const comment = (document.querySelector('.input-comment') as HTMLInputElement).value;
  const id = getNextId();
  ActionCreator.addNewCard(id, url, comment);
  closeOverlay();
}

/**
 * Close input data card form
 */
const closeForm = () => {
  closeOverlay()
  ActionCreator.manageCards();
}
