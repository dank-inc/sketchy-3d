import { useGeometry } from "../lib/helpers/geometry";
import { useLight } from "../lib/helpers/light";
import { v3 } from "../lib/helpers/maff";
import { useMaterial } from "../lib/helpers/material";
import { useMesh } from "../lib/helpers/mesh";
import { create3dSketch } from "../lib/sketchy-3d";

create3dSketch(({ renderer, camera, scene, composer, width, height }) => {
  const state = {
    ships: [],
    transports: [],
  };

  const INTERVAL = 0.3;
  let nextShip = INTERVAL;

  camera.position.set(2, 0.5, 4);
  camera.lookAt(v3(4, 0, 2));

  const ship = new Ship({ i: 0 });
  scene.add(ship.mesh);
  state.ships.push(ship);

  var planet = useMesh(
    useGeometry("sphere-buffer", [8, 10, 8]),
    useMaterial("standard", 0x4f748c)
  );

  planet.position.y = -8;
  planet.position.x = -10;
  planet.position.z = -6;

  planet.rotation.z = Math.PI * 0.125;

  scene.add(planet);

  // var boxHelp = new THREE.BoxHelper( planet, 0xffff00 );
  // scene.add( boxHelp );

  let directionalLight = useLight("#fff", 0.8);
  directionalLight.position.set(0, 10, 10);
  scene.add(directionalLight);

  composer.setSize(width, height);

  return ({ clock }) => {
    renderer.render(scene, camera);
    const speed = 0.025;
    planet.rotateY(deltaTime * speed);

    if (nextShip < time) {
      const n = simplex.noise2D(1, time);
      nextShip += n + 0.8;

      const ship = new Ship({ id: 1 });

      scene.add(ship.mesh);
      state.ships.push(ship);
    }

    for (const ship of state.ships) {
      ship.update({ deltaTime });

      if (ship.isDispatchReady()) {
        const transport = new Transport({
          startingCoords: ship.mesh.position,
        });
        scene.add(transport.mesh);
        state.transports.push(transport);
        ship.confirmDispatch();
      }

      if (ship.kill) {
        scene.remove(ship.mesh);
      }
    }

    for (const transport of state.transports) {
      transport.update({ deltaTime });
    }

    state.ships = state.ships.filter((ship) => !ship.kill);

    // controls.update();
  };
});
