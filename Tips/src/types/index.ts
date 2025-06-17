
// 팁 계산기가 가질 수 있는 State 정의 
export interface TipCalculatorState {
  currentInput: string;
  items: number[];
  selectedTip: number;
}

// 팁 계산기가 할 수 있는 Action 정의 
export interface TipCalculatorActions {
  addDigit: (digit: string) => void;
  deleteDigit: () => void;
  clear: () => void;
  addItem: () => void;
  setSelectedTip: (tip: number) => void;
  resetItems: () => void;
}

// 팁 계산기가 반환할 수 있는 Result 정의 
export interface CalculationResult {
  subtotal: number;
  tipAmount: number;
  total: number;
}

/// 컴포넌트 별 Props 정의 (상태 + 동작)

export interface NumberButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export interface CalculatorDisplayProps {
  currentInput: string;
}

export interface NumberPadProps {
  onDigit: (digit: string) => void;
  onDelete: () => void;
  onClear: () => void;
  onAdd: () => void;
}

export interface TipSelectorProps {
  selectedTip: number;
  onTipChange: (tip: number) => void;
}

export interface ResultSummaryProps {
  subtotal: number;
  tipAmount: number;
  total: number;
  selectedTip: number;
  items: number[];
  onResetItems: () => void;
}