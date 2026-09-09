import Image from "next/image";

export default function CoeurAILogo({
  className = "h-8 w-auto",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/co-log.png"
      alt="Coeur.AI Logo"
      width={32}
      height={32}
      className={className}
    />
  );
}
