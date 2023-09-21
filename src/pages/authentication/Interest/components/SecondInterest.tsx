import { useState } from "react";
import DoneIcon from "../../../../assets/images/arrow-done.svg";

interface SecondInterestProps {
  name: string;
  className: string;
}

const SecondInterest = ({ name, className }: SecondInterestProps) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div className={`pick-button ${className}`}>
      <h1>{name}</h1>
      <button onClick={toggleSelected}>
        {selected ? <img src={DoneIcon} alt="" /> : "Add"}
      </button>
    </div>
  );
};

export default SecondInterest;
