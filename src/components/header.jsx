

export const Header = (props) => {
    return (
  
      
        // <!-- Header -->
        <section id="header">
    
            {/* <!-- NAV AREA CSS --> */}
            <nav id="nav-part" className="navbar header-nav other-nav custom_nav full_nav sticky-top navbar-expand-md hidden-main">
                <div className="container">
    
    
                    <a className="navbar-brand" href="index.html">
                        <img src="images/header-logo.png" className="img-fluid logo-color" alt="logo"/>

                        </a>
    
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div className="nav-res">
                            <ul className="nav navbar-nav m-auto menu-inner tog-nav">
                                <li><a href="#banner" className="active">Home</a></li>
                                <li><a href="about-us.html">About us</a></li>
                                <li><a href="games.html">Games</a></li>
                                <li><a href="tournaments.html">Tournaments</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li className="dropdown"><a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <ul className="dropdown-menu maindrop_menu">
                                        <li><a href="contact-us.html">contact us</a></li>
    
                                        <li><a href="404-page.html">404 page</a></li>
                                    </ul>
                                </li>
                                <li><i className="more-less fa fa-align-right"></i>
                                    <i className="fa fa-times"></i>
    
                                </li>
    
                            </ul>
                        </div>
                        <ul className="login_menu navbar-right nav-sign">
                            <li className="login"><a href="#" className="btn-4 yellow-btn">Signup</a></li>
                            <li className="login"><a href="#" className="btn-4 pink-bg">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- mobile menu --> */}
            
            <nav id='cssmenu' className="hidden mobile">
                <div className="logo">
                    <a href="index.html" className="logo">
                        <img src="images/header-logo.png" className="img-responsive" alt=""/>
                    </a>
                </div>
                <div id="head-mobile"></div>
                <div className="button"><i className="more-less fa fa-align-right"></i></div>
                <ul>
                    <li><a href="#banner" className="active">Home</a></li>
                                <li><a href="about-us.html">About us</a></li>
                                <li><a href="games.html">Games</a></li>
                                <li><a href="tournaments.html">Tournaments</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li className="dropdown"><a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                        <ul className="dropdown-menu maindrop_menu">
                            <li><a href="contact-us.html">contact us</a></li>
    
                            <li><a href="404-page.html">404 page</a></li>
                        </ul>
                    </li>
                                
                  
                            <li className="login"><a href="#" className="btn-4 yellow-bg yellow-btn">Signup</a></li>
                            <li className="login"><a href="#" className="btn-4 yellow-bg">Login</a></li>
                        
                </ul>
    
            </nav>
    
            {/* <!-- End mobile menu --> */}

            <section id="banner" className="banner-inner main_page">
		<div className="container">
			<div className="row">

				<div className="col-md-6 offset-md-6 banner-center">
					<div className="banner_text">

						<h1 className="title">Online Casino</h1>
						<h3>Genuine Money Transaction</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

						<div className="casino-btn">
							<a href="games.html" class="btn-4 yellow-btn">play now</a></div>
					</div>

				</div>
			</div>
		</div>
	</section>

        </section>
                
  
    )
  }
  