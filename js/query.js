$(document).ready(()=>{

  $('#design-img').click(()=>{
    $('#design-img').toggle();
    $('#design').toggle();
  })
  $('#design').click(()=>{
    $('#design').toggle();
    $('#design-img').toggle();
  })
})