import $ from 'jquery';
var chatAppTarget=$('.chat-window');(function(){if($(window).width()>991)
$('.chat-window').removeClass('chat-slide');$(document).on("click",".chat-window .chat-users-list a.media",function(){if($(window).width()<=991){$('.chat-window').addClass('chat-slide');}
return false;});$(document).on("click","#back_user_list",function(){if($(window).width()<=991){$('.chat-window').removeClass('chat-slide');}
return false;});})();