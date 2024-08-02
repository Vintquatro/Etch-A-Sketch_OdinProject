particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100, // Number of particles
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#c62828" // Change this to a color matching your theme (e.g., red)
      },
      "shape": {
        "type": "polygon", // More irregular shape
        "polygon": {
          "nb_sides": 4 // More sides for a more asteroid-like shape
        }
      },
      "opacity": {
        "value": 0.6,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "random",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  
  