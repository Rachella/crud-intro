$(document).ready(function () {

  var $entries = $('.entries');
  var $user = $('#user');
  var $title = $('#title');
  var $text = $('#text');
  var $ID = $('#id_number');

  function addEntry(entry) {
    $entries.append('<li> id: ' + entry._id + ' title: ' + entry.title + 'text: ' + entry.text + ' user: ' + entry.user + '</li>');
  }

  function updateEntry() {
    $entries.replaceWith('<li> id: ' + entry._id + ' title: ' + entry.title + 'text: ' + entry.text + ' user: ' + entry.user + '</li>');
  }

  function removeEntry() {
    $entries.remove('<li> id: ' + entry._id + ' title: ' + entry.title + 'text: ' + entry.text + ' user: ' + entry.user + '</li>');
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
    $.ajax({
      type: 'PUT',
        url: 'http://ga-wdi-api.meteor.com/api/posts/' + $ID.val(),
      data: {      
        user: $user.val(),
        title: $title.val(),
        text: $text.val()
      },
      dataType: 'json',
      success: function(improvedEntry) {
        updateEntry(improvedEntry);
        console.log("Success", response);
      },
      error: function() {
        console.log('Error updating post');
      }
    });
  });

  $('#delete-post').click(function() {
    if (window.confirm("Are you sure you want to delete that?")) {
      $.ajax({
      type: 'DELETE',
        url: 'http://ga-wdi-api.meteor.com/api/posts/' + $ID.val(),
      success: removeEntry(),

      });
    };
  })

})





