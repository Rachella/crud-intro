$(function () {

  var $entries = $('.entries');
  var $user = $('#user');
  var $title = $('#title');
  var $text = $('#text');

  $.ajax({
    type: 'GET',
    url: 'http://ga-wdi-api.meteor.com/api/posts/',
    dataType: 'json',
    success: function(entries) {
      $.each(entries, function(i, entry) {
        $entries.append('<li> id: ' + entry._id + ' title: ' + entry.title + 'text: ' + entry.text + ' user: ' + entry.user + '</li>');
      });
      console.log('Success', entries);
    },
    error: function() {
      console.log('Error getting posts');
    }
  });

  $('#add-post').on('click', function() {

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
        $entries.append('<li> id: ' + newEntry._id + ' title: ' + newEntry.title + 'text: ' + newEntry.text + ' user: ' + newEntry.user + '</li>');
        console.log('Success in posting');
      },
      error: function() {
        console.log('Error adding post');
      }
    });

  });

})
