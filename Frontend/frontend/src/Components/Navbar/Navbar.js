import React, { useCallback, useEffect, useState, useRef } from "react";
import "./Navbar.css";
import $ from "jquery";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  /*
  const myRef = useRef()
  useEffect(()=>{
    const divElemet = myRef.current
    console.log(divElemet)
  })
 */

  const [show, setShow] = useState(true);
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setShow(true);
      } else if (y < window.scrollY) {
        setShow(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      console.log(this)
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
       
    });
  }
  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);
 


  
  const [position, setPosition] = useState();
const listenScroll = ()=>{
  const window= document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = window /height
  setPosition(scrolled)
}


$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
 
});
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu-center ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}






/*
function animationWithScroll() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
    
  });
  $("#navbarSupportedContent").on("scroll", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    console.log(this)
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
  useEffect(()=>{
    window.addEventListener('scroll',listenScroll)
 
    $('#navbarSupportedContent ul li').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));


      $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
    
    })


    if((position*1000)>=0 && (position*1000)<= 300){
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
    }
    else if((position*1000)>303 && (position*1000)<= 763){
      animationWithScroll();
          console.log("Destination ")
    } else if((position*1000)>770 && (position*1000)<= 990){
          console.log("Service ")
    }else if((position*1000)>996 && (position*1000)<= 1000){
          console.log("Footeer ")
    }
 
  }
  )
 

*/

 

  return (
    <nav className={` ${show && "navbar navbar-expand-lg navbar-mainbg"} `}>
      <HashLink smooth to="/#MainSection" className="navbar-brand navbar-logo">
        Rapid OUEDZEM
      </HashLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active" id="a">
            <HashLink  className="nav-link" smooth to="/#MainSection">
              <i className="fas fa-tachometer-alt"></i>Home
            </HashLink>
          </li>
          <li className="nav-item" id="b" >
            <HashLink smooth to="/#Services" className="nav-link">
              <i className="far fa-clone"></i>Services
            </HashLink>
          </li>
          <li className="nav-item" id="c">
            <HashLink smooth to="/testimonial" className="nav-link" exact>
              <i className="far fa-chart-bar"></i>Testimonial
            </HashLink>
          </li>
          <li className="nav-item"id="d" >
            <HashLink smooth className="nav-link" to="/#About">
              <i className="far fa-copy"></i>Contact Us
            </HashLink>
          </li>
          <li className="nav-item"id="e">
            <HashLink  smooth className="nav-link" to="/#About">
              <i className="far fa-address-book"></i>About
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
