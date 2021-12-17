import { Book } from 'epubjs';
import EpubViewer from '../epub/EpubViewer';
import PdfViewer from '../pdf/PdfViewer';

const BookViewer = (props: any) => {
  // console.log('render BookViewer');

  return (
    <>
      {
        props.book instanceof Book ? <EpubViewer book={props.book}/>:<PdfViewer book={props.book}/>
      }
    </>
  )
}

export default BookViewer
