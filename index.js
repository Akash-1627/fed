document.addEventListener("DOMContentLoaded", function () {
  var dialog = document.getElementById("dialog");
  dialog.style.display = "none";
});

function dialog() {
  var dialog = document.getElementById("dialog");
  var content = document.getElementById("dialogContent");

  dialog.style.display = dialog.style.display === "flex" ? "none" : "flex";
  dialog.classList.toggle("dialog");
  content.style.display = content.style.display === "block" ? "none" : "block";
  content.classList.toggle("dialogContent");
}

function dialogClose() {
  var dialog = document.getElementById("dialog");
  var content = document.getElementById("dialogContent");
  dialog.style.display = "none";
  content.style.display = "none";
  dialog.classList.toggle("dialog");
  content.classList.toggle("dialogContent");
}

// no scroll when dialog visible

const dialogContain = document.getElementById("dialog");
const body = document.querySelector("body");
if (dialogContain.style.display !== "none") {
  body.classList.add("no-scroll");
}
dialogContain.addEventListener("transitionend", () => {
  if (dialogContain.style.display === "none") {
    body.classList.remove("no-scroll");
  }
});

//adding dialog functionality

const btn1 = document.getElementById("dialogButton1");
const btn2 = document.getElementById("dialogButton2");
const bottomDialog1 = document.getElementById("bottomDialog1");
const bottomDialog2 = document.getElementById("bottomDialog2");

function addBtn1() {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  bottomDialog1.style.display = "flex";
  bottomDialog2.style.display = "none";
}
function addBtn2() {
  btn2.classList.add("active");
  btn1.classList.remove("active");
  bottomDialog2.style.display = "flex";
  bottomDialog1.style.display = "none";
}

// Adding post and ques javascript below

const postmidp = document.getElementsByClassName("postmid-ans");
const postData = document.getElementById("postData");
const postContainer = document.getElementById("middle");
function postValue(){
  

  let post = createPost();
  postContainer.appendChild(post);
  postData.value = "";
}

function quesValue(){
  let post = createQuestion();
  postContainer.appendChild(post);
  textInput.value = '';
}

function createPost() {
  // e.preventDefault();
  const postdiv = document.createElement("div");
  postdiv.classList.add("post");

  postdiv.innerHTML = ` <div class="post-top">
              <div class="pt">
                <div class="posttop-user">
                  <i class="bx bxs-user-circle"></i>
                </div>
                <div class="posttop-name">
                  <div class="posttopname-name">
                    <h5>Trip O Dell . <span>Follow</span></h5>
                  </div>
                  <div class="posttopname-desig">
                    <p>
                      Worked at Microsoft (company) (2009–2011) .
                      <span>Updated 3y</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="posttop-close"><i class="bx bx-x"></i></div>
            </div>
            <div class="post-mid">
              
              <p class="postmid-ans">
                ${postData.value}
              </p>
              
            </div>
            <div class="post-end">
              <div class="postend-likes">
                <div class="postendlikes-like">
                  <div class="upvote">
                    <i class="bx bx-upvote"></i>
                    <h5>Upvote . 88</h5>
                  </div>
                  <div class="downvote" title="Downvote">
                    <i class="bx bx-downvote"></i>
                  </div>
                </div>
                <div class="postendlikes-comment" title="Comment">
                  <i class="bx bx-message-rounded-dots"></i>
                </div>
                <div class="postendlikes-share" title="Share">
                  <i class="bx bx-share"></i>
                </div>
              </div>
              <div class="postend-menu" title="More">
                <i class="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>`;

  return postdiv;
}

const postmidh4 = document.getElementById("postmid-ques");
const textInput = document.getElementById('textInput');

function createQuestion() {
  // e.preventDefault();
  const postdiv = document.createElement("div");
  postdiv.classList.add("post");

  postdiv.innerHTML = `<div class="post-top">
              <div class="pt">
                <div class="posttop-user">
                  <i class="bx bxs-user-circle"></i>
                </div>
                <div class="posttop-name">
                  <div class="posttopname-name">
                    <h5>Trip O Dell . <span>Follow</span></h5>
                  </div>
                  <div class="posttopname-desig">
                    <p>
                      Worked at Microsoft (company) (2009-2011) .
                      <span>Updated 3y</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="posttop-close"><i class="bx bx-x"></i></div>
            </div>
            <div class="post-mid">
              <h4 class="postmid-ques">
                ${textInput.value}
              </h4> 
            </div>
            <div class="post-end">
              <div class="postend-likes">
                <div class="postendlikes-like">
                  <div class="upvote">
                    <i class="bx bx-upvote"></i>
                    <h5>Upvote . 88</h5>
                  </div>
                  <div class="downvote" title="Downvote">
                    <i class="bx bx-downvote"></i>
                  </div>
                </div>
                <div class="postendlikes-comment" title="Comment">
                  <i class="bx bx-message-rounded-dots"></i>
                </div>
                <div class="postendlikes-share" title="Share">
                  <i class="bx bx-share"></i>
                </div>
              </div>
              <div class="postend-menu" title="More">
                <i class="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
`;

  return postdiv;
}

// Deleting post javascript below
