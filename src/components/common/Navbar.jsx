function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-yellow-600">
        RRVDXB
      </h1>

      <ul className="flex gap-8 font-medium">
        <li className="cursor-pointer hover:text-yellow-600">Home</li>
        <li className="cursor-pointer hover:text-yellow-600">Products</li>
        <li className="cursor-pointer hover:text-yellow-600">Brands</li>
        <li className="cursor-pointer hover:text-yellow-600">About</li>
        <li className="cursor-pointer hover:text-yellow-600">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;