$("button").click(function() {
    let num = $(".bidInput").val();
    $(".bid").text(num);
     $(".placeBid").hide();
     $(".thanks").show(num);
});