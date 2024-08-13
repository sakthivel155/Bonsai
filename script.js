// hover show feature template
const templateContent = {
    'Contract Templates': {
        header: 'Featured Contract Templates',
        cards: [
            'Free Contract Maker',
            'Social Media Management Contract Template',
            'Graphic Design Contract Template',
            'Digital Marketing Contract Template'
        ]
    },
    'Proposal Templates': {
        header: 'Featured Proposal Templates',
        cards: [
            'Graphic Design Proposal Template',
            'Business Proposal Template',
            'Brand Ambassador Proposal Template',
            'Data Entry Proposal Letter Template'
        ]
    },
    'Invoice Templates': {
        header: 'Featured Invoice Templates',
        cards: [
            'Social Media Invoice Templates',
            'Contractor Invoice Template',
            'Web Design Invoice Template',
            'Influencer Invoice Template'
        ]
    },
    'Agreement Templates': {
        header: 'Featured Agreement Templates',
        cards: [
            'Influencer Agreement Template',
            'Influencer Collaboration Agreement Template',
            'Monthly Retainer Agreement Template',
            'Writer Agreement Template'
        ]
    },
    'Quote Templates': {
        header: 'Featured Quote Templates',
        cards: [
            'Web Design Quotation Template',
            'Interior Design Quotation Template',
            'Digital Marketing Quotation Template',
            'Video Production Quotation Template'
        ]
    },
    'Scope of Work Templates': {
        header: 'Featured Scope of Work Templates',
        cards: [
            'Website Development Scope of Work Template',
            'Digital Marketing Scope of Work Template',
            'Consultant Scope of Work Template',
            'Interior Design Scope of Work Template'
        ]
    },
    'Brief Templates': {
        header: 'Featured Brief Templates',
        cards: [
            'Design Brief Template',
            'Architecture Design Brief',
            'Fashion Design Brief',
            'Creative Brief Template'
        ]
    }
};
function generateHTML(content) {
    const cardsHTML = content.cards.map(card => `<div class="templete-card">${card}</div>`).join('');
    return `
        <div class="templete-right-content-header">${content.header}</div>
        <div>${cardsHTML}</div>
        ${content.header !== 'Featured Brief Templates' ? '<div class="show-more">See All Templates</div>' : ''}
    `;
}

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


// when hover  the dropdown-nav-link show the right-chevron 
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.dropdown-templetes-list .template-list');
    
    listItems.forEach(item => {
        const chevron = item.querySelector('.templete-right-chevron');
        const templateName = item.textContent.trim();
        const featureTemplate = document.getElementById('featureTemplates');
        item.addEventListener('mouseenter', () => {
            chevron.classList.add('visible');
            if (templateContent.hasOwnProperty(templateName)) {
                featureTemplate.innerHTML = generateHTML(templateContent[templateName]);
            }
        });
        
        
     
        
        item.addEventListener('mouseleave', () => {
            chevron.classList.remove('visible');
        });
    });
});

// mobile navbar slide window
// const mobileNavbar = document.querySelector('.mobile-navbar');

// document.addEventListener('DOMContentLoaded',()=>{
    //     menuIcon.addEventListener('click',()=>{
        //         mobileNavbar.style.display = mobileNavbar.style.display === 'none' ? 'block' : 'none';
        //     })
        // })
        
        
        const menuIcon = document.querySelector('.menu-btn');
        const navBar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', function(){
            navBar.classList.toggle('active')
        })


