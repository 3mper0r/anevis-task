import { z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import "./Login.css"
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import axios from '../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'

const LOGIN_URL = '/login'

const schema = z.object({
    username: z.string().min(4, {message: "Username too short"}),
    password: z.string().min(4, {message: "Password too short"})
})

type LoginForm = z.infer<typeof schema>

const Login = () => {
    
    const {
        register, 
        handleSubmit, 
        formState: {errors, isValid},
    } = useForm<LoginForm>({ resolver: zodResolver(schema) })
    
    //const { setAuth } = useAuth()
    //const [username, setUsername] = useState(userdata.username)
    //const [password, setPassword] = useState(userdata.password)
    const [formData, setFormData] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const onSubmit = async (data: FieldValues ) => {
        
        try {
            
            const response = await axios.post(LOGIN_URL,        
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, */*'
                    },
                }
            )
            //JSON.stringify({username, password})
            const token = response.data.token
            //setAuth({username, password, token})  
            navigate('/books')          
            //navigate(from, {replace: true})
        } catch(err) {
            console.log(`Error: ${err}`);
        }
    }
    
    return (
    <>
    <div className='login-wrapper'>
    <h1 className='login-title'>Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}  >
        <label htmlFor="username">Username</label>
        <input 
            {...register("username")}
            type="text" 
            id="username"
            //value={username}
            //onChange={(e) => setUsername(e.target.value)} 
            className="login-input"
        />
        {errors.username && (
            <p>{errors.username.message}</p>
        )}
        <label htmlFor="password">Password</label>
        <input 
            {...register("password")}
            type="password" 
            id="password"
            //value={password}
            //onChange={(e) => setPassword(e.target.value)}
            className="login-input"
        />
        {errors.password && (
            <p>{errors.password.message}</p>
        )} 
        <button disabled={!isValid} type="submit">Login</button>
    </form>
    </div>
    </>
  )
}
export default Login
