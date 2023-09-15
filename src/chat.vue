<script>

export default{
  components:{
   
  },
  data(){
    return{
        send_buff:"",
        token:"",
        user:{},
        user_id:"",
        chats:[],
        chat_history:[],
        chat_sele:-1,
    }
  },
  methods:{

    seitch_chat_sele(sele)
    {
        this.chat_sele=sele;
    },

    send(){
        if(this.send_buff!="")
        {
            const params = new FormData();
            params.append('token', this.token);
            params.append('mod', 'send');
            params.append('to_id', 0);
            params.append('msg', this.send_buff);
            

            this.$http({
                method:'POST',
                url:'/api/chat.php',
                data:params,
            }).then(response=>{
                var error_data=response.data;
                //console.log(error_data);
                switch(error_data['error_code']){
                    case 0:

                       
                        
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
        }
            
        this.send_buff="";
        
    
    }
  },
  mounted(){
//for test
this.chat_history=[
    {
        'id':'1',
        'from_id':'1',
        'to_id':'0',
        'msg':'123',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'2',
        'from_id':'0',
        'to_id':'0',
        'msg':'abc',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'3',
        'from_id':'0',
        'to_id':'0',
        'msg':'qwe',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'4',
        'from_id':'1',
        'to_id':'0',
        'msg':'abc',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'5',
        'from_id':'0',
        'to_id':'0',
        'msg':'qwe',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'6',
        'from_id':'1',
        'to_id':'0',
        'msg':'abc',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'7',
        'from_id':'0',
        'to_id':'0',
        'msg':'qwe',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'8',
        'from_id':'1',
        'to_id':'0',
        'msg':'abc',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'9',
        'from_id':'1',
        'to_id':'0',
        'msg':'qwe',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'10',
        'from_id':'1',
        'to_id':'0',
        'msg':'abc',
        'time':'2023-09-11 19:42:54',
    },
    {
        'id':'11',
        'from_id':'0',
        'to_id':'0',
        'msg':'qwe',
        'time':'2023-09-11 19:42:54',
    },
];



    if(sessionStorage.getItem('sign_user')==null){
      //return to sign
      //this.$router.push('/sign');
    }else{
        this.user=JSON.parse(sessionStorage.getItem('sign_user'));
        this.token=this.user['acc']['token'];

        //get chat list
        const params = new FormData();
        params.append('token', this.token);
        params.append('mod', 'getchatlist');
        
        this.$http({
            method:'POST',
            url:'/api/chat.php',
            data:params,
        }).then(response=>{
            var error_data=response.data;
            //console.log(error_data);
            switch(error_data['error_code']){
                case 0:

                    this.chats=error_data['list'];
                    
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
    }
  }
}


</script>

<style>

.chatlist{
    padding-left: 10px;padding-right: 10px;
}

.chatlist_sele{
    padding-left: 10px;padding-right: 10px;
    background-color: #199fec4d;
}

.chatlist:hover{
    background-color: rgba(127, 190, 245, 0.993);
}
</style>
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
                                    </div>
                                </div>                                   
                                <div v-for="(item, key) in this.chats" :class='key==this.chat_sele?"chatlist_sele":"chatlist"' @click.prevent="seitch_chat_sele(key)">
                                    <div class="row">
                                        <div class="col-auto">
                                            <span class="avatar" :style='"background-image: url("+item.avatar+");"'></span>
                                        </div>
                                        <div class="col">
                                            <div class="text-truncate">
                                            <strong>{{item.real_name}}</strong>
                                            </div>
                                            <div class="text-secondary">{{item.updata}}</div>
                                        </div>
                                        <div class="col-auto align-self-center">
                                            <div class="badge bg-primary"></div>
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
                                    <div v-for="(item, key) in this.chat_history">
                                        <div class="row" v-if="item.from_id==1">
                                            
                                            <div class="col">
                                                <div class="text-truncate">
                                                    {{item.msg}}
                                                </div>
                                                <div class="text-secondary">{{item.time}}</div>
                                            </div>
                                            <div class="col-auto">
                                            <span class="avatar">AA</span>
                                            </div>
                                        </div>
                                        <div class="row" v-else>
                                            <div class="col-auto">
                                            <span class="avatar">AA</span>
                                            </div>
                                            <div class="col">
                                                <div class="text-truncate">
                                                    {{item.msg}}
                                                </div>
                                                <div class="text-secondary">{{item.time}}</div>
                                            </div>
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