import React from 'react';

// This is a filled version of the TikTok logo, which is more recognizable.
const CustomTikTokIcon = ({
  size = 24,
  color = 'currentColor', // This will now control the fill color
  className = '',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color} // Use fill instead of stroke for this icon
      className={className}
      {...props}
    >
      <path d="M12.528 8.003H8.32v7.994a2.997 2.997 0 0 1-5.993 0C2.327 13.795 4.12 12 6.323 12h2V4.007a2.997 2.997 0 0 1 5.993 0C14.316 6.205 12.528 8 10.323 8v4.003h4.002a2.997 2.997 0 0 1 5.993 0c0 2.202-1.793 3.997-3.997 3.997s-3.996-1.795-3.996-3.997V8.003Z" />
    </svg>
  );
};

export default CustomTikTokIcon;