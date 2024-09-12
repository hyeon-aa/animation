import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
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

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(0, 255, 255, 255);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//drag: { backgroundColor: "rgb(255, 255, 255)", transition: { duration: 10 } }, 드래그할때 -> 드래그할때 색이 점진적으로 바뀐다(여기선 색을 "Blue"가 아니라 rgb 숫자로 줘야함.)
const boxVariants = {
    hover: { scale: 2, rotateZ: 90 }, //마우스 갖다댈때
    click: { scale: 1, borderRadius: "100px" }, //마우스 클릭할때
}

//drag="x" : x축으만 욺직일 수 있음
//dragConstraints : drag해서 갈 수 있는 영역

//biggerbox까지만 드래그가 가능하도록 만들기 ->biggerbox까지로 제한
function App() {

    const biggerboxRef = useRef<HTMLDivElement>(null)
    return (
        <Wrapper>
            <BiggerBox ref={biggerboxRef}>
                <Box
                    drag
                    dragConstraints={biggerboxRef} //biggerbox의 가장자리가 drag할 수 있는 영역이다.
                    dragSnapToOrigin //biggerbox의 가장자리로 가면 원래 위치였던 가운데로 다시 back.
                    dragElastic={0.5} //잡아당기는 힘 1이될수록 내가 원하는만큼 물체를 움직일 수 있다. 
                    variants={boxVariants}
                    whileHover="hover"
                    whileTap="click"
                    whileDrag="drag"
                >
                </Box>
            </BiggerBox>
        </Wrapper >
    );
}



export default App;