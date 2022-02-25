import type { NextPage } from 'next'
import Link from 'next/link'
// useState nextjs
import { useState } from 'react'

import make from '../api/account/signup.js'

const signup: NextPage = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [matching, setMatching] = useState(true)

    const onPwdInputChange = (e: any) => {
        setPassword(e.target.value)
        if((e.target.value !== confirmPassword) || (e.target.value == "") || (confirmPassword == "")) {
            setMatching(false)
        } else {
            setMatching(true)
        }
    }

    const onConfirmInputChange = (e: any) => {
        setConfirmPassword(e.target.value)
        if((e.target.value !== password) || (password == "") || (e.target.value == "")) {
            setMatching(false)
        } else {
            setMatching(true)
        }
    }

    const formSubmit = (e: any) => {
        e.preventDefault()

        const values1 = []

        for(let i = 0; i < e.target.length; i++) {
            values1.push(e.target[i].value)
        }

        console.log(values1)
        make(values1)
    }

    return (
        <div className="flex h-screen bg-black text-white">
            <div className="m-auto">
                <div className="bg-black text-white">
                    <form onSubmit={formSubmit}>
                    <div className="rounded px-70 pt-5 pb-1">
                            <label className="block pb-2" htmlFor="name">Username:</label>
                            <input className="text-black w-full" type="text" placeholder="Username here, you can edit this later" name="name" />
                        </div>

                        <div className="rounded px-70 pt-5 pb-1">
                            <label className="block pb-2" htmlFor="name">Email:</label>
                            <input className="text-black w-full" type="email" placeholder="Email here" name="name" />
                        </div>

                        <div className="rounded px-70 pt-5 pb-1">
                            <label className="block pb-2" htmlFor="name">Password:</label>
                            <input className="text-black w-full" type="password" placeholder="Password here" id="password" onChange={onPwdInputChange} />
                        </div>

                        

                        <div className="rounded px-70 pt-5 pb-1">
                            <label className="block pb-2" htmlFor="name">Confirm password:</label>
                            <input className="text-black w-full" type="password" placeholder="Retype your password here" id="cpassword" onChange={onConfirmInputChange} />
                            
                            {
                            matching == false && (
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                    <h1 className="block pb-2">
                                        These passwords are not the same!
                                    </h1>
                                </div>
                            )
                        }
                        </div>
                        
                        <div className="rounded px-70 pt-5 pb-2">
                            <label htmlFor="textDescription" className="block pb-2">About me: </label>

                            <textarea className="text-black" placeholder="Please enter a description about yourself, it can be as limited as you want, you can also edit this later" name="textDescription" rows={3} cols={50} style={{resize: "none"}} ></textarea>
                        </div>

                        <div className="pt-2">
                            <label htmlFor="myfile" className="block pb-2">Add a profile picture: </label>
                            <input type="file" id="myfile" name="myfile"></input>
                        </div>

                        <div className="flex justify-center pt-2">
                            <button className="p-2 bg-blue-800 mt-2 rounded-lg group hover:bg-white flex itmes-center" type="submit" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="inline-block mr-5 fill-white group-hover:fill-black self-center">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                                </svg>
                                <p className="text-white group-hover:text-black">Sign up</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default signup