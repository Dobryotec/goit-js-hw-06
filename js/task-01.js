const categoriesEl = document.getElementById("categories");
const categoriesChildren = categoriesEl.children;
console.log("Number of categories:", categoriesChildren.length);


const itemElements = categoriesEl.getElementsByClassName('item');
for (const itemElement of itemElements) {
    console.log("Category:", itemElement.firstElementChild.textContent);
    console.log("Elements:", itemElement.lastElementChild.children.length);

}

