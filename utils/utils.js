var pushService = 'git-receive-pack'
var fetchService = 'git-upload-pack'
var service = 'git-upload-pack'

//FIXME determine the following info from the user or if possible from the URL 
var authUsername= 'hmd'
var authEmail = 'hammad.afzali@gmail.com'
var authPassword = "E2ugM4/7dXMEKev8ArN6i2VNmT/xVPgJwThW4ZGKoQ"
//var HOST_ADDR = "http://hmdfsn@localhost:8889"
var HOST_ADDR = "http://localhost:8080"
var PUT_URL = "http://hmd@localhost:8080/a"

var auth = {
	username: authUsername,
	password: authPassword
}

/*Get the change number*/
function get_file_name(url){

	/* split by / and take the latest one*/
	url = url.split("/");
	return url.pop();
}


//find a dictionary key which contains a substring
function findValueByPrefix(object, prefix) {
	for (var property in object) {
		if (object.hasOwnProperty(property) && 
			property.toString().includes(prefix)) {
			return object[property];
		}
	}
}

