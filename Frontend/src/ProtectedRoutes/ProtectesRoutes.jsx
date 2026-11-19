import {Navigate} from 'react-router-dom'
const ProtectesRoutes = ({acess,children}) => {
  const role = localStorage.getItem("role");
  if(!role){
    return  <Navigate to="/" replace/>
   }
    if(role!=acess){
        return <><h1 className="text-4xl text-rose-500">acces denied</h1></>
    }

  return (
    children
  )
}

export default ProtectesRoutes
