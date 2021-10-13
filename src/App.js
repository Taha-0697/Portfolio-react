import Profile from "./Components/profile";
// import Navbar from "./Components/navbar";

function App() {
  const skills = ["PHP", "REACT","HTML", "CSS", "Wordpress", "OOP", "JavaScript"];

  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <Profile
          image_profile="https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/131982942_3996405427038580_2159913744504855507_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFiQuv105gMBSxlb-a9CCeqqg7nb-cwfVaqDudv5zB9VsOa2phSvnBh-EMqjMzzAnTp2_tnZ8Cn_zJ4SoaPMohs&_nc_ohc=yW__6PUAA3kAX_DG5jN&_nc_ht=scontent.fkhi8-1.fna&oh=764ecdc37ee6f16be31f1c967f7d1a12&oe=618A4AAF"
          name="Taha Chaghtai"
          designation="Front-End Developer"
          details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat earum, necessitatibus, aut assumenda itaque tenetur corporis cum reiciendis suscipit debitis expedita quas minus delectus nobis aspernatur voluptas odit, nesciunt consectetur ipsam id vitae alias. Nemo culpa rerum ipsum exercitationem necessitatibus!"
          university="Iqra University"
          year = "2018-2021"
          skills={skills}
        />
      </div>
    </>
  );
}

export default App;
