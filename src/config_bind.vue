<script>
import config_card from './components/config_card.vue'
export default{
  components:{
    config_card  
  },
  data(){
    return{
      user:{},
      user_email:'',
    }
  },
  methods:{
    email_change()
    {
      
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
                          <input type="text" class="form-control w-auto" v-model.trim:value="this.user_email">
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