// import { Link } from 'react-router-dom';
// For demo purposes, using a mock Link component
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);

const Home = () => (
  <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-6">
    <div className="max-w-md w-full text-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
        Home Page
      </h1>
      
      <nav className="space-y-4">
        <Link 
          to="/about" 
          className="block w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 text-center"
        >
          Go to About
        </Link>
        
        <Link 
          to="/head-tail" 
          className="block w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 text-center"
        >
          Go to Head & Tail
        </Link>
      </nav>
    </div>
  </div>
);

export default Home;