const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  data.data.news_category.forEach((newsItem) => {
    console.log(newsItem.category_name);
    const buttonDiv = document.getElementById("buttonContainer");
    const containerOfButton = document.createElement("div");
    containerOfButton.innerHTML = `
        <button onclick="loadNews('${newsItem.category_id}')">${newsItem.category_name}</button>
        `;
    buttonDiv.appendChild(containerOfButton);
  });
};

const loadNews = async (receive) => {
    console.log(receive);
  const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${receive}`);
  const data = await response.json();
  data.data.forEach((news) => {
    console.log(news);
  });
};

const handleSearch = () =>{
    const inputFieldValue = document.getElementById("input").value;
    loadNews(`${inputFieldValue}`)

    console.log("expected button clicked sourov")
}

loadNews();

loadCategory();
