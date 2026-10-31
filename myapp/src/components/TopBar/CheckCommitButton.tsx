import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles/topBar.styles';
export default function CheckCommitButton({ onCheckCommits }: { onCheckCommits: () => void }) {
  return (
    <TouchableOpacity style={styles.topBarButton} onPress={onCheckCommits}>
      <Text style={styles.topBarButtonText}>↻</Text>
    </TouchableOpacity>
  );
}