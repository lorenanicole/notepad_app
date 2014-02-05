$(document).ready(function() {
  $('#show_form').on('click', function(){
    $('#welcome').hide();
    $('#hidden_form').show();
  });
  $('#show_posts').on('click', function(){
    $('#welcome').hide();
    $('#all_notes').show();
  });
});

$(document).ready(function() {
  $('#update').on('click', function(e){
    e.preventDefault();
    $('#note_content').hide();
    $('#update_form').show();
    var url = "/update/".concat($('#update').attr('data-id'));
    $.post(url, function(data) {
      $("#update_title").val(data.title);
      $("#update_content").html(data.content);
      $("#updating").attr('action','/save/'.concat(data.id));
    });
  });
});

$(document).ready(function() {
  $('#delete').on('click', function(e){
    e.preventDefault();
    var delete_post = confirm("REALLY!?!? Are you sure you wish to delete this post?!!?");
    alert(delete_post);
    if (delete_post) {
      var url = "/delete/".concat($('#delete').attr('data-id'));
      $.get(url, function() {
        window.location.href = "/";
      });
    } else {
        window.location.href = "/";
    }
  });
});