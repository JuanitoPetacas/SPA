function SetAsideActive(title) {
    var navLinks = document.querySelectorAll('.nav-link.link-dark');
    navLinks.forEach(item => {
        if (item.innerText == title) {
            item.classList.replace('bg-light', 'bg-dark');
            item.classList.replace('link-dark', 'link-light');
        };
    });
};
const SetAside = (jsonButtons) => {
    let asideBar = document.getElementById('asideBar');
    jsonButtons.forEach(item => {
        var li = document.createElement('li');
        li.className = 'nav-item';
        var a = document.createElement('a');
        a.className = 'nav-link link-dark text-start fs-5 bg-light rounded-0 px-4';
        a.href = window.location.origin + item.href
        var i = document.createElement('i');
        i.className = `bi ${item.icon} me-3`;
        a.append(i, item.text);
        li.appendChild(a);
        asideBar.appendChild(li);
    });
};

export {
    SetAside,
    SetAsideActive
};