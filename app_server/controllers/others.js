/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('about', {
        title: 'За сайта',
        content: 'Кариерен помощник е уеб сайт, създаден да улеснява взаимодействието на студенти от Технически Университет - Габрово и техни потенциални бъдещи работодатели. Ще бъде използван от Университетски кариерен център към ТУ-Габрово. Разработен е от дипломант Пламен Димитров Розинов като дипломно задание за образователна степен "бакалавър", специалност "Компютърни системи и технологии".'
    });
};