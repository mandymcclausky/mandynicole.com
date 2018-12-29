$(window).bind("load", function () {

    // .tagline .typewrite()
    var tagline = $(".tagline"),
        original = $(tagline).html();
    who = $(tagline).attr("data-who");

    $(tagline).typewrite();

    var write = function (phrase) {
        var span = $("<span></span>");
        tagline.html(span);
        span.text(phrase).typewrite();
    };

    write(original);

    $("header h1").hover(
        function () {
            write(who);
        }, function () {
            write(original);
        }
    );
    // above refactored some with help from Tim Kempf @ kempfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.info

    // .more buttons variables
    var container = $(".details"),
        content = $(".details p"),
        text = $(".more .text"),
        icon = $(".more i");

    // manipulate .more onClick
    function open() {
        $(this).find(".callout").addClass("active");
        $(container).slideDown(300);
        $(content).hide().delay(300).fadeIn(600);
        $(text).text("Close");
        $(icon).attr("class", "icon-close").stop();
        $(this).one("click", close);
    }

    function close() {
        $(this).find(".callout").removeClass("active");
        $(content).fadeOut(200);
        $(container).delay(200).slideUp(400);
        $(text).text("More");
        $(icon).attr("class", "icon-down");
        $(this).one("click", open);
    }

    $("#about #bio").one("click", open);

});