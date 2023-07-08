import logo from './logo.svg';
import './App.css';
import Cards from "./Components/Cards";
import  NavBar  from './Components/NavBar';

function App() {
  const blog = [
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRzHHirDMQU_v0RHsILVKVt2O2RzpYR_EA_wiH5XaZQiOO_SBqb_8clGzD2cNXMTFoB0&usqp=CAU",
      title : "Trees",
      content : "In botany, a tree is a perennial plant with an elongated stem, or trunk, usually supporting branches and leaves"
    },
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhO6fvT8PzbkJ1keU88beLT1JCg-8VJFN1Zw&usqp=CAU",
      title : "Space",
      content : "space is defined as a boundless, three-dimensional continuum where objects can have relative positions, directions and size."
    },
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIavcDE_2Xf8tdPMoYKzMB-heDeIO9eUz1w&usqp=CAU",
      title : "Black Hole",
      content : "A black hole is a region of spacetime where gravity is so strong that nothing, including light or other electromagnetic waves, has enough energy to escape it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole."
    },
    {
      image : "data:image/jpeg;base64,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",
      title : "Neutron Star",
      content : "A neutron star is the collapsed core of a massive supergiant star, which had a total mass of between 10 and 25 solar masses, possibly more if the star was especially metal-rich. Except for black holes, neutron stars are the smallest and densest currently known class of stellar objects",
    }
  ];
    
  return (
    <div className="Container">
      <div className="nav-bar">
        <NavBar/>
      </div>
      <div classname="Content">
        {blog.map((post) => (
          <>
          {/* <p>{post.title}</p>
          <p>{post.content}</p> */}
          <Cards data = {post}></Cards>
          </>
          
        ))}
      </div>
    </div>
    

  );
}

export default App;
