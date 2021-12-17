import { Component } from "react";

class PdfContent extends Component {
  numPage = 1
  numPages = 0
  componentDidMount() {
    document.addEventListener('keydown', this.changePage)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.changePage)
  }

  renderPages(pdf, numPage) {
    pdf.getPage(numPage).then((page) => {
      const viewport = page.getViewport({ scale: 1.5, })
      const outputScale = window.devicePixelRatio || 1;
      const canvas = document.getElementById('pdfContent')
      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = Math.floor(viewport.width) + "px";
      canvas.style.height =  Math.floor(viewport.height) + "px";

      const context = canvas.getContext('2d');
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext)
    })
  }

  changePage = (e) => {
    if(e.keyCode === 37) {
      this.prevPage()
    } else if(e.keyCode === 39) {
      this.nextPage()
    }
  }

  prevPage = () => {
    if(this.numPage > 1) {
      this.numPage = this.numPage - 1
    }
    if(this.numPage >= 1 && this.numPage <= this.numPages) {
      this.renderPages(this.props.book, this.numPage)
    }
  }

  nextPage = () => {
    if(this.numPage < this.numPages) {
      this.numPage = this.numPage + 1
    }
    if(this.numPage >= 1 && this.numPage <= this.numPages) {
      this.renderPages(this.props.book, this.numPage)
    }
  }

  render(){
    if(this.props.book) {
      const numPage = 1;
      this.numPages = this.props.book.numPages
      const pdf = this.props.book
      this.renderPages(pdf, numPage)
    }
    return (
      <div id="pdfView" className="h-full">
       <canvas id='pdfContent' className="h-full"></canvas>
      </div>
    )
  }
}

export default PdfContent
