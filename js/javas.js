let bar = document.getElementById("arrow-up");
let sectionimg = document.querySelector("about");
let imgslid = document.getElementById("img-slid");
let slid1 = document.getElementById("slid1");
let slid2 = document.getElementById("slid2");
let ull = document.querySelector("ainmate ");
let sectionbar= document.querySelector("slid-bar");
  

window.onscroll =function(){
    if(scrollY >= 5){
        bar.style.display ='block';
    }else{
        bar.style.display ='none'
    }
    if(scrollY >= sectionimg + 600){
        imgslid.style.left ="0";
        
    }
    if(scrollY >= sectionbar + 1100 ){
      slid1.style.left='0';
    }
    if(scrollY >= sectionbar + 1100){
        slid2.style.left='0';
      }

};

bar.addEventListener('click',function(){
    window.scroll(0,0);
});

