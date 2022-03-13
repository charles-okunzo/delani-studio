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
    $('#overlay2').slideDown(1000);
  }, ()=>{
    $('#m-ontario-txt').fadeOut(1000)
    $('#overlay2').slideUp(1000)
  })

  $('#o-mystiry').hover(()=>{
    $('#o-mystiry-txt').fadeIn(1000);
    $('#overlay3').slideDown(1000);
  }, ()=>{
    $('#o-mystiry-txt').fadeOut(1000)
    $('#overlay3').slideUp(1000)
  })

  $('#j-carrey').hover(()=>{
    $('#j-carrey-txt').fadeIn(1000);
    $('#overlay4').slideDown(1000);
  }, ()=>{
    $('#j-carrey-txt').fadeOut(1000)
    $('#overlay4').slideUp(1000)
  })

  $('#elena').hover(()=>{
    $('#elena-txt').fadeIn(1000);
    $('#overlay5').slideDown(1000);
  }, ()=>{
    $('#elena-txt').fadeOut(1000)
    $('#overlay5').slideUp(1000)
  })

  $('#converter').hover(()=>{
    $('#converter-txt').fadeIn(1000);
    $('#overlay6').slideDown(1000);
  }, ()=>{
    $('#converter-txt').fadeOut(1000)
    $('#overlay6').slideUp(1000)
  })

  $('#burned-l').hover(()=>{
    $('#burned-l-txt').fadeIn(1000);
    $('#overlay7').slideDown(1000);
  }, ()=>{
    $('#burned-l-txt').fadeOut(1000)
    $('#overlay7').slideUp(1000)
  })

  $('#g-restaurant').hover(()=>{
    $('#g-restaurant-txt').fadeIn(1000);
    $('#overlay8').slideDown(1000);
  }, ()=>{
    $('#g-restaurant-txt').fadeOut(1000)
    $('#overlay8').slideUp(1000)
  })

  $('form').submit(()=>{
    let userName= $('#user-name').val();
    alert(`Success! Dear ${userName}, Your response has been received. Thank you for contacting Delani Studio.`)
  })


  
})