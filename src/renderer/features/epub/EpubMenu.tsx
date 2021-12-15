import { useState } from 'react'

const EpubMenu = (props: any) => {
  const [menu, setMenu] = useState(null)
  return (
    <div>
      <button onClick={showMenu}>目录</button>
      <div id="menu"></div>
    </div>
  )

  function showMenu() {
    if(props.book) {
      props.book.ready.then(() => {
        const navigation = props.book.navigation
        setMenu(navigation)
      })
    }
  }
}

export default EpubMenu
