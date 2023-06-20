import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const AdminProtectedRoute = ({children}) => {

    const {authenticateUser}= useSelector(state => state.user)

    return authenticateUser === 'hp@gmail.com' ? children : <Navigate to="/" />
}

export default AdminProtectedRoute

