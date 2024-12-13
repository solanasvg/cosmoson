(() => {
  const styleContent = `.labs-follow-me-twitter, .labs-follow-me {
    transform: scale(1);
    position: fixed;
    transition: background 0.3s ease;
    padding: 1rem;
    right: .25rem;
    top: .25rem;
    color: currentColor !important;
    z-index: 1000000;
    
    &:visited, &:active { 
      color: currentColor;
    }
    @media (hover) {
      &:hover {
        background: rgba(255, 255, 255, 0.04);
      }
    }
  }
  `;
  const hide = `.labs-follow-me{display: none !important}`;
  const disableAnimations = `
      *, *:before, *:after {animation-play-state: paused !important; --base-speed: 0s; }
      
    `;

  const embed = new URLSearchParams(window.location.search).has('labs-embed');
  const style = document.createElement('style');
  if (embed) {
    style.innerHTML = hide;
  } else {
    style.innerHTML = styleContent;
  }
  document.head.appendChild(style);

  if (embed) {
    setTimeout(() => {
      const style2 = document.createElement('style');
      style2.innerHTML = disableAnimations;
      document.head.appendChild(style2);
      window.clearInterval(0);
      window.clearInterval(1);
      window.clearInterval(2);
      window.setTimeout =
        window.setInterval =
        window.requestAnimationFrame =
          () => {};
      document
        .querySelectorAll('animate')
        .forEach((node) => node.setAttribute('dur', '0s'));
    }, 5000);
  }

  let followMeButton = document.createElement('a');
  followMeButton.classList.add('labs-follow-me-twitter');
  followMeButton.classList.add('labs-follow-me');
  document.body.appendChild(followMeButton);
  followMeButton.href = 'https://twitter.com/kdenerz';
  followMeButton.target = '_top';
  followMeButton.setAttribute('title', 'Join us on Telegram!');
  followMeButton.innerHTML =
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120" zoomAndPan="magnify" viewBox="0 0 90 37.5" height="50" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="877c58b676"><path d="M 0.59375 0 L 46 0 L 46 37.007812 L 0.59375 37.007812 Z M 0.59375 0 " clip-rule="nonzero"/></clipPath><clipPath id="d442ca7db4"><path d="M 0.59375 0 L 53 0 L 53 37.007812 L 0.59375 37.007812 Z M 0.59375 0 " clip-rule="nonzero"/></clipPath><clipPath id="6f0051430a"><path d="M 0.59375 0 L 61 0 L 61 37.007812 L 0.59375 37.007812 Z M 0.59375 0 " clip-rule="nonzero"/></clipPath><clipPath id="067e1f550f"><path d="M 6 0 L 73 0 L 73 37.007812 L 6 37.007812 Z M 6 0 " clip-rule="nonzero"/></clipPath><clipPath id="8f3ac970a5"><path d="M 19 0 L 80 0 L 80 37.007812 L 19 37.007812 Z M 19 0 " clip-rule="nonzero"/></clipPath><clipPath id="c3ac4d405e"><path d="M 26 0 L 88 0 L 88 37.007812 L 26 37.007812 Z M 26 0 " clip-rule="nonzero"/></clipPath><clipPath id="cb853d8451"><path d="M 34 0 L 89.40625 0 L 89.40625 37.007812 L 34 37.007812 Z M 34 0 " clip-rule="nonzero"/></clipPath><clipPath id="cde95fa4ac"><path d="M 40 0 L 89.40625 0 L 89.40625 37.007812 L 40 37.007812 Z M 40 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#877c58b676)"><path stroke-linecap="butt" transform="matrix(0.284727, -0.049434, 0.049434, 0.284727, 9.110036, 9.296891)" fill="none" stroke-linejoin="miter" d="M 11.898127 18.377898 C 11.487031 18.375121 11.107841 18.583671 10.760557 19.003551 L 10.759343 45.165992 C 10.767376 46.937173 10.862163 48.366715 11.072651 49.445924 C 11.283138 50.525133 11.758226 51.581686 12.479971 52.639905 C 13.870746 54.664875 17.054998 55.684176 22.035039 55.684491 L 22.031511 57.522261 C 21.824807 57.527531 20.269759 58.10814 17.350738 59.275095 C 14.436341 60.415413 12.67459 61.001293 12.030154 60.999161 C 9.916779 61.002659 7.904961 59.789056 6.021337 57.362974 C 4.124395 54.934581 3.170616 52.368114 3.173318 49.665887 L 3.171242 18.070043 C 3.16884 17.767802 5.587054 16.719687 10.425884 14.925699 C 15.251396 13.129398 18.026323 12.239251 18.73966 12.239626 C 19.001948 12.230287 19.293364 12.843372 19.642855 14.070189 C 19.976717 15.308011 20.366808 16.775104 20.806191 18.511421 C 21.258892 20.25005 21.72362 21.524312 22.198062 22.347525 C 22.688134 23.159732 23.605398 23.565933 24.949852 23.566128 L 24.950213 24.828364 C 24.025082 25.257673 22.453293 26.013726 20.234847 27.096524 C 18.018713 28.166004 16.828426 28.700189 16.65067 28.696765 C 16.019552 28.696946 15.220032 26.980418 14.241104 23.531551 C 13.273182 20.098315 12.489291 18.370781 11.898127 18.377898 Z M 11.898127 18.377898 " stroke="#000000" stroke-width="16.624912" stroke-opacity="1" stroke-miterlimit="4"/></g><g clip-path="url(#d442ca7db4)"><path stroke-linecap="butt" transform="matrix(0.286651, -0.0366687, 0.0366687, 0.286651, 16.880043, 7.953234)" fill="none" stroke-linejoin="miter" d="M 3.173703 51.752913 L 3.16326 18.065126 C 3.174177 17.766724 5.569672 16.724065 10.391681 14.928887 C 15.200283 13.131994 17.972597 12.232929 18.680094 12.241669 C 19.402713 12.238717 20.491697 13.100263 21.947046 14.826307 C 23.400679 16.565759 24.140583 18.132146 24.139939 19.522039 L 24.138195 55.116076 C 24.137255 55.443008 21.820492 56.509366 17.187907 58.315148 C 12.570445 60.109238 9.7445 61.001443 8.708355 61.00517 C 7.673926 60.995489 6.494518 60.095122 5.160152 58.275536 C 3.83748 56.471074 3.176474 54.287928 3.173703 51.752913 Z M 13.992991 55.167383 C 14.796057 55.174721 15.616902 54.830027 16.465502 54.16183 L 16.470149 22.806226 C 16.460683 19.684385 15.392132 18.130465 13.239396 18.127629 C 12.394391 18.128552 11.56357 18.444716 10.762053 19.064427 L 10.762238 50.488786 C 10.758297 53.608911 11.840256 55.164546 13.992991 55.167383 Z M 13.992991 55.167383 " stroke="#000000" stroke-width="16.624912" stroke-opacity="1" stroke-miterlimit="4"/></g><g clip-path="url(#6f0051430a)"><path stroke-linecap="butt" transform="matrix(0.288029, -0.0235067, 0.0235067, 0.288029, 25.205548, 6.901172)" fill="none" stroke-linejoin="miter" d="M 7.037579 40.789748 C 5.979046 40.798293 5.054944 39.990527 4.30349 38.396694 C 3.539663 36.788288 3.171473 34.818874 3.170876 32.499723 L 3.174181 19.331291 C 3.17169 18.53093 5.386334 17.152041 9.819212 15.181154 C 14.250991 13.223739 16.799699 12.238288 17.477711 12.239374 C 17.992955 12.240738 18.710576 13.085901 19.630572 14.774862 C 19.840088 15.198821 20.146387 15.766298 20.54837 16.490767 C 20.951452 17.201763 21.283596 17.784912 21.543702 18.253686 C 22.084262 19.274266 22.775481 19.778224 23.629732 19.780131 L 23.622884 21.027276 C 22.947628 21.324779 22.042522 21.77983 20.909766 22.365483 C 18.239542 23.84281 16.808475 24.593986 16.591819 24.589866 C 15.967697 24.593178 15.161811 23.333952 14.212379 20.842431 C 13.262948 18.35091 12.496379 17.108455 11.900301 17.100494 C 11.140356 17.106283 10.763146 17.740036 10.755199 19.000654 L 10.768135 33.133313 C 10.76542 34.828341 11.144035 35.672961 11.90288 35.680644 C 12.065647 35.680366 13.385915 35.123577 15.834542 34.035025 C 18.284269 32.933 19.767304 32.375934 20.269076 32.376199 C 21.286093 32.377828 22.182152 33.196867 22.958351 34.819844 C 23.748023 36.443921 24.134361 38.523313 24.130839 41.059119 L 24.12919 54.539612 C 24.131681 55.339973 21.712754 56.729314 16.886981 58.69526 C 12.047736 60.660107 9.268899 61.640338 8.550471 61.635954 C 8.251882 61.63871 7.915618 61.272216 7.526008 60.562319 C 7.164443 59.841149 6.664299 58.823868 6.041249 57.484629 C 5.430572 56.159963 4.896609 55.058549 4.400042 54.163617 C 3.915848 53.283257 3.260648 52.836487 2.406398 52.83458 L 2.414345 51.573962 C 3.076129 51.27536 3.966663 50.832682 5.072474 50.24483 C 7.770742 48.756229 9.228754 48.007252 9.431937 48.010273 C 10.069532 48.00806 10.967803 49.464694 12.125651 52.393646 C 13.284598 55.309126 14.155925 56.763561 14.753103 56.75805 C 15.172942 56.76519 15.58013 56.594991 15.960096 56.259827 C 16.341161 55.911191 16.527838 55.451756 16.522327 54.854578 L 16.532759 40.601768 C 16.523922 38.715929 16.004809 37.764909 14.947375 37.759981 C 14.608369 37.759438 13.279026 38.261238 10.944774 39.277753 C 8.625094 40.281895 7.322696 40.785893 7.037579 40.789748 Z M 7.037579 40.789748 " stroke="#000000" stroke-width="16.624912" stroke-opacity="1" stroke-miterlimit="4"/></g><g clip-path="url(#067e1f550f)"><path stroke-linecap="butt" transform="matrix(0.2889, -0.00706527, 0.00706527, 0.2889, 33.581991, 6.179218)" fill="none" stroke-linejoin="miter" d="M 3.168797 54.54211 L 3.166606 22.564656 C 3.173619 21.172154 2.864875 19.974747 2.267731 18.959582 C 1.6841 17.944748 0.953111 17.42659 0.0605914 17.431805 L 0.0676038 16.039303 C 0.366212 15.992522 2.669116 14.710252 6.976645 12.178982 C 7.258766 12.253487 7.620974 12.370513 8.036242 12.529401 C 8.465354 12.675106 9.023317 13.080864 9.709801 13.760186 C 10.409798 14.439839 10.755812 15.219004 10.761358 16.098011 C 11.021079 15.982672 11.734331 15.56744 12.927148 14.893515 C 16.053391 13.117579 17.981529 12.231777 18.711562 12.236109 C 19.455108 12.240772 20.27081 12.612269 21.185033 13.378288 C 22.085742 14.143976 22.780121 15.05335 23.241143 16.105749 C 23.323543 16.05368 24.186099 15.615057 25.829142 14.776367 C 29.129071 13.085806 31.124113 12.228682 31.786581 12.231362 C 33.138544 12.237383 34.401461 13.120098 35.588515 14.89335 C 36.775568 16.666602 37.371354 18.290184 37.375541 19.777607 L 37.367194 51.633113 C 37.364735 53.94516 38.399217 55.322569 40.457785 55.737983 L 40.464286 57.130815 L 33.568427 61.00498 C 32.644952 60.617326 31.767634 60.000943 30.964159 59.129464 C 30.160685 58.257985 29.761279 57.450472 29.766603 56.6799 L 29.768305 25.649019 C 29.762207 23.133945 29.345726 21.366017 28.531382 20.386103 C 27.704187 19.378833 26.216469 18.842169 24.055047 18.762268 L 24.062453 51.632242 C 24.059995 53.944289 25.094476 55.321698 27.166558 55.737442 L 27.159546 57.129944 L 20.263687 61.004109 C 19.340212 60.616455 18.476406 60.000402 17.672932 59.128923 C 16.869457 58.257444 16.470052 57.449932 16.461532 56.692542 L 16.463234 25.661661 C 16.460772 22.997944 16.072638 21.176624 15.28499 20.210885 C 14.510855 19.245476 12.99479 18.762203 10.76382 18.761727 L 10.767297 51.239493 C 10.755988 52.807664 10.931254 53.934201 11.266069 54.618445 C 11.614727 55.289505 12.309804 55.617489 13.36448 55.61624 L 13.357101 57.576619 L 0.392466 63.019547 L -0.639665 60.993183 C 0.293063 61.002472 1.185289 60.456406 2.023499 59.354654 C 2.792823 58.305302 3.170305 56.692001 3.168797 54.54211 Z M 3.168797 54.54211 " stroke="#000000" stroke-width="16.624912" stroke-opacity="1" stroke-miterlimit="4"/></g><g clip-path="url(#8f3ac970a5)"><path stroke-linecap="butt" transform="matrix(0.288831, 0.00949175, -0.00949175, 0.288831, 45.92259, 5.950284)" fill="none" stroke-linejoin="miter" d="M 3.172582 51.757954 L 3.174461 18.068724 C 3.164694 17.77151 5.577996 16.718448 10.387791 14.923939 C 15.197586 13.129429 17.967914 12.240452 18.670865 12.230875 C 19.401281 12.233921 20.484788 13.104445 21.934454 14.828496 C 23.398073 16.565612 24.139015 18.123612 24.130704 19.516894 L 24.137386 55.112776 C 24.134975 55.450964 21.816686 56.514427 17.196471 58.316231 C 12.575813 60.104525 9.751446 60.995279 8.710307 61.002445 C 7.668723 60.996101 6.489315 60.088154 5.158574 58.27905 C 3.841342 56.469501 3.174546 54.286944 3.172582 51.757954 Z M 13.996183 55.175556 C 14.794147 55.176382 15.621541 54.838131 16.464856 54.161249 L 16.462482 22.811872 C 16.468004 19.687565 15.388874 18.127154 13.238601 18.130196 C 12.386598 18.131146 11.571826 18.441933 10.767265 19.063445 L 10.758348 50.480814 C 10.766336 53.604678 11.831957 55.165532 13.996183 55.175556 Z M 13.996183 55.175556 " stroke="#000000" stroke-width="16.624912" stroke-opacity="1" stroke-miterlimit="4"/></g><g clip-path="url(#c3ac4d405e)"><path stroke-linecap="butt" transform="matrix(0.288093, 0.0227052, -0.0227052, 0.288093, 54.309354, 6.23863)" fill="none" stroke-linejoin="miter" d="M 7.035388 40.78562 C 5.977945 40.787606 5.061034 39.992095 4.298131 38.398026 C 3.547641 36.78942 3.17592 34.825548 3.169494 32.50747 L 3.174814 19.32773 C 3.166056 18.528441 5.389284 17.146475 9.817546 15.183957 C 14.245809 13.221439 16.798415 12.233843 17.476426 12.234643 C 17.991673 12.234713 18.708579 13.073104 19.642743 14.775706 C 19.838431 15.194171 20.14119 15.766904 20.549958 16.480432 C 20.94525 17.195022 21.276022 17.779107 21.543334 18.246162 C 22.085392 19.2746 22.775748 19.77611 23.63 19.776579 L 23.620965 21.038276 C 22.939367 21.336055 22.038248 21.773167 20.905193 22.364147 C 18.242592 23.848535 16.809164 24.585219 16.592498 24.588736 C 15.954912 24.58475 15.16572 23.345286 14.209322 20.844457 C 13.267462 18.356041 12.490683 17.102041 11.90806 17.107281 C 11.148135 17.099378 10.764717 17.739749 10.755682 19.001446 L 10.758389 33.14324 C 10.755326 34.824794 11.147764 35.675198 11.906627 35.669627 C 12.069392 35.670358 13.382935 35.132948 15.831656 34.031508 C 18.280377 32.930068 19.769098 32.378852 20.27087 32.379984 C 21.274412 32.382246 22.17891 33.192294 22.958474 34.825726 C 23.750452 36.444622 24.130669 38.516297 24.140611 41.051041 L 24.132768 54.542836 C 24.141526 55.342125 21.715107 56.726546 16.880462 58.693973 C 12.045818 60.661401 9.275483 61.639039 8.555984 61.627949 C 8.24499 61.638901 7.904261 61.272544 7.523505 60.570368 C 7.154101 59.840179 6.667006 58.820968 6.04662 57.486846 C 5.440772 56.165138 4.892342 55.055849 4.402391 54.172453 C 3.924854 53.274519 3.253284 52.839324 2.412507 52.837792 L 2.407005 51.563683 C 3.075127 51.266965 3.962771 50.830916 5.068875 50.24206 C 7.771903 48.754485 9.23228 48.015677 9.435472 48.013222 C 10.073057 48.017209 10.973569 49.464843 12.125654 52.384136 C 13.291215 55.302368 14.165838 56.765601 14.74846 56.76036 C 15.16938 56.767863 15.575431 56.586713 15.956325 56.258397 C 16.336157 55.916605 16.53019 55.453867 16.523887 54.857769 L 16.526159 40.60711 C 16.525705 38.70889 16.003494 37.760241 14.946051 37.762227 C 14.607045 37.761827 13.276841 38.259873 10.943025 39.270903 C 8.622685 40.280871 7.320493 40.790268 7.035388 40.78562 Z M 7.035388 40.78562 " stroke="#000000" stroke-width="16.624912" stroke-opacity="1" stroke-miterlimit="4"/></g><g clip-path="url(#cb853d8451)"><path stroke-linecap="butt" transform="matrix(0.286752, 0.0358711, -0.0358711, 0.286752, 62.564909, 6.899626)" fill="none" stroke-linejoin="miter" d="M 3.169808 51.759532 L 3.16332 18.058506 C 3.166645 17.758397 5.570771 16.722044 10.385754 14.920944 C 15.202416 13.133257 17.963666 12.229321 18.672862 12.235961 C 19.395471 12.240924 20.483654 13.099234 21.940768 14.837716 C 23.409616 16.561109 24.1374 18.132001 24.134176 19.52189 L 24.13078 55.104045 C 24.132488 55.444392 21.813871 56.510915 17.190019 58.31535 C 12.577901 60.104695 9.74791 61.003608 8.698367 60.998676 C 7.677328 61.0038 6.486868 60.090173 5.17058 58.279584 C 3.839203 56.45726 3.173397 54.292851 3.169808 51.759532 Z M 13.990803 55.173728 C 14.793886 55.168624 15.623765 54.83323 16.467025 54.169224 L 16.467461 22.810385 C 16.4722 19.690261 15.390657 18.122755 13.237922 18.119602 C 12.394601 18.12974 11.561367 18.438309 10.754989 19.070457 L 10.761265 50.482945 C 10.758203 53.616482 11.838068 55.170576 13.990803 55.173728 Z M 13.990803 55.173728 " stroke="#000000" stroke-width="16.624912" stroke-opacity="1" stroke-miterlimit="4"/></g><g clip-path="url(#cde95fa4ac)"><path stroke-linecap="butt" transform="matrix(0.284796, 0.0490379, -0.0490379, 0.284796, 70.893203, 7.953396)" fill="none" stroke-linejoin="miter" d="M 3.175166 53.781297 L 3.163235 22.565798 C 3.169056 21.165767 2.867083 19.969609 2.268341 18.96171 C 1.680627 17.938197 0.949029 17.433233 0.0579313 17.435792 L 0.0637527 16.03576 C 0.359109 15.99862 2.661088 14.710713 6.96969 12.172039 C 7.259048 12.259375 7.621892 12.375206 8.044901 12.521825 C 8.46791 12.668445 9.019012 13.081043 9.713824 13.770649 C 10.404048 14.433612 10.7571 15.209496 10.759659 16.100594 C 11.012317 15.974793 11.739063 15.575338 12.924281 14.891201 C 16.048106 13.118884 17.898935 12.237842 18.487795 12.232461 C 19.84557 12.231842 21.110363 13.125056 22.27988 14.898781 C 23.462718 16.670213 24.058108 18.295908 24.052727 19.778159 L 24.063601 51.624775 C 24.051605 53.94484 25.096733 55.314789 27.159023 55.741501 L 27.166523 57.139239 L 20.273906 61.000667 C 19.342933 60.612329 18.48183 59.992504 17.67498 59.130167 C 16.868131 58.267829 16.465941 57.445542 16.472998 56.689948 L 16.464243 25.65221 C 16.472181 22.989945 16.078018 21.178726 15.295076 20.21626 C 14.50984 19.240473 13.000593 18.759682 10.765042 18.760565 L 10.761536 51.240592 C 10.763919 52.927246 10.976792 54.083882 11.400154 54.7105 C 11.818929 55.310475 12.476159 55.622504 13.353935 55.622239 L 13.362229 57.582195 L 0.39143 63.025125 L -0.630585 60.99283 C 0.207228 60.999446 1.040101 60.499421 1.839097 59.484023 C 2.732753 58.30145 3.173669 56.401306 3.175166 53.781297 Z M 3.175166 53.781297 " stroke="#000000" stroke-width="16.624912" stroke-opacity="1" stroke-miterlimit="4"/></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(12.125511, 26.66525)"><g><path d="M 1.28125 -12.71875 C 1.15625 -12.695312 1.054688 -12.617188 0.984375 -12.484375 L 2.28125 -5.046875 C 2.363281 -4.535156 2.460938 -4.128906 2.578125 -3.828125 C 2.703125 -3.535156 2.890625 -3.265625 3.140625 -3.015625 C 3.628906 -2.492188 4.585938 -2.359375 6.015625 -2.609375 L 6.109375 -2.078125 C 6.046875 -2.066406 5.625 -1.820312 4.84375 -1.34375 C 4.070312 -0.875 3.597656 -0.625 3.421875 -0.59375 C 2.828125 -0.488281 2.195312 -0.734375 1.53125 -1.328125 C 0.875 -1.929688 0.476562 -2.617188 0.34375 -3.390625 L -1.21875 -12.375 C -1.226562 -12.457031 -0.59375 -12.875 0.6875 -13.625 C 1.976562 -14.382812 2.726562 -14.78125 2.9375 -14.8125 C 3.007812 -14.832031 3.117188 -14.675781 3.265625 -14.34375 C 3.421875 -14.007812 3.601562 -13.601562 3.8125 -13.125 C 4.03125 -12.65625 4.226562 -12.316406 4.40625 -12.109375 C 4.59375 -11.898438 4.875 -11.828125 5.25 -11.890625 L 5.3125 -11.53125 C 5.082031 -11.363281 4.675781 -11.070312 4.09375 -10.65625 C 3.507812 -10.238281 3.191406 -10.023438 3.140625 -10.015625 C 2.960938 -9.984375 2.648438 -10.429688 2.203125 -11.359375 C 1.765625 -12.296875 1.457031 -12.75 1.28125 -12.71875 Z M 1.28125 -12.71875 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(19.116834, 25.438936)"><g><path d="M 0.578125 -2.765625 L -0.65625 -12.421875 C -0.664062 -12.503906 -0.015625 -12.890625 1.296875 -13.578125 C 2.609375 -14.273438 3.363281 -14.632812 3.5625 -14.65625 C 3.769531 -14.6875 4.113281 -14.476562 4.59375 -14.03125 C 5.070312 -13.59375 5.335938 -13.175781 5.390625 -12.78125 L 6.6875 -2.578125 C 6.695312 -2.484375 6.070312 -2.09375 4.8125 -1.40625 C 3.5625 -0.71875 2.785156 -0.351562 2.484375 -0.3125 C 2.191406 -0.28125 1.820312 -0.5 1.375 -0.96875 C 0.9375 -1.4375 0.671875 -2.035156 0.578125 -2.765625 Z M 3.796875 -2.1875 C 4.023438 -2.21875 4.25 -2.34375 4.46875 -2.5625 L 3.3125 -11.546875 C 3.195312 -12.453125 2.832031 -12.863281 2.21875 -12.78125 C 1.96875 -12.75 1.742188 -12.625 1.546875 -12.40625 L 2.6875 -3.390625 C 2.800781 -2.503906 3.171875 -2.101562 3.796875 -2.1875 Z M 3.796875 -2.1875 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(26.639454, 24.470945)"><g><path d="M 1.5625 -6 C 1.257812 -5.96875 0.976562 -6.171875 0.71875 -6.609375 C 0.457031 -7.054688 0.300781 -7.613281 0.25 -8.28125 L -0.0625 -12.078125 C -0.0703125 -12.304688 0.53125 -12.753906 1.75 -13.421875 C 2.976562 -14.097656 3.691406 -14.441406 3.890625 -14.453125 C 4.035156 -14.460938 4.257812 -14.238281 4.5625 -13.78125 C 4.632812 -13.65625 4.738281 -13.492188 4.875 -13.296875 C 5.007812 -13.097656 5.117188 -12.929688 5.203125 -12.796875 C 5.378906 -12.523438 5.59375 -12.398438 5.84375 -12.421875 L 5.875 -12.078125 C 5.6875 -11.972656 5.429688 -11.816406 5.109375 -11.609375 C 4.378906 -11.117188 3.984375 -10.875 3.921875 -10.875 C 3.734375 -10.863281 3.472656 -11.203125 3.140625 -11.890625 C 2.816406 -12.585938 2.566406 -12.929688 2.390625 -12.921875 C 2.171875 -12.898438 2.078125 -12.703125 2.109375 -12.328125 L 2.4375 -8.265625 C 2.476562 -7.773438 2.609375 -7.539062 2.828125 -7.5625 C 2.878906 -7.5625 3.242188 -7.75 3.921875 -8.125 C 4.609375 -8.5 5.023438 -8.691406 5.171875 -8.703125 C 5.460938 -8.734375 5.738281 -8.523438 6 -8.078125 C 6.257812 -7.628906 6.421875 -7.039062 6.484375 -6.3125 L 6.796875 -2.421875 C 6.816406 -2.191406 6.148438 -1.734375 4.796875 -1.046875 C 3.453125 -0.367188 2.675781 -0.0234375 2.46875 -0.015625 C 2.394531 -0.00390625 2.296875 -0.0976562 2.171875 -0.296875 C 2.046875 -0.492188 1.878906 -0.78125 1.671875 -1.15625 C 1.460938 -1.53125 1.273438 -1.835938 1.109375 -2.078125 C 0.953125 -2.316406 0.75 -2.425781 0.5 -2.40625 L 0.46875 -2.765625 C 0.65625 -2.867188 0.90625 -3.019531 1.21875 -3.21875 C 1.945312 -3.707031 2.335938 -3.953125 2.390625 -3.953125 C 2.578125 -3.972656 2.875 -3.578125 3.28125 -2.765625 C 3.6875 -1.953125 3.976562 -1.550781 4.15625 -1.5625 C 4.28125 -1.570312 4.390625 -1.628906 4.484375 -1.734375 C 4.585938 -1.847656 4.632812 -1.992188 4.625 -2.171875 L 4.28125 -6.265625 C 4.238281 -6.816406 4.0625 -7.078125 3.75 -7.046875 C 3.65625 -7.046875 3.285156 -6.867188 2.640625 -6.515625 C 2.003906 -6.171875 1.644531 -6 1.5625 -6 Z M 1.5625 -6 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(34.012973, 23.802138)"><g><path d="M 0.875 -1.875 L 0.65625 -11.125 C 0.644531 -11.519531 0.546875 -11.863281 0.359375 -12.15625 C 0.179688 -12.457031 -0.0351562 -12.601562 -0.296875 -12.59375 L -0.296875 -12.984375 C -0.210938 -13.003906 0.441406 -13.394531 1.671875 -14.15625 C 1.753906 -14.132812 1.851562 -14.101562 1.96875 -14.0625 C 2.09375 -14.019531 2.257812 -13.90625 2.46875 -13.71875 C 2.675781 -13.53125 2.785156 -13.304688 2.796875 -13.046875 C 2.867188 -13.085938 3.070312 -13.207031 3.40625 -13.40625 C 4.300781 -13.945312 4.851562 -14.21875 5.0625 -14.21875 C 5.28125 -14.226562 5.519531 -14.125 5.78125 -13.90625 C 6.050781 -13.695312 6.257812 -13.441406 6.40625 -13.140625 C 6.425781 -13.148438 6.671875 -13.285156 7.140625 -13.546875 C 8.078125 -14.054688 8.644531 -14.3125 8.84375 -14.3125 C 9.226562 -14.320312 9.597656 -14.070312 9.953125 -13.5625 C 10.304688 -13.0625 10.488281 -12.597656 10.5 -12.171875 L 10.734375 -2.96875 C 10.742188 -2.300781 11.050781 -1.910156 11.65625 -1.796875 L 11.65625 -1.390625 L 9.703125 -0.234375 C 9.429688 -0.347656 9.175781 -0.523438 8.9375 -0.765625 C 8.695312 -1.003906 8.570312 -1.234375 8.5625 -1.453125 L 8.34375 -10.40625 C 8.320312 -11.144531 8.191406 -11.65625 7.953125 -11.9375 C 7.710938 -12.21875 7.28125 -12.363281 6.65625 -12.375 L 6.890625 -2.875 C 6.898438 -2.207031 7.207031 -1.816406 7.8125 -1.703125 L 7.8125 -1.296875 L 5.859375 -0.140625 C 5.585938 -0.253906 5.332031 -0.429688 5.09375 -0.671875 C 4.851562 -0.910156 4.726562 -1.140625 4.71875 -1.359375 L 4.5 -10.3125 C 4.476562 -11.082031 4.351562 -11.601562 4.125 -11.875 C 3.894531 -12.15625 3.457031 -12.289062 2.8125 -12.28125 L 3.046875 -2.890625 C 3.054688 -2.441406 3.113281 -2.117188 3.21875 -1.921875 C 3.320312 -1.734375 3.523438 -1.644531 3.828125 -1.65625 L 3.828125 -1.078125 L 0.125 0.578125 L -0.1875 0 C 0.0820312 0 0.332031 -0.160156 0.5625 -0.484375 C 0.789062 -0.796875 0.894531 -1.257812 0.875 -1.875 Z M 0.875 -1.875 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(45.343594, 23.568962)"><g><path d="M 1.015625 -2.640625 L 1.328125 -12.375 C 1.328125 -12.457031 2.03125 -12.734375 3.4375 -13.203125 C 4.851562 -13.679688 5.660156 -13.914062 5.859375 -13.90625 C 6.066406 -13.90625 6.367188 -13.644531 6.765625 -13.125 C 7.171875 -12.613281 7.367188 -12.15625 7.359375 -11.75 L 7.03125 -1.46875 C 7.019531 -1.375 6.335938 -1.085938 4.984375 -0.609375 C 3.640625 -0.140625 2.816406 0.0859375 2.515625 0.078125 C 2.210938 0.0664062 1.878906 -0.203125 1.515625 -0.734375 C 1.148438 -1.273438 0.984375 -1.910156 1.015625 -2.640625 Z M 4.109375 -1.546875 C 4.335938 -1.546875 4.570312 -1.632812 4.8125 -1.8125 L 5.109375 -10.875 C 5.140625 -11.78125 4.847656 -12.242188 4.234375 -12.265625 C 3.984375 -12.273438 3.738281 -12.1875 3.5 -12 L 3.203125 -2.921875 C 3.179688 -2.023438 3.484375 -1.566406 4.109375 -1.546875 Z M 4.109375 -1.546875 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(52.924336, 23.812326)"><g><path d="M 2.484375 -5.671875 C 2.179688 -5.691406 1.9375 -5.941406 1.75 -6.421875 C 1.570312 -6.898438 1.507812 -7.46875 1.5625 -8.125 L 1.875 -11.9375 C 1.882812 -12.164062 2.546875 -12.507812 3.859375 -12.96875 C 5.179688 -13.4375 5.941406 -13.664062 6.140625 -13.65625 C 6.285156 -13.644531 6.472656 -13.378906 6.703125 -12.859375 C 6.753906 -12.734375 6.828125 -12.5625 6.921875 -12.34375 C 7.023438 -12.132812 7.109375 -11.960938 7.171875 -11.828125 C 7.304688 -11.523438 7.5 -11.363281 7.75 -11.34375 L 7.71875 -10.984375 C 7.507812 -10.910156 7.234375 -10.800781 6.890625 -10.65625 C 6.097656 -10.28125 5.671875 -10.097656 5.609375 -10.109375 C 5.421875 -10.117188 5.21875 -10.492188 5 -11.234375 C 4.789062 -11.972656 4.597656 -12.351562 4.421875 -12.375 C 4.203125 -12.382812 4.078125 -12.207031 4.046875 -11.84375 L 3.71875 -7.765625 C 3.6875 -7.285156 3.78125 -7.039062 4 -7.03125 C 4.050781 -7.019531 4.441406 -7.144531 5.171875 -7.40625 C 5.910156 -7.664062 6.351562 -7.789062 6.5 -7.78125 C 6.789062 -7.75 7.023438 -7.492188 7.203125 -7.015625 C 7.390625 -6.535156 7.457031 -5.929688 7.40625 -5.203125 L 7.09375 -1.3125 C 7.082031 -1.082031 6.351562 -0.738281 4.90625 -0.28125 C 3.46875 0.175781 2.648438 0.394531 2.453125 0.375 C 2.367188 0.375 2.28125 0.265625 2.1875 0.046875 C 2.09375 -0.171875 1.972656 -0.476562 1.828125 -0.875 C 1.679688 -1.28125 1.546875 -1.613281 1.421875 -1.875 C 1.304688 -2.144531 1.125 -2.289062 0.875 -2.3125 L 0.90625 -2.65625 C 1.101562 -2.726562 1.375 -2.835938 1.71875 -2.984375 C 2.519531 -3.347656 2.945312 -3.523438 3 -3.515625 C 3.1875 -3.503906 3.410156 -3.066406 3.671875 -2.203125 C 3.941406 -1.335938 4.164062 -0.898438 4.34375 -0.890625 C 4.46875 -0.878906 4.585938 -0.914062 4.703125 -1 C 4.828125 -1.09375 4.894531 -1.226562 4.90625 -1.40625 L 5.234375 -5.5 C 5.273438 -6.050781 5.140625 -6.335938 4.828125 -6.359375 C 4.734375 -6.367188 4.335938 -6.253906 3.640625 -6.015625 C 2.953125 -5.773438 2.566406 -5.660156 2.484375 -5.671875 Z M 2.484375 -5.671875 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(60.376774, 24.391485)"><g><path d="M 1.25 -2.546875 L 2.46875 -12.203125 C 2.476562 -12.285156 3.203125 -12.5 4.640625 -12.84375 C 6.078125 -13.1875 6.894531 -13.34375 7.09375 -13.3125 C 7.300781 -13.289062 7.582031 -13.003906 7.9375 -12.453125 C 8.300781 -11.910156 8.457031 -11.4375 8.40625 -11.03125 L 7.140625 -0.828125 C 7.117188 -0.734375 6.414062 -0.507812 5.03125 -0.15625 C 3.644531 0.195312 2.800781 0.351562 2.5 0.3125 C 2.195312 0.269531 1.890625 -0.03125 1.578125 -0.59375 C 1.273438 -1.164062 1.164062 -1.816406 1.25 -2.546875 Z M 4.21875 -1.171875 C 4.445312 -1.140625 4.695312 -1.203125 4.96875 -1.359375 L 6.09375 -10.359375 C 6.195312 -11.253906 5.941406 -11.742188 5.328125 -11.828125 C 5.078125 -11.859375 4.828125 -11.789062 4.578125 -11.625 L 3.453125 -2.609375 C 3.335938 -1.722656 3.59375 -1.242188 4.21875 -1.171875 Z M 4.21875 -1.171875 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(67.901893, 25.325933)"><g><path d="M 1.265625 -1.890625 L 2.796875 -10.796875 C 2.859375 -11.179688 2.832031 -11.535156 2.71875 -11.859375 C 2.601562 -12.179688 2.414062 -12.363281 2.15625 -12.40625 L 2.21875 -12.796875 C 2.300781 -12.796875 3.019531 -13.050781 4.375 -13.5625 C 4.457031 -13.53125 4.550781 -13.476562 4.65625 -13.40625 C 4.769531 -13.34375 4.910156 -13.195312 5.078125 -12.96875 C 5.242188 -12.75 5.304688 -12.507812 5.265625 -12.25 C 5.347656 -12.28125 5.578125 -12.359375 5.953125 -12.484375 C 6.921875 -12.847656 7.488281 -13.015625 7.65625 -12.984375 C 8.039062 -12.921875 8.359375 -12.601562 8.609375 -12.03125 C 8.859375 -11.457031 8.945312 -10.960938 8.875 -10.546875 L 7.3125 -1.46875 C 7.195312 -0.8125 7.421875 -0.378906 7.984375 -0.171875 L 7.921875 0.234375 L 5.78125 1 C 5.53125 0.832031 5.3125 0.609375 5.125 0.328125 C 4.9375 0.046875 4.863281 -0.203125 4.90625 -0.421875 L 6.421875 -9.25 C 6.546875 -10 6.519531 -10.535156 6.34375 -10.859375 C 6.175781 -11.179688 5.773438 -11.394531 5.140625 -11.5 L 3.546875 -2.234375 C 3.460938 -1.753906 3.460938 -1.421875 3.546875 -1.234375 C 3.640625 -1.046875 3.8125 -0.929688 4.0625 -0.890625 L 3.96875 -0.3125 L 0.015625 0.578125 L -0.1875 -0.03125 C 0.0625 0.0078125 0.328125 -0.09375 0.609375 -0.34375 C 0.910156 -0.632812 1.128906 -1.148438 1.265625 -1.890625 Z M 1.265625 -1.890625 "/></g></g></g></svg>
  `.replaceAll('fill="black"', 'fill="currentColor"');
})();