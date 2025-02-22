import { useState } from "react";
import "./App.css"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alerts from "./components/Alerts";

export default function App () {

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({show:false})
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState('')

  let [expenses,setExpenses] = useState([
    {id:1,charge:'렌트비',amount:80000},
    {id:2,charge:'교통비',amount:8000},
    {id:3,charge:'식비',amount:30000},
  ])

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    if(e.target.value > 0) {
      setAmount(e.target.valueAsNumber);
    } else {
      console.log('0보다 큰 값을 입력하세요.');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if(edit) {
        const newExpense = expenses.map( item => {
          return item.id === id ? {...item, charge, amount} : item;
        })
        setExpenses(newExpense);
        setEdit(false);
        handleAlert({type: "success", text: "항목이 수정되었습니다."})
      } else {
      const newExpense = {id: crypto.randomUUID(), charge, amount}
      const newExpenses = [...expenses, newExpense]
      setExpenses(newExpenses)
      handleAlert({type:'success', text:'항목을 추가했습니다.'})
    }
      setCharge('')
      setAmount(0)
    } else {
      handleAlert({type:'danger', text:'빈칸을 제출할 수 없습니다.'})
    }
  }
    
  const handleDelete = (id) => {
    const newExpenses = expenses.filter(data => data.id !== id)
    setExpenses(newExpenses);
    handleAlert({type:'danger', text:'항목이 삭제되었습니다.'})
  }

  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text});
    setTimeout(()=>{
      setAlert({show:false})
    },3000)
  }

  const handleEdit = id => {
    const expense = expenses.find( data => data.id === id );
    const { charge, amount } = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id);
  }

  const clearItems = () => {
    setExpenses([]);
  }

  return (
    <main className="main-container">
      {alert.show ? <Alerts type={alert.type} text={alert.text}/>:null}
      <h1>예산 계산기</h1>
      <div style={{width: '100%', backgroundColor:'white', padding:'1rem' }}>
        {/* expense list */}
        <ExpenseForm 
          charge={charge} 
          handleCharge={handleCharge} 
          amount={amount} 
          handleAmount={handleAmount} 
          handleSubmit={handleSubmit}
          edit={edit}
        />
      </div>
      <div style={{width: '100%', backgroundColor:'white', padding:'1rem' }}>
        {/* expense list */}
        <ExpenseList 
          initialExpenses={expenses} 
          handleDelete={handleDelete} 
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </div>
      <div style={{display:'flex', justifyContent:'end', marginTop:'1rem'}}>
        <p style={{fontSize:'2rem'}}>
          총 지출: 
          <span>
            {expenses.reduce((total,expense)=>{
              return total + expense.amount
            },0)}원
            </span>
        </p>
      </div>
    </main>
  )
}

// import { Component } from "react";
// import "./App.css"
// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       expenses: [
//         {id:1,charge:'렌트비',amount:1600},
//         {id:2,charge:'교통비',amount:400},
//         {id:3,charge:'식비',amount:1200},
//       ],
//       name: 'Jiyong'
//     }
//   }

//   handleDelete = (id) => {
//     const newExpenses = this.state.expenses.filter(data => data.id !== id)
//     console.log(newExpenses);
//     this.setState({expenses: newExpenses}); 
//   }

//   setName = (name) => {
//     this.setState({name: name})
//   }

//   render () {
//     return (
//       <main className="main-container">
//         <h1>예산 계산기</h1>
//         <div style={{width: '100%', backgroundColor:'white', padding:'1rem' }}>
//           {/* expense list */}
//           <ExpenseForm name={this.state.name} setName={this.setName}></ExpenseForm>
//         </div>

//         <div style={{width: '100%', backgroundColor:'white', padding:'1rem' }}>
//           {/* expense list */}
//           <ExpenseList initialExpenses={this.state.expenses} handleDelete={this.handleDelete}></ExpenseList>
//         </div>
//         <div style={{display:'flex', justifyContent:'end', marginTop:'1rem'}}>
//           <p style={{fontSize:'2rem'}}>
//             총 지출: 
//             <span>원</span>
//           </p>
//         </div>
//       </main>
//     )
//   }
// }

// export default App;


