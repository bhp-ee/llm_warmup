// ===================================
// Load Markdown Content
// ===================================
async function loadMarkdownContent() {
    const sections = document.querySelectorAll('[data-markdown]');
    
    for (const section of sections) {
        const markdownFile = section.getAttribute('data-markdown');
        
        try {
            const response = await fetch(markdownFile);
            if (!response.ok) throw new Error(`Failed to load ${markdownFile}`);
            
            const markdownText = await response.text();
            const htmlContent = marked.parse(markdownText);
            section.innerHTML = htmlContent;
        } catch (error) {
            console.error(`Error loading ${markdownFile}:`, error);
            section.innerHTML = `<p class="error">Failed to load content from ${markdownFile}</p>`;
        }
    }
    
    // Re-apply active section highlighting after content is loaded
    setTimeout(highlightActiveSection, 100);
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadMarkdownContent();
    initializeToggles();
});

// ===================================
// Mobile Menu Toggle Functionality
// ===================================
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Close sidebar when clicking a link on mobile
const tocLinks = document.querySelectorAll('.toc-link');
tocLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    });
});

// ===================================
// Active Section Highlighting
// ===================================
function highlightActiveSection() {
    const sections = document.querySelectorAll('.content-section');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100; // Offset for better UX
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Throttle function for performance optimization
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll event
window.addEventListener('scroll', throttle(highlightActiveSection, 100));

// Initial highlight on page load
highlightActiveSection();

// ===================================
// Dynamic Table of Contents Generator
// (Optional: Use this if you want to auto-generate TOC from headings)
// ===================================
function generateTableOfContents() {
    const sections = document.querySelectorAll('.content-section');
    const tocList = document.querySelector('.toc ul');
    
    // Clear existing TOC (if you want to regenerate)
    // tocList.innerHTML = '';
    
    sections.forEach((section, index) => {
        const heading = section.querySelector('h2');
        if (heading) {
            const sectionId = section.getAttribute('id');
            const sectionTitle = heading.textContent;
            
            // Uncomment below to auto-generate TOC
            // const li = document.createElement('li');
            // const link = document.createElement('a');
            // link.href = `#${sectionId}`;
            // link.className = 'toc-link';
            // link.textContent = sectionTitle;
            // li.appendChild(link);
            // tocList.appendChild(li);
        }
    });
}

// Call this function if you want to auto-generate TOC
// generateTableOfContents();

// ===================================
// Last Updated Date (Optional Enhancement)
// ===================================
function updateLastModifiedDate() {
    const lastUpdatedSpan = document.getElementById('lastUpdated');
    const lastModified = document.lastModified;
    if (lastModified && lastUpdatedSpan) {
        const date = new Date(lastModified);
        lastUpdatedSpan.textContent = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// Update date on page load
updateLastModifiedDate();

// ===================================
// Smooth Scroll Enhancement
// ===================================
tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 20; // Small offset for padding
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Performance: Lazy Loading Images (if you add images later)
// ===================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call this if you add images with data-src attributes
// lazyLoadImages();

// ===================================
// Keyboard Navigation Enhancement
// ===================================
document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        sidebar.classList.remove('active');
    }
});

// ===================================
// Toggle Functionality for Chapters and TOC
// ===================================
function initializeToggles() {
    // TOC Toggle
    const tocToggles = document.querySelectorAll('.toc-section-header');
    tocToggles.forEach(header => {
        header.addEventListener('click', (e) => {
            // Don't toggle if clicking the link itself
            if (e.target.classList.contains('toc-link')) return;
            
            const tocItem = header.parentElement;
            tocItem.classList.toggle('collapsed');
        });
    });
    
    // Collapse/Expand All Button
    const collapseAllBtn = document.getElementById('collapseAllBtn');
    let allCollapsed = false;
    
    collapseAllBtn.addEventListener('click', () => {
        const tocItems = document.querySelectorAll('.toc-item');
        
        if (allCollapsed) {
            tocItems.forEach(item => item.classList.remove('collapsed'));
            collapseAllBtn.textContent = 'Collapse All';
        } else {
            tocItems.forEach(item => item.classList.add('collapsed'));
            collapseAllBtn.textContent = 'Expand All';
        }
        
        allCollapsed = !allCollapsed;
    });
    
    // Chapter Toggle in Content
    setTimeout(() => {
        makeChaptersCollapsible();
    }, 500); // Wait for content to load
}

function makeChaptersCollapsible() {
    const h2Elements = document.querySelectorAll('.content-section h2');
    
    h2Elements.forEach(h2 => {
        // Wrap content after h2 until next h2 or hr
        let nextElement = h2.nextElementSibling;
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'chapter-content';
        
        // Insert wrapper after h2
        h2.parentNode.insertBefore(contentWrapper, nextElement);
        
        // Move elements into wrapper until we hit another h2, hr, or end
        while (nextElement && nextElement.tagName !== 'H2' && nextElement.tagName !== 'HR') {
            const current = nextElement;
            nextElement = nextElement.nextElementSibling;
            contentWrapper.appendChild(current);
        }
        
        // Add click handler to h2
        h2.addEventListener('click', () => {
            h2.classList.toggle('collapsed');
            contentWrapper.classList.toggle('collapsed');
        });
    });
}

// ===================================
// Console Message (Optional)
// ===================================
console.log('📚 Knowledge Archive Loaded Successfully!');
console.log('💡 Tip: Click on chapter headings or TOC sections to collapse/expand them.');
