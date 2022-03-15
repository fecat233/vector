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
      <button onClick={showMenu} className="bg-sky-400 text-white p-4 w-full border-none">目录</button>
      <div id="menulist" className="overflow-auto scollbar h-5/6">
        <ul>
          {
            tocs? tocs.map((toc) => {
              return <li key={toc.id} className="p-2 m-2">
                <a onClick={showNewPage} id={toc.href} className="cursor-pointe
                   align-middle">{toc.label}</a>
              </li>
            }): ''
          }
        </ul>
      </div>
    </div>
  )
}

export default EpubMenu
