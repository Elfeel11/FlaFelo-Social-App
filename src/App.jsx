import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AuthLayout from './layouts/AuthLayout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MainLayout from './layouts/MainLayout'
import FeedPage from './pages/FeedPage'
import PostDetailsPage from './pages/PostDetailsPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute'
import ProtectedAuthRoute from './ProtectedRoutes/ProtectedAuthRoute'



const router = createBrowserRouter([
  {path:"", element: <AuthLayout/>, children:
    [
      {path:"login", element: <ProtectedAuthRoute> <LoginPage />  </ProtectedAuthRoute> },
      {path:"register", element: <ProtectedAuthRoute> <RegisterPage /> </ProtectedAuthRoute>}
    ]
  },
  {
    path:"", element: <MainLayout />, children:[
      {index: true, element: <ProtectedRoute> <FeedPage /> </ProtectedRoute> },
      {path:'post-details/:id' , element:  <ProtectedRoute> <PostDetailsPage /> </ProtectedRoute>},
      {path:"profile", element:  <ProtectedRoute> <ProfilePage /> </ProtectedRoute> },
      {path:"*", element: <NotFoundPage />}
    ]
  }
])


function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
