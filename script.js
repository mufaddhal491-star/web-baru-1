// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika Banana-chipz menu di klik
document.querySelector('#Banana-chipz').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector('#Banana-chipz');

document.addEventListener('click',function (e) { 
    if (!menu.countains(e.target) && !navbarNav.countains(e.target)) {
        navbarNav.classList.remove('active');
    }
});