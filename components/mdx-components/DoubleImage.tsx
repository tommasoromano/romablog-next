import { useState } from 'react';

const DoubleImage = ({src1,src2}:{src1:string; src2:string;}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <img src={src1} className="w-full rounded-md" />
      <img src={src2} className="w-full rounded-md" />
    </div>
  );
};

export default DoubleImage;
