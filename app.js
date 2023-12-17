$('#inp').keypress(function(e){
    if(e.which===13){
     const TodoText=$('#inp').val();
     $('#List').append(`<li><span><i class="fa-regular fa-trash-can"></i></span> ${TodoText}</li>`);
     $('#inp').val("");
    }

})

$('ul').on('click','li',function(){
    // $(this).css('text-decoration','line-through')
    // $(this).addClass('completed');
    $(this).toggleClass('completed');
});
$('#List').on('click','span',function(e){
    $(this).parent().fadeOut(700,function(){
    $(this).remove();
    });
    e.stopPropagation();//Stop Event Bubbling
})
// $('#plus').on('click','input',function(){
//     $(this).fadeToggle();
// })
$('#plus').click(function(){
    $('#inp').fadeToggle();
})
