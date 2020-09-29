
let express = require('express');
let app = express();
let index=require('./routes/index');
let expressLayouts = require('express-ejs-layouts') // to use EJS layout
app.use(express.static(__dirname + "/public"));
app.use(require('express-partial-templates')(app));
app.set('view engine', 'ejs');
app.get('/', (req, res) =>{
    res.render('index', {foo: 'FOO'});
});

app.use('/',index);
app.use(expressLayouts);
app.listen(process.env.PORT || 3000, function(){
    console.log('Example app is listening on port 3000')
});