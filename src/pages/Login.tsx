import { z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import "./Login.css"
import useAuth from '../hooks/useAuth'
import axios from '../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'

const LOGIN_URL = '/login'

const Schema = z.object({
    username: z.string().min(4, {message: "Username too short"}),
    password: z.string().min(4, {message: "Password too short"})
})

type LoginForm = z.infer<typeof Schema>

const Login = () => {
    
    const { setAuth }:any = useAuth()
    const {
        register, 
        handleSubmit, 
        reset,
        formState: {errors, isValid}
    } = useForm<LoginForm>({ resolver: zodResolver(Schema) })
    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const onSubmit = async ( formData: FieldValues ) => {
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify(formData),                       
                {
                    //username: 'admin',
                    //password: 'admin',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, */*',
                    },
                }
            )
            console.log(JSON.stringify(response?.data));
            const token = response?.data?.token
            setAuth({username, password, token})     
            navigate(from, {replace: true})
        } catch(err) {
            console.log(`Error: ${err}`);
        }
    }
    
    return (
    <>
    <div className='login-wrapper'>
    <h1 className='login-title'>Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}   >
        <label htmlFor="username" className="text-white">Username</label>
        <input 
            {...register("username")}
            type="text" 
            id="username"
            className="login-input"
        />
        {errors.username && (
            <p>{errors.username.message}</p>
        )}
        <label htmlFor="password" className="text-white">Password</label>
        <input 
            {...register("password")}
            type="password" 
            id="password"
            className="login-input"
        />
        {errors.password && (
            <p>{errors.password.message}</p>
        )} 
        <button 
            disabled={!isValid}
            //onClick={() => reset()}
        >Login</button>
    </form>
    </div>
    </>
  )
}

export default Login
