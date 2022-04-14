import { ImageCardData } from "./ImageCardData";


export interface GalleryState {
  galleryItems: ImageCardData[] | [],
  /**
   * Gallery items data loading state
   */
   itemsLoading: boolean,

   /**
    * Error status of loading gallery items data
    */
   errorStatus: boolean,
 
   /**
    * Error message
    */
   errorMessage: string
 
   /**
    * Procedure step
    */
  //  stateStep: StateStep
}