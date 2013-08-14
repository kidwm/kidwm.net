(function() {
  var avatar, image;

  avatar = document.querySelector('.avatar');

  image = avatar.querySelector('img');

  image.addEventListener('click', function(event) {
    avatar.classList.add('transform');
    return document.querySelector('.link'.classList.add('transform'));
  });

}).call(this);
