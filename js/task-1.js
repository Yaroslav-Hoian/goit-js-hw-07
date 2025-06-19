const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(el => {
    const title = el.querySelector('h2');
    const elementsCount = el.querySelectorAll('ul li');
    
    console.log(`Categoty: ${title.textContent}`);
    console.log(`Elements: ${elementsCount.length}`);
    });
