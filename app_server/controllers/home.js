var renderHomepage = function(req, res, responseBody){
    //res.render is for a specific view
      res.render('homepage',{
      title: 'Кариерен помощник',
      pageHeader: {
        title: 'Кариерен помощник',
        strapline: 'Търсите стаж / работа?'
      },
      sidebar: "Този сайт е създаден към УКЦ ТУ-Габрово с цел да ви помогне да намерите подходящ стаж или работа."
     });
  };
  
  /* GET 'home' page */
  module.exports.homelist = function(req, res){
    renderHomepage(req, res);
  };