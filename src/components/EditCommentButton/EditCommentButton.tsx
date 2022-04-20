import './EditCommentButton.css';

/**
 * Returns EditCommentButton element
 * @param props - arguments for component
 * @returns EditCommentButton element
 */
const EditCommentButton = (props: {id: number}): JSX.Element => {
  const {id} = props;
  return (
    <button className='edit-comment-button'
            onClick={openCommentEditor}
            data-item-id={id}
    ></button>
  )
}

export default EditCommentButton;

/**
 * Open comment editor
 * @param e mouse click event
 */
const openCommentEditor = (e: React.MouseEvent<HTMLButtonElement>): void => {
  const clickedButton = e.target as HTMLButtonElement;
  const itemId: number = parseInt(clickedButton.dataset.itemId as unknown as string, 10);
  const commentEditor = document.querySelector(`.edit-comment-${itemId}`);
  commentEditor?.classList.add('edit-comment-visible');
}
