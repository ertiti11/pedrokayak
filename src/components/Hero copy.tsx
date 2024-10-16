import { Link } from 'react-router-dom'

const Hero = () => {
  return (
<div className="bg-cover bg-center h-screen flex items-center paradise-gradient" style={{backgroundImage: "url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", backgroundSize: 'cover'}}>      <div className="container mx-auto text-center text-white">
        <h1 className="text-6xl font-bold mb-4 text-shadow">Descubre el paraiso en el agua</h1>
        <p className="text-2xl mb-8 text-shadow">Explore aguas cristalinas con nuestros alquileres de playa premium</p>
        <Link to="#boats" className="bg-coral text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 inline-block">
          Empieza tu aventura
        </Link>
      </div>
    </div>
  )
}

export default Hero