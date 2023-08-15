
import "./App"

function FadeControls() {
  var controls = document.querySelector('.fade-controls');

  var fadeInComponent = document.querySelector('.fade-component');
  var duration = 4000;
  var playAnimation = () => {
      // Stop all current animations
      if (fadeInComponent.getAnimations) {
          fadeInComponent.getAnimations().map((anim) => anim.finish());
      }

      // Play the animation with the newly specified duration
      fadeInComponent.animate({
          opacity: [0, 1]
      }, duration);
  };

  // Configure duration slider
  var durationSlider = controls.querySelector('.duration-slider'),
  durationText = controls.querySelector('.duration-text');
  durationSlider.dispatchEvent(new Event('change'));

  durationSlider.addEventListener('change', () => {
      duration = durationSlider.value * 1000;
      durationText.textContent = 'Duration: ' + durationSlider.value + 's';
      playAnimation();
  });
}

export default FadeControls;