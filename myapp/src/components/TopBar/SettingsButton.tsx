import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles/topBar.styles';
export default function SettingsButton({ onGoSettings }: { onGoSettings: () => void }) {
    return (
        <TouchableOpacity style={styles.topBarButton} onPress={onGoSettings}>
            <Text style={styles.topBarButtonText}>⚙</Text>
        </TouchableOpacity>
    );
}
