import React, { useState } from 'react';
import { ShoppingBasket, Clock, MapPin, Phone, Instagram, Facebook, ChevronRight, Star } from 'lucide-react';

/**
 * The Golden Crust Bakery - A modern React landing page.
 * Includes responsive navigation, hero section, menu highlights, and contact info.
 */
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Artisan Sourdough",
      price: "$8.50",
      description: "Naturally leavened for 24 hours for a perfect tang and crust.",
      category: "Breads",
      image: "https://images.unsplash.com/photo-1585478259715-876a6a60ff55?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Butter Croissant",
      price: "$4.25",
      description: "Flaky, buttery layers that melt in your mouth. Hand-rolled daily.",
      category: "Pastries",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Berry Tart",
      price: "$6.00",
      description: "Vanilla bean custard topped with seasonal organic berries.",
      category: "Sweets",
      image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      name: "Pain au Chocolat",
      price: "$4.75",
      description: "Dark Belgian chocolate wrapped in our signature croissant dough.",
      category: "Pastries",
      image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-amber-600 p-2 rounded-lg">
                <ShoppingBasket className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-stone-800">Golden Crust</span>
            </div>
            
            <div className="hidden md:flex space-x-8 font-medium text-stone-600">
              <a href="#home" className="hover:text-amber-600 transition-colors">Home</a>
              <a href="#menu" className="hover:text-amber-600 transition-colors">Menu</a>
              <a href="#about" className="hover:text-amber-600 transition-colors">Our Story</a>
              <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
            </div>

            <button className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 transition-all shadow-md hover:shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2000" 
            alt="Bakery background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-bold tracking-widest uppercase bg-amber-600 text-white rounded-full">
              Baking Fresh Daily
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Warmth in Every <br />
              <span className="text-amber-400 italic">Single Bite.</span>
            </h1>
            <p className="text-xl text-stone-200 mb-8 leading-relaxed">
              Experience the authentic taste of tradition. Hand-crafted breads and pastries made with locally sourced, organic ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a href="#menu" className="px-8 py-4 bg-white text-stone-900 font-bold rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center gap-2">
                Explore Menu <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Find Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-amber-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Baked Fresh</h3>
            <p className="text-stone-600">Our ovens never stop. We bake multiple batches throughout the day.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4">
              <Star className="text-amber-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Ingredients</h3>
            <p className="text-stone-600">Only organic flour, farm-fresh eggs, and real European butter.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-amber-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Local Delivery</h3>
            <p className="text-stone-600">Warm bread delivered to your doorstep within a 5-mile radius.</p>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">From Our Ovens</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto">Discover our most beloved creations, crafted with patience and passion.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-amber-700">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2 block">{item.category}</span>
                  <h3 className="text-xl font-bold mb-2 text-stone-800">{item.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-stone-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-stone-800 transition-colors">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" 
              alt="Baking process" 
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-100 rounded-2xl -z-0"></div>
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Baking is our love language.</h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              Founded in 2010, The Golden Crust began as a small family stall at the local farmers market. Our philosophy has always been simple: use the best ingredients, respect the fermentation process, and never rush a good loaf.
            </p>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Today, we continue that tradition in our downtown bakery, where we've become a staple for morning coffee and artisanal sourdough.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="font-medium">100% Organic Flours</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="font-medium">24-Hour Sourdough Fermentation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="font-medium">Locally Sourced Seasonal Fruit</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-stone-900 text-stone-300 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-600 p-2 rounded-lg">
                <ShoppingBasket className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">Golden Crust</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Hand-crafted joy for your table. We believe in the power of good food to bring people together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Instagram /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>7:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>8:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>8:00 AM - 2:00 PM</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Find Us</h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                <span>123 Baker's Lane,<br />Pastry District, NY 10001</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                <span>(555) 123-4567</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Get notified when we pull fresh croissants out of the oven!</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-stone-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-amber-600 outline-none"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-bold transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-stone-800 text-center text-xs">
          <p>© {new Date().getFullYear()} The Golden Crust Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
