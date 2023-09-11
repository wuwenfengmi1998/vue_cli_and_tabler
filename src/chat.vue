<script>

export default{
  components:{
   
  },
  data(){
    return{
        send_buff:"",
    }
  },
  methods:{
    send(){
        if(this.send_buff!="")
        {
            console.log(this.send_buff);
            this.send_buff="";
        }
        
    }
  },
  mounted(){

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
                  Chats
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
                <div class="col-12 col-md-3">
                    <div class="card-body" style="padding-right: 0px;width: 295px;">
                        <h4 class="subheader">Chat list</h4>
                        <div class="col-14">
                            <div class="card" style="height: 40rem">
                            <div class="card-body card-body-scrollable card-body-scrollable-shadow" style="padding: 8px;">
                                <div class="divide-y">
                                <div>
                                    <div class="row">
                                        <div class="col-auto">
                                            <span class="avatar">JL</span>
                                        </div>
                                        <div class="col">
                                            <div class="text-truncate">
                                            <strong>Jeffie Lewzey</strong>
                                            </div>
                                            <div class="text-secondary">yesterday</div>
                                        </div>
                                        <div class="col-auto align-self-center">
                                            <div class="badge bg-primary"></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="row">
                                    <div class="col-auto">
                                        <span class="avatar" style="background-image: url(./static/avatars/002m.jpg)"></span>
                                    </div>
                                    <div class="col">
                                        <div class="text-truncate">
                                        <strong>Mallory Hulme</strong>
                                        </div>
                                        <div class="text-secondary">2 days ago</div>
                                    </div>
                                    <div class="col-auto align-self-center">
                                        <div class="badge bg-primary"></div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="row">
                                    <div class="col-auto">
                                        <span class="avatar" style="background-image: url(./static/avatars/003m.jpg)"></span>
                                    </div>
                                    <div class="col">
                                        <div class="text-truncate">
                                        <strong>Dunn Slane</strong>
                                        </div>
                                        <div class="text-secondary">today</div>
                                    </div>
                                    <div class="col-auto align-self-center">
                                        <div class="badge bg-primary"></div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="row">
                                    <div class="col-auto">
                                        <span class="avatar" style="background-image: url(./static/avatars/000f.jpg)"></span>
                                    </div>
                                    <div class="col">
                                        <div class="text-truncate">
                                        <strong>Emmy Levet</strong>
                                        </div>
                                        <div class="text-secondary">4 days ago</div>
                                    </div>
                           
                                    </div>
                                </div>


                                <div>
                                    <div class="row">
                            
                                    </div>
                                </div>
 

                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-9 d-flex">
                    <div class="card-body">
                        <h4 class="subheader">Chat Name</h4>
                        <div class="col-14">
                            <div class="card" style="height: 37rem">
                            <div class="card-body card-body-scrollable card-body-scrollable-shadow" style="padding: 8px;">
                                <div class="divide-y">                         
                                    <div class="row">
                                        <div class="col-auto">
                                            <span class="avatar">AA</span>
                                        </div>
                                        <div class="col">
                                            <div class="text-truncate">
                                            Hello
                                            </div>
                                            <div class="text-secondary">2 days ago</div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        
                                        <div class="col">
                                            <div class="text-truncate">
                                            hi
                                            </div>
                                            <div class="text-secondary">2 days ago</div>
                                        </div>
                                        <div class="col-auto">
                                            <span class="avatar">ME</span>
                                        </div>
                                    </div>    
                                    <div class="row">
                                        
                                        <div class="col">
                                            <div class="text-truncate">
                                            hi he
                                            </div>
                                            <div class="text-secondary">2 days ago</div>
                                        </div>
                                        <div class="col-auto">
                                            <span class="avatar">ME</span>
                                        </div>
                                    </div>                             
                                </div>
                                

                            </div>
                            
                            </div>
                            <form @submit.prevent="send">
                                <input type="text" class="form-control mt-2" placeholder="Enter for send" autocomplete="off" v-model.trim:value="this.send_buff">
                            </form>
                            
                            
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