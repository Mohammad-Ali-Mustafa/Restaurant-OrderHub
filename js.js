

// Print input value one in two


$(document).ready(function(){

    $(document).keyup(function(){
        let a = $("#fname").val();
        $("#fname1").val(a)
    });
});


$(document).ready(function(){

    $(document).keyup(function(){
        let a = $("#lname").val();
        $("#lname1").val(a)
    });
});


// 


$(document).keyup(function(){
    let a = $("#myform1").val();
    a = Number(a);

    $(".karahi").html(`
                  <td id="itemkarahi">Karahi</td>
                  <td id="quankarahi">${a}</td>
                  <td id="pricekarahi">900 </td>
                  <td id="total">  ${a*900}</td>

    `)



    let b = $("#myform2").val();
    b = Number(b);

    $(".chicken").html(`
                  <td id="itemkarahi">Chicken Manchurian</td>
                  <td id="quankarahi">${b}</td>
                  <td id="pricekarahi">700 </td>
                  <td id="total">  ${b*700}</td>

    `)





    let c = $("#myform3").val();
    c = Number(c);

    $(".zinger").html(`
                  <td id="itemkarahi">Zinger</td>
                  <td id="quankarahi">${c}</td>
                  <td id="pricekarahi">350 </td>
                  <td id="total">  ${c*350}</td>

    `)





    let d = $("#myform4").val();
    d = Number(d);

    $(".rice").html(`
                  <td id="itemkarahi">Singapoorian Rice</td>
                  <td id="quankarahi">${d}</td>
                  <td id="pricekarahi">600 </td>
                  <td id="total">  ${d*600}</td>
                  

    `)



    let total_amount = a*900 + b*700 + c*350 + d*600;
    $(".totalinputvalue").val(total_amount);



    $(".itemsinput").mouseleave(function(){
        $(".totalinputvalue").val("0");
    });

});







$(document).ready(function(){
    $("#myform1").click(function(){
        $(".karahi").show(500);
    });

        $(".itemsinput").mouseleave(function(){
        $(".karahi").hide(500);
    });
});

$(document).ready(function(){
    $("#myform2").click(function(){
        $(".chicken").show(500);
    });

        $(".itemsinput").mouseleave(function(){
        $(".chicken").hide(500);
    });
});

$(document).ready(function(){
    $("#myform3").click(function(){
        $(".zinger").show(500);
    });

        $(".itemsinput").mouseleave(function(){
        $(".zinger").hide(500);
    });
});

$(document).ready(function(){
    $("#myform4").click(function(){
        $(".rice").show(500);
    });

        $(".itemsinput").mouseleave(function(){
        $(".rice").hide(500);
    });
});




$(document).ready(function(){
    $(".itemsinput").mouseleave(function(){
        $("#myform1").val("0");
    });

    $(".itemsinput").mouseleave(function(){
        $("#myform2").val("0");
    });

    $(".itemsinput").mouseleave(function(){
        $("#myform3").val("0");
    });

    $(".itemsinput").mouseleave(function(){
        $("#myform4").val("0");
    });
});




$(document).ready(function(){
    $("#myform1").click(function(){
        $("#myform1").val(" ");
    });

    $("#myform2").click(function(){
        $("#myform2").val(" ");
    });

    $("#myform3").click(function(){
        $("#myform3").val(" ");
    });

    $("#myform4").click(function(){
        $("#myform4").val(" ");
    });
});













