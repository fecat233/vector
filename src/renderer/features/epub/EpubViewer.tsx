import EpubMenu from './EpubMenu'
import EpubContent from './EpubContent'

const EpubViewer = (props: any) => {

  return (
    <div>
      <EpubContent book={props.book}/>
      <EpubMenu book={props.book}/>
    </div>
  )
}

export default EpubViewer
