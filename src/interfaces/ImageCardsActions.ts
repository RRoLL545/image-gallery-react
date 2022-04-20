import { ImageCardData } from "./ImageCardData"

/**
 * ImageCardsReducer action types
 */
export enum ImageCardsActionTypes {
  GET_CARDS_DATA = 'GET_CARDS_DATA',
  GET_CARDS_DATA_SUCCESS = 'GET_CARDS_DATA_SUCCESS',
  GET_CARDS_DATA_ERROR = 'GET_CARDS_DATA_ERROR',
  ADD_CARD_TO_GALLERY = 'ADD_CARD_TO_GALLERY',
  MODIFY_COMMENT = 'MODIFY_COMMENT',
  CHANGE_CARDS_ORDER = 'CHANGE_CARDS_ORDER',
  SHOW_IMAGE = 'SHOW_IMAGE',
  MANAGE_CARDS = 'MANAGE_CARDS',
  NEW_CARD_DATA_INPUT = 'NEW_CARD_DATA_INPUT'
}

/**
 * Values of State Steps Names
 */
 export enum StateStep {
  GET_CARDS_DATA = 'GET_CARDS_DATA',
  CARDS_MANAGE = 'CARDS_MANAGE',
  SHOW_IMAGE = 'SHOW_IMAGE',
  NEW_CARD_DATA_INPUT = 'NEW_CARD_DATA_INPUT'
}

/**
 * Get cards data action interface
 */
interface GetCardsData {
  type: ImageCardsActionTypes.GET_CARDS_DATA
}

/**
 * Get cards data success action interface
 */
 interface GetCardsDataSuccess {
  type: ImageCardsActionTypes.GET_CARDS_DATA_SUCCESS
  payload: ImageCardData[]
}
/**
 * Get cards data error action interface
 */
interface GetCardsDataError {
  type: ImageCardsActionTypes.GET_CARDS_DATA_ERROR,
  payload: string
}

/**
 * Add card to gallery action interface
 */
interface AddCardToGallery {
  type: ImageCardsActionTypes.ADD_CARD_TO_GALLERY,
  payload: ImageCardData
}

/**
 * Modify card comment action interface
 */
 interface ModifyComment {
  type: ImageCardsActionTypes.MODIFY_COMMENT,
  payload: {
    id: number,
    modifiedComment: string
  }
}

/**
 * Show image action interface
 */
 interface ShowImage {
  type: ImageCardsActionTypes.SHOW_IMAGE,
  payload: {
    imageUrl: string,
    stateStep: StateStep.SHOW_IMAGE
  }
}

/**
 * Manage cards action interface
 */
 interface ManageCards {
  type: ImageCardsActionTypes.MANAGE_CARDS
}

/**
 * New card data input action interface
 */
 interface NewCardDataInput {
  type: ImageCardsActionTypes.NEW_CARD_DATA_INPUT
}


/**
 * ImageCardsReducer actions
 */
export type ImageCardsAction =  GetCardsData |
                                GetCardsDataSuccess |
                                GetCardsDataError |
                                AddCardToGallery |
                                ModifyComment |
                                ShowImage |
                                ManageCards |
                                NewCardDataInput;