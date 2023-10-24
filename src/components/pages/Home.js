import React,{useState,useEffect} from 'react';
import axios from "axios";
import { motion } from 'framer-motion';
import {useDispatch,useSelector} from "react-redux"
import {addToCart} from "../../store/cartslice";
import { useNavigate } from 'react-router-dom';
import {Box,styled,AppBar,Toolbar,Typography,Button} from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {apiKey,apiUrl} from "../../utils/Constants";
import "../../assets/styles/home.css";
import Dialog from './Dialog';
import RecipeUsedIngredientsTable from "./RecipeIngridentTable";


const ImageContainer=styled(Box)`
  & > img {
    font-size:1.7rem;
    border-radius:1.2rem;
  }
`
const CartButtonContainer = styled(Box)`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const AddToCartBox = styled(Box)`
  border: 2px solid #007bff; 
  border-radius: 5px;
  background-color: white;
  align-items:left;
  text-align: center;
`;

const IconButton = styled(Button)`
  && {
    padding: 5px; /* Adjust the size as needed */
    font-size: 0.8rem; /* Adjust the font size as needed */
  }
  &&:hover {
    background-color: #007bff; /* Change the background color on hover */
    color: white;
  }
`;

const Home = () => {

  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ingredientInput, setIngredientInput] = useState("");
  const [error, setError] = useState(null);


  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageInfo, setSelectedImageInfo] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedLikes, setSelectedLikes] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [selectedUsedIngredients, setSelectedUsedIngredients] = useState([]);



  // Function to open the dialog with image info
const openDialog = (imageSrc, id, usedIngredients, title, likes) => {
  setSelectedImage(imageSrc);
  setSelectedTitle(title);
  setSelectedLikes(likes);
  setSelectedId(id);
  setSelectedUsedIngredients(usedIngredients);
  setIsDialogOpen(true);
};


  const closeDialog = () => {
    setSelectedImage(null);
    setSelectedImageInfo('');
    setIsDialogOpen(false);
  };





  const dispatch = useDispatch();

  const cart=useSelector((e)=>e.items)

  console.log("cart",cart)

  console.log("cart1",recipes[0].usedIngredients);

  console.log("d",selectedUsedIngredients)
  

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };




  const navigate=useNavigate();

  
  const handleIngredientSearch = () => {

    setLoading(true);
    setError(null);

    axios.get(apiUrl, {
        params: {
          apiKey,
          ingredients: ingredientInput
        }
      })
      .then((response) => {
        setRecipes(response.data);
        console.log("info",response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data. Please check your input and try again.");
        navigate('/error');
        setLoading(false);
      });
  };


  return (
    <>
      <div style={{textAlign: 'center',margin:'2rem',}}>
        <motion.input
          type="text"
          placeholder="Enter ingredient(s)"
          value={ingredientInput}
          onChange={(e) => setIngredientInput(e.target.value)}
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }} 
          style={{border:'1px solid grey',borderRadius:'3px 0px 0px 3px',padding:'1px',fontSize:'1.5rem'}}
        />
        
        <motion.button
          onClick={handleIngredientSearch}
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }} 
          style={{
            padding : "2px",
            textTransform : "capitalize",
            border:'none',
            borderRadius:'0px 3px 3px 0px',
            background : 'red',
            color:'white',
            fontFamily: "Trebuchet MS",
            fontSize:'1.5rem'
          }}
        >
          SEARCH
        </motion.button>
      </div>
  <div style={{margin:'1rem'}}>
    {
    loading ? 
      (
        <h1>Loading...</h1>
      ) 
      : error ? 
      (
        <p>{error}</p>
      ) 
      : 
      (
      <Carousel responsive={responsive}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="image-container" style={{ position: 'relative' }}>
            <motion.img 
              src={recipe.image} 
              alt="image"
              onClick={() => openDialog(recipe.image,recipe.title,recipe.likes,recipe.usedIngredients)} />
                <CartButtonContainer>
                  <AddToCartBox>
                    <IconButton
                      color="primary"
                      onClick={()=>handleAddToCart(recipe)}
                    >
                      <ShoppingCartIcon />
                      ADD TO CART
                    </IconButton>
                  </AddToCartBox>
                </CartButtonContainer>
                <div className="title-box">
                  <h3 className="title-over-image">
                    {recipe.title}
                  </h3>
                </div>
              </div>
        ))}
      </Carousel>
      )}
      </div>

    <Dialog
      isOpen={isDialogOpen}
      onClose={closeDialog}
      imageSrc={selectedImage}
      title={selectedTitle}
      likes={selectedLikes}
      id={selectedId}
      usedIngredients={selectedUsedIngredients} 
    />

    </>
  )
}

export default Home