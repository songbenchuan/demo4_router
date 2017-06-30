<template>
  <div>
    <div class="panel-body">
      <div prop-name="atguigu"><h2>Home</h2>
        <div>Home route component!<input type="text"></div>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <router-link to="/home/news">News</router-link>
            </li>
            <li>
              <router-link to="/home/message">Message</router-link>
            </li>
          </ul>
          <div>
           <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script></script>


<style></style>
