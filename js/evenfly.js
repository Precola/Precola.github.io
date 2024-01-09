//========================
//CUSTOM SCROLLBAR
//========================
$(document).ready(function () {
        $("html").niceScroll({
            mousescrollstep: 70,
            cursorcolor: "#2ca8f5",
            cursorwidth: "6px",
            cursorborderradius: "5px",
            cursorborder: "none",
        });
        $(".social fa fa-facebook").attr('contenteditable', 'true');
        $(".col-sm-1").attr('contenteditable', 'true');
        $(".col-sm-2").attr('contenteditable', 'true');
        $(".col-sm-11").attr('contenteditable', 'true');
        $(".col-md-4 mainright").attr('contenteditable', 'true');
        $(".row").attr('contenteditable', 'true');
        $(".progress-bar progress-bar-info").attr('contenteditable', 'true');
        $(".sr-only").attr('contenteditable', 'true');
        $(".container").attr('contenteditable', 'true');
        $(".sub").attr('contenteditable', 'true');
        
  }

);


//========================
//SMOOTHSCROLL
//========================
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
