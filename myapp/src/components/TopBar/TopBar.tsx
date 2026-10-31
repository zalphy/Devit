import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions} from 'react-native';
import { FilmInventory, FILM_META, FILM_TYPES, RewardFilmType } from '../../types';
import SettingsButton from './SettingsButton';
import { styles } from '../../styles/topBar.styles';

const DISPLAY_FILMS = FILM_TYPES.filter(type => ['mono', 'vivid', 'retro'].includes(type));

export default function TopBar({ filmInventory, handleCheckCommits, handleGoSettings }: { filmInventory: FilmInventory, handleCheckCommits: () => void, handleGoSettings: () => void }) {
  const { width: screenWidth } = useWindowDimensions();
  
  return(
    <View style={[styles.topBar, { left: screenWidth * 0.42 }]}> 
      {DISPLAY_FILMS.map((type) => {
        const meta = FILM_META[type];
        
        return (
            <View key={type} style={styles.filmBadge}>
              <Image source={meta.image} style={styles.filmBadgeImage} />
              <Text style={styles.filmBadgeCount}>{filmInventory[type]}</Text>
            </View>
        );
      })}
      <TouchableOpacity style={styles.topBarButton} onPress={handleCheckCommits}>
        <Text style={styles.topBarButtonText}>↻</Text>
      </TouchableOpacity>
      {/*<TouchableOpacity style={styles.topBarButton} onPress={onGoSettings}>
        <Text style={styles.topBarButtonText}>⚙</Text>
      </TouchableOpacity>*/}
      <SettingsButton onGoSettings={handleGoSettings} />
    </View>
  );
}