
import { useEffect } from "react";

export default function useSmoothScroll() {
    useEffect(() => {
        const handleClick = (event) => {
            const link = event.target.closest('a[href^="#"]');

            if (!link) return;

            const id = link.getAttribute("href");
            const target = document.querySelector(id);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
}
