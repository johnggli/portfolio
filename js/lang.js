var arrLang = {
  'en': {
    'language': 'English',
    'portfolio': 'Portfolio',
    'about': 'About',
    'contact': 'Contact',
    'portfolioSection1': 'Here are some of my latest work.',
    'portfolioSection2': 'Click on the images to see details',
    'aboutText': 'Web Developer 💜 Studying higher education in Technology in Systems Analysis and Development at the Federal Institute of Piauí (IFPI). Enthusiast of the best web & mobile development technologies. I am always open to challenges and constructive feedback. I have an open mind and I learn new things quickly. In love with Ruby on Rails, React, Vue.js and Flutter. "I know it\'s hard, but it won\'t work unless you try!" Let\'s code! 🚀',
    'skills': 'My Skills',
    'myGithub': 'My Github',
  },
  'pt': {
    'language': 'Português',
    'portfolio': 'Portfólio',
    'about': 'Sobre',
    'contact': 'Contato',
    'portfolioSection1': 'Aqui estão alguns dos meus últimos trabalhos.',
    'portfolioSection2': 'Clique nas imagens para ver os detalhes',
    'aboutText': 'Desenvolvedor web 💜 Cursando ensino superior de Tecnologia em Análise e Desenvolvimento de Sistemas no Instituto Federal do Piauí (IFPI). Entusiasta das melhores tecnologias de desenvolvimento web & mobile. Estou sempre aberto a desafios e feedback construtivo. Tenho a mente aberta e aprendo coisas novas rapidamente. Apaixonado por Ruby on Rails, React, Vue.js e Flutter. "Eu sei que é difícil, mas não vai funcionar a menos que você tente!". Bora codar! 🚀',
    'skills': 'Minhas Habilidades',
    'myGithub': 'Meu Github',
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
