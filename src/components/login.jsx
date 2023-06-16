import { Link, useNavigate } from "react-router-dom";
import Loginfoto from "./../../images/login-image.png"
import { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

function Login ({handleLogin}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await axios.post('https://back-end-production-643c.up.railway.app/user/login', {
        email,
        password
      });

      if (response.status === 200){
        setError("");
        handleLogin();
        navigate('/');
      }
      else{
        setError("Login Failed. Please try again!");
      }
    }
    catch(error){
      setError("Login Failed. Please try again!");
    }
  };


  return(
    <div>
      <div class="container d-flex justify-content-center align-items-center min-vh-100 my-3">
        <div class="d-flex rounded-4 p-4 bg-white shadow box-area my-3 mx-1">
          <div class="col-md-6 bg-blue rounded-3 text-white p-4 d-flex justify-content-end align-items-center flex-column left-box col-sm-0">
            <img src={Loginfoto} alt="" class="img-fluid" />
          </div>
          <div class="col-md-6 right-box col-sm-12">
            <Link className="homelink" to='/'>
              <h3 class="fw-bold text-purple">D'care</h3>
            </Link>
            <h4 class="my-3 fw-semibold text-slate-500">Hello, Pengguna</h4>
            <p class="text-slate-400">Selamat datang, silahkan login untuk melanjutkan.</p>
            <form id="loginForm" class="text-slate-500" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Email" onChange={handleEmailChange} required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" onChange={handlePasswordChange} required />
                {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
              </div>
              <div id="notif"></div>
              <div class="d-grid">
                <button class="btn btn-primary" id="login" type="submit">Masuk</button>
              </div>
            </form>
            <div class="d-flex justify-content-center align-items-center or my-2">
              <div class="h-line me-2"></div>
              <small>Atau</small>
              <div class="h-line ms-2"></div>
            </div>
            <div class="d-grid">
              <button class="btn btn-outline-dark">
                <img src="../../assets/icon/google.png" alt="" width="20px" class="me-3" />Sign in with Google
              </button>
            </div>
            <hr class="hr hr-blurry" />
            <div class="row justify-content-center">
              <small class="text-center">
                Belum punya akun? <Link to="/register" class="link-underline link-underline-opacity-0">Daftar</Link>.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;