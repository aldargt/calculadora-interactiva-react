import React from 'react';

const Logo=({imagen, classDiv, classImg, alt})=>(
    <div className={classDiv}>
        <img
          src={imagen}
          className={classImg}
          alt={alt}
        />
      </div>
);

export default Logo;