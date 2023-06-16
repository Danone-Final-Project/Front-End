import React from 'react'
import "./../login.css"
import Registerfoto from "./../../images/register.png"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('L');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordConfirmChange = (event) => {
    setConfirmPass(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 6){
      setError("Password too short!");
      return;
    }
    if (password !== confirmPass){
      setError("Password Invalid!");
      return;
    }

    try{
      const response = await axios.post('https://back-end-production-643c.up.railway.app/user/register', {
        name,
        email,
        password,
        gender
      });

      if (response.status === 200){
        console.log('success');
        navigate('/login');
        setError("");
      }
      else{
        setError("Registration Failed. Please try again!");
        console.log('fail');
      }
    }
    catch(error){
      setError("Registration Failed. Please try again!");
      console.log(error);
    }
  };

  return(
  <div>
    <div class="container d-flex justify-content-center align-items-center min-vh-100 my-3">
      <div class="d-flex rounded-4 p-4 bg-white shadow box-area my-3 mx-1 flex-row-reverse">
        <div class="col-md-6 bg-blue rounded-3 text-white p-4 d-flex justify-content-center align-items-center flex-column left-box col-sm-0 ms-3">
          <img src={Registerfoto} alt="" class="img-fluid" />
        </div>
        <div class="col-md-6 right-box col-sm-12 me-3">
          <h3 class="fw-bold text-purple">Dcare</h3>
          <h4 class="my-3 fw-semibold text-slate-500">Bergabung bersama kami</h4>
          <p class="text-slate-400">Buat akun untuk mengakses fitur-fitur kami.</p>
          <form class="text-slate-500" id="registerForm" onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="name" class="form-label">Nama Lengkap</label>
              <input type="text" class="form-control" id="name" placeholder="" onChange={handleNameChange} required />
            </div>
            <div class="mb-3">
              <div class="form-check">
                  <input class="form-check-input" type="radio" name="gender" id="male" checked={gender === 'L'} value="L" onChange={handleGenderChange} />
                  <label class="form-check-label" for="male"> Laki-laki </label>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                  <input class="form-check-input" type="radio" name="gender" id="female" checked={gender === 'F'} value="F" onChange={handleGenderChange} />
                  <label class="form-check-label" for="female"> Perempuan </label>
              </div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Alamat Email</label>
              <input type="email" class="form-control" id="email" placeholder="" onChange={handleEmailChange} required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="" onChange={handlePasswordChange} required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Confirm Password</label>
              <input type="password" class="form-control" id="conf-password" placeholder="" onChange={handlePasswordConfirmChange} required />
              {error && <div>{error}</div>}
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="check" />
                <label class="form-check-label" for="">
                  Saya telah menyetujui <a href="#info" data-bs-toggle="modal" data-bs-target="#info">ketentuan</a> yang berlaku
                </label>
                <div class="modal fade" id="info" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Kebijakan privasi</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error, libero praesentium sequi eveniet illo, natus quos atque est temporibus nesciunt repudiandae optio quia quod cum labore. Doloremque consectetur nemo corporis porro aliquam, voluptates fugiat repudiandae commodi assumenda obcaecati architecto sunt ipsum quidem nam autem sed esse eos fugit. Architecto?
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-purple" data-bs-dismiss="modal">Selesai</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="notif"></div>
            <div class="d-grid">
              <button class="btn btn-purple" type="submit" id="register">Daftar</button>
            </div>
          </form>       
          <div class="d-flex justify-content-center align-items-center or my-2">
            <div class="h-line me-2"></div>
            <small>Atau</small>
            <div class="h-line ms-2"></div>
          </div>
          <div class="d-grid">
            <button class="btn btn-outline-dark">
              <img src="../../assets/icon/google.png" alt="" width="20px" class="me-3" />Sign up with Google
            </button>
          </div>
          <hr class="hr hr-blurry" />
          <div class="row justify-content-center">
            <small class="text-center">
              Sudah punya akun? <Link to="/login" class="link-underline link-underline-opacity-0">Masuk</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default register