import { connect } from "react-redux";
import { NavLink, Link} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
// Navbar completo al estilo Ethnicraft con buscador fullscreen
const mockResults = [
  "Mesa de centro",
  "Sofá Classic",
  "Lámpara de pie",
  "Silla Outdoor",
  "Biblioteca moderna",
  "Mesa de comedor",
  "Cómoda vintage",
  "Alfombra natural",
];


function MegaMenu({ title, categories }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-black uppercase font-medium text-sm px-2 py-1"
        >
          {title}
        </button>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute -left-96 top-9 w-screen bg-white shadow-2xl border-t mt-2 z-50"
            >
              <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-8 p-8">
                {categories.map((cat, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                      {cat.title}
                    </h4>
                    <ul className="space-y-1">
                      {cat.items.map((item, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }


function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setFilteredResults([]);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = mockResults.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [query]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 flex justify-center items-center px-4 z-50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6 relative">
              <button
                className="absolute top-1 right-1 text-gray-600 hover:text-black"
                onClick={onClose}
                aria-label="Cerrar búsqueda"
              >
                <X className="w-6 h-6" />
              </button>
              <input
                type="text"
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar productos, colecciones..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              {filteredResults.length > 0 && (
                <ul className="mt-4 max-h-64 overflow-y-auto border border-gray-200 rounded-md shadow-sm">
                  {filteredResults.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-gray-800"
                      onClick={() => {
                        alert(`Elegiste: ${item}`);
                        onClose();
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {query && filteredResults.length === 0 && (
                <p className="mt-4 text-center text-gray-500">No se encontraron resultados.</p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white shadow z-40">
        <NavLink className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link className="text-xl font-playfair tracking-tight" to="/">Boldcraft Design</Link>

        <div className="hidden md:flex space-x-6 items-center">
        <MegaMenu
  title="Indoor"
  categories={[
    { title: "Living", items: ["Sofás", "Mesas ratonas", "Estanterías"] },
    { title: "Comedor", items: ["Mesas", "Sillas", "Aparadores"] },
    { title: "Dormitorio", items: ["Camas", "Mesas de luz", "Cómodas"] },
    { title: "Oficina", items: ["Escritorios", "Sillas", "Bibliotecas"] },
  ]}
/>
<MegaMenu
  title="Outdoor"
  categories={[
    { title: "Exterior", items: ["Sillones", "Mesas", "Reposeras"] },
    { title: "Accesorios", items: ["Macetas", "Alfombras", "Iluminación"] },
  ]}
/>
<Link to="/nosotros" className="text-gray-700 hover:text-black text-sm uppercase font-medium">
  Nosotros
</Link>
<Link to="/contacto" className="text-gray-700 hover:text-black text-sm uppercase font-medium">
  Contacto
</Link>
</div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-gray-700 hover:text-black"
              aria-label="Abrir búsqueda"
            >
              <Search className="w-5 h-5" />
            </button>

            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </NavLink>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(Navbar);