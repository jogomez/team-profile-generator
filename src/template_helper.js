const getManager = (employees) => {
    return employees.filter(employee => employee.getRole()=== 'Manager').map(employee => {
        return  `<div class="tile is-parent container-manager">
        <div class="tile is-child notification box manager">
            <div class="tile is-child">
                <p class="title">${employee.name}</p>
                <p class="subtitle">
                    <i class="fa-solid fa-briefcase"></i>
                    Manager
                </p>
                <p class="content">&nbsp;ID:&nbsp;${employee.id}</p>
                <p class="content">&nbsp;Email:&nbsp;
                    <a href="mailto:${employee.email}">${employee.email}</a>
                </p>
                <p class="content">
                    &nbsp;Office number:&nbsp; ${employee.getOfficeNumber()}
                </p>
            </div>
        </div>
        </div>`;
    }).join(""); 

};

const getEngineers = (employees) => { 
    return employees.filter(employee => employee.getRole()=== 'Engineer').map(employee => {
        return `<div class="container-employee">
        <div class="tile is-child box engineer">
            <p class="title">${employee.name}</p>
            <p class="subtitle">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                Engineer
            </p>
            <p class="content">&nbsp;ID:&nbsp;${employee.id}</p>
            <p class="content">&nbsp;Email:&nbsp;
                <a href="mailto:${employee.email}">${employee.email}</a>
            </p>
            <p class="content">&nbsp;GitHub:&nbsp;
                <a href="${employee.getGithub()}">${employee.getGithub()}</a>
            </p>
        </div>
        </div>`;
    }).join(""); 
};

const getInterns = (employees) => {
    return employees.filter(employee => employee.getRole()=== 'Intern').map(employee => {
    return `<div class="container-employee">
    <div class="tile is-child box intern">
        <p class="title">${employee.name}</p>
        <p class="subtitle">
            <i class="fa-solid fa-user-graduate"></i>
        Intern
        </p>
        <p class="content">&nbsp;ID:&nbsp;${employee.id}</p>
        <p class="content">&nbsp;Email:&nbsp;
            <a href="mailto:${employee.email}">${employee.email}</a>
        </p>
        <p class="content">&nbsp;School:&nbsp;${employee.getSchool()}</p>
    </div>
    </div>`;
    }).join(""); 
};


const getHTML = (employees) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title hero-title">Team Profile</p>
            </div>
        </section>
        <div class="container-all">
                    ${getManager(employees)}
                <div class="tile is-parent">
                    ${getEngineers(employees)}
                </div>
                <div class="tile is-parent">
                    ${getInterns(employees)}
                </div>
            </div>
        </div>
        <script src="https://kit.fontawesome.com/242755acea.js" crossorigin="anonymous"></script>
    </body>
    <footer>
        <p>
            <a href="https://www.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_11667116.htm#query=teamwork&position=3&from_view=search&track=sph">Hero background image by vectorjuice</a> on Freepik
        </p>
    </footer>
    </html>`
};

module.exports = getHTML;