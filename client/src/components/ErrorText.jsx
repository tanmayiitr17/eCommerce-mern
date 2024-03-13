import InfoIcon from "@mui/icons-material/Info";
import "./ErrorText.css"
const InputText = ({ text }) => {
    return (
        <div className="error-container">
            {text && (
                <>
                    <InfoIcon className="error-icon" />
                    {text}
                </>
            )}
        </div>
    );
};

export default InputText;
