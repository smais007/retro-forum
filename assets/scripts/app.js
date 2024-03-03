const allPosts = async () => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
  const response = await fetch(url);
  const data = await response.json();
  const posts = data.posts;
  // console.log(posts);

  const discussionPosts = document.getElementById("discussion-post");

  posts.forEach((post) => {
    toggleLoadingSpinner(true);
    // console.log(post);
    const activeStatusStyle = post.isActive
      ? "background-color: #10B981;"
      : "background-color: #FF3434;";
    const discussionPostsTemplate = `<div class="flex gap-6 bg-[#F3F3F5] rounded-3xl w-[48.25rem] h-[16.875rem] pt-10 pl-10 pb-11  mb-6">
  <div class="relative w-[75px] h-[75px] flex justify-center items-center">
      <img src="${post.image}" alt=""
          class="w-[72px] h-[72px] rounded-2xl">
      <div class="active-status" style="${activeStatusStyle}"></div>
  </div>
  <div>
      <div class="flex gap-5 pb-3">
          <p class="inter text-sm font-medium  text-[#12132DCC]">#<span>${post.category}</span></p>
          <p class="inter text-sm font-medium  text-[#12132DCC]">Author: <span>${post.author.name}</span></p>
      </div>
      <div>
          <h1 class="mulish font-bold text-xl h1-color pb-4">${post.title}
          </h1>
          <p class="inter p-color text-base w-[35.563rem] leading-6 pb-5">${post.description}</p>
          <hr class="border-dotted">
      </div>
      <div class="flex justify-between items-center pt-5">
          <div class="flex gap-6">
              <div class="flex  gap-3 items-center">
                  <img src="assets/icon/comment.svg" alt="">
                  <p class="inter text-[#12132D99]">${post.comment_count}</p>
              </div>
              <div class="flex  gap-3 items-center">
                  <img src="assets/icon/view.svg" alt="">
                  <p class="inter text-[#12132D99]">${post.view_count}</p>
              </div>
              <div class="flex  gap-3 items-center">
                  <img src="assets/icon/time.svg" alt="">
                  <p class="inter text-[#12132D99]">${post.posted_time}</p>
              </div>
          </div>
          <div>
          <button onclick="updateReadCount('${post.title}', ${post.view_count})" id="read-btn">
  <img src="assets/icon/read.svg" alt="">
</button>
          </div>
      </div>
  </div>
</div>`;

    const discussionCard = document.createElement("div");
    discussionCard.innerHTML = discussionPostsTemplate;
    discussionPosts.appendChild(discussionCard);
  });

  toggleLoadingSpinner(false);
};

// Search by category
const searchCategory = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  searchPosts(searchText);
};

const searchPosts = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`;
  const response = await fetch(url);
  const data = await response.json();
  const posts = data.posts;
  // console.log(posts);

  const discussionPosts = document.getElementById("discussion-post");
  discussionPosts.innerHTML = "";

  posts.forEach((post) => {
    // console.log(post);
    const activeStatusStyle = post.isActive
      ? "background-color: #10B981;"
      : "background-color: #FF3434;";
    const discussionPostsTemplate = `<div class="flex gap-6 bg-[#F3F3F5] rounded-3xl w-[48.25rem] h-[16.875rem] pt-10 pl-10 pb-11  mb-6">
  <div class="relative w-[75px] h-[75px] flex justify-center items-center">
      <img src="${post.image}" alt=""
          class="w-[72px] h-[72px] rounded-2xl">
      <div class="active-status" style="${activeStatusStyle}"></div>
  </div>
  <div>
      <div class="flex gap-5 pb-3">
          <p class="inter text-sm font-medium  text-[#12132DCC]">#<span>${post.category}</span></p>
          <p class="inter text-sm font-medium  text-[#12132DCC]">Author: <span>${post.author.name}</span></p>
      </div>
      <div>
          <h1 class="mulish font-bold text-xl h1-color pb-4">${post.title}
          </h1>
          <p class="inter p-color text-base w-[35.563rem] leading-6 pb-5">${post.description}</p>
          <hr class="border-dotted">
      </div>
      <div class="flex justify-between items-center pt-5">
          <div class="flex gap-6">
              <div class="flex  gap-3 items-center">
                  <img src="assets/icon/comment.svg" alt="">
                  <p class="inter text-[#12132D99]">${post.comment_count}</p>
              </div>
              <div class="flex  gap-3 items-center">
                  <img src="assets/icon/view.svg" alt="">
                  <p class="inter text-[#12132D99]">${post.view_count}</p>
              </div>
              <div class="flex  gap-3 items-center">
                  <img src="assets/icon/time.svg" alt="">
                  <p class="inter text-[#12132D99]">${post.posted_time}</p>
              </div>
          </div>
          <div>
          <button onclick="updateReadCount('${post.title}', ${post.view_count})" id="read-btn">
  <img src="assets/icon/read.svg" alt="">
</button>
          </div>
      </div>
  </div>
</div>`;

    const discussionCard = document.createElement("div");
    discussionCard.innerHTML = discussionPostsTemplate;
    discussionPosts.appendChild(discussionCard);
  });
  toggleLoadingSpinner(false);
};

searchPosts();
allPosts();

// Latest posts
const latestPost = async () => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/latest-posts`;
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data[0]);
  const latestPostContainer = document.getElementById("latest-post-container");
  data.forEach((post) => {
    // console.log(post);
    const poastCard = `<div class="w-[23.375rem] h-[30.125rem] border rounded-3xl p-6">
    <div class=" w-[20.375rem] h-[11.875rem] bg-[#12132D0D] rounded-[20px]">
        <img class="w-[20.375rem] h-[11.875rem] rounded-[20px]" src="${
          post.cover_image
        }" alt="">
    </div>
    <div class="flex items-center gap-2 pt-6">
        <img src="assets/icon/calender.svg" alt="">
        <p class="mulish p-color">${
          post.author.posted_date ? post.author.posted_date : "No publish date"
        }</p>
    </div>
    <div>
        <h1 class="mulish font-bold text-lg h1-color pt-4 pb-3">${
          post.title
        }</h1>
        <p class="mulish p-color">${post.description}</p>
    </div>
    <div class="flex items-center gap-4 pt-4">
        <img class="w-[44px] h-[44px] rounded-[50px]"
            src="${post.profile_image}" alt="">
        <div>
            <h1 class="mulish h1-color font-bold pb-[5px]">${
              post.author.name
            }</h1>
            <p class="mulish p-color text-sm ">${
              post.author.designation ? post.author.designation : "Unknown"
            }</p>
        </div>
    </div>
</div>`;
    const postContainer = document.createElement("div");
    postContainer.innerHTML = poastCard;
    latestPostContainer.appendChild(postContainer);
  });
};
latestPost();

//Loading Spinner
const toggleLoadingSpinner = (loading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (loading) {
    loadingSpinner.classList.remove("hidden");
    setTimeout(() => {
      loadingSpinner.classList.add("hidden");
    }, 2000);
  }
};

// mark as read
let count = 1;
const updateReadCount = (postTitle, viewCount) => {
  const readCount = document.getElementById("read-count");
  readCount.innerHTML = count;
  count++;

  const markAsRead = document.getElementById("mark-as-read");
  const title = document.createElement("p");
  title.innerHTML = postTitle;
  console.log(title.innerHTML);

  const view = document.createElement("p");
  view.innerHTML = viewCount;
  console.log(view.innerHTML);

  const readCard = `<div class="flex justify-center items-center bg-white rounded-2xl p-4 mb-4">
  <p id="post-title" class="w-[13.25rem] mulish h1-color font-semibold leading-6">${title.innerHTML}</p>
  <div class="flex justify-center items-center gap-2">
      <img src="assets/icon/view.svg" alt="">
      <p id="post-view">${view.innerHTML}</p>
  </div>
</div>`;

  const readCardContainer = document.createElement("div");
  readCardContainer.innerHTML = readCard;

  markAsRead.appendChild(readCardContainer);
};
