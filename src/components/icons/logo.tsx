import { ImgHTMLAttributes } from 'react';

export default function CoeurAILogo(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src="/co-logo.jpg" alt="Coeur.AI Logo" {...props} />
  );
}
