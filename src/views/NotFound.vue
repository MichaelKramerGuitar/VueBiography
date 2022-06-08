<template>
<!--
 Not found page source modified from:
 https://codepen.io/Navedkhan012/pen/vrWQMY
 -->
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="col-sm-10 col-sm-offset-1  text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>

            </div>

            <div class="content_box_404">
              <h3 class="h2">
                Looks like you're lost
              </h3>

              <p>the page you are looking for is not found!</p>

              <a><router-link :to="{name: 'home'}" class="link_404">Go Home</router-link></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
/*======================
    404 page
=======================*/


.page_404{
  text-align: center;
  padding:40px 0;
  background:#fff;
}

.page_404  img{ width:100%;}

.four_zero_four_bg{

  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}


.four_zero_four_bg h1{

  font-size: 5rem;
}

.four_zero_four_bg h3{
  font-size: 5rem;
}

.link_404{
  color: #fff!important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;}
.content_box_404{
  margin-top:-50px;
}
</style>