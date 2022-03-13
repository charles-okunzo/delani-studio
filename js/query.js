$(document).ready(()=>{

  $('#design-img').click(()=>{
    $('#design-img').toggle();
    $('#design').toggle();
  })

  $('#design').click(()=>{
    $('#design').toggle();
    $('#design-img').toggle();
  })

  $('#dev-img').click(()=>{
    $('#dev-img').toggle();
    $('#development').toggle();
  })

  $('#development').click(()=>{
    $('#development').toggle();
    $('#dev-img').toggle();
  })

  $('#prod-mgt-img').click(()=>{
    $('#prod-mgt-img').toggle();
    $('#p-management').toggle();
  })

  $('#p-management').click(()=>{
    $('#p-management').toggle();
    $('#prod-mgt-img').toggle();
  })

  $('#b-expanse').hover(()=>{
    $('#b-expanse-txt').fadeIn(1000);
    $('#overlay1').slideDown(1000);
  }, ()=>{
    $('#b-expanse-txt').fadeOut(1000);
    $('#overlay1').slideUp(1000);
  })

  $('#m-ontario').hover(()=>{
    $('#m-ontario-txt').fadeIn(1000);
    $('#m-ontario-txt').addClass('ontario-wrap');
  }, ()=>{
    $('#m-ontario-txt').fadeOut(1000)
  })
})