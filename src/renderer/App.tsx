import { useState, useEffect } from 'react';
import Epub, { Book } from 'epubjs';
const Pdfjs = require('pdfjs-dist');
const pdfWorker = require('pdfjs-dist/build/pdf.worker.entry');
import BookViewer from './features/bookviewer/BookViewer';
import Home from './features/home/Home';
import './App.css';

export default function App() {
  // console.log('render App')
  const [book, setBook] = useState({});
  Pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
  useEffect(() => {
    window.electron.ipcRenderer.on('openFile', (arg) => {
      if(arg) {
        if(arg instanceof ArrayBuffer) {
          const epub: Book = Epub(arg);
          setBook(epub);
        } else if(arg instanceof Uint8Array) {
          Pdfjs.getDocument({
            data: arg,
            cMapUrl: 'cmaps/',
            cMapPacked: true
          }).promise.then((pdf) => {
            setBook(pdf);
          }).catch((err) => {
            console.log(err);
          })
        }
      }
    });
    //setBook(new Date())
    // console.log('setBook');
  }, [])
  return (
    <>
      {
       Object.keys(book).length === 0? <Home />: <BookViewer book={book}/>
      }
    </>
  );
}
