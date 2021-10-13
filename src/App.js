import Profile from "./Components/profile";
// import Navbar from "./Components/navbar";

function App() {
  const skills = ["Swift", "IOS", "Mobile Applications", "OOP", "Databases"];

  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <Profile
          image_profile="https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/147542213_3620388598077346_6643651068929093582_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEOgZxmKQTtSkDkGNPQBtDrN8Alj1dBbPY3wCWPV0Fs9n4l37uD-vTkuqabMbTyzkJGBRijpoLCOQcqw2p5SAwp&_nc_ohc=_oX3Odl25ucAX8Yb0cC&_nc_ht=scontent.fkhi8-1.fna&oh=3b8a10acb4386c8f4d66821d8199a371&oe=618D1527"
          name="Usman Bin Rehan"
          designation="Cheif Operation Officer"
          details="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat earum, necessitatibus, aut assumenda itaque tenetur corporis cum reiciendis suscipit debitis expedita quas minus delectus nobis aspernatur voluptas odit, nesciunt consectetur ipsam id vitae alias. Nemo culpa rerum ipsum exercitationem necessitatibus!"
          university="Fast University"
          certification="Certification"
          skills={skills}
        />
      </div>
    </>
  );
}

export default App;
