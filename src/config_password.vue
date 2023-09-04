<script>
import config_card from './components/config_card.vue'
export default{
  components:{
    config_card
  },
  data(){
    return{

      token:'',

      acc_o_pass:'',
      acc_n_pass:'',
      acc_c_pass:'',

      acc_o_pass_placeholder:'',
      acc_n_pass_placeholder:'',
      acc_c_pass_placeholder:'',
    }
  },
  methods:{
    pass_change()
    {

      var sumb_flag=false;

      if(this.acc_o_pass=='')
      {
        this.acc_o_pass_placeholder='Please enter old password';
        sumb_flag=false;
      }else{
        this.acc_o_pass_placeholder='';
        sumb_flag=true;
      }

      if(this.acc_n_pass=='')
      {
        this.acc_n_pass_placeholder='Please enter new password';
        sumb_flag=false;
      }else{
        this.acc_n_pass_placeholder='';
        sumb_flag=true;
      }

      if(this.acc_c_pass=='')
      {
        this.acc_c_pass_placeholder='Please enter confirm password';
        sumb_flag=false;
      }else{
        this.acc_c_pass_placeholder='';
        sumb_flag=true;

        if(this.acc_n_pass==this.acc_c_pass){
        this.acc_c_pass_placeholder='';
        sumb_flag=true;

        }else
        {
          this.acc_c_pass_placeholder='Passwords do not match';
          sumb_flag=false;
        }
      }

      if(sumb_flag)
      {
        const params = new FormData();
        params.append('token', this.token);
        params.append('old_pass', this.acc_o_pass);
        params.append('new_pass', this.acc_n_pass);

        this.$http({
            method:'POST',
            url:'/api/profile_password.php',
            data:params,
        }).then(response=>{
            var error_data=response.data;
            //console.log(error_data);
            switch(error_data['error_code']){
                case 0:

                 
                    location.reload();
                    
                    break;
                case 5:
                    this.$router.push('/sign');
                    break;
                case 6:
                    this.$router.push('/sign');
                    break;
                case 8:
                    this.acc_o_pass_placeholder='old password wrond';
                    break;
            }

        },error=>{
            console.log("error");
        });

      }

    }
  },
  mounted(){
    if(sessionStorage.getItem('sign_user')==null){
      //return to sign
      this.$router.push('/sign');
    }else{
      //join data
      this.user=JSON.parse(sessionStorage.getItem('sign_user'));
      this.token=this.user['acc']['token'];
    }
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
                                <div class="input-group input-group-flat">
                                  <input type="password" class="form-control w-auto" v-model.trim="this.acc_o_pass">
                                  <span class="input-group-text">
                                    <span class="badge bg-red" v-show="this.acc_o_pass_placeholder">{{this.acc_o_pass_placeholder}}</span>
                                  </span>
                                </div>
                                
                              </div>
                        </div> 
                        <div class="row g-3 mt-2">
                            <div class="col-md">
                                <div class="form-label">
                                    New Password
                                </div>
                                <div class="input-group input-group-flat">
                                  <input type="password" class="form-control w-auto" v-model.trim="this.acc_n_pass">
                                  <span class="input-group-text">
                                    <span class="badge bg-red" v-show="this.acc_n_pass_placeholder">{{this.acc_n_pass_placeholder}}</span>
                                  </span>
                                </div>
                            </div>
                        </div> 
                        <div class="row g-3 mt-2">
                            <div class="col-md">
                                <div class="form-label">
                                    Confirm Password
                                </div>
                                <div class="input-group input-group-flat">
                                  <input type="password" class="form-control w-auto" v-model.trim="this.acc_c_pass">
                                  <span class="input-group-text">
                                    <span class="badge bg-red" v-show="this.acc_c_pass_placeholder">{{this.acc_c_pass_placeholder}}</span>
                                  </span>
                                </div>
                            </div>
                        </div> 
                                   
           
                  </div>
                  <div class="card-footer bg-transparent mt-auto">
                    <div class="btn-list justify-content-end">
                      <a class="btn btn-primary" @click.prevent="pass_change">
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