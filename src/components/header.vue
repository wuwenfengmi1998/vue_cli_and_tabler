<script>
import jsvectormapMin from '@/assets/dist/libs/jsvectormap/dist/js/jsvectormap.min';

export default{

    //emits:['user_info'],

    data(){
        return{
            user_is_sign:false,
            user:{},
            h_test:'test',
            avatar:"background-image: url(./avatar.jpg)"
        }
    },

    methods:{
        sign(user)
        {
            localStorage.setItem('user_token',user['acc']['token']);
            localStorage.setItem('user_token_time',user['acc']['token_time']);

            sessionStorage.setItem('sign_user',JSON.stringify(user));
            sessionStorage.setItem('sign_user_is_sign',true);

            this.user_is_sign=true;
            this.user=user;

            if(this.user['info']['avatar']==null)
            {
                this.avatar="background-image: url(./avatar.jpg)";
            }else
            {
                this.avatar="background-image: url("+this.user['info']['avatar']+")";
            }
            //console.log(user);
        },
        logout(){
            localStorage.removeItem('user_token');
            localStorage.removeItem('user_token_time');
            this.user={};
            this.user_is_sign=false;
            
            //this.global_.user={};
            //this.global_.user_is_sign=false;
            sessionStorage.removeItem('sign_user');
            sessionStorage.removeItem('sign_user_is_sign');
        }
    },
    mounted(){

        //判断用户是否有token 是否有登录
        var get_token_time = localStorage.getItem('user_token_time');
        var get_token = localStorage.getItem('user_token');
        var updata_user=false;
        if(get_token_time==null)
        {
            //updata_user=true;

        }else
        {
            if(get_token==null)
            {
                this.logout();
            }else
            {
                var token_time = new Date(get_token_time).getTime();
                var today = new Date().getTime();
                if((token_time-today)<0)
                {
                    updata_user=false;
                    //本地token过期
                    this.logout();
                }else
                {
                    if((sessionStorage.getItem('sign_user')==null)|(sessionStorage.getItem('sign_user_is_sign')==null))
                    {
                        updata_user=true;
                    }else{
                        this.sign(JSON.parse(sessionStorage.getItem('sign_user')));
                    }
                }
            }

        }
        //console.log(updata_user);
        //if(sessionStorage.getItem('user_updata_flag')=='true'){
        //    sessionStorage.removeItem('user_updata_flag');
        //    updata_user=true;
        //}
        if(updata_user)
        {
            const params = new URLSearchParams();
                params.append('token', localStorage.getItem('user_token'));  
                this.$http({
                    method:'POST',
                    url:'/api/sign.php',
                    data:params,
                }).then(response=>{
                    var error_data=response.data;
                    console.log(error_data);
                    switch(error_data['error_code']){
                        case 0:
                            this.sign(error_data['user']);
  

                            //console.log(error_data);
                            break;
                        case 5:
                            this.logout();
                            //console.log("token not found");
                            break;
                        case 6:
                            this.logout();
                            //console.log("token time out");
                            break;
                        
                    }

                },error=>{
                    //console.log("error");
                });
        }



        //console.log(this.toot.global_.global_test);
    }
}
</script>

<template>
           <header class="navbar navbar-expand-md d-print-none" >
            <div class="container-xl">
                
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <a href=".">
                <img src="../assets/static/logo.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image">
                </a>
            </h1>
            <div class="navbar-nav flex-row order-md-last">
                <div class="nav-item d-none d-md-flex me-3">
                <div class="btn-list">
                    <a href="https://git.lmve.net/kevin/tabler_and_vue" class="btn" target="_blank" rel="noreferrer">
                    <!-- Download SVG icon from http://tabler-icons.io/i/brand-github -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path></svg>
                    Source code
                    </a>
                    <a href="https://git.lmve.net/kevin" class="btn" target="_blank" rel="noreferrer">
                    <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-pink" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                    Sponsor
                    </a>
                </div>

                </div>
                
                <div v-if="user_is_sign" class="d-none d-md-flex">
                    <div class="nav-item dropdown d-none d-md-flex me-3">
                        <a href="#" class="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1" aria-label="Show notifications">
                        <!-- Download SVG icon from http://tabler-icons.io/i/bell -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                        <span class="badge bg-red"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                        <div class="card">
                            <div class="card-header">
                            <h3 class="card-title">Last updates</h3>
                            </div>
                            <div class="list-group list-group-flush list-group-hoverable">
                            <div class="list-group-item">
                                <div class="row align-items-center">
                                <div class="col-auto"><span class="status-dot status-dot-animated bg-red d-block"></span></div>
                                <div class="col text-truncate">
                                    <a href="#" class="text-body d-block">Example 1</a>
                                    <div class="d-block text-secondary text-truncate mt-n1">
                                    Change deprecated html tags to text decoration classes (#29604)
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="list-group-item-actions">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/star -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div class="list-group-item">
                                <div class="row align-items-center">
                                <div class="col-auto"><span class="status-dot d-block"></span></div>
                                <div class="col text-truncate">
                                    <a href="#" class="text-body d-block">Example 2</a>
                                    <div class="d-block text-secondary text-truncate mt-n1">
                                    justify-content:between ⇒ justify-content:space-between (#29734)
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="list-group-item-actions show">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/star -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-yellow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div class="list-group-item">
                                <div class="row align-items-center">
                                <div class="col-auto"><span class="status-dot d-block"></span></div>
                                <div class="col text-truncate">
                                    <a href="#" class="text-body d-block">Example 3</a>
                                    <div class="d-block text-secondary text-truncate mt-n1">
                                    Update change-version.js (#29736)
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="list-group-item-actions">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/star -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div class="list-group-item">
                                <div class="row align-items-center">
                                <div class="col-auto"><span class="status-dot status-dot-animated bg-green d-block"></span></div>
                                <div class="col text-truncate">
                                    <a href="#" class="text-body d-block">Example 4</a>
                                    <div class="d-block text-secondary text-truncate mt-n1">
                                    Regenerate package-lock.json (#29730)
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="list-group-item-actions">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/star -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div v-if="user_is_sign" class="nav-item dropdown">
                    <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                        <span class="avatar avatar-sm" :style="this.avatar"></span>
                        <div class="d-none d-xl-block ps-2">
                        <div>{{this.user['info']['real_name']}}</div>
                        <div class="mt-1 small text-secondary">{{this.user['info']['remark']}}</div>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        
                        
                        <router-link to="/config_account" class="dropdown-item">Profile</router-link>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">Settings</a>
                        <a href="" class="dropdown-item" @click.prevent="logout">Logout</a>
                    </div>
                    
                </div>
                <div v-if="!user_is_sign" class="nav-item d-md-flex me-3">
                    <div class="btn-list">
                        <router-link to="/login" class="btn" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path></svg>
                          Login
                        </router-link>
                        <router-link to="/sign" class="btn btn-primary" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M19 22v-6"></path><path d="M22 19l-3 -3l-3 3"></path></svg>
                          Sign
                        </router-link>
                    </div>
                </div>

            </div>
            </div>
        </header>
        <header class="navbar-expand-md">
        <div class="collapse navbar-collapse" id="navbar-menu">
          <div class="navbar">
            <div class="container-xl">
              <div class="navbar-nav">
                <router-link active-class="active" to="/home" tag="li" class="nav-item">
                    <div class="nav-link">
                    <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                    </span>
                    <span class="nav-link-title">
                      Home
                    </span>
                    </div>
                </router-link>


       


 
 
              </div>
              <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                <form action="./" method="get" autocomplete="off" novalidate>
                  <div class="input-icon">
                    <span class="input-icon-addon">
                      <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    </span>
                    <input type="text" value="" class="form-control" placeholder="Search…" aria-label="Search in website">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
</template>