// Product Data
const products = [
    {
        id: 1,
        name: "Premium Ball Pens (Box of 50)",
        category: "writing",
        description: "Smooth writing ballpoint pens in blue, black, and red ink",
        price: "₹250/box",
        icon: "✏️"
    },
    {
        id: 2,
        name: "Gel Pens Set (Pack of 24)",
        category: "writing",
        description: "Vibrant color gel pens for smooth writing experience",
        price: "₹480/pack",
        icon: "🖊️"
    },
    {
        id: 3,
        name: "Notebooks A4 (Bundle of 20)",
        category: "school",
        description: "200 pages ruled notebooks with durable covers",
        price: "₹600/bundle",
        icon: "📓"
    },
    {
        id: 4,
        name: "School Geometry Box (Set of 10)",
        category: "school",
        description: "Complete geometry set with compass, ruler, protractor",
        price: "₹350/set",
        icon: "📐"
    },
    {
        id: 5,
        name: "Office File Folders (Pack of 50)",
        category: "office",
        description: "Manila file folders for document organization",
        price: "₹750/pack",
        icon: "📁"
    },
    {
        id: 6,
        name: "Stapler with Staples (Bulk Pack)",
        category: "office",
        description: "Heavy-duty stapler with 1000 staples included",
        price: "₹180/unit",
        icon: "📎"
    },
    {
        id: 7,
        name: "A4 Copy Paper (Ream of 500 sheets)",
        category: "paper",
        description: "Premium white paper for printing and copying",
        price: "₹220/ream",
        icon: "📄"
    },
    {
        id: 8,
        name: "Sticky Notes Assorted (Pack of 12)",
        category: "paper",
        description: "Colorful sticky notes in various sizes",
        price: "₹144/pack",
        icon: "🗒️"
    },
    {
        id: 9,
        name: "Watercolor Paint Set (Box of 24)",
        category: "art",
        description: "Professional watercolor paints with brush",
        price: "₹320/box",
        icon: "🎨"
    },
    {
        id: 10,
        name: "Drawing Sketchbooks (Pack of 10)",
        category: "art",
        description: "A4 size sketchbooks with thick paper",
        price: "₹450/pack",
        icon: "🖼️"
    },
    {
        id: 11,
        name: "Educational Charts (Set of 20)",
        category: "educational",
        description: "Learning charts for mathematics and science",
        price: "₹800/set",
        icon: "📊"
    },
    {
        id: 12,
        name: "Flash Cards Educational (Pack of 100)",
        category: "educational",
        description: "Learning flash cards for alphabet and numbers",
        price: "₹280/pack",
        icon: "🃏"
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const inquiryForm = document.getElementById('inquiryForm');
const faqQuestions = document.querySelectorAll('.faq-question');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupEventListeners();
});

// Render Products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <button class="inquire-btn" onclick="scrollToInquiry('${product.name}')">Inquire</button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'writing': 'Writing Supplies',
        'school': 'School Stationery',
        'office': 'Office Supplies',
        'paper': 'Paper Products',
        'art': 'Art & Craft',
        'educational': 'Educational'
    };
    return names[category] || category;
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter Buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            if (category === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });
    
    // Mobile Menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Inquiry Form Submission
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(inquiryForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        alert('Thank you for your inquiry! We will contact you within 24 hours.');
        inquiryForm.reset();
        
        // In a real application, you would send this to a backend
        console.log('Inquiry submitted:', data);
    });
    
    // FAQ Accordion
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to Inquiry Form
function scrollToInquiry(productName) {
    const inquirySection = document.getElementById('inquiry');
    inquirySection.scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill the message field
    const messageField = document.getElementById('message');
    messageField.value = `I am interested in: ${productName}. Please provide wholesale pricing and availability.`;
}

// Add active class to current section in navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
