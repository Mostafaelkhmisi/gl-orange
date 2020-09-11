<template>
  <div class="mainDiv">
      <div class="mainDiv-Content">
        <img src="@assets/imgs/client/Orange.svg" />
        <div class="customNav">
          <router-link to="/" active-class="active" exact>Home</router-link>
          <router-link to="/about" active-class="active">Tournaments</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@media(max-width:1000px){
    .mainDiv {
        width: 100%!important;
    }
}
.mainDiv {
    position: fixed;
    height: 50px;
    width: 490px;
    top: 6%;
    display: flex;
    align-items: center;
    z-index: 100;
    background-image: linear-gradient(to right, #ff6600 1%, rgba(0, 0, 0, 0.1)),
    repeating-linear-gradient(160deg, #ff6600 22px, rgba(0, 0, 0, 0.1) 28px);
    filter: drop-shadow(1px 1px 8px rgba(0, 0, 0, 0.6));

  .mainDiv-Content {
    position: relative;
    display: flex;
    img {
      width: 150px;
      float: left;
    }
    .customNav {
      align-items: center;
      display: flex;
      a {
        margin: 0 30px 0 30px;
        color: white;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.2);
          color: #ff6600;
        }
      }
    }
  }
}
.active {
  background-color: #ff6600;
  padding: 20px 10px;
  transform: scale(1.2);
  &:hover {
    color: white !important;
  }
}
</style>
