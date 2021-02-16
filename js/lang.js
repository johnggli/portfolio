var arrLang = {
  'en': {
    'portfolio': 'Portfolio',
    'about': 'About',
    'contact': 'Contact'
  },
  'pt': {
    'portfolio': 'Portfólio',
    'about': 'Sobre',
    'contact': 'Contato'
  }
};

$(function() {
  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});
