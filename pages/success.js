import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
export default function Success() {
  const routers = useRouter();
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0), 3000;
    });
  };
  useEffect(() => {
    stopConfetti;
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-latoBold">
          Thanks for the email {routers.query.name}
        </h1>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </motion.main>
  );
}
