<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>Standbasis - Administrative Panel</title>

  <!-- Splash Screen/Loader Styles -->
  <link rel="stylesheet" type="text/css" href="{{ asset(mix('css/loader.css')) }}" />

  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }} ">

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('images/logo/favicon.png') }}">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">

  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/drilldown.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"></script>

  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">
  <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>



  <style>
    .flex-right{
          display: -webkit-flex !important;
        display: flex !important;
        list-style-type: none;
        padding-bottom: 10px !important;
        justify-content: flex-end;
        padding: 10px;
    }
    
    a {
        color: #06050e;
        text-decoration: none;
    }
    body {
        background-color: #f8f9fc !important;
    }
    div.dataTables_length select {
      background-position: calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0;
      width: 5rem;
      margin: 0 0.5rem;

      background-size: 15px 14px;
      border: 1px solid #d8d6de;
      border-radius: 0.357rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      padding: 0.571rem 1rem 0.571rem 1rem;
    }
    .me-1{
        padding: 20px;
    }
    .mr-2 {
      padding: 20px !important;
      margin-top: 10px !important;
    }
    .filter-padding{
      padding: 15px;
    }
    .main-menu .navbar-header .navbar-brand .brand-text {
    color: #0d0c1a;
    font-weight: 600;
    letter-spacing: 0.01rem;
    font-size: 1.45rem;
}

.main-menu.menu-light .navigation > li.active > a {
    box-shadow: 0 0 10px 1px transparent !important;
    border-radius: 4px;
}

.main-menu.menu-light .navigation > li.active > a {
    background: linear-gradient(118deg, transparent, transparent) !important;
    color: #000 !important;
}
  .page-item.active .page-link {
    border-radius: 5rem;
    background-color: #29282e !important;
  }
  .nav-pills .nav-link.active {
    border-color: #1a191c !important;
    box-shadow: 0 4px 18px -4px rgb(115 103 240 / 65%);
  }

  .nav-pills .nav-link.active, 
  .nav-pills .show > .nav-link {
   background-color: #2b2b2c !important;
  }
  .searching{
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
  .b-sidebar.sidebar-lg {
      width: 45rem !important;
  }
  .main-menu.menu-light {
    background: #201B33 !important;
  }

  .main-menu.menu-light .navigation {
    background: #201B33 !important;
  }
  .main-menu.menu-light .navigation > li.active > a {
    background: linear-gradient(118deg, transparent, transparent) !important;
    color: #f5f1f1 !important;
  }

  .main-menu.menu-light .navigation > li > a {
    background: linear-gradient(118deg, transparent, transparent) !important;
    color: #B3AFC2 !important;
  }

  .truncate  span{
    color: #201b33 !important;
    font-weight: bold !important;
    text-decoration: none;
  }
  .mercahnt-welcome{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title-text{
    font-size: 30px;
    font-weight: 700;
  }
  .subtitle-text{
    font-size: 20px;
  }
  .start-button{
    border-color: #201b33 !important;
    background-color: #201b33 !important;
    padding: 20px !important;
    font-size: 20px !important;
  }
  </style>
</head>

<body>
  <noscript>
    <strong>We're sorry but Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template doesn't work properly without
      JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="loading-bg">
    <div class="loading-logo">
      <img src="{{ asset('logo.png') }}" alt="Logo" style="width: 200px;" />
    </div>
    <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>
  <div id="app">
  </div>

  <script src="{{ asset(mix('js/app.js')) }}?time={{ time() }} "></script>
  <!--<script src="{{ asset( 'js/app.js?time=') }} {{ time() }}" defer></script>-->

</body>

</html>
