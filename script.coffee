avatar = document.querySelector '.avatar'
image = avatar.querySelector 'img'
image.addEventListener 'click', (event) ->
    avatar.classList.add 'transform'
    document.querySelector '.link' .classList.add 'transform'