function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
function addimage(e){
    //console.log(e.pageY,window.scrollY);
    //console.log(e.pageY,window.innerHeight);
    //console.log(bottom_position);
    var images=document.querySelectorAll('img');
    images.forEach(image => {
        var image_bottom=image.offsetTop+image.height;
        var bottom_position=e.pageY+window.innerHeight-(image.height/2);
        var doslide=bottom_position > image.offsetTop;
        var noslide=e.pageY >image_bottom;
        if(doslide && !noslide)
        {
            image.classList.add('bring-in');
        }
        else
        {
            image.classList.remove('bring-in');
        }

    });
}
window.addEventListener('scroll',debounce(addimage));