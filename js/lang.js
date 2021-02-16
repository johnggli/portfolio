var arrLang = {
  'en': {
    'language': 'English',
    'portfolio': 'Portfolio',
    'about': 'About',
    'contact': 'Contact',
    'portfolioSection1': 'Here are some of my latest work.',
    'portfolioSection2': 'Click on the images to see details'
  },
  'pt': {
    'language': 'Português',
    'portfolio': 'Portfólio',
    'about': 'Sobre',
    'contact': 'Contato',
    'portfolioSection1': 'Aqui estão alguns dos meus últimos trabalhos.',
    'portfolioSection2': 'Clique nas imagens para ver os detalhes'
  }
};

$(function() {
  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function() {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});
