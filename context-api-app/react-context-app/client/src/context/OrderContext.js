import {createContext,useState,useMemo,useEffect} from 'react';
export const OrderContext = createContext();

export function OrderContextProvider(props){
    const [orderCounts, setOrderCounts] = useState({
        products : new Map(),
        options : new Map(),
    })
    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0
    })
    const pricePerItem = {
        products: 1000,
        options: 500
    }

    function caculateSubTotal(orderType, orderCounts){
        let optionsCount = 0;
        for (const count of orderCounts[orderType].values()){
            optionsCount += count;
        }
        return optionsCount * pricePerItem[orderType];
    }

    useEffect(() => {
        const productsTotal = caculateSubTotal("products",orderCounts);
        const optionsTotal = caculateSubTotal("options",orderCounts);
        const total = productsTotal + optionsTotal;
        setTotals({
            products: productsTotal,
            options: optionsTotal,
            total
        })
    }, [orderCounts])
    

   const value = useMemo(() => {
        function updateItemCount(itemName, newItemCount, orderType){
            const newOrderCounts = {...orderCounts};
            const orderCountMap = orderCounts[orderType];
            orderCountMap.set(itemName, parseInt(newItemCount));

            setOrderCounts(newOrderCounts);
        }
        return [{...orderCounts, totals},updateItemCount];
    },[orderCounts,totals]);
    
    return <OrderContext.Provider value={value} {...props}/>
}


