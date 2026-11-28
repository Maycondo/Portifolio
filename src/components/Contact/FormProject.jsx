import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import MessageSent from "../MessageSent/Notification"; // ajuste o caminho conforme sua estrutura

const projectTypes = [
  { pt: "Site", en: "Website" },
  { pt: "App", en: "App" },
  { pt: "Branding", en: "Branding" },
  { pt: "UI Design", en: "UI Design" },
  { pt: "Outro", en: "Other" },
];

const FormProject = ({ isPT = true }) => {
  const [projectType, setProjectType] = useState("Site");
  const [isSending, setIsSending] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    type: "success",
    message: "",
  });

  useEffect(() => {
    if (!notification.show) return;
    const timer = setTimeout(
      () => setNotification((prev) => ({ ...prev, show: false })),
      4000
    );
    return () => clearTimeout(timer);
  }, [notification.show]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const selectedProject = projectTypes.find((type) => type.pt === projectType);

    const templateParams = {
      from_name: formData.get("name"),
      reply_to: formData.get("email"),
      project_type: isPT
        ? selectedProject?.pt ?? projectType
        : selectedProject?.en ?? projectType,
      budget: formData.get("budget"),
      deadline: formData.get("deadline"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setNotification({
        show: true,
        type: "success",
        message: isPT
          ? "Mensagem enviada com sucesso! Obrigado pelo contato."
          : "Message sent successfully! Thank you for contacting me.",
      });

      form.reset();
      setProjectType("Site");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);

      setNotification({
        show: true,
        type: "error",
        message: isPT
          ? "Não foi possível enviar sua mensagem. Tente novamente."
          : "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="containe-form">
      <MessageSent
        show={notification.show}
        type={notification.type}
        message={notification.message}
      />

      <div className="form-heading">
        <h2>{isPT ? "Conte sobre o seu projeto" : "Tell me about your project"}</h2>
        <p>
          {isPT
            ? "Quanto mais detalhes, melhor será minha resposta."
            : "The more details you provide, the better my response."}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* TIPO DE PROJETO */}
        <div className="form-group project-group">
          <label>{isPT ? "TIPO DE PROJETO" : "PROJECT TYPE"}</label>
          <div className="project-options">
            {projectTypes.map((type) => (
              <button
                key={type.pt}
                type="button"
                className={
                  projectType === type.pt ? "project-option active" : "project-option"
                }
                onClick={() => setProjectType(type.pt)}
              >
                {isPT ? type.pt : type.en}
              </button>
            ))}
          </div>
        </div>

        {/* NOME E EMAIL */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name">{isPT ? "NOME" : "NAME"}</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder={isPT ? "Seu nome" : "Your name"}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">E-MAIL</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="voce@email.com"
              required
            />
          </div>
        </div>

        {/* ORÇAMENTO E PRAZO */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-budget">{isPT ? "ORÇAMENTO" : "BUDGET"}</label>
            <select id="contact-budget" name="budget" defaultValue="" required>
              <option value="" disabled>
                {isPT ? "Selecione" : "Select"}
              </option>
              <option value="Até R$ 1 mil">
                {isPT ? "Até R$ 1 mil" : "Up to R$ 1k"}
              </option>
              <option value="R$ 1 mil - R$ 3 mil">R$ 1 mil - R$ 3 mil</option>
              <option value="R$ 3 mil - R$ 5 mil">R$ 3 mil - R$ 5 mil</option>
              <option value="Acima de R$ 5 mil">
                {isPT ? "Acima de R$ 5 mil" : "Over R$ 5k"}
              </option>
              <option value="A definir">
                {isPT ? "A definir" : "To be defined"}
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-deadline">{isPT ? "PRAZO" : "DEADLINE"}</label>
            <select id="contact-deadline" name="deadline" defaultValue="Flexível">
              <option value="Flexível">{isPT ? "Flexível" : "Flexible"}</option>
              <option value="Até 15 dias">
                {isPT ? "Até 15 dias" : "Up to 15 days"}
              </option>
              <option value="Até 30 dias">
                {isPT ? "Até 30 dias" : "Up to 30 days"}
              </option>
              <option value="Até 60 dias">
                {isPT ? "Até 60 dias" : "Up to 60 days"}
              </option>
            </select>
          </div>
        </div>

        {/* MENSAGEM */}
        <div className="form-group message-group">
          <label htmlFor="contact-message">{isPT ? "MENSAGEM" : "MESSAGE"}</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder={isPT ? "Descreva sua ideia..." : "Describe your idea..."}
            required
          />
        </div>

        {/* BOTÃO */}
        <div className="form-submit">
          <button type="submit" disabled={isSending}>
            {isSending
              ? isPT
                ? "Enviando..."
                : "Sending..."
              : isPT
              ? "Enviar mensagem"
              : "Send message"}
            <FiSend />
          </button>
        </div>
      </form>
    </div>
  );
};

FormProject.propTypes = {
  isPT: PropTypes.bool,
};

export default FormProject;