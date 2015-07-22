$(document).ready(function () {

  var $entries = $('.entries');
  var $user = $('#user');
  var $title = $('#title');
  var $text = $('#text');
  // var $ID = $('.id_number');


  function addEntry(entry) {
    $entries.prepend('<li> ID: ' + entry._id + '<span class="title"> Title: ' + entry.title + '</span><span class="author">Author: ' + entry.user + '</span><br /><span class="text">Text: ' + entry.text + '<span></li>');
  }


  function updateEntry(entry) {
    $entries.replaceWith('<li> ID: ' + entry._id + '<span class="title"> Title: ' + entry.title + '</span><span class="author">Author: ' + entry.user + '</span><br /><span class="text">Text: ' + entry.text + '<span></li>');
  }


  $.ajax({
    type: 'GET',
      url: 'http://ga-wdi-api.meteor.com/api/posts/',
    dataType: 'json',
    success: function(entries) {
      $.each(entries, function(i, entry) {
        addEntry(entry);
      });
      console.log('Success', entries);
    },
    error: function() {
      console.log('Error getting posts');
    }
  });

  $('#add-post').click(function() {
    $.ajax({
      type: 'POST',
        url: 'http://ga-wdi-api.meteor.com/api/posts/',
      data: {      
        user: $user.val(),
        title: $title.val(),
        text: $text.val()
      },
      dataType: 'json',
      success: function(newEntry) {
        addEntry(newEntry);
        console.log("Success", newEntry);

      },
      error: function() {
        console.log('Error adding post');
      }
    });
  });

  $('#update-post').click(function() {
    event.preventDefault();
    $.ajax({
      type: 'PUT',
        url: 'http://ga-wdi-api.meteor.com/api/posts/' + $('.id_number').val(),
      data: {      
        user: $user.val(),
        title: $title.val(),
        text: $text.val()
      },
      dataType: 'json',
      success: function(improvedEntry) {
        updateEntry(improvedEntry);
        console.log("Success");
      },
      error: function() {
        console.log('Error updating post');
      }
    });
  });

  $('#delete-post').click(function() {
    if (window.confirm("Are you sure you want to delete that?")) {
      event.preventDefault();
      $.ajax({
        type: 'DELETE',
        url: 'http://ga-wdi-api.meteor.com/api/posts/' + $('.id_number2').val(),
        success: function(response){
          console.log(response);  
        },
      });
    }
  });
})





