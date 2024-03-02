const latestPost = async () => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/latest-posts`;
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data[0]);
  const latestPostContainer = document.getElementById("latest-post-container");
  data.forEach((post) => {
    console.log(post);
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
