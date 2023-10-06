import Image from 'next/image';
import homepic from '../images/rowan-home.png'

export default function HeroIllustration() {
  return (
    <Image
      src={homepic}
      alt="pex for Sale2"
      width={500}
      height={400}
    />
  )
}
