
import { 
    MAKE_RESIZE,
} from "../types"


export function changeSizePreviewContent (data) {
    return (dispatch) => {
      dispatch(changeSize(data))
    }
}

const changeSize = (data) => ({
    type: MAKE_RESIZE,
    payload: data
})
