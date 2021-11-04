const navbar = () => {
     const burger = document.querySelector('.burger');
     const list = document.querySelector('.list');
     const navlinks = document.querySelectorAll('.list li');
      
     // taggle navbar

     burger.addEventListener('click', () => {
          list.classList.toggle('list-active')
        
          
          // animation link
          navlinks.forEach((link, index) => {
               if (link.style.animation) {
                    link.style.animation = ''
               } else {
                    link.style.animation = `imran 0.5s ease forwards ${index / 7 + 0.2}s`
               }
          });
 
          // burger animation
          burger.classList.toggle('toggle');          
     });

}

navbar();

const box = document.getElementById('checkbox');

box.addEventListener('change', function (e) {
     document.body.classList.toggle('dark');
});

