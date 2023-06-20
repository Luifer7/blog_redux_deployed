import { useDispatch } from "react-redux";
import { changeSizePreviewContent } from "../../actions/changePreviewActions";
import { useState } from "react";
import { useLocation } from "react-router-dom";



const ChangePreviewSize = () => {

    const dispatch = useDispatch()
    const [currentSize, setCurrentSize] = useState('100%')

    const location = useLocation()

    const handleChange = (selectedSize) => {
        setCurrentSize(selectedSize)
        dispatch(changeSizePreviewContent(selectedSize))
    }

    const iconsStyles = {
        cursor: 'pointer',
        transition: '.2s ease All'
    }

    return ( 
        <>
        {
        location.pathname === '/admin/preview' ?
        <div className="mx-3 mt-2" style={{position: 'absolute', right: '10px'}} >
            
            <i className={`bi bi-phone m-0 mx-2 ${currentSize === '390px' ? 'text-primary h3' : 'h4'}`}
            style={iconsStyles} 
            onClick={() => handleChange('390px')} ></i>

            <i className={`bi bi-tablet m-0 mx-2 ${currentSize === '800px' ? 'text-primary h3' : 'h4'}`}
            style={iconsStyles} 
            onClick={() => handleChange('800px')} ></i>

            <i className={`bi bi-pc-display-horizontal h3 m-0 mx-2 ${currentSize === '100%' ? 'text-primary h3' : 'h4'}`}
            style={iconsStyles} 
            onClick={() => handleChange('100%')} ></i>
        
            
        </div>
        : null
        }
        </>
     )
}
 
export default ChangePreviewSize;