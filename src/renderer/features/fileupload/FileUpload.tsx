import { FC } from 'react'

interface IProps {
  onFileChange: Function
}

const FileUpload: FC<IProps> = (props: any) => {
  return (
    <div>
      <input type="file" id="file" />
      <input type="button"
             id="fileupload"
             value="开始阅读吧"
             onClick={fileUpload}/>
    </div>
  )

  function fileUpload() {
    const files = document.getElementById('file').files
    props.onFileChange(files[0])
  }
}


export default FileUpload
