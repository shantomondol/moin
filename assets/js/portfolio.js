const portfoliosData = [
    {}
];


function portfolioTemplate(portfolio) {
    return `
    <div class="container">

            <div class="section-title">
                <h2>Portfolio</h2>
                <p>My Works</p>
            </div>

            <div class="row portfolio-container">

                <!-- portfolio1 -->
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="AreaPhonebook">
                        <div class="portfolio-info">
                            <h4>AreaPhonebook</h4>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-1-full.jpg" data-gall="portfolioGallery" class="venobox" title="AareaPhonebook"><i class="far fa-eye"></i></a>
                                <a href="https://www.areaphonebook.com/" target="_blank"><i class="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- portfolio2 -->
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="Niom IT">
                        <div class="portfolio-info">
                            <h4>Niom IT</h4>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-2-full.jpg" data-gall="portfolioGallery" class="venobox" title="Niom IT"><i class="far fa-eye"></i></a>
                                <a href="https://www.niom.it/" target="_blank"><i class="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- portfolio3 -->
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="Almaha Cars Polishing">
                        <div class="portfolio-info">
                            <h4>Almaha Cars Polishing</h4>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-3-full.jpg" data-gall="portfolioGallery" class="venobox" title="Almaha Cars Polishing"><i class="far fa-eye"></i></a>
                                <a href="https://moinulislamdev.github.io/almaha-cars-polishing/" target="_blank"><i class="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- portfolio4 -->
                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="Tech Serve4 U">
                        <div class="portfolio-info">
                            <h4>Tech Serve4 U</h4>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-4-full.jpg" data-gall="portfolioGallery" class="venobox" title="TechServe4U"><i class="far fa-eye"></i></a>
                                <a href="https://techserve4u.com/" target="_blank"><i class="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- portfolio5 -->
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="E-School">
                        <div class="portfolio-info">
                            <h4>E-School</h4>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-5-full.jpg" data-gall="portfolioGallery" class="venobox" title="E-School"><i class="far fa-eye"></i></a>
                                <a href="https://moinul-islam.github.io/e-school/" target="_blank"><i class="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- portfolio6 -->
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="Panda Commerce">
                        <div class="portfolio-info">
                            <h4>Panda Commerce</h4>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-6-full.jpg" data-gall="portfolioGallery" class="venobox" title="Panda Commerce"><i class="far fa-eye"></i></a>
                                <a href="https://moinul-islam.github.io/panda-commerce/" target="_blank"><i class="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
}


document.getElementById("portfolio").innerHTML = `
    ${portfoliosData.map(portfolioTemplate).join("")}
  `;