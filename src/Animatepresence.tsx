import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 0, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/*
사라지는 컴포넌트-!
리액트에서 버튼누르면 네모가 사라지는데, 여기에 animation을 추가하고싶다! 네모가 천천히 사라지는 게 보이도록
 <AnimatePresence>는 {} 바깥에 써야함
{}안에 사라지는게 있다면 이걸 animate하게 해준다
*/
const boxVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateZ: 360,
    },
    leaving: {
        opacity: 0,
        scale: 0,
        y: 50,
    },
};

function App() {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev);
    return (
        <Wrapper>
            <button onClick={toggleShowing}>Click</button>
            <AnimatePresence>
                {showing ? (
                    <Box
                        variants={boxVariants}
                        initial="initial"
                        animate="visible"
                        exit="leaving"
                    />
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;