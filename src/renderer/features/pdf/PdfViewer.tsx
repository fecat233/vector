import PdfContent from './PdfContent';

const PdfViewer = (props: any) => {
  // console.log('render PdfViewer');

  return (
    <>
      <PdfContent book={props.book}/>
    </>
  )
}

export default PdfViewer
