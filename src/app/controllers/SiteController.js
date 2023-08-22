class SiteController{

    show(req,res,next){
        res.send('sluggggggggggg')
    }
    index(req,res){
        res.render('home');
    }
    search(req,res){
        res.render('search');
        
    }
    
}

module.exports =new SiteController;