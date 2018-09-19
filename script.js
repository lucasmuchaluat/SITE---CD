document.addEventListener('DOMContentLoaded', function() {

	let db = connect('https://portfolio-f1d2f.firebaseio.com/')

	let params = extract()

	let path = '/'

	db.download(path, function(data) {

		replace('body', {
    		'name': data['name'],
    		'goals': data['goals'],
    	})
  	})
})