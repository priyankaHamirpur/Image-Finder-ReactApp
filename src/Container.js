import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Title from './Title';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import ImageButton from './ImageButton';
import ImageTitle from './ImageTitle';
import Image from './Image';
import './container.css'




function Container() {
    const [searchValue, setSearchValue] = useState('');
    // State for input field value
    const [printImg, setPrintImg] = useState('');
    // State to display the name of image we are searching
    const [btnImage, setBtnImage] = useState('');
    // State to get the value of Image  Button : which type of image button we are clicking
    const [loadImage, setLoadImage] = useState([]);
    // state to load the image for default or if we have not searched for any type of image
    const [name, setName] = useState('');
    // state to load the image for searched value


    const API_Key = `XaF6agSkVzfKt6zeNeuLfUHRNXTYWOlD1jrM_hMCQWI`;
   

    const getValue =(event)=>{
        setSearchValue(event.target.value);
        // Getting value from input field
       
    }
 
        useEffect( ()=>{
            // first useEffect for initial image loading
            axios.get(`https://api.unsplash.com/photos?&client_id=${API_Key}`)
            .then( (response) =>{
                setLoadImage(response.data)
                // console.log(response)
            })
        
        }, [])

        function Pictures(value){
            // Second useEffect to load images for input fiels value
            const [query, setQuery] = useState([]);
            useEffect( ()=>{
                axios.get(`https://api.unsplash.com/search/photos?query=${value}&client_id=${API_Key}`)
                .then( (response) =>{
                    setQuery(response.data.results);
                })
    
            }, [name])
            return query
         }
       
const picture = Pictures(name);

    const getImage = ()=>{
        // onclick handler for search button which is changing state for input field value
        setPrintImg(searchValue ?`${searchValue} Images` :" ") ;
        setName(searchValue);
        
    }

    const getImageFromBtn =(event)=>{
        // onclick handler for image buttons 
        setBtnImage(event.target.value)
        setPrintImg(`${event.target.value} Images`)
        setName(event.target.value)
      
    }

  return <div className='main_container'>

      <Title title='Snap Shot' />

      <div className='search_container'>
      <SearchBar type='text' placeholder='Search...' onchange={getValue}/>
      <SearchButton id='search_btn' name='Search' onclick={getImage}/>
      </div>
      
      <div className='imageButton_container'>
      <ImageButton value='Mountain' onclick={getImageFromBtn}/>
      <ImageButton value='Beach' onclick={getImageFromBtn}/>
      <ImageButton value='Birds' onclick={getImageFromBtn} />
      <ImageButton value='Food' onclick={getImageFromBtn}/>
      </div>
     
      <div className='image_title'> 
      <ImageTitle searchedValue={printImg}/>
      </div>
  <div className='images'>
  {name ? (
          picture.map( (img, key) =>{
            return <Image src={img.urls.thumb} alt="" key={key} fullImage={img.urls.full}/>
        })
      ):
         (loadImage.map( (img, key) =>{
              return <Image src={img.urls.thumb} alt="" key={key} fullImage={img.urls.full}/>
          })
         )
      }
  </div>

      
  </div>;
}

export default Container;
