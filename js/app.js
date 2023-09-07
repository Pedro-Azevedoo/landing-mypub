//Navbar transition
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {

  var nav_li_button = document.getElementById("nav-li-btn");
  var nav = document.getElementById("nav");
  var nav_li = document.getElementById("nav-ul");

   
  var c = document.querySelectorAll("#nav-ul .nav-li");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
    c.forEach((clebinho) => {
      clebinho.classList.add("nav2-li");
    });

    nav.classList.add("nav2");
    nav_li.classList.add("nav2-li");
    //btn-nav
    nav_li_button.classList.add("nav2-btn-ex");


  } else {
    //NAV INITIAL (TOP)
    
    c.forEach((props) => {
      props.classList.remove("nav2-li");
    });


    if (nav.classList.contains("nav2")) {
      nav.classList.remove("nav2");

    }
    if (nav_li.classList.contains("nav2-li")) {
      nav_li.classList.remove("nav2-li");

    }

    

    //btn-nav
    if (nav_li_button.classList.contains("nav2-btn-ex")) {
      nav_li_button.classList.remove("nav2-btn-ex");
    }


    // document.getElementById("nav1").style.height = "6rem";
    // document.getElementById("nav1").style.backgroundColor = "rgb(0, 0, 0, 0.05)";
    // document.getElementsByClassName("nav-li").style.color = "#fff";
    // document.getElementById("nav-li2").style.color = "whitesmoke";
    // document.getElementById("nav-li3").style.color = "whitesmoke";
    // document.getElementById("nav-li4").style.color = "whitesmoke";
    // document.getElementById("nav-li5").style.color = "whitesmoke";

    // //btn-nav
    // document.getElementById("nav-li-btn").style.backgroundColor = "whitesmoke";
    // document.getElementById("nav-li-btn").style.width = "17rem";
    // document.getElementById("nav-li-btn").style.fontSize = "1.5rem";
    // document.getElementById("nav-li-btn").style.height = "4rem";
    // document.getElementById("nav-li-btn").style.color = "#111";

  }
}


// // Função Arrow "Role para Baixo"
// $('#arrow').click(function (e) {
//   e.preventDefault();
//   var id = $(this).attr('href'),
//     targetOffset = $(id).offset().top,
//     menuHeight = $('#nav2').innerHeight();

//   $('html, body').animate({
//     scrollTop: targetOffset - menuHeight
//   }, 700);
// });