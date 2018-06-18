var demo = document.getElementById('demo');

var myRequest = new Request('starbucks_new_york.json');
var res,
  text = '';
res = fetch(myRequest)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (i = 0; data[i]; i++) {
      document.querySelector('.modal-body-content').innerHTML = data[i].street;
      
    }
    return (demo.innerHTML = text);
  });
