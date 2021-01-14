
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar title="Start Bootstrap" />
      <div>
        <Jumbotron title="We love Cats" text="A quick and simple service for getting pictures of kittens for use as placeholders in your designs or code. Just put your image size (width & height) after our URL and you'll get a placeholder." buttonUrl="https://placekitten.com/" buttonLabel="Go to Place Kitten" />
      </div>
      <div className="container mt-4">
        <div className="row text-center">
          <Card title="hola mundo" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." imagen="https://placekitten.com/g/525/300" boton="Click Here" link="https://google.com" />
          <Card title="hola mundo" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." imagen="https://placekitten.com/g/525/300" boton="Click Here" link="https://google.com" />
          <Card title="hola mundo" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." imagen="https://placekitten.com/g/525/300" boton="Click Here" link="https://google.com" />
          <Card title="hola mundo" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." imagen="https://placekitten.com/g/525/300" boton="Click Here" link="https://google.com" />
        </div>
      </div>
      <Footer footerText="Copyright &copy; Your Website 2021" />
    </>
  );
}

export default App;
