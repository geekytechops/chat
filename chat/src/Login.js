import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import { Link } from "react-router-dom";
import React , { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';


var navigate = '';
var details='';
function testing(){    
  
var email=$('#email').val();
var password=$('#password').val()
    details={email,password};

    if(email==''||password==''){
      if(email==''){
        $('#email').css('border','2px solid red');
      }else{
        $('#email').css('border','');
      }
      if(password==''){
        $('#password').css('border','2px solid red');
      }else{
        $('#password').css('border','');
      }
    }else{

$.ajax({
  url:'http://192.168.0.145:9999/validate',
  data:details,
  xhrFields: {
    withCredentials: true
  },
  type:"post",
  success:function(data){            
    if(data.msgs==='email_err'){
      $('#email-error').show();
      $('#pass-error').hide();
    }else if(data.msgs==='pass_err'){
      $('#email-error').hide();
      $('#pass-error').show();
    }else{      
      $('#email-error').hide();
      $('#pass-error').hide();          
      localStorage.setItem('chat-name',email);
      navigate("/Chats_page");
    }
  }
})
    }
}

function getSess(){
  $.ajax({
    url:'http://192.168.0.145:9999/validate_get',
    data:{test:'test'},
    xhrFields: {
      withCredentials: true
    },
    type:"post",
    success:function(data){
      console.log(data);
    }
  })
}
var socket='';

function Login() {  

  navigate = useNavigate();
  useEffect(()=>{          
    $('.mobile-bottom-nav').hide();
  },[])
  
  // socket = useContext(SocketContext);    
    return (
      <div className="d-flex align-items-center wh-logs loginform">
      <div className="form-box">
      <div className="container login-form">
          <div className="row">
              <div className="col-12 form-fields title-text" ><span>LOGIN FORM</span></div>
              <div className="col-12 form-fields"><input className="form-control" placeholder="Email address" type="text" name="email" id="email" onFocus={e=>e.target.style.border=''}/></div>
              <span className='error-msg' id='email-error' style={{display:'none'}}>Invalid email address</span>
              <div className="col-12 form-fields"><input className="form-control" type="password" placeholder="Password" name="password" id="password" onFocus={e=>e.target.style.border=''}/></div>
              <span className='error-msg' id="pass-error" style={{display:'none'}}>Invalid password</span>
              <div className="col-12 form-fields"><input style={{background:"#1b2d41"}} type="button" className="btn btn-primary" value="Login" id="login" name="login" onClick={testing} /></div>
              <span style={{cursor:'pointer',textAlign:'center',fontSize:'17px',marginBottom:'1rem',marginTop:'0rem'}}>Need an account ? <strong><Link to="/Signup" style={{color:'rgb(27, 45, 65)',textDecoration:'none'}}>Signup</Link></strong></span>
          </div>
      </div>
  </div>  

  </div>    
    );
  }

  export default Login;