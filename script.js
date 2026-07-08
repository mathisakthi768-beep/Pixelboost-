// FAQ Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.icon');
        
        // Toggle Active State
        if (content.style.maxHeight && content.style.maxHeight !== "0px") {
            content.style.maxHeight = "0px";
            content.style.paddingBottom = "0px";
            icon.style.transform = "rotate(0deg)";
        } else {
            content.style.maxHeight = content.scrollHeight + 18 + "px";
            content.style.paddingBottom = "18px";
            icon.style.transform = "rotate(180deg)";
        }
    });
});
