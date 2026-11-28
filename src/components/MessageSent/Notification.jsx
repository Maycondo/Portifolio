import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import "./style.css";

const defaultMessages = {
  success: "Projeto solicitado com sucesso! Em breve, retornarei seu contato.",
  error: "Erro ao enviar. Por favor, tente novamente.",
};

export default function MessageSent({ show, type = "success", message }) {
  const Icon = type === "success" ? FaCircleCheck : FaCircleXmark;

  if (typeof document === "undefined") return null;

  // Portal: renderiza direto no <body>, assim o toast fica fixo na tela
  // mesmo que um elemento pai tenha transform, filter ou overflow.
  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          className={`Message-Sent ${type}`}
          style={{
            position: "fixed",
            top: "calc(clamp(12px, 3vw, 24px) + env(safe-area-inset-top, 0px))",
            left: "50%",
            zIndex: 2147483647,
          }}
          role={type === "error" ? "alert" : "status"}
          aria-live={type === "error" ? "assertive" : "polite"}
          initial={{ opacity: 0, y: -40, x: "-50%" }}
          animate={{
            opacity: 1,
            y: 0,
            x:
              type === "error"
                ? ["-50%", "-52%", "-48%", "-52%", "-48%", "-50%"]
                : "-50%",
          }}
          exit={{ opacity: 0, y: -40, x: "-50%" }}
          transition={
            type === "error"
              ? {
                  opacity: { duration: 0.2 },
                  y: { type: "spring", stiffness: 300, damping: 25 },
                  x: { duration: 0.5, delay: 0.15 },
                }
              : { type: "spring", stiffness: 300, damping: 25 }
          }
        >
          <Icon size={20} />
          <span>{message ?? defaultMessages[type]}</span>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

MessageSent.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["success", "error"]),
  message: PropTypes.string,
};