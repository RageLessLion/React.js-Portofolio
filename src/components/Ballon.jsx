/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/zeppelin ballon.glb -o src/components/Ballon.jsx -k -K -r public 
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function Ballon(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/zeppelin ballon.glb')
  const { actions, names } = useAnimations(animations, group)
  // useEffect(() => {
  //   actions[names[0]].play();
  // },[]);
  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    group.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (group.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      group.current.rotation.y = Math.PI;
    } else if (group.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      group.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (group.current.rotation.y === 0) {
      // Moving forward
      group.current.position.x += 0.01;
      group.current.position.z -= 0.01;
    } else {
      // Moving backward
      group.current.position.x -= 0.01;
      group.current.position.z += 0.01;
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0, 0.367, 10]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="5612a9dd93814a4da4382ef463ce9501fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group name="Zepellin_hight_poly_ch" position={[0, 72.607, 200]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <group name="Zepellin_hight_poly_ch_Rigging_and_Engines_0">
                  <mesh name="Zepellin_hight_poly_ch_Rigging_and_Engines_0_1" geometry={nodes.Zepellin_hight_poly_ch_Rigging_and_Engines_0_1.geometry} material={materials.Rigging_and_Engines} />
                  <mesh name="Zepellin_hight_poly_ch_Rigging_and_Engines_0_2" geometry={nodes.Zepellin_hight_poly_ch_Rigging_and_Engines_0_2.geometry} material={materials.Windows_and_Interior} />
                  <mesh name="Zepellin_hight_poly_ch_Rigging_and_Engines_0_3" geometry={nodes.Zepellin_hight_poly_ch_Rigging_and_Engines_0_3.geometry} material={materials.Glass} />
                  <mesh name="Zepellin_hight_poly_ch_Rigging_and_Engines_0_4" geometry={nodes.Zepellin_hight_poly_ch_Rigging_and_Engines_0_4.geometry} material={materials.Carrier} />
                  <mesh name="Zepellin_hight_poly_ch_Rigging_and_Engines_0_5" geometry={nodes.Zepellin_hight_poly_ch_Rigging_and_Engines_0_5.geometry} material={materials.Balloon_Space} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/zeppelin ballon.glb')