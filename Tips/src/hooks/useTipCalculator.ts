import { useState, useMemo } from 'react';
import { TipCalculatorState, TipCalculatorActions, CalculationResult } from '../types';

export const useTipCalculator = (): TipCalculatorState & TipCalculatorActions & { calculations: CalculationResult } => {
  const [currentInput, setCurrentInput] = useState('');
  const [items, setItems] = useState<number[]>([]);
  const [selectedTip, setSelectedTip] = useState(20);

  const addDigit = (digit: string) => {
    if (digit === '.' && currentInput.includes('.')) return;
    setCurrentInput(currentInput + digit);
  };

  const deleteDigit = () => {
    setCurrentInput(currentInput.slice(0, -1));
  };

  const clear = () => {
    setCurrentInput('');
  };

  const addItem = () => {
    if (currentInput && parseFloat(currentInput) > 0) {
      setItems([...items, parseFloat(currentInput)]);
      setCurrentInput('');
    }
  };

  const resetItems = () => {
    setItems([]);
  };

  const calculations = useMemo((): CalculationResult => {
    const subtotal = items.reduce((sum, item) => sum + item, 0);
    const tipAmount = subtotal * (selectedTip / 100);
    const total = subtotal + tipAmount;

    return {
      subtotal,
      tipAmount,
      total
    };
  }, [items, selectedTip]);

  return {
    currentInput,
    items,
    selectedTip,
    addDigit,
    deleteDigit,
    clear,
    addItem,
    setSelectedTip,
    resetItems,
    calculations
  };
};