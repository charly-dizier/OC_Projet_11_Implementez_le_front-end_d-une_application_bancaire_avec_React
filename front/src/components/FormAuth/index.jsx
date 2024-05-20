import { useState } from "react";
import { isValidEmail, isValidPassword } from "../../utils/isValidForm";
import { useDispatch } from "react-redux";
import { loginFail, loginSuccess } from "../../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";

function FormAuth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputEmail = document.getElementById('username')
        const inputPassword = document.getElementById('password')
        if (!isValidEmail(email)) {
            inputEmail.style.border = 'solid 4px red';
            alert("Veuillez saisir un email valid !");
            console.log("email non valid !")
            return;
        } else {
            inputEmail.style.border = 'solid 1px'
        }
        if (!isValidPassword(password)) {
            inputPassword.style.border ='solid 4px red'
            alert("Mot de passe trop court ! 5 caractère minimum")
            console.log("mot de passe trop court");
            return;
        } else {
            inputPassword.style.border = 'solid 1px'
        }

        try {
            // Appel API
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email, password}),
            });
            if (response.status === 200) {
                const data = await response.json();
                //vérification data 
                console.log(data)
                const token = data.body.token;
                dispatch(loginSuccess(token));
                if (!rememberMe) {
                    sessionStorage.setItem("token", token)
                    //vérification du storage
                    console.log(sessionStorage)
                }
                if (rememberMe) {
                    localStorage.setItem("token", token);
                    // vérification du storage
                    console.log(localStorage)
                }
                navigate('/profile');
            } else {
                const error = "Identification incorrect"
                dispatch(loginFail(error));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-remember">
                <label htmlFor="remember-me">Remember me</label>
                <input 
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    )
}

export default FormAuth