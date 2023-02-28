const authenticate=(req,res,next)=>{
 const token=req.headers;
 if(!token){
    res.send({"msg":"Please Login"})
 }else{
    req.user_id="",
    next();
 }
}
module.exports={authenticate}