const app = require('../../server');
let config = require('./config'),
    express = require('express'),
    compress = require('compression'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-overrid'),
    session = require('express-session'),
    passport = require('passport');

    module.exports = function(){
        let appl = express();
        if (process.env.NODE_ENV === 'development'){
            app.use(morgan('dev'));
        }
        else if(process.env.NODE_ENV === 'production'){
            app.use(compress());
        }
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        app.use(methodOverride());

        app.use(session({
            saveUninitialized: true,
            resave: true,
            secret: config.sessionSecret
        }));
        app.set('veiws', './app/views');
        app.set('view engine', 'ejs');

        app.use(passport.initialize());
        app.use(passport.session());

        require('../app.routes/index.server.routes.js')(app);
        require('../app.routes/users.server.routes.js')(app);

        app.use(express.static('./public'));

        return app;
    };