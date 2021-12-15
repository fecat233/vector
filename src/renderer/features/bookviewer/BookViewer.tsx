import { useState } from 'react'
import EpubViewer from '../epub/EpubViewer'
import Epub, { Book } from 'epubjs'

const BookViewer = () => {
  let fileUrl = ''
  window.electron.ipcRenderer.openFile()
  window.electron.ipcRenderer.once('openFile', (arg) => {
    if(arg) {
      fileUrl = arg
    }
  });
  const [book, setBook] = useState(null); //uploaded book
  return (
    <div>
      <EpubViewer book={book} />
      <button onClick={openFile}>开始阅读</button>
    </div>
  )

  function onFileChange(file: any) {
    const fileReader = new FileReader()
    fileReader.readAsArrayBuffer(file)
    fileReader.onload = function(e: any) {
      const epub: Book = Epub(e.target.result)
      setBook(epub)
    }
  }

  function openFile() {
    const epub: Book = Epub(fileUrl)
    setBook(epub)
  }
}

export default BookViewer
