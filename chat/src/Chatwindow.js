import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { socket } from './App';
import $ from 'jquery';
import profileImg from './assets/img/profile2.png';

function Chatwindow() {
  var navigate = useNavigate();
  var user_name = '';
  user_name = localStorage.getItem('chat-name');


  const sendMessage = ()=>{
    var messageBox=$('.message_box').val();
    if(messageBox!==''){
  
      var receiver=$('#receiver_name').html();    
      $('.message_box').val('');
      var image = {profileImg};
      var messageSent='<li class="media sent d-flex"><div class="avatar flex-shrink-0"><img src="'+image+'" alt="User Image" class="avatar-img rounded-circle"></div><div class="media-body flex-grow-1"><div class="msg-box"><div><p>'+messageBox+'</p><div class="chat-msg-actions dropdown"><a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fe fe-elipsis-v"></i></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Delete</a></div></div><ul class="chat-msg-info"><li><div class="chat-time"><span>10:19 AM</span></div></li><li><a href="#">Edit</a></li></ul></div></div></div></li>';
      $('.messages').append(messageSent);
      socket.emit('SendMessage', { message: messageBox,receiver:receiver });

    }
  }

  useEffect(() => {

    socket.on('msg_rec',(data)=>{      
      var image = {profileImg};
      var messageRec='<li class="media received d-flex"><div class="avatar flex-shrink-0"><img src="'+image+'" alt="User Image" class="avatar-img rounded-circle"></div><div class="media-body flex-grow-1"><div class="msg-box"><div><p>'+data.data+'</p><ul class="chat-msg-info"><li><div class="chat-time"><span>10:17 AM</span></div></li><li><a href="#">Edit</a></li></ul></div></div></div></li>';    
      $('.messages').append(messageRec);
    });      

  }, []);

  return (
    <div className="content">
      <div className="col-lg-12">
        <div className="row chat-window">
          <div className="col-lg-7 col-xl-8 chat-cont-right">

            <div className="card mb-0">
              <div className="card-header msg_head">
                <div className="d-flex bd-highlight">
                  <a id="back_user_list" href="#" className="back-user-list" onClick={() => navigate('/Chats_page')}>
                    <i className="fas fa-chevron-left"></i>
                  </a>
                  <div className="img_cont">
                    <img className="rounded-circle user_img" src={process.env.PUBLIC_URL + '/profile2.png'} alt="" />
                  </div>
                  <div className="user_info">
                    <span><strong id="receiver_name">{user_name}</strong></span>
                    <p className="mb-0">Messages</p>
                  </div>
                </div>
              </div>
              <div className="card-body msg_card_body chat-scroll" style={{ height: "80vh" }}>
                <ul className="list-unstyled messages">
                </ul>
              </div>
              <div className="card-footer">
                <div className="input-group">
                  <input className="form-control type_msg mh-auto empty_check message_box" placeholder="Type your message..." />
                  <button className="btn btn-primary btn_send message_send" onClick={()=>sendMessage()}><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Chatwindow;
