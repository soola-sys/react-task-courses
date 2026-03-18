import { useEffect } from "react";
import { LOGIN_PAGE_TEXT } from "../constants/login";


useEffect(() => {
    
}, [])

const LoginPage = (props: any) => {
    return (
        <section className="login-page">
            <h1 className="login-page-title">{LOGIN_PAGE_TEXT.login}</h1>
            <div className="login-page-inner">
                <div className="login-page-content">
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button className="login-page-btn btn-primary">{LOGIN_PAGE_TEXT.login}</button>
                </div>
            </div> 
        </section>
    )
}

export default LoginPage;