  /* JAVASCRIPT PARA A SESSÃO DE PIZZAS */
function showDiv(id) {
  var divs = document.querySelectorAll('div[data-section]');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }
  var selectedDiv = document.querySelector('div[data-section="' + id + '"]');
  selectedDiv.style.display = 'block';

  if (id === 'pizzas') {
    $(".pizzas-slider").slick('setPosition');
  } else if (id === 'bebidas') {
    $(".bebidas-slider").slick('setPosition');
  }
  else if (id === 'sobremesas') {
    $(".sobremesas-slider").slick('setPosition');
  }
  else if (id === 'acompanhamentos') {
    $(".acompanhamentos-slider").slick('setPosition');
  }
  else if (id === 'promocoes') {
    $(".promocoes-slider").slick('setPosition');
  }
}



$(function() {

  /* INICIO JAVASCRIPT PARA A SESSÃO PIZZAS */
  function atualizar_informacoesPizzas() {
    $("#pizzas-name").text($(".pizzas-slider .slick-center").data("name"));
    var pizzasPrice = parseFloat($(".pizzas-slider .slick-center").data("price")).toLocaleString("pt-PT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2
    });
    $("#pizzas-price").text(pizzasPrice);
    $("#pizzas-description").text($(".pizzas-slider .slick-center").data("description"));
  }

  $(".pizzas-slider").on('init', function() {
    atualizar_informacoesPizzas();
  });

  $(".pizzas-slider").on('afterChange', function() {
    atualizar_informacoesPizzas();
  });

  $(".pizzas-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next"),
    responsive: [{
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  /* FIM JAVASCRIPT PARA A SESSÃO PIZZAS */



  /* INICIO JAVASCRIPT PARA A SESSÃO DE BEBIDAS */

  function atualizar_informacoesBebidas() {
    $("#bebidas-name").text($(".bebidas-slider .slick-center").data("name"));
    var bebidasPrice = parseFloat($(".bebidas-slider .slick-center").data("price")).toLocaleString("pt-PT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2
    });
    $("#bebidas-price").text(bebidasPrice);
    $("#bebidas-description").text($(".bebidas-slider .slick-center").data("description"));
  }

  $(".bebidas-slider").on('init', function() {
    atualizar_informacoesBebidas();
  });

  $(".bebidas-slider").on('afterChange', function() {
    atualizar_informacoesBebidas();
  });

  $(".bebidas-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: $("#arrow-prevBEBIDAS"),
    nextArrow: $("#arrow-nextBEBIDAS"),
    responsive: [{
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  /* FIM JAVASCRIPT PARA A SESSÃO DE BEBIDAS */


/* INICIO JAVASCRIPT PARA A SESSÃO DE SOBREMESAS */
function atualizar_informacoesSobremesas() {
  $("#sobremesas-name").text($(".sobremesas-slider .slick-center").data("name"));
  var sobremesasPrice = parseFloat($(".sobremesas-slider .slick-center").data("price")).toLocaleString("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  });
  $("#sobremesas-price").text(sobremesasPrice);
  $("#sobremesas-description").text($(".sobremesas-slider .slick-center").data("description"));
}

$(".sobremesas-slider").on('init', function() {
  atualizar_informacoesSobremesas();
});

$(".sobremesas-slider").on('afterChange', function() {
  atualizar_informacoesSobremesas();
});

$(".sobremesas-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  prevArrow: $("#arrow-prevSOBREMESAS"),
  nextArrow: $("#arrow-nextSOBREMESAS"),
  responsive: [{
    breakpoint: 640,
    settings: {
      slidesToShow: 1
    }
  }]
});
/* FIM JAVASCRIPT PARA A SESSÃO DE SOBREMESAS */


/* INICIO JAVASCRIPT PARA A SESSÃO DE ACOMPANHAMENTOS */
function atualizar_informacoesAcompanhamentos() {
  $("#acompanhamentos-name").text($(".acompanhamentos-slider .slick-center").data("name"));
  var acompanhamentosPrice = parseFloat($(".acompanhamentos-slider .slick-center").data("price")).toLocaleString("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  });
  $("#acompanhamentos-price").text(acompanhamentosPrice);
  $("#acompanhamentos-description").text($(".acompanhamentos-slider .slick-center").data("description"));
}

$(".acompanhamentos-slider").on('init', function() {
  atualizar_informacoesAcompanhamentos();
});

$(".acompanhamentos-slider").on('afterChange', function() {
  atualizar_informacoesAcompanhamentos();
});

$(".acompanhamentos-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  prevArrow: $("#arrow-prevACOMPANHAMENTOS"),
  nextArrow: $("#arrow-nextACOMPANHAMENTOS"),
  responsive: [{
    breakpoint: 640,
    settings: {
      slidesToShow: 1
    }
  }]
});
/* FIM JAVASCRIPT PARA A SESSÃO DE ACOMPANHAMENTOS */


/* INICIO JAVASCRIPT PARA A SESSÃO DE PROMOCOES */
function atualizar_informacoesPromocoes() {
  $("#promocoes-name").text($(".promocoes-slider .slick-center").data("name"));
  var promocoesPrice = parseFloat($(".promocoes-slider .slick-center").data("price")).toLocaleString("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  });
  $("#promocoes-price").text(promocoesPrice);
  $("#promocoes-description").text($(".promocoes-slider .slick-center").data("description"));
}

$(".promocoes-slider").on('init', function() {
  atualizar_informacoesPromocoes();
});

$(".promocoes-slider").on('afterChange', function() {
  atualizar_informacoesPromocoes();
});

$(".promocoes-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  prevArrow: $("#arrow-prevPROMOCOES"),
  nextArrow: $("#arrow-nextPROMOCOES"),
  responsive: [{
    breakpoint: 640,
    settings: {
      slidesToShow: 1
    }
  }]
});
/* FIM JAVASCRIPT PARA A SESSÃO DE PROMOCOES */

// mostra a seção de pizzas ao carregar a página
showDiv('pizzas');
});

 