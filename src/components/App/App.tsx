import useTypedSelector from "../../hooks/useTypedSelector"
import { StateStep } from "../../interfaces/ImageCardsActions"
import { store } from "../../StateManagement"
import { ActionCreator } from "../../StateManagement/actionCreators"
import AddButton from "../AddButton/AddButton"
import AddCardForm, { closeOverlay } from "../AddCardForm/AddCardForm"
import BrowseImage from "../BrowseImage/BrowseImage"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import ImageCardsList from "../ImageCardsList/ImageCardsList"
import './App.css'

/**
 * Returns App element
 * @returns App element
 */
const App = (): JSX.Element => {
  const {galleryState} = useTypedSelector(state => state)
  return (
    <>
      <div className="overlay-layer" onClick={removeOverlay}></div>
      <Header />
        <main className='main-content'>
          <h2 className='cards-list-heading'>Your images list</h2>
          <div className="content-wrapper">
            
            <ImageCardsList />
            <AddButton />
          </div>
          {galleryState.stateStep === StateStep.SHOW_IMAGE && <BrowseImage imageUrl={galleryState.browseImageUrl}/>}
          {galleryState.stateStep === StateStep.NEW_CARD_DATA_INPUT && <AddCardForm />}
        </main>
      <Footer />
    </>
  )
}

export default App;

/**
 * Removes overlay
 */
const removeOverlay = (): void => {
  const state: StateStep = store.getState().galleryState.stateStep;
  if (state === StateStep.SHOW_IMAGE) {
    closeOverlay()
    ActionCreator.manageCards();
  }
}