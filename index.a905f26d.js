!function(){var e=document.createElement("div");e.id="lightbox",document.body.appendChild(e);var t=document.querySelector(".grid");t.addEventListener("click",(function(t){if(t.target.classList.contains("libraryImg")){var a=document.createElement("img");a.src=t.target.src,e.innerHTML="",e.appendChild(a),e.classList.add("active")}})),e.addEventListener("click",(function(t){t.target===t.currentTarget&&e.classList.remove("active")}));var a=[{url:"https://source.unsplash.com/400x400?mountain",alt:"image"},{url:"https://source.unsplash.com/400x400?sea",alt:"image"},{url:"https://source.unsplash.com/400x400?car",alt:"image"},,{url:"https://source.unsplash.com/400x400?landskape",alt:"image"},{url:"https://source.unsplash.com/400x400?ocean",alt:"image"},{url:"https://source.unsplash.com/400x400?beach",alt:"image"},{url:"https://source.unsplash.com/400x400?field",alt:"image"},{url:"https://source.unsplash.com/400x400?mountain",alt:"image"},{url:"https://source.unsplash.com/400x400?skyscreaper",alt:"image"}];document.querySelector(".libraryBtn").addEventListener("click",(function(){a.forEach((function(e){t.insertAdjacentHTML("beforeend","<img src=".concat(e.url,' class="libraryImg"></img>'))}))}))}();
//# sourceMappingURL=index.a905f26d.js.map