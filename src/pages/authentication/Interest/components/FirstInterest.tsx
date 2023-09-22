import { useState } from "react";

interface FirstInterestProps {
  label: string;
  initialClassName: string;
}

const FirstInterest = ({ label, initialClassName }: FirstInterestProps) => {
  const [selected, setSelected] = useState(false);
  const [className, setClassName] = useState(initialClassName);

  const toggleSelected = () => {
    setSelected(!selected);
    setClassName(selected ? initialClassName : "active-button");
  };

  return (
    <button className={className} onClick={toggleSelected}>
      {selected ? "✔" : "+"} {label}
    </button>
  );
};

export default FirstInterest;
