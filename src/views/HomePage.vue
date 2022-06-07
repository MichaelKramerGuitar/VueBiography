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
      <tbody>
      <tr>
        <td>CS 300</td>
        <td>Intro to Computer Science</td>
        <td>Spring 1, 2021</td>
        <td>Importance of Discrete Math</td>
      </tr>
      <tr>
        <td>CS 521</td>
        <td>Python Techniques</td>
        <td>Spring 2, 2021</td>
        <td>How Python is structured</td>
      </tr>
      <tr>
        <td>CS 682</td>
        <td>Systems Design and Analysis</td>
        <td>Summer 1, 2021</td>
        <td>UML designs before code to start</td>
      </tr>
      <tr>
        <td>CS 677</td>
        <td>Data Science with Python</td>
        <td>Summer 2, 2021</td>
        <td>Classifiers efficacy is tied into nature of data</td>
      </tr>
      <tr>
        <td>CS 664</td>
        <td>Intro to AI</td>
        <td>Fall 1, 2021</td>
        <td>Intelligence and learning vary according to the learner</td>
      </tr>
      <tr>
        <td>CS 526</td>
        <td>Data Structures and Algorithms</td>
        <td>Fall 2, 2021</td>
        <td>The most fundamentally important course of the program</td>
      </tr>
      <tr>
        <td>CS 622</td>
        <td>Advanced Programming Techniques</td>
        <td>Spring 1, 2022</td>
        <td>Threading and callbacks</td>
      </tr>
      <tr>
        <td>CS 665</td>
        <td>Software Design and Patterns</td>
        <td>Spring 2, 2022</td>
        <td>Understanding software design goals to justify design choices</td>
      </tr>
      <tr>
        <td>CS 601</td>
        <td>Web Application Development</td>
        <td>Summer 1, 2022</td>
        <td>In progress!</td>
      </tr>
      </tbody>
    </table>
  </div>
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
  name: "HomePage"
}
</script>

<style scoped>
/*@import "../styles/style.css";*/
</style>