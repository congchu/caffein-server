var express = require('express')

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

// 5000 포트로 서버 오픈
app.listen(5000, function () {
    console.log("start! express server on port 3000")
})

// request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:5000 브라우저에 res.send() 내부의 문자열이 띄워진다.

app.get('/', function (req, res) {
    res.send("<h1>hi friend!</h1>")
})