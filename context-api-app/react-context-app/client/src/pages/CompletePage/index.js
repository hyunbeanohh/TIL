import React,{ useEffect, useContext, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'
import axios from 'axios';

const CompletePage = ({setStep}) => {
  const [loading, setLoading] = useState(true);
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderData] = useContext(OrderContext)

  useEffect(() => {
    orderComplete(orderData);
  }, [orderData]);

  const orderComplete = async (orderData) => {
    try {
      const res = await axios.post('http://localhost:4000/order', orderData);
      setOrderHistory(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("orderH: ", orderHistory);
  }, [orderHistory]);

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ))

  if(loading) {
    return <h1>주문을 처리중입니다...</h1>
  }else{
    return (
      <div style={{textAlign : 'center'}}>
        <h1>주문이 성공했어요 !</h1>
        <h2>주문 내역은 아래와 같아요.</h2>
        
        <table style={{margin : 'auto'}}>
          <tbody>
            <tr>
              <th>주문번호</th>
              <th>가격</th>
            </tr>
          {orderTable}
          </tbody>
        </table>

        <br/>
        <button onClick ={() => setStep(0)}>
          처음 페이지로 돌아가시겠어요?
        </button>
      </div>
    )
  }

  
}

export default CompletePage