import React, { useContext, useEffect, useState }from 'react'
import { Link } from 'react-router-dom';
import StarRating from '../components/feed/StarRating';
import "C:/Users/ICSISTEM/Desktop/VoyagesFE/voyagesFE/src/styles/create.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { MyContext } from '../context/myContext';

const Create = () => {
    const [publicId, setPublicId] = useState("");
    // Replace with your own cloud name
    const [cloudName] = useState("dq2n34bbm");
    // Replace with your own upload preset
    const [uploadPreset] = useState("iif0ee3o");
  
    // Upload Widget Configuration
    // Remove the comments from the code below to add
    // additional functionality.
    // Note that these are only a few examples, to see
    // the full list of possible parameters that you
    // can add see:
    //   https://cloudinary.com/documentation/upload_widget_reference
  
    const [uwConfig] = useState({
      cloudName,
      uploadPreset,
      cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      // multiple: false,  //restrict upload to a single file
      // folder: "user_images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    });
  
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName
      }
    });
  
    const myImage = cld.image(publicId);

    const [img, setImg] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [overrated, setOverrated]= useState("");
    const [underrated, setUnderrated]= useState("");
    const [rating, setRating] = useState("");
    const [isPublic, setIsPublic] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useContext(MyContext);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const currentUserTr = JSON.parse(localStorage.getItem("user"));
        if (currentUserTr) {
            setCurrentUser(currentUserTr.user);
        }
    }, [localStorage.getItem("user")]);

    if (!currentUser) return <p>Loading</p>;
  
    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
    const createHandler = async () => {
        setError(null);
    
        try {
          setLoading(true);
    
          const response = await axios.post(
            "https://localhost:7030/api/Diaries",
            {
                imageUrl: img,
                title: title,
                description: desc,
                overratedSpots: overrated,
                underratedSpots: underrated,
                rating: rating,
                isPublic: isPublic,
                userId: currentUser.id
            }
          );
    
          const responseData = response.data;
          console.log(response);
          navigate("/profile");
        } catch (e) {
          console.log("Error", e);
          setError("Something went wrong");
        } finally {
          setLoading(false);
        }
      };
    return (
    <>
    <div className='create'>
        <div className='cHeader'>
            <h2>Create your Diary</h2>
        </div>
        <div className='createDiary'>
            <div className="diaryFrame">
                <div className="postImg">
                    <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} setImage={setImg} />
                </div>
                <div className="diaryContent">
                    <div className="diaryDesc">
                        <input name='title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                        <div className="desc">
                            <textarea name='desc' value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description"></textarea>
                        </div>
                        <div className="our">
                            <input name='overrated' type="text" value={overrated} onChange={(e) => setOverrated(e.target.value)} placeholder="Overrated spots" />
                            <input name='underrated' type="text" value={underrated} onChange={(e) => setUnderrated(e.target.value)} placeholder="Underrated spots" />
                        </div>
                    </div>
                    <div className="interaction">
                        <div className="rating">
                            <StarRating name="rating" rating={rating} onRatingChange={handleRatingChange}/>
                            <span className="displayRating">{rating}/5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='subButton'>
            <Link to="/feed" className="btn-flip" data-back="Diary" data-front="Create" onClick={createHandler}></Link>
        </div>
    </div>
    </>
  )
}

export default Create