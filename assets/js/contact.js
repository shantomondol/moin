const contactsData = [
    {}
];


function contactTemplate(contact) {
    return `
    
    <div class="container">

    <div class="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
    </div>

    <div class="row mt-2">

        <div class="col-md-6 d-flex align-items-stretch">
            <div class="info-box">
                <i class="bx bx-map"></i>
                <h3>My Address</h3>
                <p><a href="https://goo.gl/maps/92CAYA8FmW84tHLM9" target="_blank">Pagla, Narayangonj</a></p>
            </div>
        </div>

        <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div class="info-box">
                <i class="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div class="social-links">
                    <a href="https://www.facebook.com/moinulislam.dev" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank" class="messenger"><i class="fab fa-facebook-messenger"></i></a>
                    <a href="https://github.com/moinulislamdev" target="_blank" class="github"><i class="fab fa-github"></i></a>
                    <a href="usermoin@gmail.com" target="_blank" class="gmail"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>

        <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
                <i class="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p><a href="mailto:usermoin@gmail.com" target="_blank">usermoin@gmail.com</a></p>
            </div>
        </div>
        <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
                <i class="bx bx-phone-call"></i>
                <h3>Call Me</h3>
                <p><a href="tel:+01303002226" target="_blank">+01303-002226</a></p>
            </div>
        </div>
    </div>

    <form action="forms/contact.php" method="post" role="form" class="php-email-form mt-4">
        <div class="form-row">
            <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validate"></div>
            </div>
            <div class="col-md-6 form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validate"></div>
            </div>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div class="validate"></div>
        </div>
        <div class="form-group">
            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
            <div class="validate"></div>
        </div>
        <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center"><button type="submit"><span></span>
            <span></span>
            <span></span>
            <span></span>Send Message</button></div>
    </form>

</div>
    `;
}


document.getElementById("contact").innerHTML = `
    ${contactsData.map(contactTemplate).join("")}
  `;