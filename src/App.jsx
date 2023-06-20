//React  Router
import {RouterProvider} from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
//custom router
import { router } from "./router";
//custom hook
import { useGetCurrentUser } from "./hooks/useGetCurrentUser";


function App() {

 const dispatch = useDispatch()
 const {} = useGetCurrentUser(dispatch)



  return ( 
    <RouterProvider router={router} />
  )
  
}

export default App
