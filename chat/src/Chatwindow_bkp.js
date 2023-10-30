import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { socket } from './App';
function Chatwindow() {
  var navigate = useNavigate();
  var user_name = '';
  user_name = localStorage.getItem('chat-name');
  useEffect(() => {

    user_name = localStorage.getItem('chat-name');
    socket.emit('ChatUser', { data: user_name });

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
                    <img className="rounded-circle user_img" src="assets/img/customer/profile2.jpg" alt="" />
                  </div>
                  <div className="user_info">
                    <span><strong id="receiver_name">{user_name}</strong></span>
                    <p className="mb-0">Messages</p>
                  </div>
                </div>
              </div>
              <div className="card-body msg_card_body chat-scroll" style={{ height: "80vh" }}>
                <ul className="list-unstyled">
                  <li className="media sent d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="assets/img/customer/customer5.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>Hello. What can I do for you?</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:30 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media received d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>I'm just looking around.</p>
                          <p>Will you tell me something about yourself?</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:35 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="msg-box">
                        <div>
                          <p>Are you there? That time!</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:40 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="msg-box">
                        <div>
                          <div className="chat-msg-attachments">
                            <div className="chat-attachment">
                              <img src="assets/img/product/product12.jpg" alt="Attachment" />
                              <a href="" className="chat-attach-download">
                                <i className="fas fa-download"></i>
                              </a>
                            </div>
                            <div className="chat-attachment">
                              <img src="assets/img/product/product13.jpg" alt="Attachment" />
                              <a href="" className="chat-attach-download">
                                <i className="fas fa-download"></i>
                              </a>
                            </div>
                          </div>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:41 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media sent d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="assets/img/customer/customer5.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>Where?</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:42 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="msg-box">
                        <div>
                          <p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:42 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="msg-box">
                        <div>
                          <div className="chat-msg-attachments">
                            <div className="chat-attachment">
                              <img src="assets/img/product/product15.jpg" alt="Attachment" />
                              <a href="" className="chat-attach-download">
                                <i className="fas fa-download"></i>
                              </a>
                            </div>
                          </div>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:50 AM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media received d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>You wait for notice.</p>
                          <p>Consectetuorem ipsum dolor sit?</p>
                          <p>Ok?</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>8:55 PM</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="chat-date">Today</li>
                  <li className="media received d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>10:17 AM</span>
                              </div>
                            </li>
                            <li><a href="#">Edit</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media sent d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <p>Lorem ipsum dollar sit</p>
                          <div className="chat-msg-actions dropdown">
                            <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fe fe-elipsis-v"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">Delete</a>
                            </div>
                          </div>
                          <ul className="chat-msg-info">
                            <li>
                              <div className="chat-time">
                                <span>10:19 AM</span>
                              </div>
                            </li>
                            <li><a href="#">Edit</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media received d-flex">
                    <div className="avatar flex-shrink-0">
                      <img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="msg-box">
                        <div>
                          <div className="msg-typing">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="input-group">
                  <input className="form-control type_msg mh-auto empty_check" placeholder="Type your message..." />
                  <button className="btn btn-primary btn_send"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
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
