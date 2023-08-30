<template>
    <div class="col-12 col-md-3 border-end">
    <div class="card-body">
    <h4 class="subheader">Business settings</h4>
    <div class="list-group list-group-transparent">
        <router-link to="/config_account" active-class="active" class="list-group-item list-group-item-action d-flex align-items-center">My Account</router-link>
        <router-link to="/config_bind" active-class="active" class="list-group-item list-group-item-action d-flex align-items-center">My Bind</router-link>
        <router-link to="/config_password" active-class="active" class="list-group-item list-group-item-action d-flex align-items-center">My Password</router-link>
    </div>
    </div>
</div>
</template>