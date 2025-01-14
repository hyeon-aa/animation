// https://www.framer.com/motion/

import styled from "@emotion/styled";
import { motion } from "framer-motion";
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
  background-color: pink;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } }
}

function App() {
    return (
        <Wrapper>
            <Box
                variants={boxVars} initial="start" animate="end"
            />
        </Wrapper>
    );
}



export default App;