function errHandling(err, req, res, next){
    if(err || res.statusCode >= 400){
        res.json({
            status: err.status || res.statusCode || 500,
            msg: "An error occured. Please try again in a moment."
        })
    }else{
        next()
    }
}

export{
    errHandling
}