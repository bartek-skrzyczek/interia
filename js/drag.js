jQuery(document).ready(function() {
console.log('bb');
  $('.slideCr').draggable({
    axis: 'y',
   containment: 'parent',
   helper: 'clone',
   drag: function (event, ui) {
       var height = ui.offset.top;
       $(this).prev().height(height);
      }
  });
});
