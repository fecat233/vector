import { Component } from "react"

class EpubContent extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyChangePage);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyChangePage);
  }

  prevPage = () => {
    if(this.props.rendition) {
      this.props.rendition.prev();
    }
  }

  nextPage = () => {
    if(this.props.rendition) {
      this.props.rendition.next();
    }
  }

  onKeyChangePage = (e) => {
    if(e.keyCode === 37) {
      this.prevPage();
    } else if(e.keyCode === 39) {
      this.nextPage();
    }
  }

  render() {
    return (
      <div id="epubContent" className="float-right w-4/5 h-full">
        <div id="content" className="h-5/6 p-3 m-3 shadow">
        </div>
        <div id="changePage" className="text-center">
          <a onClick={this.prevPage} className="p-3 rounded-full mr-1 bg-teal-500 text-white">返回前一页</a>
          <a onClick={this.nextPage} className="p-3 rounded-full ml-1 bg-teal-500 text-white">前进下一页</a>
        </div>
      </div>
    )
  }
}

export default EpubContent
