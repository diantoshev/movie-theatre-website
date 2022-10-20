import { motion } from "framer-motion";

function AnimatePage(props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 100 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ stiffness: 500 }}
        >
            {props.children}
        </motion.div>
    );
}

export default AnimatePage;