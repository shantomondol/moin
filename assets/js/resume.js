const resumesData = [
    {}
];


function resumeTemplate(resume) {
    return `
    <div class="container">

    <div class="section-title">
        <h2>Resume</h2>
        <p>Check My Resume</p>
    </div>

    <!-- Education -->
    <div class="row">
        <div class="col-lg-6">
            <h3 class="resume-title">Education </h3>
            <div class="resume-item pb-0">
                <h4>Computer Science & Engineering (CSE)</h4>
                <p>Green University of Bangladesh</p>
                <h5>2019 - Present</h5>
            </div>

            <div class="resume-item">
                <h4>Diploma In Computer Engineering</h4>
                <p>Ahsanullah Institute of Technical and Vocational Education and Training</p>
                <h5>2014 - 2018</h5>
            </div>

            <div class="resume-item">
                <h4>Secondary School Certificate (SSC)</h4>
                <p>Pagla High School</p>
                <h5>2008 - 2013</h5>
            </div>
        </div>

        <!-- Professional Experience -->
        <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
                <h4>Professional Web Developer</h4>
                <h5>2018 - Present</h5>
                <ul>
                    <li>Work in <a class="resume-link" href="https://sariit.com" target="_blank">Sariit</a> at <b>Front-end Developer</b></li>
                    <li>Work in <a class="resume-link" href="https://techserve4u.com" target="_blank">TechServe4U</a> at <b>Remote Front-end Developer</b></li>
                    <li>Work in <a class="resume-link" href="https://www.facebook.com/jinanitltd/" target="_blank">Jinan IT LTD</a> at <b>Front-end Developer</b></li>
                </ul>
            </div>
            <div class="resume-item">
                <h4>Web Design</h4>
                <h5>2016 - 2018</h5>
                <ul>
                    <li>Work in <a class="resume-link" href="https://lemexit.com/" target="_blank">LemexIT</a> at <b>Intern</b></li>
                </ul>
            </div>
            <div class="resume-item">
                <h4>UI Design</h4>
                <h5>2013 - 2015</h5>
                <p>Dhaka, Bangladesh</p>
            </div>
        </div>

        <!-- Business Experience -->
        <div class="col-lg-6">
            <h3 class="resume-title">Business</h3>
            <div class="resume-item">
                <h4><a class="resume-link" href="https://www.niom.it/" target="_blank">Niom IT</a></h4>
                <h5>Founder</h5>
            </div>
            <div class="resume-item">
                <h4><a class="resume-link" href="https://www.areaphonebook.com/" target="_blank">AreaPhonebook</a></h4>
                <h5>CO-Founder</h5>
            </div>
            <div class="resume-item">
                <h4><a class="resume-link" href="https://www.facebook.com/bharaacom" target="_blank">Bharaa.com</a></h4>
                <h5>Founder</h5>
            </div>
        </div>

    </div>
</div>
    `;
}


document.getElementById("resume").innerHTML = `
    ${resumesData.map(resumeTemplate).join("")}
  `;