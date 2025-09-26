import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

const Building = ({ position, height, width, depth, color = '#1a1a1a' }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.7} />
    </mesh>
  );
};

const CNTower = ({ position }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.02;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Main tower */}
      <mesh position={[0, 15, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 30, 8]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Observation deck */}
      <mesh position={[0, 25, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 2, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Spire */}
      <mesh position={[0, 32, 0]}>
        <coneGeometry args={[0.1, 8, 6]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

const Skyline3D = () => {
  const buildings = useMemo(() => {
    const buildingData = [];
    
    // CN Tower
    buildingData.push({ type: 'cntower', position: [-8, 0, -5] });
    
    // Random buildings
    for (let i = 0; i < 20; i++) {
      buildingData.push({
        type: 'building',
        position: [
          (Math.random() - 0.5) * 20,
          0,
          (Math.random() - 0.5) * 10 - 5
        ],
        height: Math.random() * 15 + 5,
        width: Math.random() * 2 + 1,
        depth: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 20 + 200}, 20%, ${Math.random() * 10 + 5}%)`
      });
    }
    
    return buildingData;
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 10, 10], fov: 60 }}
      style={{ background: 'transparent' }}
    >
      <PerspectiveCamera makeDefault position={[0, 8, 8]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ff6b35" />
      <directionalLight position={[-10, 10, 5]} intensity={0.4} color="#4ecdc4" />
      <pointLight position={[0, 20, 0]} intensity={0.5} color="#ffffff" />
      
      {/* Buildings */}
      {buildings.map((building, index) => {
        if (building.type === 'cntower') {
          return <CNTower key={index} position={building.position} />;
        }
        return (
          <Building
            key={index}
            position={building.position}
            height={building.height}
            width={building.width}
            depth={building.depth}
            color={building.color}
          />
        );
      })}
      
      {/* Fog for atmosphere */}
      <fog attach="fog" args={['#000000', 5, 50]} />
    </Canvas>
  );
};

export default Skyline3D;
