pageSize = 2;

showPage = function(page) {
    $(".card").hide();
    $(".card").each(function(n) {
        if (n >= pageSize * (page - 1) && n < pageSize * page)
            $(this).show();
    });
}

showPage(1);

$(".pagination li").click(function() {
    $(".pagination li").removeClass("active");
    $(this).addClass("active");
    showPage(parseInt($(this).text()))
});
