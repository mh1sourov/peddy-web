// handle thumsup
const handleThums = (receivedData) =>{
    console.log("clicked", receivedData)
    
}
// load all pet
const loadAllPet = async () => {
  document.getElementById("spinner").classList.remove("hidden");
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pets`
  );
  const data = await response.json();
  const allPets = data.pets;
  if (allPets.length > 0) {
    document.getElementById("spinner").classList.add("hidden");
  }
  const petContainer = document.getElementById("petCardContainer");
  allPets.forEach((pet) => {
    console.log(pet);

    const petCard = document.createElement("petContainer");
    petCard.innerHTML = `
    
                   <div class="cardContainer rounded-lg border-2 border-gray-200">
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure class="p-4">
                      <img class="rounded-md w-[260px] object-cover"
                        src=${pet.image}
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 id="peddyTitle" class="card-title">${
                        pet?.pet_name ?? "Not Available"
                      }</h2>
                      <div class="text-sm text-gray-400 mb-2">
                        <p id="breedName"><i class="fa-solid fa-cubes mr-2"></i>Breed: ${
                          pet?.breed ?? "Not Available"
                        }</p>
                        <p id="birth"><i class="fa-solid fa-cake-candles mr-2"></i>Birth: ${
                          pet?.date_of_birth ?? "Not Available"
                        }</p>
                        <p id="gender"><i class="fa-solid fa-genderless mr-2"></i>Gender: ${
                          pet?.gender ?? "Not Available"
                        }</p>
                        <p id="price"><i class="fa-solid fa-dollar-sign mr-2"></i></i>Price: ${
                          pet?.price ?? "Not Available"
                        }<span>$</span></p>
                        
                      </div>
                      <hr>
                      <div class="my-2 flex justify-between">
                        <button onclick="handleThums('akash')" class="btn"><i class="fa-regular fa-thumbs-up"></i></button>
                        <button class="btn text-[#0E7A81]">Adopt</button>
                        <button class="btn text-[#0E7A81]"></i>Details</button>
                      </div>
                    </div>
                  </div>
               </div>
    
    `;

    petContainer.appendChild(petCard);
  });
};
// load category button
const loadcategoryButton = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/categories`
  );
  const data = await response.json();
  const categoryButtonContainer = document.getElementById(
    "category_button_container"
  );
  data.categories.forEach((category) => {
    const categoryButtonDiv = document.createElement("div");
    categoryButtonDiv.innerHTML = `
  
<button class="w-[200px] h-[60px] border-2 border-[#0e7a811a] rounded-xl hover:bg-[#0e7a811a] font-bold"><div class=" flex items-center justify-center gap-1"><img class="w-[20px]" src=${category.category_icon} alt=""> <p class="font-bold">${category.category}</p></div></button>

  `;
    categoryButtonContainer.appendChild(categoryButtonDiv);
  });
};
loadcategoryButton();
loadAllPet();
