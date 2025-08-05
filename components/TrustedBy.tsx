export default function TrustedBy() {
  const partners = [
    { name: 'Google', logo: 'Google' },
    { name: 'Lotte', logo: 'LOTTE' },
    { name: 'Naver', logo: 'NAVER' },
    { name: 'PayPal', logo: 'PayPal' },
    { name: 'Bosch', logo: 'BOSCH' },
    { name: 'TechCrunch', logo: 'TechCrunch' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-400">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
