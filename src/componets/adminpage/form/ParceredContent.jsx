
import parse from 'html-react-parser';

const ParceredContent = ({html}) => {

    

    return ( parse(html ? html : '') )
}
 
export default ParceredContent