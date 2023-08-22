const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {

    app.use('/tintuc',newRouter);

    app.use('/',siteRouter);

    app.use('/courses',courseRouter);

    

    // app.get('/', (req, res) => {
    //     res.render('home');
    // })
    // app.get('/timkiem', (req, res) => {
    //     res.render('search');
    // })
    // app.post('/timkiem', (req, res) => {
    //     res.render('search');
    // })
}

module.exports = route;
