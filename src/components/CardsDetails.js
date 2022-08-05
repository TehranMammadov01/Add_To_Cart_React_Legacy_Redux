import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CardsDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const getData = useSelector(state => state.cartreducer.carts);

    const compareGet = () => {
        let compareData = getData.filter((item) => {
            return item.id == id;
        })
        setData(compareData);
        console.log(data)
    }

    useEffect(() => {
        compareGet();
    }, [id])

    return (
        <>
            <div className='container mt-2'>
                <h2 className='text-center'>Iteams Details Page</h2>
                <section className='container mt-3'>
                    <div className='iteamsdetails'>
                        {data.map(ele => {
                            return (
                                <>            
                                    <div className='items_img'>
                                        <img src={ele.imgdata} alt='image ' />
                                    </div>
                                    <div className="details">
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p><strong>Restaurant :</strong> {ele.rname}</p>
                                                    <p><strong>Price :</strong> ${ele.price}</p>
                                                    <p><strong>Dishes :</strong> {ele.address}</p>
                                                    <p><strong>Total :</strong> 544</p>
                                                </td>
                                                <td>
                                                    <p><strong>Rating :</strong> <span style={{background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px"}}>{ele.rating} ★</span></p>
                                                    <p><strong>Order Review :</strong> <span>{ele.somedata}</span></p>
                                                    <p><strong>Remove :</strong> <span><i className="fas fa-trash" style={{color: "red", fontSizse: 20, cursor: "pointer"}}></i></span></p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardsDetails