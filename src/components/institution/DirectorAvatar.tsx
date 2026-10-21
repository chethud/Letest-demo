import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import styles from "./DirectorAvatar.module.css";

type DirectorAvatarProps = {
  name: string;
  imageSrc?: string;
};

export function DirectorAvatar({ name, imageSrc }: DirectorAvatarProps) {
  return (
    <div className={styles.frame} aria-hidden={imageSrc ? undefined : true}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={name}
          width={150}
          height={150}
          className={styles.photo}
        />
      ) : (
        <span className={styles.placeholder} aria-hidden="true">
          <User className={styles.icon} strokeWidth={1.25} />
        </span>
      )}
    </div>
  );
}
