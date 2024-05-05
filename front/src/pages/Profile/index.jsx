import Account from "../../components/Account";

function Profile() {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back <br />
                    nom utilisateur
                </h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <Account />
        </main>
    )
}

export default Profile