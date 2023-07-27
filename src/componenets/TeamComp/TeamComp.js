import {
  RoundedBox,
  MeshPortalMaterial,
  CameraControls,
  useTexture,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import * as THREE from "three";
import { useEffect, useState, useRef } from "react";
import img1 from "assets/profile.jpg";

const ImageStage = ({ texture, active, setActive, name, ...props }) => {
  const map = useTexture(texture);
  const portalMaterial = useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

  return (
    <group {...props}>
      <RoundedBox
        name={name}
        args={[3, 5, 0.1]}
        onDoubleClick={() => setActive(active === name ? null : name)}
      >
        <planeGeometry args={[2, 3]} />
        <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
          <ambientLight intensity={0.5} />
          <mesh>
            <sphereGeometry args={[5, 104, 264]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

export default function TeamComp() {
  const [active, setActive] = useState(null);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(0, 0, 20, 0, 0, 0, true);
    }
  }, [active, scene]);
  return (
      <>
        <ambientLight intensity={0.5} />
        <CameraControls ref={controlsRef} />
        <ImageStage height={"100%"} texture={img1} active={active} setActive={setActive} />
        <ImageStage texture={img1} position-x={-2.5} rotation-y={Math.PI / 8} active={active} setActive={setActive} />
        <ImageStage texture={img1} position-x={2.5} rotation-y={-Math.PI / 8} active={active} setActive={setActive} />
        </>
  );
}
