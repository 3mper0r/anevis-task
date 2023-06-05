import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import "./Login.css"
import { useState } from 'react'

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
  
    const [formData, setFormData] = useState()
    const onSubmit = (data: FieldValues) => console.log(data);
    
    return (
    <>
    <div className='login'>Login</div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input 
            {...register("username")}
            type="text" 
            id="username"  
        />
        {errors.username && (
            <p>{errors.username.message}</p>
        )}
        <label htmlFor="password">Password</label>
        <input 
            {...register("password")}
            type="password" 
            id="password"
        />
        {errors.password && (
            <p>{errors.password.message}</p>
        )}
        <button disabled={!isValid} type="submit" >Login</button>
    </form>
    </>
  )
}
export default Login
