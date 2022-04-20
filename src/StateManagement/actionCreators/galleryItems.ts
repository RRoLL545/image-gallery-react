import { Dispatch } from "react";
import { store } from ".."
import { localStorageKey } from "../../config/config";
import { ImageCardsAction, ImageCardsActionTypes, StateStep } from "../../interfaces/ImageCardsActions"

/**
 * Dispatch get cards data action
 * @returns 
 */
export const getCardsData = () => {
  return (dispatch: Dispatch<ImageCardsAction>) => {
    try {
      const storageData: string | null = localStorage.getItem(localStorageKey);
      dispatch({
        type: ImageCardsActionTypes.GET_CARDS_DATA_SUCCESS,
        payload: storageData ? JSON.parse(storageData) : []
      })
    } catch(error) {
      dispatch({
        type: ImageCardsActionTypes.GET_CARDS_DATA_ERROR,
        payload: 'Error to load cards. Please try later.'
      })
    }
  }
}

/**
 * Dispatch show image action
 * @param url url of image
 */
export const showImage = (url: string): void => {
  store.dispatch({
    type: ImageCardsActionTypes.SHOW_IMAGE,
    payload: {
      imageUrl: url,
      stateStep: StateStep.SHOW_IMAGE
    }
  })
}

/**
 * Dispatch manage cards action
 */
 export const manageCards = (): void => {
  store.dispatch({
    type: ImageCardsActionTypes.MANAGE_CARDS
  })
}

/**
 * Dispatch modify comment action
 */
 export const modifyComment = (commentValue: string, commentId: number): void => {
  store.dispatch({
    type: ImageCardsActionTypes.MODIFY_COMMENT,
    payload: {
      id: commentId,
      modifiedComment: commentValue
    }
  })
}

/**
 * Dispatch input new card data action
 */
 export const inputNewCardData = (): void => {
  store.dispatch({
    type: ImageCardsActionTypes.NEW_CARD_DATA_INPUT
  })
}

/**
 * Dispatch add new card action
 */
 export const addNewCard = (id: number, url: string, comment: string): void => {
  store.dispatch({
    type: ImageCardsActionTypes.ADD_CARD_TO_GALLERY,
    payload: {
      id: id,
      imageComment: comment,
      imageUrl: url
    }
  })
}