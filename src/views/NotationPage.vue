<!--https://medium.com/@bran.rowell/rendering-music-data-with-vexflow-4e742e32ba0c-->

<template>
  <canvas id='display'></canvas>
</template>

<script>
import {Vex} from "vexflow";

export default {
  name: "NotationPage",
  data() {
    return {

    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init: function () {
      let VF = Vex.Flow;

      let canvas = document.getElementById("display")
      let renderer = new VF.Renderer(canvas, VF.Renderer.Backends.CANVAS)
      // Size our canvas:
      renderer.resize(500, 500);
      // And get a drawing context:
      let context = renderer.getContext();
      // Create a stave at position 10, 40 of width 400 on the canvas.
      let stave = new VF.Stave(10, 40, 400);
      // Add a clef and time signature.
      stave.addClef("treble").addTimeSignature("4/4");
      // Connect it to the rendering context and draw!
      stave.setContext(context).draw();

      let note = new VF.StaveNote({clef: "treble", keys: ["c4"], duration: "q"});

      let voice = new VF.Voice({num_beats: 4, beat_value: 4});

      voice.addTickable(note);

      voice.draw(context, stave);
      // let notes = [
      //   // A quarter-note C.
      //   new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
      //   // A quarter-note D.
      //   new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
      //   // A quarter-note rest. Note that the key (b/4) specifies the vertical position of the rest.
      //   new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),
      //   // A C-Major chord.
      //   new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
      // ];
      // // Create a voice in 4/4 and add above notes
      // let voice = new VF.Voice({num_beats: 4,  beat_value: 4});
      // voice.addTickables(notes);
      // // Format and justify the notes to 400 pixels.
      // //let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
      // // Render voice
      // voice.draw(context, stave);
    },
  },
  updated() {
    this.init()
  }

}
</script>

<style scoped>

</style>