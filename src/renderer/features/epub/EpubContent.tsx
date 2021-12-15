
const EpubContent = (props: any) => {
  let rendition: any = null
  if(props.book) {
    rendition = props.book.renderTo("content", {
      width: "100%",
      height: "100%"
    })
    rendition.display()
  }

  return (
    <div>
      <div id="content" className="m-11 h-screen">
      </div>
      <a onClick={prevPage}>返回前一页</a>
      <a onClick={nextPage}>前进下一页</a>
    </div>
  )

  function prevPage() {
    if(rendition) {
      rendition.prev()
    }
  }

  function nextPage() {
    if(rendition) {
      rendition.next()
    }
  }
}

export default EpubContent
