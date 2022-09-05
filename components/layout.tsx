import { Variants, motion } from "framer-motion";

const variants: Variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children }: { children: any }) => {
    return (
        <motion.article
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            {children}
        </motion.article>
    )
}

export default Layout;