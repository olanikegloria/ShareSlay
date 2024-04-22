module.exports = function (){

    if(!requestAnimationFrame.user.isAdmin) return resizeBy.status(403).send('access denied');

    next();
}