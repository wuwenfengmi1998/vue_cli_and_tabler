<script>
import config_card from './components/config_card.vue'
export default{
  components:{
    config_card
  }
}
</script>
<template>
<v_header></v_header>
<div class="page-wrapper">
        <!-- Page header -->
        <div class="page-header d-print-none">
          <div class="container-xl">
            <div class="row g-2 align-items-center">
              <div class="col">
                <h2 class="page-title">
                  Settings
                </h2>
              </div>
            </div>
          </div>
        </div>
        <!-- Page body -->
        <div class="page-body">
          <div class="container-xl">
            <div class="card">
              <div class="row g-0">
                <config_card></config_card>
                <div class="col-12 col-md-9 d-flex flex-column">
                  <div class="card-body">
                    <h3 class="card-title mt-4">Password</h3>
                    <p class="card-subtitle">You can set a permanent password if you don't want to use temporary login codes.</p>
                   
                        <div class="row g-3">
                            <div class="col-md">
                                <div class="form-label">
                                    Old Password
                                </div>
                                <input type="password" class="form-control w-auto">
                            </div>
                        </div> 
                        <div class="row g-3 mt-2">
                            <div class="col-md">
                                <div class="form-label">
                                    New Password
                                </div>
                                <input type="password" class="form-control w-auto">
                            </div>
                        </div> 
                        <div class="row g-3 mt-2">
                            <div class="col-md">
                                <div class="form-label">
                                    Confirm Password
                                </div>
                                <input type="password" class="form-control w-auto">
                            </div>
                        </div> 
                                   
           
                  </div>
                  <div class="card-footer bg-transparent mt-auto">
                    <div class="btn-list justify-content-end">
                      <a href="#" class="btn btn-primary">
                        Set new password
                      </a>
                    </div>
                  </div>                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<v_footer></v_footer>
</template>