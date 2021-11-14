import Footer from "./Footer";
import Header from "./Header";


const Thank = () => {

    document.head.innerHTML = `
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
      rel="stylesheet">

    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/font-awesome.css" rel="stylesheet">
    <link href="assets/css/intlTelInput.min.css" rel="stylesheet">


    <meta content="Need some support on any Tech or business related issues? founik soft is here to assist you" name="description">
    <meta content="software apps maintainance, mobile-apps maintainance, website maintainance, web-application maintainance, business digitalization, about founik soft" name="keywords">

    <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TVFCCN4');</script>
    <!-- End Google Tag Manager -->


    <!-- Facebook Pixel Code -->
      <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '879346696086897');
        fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=879346696086897&ev=PageView&noscript=1"
      /></noscript>
    <!-- End Facebook Pixel Code -->
    
  `
    document.title = 'Partner with founik remote';

    return (
        <>

            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVFCCN4"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
            
            <section id="thanks">
            

            <h3 class="thanks">Thanks for getting in touch with Founik Remote team. 
                We will review your requset and get back to your before 24hours time

            </h3>
  
            
            </section>

        </>
    );

}

export default Thank;

