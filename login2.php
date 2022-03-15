<!doctype html>
<html lang="en">


<!-- Mirrored from iqonic.design/themes/qloud-html/html/contact-us-2.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Apr 2021 04:23:33 GMT -->

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>VoiceTech</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="images/favicon.ico" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Typography CSS -->
    <link rel="stylesheet" href="css/typography.css">
    <!-- Style CSS -->
    <link rel='stylesheet' href='css/qloud-style.css' />
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">

</head>
<style>
    /*
  .card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px
}
*/
    .card2 {
        margin: 0px 40px;
        border: 1px solid #1A237E !important;
        border-radius: 10px;
    }

    .logo {
        width: 100px;
        margin-top: 20px;
        margin-left: 35px !important;
    }

    .image {
        width: 360px;
        height: 280px
    }

    .border-line {
        border-right: 1px solid #EEEEEE
    }

    .facebook {
        background-color: #3b5998;
        color: #fff;
        font-size: 18px;
        padding-top: 5px;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        cursor: pointer
    }

    .twitter {
        background-color: #1DA1F2;
        color: #fff;
        font-size: 18px;
        padding-top: 5px;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        cursor: pointer
    }

    .linkedin {
        background-color: #2867B2;
        color: #fff;
        font-size: 18px;
        padding-top: 5px;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        cursor: pointer
    }

    .line {
        height: 1px;
        width: 45%;
        background-color: #E0E0E0;
        margin-top: 10px
    }

    .or {
        width: 10%;
        font-weight: bold
    }

    .text-sm {
        font-size: 14px !important
    }

    ::placeholder {
        color: #BDBDBD;
        opacity: 1;
        font-weight: 300
    }

    :-ms-input-placeholder {
        color: #BDBDBD;
        font-weight: 300
    }

    ::-ms-input-placeholder {
        color: #BDBDBD;
        font-weight: 300
    }

    input,
    textarea {
        padding: 10px 12px 10px 12px;
        border: 1px solid lightgrey;
        border-radius: 2px;
        margin-bottom: 5px;
        margin-top: 2px;
        width: 100%;
        box-sizing: border-box;
        color: #2C3E50;
        font-size: 14px;
        letter-spacing: 1px
    }

    input:focus,
    textarea:focus {
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        border: 1px solid #304FFE;
        outline-width: 0
    }

    button:focus {
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        outline-width: 0
    }

    a {
        color: inherit;
        cursor: pointer
    }

    .btn-blue {
        background-color: #1A237E;
        width: 150px;
        color: #fff !important;
        border-radius: 2px
    }

    .btn-blue:hover {
        background-color: #000;
        cursor: pointer
    }

    .bg-blue {
        color: #fff;
        background-color: #1A237E
    }

    @media screen and (max-width: 991px) {
        .logo {
            margin-left: 0px
        }

        .image {
            width: 300px;
            height: 220px
        }

        .border-line {
            border-right: none
        }

        .card2 {
            border-top: 1px solid #EEEEEE !important;
            margin: 0px 15px
        }
    }
</style>

<body>
    <!-- loading -->
    <div id="loading">
        <div id="loading-center">
            <div class="load-img">
                <img src="images/loader.gif" alt="loader">
            </div>
        </div>
    </div>
    <!-- loading End -->


    <!-- login2 -->
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
            <div class="row d-flex">
                <div class="col-lg-6">
                    <div class="card1 pb-5">
                        <div class="row"> <a href="index.php"> <img src="images/logo-black.png" class="logo"></a>
                        </div>
                        <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img
                                src="images/others/sign-in.png" class="image"> </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card2 card border-0 px-4 py-5">
                        <!-- <div class="row mb-4 px-3">
                            <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                            <div class="facebook text-center mr-3">
                                <div class="fa fa-facebook"></div>
                            </div>
                            <div class="twitter text-center mr-3">
                                <div class="fa fa-twitter"></div>
                            </div>
                            <div class="linkedin text-center mr-3">
                                <div class="fa fa-linkedin"></div>
                            </div>
                        </div> -->
                        <!-- <div class="row px-3 mb-4">
                            <div class="line"></div> <small class="or text-center">Or</small>
                            <div class="line"></div>
                        </div> -->
                        <form id="loginform" method="post">
                            <div class="row px-3"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Mobile</h6>
                                </label> <input class="mb-4" type="number" id="mobile" placeholder="Enter Mobile">
                            </div>
                            <div class="row px-3"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Password</h6>
                                </label> <input type="password" id="password" placeholder="Enter password"> </div>
                            <div class="row px-3 mb-4">
                                <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1"
                                        type="checkbox" class="custom-control-input"> <label for="chk1"
                                        class="custom-control-label text-sm">Remember me</label> </div> <a
                                    href="forget-password.php" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                            </div>
                            <!-- href="https://voicetech.co.in/voicetech/html/index.php" -->
                            <div class="row mb-3 px-3"> <a type="submit" id="loginsubmit"
                                    class="btn btn-blue text-center">Login</a>
                        </form>
                        <div class="modal" id="postloginmodal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">

                                    <div class="modal-body" style="padding: 40px;">
                                        <h4 style="margin: auto;
                                        text-align: center;
                                        font-weight: 600;" id="result"></h4>
                                        <!-- <h4 style="margin: auto;
                                        text-align: center;
                                        font-weight: 600;" id="error"></h4> -->
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <a
                                href="signup2.php" class="text-danger">Register</a></small> </div>
                </div>
            </div>
        </div>

    </div>
    </div>
    <!-- login2 close -->




    <!-- back-to-top -->
    <div id="back-to-top">
        <a class="top" id="top" href="#top"> <i class="ion-ios-arrow-up"></i> </a>
    </div>
    <!-- back-to-top End -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script src="js/jquery-3.4.1.js"></script>
    <!-- jQuery  for scroll me js -->
    <script src='js/jquery-min.js'></script>
    <!-- popper  -->
    <script src="js/popper.min.js"></script>
    <!--  bootstrap -->
    <script src="js/bootstrap.min.js"></script>
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
    <script src="js/custom.js"></script>
    <script>
    $(document).ready(function() {
        $("#loginsubmit").click(function(event) {
                event.preventDefault();

                var url = "http://103.8.43.13/api/api/user/login";
                var topost = $.post(url, {
                    mobile: $("#mobile").val(),
                    password: $("#password").val(),
                });

                topost.done(function(data) {
                    $("#result").text("Login Successfully");
                    $("#postloginmodal").modal("show", function() {
                        $("#result").text("Login Successfully");
                    });
                    $("#mobile").val("");
                    $("#password").val("");
                    console.log("done submit");
                    console.log(data);
                    setTimeout(function() {
                        window.location.href = "https://voicetech.co.in/angularapp";
                    }, 3000);
                });

                topost.fail(function(error) {
                    $("#result").text(error.responseJSON.msg);
                    $("#postloginmodal").modal("show", function() {
                        $("#result").text(error.responseJSON.msg);
                    });
                    console.log("failed");
                    console.log(error.responseJSON.msg);
                    setTimeout(function() {
                        window.location.href = "http://127.0.0.1:5500/signup2.html";
                    }, 3000);
                });
            });
    });
    </script>
</body>


<!-- Mirrored from iqonic.design/themes/qloud-html/html/contact-us-2.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Apr 2021 04:23:33 GMT -->

</html>