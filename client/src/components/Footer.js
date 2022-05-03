

function Footer() {
   return(
      <>
      <section id="aa-about-us">
         <div className="container">
            <div className="row">
            <div className="col-md-12">
               <div className="aa-about-us-area">
                  <div className="row">
                  <div className="col-md-5">
                     <div className="aa-about-us-left">
                        <img src="/img/about-us.png" alt="image" />
                     </div>
                  </div>
                  <div className="col-md-7">
                     <div className="aa-about-us-right">
                        <div className="aa-title">
                        <h2>About This Application</h2>
                        <span></span>
                        </div>
                        <p> Hi, I got this idea to make a real-estate application after constantly hearing about the housing problem we are dealing with.</p>
                        <p>It was a great project to test and showcase the skills that I have learned during my 15 weeks at Flatiron School.</p>
                        <p>This application uses Ruby on Rails to manage the back-end and React to power the front-end.</p>      
                        <p>The API that was used for this project, was from Zillow.com, a well-known real-estate website.</p>
                        <p>The data was scraped by reverse engineering the api end-points in Postman and fetching the data by sending web request in ruby</p>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
            </div>
         </div>
      </section>

      <footer id="aa-footer">
         <div className="container">
            <div className="row">
            <div className="col-md-12">
            <div className="aa-footer-area">
               <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="aa-footer-left">
                     <p>Designed by <a rel="nofollow" href="http://www.markups.io/">MarkUps.io</a></p>
                  </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="aa-footer-middle">
                     <a href="/"><i className="fa fa-facebook"></i></a>
                     <a href="/"><i className="fa fa-twitter"></i></a>
                     <a href="/"><i className="fa fa-google-plus"></i></a>
                     <a href="/"><i className="fa fa-youtube"></i></a>
                  </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="aa-footer-right">
                     <a href="/">Home</a>
                     <a href="/">Support</a>
                     <a href="/">License</a>
                     <a href="/">FAQ</a>
                     <a href="/">Privacy & Term</a>
                  </div>
                  </div>            
               </div>
            </div>
            </div>
            </div>
         </div>
      </footer>
      </>
   )
}

export default Footer;