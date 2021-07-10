const servicesData = [
    {}
];


function serviceTemplate(service) {
    return `
    <div class="container">

    <div class="section-title">
        <h2>Services</h2>
        <p>My Services</p>
    </div>

    <div class="row">
        <!-- Services1 -->
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
                <div class="icon"><i class="fab fa-dribbble"></i></div>
                <h4><a href="">UI / UX Design</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
        </div>

        <!-- Services2 -->
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
                <div class="icon"><i class="fas fa-code"></i></div>
                <h4><a href="">Web Design.</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
        </div>

        <!-- Services3 -->
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
                <div class="icon"><i class="fas fa-code"></i></div>
                <h4><a href="">Web Development.</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
        </div>
    </div>
</div>
    `;
}


document.getElementById("service").innerHTML = `
    ${servicesData.map(serviceTemplate).join("")}
  `;