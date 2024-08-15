// hoverTemplates.js
import { templateContent, generateHTML } from './templateContent.js';

export function hoverTemplates() {
    document.addEventListener('DOMContentLoaded', function() {
        const listItems = document.querySelectorAll('.dropdown-templates-list .template-list');
        
        listItems.forEach(item => {
            const chevron = item.querySelector('.template-right-chevron');
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
}
