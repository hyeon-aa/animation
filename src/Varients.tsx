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
display: grid;
grid-template-columns: repeat(2, 1fr);
background-color: rgba(99, 196, 46, 1);
border-radius: 40px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
background-color: white;
height: 70px;
width: 70px;
place-self: center;
border-radius: 35px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


//부모의 initial="start" animate="end" 를 자식으로 상속함.
const boxVariants = {
    start: {
        opacity: 0,
        scale: 0.5
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.5, //circle이 box보다 0.5 늦게 
            staggerChildren: 0.2,
            //자식들끼리 0.2씩 지연(0.2  0.2*2  0.2*3) -> box에서 circle의 Delay를설정
        }
    }
}


const CircleVariants = {
    start: {
        opacity: 0,
        y: 10,
    },
    end: {
        opacity: 1,
        y: 0,
    },
}

function App() {
    return (
        <Wrapper>
            <Box
                variants={boxVariants} initial="start" animate="end">
                <Circle variants={CircleVariants} />
                <Circle variants={CircleVariants} />
                <Circle variants={CircleVariants} />
                <Circle variants={CircleVariants} />
            </Box>
        </Wrapper>
    );
}



export default App;