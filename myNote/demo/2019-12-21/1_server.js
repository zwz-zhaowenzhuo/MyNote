const http = require('http');//node_moduldes中的文件也不用路径就可以引入
//commonjs规范

/*
    request  请求   ajax  客户端发送的请求
    response 响应   {}
*/
let app = http.createServer(function (request, response) {
    // console.log('来了');
    // console.log(request)
    // /post?user=2
    if (request.url !== '/favicon.ico') {
        let num = (/user=(\d)/.exec(request.url.split('?')[1]))[1];
        console.log(num);
        if (num === '1') {
            response.write('{"name":"hyw"}');
        } else if (num === '0') {
            response.write('{"name":"lilei"}');
        }
        response.end();
    }
});
app.listen(80);  