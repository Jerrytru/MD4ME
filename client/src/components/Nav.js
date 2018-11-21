import React from 'react';
import '../styles/Title.css'

class Nav extends React.Component {
  render() {
    return(
			<section class="main-header">
			<div class="overlay">
				<div class="container">
					<header>
						<div class="logo"><img src="https://images.vexels.com/media/users/3/142777/isolated/preview/84711206e52e0d4ff6c793cb476ea264-heartbeat-star-medical-logo-by-vexels.png" alt=""/><span>MD4ME</span></div>
						<div class="nav"><a href="">About Us</a><a href="">Register</a><a class="active" href="">Login</a></div>
						<div class="menu"><i class="fa fa-bars"></i></div>
					</header>
					<div class="content">
						<div class="content-wrapper">
							<h2 class="blob">Find your medical profesional now. It is quick and easy. Let us do the work for you!</h2>
							<div class="button-wrapper">
								<div class="button work">How it works<span><i class="fa fa-arrow-down"></i></span></div>
								<div class="button ask">Send us your questions</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</section>
		);
		
  }
}

export default Nav;
