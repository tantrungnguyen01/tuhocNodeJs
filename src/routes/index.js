const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');
const loginRouter = require('./login');
const {expressMiddleware,permissionAll,permissionAdmin} = require('../app/middlewares/ExpressMidd')

function route(app) {
   
    app.use('/index',loginRouter);
   
    app.use('/me',expressMiddleware,permissionAdmin,meRouter);

    app.use('/tintuc',expressMiddleware,permissionAll,newRouter);

    app.use('/courses',expressMiddleware,permissionAdmin,courseRouter);

    app.use('/',expressMiddleware,siteRouter);

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
