var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.get('/2b', function (req, res) {
	const fullname = req.query.fullname
	const words = validator(fullname);
  	res.send(validator(req.query.fullname));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



function getWords(str){
	return str.split(" ");
}

function lengthValidator(str){
	//length = getWords(str).length;
	if (getWords(str).length > 3){
		return false;
	}
	return true;
}

function nullValidator(str){
	if (str != ''){
		return true;
	}
	else return false;
}

function digitValidator(str) {
        return /[-\s0-9`~!@#$%^&*()_=+\\|\[\]{};:'",.<>\/?]/;
}



function validator(str){
	if(lengthValidator(str) && nullValidator(str) && digitValidator(str)){
		return getFIO(str);
	}
	return 'Invalid fullname';
}

function getFIO(str){
	const FIO = getWords(str);
	//length = FIO.length;
	if (getWords(str).length == 1) {return FIO[0];}
	else if(getWords(str).length == 2) {return (FIO[1]  + ' ' + FIO[0].charAt(0) + '.');}
	else {return (FIO[2]  + ' ' + FIO[0].charAt(0) + '. ' + FIO[1].charAt(0) + '.');}
}