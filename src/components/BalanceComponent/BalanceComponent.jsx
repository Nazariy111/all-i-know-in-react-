import { CgEuro } from "react-icons/cg";
import css from './BalanceComponent.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { balanceSelector } from "../../redux/balance/selectors";
import { addMoney, minusMoney } from "../../redux/balance/balanceSlice";
import toast from "react-hot-toast";

const BalanceComponent = () => {
    const balance = useSelector(balanceSelector);

    const [value, setValue] = useState(0);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setValue(value);
    }

    const onAdd = () => {
        dispatch(addMoney(value));
    }

    const onMinus = () => {
        
        if (value > balance) {
            toast.error("sorry, you have not enough money for this operation");
            return;
        }

        
        dispatch(minusMoney(value));
    }

    useEffect(() => {
        if (value < 0) {
            toast.error("value can't be < 0");
            setValue(0);
        }
    }, [value])
    
    useEffect(() => {
        if (balance <= 0) {
            toast.error("sorry, you out of money");
            
        }
    },[balance])

    return (
        <div className={css.balanceContainer}>
            <h3 className={css.title} ><CgEuro size={20} color="green" /> YOUR BALANCE</h3>
            <input type="number" name="number" value={ value} onChange={handleChange}/>
            
            <div className={css.btnBox}>
                <button onClick={onAdd}>+ balance</button>
                <button onClick={onMinus}>- balance</button>
            </div>

            <div className={css.balanceWindow}>
                <p className={css.deposite}>{balance} eur</p>
            </div>
        </div>
    )
}

export default BalanceComponent