declare module 'decimal-adjust' {
  export default function(
    type: 'round' | 'floor' | 'ceil', 
    value: Number, 
    exp: Integer
  ): number;
}
