<template>
  <!-- visual divider -->
  <svg viewBox="0 0 1 .01" xmlns="http://www.w3.org/2000/svg">
    <rect width="1" height=".01">
      <animate attributeName="rx" values="0;1;0" dur="10s" repeatCount="indefinite" />
    </rect>
  </svg>
  <section class="introduction">
    <video src="../assets/videos/intro.mp4"
           poster="../assets/images/michael1.png"
           preload controls loop
           id="intro-vid">
      <p>My time at BU</p>
    </video>
    <article class="story">

      <h2>Michael's Story</h2>

      <p class="story-p">
        Michael Kramer is a Washington, DC native. He is a member of the United States Army Band,
        "Pershing's Own", The U.S. Army Blues Jazz Ensemble and also an active freelance musician
        and bandleader in the Washington, D.C. area. In addition to playing guitar, Michael enjoys
        composing, recording and learning how to program computers. Michael also enjoys reading - the
        most impactful book he has read over the past 3 years was
        <a href="https://www.amazon.com/Antifragile-Nassim-Nicholas-Taleb-audiobook/dp/B00A2ZIZYQ"
           target="_blank">
          Antifragile: Things That Gain from Disorder</a> by Nassim Nicholas Taleb. <br>
        Michael lives is Silver Spring, MD with his
        wife and two children and is finishing up his Master's in Software Development at Boston
        University Online in the Summer 1, 2022 term.
      </p>
    </article>
  </section>
  <div class="takeaways">
    <table>
      <caption>Boston University MSSD Takeaways</caption>
      <thead>
      <tr>
        <th>Course Number</th>
        <th>Course Title</th>
        <th>Term Completed</th>
        <th>Main Takeaway</th>
      </tr>
      </thead>
      <tbody v-for="course in transcript" v-bind:key="course">
        <tr>
          <td>{{course.courseNumber}}</td>
          <td>{{course.courseTitle}}</td>
          <td>{{course.termCompleted}}</td>
          <td>{{course.mainTakeaway}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="error"><p>{{error}}</p></div>
  <!-- visual divider -->
  <svg viewBox="0 0 1 .01" xmlns="http://www.w3.org/2000/svg">
    <rect width="1" height=".01">
      <animate attributeName="rx" values="0;1;0" dur="10s" repeatCount="indefinite" />
    </rect>
  </svg>
  <footer>
    <small>Michael Kramer &copy; 2022 All Rights Reserved</small>
  </footer>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return{
      transcript: [],
          error : ""
    }
  },
  //https://stackoverflow.com/questions/45813347/difference-between-the-created-and-mounted-events-in-vue-js
  created() {
    let url = "./data/transcript.json";
    fetch(url, {
      mode: "no-cors",
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': 'https://kramer-bu-vue-json.netlify.app/',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
        .then(response => response.json())
        .then(data => {
          console.log(data.courses)
          this.transcript = data.courses;
        })
        .catch(err => {
          this.error = err
        });
  }
}
</script>

<style scoped>
@import "../styles/style.css";
</style>