import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

type GLTFResult = GLTF & {
  nodes: {
    ["node_damagedHelmet_-6514"]: THREE.Mesh;
  };
  materials: {
    Material_MR: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  //@ts-ignore
  const { nodes, materials } = useGLTF("/assets/helmet.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["node_damagedHelmet_-6514"].geometry}
        material={materials.Material_MR}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/helmet.glb");

function App() {
  return (
    <div className="fullscreen">
      <Canvas dpr={4} camera={{ fov: 32 }} style={{ height: "100vh" }} flat>
        <Environment
          background
          // blur={1}
          files="/assets/chinese_garden_4k.hdr"
          // files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr"
          // ground={{ height: 5, radius: 120, scale: 20 }}
        />
        <ambientLight intensity={0} color="white" />
        <Model />

        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default App;
