/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle({ theme, onThemeChange }) {
    const [tema, setTema] = useState(theme);

    useEffect(() => {
        setTema(theme);
    }, [theme]);

    const alternarModo = () => {
        const novoTema = tema === 'ModeDark'
            ? 'ModeLight'
            : 'ModeDark';

        setTema(novoTema);
        onThemeChange?.(novoTema);
    };

    return (
        <div className="Botao_Modo">
            <button
                type="button"
                onClick={alternarModo}
                aria-label="Alternar tema"
                title="Alternar tema"
            >
                <AnimatePresence mode="wait">
                    <motion.i
                        key={tema}
                        className={`bi ${
                            tema === 'ModeDark'
                                ? 'bi-sun-fill'
                                : 'bi-moon-fill'
                        }`}
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>
            </button>
        </div>
    );
}
