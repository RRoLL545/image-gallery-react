import { GalleryState } from "../../interfaces/GalleryState"
import { ImageCardsAction, ImageCardsActionTypes } from "../../interfaces/ImageCardsActions"

const initialState: GalleryState = {
  errorMessage: '',
  errorStatus: false,
  galleryItems: [],
  itemsLoading: false
}

export const galleryReducer = (state: GalleryState = initialState, action: ImageCardsAction): GalleryState => {
  switch (action.type) {
    case ImageCardsActionTypes.GET_CARDS_DATA:
      return {
        errorMessage: '',
        errorStatus: false,
        galleryItems: [],
        itemsLoading: true
      }
      case ImageCardsActionTypes.GET_CARDS_DATA_SUCCESS:
        return {
          errorMessage: '',
          errorStatus: false,
          galleryItems: action.payload,
          itemsLoading: false
        }
      case ImageCardsActionTypes.GET_CARDS_DATA_ERROR:
        return {
          errorMessage: action.payload,
          errorStatus: true,
          galleryItems: [],
          itemsLoading: false
        }
      case ImageCardsActionTypes.ADD_CARD_TO_GALLERY:
        return {
          errorMessage: '',
          errorStatus: false,
          galleryItems: [...state.galleryItems, action.payload],
          itemsLoading: false
        }
    default:
      return state;
  }
}