declare module 'vanilla-tilt' {
  interface TiltOptions {
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: 'x' | 'y' | null;
    reset?: boolean;
    easing?: string;
    glare?: boolean;
    'max-glare'?: number;
    'glare-prerender'?: boolean;
    'mouse-event-element'?: string | null;
    gyroscope?: boolean;
    gyroscopeMinAngleX?: number;
    gyroscopeMaxAngleX?: number;
    gyroscopeMinAngleY?: number;
    gyroscopeMaxAngleY?: number;
    [key: string]: any;
  }
  interface VanillaTiltStatic {
    init(elements: Element | Element[] | NodeListOf<Element>, options?: TiltOptions): void;
  }
  const VanillaTilt: VanillaTiltStatic;
  export default VanillaTilt;
}
