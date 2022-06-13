<template>
  <!-- visual divider -->
  <svg viewBox="0 0 1 .01" xmlns="http://www.w3.org/2000/svg">
    <rect width="1" height=".01">
      <animate attributeName="rx" values="0;1;0" dur="10s" repeatCount="indefinite" />
    </rect>
  </svg>
  <div>
    <figure>
      <img src="../assets/images/superstringlogo.png"
           style="height: 35%; width: 35%"
           alt="Superstring and the Cosmic Vibrations Logo">
    </figure>
  </div>

  <h1>Michael's weekly blog</h1>
  <article>
    <h2 class="rotation"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        :class="{highlight: hover}">5/16/2022 - Jazz is not America's Classical Music</h2>
    <p>
      I had a “connect the dots” moment worth sharing.
    </p>

    <p>
      In a theory class in college we were looking at
      <a href="https://www.conoroboylemusic.com/new-blog/2019/4/8/an-analysis-on-haydns-symphony-no-99-in-e-flat-movement-2"
         target="_blank">Haydn's</a> music as his compositions begin with a complex
      statement that can be broken down into individual elements, statements in of themselves. These smaller
      statements were then the motifs that were developed throughout the entire composition and the work of the
      class was to show how the initial complex statement was broken down
      (with labels like “a”, “b”, “c”, and “d” motifs), and show how every note of music that followed was in some
      way could be labeled as derived from the initial motives (“a”, “b”... derivatives).
    </p>
    <p>
      Well, doing these <a href="https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_propositional_logic.htm"
                           target="_blank">propositional logic</a> (if p then q etc) problems it hit me that this
      style of thinking is most strongly associated with the
      <a href="https://en.wikipedia.org/wiki/Classical_Greece" target="_blank">Greek Classical</a>
      period of <a href="https://en.wikipedia.org/wiki/Aristotle" target="_blank">logical proofs</a> in
      philosophy/math/geometry and THAT’s
      why we call Haydn and Motzart's music <em>Classical Music</em>. Because Classical Logic is inherent to its structure, no other reason.
    </p>
    <p>
      I’ve often felt the implication of the term &quot;Classical&quot; Music was something else by those who use the term,
      especially regarding Jazz as &quot;American Classical Music&quot;.
    </p>
    <p class="rotation"
       @mouseenter="hover = true"
       @mouseleave="hover = false"
       :class="{highlight: hover}"><em>Framed in this way, my understanding of Jazz doesn’t fall entirely into the Classical Logic, binary logic
      model.</em></p>
    <p>Even compositionally, there’s obviously a range of techniques within the great composers of jazz, but
      that range is often drawing from a combination of impressionist ideas, in tandem with
      <a href="https://en.wikipedia.org/wiki/Clave_(rhythm)" target="_blank">clave</a> derived, rolling
      rhythmic structures - and this combination in my mind lends itself FAR MORE to the
      <a href="https://en.wikipedia.org/wiki/Quantum_mechanics" target="_blank">probabilistic model</a> of
      the universe. (Without seeing the cat you can’t prove whether it’s dead or alive, on or off, true or false,
      rather you can only give it a range between true and false, 1 and 0, a probability).</p>
    <p>
      I’m going to lean into this thread more in my own composition in the future.
    </p>
    <form>
      <textarea>Get the discussion started...</textarea>
      <br>
      <button type="button">Comment</button>
    </form>
  </article>
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
  name: "BlogPage",
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>

</style>