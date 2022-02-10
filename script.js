// menu handle 
const menuButton = document.getElementById('menuToggle');
menuButton.addEventListener('click', function(){
    document.getElementById('menuArea').style.display = "flex";
})

const menuClose = document.getElementById('menuClose');
menuClose.addEventListener('click', function(){
    document.getElementById('menuArea').style.display = "none";
})

$(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3000,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString('en');
                                  $(this).text(now);
          },
        }
      );
  });

  $(".countx").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 9000,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString('en');
                                  $(this).text(now);
          },
        }
      );
  });

  
  $(".countz").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 1000,
          easing: "swing",
          step: function (now) {
            now = Number(now).toLocaleString('en');
                                  $(this).text(now);
          },
        }
      );
  });