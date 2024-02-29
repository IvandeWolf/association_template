import Image from "next/image";

export default function Welcome() {
  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-8 my-24">
        <div>
          <h2 className="text-4xl font-semibold text-red-700 mb-8">Welkom!</h2>
          <p className="mb-4">Wij zijn dé studentenscoutingvereniging van Utrecht. Elke dinsdagavond komen wij bij elkaar voor een leuke opkomst of een gezellige borrel! Je bent van harte welkom om te komen kijken.</p>
          <p className="mb-4">Klik op de onderstaande knop om je mailadres achter te laten en wij nemen zo snel mogelijk contact met je op!</p>
          <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">Interesse?</button>
        </div>
        <div>
          <Image className="w-full" src="/intro.jpg" alt="UFO introduction" width={6000} height={4000} />
        </div>
      </div>
    </>
  )
}
