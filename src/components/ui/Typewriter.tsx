import { useState, useEffect } from 'react';

interface TypewriterProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const Typewriter = ({
  roles,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = '',
}: TypewriterProps) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    // Blinking cursor animation
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    if (isPaused) {
      // Pause after typing is complete
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting) {
      // Deleting characters
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Move to next role after deleting
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      // Typing characters
      if (currentText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause after typing is complete
        setIsPaused(true);
      }
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [currentText, isDeleting, isPaused, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
    </span>
  );
};
