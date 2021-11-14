export default () => {
    return(

    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
  
        <div class="logo">
          <h1><a href="/">
              <img src="assets/img/logo.png" alt="" width="200" height="auto"/>
            </a></h1>
         
        </div>
  
        
        <nav id="navbar" class="navbar">
          <ul>
            
            
            <li><a href="/contact-us">Jump to hiring page</a></li>
            <li><a href="/book-consultation">Book free hiring consultation</a></li>
            <li><a href="/partnership">Join our Partners</a></li>
            
  
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

  
      </div>
    </header>

    );
}