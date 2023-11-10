// $(document).ready(function () {
//    $(".container").ready(function () {
//       $.get("./js/json.json", function (datas) {

//          for (var i = 0; i < datas.length; i++) {
//             document.getElementById("li" + datas[i].resource_id).src = datas[i].link;
//          }
//       })
//    })
// }) 


// $(document).ready(function () {
//    $.ajax({
//       type:"get",
//       url:"./json/json.json",
//       dataType:"json",

//       success:function(datas){
//          $(".container").ready(function() {

//             for (var i = 0; i < datas.length; i++) {
//                document.getElementById("li" + datas[i].resource_id).src = datas[i].link;
//             }     
//          })
//        }
//     })
//   })
// 加载完成后执行

$(document).ready(function () {
    $('.ck').hide();
});
function FormShow() {
    $('.ck').show()
}
function FormHide() {
    $('.ck').hide()
}
$('.ck1').hide();
function FormShow1() {
    $('.ck1').show()
}
function FormHide1() {
    $('.ck1').hide()
}
$('.ck2').hide();
function FormShow2() {
    $('.ck2').show()
}
function FormHide2() {
    $('.ck2').hide()
}
$('.ck3').hide();
function FormShow3() {
    $('.ck3').show()
}
function FormHide3() {
    $('.ck3').hide()
}
$('.ck4').hide();

function FormShow4() {
    $('.ck4').show()
}
function FormHide4() {
    $('.ck4').hide()
}

$('.ck5').hide();

function FormShow5() {
    $('.ck5').show()
}
function FormHide5() {
    $('.ck5').hide()
}
function Wc1(){
    $('.ck1').hide(),
    $('.ck2').hide(),
    $('.ck3').hide(),
    $('.ck4').hide(),
    $('.ck5').hide(),
    $('.ck').show()
}
function Wc2(){
    $('.ck').hide(),
    $('.ck2').hide(),
    $('.ck3').hide(),
    $('.ck4').hide(),
    $('.ck5').hide(),
    $('.ck1').show()
}
function Wc3(){
    $('.ck').hide(),
    $('.ck1').hide(),
    $('.ck3').hide(),
    $('.ck4').hide(),
    $('.ck5').hide(),
    $('.ck2').show()
}
function Wc4(){
    $('.ck').hide(),
    $('.ck1').hide(),
    $('.ck2').hide(),
    $('.ck4').hide(),
    $('.ck5').hide(),
    $('.ck3').show()
}
function Wc5(){
    $('.ck').hide(),
    $('.ck1').hide(),
    $('.ck2').hide(),
    $('.ck3').hide(),
    $('.ck5').hide(),
    $('.ck4').show()
}
function Wc6(){
    $('.ck').hide(),
    $('.ck1').hide(),
    $('.ck2').hide(),
    $('.ck3').hide(),
    $('.ck4').hide(),
    $('.ck5').show()
}

