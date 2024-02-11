import React from "react";
import "./button.css";

interface ButtonInterface {
    label: string;
    type: "info" | "ok" | "danger" | "warn" | "neutral";
    onClick?: () => void; // Optional click handler
    scaleFactor?: number; // Optional scale factor for the button
}

export default function Button({ label, type, onClick, scaleFactor = 1 }: ButtonInterface) {
    const handleClick = () => {
        if (onClick) {
            onClick(); // Call the onClick handler if provided
        }
    };

    const buttonStyle = {
        backgroundColor: `var(--${type})`,
        color: `var(--${type}-text)`,
        transform: `scale(${scaleFactor})`, // Apply the scale factor dynamically
        transition: "transform 0.3s ease-in-out",
    };

    return (
        <button className="val-btn" style={buttonStyle} onClick={handleClick}>
            {label}
        </button>
    );
}
