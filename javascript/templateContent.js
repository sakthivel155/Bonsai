// templateContent.js
export const templateContent = {
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

export function generateHTML(content) {
    const cardsHTML = content.cards.map(card => `<div class="template-card">${card}</div>`).join('');
    return `
        <div class="template-right-content-header">${content.header}</div>
        <div>${cardsHTML}</div>
        ${content.header !== 'Featured Brief Templates' ? '<div class="show-more">See All Templates</div>' : ''}
    `;
}
