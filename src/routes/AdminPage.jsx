import { useSelector } from "react-redux";
import CustomTextField from "../componets/adminpage/form/CustomTextField";
import MultiSelectForm from "../componets/adminpage/form/MultiSelectForm";
import WriterEditer from "../componets/adminpage/form/WriteEditer";
import SingleSelectForm from "../componets/adminpage/form/SingleSelectForm";
import ButtonSendForm from "../componets/adminpage/form/ButtonSendForm";
import FileForm from "../componets/adminpage/form/FileForm";
import { useState } from "react";


const AdminPage = () => {

  const [files_one, setFiles_one] = useState({})
  const [files_two, setFiles_two] = useState({})
  
  const handleFileOne = (file) => { 
    setFiles_one(file)
  }
  const handleFileTwo = (file) => {
    setFiles_two(file)
  }

  const ggg = (file) => {
    return file
  }
    
  const {
  tittle, 
  comment, 
  tagline, 
  category, 
  paragraph_one, 
  paragraph_two,
  taggs,
  img_one,
  img_two
  } = useSelector(state => state.form)

  return ( 
    <div className="py-3" >

      <h2 className="" 
      style={{textShadow: '1px 1px 1px #121212d6'}}
      >Add a new entry</h2>
      <SingleSelectForm
      content={category}
      />

      <CustomTextField 
      labelTop={'Choose tittle'}
      labelText={'tittle'} 
      ph={'Type something'}
      isRequiered={true}
      content={tittle}
      />

      <CustomTextField 
       labelTop={'Choose tagline'}
       labelText={'tagline'} 
       ph={'Type something'}
       isRequiered={true}
       content={tagline}
      />
      
      <CustomTextField 
       labelTop={'Choose comment'}
       labelText={'comment'} 
       ph={'Type something'}
       isRequiered={false}
       content={comment}
      />   
      <br />
      <FileForm 
      content={img_one} 
      fileTextName={'one'} 
      typeName={'img_one_name'} 
      typeReader={'img_one_reader'} 
      handleFileOne={handleFileOne}
      />
      <br />
      <WriterEditer content_current_one={paragraph_one} content_current_two={paragraph_two}/>
      <br />
      <FileForm 
      content={img_two} 
      fileTextName={'two'} 
      typeName={'img_two_name'} 
      typeReader={'img_two_reader'} 
      handleFileTwo={handleFileTwo}
      />
   
      <br/>
      <MultiSelectForm content={taggs}  />
      <br />
      <ButtonSendForm files_one={files_one}  files_two={files_two} />
      <br />
      <br />
      <br />
      
    </div>
   )
}
 
export default AdminPage;