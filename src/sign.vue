<template>

    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Sign in</title>
        <meta name="msapplication-TileColor" content=""/>
        <meta name="theme-color" content=""/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="HandheldFriendly" content="True"/>
        <meta name="MobileOptimized" content="320"/>
        <link rel="icon" href="./favicon.ico" type="image/x-icon"/>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"/>
        <meta name="description" content="Tabler comes with tons of well-designed components and features. Start your adventure with Tabler and make your dashboard great again. For free!"/>
        <meta name="canonical" content="https://preview.tabler.io/sign-in-cover.html">
        <meta name="twitter:image:src" content="https://preview.tabler.io/static/og.png">
        <meta name="twitter:site" content="@tabler_ui">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="Tabler: Premium and Open Source dashboard template with responsive and high quality UI.">
        <meta name="twitter:description" content="Tabler comes with tons of well-designed components and features. Start your adventure with Tabler and make your dashboard great again. For free!">
        <meta property="og:image" content="https://preview.tabler.io/static/og.png">
        <meta property="og:image:width" content="1280">
        <meta property="og:image:height" content="640">
        <meta property="og:site_name" content="Tabler">
        <meta property="og:type" content="object">
        <meta property="og:title" content="Tabler: Premium and Open Source dashboard template with responsive and high quality UI.">
        <meta property="og:url" content="https://preview.tabler.io/static/og.png">
        <meta property="og:description" content="Tabler comes with tons of well-designed components and features. Start your adventure with Tabler and make your dashboard great again. For free!">
    
      </head>
      <body  class=" d-flex flex-column bg-white">
        <div class="row g-0 flex-fill">
          <div class="col-12 col-lg-6 col-xl-4 border-top-wide border-primary d-flex flex-column justify-content-center">
            <div class="container container-tight my-5 px-lg-5">
              <div class="text-center mb-4">
                <a href="." class="navbar-brand navbar-brand-autodark"><img src="" height="36" alt=""></a>
              </div>
              <router-link to="/home" class="btn" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
      <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
    </svg>
                Home
            </router-link>
              <h2 class="h3 text-center mb-3">
                Login to your account
              </h2>
              <form action="./" method="get" autocomplete="off" novalidate>
                <div class="mb-3">
                  <label class="form-label">Address Name</label>
                  <input type="text" class="form-control" placeholder="Name" autocomplete="off">
                </div>
                <div class="mb-2">
                  <label class="form-label">
                    Password
                    <span class="form-label-description">
                      <a href="./forgot-password.html">I forgot password</a>
                    </span>
                  </label>
                  <div class="input-group input-group-flat">
                    <input type="password" class="form-control"  placeholder="PassWord"  autocomplete="off">
    
                  </div>
                </div>
                <div class="mb-2">
                  <label class="form-check">
                    <input type="checkbox" class="form-check-input"/>
                    <span class="form-check-label">Remember me on this device</span>
                  </label>
                </div>
                <div class="form-footer">
                  <button type="submit" class="btn btn-primary w-100">Sign in</button>
                </div>
              </form>
              <div class="text-center text-secondary mt-3">
                Don't have account yet? <router-link to="/login">Login</router-link>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-8 d-none d-lg-block">
            <!-- Photo -->
            <div class="bg-cover h-100 min-vh-100" style="background-image: url(./src/assets/static/photos/finances-us-dollars-and-bitcoins-currency-money-2.jpg)"></div>
          </div>
        </div>
    
      </body>
    </html>
    
    </template>