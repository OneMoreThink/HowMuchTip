import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { CalculatorDisplay } from '../components/CalculatorDisplay';
import { NumberPad } from '../components/NumberPad';
import { TipSelector } from '../components/TipSelector';
import { ResultSummary } from '../components/ResultSummary';
import { useTipCalculator } from '../hooks/useTipCalculator';

export const TipCalculatorScreen: React.FC = () => {
  const {
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
  } = useTipCalculator();

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100">
      <View className="flex-1 p-4">
        <CalculatorDisplay currentInput={currentInput} />
        
        <NumberPad
          onDigit={addDigit}
          onDelete={deleteDigit}
          onClear={clear}
          onAdd={addItem}
        />
        
        <TipSelector
          selectedTip={selectedTip}
          onTipChange={setSelectedTip}
        />
        
        <ResultSummary
          subtotal={calculations.subtotal}
          tipAmount={calculations.tipAmount}
          total={calculations.total}
          selectedTip={selectedTip}
          items={items}
          onResetItems={resetItems}
        />
      </View>
    </SafeAreaView>
  );
};