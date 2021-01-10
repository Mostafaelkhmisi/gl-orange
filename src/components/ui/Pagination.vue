<template>
  <section>
    <div class="pagination-container">
      <div class="left-Arrow-Style" @click="changePage(-1)">
          <div class="gallery-next-orangeBox leftSliderOrange"> <i class="fas fa-chevron-left" ></i>
          </div>
      </div>

      <span class="inner-pagination-content"> <span> {{ '0'+page }} </span> - {{ '0'+pages }}</span>

        <div class="right-Arrow-Style" @click="changePage(1)">
          <div class="gallery-next-orangeBox"> <i class="fas fa-chevron-right" ></i>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['totalRecords', 'perPageOptions'],
  data: function () {
    return {
      page: 1,
      perPage: this.perPageOptions[0]
    };
  },
  computed: {
    pages () {
      const remainder = this.totalRecords % this.perPage;

      if (remainder > 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1;
      } else {
        return this.totalRecords / this.perPage;
      }
    }
  },
  methods: {
    setPerPage (amount) {
      this.perPage = amount;
      this.$emit('input', { page: this.page, perPage: amount });
    },
    changePage (val) {
      switch (val) {
        case 0:
          this.page = 1;
          break;
        case -1:
          this.page = this.page > 1 ? this.page - 1 : this.page;
          break;
        case 1:
          this.page = this.page < this.pages ? this.page + 1 : this.page;
          break;
        case this.pages:
          this.page = this.pages;
          break;
      }
      this.$emit('input', { page: this.page, perPage: this.perPage });
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  color: #fff;
  width: 100%;
  font-size: 1.5rem;
  padding-top: 15px;

  .inner-pagination-content {
    color: #888;
        span{
            color: #fff;
        }
  }
}
.left-Arrow-Style, .right-Arrow-Style{
        border: solid 1px #fff;
        position: absolute;
        align-self: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        transform: rotate(45deg);
        cursor: pointer;
        z-index: 5;
        .gallery-next-orangeBox{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .2s ease-in-out;
        }
        &:hover .gallery-next-orangeBox{
            background-color: #FF6600;
            margin-left: 5px;
            margin-top: -5px;
        }
        &:hover .leftSliderOrange{
            margin-left: -5px!important;
            margin-top: 5px!important;
        }
        i{
            transform: rotate(-45deg);
        }
}
.left-Arrow-Style{
    left: 0%;
}
.right-Arrow-Style{
    right: 5%;
}

@media (max-width: 1000px) {
  .pagination-container {
    font-size: 1.3rem;
    padding-bottom: 30px;
  }
  .left-Arrow-Style{
    left: 5%;
  }

}
</style>
