import Image from 'next/image'

export default function Banner() {
  return (
    <div className="relative bg-black">
      <Image
        className="w-screen aspect-[22/9] object-cover opacity-75"
        src="/banner.jpg"
        alt="UFO banner"
        width={5702}
        height={3213}
      />
      <div className="absolute bottom-0 left-0 right-0 max-w-screen-lg mx-auto">
        <div className="absolute bottom-8 right-8 text-right flex space-x-8">
          <div>
            <h1 className="text-white text-7xl font-bold">U.F.O.-Stam</h1>
            <h2 className="text-white text-4xl font-semibold">De studentenstam van Utrecht</h2>
          </div>
          <Image className="h-8 w-auto sm:h-32" src="/logo.png" alt="" width={561} height={641} />
        </div>
      </div>
    </div>
  );
}
