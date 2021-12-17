import EpubMenu from './EpubMenu';
import EpubContent from './EpubContent';

const EpubViewer = (props: any) => {
  // console.log('render EpubViewer');
  //const [rendition, setRendition] = useState({})
  let rendition = null;
  if(props.book) {
    if(document.getElementById('content')) {
      document.getElementById('content').innerHTML = "";
    }
    rendition = props.book.renderTo("content", {
      width: '100%',
      height: '100%'
    })
    rendition.display();
  }
  return (
    <div id="epubView" className="h-full">
      <EpubMenu rendition={rendition} book={props.book}/>
      <EpubContent rendition={rendition}/>
    </div>
  )
}

export default EpubViewer
