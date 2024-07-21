// Select all items with .list-item and .dropdown-item classes
const items = document.querySelectorAll('.list-item, .dropdown-item');

// Initialize accordion functionality
accordion(items);

function accordion(items) {
    items.forEach((item) => {
        item.addEventListener('click', function () {
            items.forEach((i) => {
                if (i !== this && i.classList.contains('show')) {
                    i.classList.remove('show');
                }
            });
            this.classList.toggle('show');
        });
    });
}

// toggle function
const toggle = document.querySelector('.toggle');
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const billedYearly = document.querySelectorAll('.billed-yearly');
const changeYearly = document.querySelectorAll('.monthly-yearly');

toggle.addEventListener('click', function () {
    toggle.classList.toggle('switch');
    year.classList.toggle('opacity');
    month.classList.toggle('opacity');
   
    billedYearly.forEach((card) => {
        card.classList.toggle('show');
    });

    document.getElementById('starter').textContent = document.getElementById('starter').textContent.trim() === '24' ? '17' : '24';
    document.getElementById('professional').textContent = document.getElementById('professional').textContent.trim() === '39' ? '32' : '39';
    document.getElementById('business').textContent = document.getElementById('business').textContent.trim() === '79' ? '52' : '79';
    
    
    
    document.getElementById('partner').textContent = document.getElementById('partner').textContent.trim() === '$9' ? '$90' : '$9';
    document.getElementById('bonsaiTax').textContent = document.getElementById('bonsaiTax').textContent.trim() === '$10' ? '$100' : '$10';
    changeYearly.forEach((eachAddOn) => {
        eachAddOn.textContent = eachAddOn.textContent.trim() === '/MONTH' ? '/YEAR' : '/MONTH';
    });

    toggleSort();


});

//sort the add-on acsending
let isAscending = true;

function toggleSort() {
  isAscending = !isAscending;
  sortAddOns(isAscending);
}
function sortAddOns(isAscending = true) {
  const addOnsContainer = document.querySelector('.add-ons');
  const addOnsCards = Array.from(addOnsContainer.children);

  addOnsCards.sort((a, b) => {
    const priceA = a.querySelector('.add-ons-price div').textContent;
    const priceB = b.querySelector('.add-ons-price div').textContent;
    
    const valueA = priceA === 'Free' ? 0 : parseFloat(priceA.replace('$', ''));
    const valueB = priceB === 'Free' ? 0 : parseFloat(priceB.replace('$', ''));
    
    return isAscending ? valueA - valueB : valueB - valueA;
  });

  addOnsCards.forEach(card => addOnsContainer.appendChild(card));
}
