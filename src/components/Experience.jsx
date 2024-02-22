import {CameraControls, Environment, OrbitControls, Text, MeshReflectorMaterial} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {degToRad, lerp} from "three/src/math/MathUtils.js";
import {Color} from "three";
import {currentPageAtom} from "./UI.jsx";
import {useAtom} from "jotai";
import {useFrame} from "@react-three/fiber";
import {Island} from "./Island.jsx";
import {Ballon} from "./Ballon.jsx";

const BloomColor = new Color("#fff");
BloomColor.multiplyScalar(1.1);

export const Experience = () => {
    const controls = useRef();
    const meshFitCameraHome = useRef();
    const meshFitCameraStore = useRef();
    const textMaterial = useRef();

    const [currentPage,setCurrentPage] = useAtom(currentPageAtom);

    useFrame((_,delta) => {
        textMaterial.current.opacity = lerp(textMaterial.current.opacity,currentPage === "home" ? 1 : 0,delta * 1.5);
    });

    const intro = async () => {
        controls.current.dolly(-22);
        controls.current.smoothTime = 1.2;
        setTimeout(() => {
            setCurrentPage("home");
        },1200);
        fitCamera();
    };

    const fitCamera = async () => {
        if(currentPage === "store"){
            controls.current.fitToBox(meshFitCameraStore.current,true);
        } else {
            controls.current.fitToBox(meshFitCameraHome.current,true);
        }
    }

    useEffect(() => {
        intro();
    }, []);

    useEffect(() => {
        fitCamera();
        window.addEventListener('resize',fitCamera);
        return () => window.removeEventListener("resize",fitCamera);
    }, [currentPage]);



    return (
        <>
            <CameraControls ref={controls}/>
            <mesh ref={meshFitCameraHome} position-z={1.7} visible={false}>
                <boxGeometry args={[7.5, 4, 3]}/>
                <meshBasicMaterial color="orange" transparent opacity={0.5}/>
            </mesh>
            <group rotation-y={degToRad(90)}  position-x={1}>
                <Ballon scale={0.1}/>
                <mesh ref={meshFitCameraStore} position-y={0.8} position-z={-0.8} visible={false}>
                    <boxGeometry args={[2, 2, 0.8]}/>
                    <meshBasicMaterial color="red" transparent opacity={0.5}/>
                </mesh>
            </group>
            <Text font={"fonts/StarshipGrunge.ttf"} position-x={-1.3} position-y={-0.3} position-z={1} lineHeight={0.8}
                  rotation-y={degToRad(30)} anchorY={"bottom"} textAlign="center">
                Project {"\n"} Mayhem
                <meshBasicMaterial color={BloomColor} toneMapped={false} ref={textMaterial}/>
            </Text>
            <group position-x={3} position-z={-4.5}>
                <Island scale={0.25}/>
                <mesh ref={meshFitCameraStore} position-y={0.4} position-z={-0.8} visible={false}>
                    <boxGeometry args={[2, 2, 0.8]}/>
                    <meshBasicMaterial color="red" transparent opacity={0.5}/>
                </mesh>
            </group>
            <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[100, 100]}/>
                <MeshReflectorMaterial
                    blur={[100, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={10}
                    roughness={1}
                    depthScale={1}
                    opacity={0.5}
                    transparent
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#333"
                    metalness={0.5}
                />
            </mesh>
            <Environment preset="sunset"/>
        </>
    );
};
