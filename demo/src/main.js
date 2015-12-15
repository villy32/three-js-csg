import THREE from 'three';
import domready from 'domready';

import { renderer } from './canvas';
import { meshFactory } from './mesh';

domready(() => {
  const app = renderer();
  const mesh = meshFactory();

  // Add the objects to the scene
  Object.keys(mesh).forEach(m => app.scene.add(mesh[m]));

  const light = new THREE.PointLight(0xffffff);
  light.position.set(0, 150, 100);
  app.scene.add(light);

  document.body.appendChild(app.rend.domElement);

  const render = () => {
    requestAnimationFrame(render);
    app.rend.render(app.scene, app.cam);
  };

  render(app);
});
