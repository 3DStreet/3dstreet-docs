//Change header color on scroll
var scrollpos = window.scrollY;
window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;
    if(scrollpos > 10){
        document.body.classList.add("st_header_dark");
    }
    else {
        document.body.classList.remove("st_header_dark");
    }
});


/* hide scenes on responsive start */
function getWidth() {
    if (self.innerWidth) {
      return self.innerWidth;
    }
  
    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }
  
    if (document.body) {
      return document.body.clientWidth;
    }
}

var width  = getWidth();
var scenesEls = document.querySelectorAll('.st_scene_item');
if(width < 768){
    //hide all items
    scenesEls.forEach(item => {
        item.style.display = 'none';
    });

    //show first three items
    scenesEls[0].style.display = 'block';
    scenesEls[1].style.display = 'block';
    scenesEls[2].style.display = 'block';
}

var showMoreEl = document.querySelector('.st_scene_show_more');
showMoreEl.addEventListener('click', function(){
    //hide all items
    scenesEls.forEach(item => {
        item.style.display = 'block';
    });
});
/* hide scenes on responsive end */