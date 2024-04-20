import { CircularProgress } from "@mui/material";
import "./Loading.css";

const Loading = ({
    message = "Hold on, we are gathering your data...",
}) => {
    return (
        <div className="loading">
            <div className="loading-container">
                <CircularProgress className="loading-progress" />
                {message}
            </div>
        </div>
    );
};

export default Loading;
