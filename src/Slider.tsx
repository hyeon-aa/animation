import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/*10개의 박스 slider
한번에 한 box씩 보여주기-> visible state

prev = isBack true = x 좌표는 -500 (좌)
next = isBack false = 오른쪽(500)에서 시작해서 왼쪽(-500)에서 끝남 (오른쪽에서 왼쪽으로 날아오니까)

*/

const box = {
    entry: (isBack: boolean) => ({
        x: isBack ? -500 : 500,
        opacity: 0,
        scale: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: (isBack: boolean) => ({
        x: isBack ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: { duration: 0.3 },
    }),
};

function App() {
    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const nextPlease = () => {
        setBack(false);
        setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    };
    const prevPlease = () => {
        setBack(true);
        setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    };


    return (
        <Wrapper>
            <AnimatePresence custom={back}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
                    i === visible ? (
                        <Box
                            custom={back}
                            variants={box}
                            initial="entry"
                            animate="center"
                            exit="exit"
                            key={visible}
                        >
                            {visible}
                        </Box>
                    ) : null
                )}
            </AnimatePresence>
            <button onClick={nextPlease}>next</button>
            <button onClick={prevPlease}>prev</button>
        </Wrapper>
    );
}

export default App;