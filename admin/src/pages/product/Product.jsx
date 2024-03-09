import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/chart/Chart"
import PublishIcon from '@mui/icons-material/Publish';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { updateProduct } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

export default function Product() {

    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});

    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [productStats, setProductStats] = useState([]);

    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId)
    )

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        const updatedProduct = { id: productId, ...inputs };
        updateProduct(productId, updatedProduct, dispatch);
    }

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get(`/orders/income?pdtId=${productId}`);
                const list = res.data.sort((a, b) => {
                    return a._id - b._id;
                })
                list.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], Sales: item.total },
                    ]
                    )
                )
            } catch { }
        }
        getStats();
    }, [productId, MONTHS])



    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productStats} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product.img} />
                        <span className="productName">{product.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input name="title" type="text" placeholder={product.title}
                            onChange={handleChange} />
                        <label>Product Description</label>
                        <input name="desc" type="text" placeholder={product.dec}
                            onChange={handleChange} />
                        <label>Price</label>
                        <input name="price" type="number" placeholder={product.price}
                            onChange={handleChange} />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock"
                            onChange={handleChange} >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product.img} />
                            <label for="file">
                                <PublishIcon />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button onClick={handleClick} className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}