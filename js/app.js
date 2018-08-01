function trigger(){
	var fetch = document.querySelector('#btn').addEventListener('click', function(){
		getApi();
	});
	
}

function getApi() {

    const request = superagent;
    var API_URL = 'https://randomuser.me/api/?results=50';

	request
		.get(API_URL)
		.then(function(response){
			var repos = response.body.results;
			repos.forEach(function(user){
				console.log(user.email);
				console.log(user.nat);
				document.querySelector('.users-list').innerHTML += '<article>' +
            													   '<span>' + user.nat + '</span>' +
            													   '<h6>' + user.email + '</h6>' +
            													   '</article>';
			});
		});
}

trigger();