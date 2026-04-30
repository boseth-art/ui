import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../theme/colors';

export default function ActionButton({ iconName, label, color, bgColor, onPress }) {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <View style={[styles.actionIcon, { backgroundColor: bgColor }]}>
        <Icon name={iconName} size={24} color={color} />
      </View>
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  actionText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
});
