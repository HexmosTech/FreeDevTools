import { KonvaShape } from "./SVGManager";

export interface HistoryState {
  svgShapes: KonvaShape[];
  backgroundShapes: KonvaShape[];
  timestamp: number;
  action: string;
}

export class HistoryManager {
  private history: HistoryState[] = [];
  private currentIndex: number = -1;
  private maxHistorySize: number = 50;

  constructor(maxHistorySize: number = 50) {
    this.maxHistorySize = maxHistorySize;
  }

  // Add state to history
  addState(
    svgShapes: KonvaShape[],
    backgroundShapes: KonvaShape[],
    action: string = "Unknown"
  ): void {
    const newState: HistoryState = {
      svgShapes: this.deepCloneShapes(svgShapes),
      backgroundShapes: this.deepCloneShapes(backgroundShapes),
      timestamp: Date.now(),
      action,
    };

    // Remove any states after current index (when branching from middle)
    this.history = this.history.slice(0, this.currentIndex + 1);

    // Add new state
    this.history.push(newState);
    this.currentIndex = this.history.length - 1;

    // Limit history size
    if (this.history.length > this.maxHistorySize) {
      this.history.shift();
      this.currentIndex--;
    }
  }

  // Undo to previous state
  undo(): { svgShapes: KonvaShape[]; backgroundShapes: KonvaShape[] } | null {
    if (this.canUndo()) {
      this.currentIndex--;
      const state = this.history[this.currentIndex];
      return {
        svgShapes: this.deepCloneShapes(state.svgShapes),
        backgroundShapes: this.deepCloneShapes(state.backgroundShapes),
      };
    }
    return null;
  }

  // Redo to next state
  redo(): { svgShapes: KonvaShape[]; backgroundShapes: KonvaShape[] } | null {
    if (this.canRedo()) {
      this.currentIndex++;
      const state = this.history[this.currentIndex];
      return {
        svgShapes: this.deepCloneShapes(state.svgShapes),
        backgroundShapes: this.deepCloneShapes(state.backgroundShapes),
      };
    }
    return null;
  }

  // Check if undo is possible
  canUndo(): boolean {
    return this.currentIndex > 0;
  }

  // Check if redo is possible
  canRedo(): boolean {
    return this.currentIndex < this.history.length - 1;
  }

  // Get current state
  getCurrentState(): HistoryState | null {
    if (this.currentIndex >= 0 && this.currentIndex < this.history.length) {
      return this.history[this.currentIndex];
    }
    return null;
  }

  // Get history length
  getHistoryLength(): number {
    return this.history.length;
  }

  // Get current index
  getCurrentIndex(): number {
    return this.currentIndex;
  }

  // Clear all history
  clearHistory(): void {
    this.history = [];
    this.currentIndex = -1;
  }

  // Get history info for debugging
  getHistoryInfo(): {
    length: number;
    currentIndex: number;
    actions: string[];
  } {
    return {
      length: this.history.length,
      currentIndex: this.currentIndex,
      actions: this.history.map((state) => state.action),
    };
  }

  // Jump to specific state
  jumpToState(
    index: number
  ): { svgShapes: KonvaShape[]; backgroundShapes: KonvaShape[] } | null {
    if (index >= 0 && index < this.history.length) {
      this.currentIndex = index;
      const state = this.history[index];
      return {
        svgShapes: this.deepCloneShapes(state.svgShapes),
        backgroundShapes: this.deepCloneShapes(state.backgroundShapes),
      };
    }
    return null;
  }

  // Get states in range
  getStatesInRange(startIndex: number, endIndex: number): HistoryState[] {
    return this.history.slice(startIndex, endIndex + 1);
  }

  // Find state by action
  findStateByAction(action: string): HistoryState | null {
    return this.history.find((state) => state.action === action) || null;
  }

  // Get states by time range
  getStatesByTimeRange(startTime: number, endTime: number): HistoryState[] {
    return this.history.filter(
      (state) => state.timestamp >= startTime && state.timestamp <= endTime
    );
  }

  // Deep clone shapes to avoid reference issues
  private deepCloneShapes(shapes: KonvaShape[]): KonvaShape[] {
    return shapes.map((shape) => ({
      ...shape,
      children: shape.children
        ? this.deepCloneShapes(shape.children)
        : undefined,
    }));
  }

  // Merge similar consecutive actions
  mergeSimilarActions(action: string, threshold: number = 1000): void {
    if (this.history.length < 2) return;

    const lastState = this.history[this.history.length - 1];
    const secondLastState = this.history[this.history.length - 2];

    // Check if actions are similar and within time threshold
    if (
      lastState.action === action &&
      secondLastState.action === action &&
      lastState.timestamp - secondLastState.timestamp < threshold
    ) {
      // Remove the last state and keep the second last
      this.history.pop();
      this.currentIndex--;
    }
  }

  // Compress history by removing similar states
  compressHistory(): void {
    if (this.history.length < 3) return;

    const compressed: HistoryState[] = [];
    let lastState: HistoryState | null = null;

    for (const state of this.history) {
      if (!lastState || !this.areStatesSimilar(lastState, state)) {
        compressed.push(state);
        lastState = state;
      }
    }

    this.history = compressed;
    this.currentIndex = this.history.length - 1;
  }

  // Check if two states are similar
  private areStatesSimilar(
    state1: HistoryState,
    state2: HistoryState
  ): boolean {
    // Simple comparison - can be enhanced
    return (
      state1.action === state2.action &&
      state1.svgShapes.length === state2.svgShapes.length &&
      state1.backgroundShapes.length === state2.backgroundShapes.length
    );
  }

  // Export history for debugging
  exportHistory(): string {
    return JSON.stringify(
      {
        history: this.history.map((state) => ({
          action: state.action,
          timestamp: state.timestamp,
          svgShapesCount: state.svgShapes.length,
          backgroundShapesCount: state.backgroundShapes.length,
        })),
        currentIndex: this.currentIndex,
        maxHistorySize: this.maxHistorySize,
      },
      null,
      2
    );
  }

  // Import history (for debugging/restoration)
  importHistory(historyData: string): boolean {
    try {
      const data = JSON.parse(historyData);
      // Note: This is a simplified import - in production you'd want more validation
      this.currentIndex = data.currentIndex || 0;
      this.maxHistorySize = data.maxHistorySize || 50;
      return true;
    } catch (error) {
      console.error("Failed to import history:", error);
      return false;
    }
  }

  // Get memory usage estimate
  getMemoryUsage(): number {
    const jsonString = JSON.stringify(this.history);
    return new Blob([jsonString]).size;
  }

  // Set max history size
  setMaxHistorySize(size: number): void {
    this.maxHistorySize = Math.max(1, size);

    // Trim history if needed
    while (this.history.length > this.maxHistorySize) {
      this.history.shift();
      this.currentIndex--;
    }
  }

  // Get max history size
  getMaxHistorySize(): number {
    return this.maxHistorySize;
  }
}
