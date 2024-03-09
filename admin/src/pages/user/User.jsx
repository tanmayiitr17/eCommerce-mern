import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
import "./User.css";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomer } from '../../redux/apiCalls';

export default function User() {

    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});

    const location = useLocation();
    const customerId = location.pathname.split("/")[2];

    const customer = useSelector((state) =>
        state.customer.customers.find((customer) => customer._id === customerId)
    )

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        const customer = { ...inputs };
        updateCustomer(customerId, customer, dispatch);
    }


    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={customer.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{customer.fullName}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">{customer.username}</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">{customer.phone}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">{customer.email}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">{customer.address}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    name='username'
                                    type="text"
                                    placeholder={customer.username}
                                    className="userUpdateInput"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    name='fullName'
                                    type="text"
                                    placeholder={customer.fullName}
                                    className="userUpdateInput"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    name='email'
                                    type="text"
                                    placeholder={customer.email}
                                    className="userUpdateInput"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    name='phone'
                                    type="number"
                                    placeholder={customer.phone}
                                    className="userUpdateInput"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    name='address'
                                    type="text"
                                    placeholder={customer.address}
                                    className="userUpdateInput"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src={customer.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <PublishIcon className="userUpdateIcon" />
                                </label>
                                <input onChange={handleChange} name='img' type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button onClick={handleClick} className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}