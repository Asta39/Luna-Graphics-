import React from 'react';

// It's good practice to rename this to match the filename, e.g., AppImage
function Image({
  src,
  alt = "Luna Graphics Image", // A slightly better default alt tag
  className = "",
  ...props
}) {

  // --- THIS IS THE UPDATED PART ---
  // A function to handle image loading errors
  const handleError = (e) => {
    // It now points to your custom placeholder image in the public folder
    e.target.src = "/assets/images/android-icon-192x192.png"; // <-- IMPORTANT: Use your actual filename
    e.target.onerror = null; // Prevents infinite loops if the placeholder also fails
  };

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={handleError}
      {...props}
    />
  );
}

export default Image;