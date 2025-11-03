const AnimateDigit = ({ value }: { value: number }) => {
  return (
    <div className={`h-17 overflow-hidden`}>
      <div
        className="flex flex-col transition-transform duration-800 ease-in-out text-center"
        // [0-9] * -10% : Diff. per digit / +2px : Gap for the fade effect.
        style={{
          transform: `translateY(calc(${Math.abs(value) * -10}% + 2px))`,
        }}
      >
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </div>
    </div>
  );
};

export default AnimateDigit;