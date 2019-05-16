var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fn_signin = async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};

var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};


var fn_testGet = async (ctx, next) => {
    console.log(ctx.query)
    ctx.response.body = {
        status:200,
        fuck:"奥斯卡来得及和"
    };
};

var fn_testPost = async (ctx, next) => {
    console.log(ctx.query)
    ctx.response.body = {
        status:203,
        fuck:"在咋子"
    };
};


module.exports = {
    'GET /': fn_index,
    'GET /hello/:name': fn_hello,
    'GET /test': fn_testGet,
    'POST /signin': fn_signin,
    'POST /testPost': fn_testPost,
};