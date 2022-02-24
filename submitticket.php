<!doctype html>
<html lang="en">
   
<head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Qloud - Cloud Computing, Apps & Server Responsive HTML5 Template</title>
      <!-- Favicon -->
      <link rel="shortcut icon" href="images/favicon.ico" />
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <!-- Typography CSS -->
      <link rel="stylesheet" href="css/typography.css">
      <!-- Style CSS -->
      <link rel='stylesheet'   href='css/qloud-style.css'/>
      <!-- Responsive CSS -->
      <link rel="stylesheet" href="css/responsive.css">
   </head>

   <body>
      <!-- loading -->
      <div id="loading">
         <div id="loading-center">
            <div class="load-img" >
               <img src="images/loader.gif" alt="loader">
            </div>
         </div>
      </div>
      <!-- loading End -->
    <!-- Header -->
    <?php
    include('header.php');
    ?>
    <!-- Header End -->
      <!-- Breadcrumb Start -->
      <div class=" main-bg" >
         <div class="container-fluid p-0">
            <div class="text-left iq-breadcrumb-one
               iq-bg-over black     ">
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-sm-12">
                        <nav aria-label="breadcrumb" class="text-center iq-breadcrumb-two">
                           <h2 class="title">
                           Submit a Ticket</h2>
                           <ol class="breadcrumb main-bg">
                              <li class="breadcrumb-item"><a href="javascript:void(0)"><i class="fa fa-home mr-2"></i>More</a></li> <li class="breadcrumb-item active"> Submit a Ticket </li>
                           </ol>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Breadcrumb End -->
      <!-- Counter Start -->
      <section class="iq-counter-section iq-pb-70">
         <div class="container">
            <div class="row">
                    <div class="col-lg-8 offset-lg-2 mb-5 mb-lg-0  text-left">
                      <form action="/action_page.php">
                         <h5>Ticket Information</h5>
                          <div class="form-group sb-tic">
                            <label for="department">Department</label>
                             <select id="country" name="country">
                                  <option value="australia">VoiceTech</option>
                                  <option value="canada">VoiceTech Sales</option>
                                  <option value="usa">VoiceTech International</option>
                             </select>
                          </div>
                          <div class="form-group sb-tic">
                            <label for="cn">Contact Name</label>
                            <input type="text" class="form-control" id="cn">
                          </div>
                          <div class="form-group sb-tic">
                            <label for="em">Email</label>
                            <input type="email" class="form-control" id="em">
                          </div>
                          <div class="form-group sb-tic">
                            <label for="sb">Subject</label>
                            <input type="text" class="form-control" id="sb">
                          </div>
                          <div class="form-group sb-tic">
                            <label for="pwd">Description</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style="height:100px"></textarea>
                          </div>
                          <div class="form-group sb-tic">
                            <label for="pwd">Product Name</label>
                            <input type="search" class="form-control" id="pd">
                          </div>
                          <div class="form-group sb-tic">
                            <label for="department">Reopen status</label>
                             <select id="country" name="country">
                                <option value="australia">No entry</option>
                                <option value="canada">hold</option>
                                <option value="usa">closing</option>
                             </select>
                          </div>
                          <div class="form-group sb-tic">
                            <label for="pwd">Source</label>
                            <input type="text" class="form-control" id="src">
                          </div>
                          <div class="form-group sb-tic">
                            <label for="pwd">BAN</label>
                            <input type="text" class="form-control" id="ban">
                          </div>

                          <h5>Additional Information</h5>

                          <div class="form-group sb-tic">
                            <label for="department">Classifications</label>
                             <select id="country" name="country">
                                <option value="australia">other</option>
                                <option value="canada">services number</option>
                                <option value="usa">sales lead</option>
                                 <option value="usa">ivr</option>
                             </select>
                          </div>
                          <div class="form-group sb-tic">
                            <label for="department">Proposed Solution</label>
                             <select id="country" name="country">
                                <option value="australia">other</option>
                                <option value="canada">Channel upgradation</option>
                             </select>
                          </div>
                          <div class="checkbox">
                            <label><input type="checkbox"> Customer converted?</label>
                          </div>
                          <div class="form-group sb-tic">
                            <label for="department">Priority</label>
                             <select id="country" name="country">
                                <option value="australia">None</option>
                                <option value="canada">High</option>
                                <option value="canada">Medium</option>
                                <option value="canada">Low</option>
                             </select>
                          </div>
                          <div class="form-group sb-tic">
                            <label for="pwd">Attach a file</label>
                            <input type="file" id="fl">
                          </div>
                         
                          <button type="close" class="btn btn-primary">Submit</button>
                          <button type="close" class="btn btn-danger">Discard</button>
                    </form>   
                        
                    </div>                
               
             </div>
           </div>
    </section>


  
  <!-- Footer Start -->
  <?php
  include('footer.php');
  ?>
    <!-- Footer End -->
                                 <!-- back-to-top -->
                                 <div id="back-to-top">
                                    <a class="top" id="top" href="#top"> <i class="ion-ios-arrow-up"></i> </a>
                                 </div>
                                 <!-- back-to-top End -->
                                 <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                                 <script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="js/jquery-3.4.1.js" ></script>
                                 <!-- jQuery  for scroll me js -->
                                 <script src='js/jquery-min.js'></script>
                                 <!-- popper  -->
                                 <script src="js/popper.min.js"></script>
                                 <!--  bootstrap -->
                                 <script src="js/bootstrap.min.js" ></script>
                                 <!-- Appear JavaScript -->
                                 <script src="js/appear.js"></script> 
                                 <!-- Jquery-migrate JavaScript -->
                                 <script src='js/jquery-migrate.min.js'></script>
                                 <!-- Scripts JavaScript -->
                                 <script src='js/scripts.js'></script>
                                 <!-- countdownTimer JavaScript -->
                                 <script src='js/jQuery.countdownTimer.min.js'></script>
                                 <!-- Tox-progress JavaScript -->
                                 <script src='js/tox-progress.min.js'></script>
                                 <!-- Timeline JavaScript -->
                                 <script src='js/timeline.js'></script>
                                 <!-- Timeline min JavaScript -->
                                 <script src='js/timeline.min.js'></script>
                                 <!-- Slick JavaScript -->
                                 <script src='js/slick.min.js'></script>
                                 <!-- Popper JavaScript -->
                                 <script src='js/popper.min.js'></script>
                                 <!-- Owl.carousel JavaScript -->
                                 <script src='js/owl.carousel.min.js'></script>
                                 <!-- Countdown JavaScript -->
                                 <script src='js/countdown.js'></script>
                                 <!-- Jquery.countTo JavaScript -->
                                 <script src='js/jquery.countTo.js'></script>
                                 <!-- Magnific-popup JavaScript -->
                                 <script src='js/jquery.magnific-popup.min.js'></script>
                                 <!-- Isotope.pkgd.min JavaScript -->
                                 <script src='js/isotope.pkgd.min.js'></script>
                                 <!-- Wow JavaScript -->
                                 <script src='js/wow.min.js'></script> 
                                 <!--  Custom JavaScript -->
                                 <script src="js/custom.js" ></script>
                              </body>
                           
</html>