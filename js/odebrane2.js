jQuery(document).ready(function() {

  $('.msglist-check input ').click(function () {
    $('#nav1 button').toggleClass('act');
  });
  $('.msglist-msg-tr').click(function () {
    $('#nav1 button').toggleClass('act');
    $(this).toggleClass('active-tr');
    $(this).addClass('font-400');
    var val =  $(this).find('input:checkbox').prop('checked')?true:false;
    $(this).find('input:checkbox').prop('checked', val);

    $(document).delegate('#perforce_info_modal_layer', 'click', function(e) {
  e.stopPropagation();
});
  });
});
