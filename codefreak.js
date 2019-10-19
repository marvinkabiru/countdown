// (document).ready (function() {
//     var time=(".time") .text();
//     var interval= setInterval(function(){
//         var count= time.split(':');
//         var hour= count[0];
//         var min= count[1];
//         var sec= count[2];
//         var counter= $(".time").find(span);
//         counter.eq(0).text(hour);
//         counter.eq(1).text(min);
//         counter.eq(2).text(sec);
//         if (hour == 0 && min == 0){
//             $(".timer").css("color", "red");
//         }
//         if (sec == 0){
//             if (min != 0){
//                 counter.eq(1).text(min--);
//                 sec=0;
//             }
//             else if (min == 0 && hour !=0){
//                 counter.eq(0).text(hour--);
//                 counter.eq(1).text(min = 59);
//                 sec = 59;
//             }
//             else if (hour ==0 && min == 0 & sec == 0){
//                 counter.eq(2).text(sec = 0);
//             }
//         }
//         counter.eq(0).text(hour);
//         counter.eq(1).text(min);
//         counter.eq(2).text(sec);
//         time = counter.eq(0).text()+":" +counter.eq(1).text()+":" +counter.eq(2).text();
//         if (hour == 0 && min == 0 && sec == 0){
//             clearInterval(interval);
//             alert("Time is Up");
//         }

//     },1000);
// });