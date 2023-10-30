import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import $ from "jquery";
import {socket} from './App';

function Chats_page() {
    var navigate = useNavigate();    
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        socket.on('fetch_users', (data) => {
            // console.log(data.users);
            setData(data.users);
            setLoading(false);
          });
        // socket.on('fetch_sockets', (data) => {
        //     console.log(data.sockets);
        //   });
        socket.emit('getUsers',{data:localStorage.getItem('chat-name')});        
    },[])

    const gotoChat=(element) => {        
        var name=$(element).find('.user-name').html();
        localStorage.setItem('chat-name',name);
        navigate('/Chatwindow');
    }
    

    return (
                <div className="g-0 row chat-window">
                    <div className="col-lg-12 chat-cont-left">
                        <div className="card">
                            <div className="card-header chat-search">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="search_btn"><i className="fas fa-search"></i></span>
                                    </div>
                                    <input type="text" placeholder="Search" className="form-control search-chat rounded-pill" />
                                </div>
                            </div>
                            <div className="card-body contacts_body chat-users-list chat-scroll">
                            {datas.map(function (item,index){
                             return <a href="#" className="media d-flex active" onClick={(e)=>gotoChat(e.currentTarget)} key={index}>
                                <div className="media-img-wrap flex-shrink-0">
                                    <div className="avatar avatar-away">
                                        <img src={process.env.PUBLIC_URL + '/profile2.png'} alt="User Image" className="avatar-img rounded-circle" />
                                    </div>
                                </div>
                                <div className="media-body flex-grow-1">
                                    <div>
                                        <div className="user-name">{item}</div>
                                        {/* <div className="user-last-chat">Hey, How are you?</div> */}
                                    </div>
                                    <div>
                                        <div className="last-chat-time">2 min</div>
                                        <div className="badge badge-success badge-pill">15</div>
                                    </div>
                                </div>
                            </a>
                            })
                            }
                            </div>
                        </div>
                    </div>                    
                </div>
    )
}
export default Chats_page;