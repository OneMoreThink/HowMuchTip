import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { CalculatorDisplay } from '../components/CalculatorDisplay';
import { NumberPad } from '../components/NumberPad';
import { ResultSummary } from '../components/ResultSummary';
import { TipSelector } from '../components/TipSelector';
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
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 bg-slate-50">
        {/* Content */}
        <View className="flex-1 justify-center p-4">
          <View className="space-y-4">
            {/* Calculator Display */}
            <View className="h-[80px] mb-4">
              <CalculatorDisplay currentInput={currentInput} />
            </View>
            
            {/* NumberPad */}
            <View className="h-[360px] mb-4">
              <NumberPad
                onDigit={addDigit}
                onDelete={deleteDigit}
                onClear={clear}
                onAdd={addItem}
              />
            </View>
            
            {/* TipSelector */}
            <View className="h-[70px] mb-4">
              <TipSelector
                selectedTip={selectedTip}
                onTipChange={setSelectedTip}
              />
            </View>
            
            {/* ResultSummary */}
            <View className="h-[180px]">
              <ResultSummary
                subtotal={calculations.subtotal}
                tipAmount={calculations.tipAmount}
                total={calculations.total}
                selectedTip={selectedTip}
                items={items}
                onResetItems={resetItems}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};