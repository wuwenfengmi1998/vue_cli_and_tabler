<script>
import config_card from './components/config_card.vue'
export default{
  components:{
    config_card  
  },
  data(){
    return{
      token:'',
      user:{},
      user_email:'',
      acc_email_placeholder:'',
    }
  },
  methods:{
    email_change()
    {

      //判断是否email
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(pattern.test(this.user_email)){
        //是邮箱
        this.acc_email_placeholder='';
        const params = new FormData();
        params.append('token', this.token);
        params.append('email_change', this.user_email);

        this.$http({
            method:'POST',
            url:'/api/profile_bind.php',
            data:params,
        }).then(response=>{
            var error_data=response.data;
            //console.log(error_data);
            switch(error_data['error_code']){
                case 0:

                    this.user=error_data['user']
                    
                    
                    sessionStorage.setItem('sign_user',JSON.stringify(this.user));
                    location.reload();
                    
                    break;
                case 5:
                    this.$router.push('/sign');
                    break;
                case 6:
                    this.$router.push('/sign');
                    break;
            }

        },error=>{
            console.log("error");
        });
      }else
      {
        //not
        this.acc_email_placeholder='This is not Email';
       
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
      this.user_email=this.user['acc']['email'];
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
              <div class="row">
                <config_card></config_card>
                <div class="col-12 col-md-9 d-flex flex-column">
                  <div class="card-body">
                    <h2 class="mb-4">My Bind</h2>
                    <h3 class="card-title mt-4">Email</h3>
                    <p class="card-subtitle">This contact will be shown to others publicly, so choose it carefully.</p>
                    <div>
                      <div class="row g-3">
                        <div class="col-auto">
                          <div class="input-group input-group-flat">
                            <input type="email" class="form-control" placeholder="Email" autocomplete="off" v-model.trim="this.user_email">
                            <span class="input-group-text">
                                <span class="badge bg-red" v-show="acc_email_placeholder">{{this.acc_email_placeholder}}</span>
                            </span>
                          </div>
                        </div>
                        <div class="col-auto"><a class="btn" @click.prevent="email_change">
                            Change
                          </a></div>
                      </div>
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