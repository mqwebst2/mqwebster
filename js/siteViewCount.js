const apiURL =
  'https://rty7kmnenc.execute-api.us-east-2.amazonaws.com/api/siteViewCount';

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    var count = document.getElementById('visitors-count');
    count.innerHTML = data.body;

    console.log(data);
    console.log(data.body);
  });
