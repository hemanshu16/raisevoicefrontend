import React from 'react'

export default function Home() {
    return (
        <div>
            <section id="hero" class="text-white tm-font-big tm-parallax">
                {/*<nav class="navbar navbar-expand-md tm-navbar" id="tmNav">
                    <div class="container">
                        <div class="tm-next">
                            <a href="#hero" class="navbar-brand">The Town</a>
                        </div>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars navbar-toggler-icon"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="#introduction">Introduction</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="#work">Our Work</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
    </nav>*/}

                <div class="text-center tm-hero-text-container">
                    <div class="tm-hero-text-container-inner">
                        <h2 class="tm-hero-title">The Town</h2>
                        <p class="tm-hero-subtitle">
                            Parallax Bootstrap Theme
                            <br />by TemplateMo
                        </p>
                    </div>
                </div>

                <div class="tm-next tm-intro-next">
                    <a href="#introduction" class="text-center tm-down-arrow-link">
                        <i class="fas fa-3x fa-caret-down tm-down-arrow"></i>
                    </a>
                </div>
            </section>

            <section id="introduction" class="tm-section-pad-top">
                <div class="container mb-3">
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="img/the-town-01.jpg" alt="Image" class="img-fluid tm-intro-img" />
                        </div>
                        <div class="col-lg-6">
                            <div class="tm-intro-text-container">
                                <h2 class="tm-text-primary mb-4 tm-section-title">Introduction</h2>
                                <p class="mb-4 tm-intro-text">
                                    The Town is <strong>simple CSS template</strong> built on Bootstrap v4.1.3
                                    and this is a little parallax layout that you can use for your websites.
                                </p>
                                <p class="mb-5 tm-intro-text">
                                    Please tell your friends about our site
                                    <a rel="nofollow" href="https://templatemo.com">templatemo</a>. Thank you.
                                    Curabitur dapibus tristique enim a imperdiet. Etiam
                                    tristique sem sed condimentum posuere. </p>
                                <div class="tm-next">
                                    <a href="#work" class="tm-intro-text tm-btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row tm-section-pad-top">
                        <div class="col-lg-4">
                            <i class="fas fa-4x fa-bus text-center tm-icon"></i>
                            <h4 class="text-center tm-text-primary mb-4">Curabitur at elit eu risus</h4>
                            <p>
                                Sed ultrices sit amet mi eu malesuada. Cras ultricies gravida
                                nisi, ac pellentesque nunc tincidunt quis. Aenean at ornare lacus.
                                Duis imperdiet lacus justo.
                            </p>
                        </div>

                        <div class="col-lg-4 mt-5 mt-lg-0">
                            <i class="fas fa-4x fa-bicycle text-center tm-icon"></i>
                            <h4 class="text-center tm-text-primary mb-4">Nunc sed metus vel nisi</h4>
                            <p>
                                Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc.
                                Vivamus imperdiet sem quis orci pharetra convallis. Nunc a tempus
                                nisi, sed fringilla purus. In hac habitasse platea.
                            </p>
                        </div>
                        <div class="col-lg-4 mt-5 mt-lg-0">
                            <i class="fas fa-4x fa-city text-center tm-icon"></i>
                            <h4 class="text-center tm-text-primary mb-4">Fusce sed nisi sagittis</h4>
                            <p>
                                Donec vestibulum libero nisl. Curabitur ac orci ac lorem blandit
                                volutpat. Sed ac sodales nibh, ut porttitor elit. Sed id dui mi.
                                Vestibulum ante ipsum primis in faucibus.
                            </p>
                        </div>
                    </div>
                    </div>
            </section>
            {/* <section id="work" class="tm-section-pad-top"> 
                <div class="container tm-container-gallery">
                    <div class="row">
                        <div class="text-center col-12">
                            <h2 class="tm-text-primary tm-section-title mb-4">Our Work</h2>
                            <p class="mx-auto tm-work-description">
                                "Curabitur ac orci ac lorem blandit volutpat. Sed ac sodales nibh, ut
                                porttitor elit. Sed id dui mi. Vestibulum ante ipsum primis in faucibus
                                orci luctus et ultrices posuere cubilia."
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="mx-auto tm-gallery-container">
                                <div class="grid tm-gallery">
                                    <a href="img/gallery-img-01.jpg">
                                        <figure class="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-01.jpg" alt="Image" class="img-fluid"/>
                                                <figcaption>
                                                    <h2><i>Dreamy <span>Honey</span> Now</i></h2>
                                                </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-02.jpg">
                                        <figure class="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-02.jpg" alt="Image" class="img-fluid"/>
                                                <figcaption>
                                                    <h2><i>Second <span>Honey</span> Now</i></h2>
                                                </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-03.jpg">
                                        <figure class="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-03.jpg" alt="Image" class="img-fluid"/>
                                                <figcaption>
                                                    <h2><i>Third <span>Honey</span> Now</i></h2>
                                                </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-04.jpg">
                                        <figure class="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-04.jpg" alt="Image" class="img-fluid"/>
                                                <figcaption>
                                                    <h2><i>Dreamy <span>Honey</span> Now</i></h2>
                                                </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-05.jpg">
                                        <figure class="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-05.jpg" alt="Image" class="img-fluid"/>
                                                <figcaption>
                                                    <h2><i>Fifth <span>Honey</span> Now</i></h2>
                                                </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-06.jpg">
                                        <figure class="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-06.jpg" alt="Image" class="img-fluid"/>
                                                <figcaption>
                                                    <h2><i>Sixth <span>Honey</span> Now</i></h2>
                                                </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-01.jpg">
                                        <figure class="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-01.jpg" alt="Image" class="img-fluid"/>
                                                <figcaption>
                                                    <h2><i>Dreamy <span>Honey</span> Now</i></h2>
                                                </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-02.jpg">
                                        <figure class="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-02.jpg" alt="Image" class="img-fluid"/>
                                                <figcaption>
                                                    <h2><i>Eighth <span>Honey</span> Now</i></h2>
                                                </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}

            <section id="contact" class="tm-section-pad-top tm-parallax-2">
                <div class="container tm-container-contact">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-4 tm-section-title">Contact Us</h2>
                            <div class="mb-5 tm-underline">
                                <div class="tm-underline-inner"></div>
                            </div>
                            <p class="mb-5">
                                Nullam tincidunt, lacus a suscipit luctus, elit turpis tincidunt dui,
                                non tempus sem turpis vitae lorem. Maecenas eget odio in sapien ultrices
                                viverra vitae vel leo. Curabitur at elit eu risus pharetra pellentesque
                                at at velit.
                            </p>
                        </div>

                        <div class="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <a href="tel:0100200340" class="tm-contact-item-link">
                                <i class="fas fa-3x fa-phone mr-4"></i>
                                <span class="mb-0">010-020-0340</span>
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <a href="mailto:info@company.co" class="tm-contact-item-link">
                                <i class="fas fa-3x fa-envelope mr-4"></i>
                                <span class="mb-0">info@company.co</span>
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <a href="https://www.google.com/maps" class="tm-contact-item-link">
                                <i class="fas fa-3x fa-map-marker-alt mr-4"></i>
                                <span class="mb-0">Location on Maps</span>
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <form action="" method="get">
                                <input name="email" type="email" placeholder="Subscribe your email" class="tm-input" required />
                                <button type="submit" class="btn tm-btn-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <footer class="text-center small tm-footer">
                    <p class="mb-0">
                        Copyright &copy; 2019 Company Name

                        - Design: <a rel="nofollow" href="https://templatemo.com" class="tm-footer-link">Template Mo</a>
                    </p>
                </footer>
            </section>
            
            

        </div >
    )
}