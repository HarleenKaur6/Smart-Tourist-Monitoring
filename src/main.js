

document.querySelector('#app').innerHTML = `
  <div class="app">

    <!-- NAVBAR -->
    <nav class="navbar">

      <div class="logo">
        🛡️ SafeTour
      </div>

      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <button class="login-btn" onclick="window.location.href='/src/login.html'">
  Login
</button>
        <a href="/register.html" class="register-btn">Register</a>
      </div>

    </nav>


    <!-- HERO SECTION -->
    <section class="hero">

      <div class="hero-content">

        <div class="badge">
          🛡️ AI-Powered Tourist Safety
        </div>

        <h1>
          Travel Safe.<br>
          <span>Explore Fearlessly.</span>
        </h1>

        <p>
          Smart Tourist Safety Monitoring & Incident Response
          System using AI, Geo-Fencing and Blockchain-based
          Digital Identity.
        </p>

        <div class="hero-buttons">
          <button class="primary-btn">
            Get Started
          </button>

          <button class="secondary-btn">
            Explore Features
          </button>
        </div>

      </div>


      <!-- SAFETY CARD -->
      <div class="safety-card">

        <div class="shield">
          🛡️
        </div>

        <h2>
          Your Safety Matters
        </h2>

        <p>
          Real-time monitoring, intelligent risk detection
          and emergency response.
        </p>

        <div class="system-status">
          <span></span>
          Safety System Active
        </div>

      </div>

    </section>


    <!-- FEATURES -->
    <section class="features" id="features">

      <div class="feature-card">

        <div class="feature-icon">
          🛡️
        </div>

        <h3>
          Digital Identity
        </h3>

        <p>
          Secure blockchain-based digital identity
          for tourists.
        </p>

      </div>


      <div class="feature-card">

        <div class="feature-icon">
          📍
        </div>

        <h3>
          Geo-Fencing
        </h3>

        <p>
          Receive alerts when entering high-risk
          or restricted areas.
        </p>

      </div>


      <div class="feature-card">

        <div class="feature-icon">
          🚨
        </div>

        <h3>
          Emergency SOS
        </h3>

        <p>
          Quickly send an emergency alert with
          your current location.
        </p>

      </div>


      <div class="feature-card">

        <div class="feature-icon">
          🤖
        </div>

        <h3>
          AI Risk Detection
        </h3>

        <p>
          Detect unusual tourist movement using
          intelligent analysis.
        </p>

      </div>

    </section>


    <!-- HOW IT WORKS -->
    <section class="how-it-works" id="how-it-works">

      <h2>
        How SafeTour Works
      </h2>

      <p class="section-subtitle">
        A smart safety system designed for modern tourism.
      </p>


      <div class="steps">

        <div class="step">
          <div class="step-number">1</div>
          <h3>Register</h3>
          <p>Create your secure tourist profile.</p>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <h3>Get Digital ID</h3>
          <p>Receive a secure digital tourist identity.</p>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <h3>Stay Protected</h3>
          <p>Get location monitoring and risk alerts.</p>
        </div>

        <div class="step">
          <div class="step-number">4</div>
          <h3>Emergency Response</h3>
          <p>Send SOS alerts to authorities instantly.</p>
        </div>

      </div>

    </section>


    <!-- FOOTER -->
    <footer>

      <div class="logo">
        🛡️ SafeTour
      </div>

      <p>
        Smart technology for safer tourism.
      </p>

      <p class="copyright">
        © 2026 SafeTour
      </p>

    </footer>

  </div>
  `
