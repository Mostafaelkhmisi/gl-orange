<template>
  <div class="headerDiv">
    <div class="mainDiv">
      <div class="mainDiv-Content">
        <img src="@assets/imgs/client/Orange.svg" />
        <div class="customNav">
          <router-link to="/" active-class="active" exact>Home</router-link>
          <router-link to="/about" active-class="active">Tournaments</router-link>
        </div>
      </div>
    </div>

    <!-- MOBILE NAV -->
    <!-- Sidebar -->
    <a class="w3-button" @click="w3_open()">
      <i class="fas fa-bars"></i>
    </a>
    <div
      class="mob-sidebar"
      style="display:none;"
      id="mySidebar"
    >
    <div class="mob-Nav">
      <div class="mainDiv-Content">
        <img src="@assets/imgs/client/Orange.svg" />
        <div class="customNav">
          <router-link to="/" active-class="active" exact>Home</router-link>
          <router-link to="/about" active-class="active">Tournaments</router-link>
        </div>
      </div>
    </div>
    </div>
    <div
      class="w3-overlay"
      @click="w3_close()"
      id="myOverlay"
    ></div>
    <!-- END OF MOBILE NAV -->
  </div>
</template>

<script>
export default {
  methods: {
    w3_open () {
      document.getElementById('mySidebar').style.display = 'block'
      document.getElementById('myOverlay').style.display = 'block'
    },
    w3_close () {
      document.getElementById('mySidebar').style.display = 'none'
      document.getElementById('myOverlay').style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-size{
  height: 50px;
  width: 490px;
}
$orange-color:#ff6600;
$sidebar-bg: linear-gradient(to right, $orange-color 1%, rgba(0, 0, 0, 0.1)),
    repeating-linear-gradient(160deg, $orange-color 22px, rgba(0, 0, 0, 0.1) 28px);
/*            MOBILE NAVBAR       */
.w3-button {
  background-color: transparent !important;
  padding: 8px 16px;
  text-decoration: none;
  color: $orange-color;
  cursor: pointer;
  display: none;
  font-size: 2rem !important;
}

.mob-sidebar {
  position: fixed !important;
  z-index: 5;
  left: 0%!important;
  @extend .sidebar-size;
  background-image: $sidebar-bg;
  filter: drop-shadow(1px 1px 8px rgba(0, 0, 0, 0.6));
  animation: animateleft 0.4s;
    .mob-Nav{
      @extend .sidebar-size;
      display: flex;
      align-items: center;
    }
}

@keyframes animateleft {
  from {
    left: -300px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}

.w3-overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  animation: opac 0.8s;
}
@keyframes opac {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/*        End of MOBILE NAVBAR       */
@media (max-width: 1200px) {
  .mainDiv {
    display: none!important;
  }
  .w3-button {
    display: block !important;
  }
  .mainDiv-Content{
    img{
      width: 150px!important;
    }
    .customNav{
      a{
        margin: 0 15px 0 15px!important;
        padding: 15px 7px;
      }
    }
  }

}
.headerDiv{
    position: fixed;
    z-index: 100;
    top: 6%;
    display: flex;
}
.mainDiv {
  @extend .sidebar-size;
  display: flex;
  align-items: center;
  background-image: $sidebar-bg;
  filter: drop-shadow(1px 1px 8px rgba(0, 0, 0, 0.6));
  }
  .mainDiv-Content {
    display: flex;
    img {
      width: 170px;
      float: left;
    }
    .customNav {
      align-items: center;
      display: flex;
      a {
        margin: 0 30px 0 30px;
        color: #fff;
        text-decoration: none;
        transition: all 0.4s ease-in-out;
        &:hover {
          transform: scale(1.2);
          color: $orange-color;
        }
      }
    }
  }

.active {
  background-color: $orange-color;
  padding: 20px 10px;
  transform: scale(1.2);
  &:hover {
    color: #fff !important;
  }
}
</style>
