export default function Activities() {
  return (
    <>
      <div className="relative my-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 md:grid-rows-3 gap-2">
          <img className="aspect-square object-cover" src="/activity_1.jpg" alt="" />
          <img className="aspect-square object-cover" src="/activity_2.jpg" alt="" />
          <img className="aspect-square object-cover" src="/activity_3.jpg" alt="" />
          <img className="aspect-square object-cover" src="/activity_4.jpg" alt="" />
          <div className="bg-gray-100 flex justify-center items-center">
            <h2 className="max-w-min text-center font-semibold text-5xl text-red-800">Onze Activiteiten</h2>
          </div>
          <img className="aspect-square object-cover" src="/activity_5.jpg" alt="" />
          <img className="aspect-square object-cover" src="/activity_6.jpg" alt="" />
          <img className="aspect-square object-cover" src="/activity_7.jpg" alt="" />
          <img className="aspect-square object-cover" src="/activity_8.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
