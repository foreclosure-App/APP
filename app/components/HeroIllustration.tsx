import Image from 'next/image';

export default function HeroIllustration() {
  return (
    <Image
      src="/path/to/house-image.jpg"
      alt="House for Sale"
      width={500}
      height={400}
    />
  );
}
