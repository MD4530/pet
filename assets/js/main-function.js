'use strict';

function main() {

    document.addEventListener('DOMContentLoaded', () => {
        let searchImage = document.getElementById('searchImage');
        let searchBox = document.getElementById('searchField');
        searchBox.style.display = 'hidden';
        searchImage.addEventListener('click', searchFunction);
        postManagementFunction();
        postControl();
        postPicVideo();
    });

}

function searchFunction(e) {

    let searchBox = document.getElementById('searchField');
    var windowSize = window.innerWidth;
    if (windowSize <= 897) {
        if (searchBox.className == 'hideSearchBox') {
            let incremental = 0;

            let id = setInterval(function () {
                incremental = incremental + 10
                if (incremental == 250) {
                    clearInterval(id)
                } else {
                    searchBox.style.width = incremental + `px`;
                    searchBox.className = '';
                }
            }, 1);

        } else {
            let decremental = 250;
            let id = setInterval(function () {
                decremental = decremental - 10;

                if (decremental == 0) {
                    clearInterval(id)
                    searchBox.className = 'hideSearchBox';
                } else {
                    searchBox.style.width = decremental + `px`;
                }

            }, 2);

        }
    } else {
        if (searchBox.className == 'hideSearchBox') {
            let incremental = 0;

            let id = setInterval(function () {
                incremental = incremental + 10
                if (incremental == 360) {
                    clearInterval(id)
                } else {
                    searchBox.style.width = incremental + `px`;
                    searchBox.className = '';
                }
            }, 1);


        } else {
            let decremental = 360;
            let id = setInterval(function () {
                decremental = decremental - 10;

                if (decremental == 0) {
                    clearInterval(id)
                    searchBox.className = 'hideSearchBox';
                } else {
                    searchBox.style.width = decremental + `px`;
                }

            }, 2);

        }
    }

}

function postManagementFunction() {
    let userClick = document.querySelectorAll('.postManagement');
    userClick.forEach(item => {
        item.addEventListener('click', (e) => {
            document.getElementById('confirm-modal').className = '';
            disableScrolling();
            document.querySelectorAll('.post_column_container').forEach(item => { item.style.visibility = "hidden" });
            document.getElementById('confirm-modal').addEventListener('click', (d) => {
                if ((d.target.className.length <= 0) == true) {
                    document.getElementById('confirm-modal').className = 'hidden';
                    document.querySelectorAll('.post_column_container').forEach(item => { item.style.visibility = "visible" });
                    enableScrolling();
                }
            })
        });
    });
}

function postControl() {
    document.getElementById('submitUserPost').addEventListener('click', (event) => {
        // 
    })
}

// Scrolling Disable
function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
}

// Scrolling enables
function enableScrolling() {
    window.onscroll = function () { };
}

//upload pic and videos

function postPicVideo() {
    const fileSelect = document.getElementById("fileSelect");
        fileElem = document.getElementById("fileElem");
       

    fileSelect.addEventListener("click", function (e) {
        if (fileElem) {
            fileElem.click();
        }
        e.preventDefault(); // prevent navigation to "#"
    }, false);

    fileElem.addEventListener("change", handleFiles, false);

}

function handleFiles() {
    fileList = document.getElementById("fileList");
    if (this.files.length) {
        fileList.innerHTML = "";
        const list = document.createElement("ul");
        fileList.appendChild(list);
        for (let i = 0; i < this.files.length; i++) {
            const li = document.createElement("li");
            list.appendChild(li);
            const img = document.createElement("img");
            img.src = URL.createObjectURL(this.files[i]);
            img.height = 60;
            img.className='.obj'
            img.onload = function () {
                URL.revokeObjectURL(this.src);
            }
            fileList.appendChild(img);
            sendFiles();
        }
    } else {
        
    }
}

function sendFiles() {
    const imgs = document.querySelectorAll(".obj");
    for (let i = 0; i < imgs.length; i++) {
      new FileUpload(imgs[i], imgs[i].file);
    }
}

function FileUpload(img, file) {
    const reader = new FileReader();
    this.ctrl = createThrobber(img);
    const xhr = new XMLHttpRequest();
    this.xhr = xhr;
  
    const self = this;
    this.xhr.upload.addEventListener("progress", function(e) {
          if (e.lengthComputable) {
            const percentage = Math.round((e.loaded * 100) / e.total);
            self.ctrl.update(percentage);
          }
        }, false);
  
    xhr.upload.addEventListener("load", function(e){
            self.ctrl.update(100);
            const canvas = self.ctrl.ctx.canvas;
            canvas.parentNode.removeChild(canvas);
        }, false);
    xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
    xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
    reader.onload = function(evt) {
      xhr.send(evt.target.result);
    };
    console.log(evt.target.result);

    reader.readAsBinaryString(file);
  }
  
  

main();