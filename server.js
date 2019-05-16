const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
var cors = require('koa2-cors');
const controller = require('./controller');
const app = new Koa();
app.use(cors());

app.use(bodyParser());


app.use(controller());
// add router middleware:

console.log(`\n==> 🌎  Listening on port 3000. Open up http://localhost:3000/ in your browser.\n`)
app.listen(3000);