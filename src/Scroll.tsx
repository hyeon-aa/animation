import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";


//motionvalue : 애니메이션의 수치를 tracking! -> user가 왼쪽으로 드래깅하는지?오른쪽으로 드래깅하는지 알고싶을 수 있음
const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
width: 200px;
height: 200px;
background-color: rgba(99, 196, 46, 1);
border-radius: 40px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


//motionvalue : react의 state가 아님. motionvalue가 바뀐다고 컴포넌트가 다시 렌더링되지 않아!
function App() {
    const x = useMotionValue(0)

    //scrollY : 픽셀단위인 수직 스크롤(300px아래로 내려갔다. 500px 아래로 내려갔다)
    // scrollYProgress :0~1 사이의 값 (진행도 : 0.4 현재 전체화면의 40%정도 왔다.)
    const { scrollYProgress } = useViewportScroll();

    //x는 드래그 할때마다 재설정되는 값 -- 특정값(x)를 받아서 검토하길 원하는 입력값과 출력값을 각 배열로 설정
    //네모가 왼 -> 오로 갈수록 점점 작아지고 싶다. 
    //transformation=> x의 좌표가 -800 일때 크기가 2 , 0일 때는 2 , x좌표가 800일때 0으로 설정 
    const potato = useTransform(x, [-800, 0, 800], [2, 1, 0]);

    //왼->오로 갈 때 회전
    const rotateZ = useTransform(x, [-800, 800], [-360, 360]);

    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

    //네모가 왼 -> 오로 갈 때 배경색이 바뀌도록!
    const gradient = useTransform(
        x,
        [-800, 800],
        [
            "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
            "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
        ]
    );
    return (
        <Wrapper style={{ background: gradient }}>
            <Box
                style={{ x, rotateZ, scale }}
                drag="x"
                dragSnapToOrigin //biggerbox의 가장자리로 가면 원래 위치였던 가운데로 다시 back.
            >
            </Box>
        </Wrapper >
    );
}



export default App;