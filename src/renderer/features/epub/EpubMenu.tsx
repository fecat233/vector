import { useState } from 'react';

const EpubMenu = (props: any) => {
  const [tocs, setTocs] = useState([]);

  function showMenu() {
    if(props.book) {
      props.book.ready.then(() => {
        const navigation = props.book.navigation;
        const tocArray = navigation.toc;
        setTocs(tocArray);
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  function showNewPage(e) {
    if(e.target) {
      props.rendition.display(e.target.id);
    }
  }

  return (
    <div id="menu" className="float-left h-full w-1/5 shadow bg-white">
      <button onClick={showMenu}>目录</button>
      <div id="menu" className="p-3">
        <ul>
          {
            tocs? tocs.map((toc) => {
              return <li key={toc.id}>
                <a onClick={showNewPage} id={toc.href} className="p-2 cursor-pointer text-slate-700">{toc.label}</a>
              </li>
            }): ''
          }
        </ul>
      </div>
    </div>
  )
}

export default EpubMenu
