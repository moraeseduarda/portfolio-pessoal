import { useEffect, useState } from "react";

export function MaquinaDeEscrever(props) {
  const [text, setText] = useState("");
  const [mostrarCursor, setMostrarCursor] = useState(true);
  const [restart, setRestart] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024); // Define se a tela é pequena

  const escreverNaTela = (text, i = 0) => {
    if (i < text.length) {
      setMostrarCursor(true);
      setText(text.slice(0, i + 1));

      setTimeout(() => escreverNaTela(text, i + 1), props?.delay ?? 100);
    } else {
      setTimeout(() => {
        setRestart((prev) => !prev);
      }, 1000);
    }
  };

  useEffect(() => {
    setText("");
    escreverNaTela(props.text);
  }, [restart, props.text]);

  useEffect(() => {
    // Verifica se a tela é pequena e ajusta o estado
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Chama ao montar

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setMostrarCursor(false); // Desativa o cursor em telas pequenas
      return;
    }

    const intervalId = setInterval(() => {
      setMostrarCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(intervalId);
  }, [isSmallScreen]);

  return (
    <div style={{ display: 'inline-block', color: props.color || 'white' }}>
      {text}
      {mostrarCursor && !isSmallScreen && ( // Só mostra o cursor em telas grandes
        <span
          style={{
            display: 'inline-block',
            width: '2.5px',
            height: '50px',
            backgroundColor: '#ff007f',
            marginLeft: '2px',
          }}
        ></span>
      )}
    </div>
  );
}
