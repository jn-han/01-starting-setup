import ExpenseItem from './ExpenseItem.js';
import './Expenses.css'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter.js'
import Card from '../UI/Card'

function Expenses({items}) {
    return <Card className='expenses'>
        <ExpenseItem
            title = {items[0].title}
            amount = {items[0].amount}
            date = {items[0].date}
        />
        <ExpenseItem
            title = {items[1].title}
            amount = {items[1].amount}
            date = {items[1].date}
        />
        <ExpenseItem
            title = {items[2].title}
            amount = {items[2].amount}
            date = {items[2].date}
        />
    </Card>
}

export default Expenses;