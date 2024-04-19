import { useNavigate } from "react-router-dom";
import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorText from "../components/ErrorText";
import { showError, showMessage } from "../utils/notify";
import { loginSuccess } from "../redux/userSlice";
import { login } from "../api/authentication";

const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password must be of 6 letters"),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state?.user);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log("data");
    console.log(data);
    try {
      const res = await login(data);
      console.log(res);
      if (res) {
        localStorage.setItem("user-token", res?.accessToken);
        dispatch(loginSuccess(res));
        showMessage("Logged in successfully!");
        navigate("/");
      }
    } catch (err) {
      console.log(err)
      showError("Invaild credentials.Try again!");
    }
  };

  const onChange = (e) => {
    onChange(e.target.value);
  }

  const handleSwitchToRegister = () => {
    navigate("/register");
  }

  return (
    <div className="login__container">
      <div className="login__wrapper">
        <h1 className="login__title">SIGN IN</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
          <>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="login__input"
                  placeholder="username"
                  onChange={(e) => onChange(e)}
                />
              )}
            />
            <ErrorText text={errors?.username?.message || ""} />
          </>
          <>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <input
                  type="password"
                  className="login__input"
                  placeholder="password"
                  onChange={(e) => onChange(e)}
                />
              )}
            />
            <ErrorText text={errors?.password?.message || ""} />
          </>
          <button className="login__button"
            type="submit"
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && <span className="login__error">Something went wrong...</span>}
          {/* <a href="" className="login__link">DO NOT YOU REMEMBER THE PASSWORD?</a> */}
          <a onClick={handleSwitchToRegister} className="login__link">CREATE A NEW ACCOUNT</a>
        </form>
      </div >
    </div >
  );
};

export default Login;