import {useState} from 'react';
export default function Todo() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('+');
    const handleCalculate = () => {
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);
        