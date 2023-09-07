function startGif(idName) {
  //   var gifArray = createGifArray(idName);
  // coZnsole.log(gifArray);
  //   console.log(idName);
  var lastFour = idName.substr(idName.length - 4);
  // console.log(lastFour);

  if (lastFour == 'copy'){
    var albumName = idName.substring(0, idName.length - 4);
    // console.log(albumName);
  }
  else{
    var albumName = idName;
    // console.log(albumName);
  }

  var imgCatch = document.getElementById(idName);
  //   console.log(imgCatch)
  var counter = 1;

  function changer() {
    var gifArray = createGifArray(albumName);
    // console.log(counter);
    // console.log(gifArray[counter]);
    imgCatch.src = gifArray[counter];
    counter++;
    if (counter === 25) {
      clearInterval(i);
    }
  }
  var i = setInterval(changer, 60);

  imgCatch.addEventListener("mouseout", function () {
    clearInterval(i);
  });

  // Start a new timer when mouse out
  //   imgCatch.addEventListener("mouseover", function () {
  //     i = setInterval(changer(), 200);
  //   });
}

function oldPicture(idName) {
  var lastFour = idName.substr(idName.length - 4);
  // console.log(lastFour);

  if (lastFour == 'copy'){
    var albumName = idName.substring(0, idName.length - 4);
    // console.log(albumName);
  }
  else{
    var albumName = idName;
    // console.log(albumName);
  }


  var oldPicture = albumName + "/0.png";
  var imgCatch = document.getElementById(idName);
  imgCatch.src = oldPicture;
}

function createGifArray(albumName) {
  var tmpGifArray = [];
  for (var i = 0; i < 25; i++) {
    let strI = i.toString();
    tmpGifArray.push(albumName + "/" + strI + ".png");
  }

  return tmpGifArray;
}


function openInfo(albumName){
  document.getElementById("album-info").style.visibility = "visible";

  var img = document.getElementById("album-info-img")
  var picture = albumName + "/24.png";
  img.src = picture;

  fetch('./dataSet.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.log(data.Albums)
                // console.log(String(albumName))
                
                appendData(data);
            })
            .catch(function (err) {
                console.log('errordddd: ' + err);
            });
        function appendData(data) {
        
          function isAlbum(album){
            return album.albumName === albumName;
          }

          console.log(data.Albums.find(isAlbum));

            var mainContainer = document.getElementById("album-info-tracklist");
            mainContainer.innerHTML = ""
            for (var i = 0; i < data.Albums.find(isAlbum).trackList.length; i++) {
                var div = document.createElement("p");
                div.innerHTML = data.Albums.find(isAlbum).trackList[i];
                mainContainer.appendChild(div);
            }
        }
}

function closeInfo(albumName){
  document.getElementById("album-info").style.visibility = "hidden";

}