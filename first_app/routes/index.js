module.exports = function Route(app){
  app.get('/', function(req, res){
    res.render('index', {title:'Welcome Page', session_data:req.session});
    console.log(req.session);
  });
  app.post('/process', function(req, res){
    console.log('POST INFO', req.body); //notice that the post information is stored in req.body
    req.session.name = req.body.my_name;
    req.session.email = req.body.email;
    req.session.sessionID = req.sessionID; //unique sessionID for the user
    req.session.save(function() {
       res.redirect('/');
    });
  })
}