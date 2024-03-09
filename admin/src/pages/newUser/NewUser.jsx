import "./NewUser.css";
import { addCustomer } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';
import { useState } from "react";

export default function NewUser() {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        const customer = { ...inputs };
        addCustomer(customer, dispatch);
    }

    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input name="username" type="text" placeholder="username"
                        onChange={handleChange} />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input name="fullName" type="text" placeholder="full name"
                        onChange={handleChange} />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input name="email" type="email" placeholder="xyz@gmail.com"
                        onChange={handleChange} />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input name="password" type="password" placeholder="password"
                        onChange={handleChange} />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input name="phone" type="number" placeholder="+91 XXXXXXXX78"
                        onChange={handleChange} />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input name="address" type="text" placeholder="XYZ | INDIA"
                        onChange={handleChange} />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"
                            onChange={handleChange} />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"
                            onChange={handleChange} />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"
                            onChange={handleChange} />
                        <label for="other">Other</label>
                    </div>
                </div>
                <button onClick={handleClick} className="newUserButton">Create</button>
            </form>
        </div>
    );
}