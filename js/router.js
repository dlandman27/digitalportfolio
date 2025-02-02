$(document).on("click", ".nav-item", function(e) {
    $(this).addClass('active');
    $('.nav-item').not(this).removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
    route();
});

const routes = {
    404: {
        template: "templates/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "templates/about.html",
        title: "Dylan Landman | About",
        nav_element: "#about",
        description: "This is the home page",
    },
    "/resume": {
        template: "templates/resume.html",
        title: "Dylan Landman | Resume",
        nav_element: "#resume",
        description: "This is the resume page",
    },
    "/portfolio": {
        template: "templates/portfolio.html",
        title: "Dylan Landman | Portfolio",
        nav_element: "#portfolio",
        description: "This is the portfolio page",
    },
    "/contact": {
        template: "templates/contact.html",
        title: "Dylan Landman | Contact",
        nav_element: "#contact",
        description: "This is the contact page",
    },
    "/newsletter": {
        template: "templates/newsletter.html",
        title: "Dylan Landman | Newsletter",
        nav_element: "#newsletter",
        description: "This is the newsletter page",
    },
};

const route = (event) => {
    event = event || window.event; // get window.event if event argument not provided
    // event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};

const locationHandler = async () => {
    let location = window.location.hash.replace('#', ''); // get the hash path
    console.log('location', location);

    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    console.log('location', location);
    const route = routes[location] || routes["404"];
    
    // Highlight the active nav item based on the current route
    if(location !== '/'){
        $('.nav-item').removeClass('active'); // Remove active class from all nav items
        $(`.nav-item a[href="/#${location}"]`).parent().addClass('active'); // Add active class to the parent of the matching nav-link
    } else {
        $(`.nav-item a[href="/"]`).parent().addClass('active');
    }

    // get the html from the template
    try {
        const html = await fetch(route.template).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        });
        // set the content of the content div to the html
        document.getElementById("content").innerHTML = html;
        // set the title of the document to the title of the route
        document.title = route.title;
    } catch (error) {
        console.error('Error fetching the template:', error);
        document.getElementById("content").innerHTML = `
        <div class="portfolio-container">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
                <div class="spin d-flex justify-content-center align-items-center mb-3">
                    <i class="icon ion-md-square-outline text-primary" style="font-size: 64px;"></i>
                </div>
                <h1>Coming Soon</h1>
                <p class="text-center">This page is under construction. Please check back soon.</p>
            </div>
        </div>
        `;
    }
};

$(document).ready(() => {
    // add an event listener to the window that watches for url changes
    window.onpopstate = locationHandler;
    window.route = route;
    locationHandler();
});