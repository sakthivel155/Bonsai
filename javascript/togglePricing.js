// togglePricing.js
export function togglePricing() {
    const toggle = document.querySelector('.toggle');
    const year = document.querySelector('.year');
    const month = document.querySelector('.month');
    const billedYearly = document.querySelectorAll('.billed-yearly');
    const changeYearly = document.querySelectorAll('.monthly-yearly');

    toggle.addEventListener('click', function () {
        toggle.classList.toggle('switch');
        year.classList.toggle('opacity');
        month.classList.toggle('opacity');
       
        billedYearly.forEach(card => card.classList.toggle('show'));

        const priceMapping = {
            'starter': ['24', '17'],
            'professional': ['39', '32'],
            'business': ['79', '52'],
            'partner': ['$9', '$90'],
            'bonsaiTax': ['$10', '$100']
        };

        for (const id in priceMapping) {
            const element = document.getElementById(id);
            const currentPrice = element.textContent.trim();
            element.textContent = currentPrice === priceMapping[id][0] ? priceMapping[id][1] : priceMapping[id][0];
        }

        changeYearly.forEach(eachAddOn => {
            eachAddOn.textContent = eachAddOn.textContent.trim() === '/MONTH' ? '/YEAR' : '/MONTH';
        });

        toggleSort();
    });
}

// Sorting functionality
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
