

$(document).ready(function(){
    
	
    
    //scroll do menu e botao subir
    var link = $(".navbar-nav li a");
    var btn = $(".btn-subir");
    var header = $(".header");
    var linkFAq = $(".lista-duvidas-left ul li a");
    //var contato = $(".empreendimento-infos a");
    //var empreendimentos = $(".carousel-box a");


    $(window).scroll(function(){
        var posicao = $(this).scrollTop() -60;
        
        if(posicao > 200){
          $(".header").fadeIn().addClass('header-active');
        }else{
          $(".header").removeClass('header-active');
        }

        if(posicao > 700){
          $(".seta-subir").addClass('seta-subir-active');
        }else{
          $(".seta-subir").removeClass('seta-subir-active');
        }
    
    });
    
    // scroll do menu
    link.on('click', function(){
       var seletor = $(this).attr("href");
       var pos = $(seletor).offset().top;
       $("html,body").animate({scrollTop:pos-60}, 1000);
    });
    
     
    // scroll botao subir
    btn.on('click', function(){
        $("html,body").animate({scrollTop: 0}, 1000);
    });


    // abrir e fechar a sessão do F.A.Q
      linkFAq.on('click',function(e){
      e.preventDefault(); 
      
       $(this).parent().find('.answer').slideToggle("300");

      return false;
      
    });


});
