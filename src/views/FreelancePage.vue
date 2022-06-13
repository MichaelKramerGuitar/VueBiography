<template>
  <main>
    <section>
      <h1>Composer, Bandleader, Freelancer</h1>
      <figure>
        <img src="../assets/images/michael2.png"
             alt="Michael EPK photo"
             style="height: 50%; width: 50%">
        <!--                  <figcaption><b>Michael's Freelance <abbr title="Electronic Press Kit">EPK</abbr> Photo</b></figcaption>-->
      </figure>

      <article>
        <h2>Overview</h2>
        <p>Since the age of 16, <a href="https://michaelkramerguitar.com/" target="_blank">Michael</a> has been an active freelance musician in Washington, D.C.
          In December, 2018, his trio, <i>Superstring and the Cosmic Vibrations</i>, released their first
          album which can be previewed below:</p>
        <iframe
            style="border: 0;
                        width: 100%;
                        height: 42px;"
            src="https://bandcamp.com/EmbeddedPlayer/album=641726569/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" allowfullscreen>
        </iframe>
        <p><i><abbr title="Superstring and the Cosmic Vibrations">Superstring</abbr></i> are in post-production
          of their <a href="#spin-liners">second album</a>, <b>SPIN</b>, and look forward to performing live again after the mandatory
          &quot;pandemic hiatus&quot; as it gradually becomes more safe to gather again.</p>
        <p>Michael is additionally the co-leader of the <a href="https://kwbigband.com/" target="_blank"><i>KW Big Band</i></a>
          alongside pianist and composer <a href="https://timothywhalen.com/home" target="_blank">Tim Whalen</a>.</p>
        <aside>Check out Tim's <a href="https://timothywhalen.com/acetone-sessions" target="_blank">Acetone Sessions </a>
          <b><i><a href="https://youtu.be/yJ4OTPtsjes" target="_blank">interview with Michael</a></i></b>
          for more information about Michael's musical upbringing, the recording of the second
          <i><abbr title="Superstring and the Cosmic Vibrations">Superstring</abbr></i> record and
          the KW Big Band.</aside>
        <p>Michael has additionally cultivated a reputation as an in demand side man. In November 2020, he
          joined saxophonist and bandleader Ricky Parrell for a meaningful and socially distant studio
          recording project "Mourning Summer", Ricky's musical reflection on the first summer of the COVID-19
          pandemic.</p>
        <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/498719553?h=a03e6bcf89"
            class="freelance-vid"
            allowfullscreen></iframe>

        <p>
          Other notable sideman projects include saxophonist Joseph Henson's 2019 album "Transformation"
        </p>
        <iframe
            style="border: 0; width: 100%; height: 42px;"
            src="https://bandcamp.com/EmbeddedPlayer/album=3435597435/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/">

        </iframe>
      </article>
    </section>
  </main>
  <article id="spin-liners">
    <h2>Superstring and the Cosmic Vibrations, SPIN Liner Notes by
      <a href="https://www.discogs.com/artist/757220-Michael-Bowie" target="_blank">Michael Bowie</a>: Sneak preview</h2>
    <p>Jules Verne’s great novels are what come to mind as I listen to the music of my friend, guitarist,
      Michael Kramer. It has been said that one's music is always a reflection of the musician - a deep
      thinker in his daily life, Michael’s album, <b>SPIN</b> , really captures the characteristics of those ponderous
      thoughts. Listening to Michael talk about physics (which he knows a ton about), and upon hearing the CD
      for the first time, I began to picture the Jules Verne character, Captain Nemo, as a great counterpart
      to Michael. Both inventive and furtive, similarly, their creative imagination’s seem to have no
      boundaries. Always searching for the uninhibited, eschewing platitudes.</p>
    <p>The sonic textures that Michael and his fellow musicians create on <b>SPIN</b>  are vast. On many of the
      tracks, one hears the influence of the great guitar masters like John Abercrombie and Ralph Towner
      (the latter being one of my personal favorite musicians). While other creative expansions bring to
      mind a blend of the Beach Boys seminal classic, “Pet Sounds”, with the early rock fusion from
      Frank Zappa’s Mother’s Of Invention, “Uncle Meat” CD. That combination is readily displayed on
      “Sequel To Gangster Flick.” This song is a tour-de-force, both instrumentally and vocally, with adroitly
      placed vocal lines throughout. All of the songs on this album are uniquely crafted, each telling a story on
      its own merit. It should be noted the importance of Michael’s musical compatriots in this endeavor,
      Nathan Kawaller (bass), and Dominic Smith (drums). Both musicians seem to tap into Michael’s creative
      well, utilizing the right color palette for each sonic painting. Collectively they create a memorable
      listening journey.</p>
    <p><i>&quot;If his destiny be strange, it is also sublime.&quot;</i> <cite>Jules Verne</cite></p>
    <p><b>SPIN</b> is that sublime journey. <cite>Michael Bowie</cite></p>
  </article>
  <!-- visual divider -->
  <svg viewBox="0 0 1 .01" xmlns="http://www.w3.org/2000/svg">
    <rect width="1" height=".01">
      <animate attributeName="rx" values="0;1;0" dur="10s" repeatCount="indefinite" />
    </rect>
  </svg>
  <footer>
    <!-- mockup request form -->
    <section id="bookings">
      <h3>Contact Michael for bookings</h3>
      <form>
        <label id="name-field">Name:</label>
        <input type="text" value="firstName lastName">
        <br>
        <label>Email: </label>
        <input type="email" value="myemail@me.com">
        <br>
        <textarea>Tell me about this request...</textarea>
        <br>
        <button type="button">Submit</button>
      </form>
    </section>
    <small>Michael Kramer &copy; 2022 All Rights Reserved</small>
  </footer>
</template>

<script>
export default {
  name: "FreelancePage"
}
</script>

<style scoped>

</style>