<template>
	<footer class="footer">
	    <div class="container clearfix">
	        <div class="left">
	            <h1 class="logo logo--light"><span class="l">l</span>aracasts</h1>

	            <p class="description">
	                Lots of your peers think Laracasts is one of the best things ever. So <a href="/join">buy Jeffrey lunch</a> once a month, see for yourself, and massively level up your skills in the process.
	            </p>

	            <ul class="social-links">
	                <li class="social-link">
	                    <a href="http://facebook.com/laracasts">
	                        <img src="assets/facebook.png">
	                    </a>
	                </li>

	                <li class="social-link">
	                    <a href="http://twitter.com/laracasts">
	                        <img src="assets/twitter.png">
	                    </a>
	                </li>

	                <li class="social-link">
	                    <a href="https://github.com/laracasts">
	                        <img src="assets/github.png">
	                    </a>
	                </li>
	            </ul>
	        </div>


	        <div class="right">
	            <div>
	                <h5 class="heading">Learn</h5>

	                <ul class="zeroed">
	                    <li><a href="/lessons">Library</a></li>
	                    <li><a href="/shop">Shop</a></li>
	                    <li class=""><a href="https://laracasts.com/newsletters/2016/june">Newsletter</a></li>
	                    <li><a href="/recommended-reading">Books</a></li>
	                    <li><a href="https://laracasts.com/join">Sign Up</a></li>
	                     <li><a href="https://laracasts.com/login">Log In</a></li>
	                </ul>
	            </div>

	            <div>
	                <h5 class="heading">Discuss</h5>

	                <ul class="zeroed">
	                    <li><a href="/discuss">Forum</a></li>
	                    <li><a href="http://laracasts.audio">Laracasts Podcast</a></li>
	                    <li><a href="http://laravelpodcast.com">Laravel Podcast</a></li>
	                </ul>
	            </div>


	            <div>
	                <h5 class="heading">Extras</h5>

	                <ul class="zeroed">
	                    <li><a href="https://laracasts.com/stats">Statistics</a></li>
	                    <li><a href="/testimonials">Testimonials</a></li>
	                    <li><a href="/faq">FAQ</a></li>
	                    <li><a href="/contact">Get Support</a></li>
	                    <li><a href="/feed">RSS</a></li>
	                    <li><a href="https://forge.laravel.com/">Laravel Forge</a></li>
	                    <li><a href="https://larajobs.com/?partner=36#">Larajobs</a></li>
	                </ul>
	            </div>

	            <div>
	                <h5 class="heading">Grown Up Stuff</h5>

	                <ul class="zeroed">
	                    <li><a href="/privacy">Privacy</a></li>
	                    <li><a href="/terms">Terms</a></li>
	                </ul>
	            </div>
	        </div>
	    </div>

	    <div class="secondary">
	    	<div class="container clearfix">

		        <div class="utility-left">
		            <p class="copyright">
		                © Laracasts 2016. All rights reserved.
		                Yes, all of them.
		            </p>

		            <div class="hosting">
		                Proudly hosted with <a href="https://forge.laravel.com">Laravel Forge</a>
		                and <a href="https://www.digitalocean.com/?refcode=d2070a2d5f35">DigitalOcean</a>.
		            </div>
		        </div>

		        <form id="newsletter-form" class="utility-right" method="POST" action="/newsletters/subscribe">
			        <input type="email" class="form-control" name="email" autocomplete="off" required="" placeholder="Sign up for the Monthly Newsletter"> 
		        	<button class="Button Button Button--Callout"><span>Subscribe</span></button>
		        </form>

		    </div>
	    </div>
	</footer>
</template>

<script>
  import WebFont from 'webfontloader'
  WebFont.load({
    google: {
      families: ['Lato:400,700']
    }
  })
  export default{}
</script>

<style lang="scss" scoped>
	a {
		background-color: transparent;
    	color: #99c93d;
	}

	p {
	    line-height: 1.85em;
	    margin-top: 0;
	}

	ul {
		padding: 0;
	}

	h1, h2, h3, h4, h5, h6 {
		line-height: 1.3em;
	    color: #505b69;
	    font-family: Lato;
	    margin: 1em 0;
	}

	.footer {
		background: #fff;
	    border-top: 1px solid #f2f2f2;
	    color: #9ba6b5;
	    padding-top: 70px;
	    font-family: "Lato",sans-serif;
	    .container {
	    	max-width: 1200px;
	    	position: relative;
	    	margin: 0 auto;
	    	&:before, &:after {
	    		content: '';
    			display: table;
	    	}
	    }
	    /* Logo */
	    .logo {
	    	margin: 0 32px 0 0;
		    margin-bottom: 24px;
		    border-right: none;
		    float: left;
		    font-size: 31px;
		    font-weight: 700;
		    padding-right: 30px;
	    }
	    .logo--light {
			color: #5a6779;
    		letter-spacing: .5px;
			>.l {
				background: 0 0;
			    border-left: 2px solid #9ba6b5;
			    margin-right: 0;
			    padding: 0 1px 0 7px;
			    -webkit-animation: none;
			    animation: none;
			}
	    }
		/* Description */
		.description {
    	    margin-bottom: 0;
			font-size: 15px;
			clear: both;
	    }
	    /* Social links */
	    .social-link {
			margin-top: 50px;
			margin-right: 10px;
			color: #fff;
			display: inline-block;
			>a {
				color: inherit;
			    line-height: 1.7em;
			    font-size: 14px;
				display: block;
			    line-height: 1;
			    border-radius: 2px;
			}
	    }
	    .heading {
	    	text-transform: uppercase;
		    font-weight: 700;
		    letter-spacing: -.5px;
		    margin-bottom: 10px;
		    margin-top: 9px;
		    font-size: 0.83em;
	    }
	    .left {
	    	width: calc(99.99% * 4/12 - (30px - 30px * 4/12));
    		margin-right: calc(99.99% * 1/12 - (30px - 30px * 1/12) + (30px * 2))!important;
    		float: left;
	    }
	    .right {
	    	width: calc(99.99% * 7/12 - (30px - 30px * 7/12));
	    	float: left;
	    	>div {
	    		width: calc(99.99% * 1/4 - (30px - 30px * 1/4));
	    		ul {
	    			list-style: none;
	    			a {
	    				color: inherit;
					    line-height: 1.7em;
					    font-size: 14px;
	    			}
	    		}
	    		&:nth-child(4n+1) {
					clear: left;
	    		}
	    		&:nth-child(1n) {
    			    float: left;
				    margin-right: 30px;
				    clear: none;
	    		}
	    		&:last-child {
	    			margin-right: 0;
	    		}
	    	}
	    }
	    /* FOOTER SECONDARY */
	    .secondary {
	    	padding: 25px 0;
    	    background: #1bb1b2;
			position: relative;
			margin-top: 70px;
			.copyright {
				color: #fff;
    			margin: 0 0 4px;
			}
			.hosting {
				color: #cdfbff;
    			font-size: 13px;
				a {
					color: inherit;
				    font-weight: 700;
				    text-decoration: none;
				}
			}
			form {
				margin-top: 6px;
    			width: 50%;
    			position: relative;
    			input[type="text"], input[type="email"] {
				    height: 45px;
				    padding: 0 12px;
				    border-radius: 4px;
				    border: 1px solid #f2f2f2;
				    font-size: 15px;
				    width: 300px;
				    float: right;
				    margin-right: 96px;
    			}
    			button {
    				position: absolute;
    				right: 0;
    				top: 0;
    				z-index: 10;
    				border-radius: 0 4px 4px 0px;
    				line-height: 1;
				    width: auto;
				    padding: 14.5px 15px;
				    background: #ff5c2d;
				    color: #fff;
				    border: none;
				    font-weight: 500;
				    font-size: 16px;
    			}
			}
			.utility-left {
				float: left !important;
			}
			.utility-right {
				float: right !important;
			}
	    }
	}
</style>