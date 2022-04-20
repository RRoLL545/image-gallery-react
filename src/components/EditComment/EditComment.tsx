import { ActionCreator } from '../../StateManagement/actionCreators';
import './EditComment.css'

/**
 * Returns EditComment element
 * @param props - arguments for component
 * @returns EditComment element
 */
const EditComment = (props: {id: number, comment: string}): JSX.Element => {
  const {id, comment} = props;
  return (
    <div className={`edit-comment edit-comment-${id}`}>
      <input type="text"
             placeholder='Please input your comment'
             defaultValue={comment}
             className={`edit-comment-input edit-comment-input-${id}`}
      />
      <div className="control">
        <button onClick={saveComment} data-item-id={id}>Save</button>
        <button onClick={closeEditor} data-item-id={id}>Close</button>
      </div>
    </div>
  )
}

export default EditComment;

/**
 * Save comment
 * @param e MouseEvent
 */
const saveComment = (e: React.MouseEvent<HTMLButtonElement>): void => {
  const clickedButton = e.target as HTMLButtonElement;
  const itemId: number = parseInt(clickedButton.dataset.itemId as unknown as string, 10);
  const inputValue: string = (document.querySelector(`.edit-comment-input-${itemId}`) as HTMLInputElement).value;
  ActionCreator.modifyComment(inputValue, itemId);
  const commentEditor = document.querySelector(`.edit-comment-${itemId}`);
  commentEditor?.classList.remove('edit-comment-visible');
}

/**
 * Close comment editor
 * @param e MouseEvent
 */
const closeEditor = (e: React.MouseEvent<HTMLButtonElement>): void => {
  const clickedButton = e.target as HTMLButtonElement;
  const itemId: number = parseInt(clickedButton.dataset.itemId as unknown as string, 10);
  const commentEditor = document.querySelector(`.edit-comment-${itemId}`);
  commentEditor?.classList.remove('edit-comment-visible');
}