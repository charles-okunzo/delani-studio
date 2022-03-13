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
    $('#management').toggle();
  })

  $('#management').click(()=>{
    $('#management').toggle();
    $('#prod-mgt-img').toggle();
  })
})