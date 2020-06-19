exports.pageNotFound = (req,res,next)=>{
    // res.status(404).sendFile(path.join(basePath,'views','errors','404.html'));
    res.status(404).render('errors/404',{
        pageTitle : '404 Page Not Found',
        path: ''
    });
};