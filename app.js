function addItem(container, imgPath, imgHoverPath, websiteURL, labelText, priceText, ratingNumber) {
    var item = document.createElement("div");
    item.classList.add("item");
    var img = document.createElement("img");
    img.src = imgPath;
    
    var imgHover = document.createElement("img");
    imgHover.src = imgHoverPath;
    var label = document.createElement("p");
    label.classList.add("label");
    label.innerHTML = labelText;

    var labelBottom = document.createElement("div");
    labelBottom.classList.add("label_bottom");
    var price = document.createElement("p");
    price.classList.add("price");
    price.innerHTML = priceText;
    var rating = document.createElement("p");
    rating.classList.add("hearts");
    rating.innerHTML = " " + "♥ ".repeat(ratingNumber) + "♡ ".repeat(10-ratingNumber);

    
    labelBottom.appendChild(rating);
    labelBottom.appendChild(price);

    var a = document.createElement("a");
    a.classList.add("hover_wrapper");
    a.appendChild(imgHover);
    a.appendChild(label);
    a.appendChild(labelBottom);
    item.appendChild(a);
    
    item.appendChild(img);
    if (websiteURL != null) {
        a.href = websiteURL;
        a.target = "_blank";
        }
    

    container.appendChild(item);
}            
