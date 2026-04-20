// 1. Ma'lumotlarni yuklash funksiyasi
function getRecipes() {
    const data = localStorage.getItem('soglom_ovqat_baza');
    return data ? JSON.parse(data) : [
        { 
            title: 'Tuxum', 
            time: '10 min', 
            cal: 77, 
            tags: 'breakfast', 
            img: 'https://data.daryo.uz/media/2024/04/05/0000000000000000-jozFl3Pm.jpg',
            desc: 'A vitamin — 6 foiz; Foliy kislotasi — 5 foiz; B5 vitamini — 7 foiz; B12 vitamini — 9 foiz; Fosfor — 9 foiz; Selen — 22 foiz.' 
        }
    ];
}

// 2. Ma'lumotlarni saqlash funksiyasi
function saveRecipes(recipes) {
    localStorage.setItem('soglom_ovqat_baza', JSON.stringify(recipes));
}

// 3. HTML kartochka yaratish funksiyasi (Hamma joyda bir xil ko'rinishi uchun)
function createRecipeCard(recipe) {
    return `
        <div class="box">
            <img src="${recipe.img}" alt="${recipe.title}">
            <h4>${recipe.title}</h4>
            <p>${recipe.desc}</p>
            <div style="margin-top:10px; font-size:12px; color:#4CAF50;">
                <b>${recipe.time} | ${recipe.cal} kcal</b>
            </div>
        </div>
    `;
}