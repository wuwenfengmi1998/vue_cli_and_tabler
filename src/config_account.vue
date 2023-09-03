<script>
import config_card from './components/config_card.vue'
export default{
  components:{
    config_card
  },
  data(){
    return{
      user:{},
      avatar:"background-image: url(./avatar.jpg)",
      token:"",
      real_name:"",
      user_id:"",
      user_rmark:"",
      user_sex:"",
      user_name:"",
      avatar_file:[],
      avatar_msg:"",
    }
  },
  methods:{

    upload_avater_file(e){
      let file =e.target.files[0];
      if(file.type=='image/gif'|file.type=='image/png'|file.type=='image/bmp'|file.type=='image/jpeg'){
        
        if(file.size<50000000)
        {
          this.avatar_msg=""
          this.avatar_file=file;
        }else
        {
          this.avatar_msg="File size > 50M"
        }
      }else{
        this.avatar_msg="File type worng"
      }
    },

    submit()
    {
      const params = new FormData();
      params.append('token', this.token);
      params.append('real_name', this.real_name);
      params.append('user_rmark', this.user_rmark);
      params.append('user_sex', this.user_sex);
      params.append('avatar_file', this.avatar_file);

      this.$http({
          method:'POST',
          url:'/api/profile.php',
          data:params,
      }).then(response=>{
          var error_data=response.data;
          //console.log(error_data);
          switch(error_data['error_code']){
              case 0:

                  this.user['info']['real_name']=this.real_name;
                  this.user['info']['remark']=this.user_rmark;
                  this.user['info']['sex']=this.user_sex;
                  
                  sessionStorage.setItem('sign_user',JSON.stringify(this.user));
                  location.reload();
                  //console.log("updata");
                  //this.$forceUpdate;
                  break;
              case 7:
              
                  break;
              case 71:
              
                  break;
          }

      },error=>{
          console.log("error");
      });
    }
  },
  mounted(){
    if(sessionStorage.getItem('sign_user')==null){
      //return to sign
      this.$router.push('/sign');
    }else{
      //join data
      this.user=JSON.parse(sessionStorage.getItem('sign_user'));

      this.real_name=this.user['info']['real_name'];
      this.user_rmark=this.user['info']['remark'];
      this.user_sex=this.user['info']['sex'];

      this.token=this.user['acc']['token'];
      this.user_id=this.user['acc']['id'];
      this.user_name=this.user['acc']['name'];


      if(this.user['info']['avatar']==null|this.user['info']['avatar']=='')
      {
          this.avatar="background-image: url(./avatar.jpg)";
      }else
      {
          this.avatar="background-image: url("+this.user['info']['avatar']+")";

      }

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
                <config_card :user="this.user"></config_card>
                <div class="col-12 col-md-9 d-flex flex-column">
                  <div class="card-body">
                    <h2 class="mb-4">My account
                    <div class="form-label">id: {{this.user_id}}</div>
                    
                    </h2>
                    <h3 class="card-title">Profile Details
                      <div class="form-label">Sign Name: {{this.user_name}}</div>
                    </h3>
                    
                    
                    
                    <div class="col-auto"><span class="avatar avatar-xl" :style="this.avatar"></span></div>
                    <input type="file" accept="image/gif,image/png,image/bmp,image/jpeg" class="file mt-1" @change="upload_avater_file"/>
                    <span class="badge bg-red mt-1" v-show="this.avatar_msg">{{this.avatar_msg}}</span>
                    
                    <h3 class="card-title mt-4">Business Profile</h3>
                    
                    <div class="row g-3">
                      <div class="col-md">
                        <div class="form-label">Real Name</div>
                        <input type="text" class="form-control w-auto" v-model.trim:value="this.real_name">
                      </div>
                    </div>
                    <div class="row g-3">
                      <div class="col-md">
                        <div class="form-label">Rmark</div>
                        <input type="text" class="form-control w-auto" v-model.trim:value="this.user_rmark">
                      </div>
                    </div>            
                    <div class="row g-3">
                      <div class="col-md">
                        <div class="form-label">sex</div>
                        <input type="text" class="form-control w-auto" v-model.trim:value="this.user_sex">
                      </div>
                    </div>            
                  </div>
                  <div class="card-footer bg-transparent mt-auto">
                    <div class="btn-list justify-content-end">
                      <a class="btn btn-primary" @click.prevent="submit">
                        Submit
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