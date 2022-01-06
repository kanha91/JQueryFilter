// var chk1 = $('#Industry1').val()
// alert(chk1)
// $('#Industry1').click(function()){
//    if ($('#Industry1').is(':checked')) {
//     alert('herds')
// } 
// }


// if ($('#Industry1').is(":checked")){
//     // $('#filterResult .col-sm-6.col-lg-4.col-xl-3').hide()
//     //         $('.Industry1Card').show()

//     alert('hee')
// }
// else{
//             $('#filterResult .col-sm-6.col-lg-4.col-xl-3').show()
//         }

     $('#Industry1').click(function(){
        var chk1 = $('#Industry1').val()
        
        if(chk1 == 'on' ){
            $('#filterResult .col-sm-6.col-lg-4.col-xl-3').hide()
            $('.Industry1Card').show()
            
        }
        else{
            $('#filterResult .col-sm-6.col-lg-4.col-xl-3').show()
        }
     })



     $('#Industry2').click(function(){
        var chk2 = $('#Industry2').val()
        
        if(chk2 == 'on' ){
            $('.Industry2Card').addClass('filactive2')
        }
     })