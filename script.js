const toggleBtn = document.getElementById('toggle-input');
const overviewHeader = document.getElementById('overview-header');

toggleBtn.addEventListener('change', toggleSwitch);

function toggleSwitch() {
    document.body.classList.toggle('light-theme');
    if( toggleBtn.checked) {
        overviewHeader.style.color = "hsl(228, 34%, 66%)";
    } else {
        overviewHeader.style.color = "hsl(0, 0%, 100%);";
    }
    
}
