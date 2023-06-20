import { useSelector } from "react-redux"
import { useSendEntry } from "../../../hooks/useSendEntry"
import { useState } from "react"

const ButtonSendForm = ({files_one, files_two}) => {

    const {sendEntry, uploadSubmit, isLoading, validImageData} = useSendEntry()

    const [messageText, setMessageText] = useState('')

    const {
    tittle, 
    tagline, 
    comment,
    category, 
    paragraph_one, 
    paragraph_two, 
    taggs: entryTaggs, 
    img_one, 
    img_two,
    fileContent_one,
    fileContent_two
    } = useSelector(store => store.form)
   
    const {currentUser} = useSelector(state => state.user)

    const handleClick = () => {
        console.log(files_one)
        console.log(files_two)
        let taggs = entryTaggs.map((tag) => { return tag.value }) 

        let entry =
        {
            tagline, tittle, comment, 
            category, paragraph_one, 
            paragraph_two, taggs, 
            date: Date.now(), 
            userid: currentUser.uid,
            image_one: img_one.name,
            image_two: img_two.name,
            author: currentUser.displayName
        }
       
        const entryKeys = Object.keys(entry)
        
        let empty = []
        
        Object.values(entry).forEach((element, index) => {
           if (element === '' || element?.length === 0 || element === undefined) {
            empty.push({indice: index, name: entryKeys[index], response: false})
            return empty
           }  else {
            empty.push({indice: index, name: entryKeys[index], response: true})
            return empty
           }
        })

        const emptyValid = empty.map((data, i) => !data.response ? false : true)
        
        if (emptyValid[0] && emptyValid[1] && emptyValid[2] && emptyValid[3] && emptyValid[4] && emptyValid[5] && emptyValid[6] && emptyValid[7] && emptyValid[8] && emptyValid[9] && emptyValid[10] && emptyValid[11]) {
            let valid =  validImageData([files_one, files_two])
            if (valid?.response === true) {
                console.log([files_one, files_two])
                sendEntry(entry)
                uploadSubmit([files_one, files_two])
                setMessageText('success')
            } else{
                setMessageText('You must fill in all the required fields!')
            }
        } else {
            setMessageText('You must fill in all the required fields!')
        }   
    }

    return ( 
        <div className=" d-flex align-items-center justify-content-start gap-3 text-danger fw-bold flex-wrap" >
        <button onClick={handleClick} className="button-15 fw-bold" role="button">Send new entry

        {
            isLoading 
            ?  <div className="spinner-border spinner-border-sm text-light mx-2" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            : null
            
        }
        
        </button> 
        <strong className="text-dark" >{messageText ? messageText : ''}</strong>
        </div>
     )
}
 
export default ButtonSendForm