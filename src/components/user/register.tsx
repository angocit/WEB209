import React, { useState } from "react";
import { UserRegister } from "../../service/auth";

type Props = {};

const Register = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
     const data = await UserRegister({ name, email, password });
      // console.log(data);
      if (data?.name==="AxiosError"){
        setMessage(data.response.data)
      }
      else {
        setMessage('Đăng ký thành công');
      }
      
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <div className="bg-overlay">
        <form onSubmit={handleSubmit}>
          {message}
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Name</label>
              <input
                type="text"
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                className="form-control"
                placeholder="Fullname"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Email</label>
              <input
                type="email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Password</label>
              <input
                type="password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
