import { Platform } from 'react-native';
export const scale = Platform.OS === 'android' ? 0.9 : 1;
export const compactScale = Platform.OS === 'android' ? 0.84 : 1;
export const edgeInset = Platform.OS === 'android' ? 6 : 0;
export const s = (value: number) => Math.round(value * scale);
export const c = (value: number) => Math.round(value * compactScale);