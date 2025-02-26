function Navbar() {
  return (
    <>
      <nav className="flex justify-center w-screen h-14 top-0 fixed">
        <div className="flex w-3xl justify-between items-center font-bold">
          <h2>Johanthan Aguilar</h2>
          <ul className="flex items-center space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Education</li>
            <li>Projects</li>
            <li>Resume</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
