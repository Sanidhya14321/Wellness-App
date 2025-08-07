import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei'; // Ensure Box and OrbitControls are imported

const ThreeDModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow /> {/* Added castShadow for better lighting */}
      <pointLight position={[-10, -10, -10]} />
      <Box args={[1, 1, 1]} receiveShadow castShadow> {/* Added receiveShadow and castShadow */}
        <meshStandardMaterial color="hotpink" /> {/* Consider using a more neutral color or making it themeable */}
      </Box>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;