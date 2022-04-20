import { localStorageKey } from "../../config/config";
import { GalleryState } from "../../interfaces/GalleryState"
import { ImageCardData } from "../../interfaces/ImageCardData";
import { ImageCardsAction, ImageCardsActionTypes, StateStep } from "../../interfaces/ImageCardsActions"

const initialState: GalleryState = {
  browseImageUrl: '',
  errorMessage: '',
  errorStatus: false,
  galleryItems: [],
  itemsLoading: false,
  stateStep: StateStep.GET_CARDS_DATA
}

export const galleryReducer = (state: GalleryState = initialState, action: ImageCardsAction): GalleryState => {
  const itemsList = state.galleryItems;
  switch (action.type) {
    case ImageCardsActionTypes.GET_CARDS_DATA:
      return {
        browseImageUrl: '',
        errorMessage: '',
        errorStatus: false,
        galleryItems: [],
        itemsLoading: true,
        stateStep: StateStep.CARDS_MANAGE
      }
      case ImageCardsActionTypes.GET_CARDS_DATA_SUCCESS:
        return {
          browseImageUrl: '',
          errorMessage: '',
          errorStatus: false,
          galleryItems: action.payload,
          itemsLoading: false,
          stateStep: StateStep.CARDS_MANAGE
        }
      case ImageCardsActionTypes.GET_CARDS_DATA_ERROR:
        return {
          browseImageUrl: '',
          errorMessage: action.payload,
          errorStatus: true,
          galleryItems: [],
          itemsLoading: false,
          stateStep: StateStep.CARDS_MANAGE
        }
      case ImageCardsActionTypes.NEW_CARD_DATA_INPUT:
        return {
          browseImageUrl: '',
          errorMessage: '',
          errorStatus: false,
          galleryItems: [...itemsList],
          itemsLoading: false,
          stateStep: StateStep.NEW_CARD_DATA_INPUT
        }
      case ImageCardsActionTypes.ADD_CARD_TO_GALLERY:
        const newCard: ImageCardData = {
          id: action.payload.id,
          imageComment: action.payload.imageComment,
          imageUrl: action.payload.imageUrl
        }
        saveToLocalStorage([...itemsList, newCard]);
        return {
          browseImageUrl: '',
          errorMessage: '',
          errorStatus: false,
          galleryItems: [...itemsList, newCard],
          itemsLoading: false,
          stateStep: StateStep.CARDS_MANAGE
        }
      case ImageCardsActionTypes.MODIFY_COMMENT:
        itemsList.forEach(item => {
          if(item.id === action.payload.id) item.imageComment = action.payload.modifiedComment
        })
        saveToLocalStorage([...itemsList]);
        return {
          browseImageUrl: '',
          errorMessage: '',
          errorStatus: false,
          galleryItems: [...itemsList],
          itemsLoading: false,
          stateStep: StateStep.CARDS_MANAGE
        }
      case ImageCardsActionTypes.SHOW_IMAGE:
        return {
          browseImageUrl: action.payload.imageUrl,
          errorMessage: '',
          errorStatus: false,
          galleryItems: itemsList,
          itemsLoading: false,
          stateStep: action.payload.stateStep
        }
      case ImageCardsActionTypes.MANAGE_CARDS:
        return {
          browseImageUrl: '',
          errorMessage: '',
          errorStatus: false,
          galleryItems: itemsList,
          itemsLoading: false,
          stateStep: StateStep.CARDS_MANAGE
        }
    default:
      return state;
  }
}

/**
 * 
 * @param data Save data to local storage
 */
const saveToLocalStorage = (data: ImageCardData[]): void => {
  localStorage.setItem(localStorageKey, JSON.stringify(data))
}