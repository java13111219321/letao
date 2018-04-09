;(function() {

  NProgress.configure({showSpinner: false});

  $(document).ajaxStart(function(){
    NProgress.start();
  });

  $(document).ajaxStop(function() {
    setTimeout(function() {
      NProgress.done();
    },500)
  });

  if ( location.href.indexOf("login.html") === -1 ) {
    $.ajax({
      url: "/employee/checkRootLogin",
      type: "get",
      success: function( info ) {
        console.log( info )
        if ( info.success ) {
          console.log( "登陆了" );
          // 啥也不用干
        }

        if ( info.error === 400 ) {
          // 进行拦截, 拦截到登录页
          location.href = "login.html";
        }
      }
    })
  }

  $('.category').click(function(){

    $(this).next().stop().slideToggle();

  })

$('.icon-menu').click(function() {

  $('.lt_aside').toggleClass('hidemenu');
  $('.lt_main').toggleClass('hidemenu');
  $('.lt_barTop').toggleClass('hidemenu');
})


  //退出登录
  $('.icon-logout').click(function(){

    $('#modalLogout').modal('show');



  })

  $('#btnLogout').click(function() {

    $.ajax({
      url: '/employee/employeeLogout',
      type: 'get',
      success: function(info) {
        console.log(info);
        if(info.success) {
          location.href = "login.html";
        }
      }
    })

  })

})();