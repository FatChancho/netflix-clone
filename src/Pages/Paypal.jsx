
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import selectPrice from '../features/PriceSlice'

function Paypal(props) {
    const price = useSelector(selectPrice) 
    const paypal=useRef();

    useEffect(()=>{
        window.paypal.Button({
            createOrder:(data,actions,error)=>{
                return actions.order.create({
                    intent:'CAPTURE',
                    purchase_units:[
                        {
                            description:'Netflix Subscription',
                            amount:{
                                currency_code:'EUR',
                                value:price
                            }
                        }
                    ]
                })
            },
            onApprove:async(data,actions)=>{
                const order=await actions.order.capture();
                console.log(order)
            },
            onError:err=>console.log(err)
        }).render(paypal.current)
    },[])
    return (
        <div ref={paypal}>
            Paypale page
        </div>
    );
}

export default Paypal;