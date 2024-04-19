import './Register.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorText from "../components/ErrorText";
import { register } from '../api/authentication';
import { registerSuccess } from '../redux/userSlice';
import { showError, showMessage } from '../utils/notify';

const schema = yup.object({
  username: yup.string().required("Unique username is required"),
  fullName: yup.string().required("Full Name is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .number()
    .required("Mobile Number is required!")
    .max(10, "Mobile Number must be of 10 digit")
    .min(10, "Mobile Number must be of 10 digit"),
  address: yup.string().required("Address is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await register(data);
      if (res) {
        dispatch(registerSuccess(res));
        showMessage("Registered Successfully!");
        navigate("/")
      }
    } catch (err) {
      showError("Something went wrong.Try Again!");
    }
  };

  return (
    <div className="register__container">
      <div className="register__wrapper">
        <h1 className="register__title">CREATE AN ACCOUNT</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="register__form">
          <span>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="username"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.username?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="full name"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.fullName?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="xyz@gmail.com"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.email?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <input
                  type="password"
                  className="register__input"
                  placeholder="password"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.password?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="+91 XXXXXXXX78"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.phone?.message || ""} />
          </span>
          <span>
            <Controller
              control={control}
              name="address"
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="register__input"
                  placeholder="XYZ | INDIA"
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <ErrorText text={errors?.address?.message || ""} />
          </span>
          <span className="register__aggrement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button type="submit" className="register__button">CREATE</button>
        </form>
      </div>
    </div >
  );
};

export default Register;
