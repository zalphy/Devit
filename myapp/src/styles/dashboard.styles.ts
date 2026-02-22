import { Platform, StyleSheet } from 'react-native';
const scale = Platform.OS === 'android' ? 0.9 : 1;
const compactScale = Platform.OS === 'android' ? 0.84 : 1;
const s = (value: number) => Math.round(value * scale);
const c = (value: number) => Math.round(value * compactScale);
export const styles = StyleSheet.create({
  /* ── Root ── */
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
  /* Dashboard(共通スタイル定義) */
  dashboard: {
    flex: 1,
    alignSelf: 'stretch',
    paddingLeft: s(24),
    paddingTop: s(80),
    paddingRight: Platform.OS === 'android' ? s(8) : 0,
    justifyContent: 'flex-start',
  },
  systemText: {
    color: '#00ff00',
    fontFamily: 'Courier',
    fontSize: s(14),
    marginBottom: s(20),
    letterSpacing: 1,
  },
  instruments: {
    gap: Platform.OS === 'android' ? c(12) : s(15),
  },
  label: {
    color: '#666',
    fontFamily: 'Courier',
    fontSize: Platform.OS === 'android' ? c(12) : s(12),
    marginBottom: Platform.OS === 'android' ? c(4) : s(4),
  },
});
