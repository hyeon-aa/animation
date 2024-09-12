import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { m } from "../node_modules/framer-motion/dist/index";
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



const boxVariants = {
    hover: { scale: 2, rotateZ: 90 }, //마우스 갖다댈때
    click: { scale: 1, borderRadius: "100px" }, //마우스 클릭할때
}

function App() {
    return (
        <Wrapper>
            <Box
                variants={boxVariants}
                whileHover="hover"
                whileTap="click"
            >
            </Box>
        </Wrapper >
    );
}



export default App;