export {};

declare global {
  interface Window {
    particleImageDisplay: (id: string) => void;
  }
}