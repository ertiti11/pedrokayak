import { useState, useEffect } from 'react';
import { Ship } from 'lucide-react';
import BoatCard from '../components/BoatCard';
import Filters from '../components/Filters';
import BookingPage from './BookingPage';
import { getBarcos } from '../utils/api';

function App() {
  const [filteredBoats, setFilteredBoats] = useState([]);
  const [selectedBoat, setSelectedBoat] = useState(null);

  useEffect(() => {
    getBarcos().then((boats) => {
      setFilteredBoats(boats);
    });
  }, []);

  const handlePriceChange = (range: [number, number]) => {
    setFilteredBoats((prevBoats) =>
      prevBoats.filter((boat) => boat.precio_dia >= range[0] && boat.precio_dia <= range[1])
    );
  };
  const handleLengthChange = (length: number) => {
    setFilteredBoats((prevBoats) =>
      prevBoats.filter((boat) => boat.length <= length)
    );
  };

  const handleTypeChange = (types: string[]) => {
    if (types.length === 0) {
      getBarcos().then((boats) => setFilteredBoats(boats));
    } else {
      setFilteredBoats((prevBoats) =>
        prevBoats.filter((boat) => types.includes(boat.tipo))
      );
    }
  };

  const handleCapacityChange = (range: [number, number]) => {
    setFilteredBoats((prevBoats) =>
      prevBoats.filter(
        (boat) => boat.capacity >= range[0] && boat.capacity <= range[1]
      )
    );
  };

  const handleBooking = (boat) => {
    setSelectedBoat(boat);
  };

  if (selectedBoat) {
    return (
      <BookingPage 
        boat={selectedBoat} 
        onBack={() => setSelectedBoat(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 mt-24">
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <Filters
              onPriceChange={handlePriceChange}
              onLengthChange={handleLengthChange}
              onTypeChange={handleTypeChange}
              onCapacityChange={handleCapacityChange}
            />
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBoats.map((boat) => (
                <BoatCard 
                  key={boat.id} 
                  {...boat} 
                  onBook={() => handleBooking(boat)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;