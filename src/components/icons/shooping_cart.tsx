export type CartIconProps = {
  width: string,
  height: string
}

export function ShoppingCartIcon({ width, height }: CartIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.60005 5.00001H7.73338V3.30001H9.43338V2.16667H7.73338V0.466675H6.60005V2.16667H4.90005V3.30001H6.60005V5.00001ZM4.33338 10.1C3.71005 10.1 3.20571 10.61 3.20571 11.2333C3.20571 11.8567 3.71005 12.3667 4.33338 12.3667C4.95671 12.3667 5.46671 11.8567 5.46671 11.2333C5.46671 10.61 4.95671 10.1 4.33338 10.1ZM10 10.1C9.37671 10.1 8.87238 10.61 8.87238 11.2333C8.87238 11.8567 9.37671 12.3667 10 12.3667C10.6234 12.3667 11.1334 11.8567 11.1334 11.2333C11.1334 10.61 10.6234 10.1 10 10.1ZM4.42971 8.25834L4.44671 8.19034L4.95671 7.26668H9.17838C9.60338 7.26668 9.97738 7.03434 10.17 6.68301L12.3574 2.71068L11.3714 2.16667H11.3657L10.7424 3.30001L9.17838 6.13334H5.20038L5.12671 5.98034L3.85738 3.30001L3.31905 2.16667L2.78638 1.03334H0.93338V2.16667H2.06671L4.10671 6.46768L3.34171 7.85601C3.25105 8.01468 3.20005 8.20168 3.20005 8.40001C3.20005 9.02334 3.71005 9.53334 4.33338 9.53334H11.1334V8.40001H4.57138C4.49771 8.40001 4.42971 8.33768 4.42971 8.25834Z" fill="white" />
    </svg>

  )
}
