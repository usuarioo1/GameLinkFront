import React from 'react'
import userContext from './userReducer'
import { useReducer } from 'react'
import axiosClient from '../../../config/axiosClient'
import { useNavigate } from 'react-router-dom'

const UserProvider = ({children}) => {

  const navigate = useNavigate()

  const initialState = {
    infoUser: [],
    authStatus: false
  }

  const [userState, dispatch] = useReducer(reducer,initialState)
  const loginUser = async(user) => {
        try {
          const userLogin = await axiosClient.get('/login',user)
          const  userOn = userLogin.data
          console.log(userOn)
          console.log(userOn.token)
          

          if(userLogin.data.success){
            dispatch({type:"Re",
            payload: userOn.data})
          }
        } catch (error) {
          console.error
        }
  }

  const registerUser = async(user) => {
    try {
      const userRegister = await axiosClient.get('/user',user)
      const  userOn = userRegister.data
      console.log(userOn)
      console.log(userOn.token)
      

      if(userOn.success){
        dispatch({type:"REGISTER/LOGIN",
        payload: userOn.token})
      }
      console.log(userOn.message)
    } catch (error) {
      console.error
    }
} 

  const verifyToken = async() => {
    const token = localStorage.getItem('token')

    if(token){
      axiosClient.defaults.headers.common['Authorization'] = `Bearer${token}`
    } else{
      delete axiosClient.defaults.headers.common['Authorization']
    } 

    try {
      const infoUserVerify = await  axiosClient.get('/verifyUser')
      dispatch({
        type:"INFO_USER",
        payload: infoUserVerify.data.info
      })
    } catch (error) {
      
    }
  
  
  }

  const signOut = async() => {

    try {
      dispatch({type:"SIGN_OUT"})
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <userContext.Provider value={{loginUser, registerUser,verifyToken, signOut, infoUser: userState.infoUser, authStatus:userState.authStatus  }}>{children}</userContext.Provider>
  )
}

export default UserProvider
