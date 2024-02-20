import { elements } from "./helpers.js";
// api'den gelenn sonuçları ekrana aktarır
export const renderResult = (recipes) => {
  //   console.log(recipes);
  elements.resultsList.innerHTML = "";
  recipes.slice(0, 10).forEach((recipe) => {
    console.log(recipe);
    const markup = `
    <a href="#${recipe.recipe_id}" class="result-link">
        <img src="${recipe.image_url}" alt="" />
        <div class="data">
        <h4>${recipe.title}</h4>
        <p>${recipe.publisher}</p>
        </div>
    </a>
    `;
    // oluşturduğumuz html'i ilgili yere gönderme
    // elements.resultsList.innerHTML += markup;
    elements.resultsList.insertAdjacentHTML("beforeend", markup);
  });
};
// ekran yüklenme gifi
export const renderLoader = (parent) => {
  console.log(parent);
  // loader HTML hazırlama
  const loader = `
        <div class="loader">
            <img src="./images/foodGif.gif" alt="" />
        </div>
  `;
  // loader'ı bize gelen html elemanının içerisine gönderme
  parent.insertAdjacentHTML("afterbegin", loader);
};