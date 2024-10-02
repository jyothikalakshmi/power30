window.onload = function() {
  // Hide intro and show main content after 4 seconds
  setTimeout(function() {
    const introPage = document.getElementById('intro-page');
    const mainContent = document.getElementById('main-content');
    const navbar = document.querySelector('.navbar');

    if (introPage && mainContent && navbar) {
      introPage.style.display = 'none';
      mainContent.classList.remove('hidden');
      navbar.style.display = 'block';
    }
  }, 4000);

  // Timeline stage hover functionality
  document.querySelectorAll('.timeline-stage').forEach(stage => {
    stage.addEventListener('mouseover', function() {
      const hiddenText = this.querySelector('.hidden-text');
      if (hiddenText) hiddenText.style.display = 'block';
    });

    stage.addEventListener('mouseout', function() {
      const hiddenText = this.querySelector('.hidden-text');
      if (hiddenText) hiddenText.style.display = 'none';
    });
  });

  // Scene setup for Dodecahedron
  const dodecahedronContainer = document.getElementById('dodecahedron-container');
  if (dodecahedronContainer) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00001C); // Match webpage background color

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(1000, 1000); // Set size for larger view
    dodecahedronContainer.appendChild(renderer.domElement);

    // Dodecahedron geometry and material
    const geometry = new THREE.DodecahedronGeometry(5);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,  // White borders
        wireframe: true   // Only show the wireframe (borders)
    });
    const dodecahedron = new THREE.Mesh(geometry, material);
    scene.add(dodecahedron);

    camera.position.z = 15;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      dodecahedron.rotation.x += 0.01;
      dodecahedron.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
};
