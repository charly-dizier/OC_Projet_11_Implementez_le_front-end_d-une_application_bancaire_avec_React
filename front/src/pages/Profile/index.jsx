import Account from "../../components/Account";
import accountData from "../../utils/data/accountData.json";

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