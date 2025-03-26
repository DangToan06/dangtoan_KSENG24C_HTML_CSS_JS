const addBookmarkBtn = document.querySelector(".add-bookmark-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const saveBtn = document.querySelector(".save-btn");
const bookmarksContainer = document.getElementById("bookmark-list");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function renderBookmarks() {
    bookmarksContainer.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
        const li = document.createElement("li");
        li.classList.add("bookmark");
        li.innerHTML = `
            <span>🔗 <a href="${bookmark.url}" target="_blank">${bookmark.name.toUpperCase()}</a></span>
            <span class="close-btn" data-index="${index}">&times;</span>
        `;
        bookmarksContainer.appendChild(li);
    });
}

addBookmarkBtn.onclick = () => modal.style.display = "flex";

closeModal.onclick = () => modal.style.display = "none";

saveBtn.onclick = () => {
    const websiteName = document.getElementById("website-name").value;
    const websiteURL = document.getElementById("website-url").value;

    if (websiteName && websiteURL) {
        const newBookmark = { name: websiteName, url: websiteURL };
        bookmarks.push(newBookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

        renderBookmarks();
        modal.style.display = "none";

        document.getElementById("website-name").value = "";
        document.getElementById("website-url").value = "";
    }
};

document.onclick = (e) => {
    if (e.target.classList.contains("close-btn")) {
        const index = e.target.getAttribute("data-index");
        bookmarks.splice(index, 1);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        renderBookmarks();
    }
};

renderBookmarks();
