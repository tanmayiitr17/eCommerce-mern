import React from "react";
import "./Topbar.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

export default function Topbar() {

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        dispatch(logout());
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">eKHARID Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <ExitToAppIcon onClick={handleLogout} />
                    </div>
                    <img src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}