import { formatPercentage } from "@/utils/utils";
import { motion } from "framer-motion";


const Results = ({
    errors,
    accuracyPercentage,
    total,
    className
}:{
    errors: number;
    accuracyPercentage: number;
    total: number;
    className?: string;
}) => {

  const initial = {opacity: 0};
  const animate = {opacity: 1};
  const duration = { duration: 0.3 };

  return (
    <motion.ul
        className={`flex flex-col items-center space-y-3 text-primary-400 ${className}`}
    >
        <motion.li 
          initial={initial}
          animate={animate}
          className="text-xl font-semibold"
          transition={{...duration, delay: 0}}
        >
          Results
        </motion.li>

        <motion.li
          initial={initial}
          animate={animate}
          transition={{...duration, delay: 0.5}}
        >
          Accuracy: {formatPercentage(accuracyPercentage)}
        </motion.li>
        <motion.li 
          initial={initial}
          animate={animate}
          transition={{...duration, delay: 1}}
          className="text-red-500"
        >
          Errors: {errors}
        </motion.li>
        <motion.li
          initial={initial}
          animate={animate}
          transition={{...duration, delay: 1.5}}
        >
          Typed: {total}
        </motion.li>
    </motion.ul>
  )
};

export default Results;
