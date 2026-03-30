import {useState} from "react";
import { LOGIN_PAGE_TEXT } from "../constants/login";
import * as React from "react";
import type {LoginType} from "../types/types.ts";

interface FormValues {
    username: string,
    password: string
}

interface ResponseType {
    accessToken: string,
    email: string,
    firstName: string,
    gender: string
    id: number
    image: string,
    lastName: string,
    refreshToken: string
    username: string
}


const USERS_API = 'https://dummyjson.com/auth/login';

const getUserProfile = async (formValues: FormValues) => {
    try {
        const response = await fetch(USERS_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
        });
        if(response?.ok) {
            console.log("Response", response);
            return await response.json();
        }
    } catch (err) {
        console.error(err)
    }
}

const LoginPage = ({ setLogin }: LoginType)=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserNameErr] = useState("username cannot be empty");
    const [passError, setPassError] = useState("password cannot be empty");
    const [userNameDirty, setUserNameDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const handleSubmit= async(event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       const formData = new FormData(event.currentTarget);
       const username = formData.get("username") as string;
       const password = formData.get("password") as string;
       const userData = await getUserProfile({username, password});
       setLogin(true);
       setAccessToken(userData);
    }

    const setAccessToken = (data: ResponseType) => {
        if(data?.accessToken) {
            localStorage.setItem("userData", JSON.stringify(data))
        }
    }

    const handlerUserName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const targetVal = e.target.value;
        setUsername(targetVal);
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        if(!usernameRegex.test(targetVal)) {
            setUserNameErr("Incorrect username");
        } else {
            setUserNameErr("");
        }
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setPassword(value);
        if(value.length < 5 || value.length > 10) {
            setPassError("password cannot be less than 5 chars and more than 10");
            if(!value) {
                setPassError("password cannot be empty");
            }
        } else {
            setPassError("");
        }
    }

    const blurHandler = (e: any) => {
        console.log("BlurHandler", e.target)
        switch(e.target.name) {
            case 'username':
                setUserNameDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    return (
        <section className="login-page">
            <h1 className="login-page-title">{LOGIN_PAGE_TEXT.login}</h1>
            <div className="login-page-inner">
                <div className="login-page-content">
                    <form onSubmit={handleSubmit}>
                        <input
                            onBlur={blurHandler}
                            onChange={handlerUserName}
                            value={username}
                            type="text"
                            name="username"
                            placeholder="Username"
                            autoComplete="on"
                        />
                        {(userNameDirty && userError) && <p className="Error">{userError}</p>}
                        <input
                            onBlur={blurHandler}
                            onChange={handlePassword}
                            value={password}
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        {(passwordDirty && passError) && <p className="Error">{passError}</p>}
                        <button type="submit" className="login-page-btn btn-primary">{LOGIN_PAGE_TEXT.login}</button>
                    </form>
                </div>
            </div> 
        </section>
    )
}

export default LoginPage;