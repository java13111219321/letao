;(function() {

  var currentPage = 1;
  var pageSize = 5;

  render();

  function render() {
    $.ajax({
      url: '/user/queryUser',
      type: 'get',
      data: {
        page: currentPage,
        pageSize: pageSize,
      },
      success:function(info) {
        console.log(info);
        $('.lt_content tbody').html(template('userTmp', info));

        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion: 3,
          currentPage: info.page,
          totalPages: Math.ceil(info.total/info.size),
          onPageClicked:function(a, b, c, page){
            currentPage = page;
            render();
          }
        })
      }
    })
  }



})();