function changeActive(event) {
    // Lấy tất cả các phần tử <a> trong menu
    var menuItems = document.querySelectorAll('.menu a');
    
    // Loại bỏ lớp 'active' khỏi tất cả các phần tử <a>
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });
    
    // Thêm lớp 'active' vào phần tử được click
    event.target.classList.add('active');
}
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}