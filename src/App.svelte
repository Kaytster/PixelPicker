<script lang="ts">
  let message: string = "PixelPicker is Ready";
</script>

<main>
  <!-- <h1>{message}</h1>
  <p>Your environment is now fully connected.</p> -->

  <article class="titleCard">
    <h1>Welcome to PixelPicker!</h1>
    <p>This webtool is designed to make identifying colours in an image easier.</p>
    <p class="text-sm">To get started upload an image, and choose a colour.</p>
  </article>

  <br />


    <article class="uploadCard">
      <div class="row">
          <button>Upload Image</button>
          <p>Select an image from your device</p>
      </div>
    </article>


  <br />

  <div class="container">
    <div class="grid">
      <article class="picker">Colour Picker</article>
      <article class="image">Image</article>
    </div>
  </div>
</main>
