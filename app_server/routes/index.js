var express = require('express');
var router = express.Router();
var ctrlJobs = require('../controllers/jobs');
var ctrlOthers = require('../controllers/others');
var ctrlHome=require('../controllers/home');
var ctrlInternships = require('../controllers/internships');
//Hачална страница
router.get('/', ctrlHome.homelist);
//Страница "За сайта" 
router.get('/about', ctrlOthers.about);
//Страница "Работа"
router.get('/jobs',ctrlJobs.getAll);
//Страница 'Стажове'
router.get('/internships',ctrlInternships.getInternships);
//Страница с подробности за конкретна обява за стаж
router.get('/internships/:id',ctrlInternships.getDetailedInternship);
//Страница с подробности за конкретна обява за работа
router.get('/jobs/:id',ctrlJobs.getDetailedJob);

module.exports = router;
