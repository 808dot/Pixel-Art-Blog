function startGif(albumName) {
  //   var gifArray = createGifArray(albumName);
  // console.log(gifArray);
  //   console.log(albumName);
  var imgCatch = document.getElementById(albumName);
  //   console.log(imgCatch)

  var counter = 1;

  function changer() {
    var gifArray = createGifArray(albumName);
    console.log(counter);
    console.log(gifArray[counter]);
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

function oldPicture(albumName) {
  var oldPicture = albumName + "/0.png";
  var imgCatch = document.getElementById(albumName);
  imgCatch.src = oldPicture;
  console.log("XDD");
}

function createGifArray(albumName) {
  var tmpGifArray = [];
  for (var i = 0; i < 25; i++) {
    let strI = i.toString();
    tmpGifArray.push(albumName + "/" + strI + ".png");
  }

  return tmpGifArray;
}
