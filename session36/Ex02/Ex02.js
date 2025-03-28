document.addEventListener("DOMContentLoaded", function () {
    const foodItems = document.querySelectorAll(".food-item");

    foodItems.forEach(item => {
        const foodId = item.getAttribute("data-id");
        const likeCount = item.querySelector(".likes");
        const likeButton = item.querySelector(".like-btn");

        let likes = localStorage.getItem(foodId) || 0;
        likeCount.textContent = likes;

        likeButton.addEventListener("click", function () {
            likes++;
            likeCount.textContent = likes;
            localStorage.setItem(foodId, likes);
        });
    });
});
