import Account from "../../components/Account";
import accountData from "../../utils/data/accountData.json";
import User from "../../components/User";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userProfile } from "../../redux/actions/user.action";

function Profile() {

    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                            username: data.body.userName
                        }
                        dispatch(userProfile(userData));
                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                }
            };
            userData();
        }
    }, [dispatch, token]);

    return (
        <main className="main bg-dark">
            <User />
            <h2 className="sr-only">Accounts</h2>
            {accountData.map((data) => (
                <Account 
                    key={data.id}
                    title={data.title}
                    amount={data.amount}
                    description={data.description}
                />
            ))}
        </main>
    )
}

export default Profile