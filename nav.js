window.onload = function(){
    //==============toggle dropdown button
                    
    function toggleMenu(){
        const isOpen = dropdownMenu.classList.contains('open');
        let burgerMenuIcon = document.querySelector('.burger-btn i');
        let dropdownMenu = document.querySelector('.burger-menu');
        console.log(isOpen);
        dropdownMenu.classList.toggle('.open');
        burgerMenuIcon.classList = isOpen? 'fa-solid fa-xmark' : 'fa-solid-fa-bars'
    }


   

   }

window.addEventListener('scroll', changeBG);

function changeBG(){
    let header = document.querySelector('.nav');
    var scrollval = window.scrollY;
    if(scrollval<=10){
        header.classList.remove('bgColor');
    }
    else{
        header.classList.add('bgColor');
    }
}

    

    var images = new Array(
        "slide-bg/bg-1.jpg",
        "slide-bg/bg-2.jpg",
        "slide-bg/bg-3.jpg",
        "slide-bg/bg-4.jpg",
    );

    var len = images.length;
    var i = 0;

    function slide(){
        let slider = document.getElementById('slider-bg');

        if(i>len-1){
            i=0;
        }
        slider.src = images[i];
        i++;
        setTimeout('slide()', 5000);
    }



  
   
    const nextScroll = document.getElementById('nextScroll');
    const prevScroll = document.getElementById('prevScroll');
    let carousel = document.querySelector('.packages');
    // const firstImg = carousel.querySelectorAll("img")[0];
    // const firstImgWidth = firstImg.clientWidth  + 14;

    let scrollCount = 0;

    nextScroll.addEventListener("click", ()=>{
        prevScroll.style.display = "block"
        carousel.scrollLeft += 500
        console.log(carousel.scrollLeft)
        // if(carousel.scrollLeft>=800){
        //     nextScroll.style.display = "none"
        // }
    });
    prevScroll.addEventListener("click", ()=>{
        nextScroll.style.display = "block"
        carousel.scrollLeft -=500
        console.log(carousel.scrollLeft)
        // if(carousel.scrollLeft<=400){
        //     prevScroll.style.display = "none"
        // }
    });