const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');
const loginRouter = require('./login');
const ExpressMiddleware = require('../app/middlewares/ExpressMidd');

function route(app) {
   
    app.use('/index',loginRouter);
   
    app.use('/me',ExpressMiddleware,meRouter);

    app.use('/tintuc',ExpressMiddleware,newRouter);

    app.use('/courses',ExpressMiddleware,courseRouter);

    app.use('/',ExpressMiddleware,siteRouter);

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
