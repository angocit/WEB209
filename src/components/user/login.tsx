import React, { useState } from "react";
import { UserLogin } from "../../service/auth";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const user = await UserLogin({ email, password });
      // console.log(user);
      
      if (user?.name==="AxiosError"){
        setMessage(user.response.data)
      }
      else {
        sessionStorage.setItem("user", user)
        setMessage('Đăng nhập thành công')
      }
    } catch (error) {
      setMessage((error as Error)?.message);
    }
  };
  return (
    <>    
      <div className="bg-overlay">
        <form onSubmit={handleSubmit}>
        {message}
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
