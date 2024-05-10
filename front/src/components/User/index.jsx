import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { isValideName } from "../../utils/isValidForm";
import { updateUsername } from "../../redux/actions/user.action";


function User() {
    const [display, setDisplay] = useState(true);
    const [userName, setUserName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.user.userData);
    
    const submitChangeUsername = async (event) => {
        event.preventDefault();
        if (!isValideName(userName)) {
            setErrorMessage("Invalid username");
            return
        } else {
            setErrorMessage("");
        }
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({userName}),
            });
            if (response.ok) {
                const data = await response.json();
                const username = data.body.userName;

                dispatch(updateUsername(username));
                setDisplay(!display);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="header">
            { display ? 
                <>
                    <h1>
                        Welcome back 
                        <br />
                        {userData.firstname} {userData.lastname}
                    </h1>
                    <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
                </>
            : 
                <>
                    <h2>Edit user info</h2>
                    <form className="edit-profile">
                        <div className="edit-profile-input">
                            <label htmlFor="username">User name: </label>
                            <input 
                            type="text"
                            id="username"
                            defaultValue={userData.username}
                            onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="edit-profile-input">
                            <label htmlFor="firstname">First name: </label>
                            <input 
                                id="firstname"
                                type="text"
                                defaultValue={userData.firstname}
                                disabled={true}
                            />
                        </div>
                        <div className="edit-profile-input">
                            <label htmlFor="lasttname">Last name: </label>
                            <input 
                                id="lastname"
                                type="text"
                                defaultValue={userData.lastname}
                                disabled={true}
                            />
                        </div>
                        <div className="edit-profile-button">
                            <button className="edit-button" onClick={submitChangeUsername}>Save</button>
                            <button className="edit-button" onClick={() => setDisplay(!display)}>Cancel</button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </>
            }
        </div>
    )
}

export default User