var loadingBar = document.getElementById("loading-bar"),
    progress = document.getElementById("progress"),
    load = 0,
    intv;


// fake loading start ...
intv = counter(450);

// speed up fake loading after 20s
setTimeout(function() {
  clearInterval(intv);
  intv = counter(150);
}, 20000)

// done loading
window.onload = function() {
  clearInterval(intv);
  intv = counter(10);
  setTimeout(function() {
    clearInterval(intv);
    loadingBar.style.width = "100%";
    progress.innerHTML = "100%";
    setTimeout(function(){
      loadingBar.style.display = "none";
    }, 3000)
  }, 2000);
}

// interval helper
function timer() {
  load = load+1;
  if (load > 99) {
    loadingBar.style.width = "99%";
    progress.innerHTML = "99%";
  } else {
    loadingBar.style.width = load + "%";
    progress.innerHTML = load + "%";
  }
}

function counter(speed) { return setInterval(timer, speed) };
