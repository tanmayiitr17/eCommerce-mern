import { useState } from "react";
import "./NewProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import { addProduct } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';


export default function NewProduct() {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState([]);

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleCategories = (e) => {
        setCategories(e.target.value.split(","));
    }

    const handleClick = () => {
        e.preventDefault();
        const fileName = new Date().getTime() + image.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { ...inputs, img: downloadURL, categories: categories };
                    addProduct(product, dispatch);
                });
            }
        );
    }

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input name="title" type="text" placeholder="Product title..." onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input name="desc" type="text" placeholder="Description..." onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Price</label>
                    <input name="price" type="number" placeholder="Product price..." onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Categories</label>
                    <input type="text" placeholder="pant,t-shirt,kurti..." onChange={handleCategories} />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button onClick={handleClick} className="addProductButton">Create</button>
            </form>
        </div>
    );
}