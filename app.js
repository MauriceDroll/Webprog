const routes = {
    '/': startseite,
    '/timer': timer,
    '/locator': locator,
    '/statistik': statistik,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    rootDiv.innerHTML = routes[pathname];
    window.onpopstate = () => {
        rootDiv.innerHTML = routes[window.location.pathname]
    }
};

function showButtons() {
    document.getElementById("admin").setAttribute("hidden", "");
    document.getElementById("fillDatabase").removeAttribute("hidden");
    document.getElementById("dropDatabase").removeAttribute("hidden");
}

