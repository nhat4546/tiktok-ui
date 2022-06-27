import React, { useState, forwardRef } from "react";
import avatarDefault from "assets/icons/user-default.svg";

function CustomAvatar(
  { src, alt = "avatar", className, ...props }: CustomAvatarProps,
  ref: any
) {
  const [avatar, setAvatar] = useState("");

  const handleError = () => {
    setAvatar(avatarDefault);
  };

  return (
    <img
      src={avatar || src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
      ref={ref}
    />
  );
}

export default forwardRef(CustomAvatar);

interface CustomAvatarProps {
  src: string;
  alt?: string;
  className: string;
}
