import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function SummaryCard({ title, totalAmount, upcomingAmount }) {
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>{title}</Text>
      <Text style={styles.summaryAmount}>{totalAmount}</Text>
      <View style={styles.summaryRow}>
        <Text style={styles.summarySubtext}>
          Upcoming this month: <Text style={styles.highlight}>{upcomingAmount}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: COLORS.primary,
    padding: 24,
    borderRadius: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },
  summaryTitle: {
    color: COLORS.textLight,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  summaryAmount: {
    color: COLORS.textWhite,
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  summarySubtext: {
    color: COLORS.primaryExtraLight,
    fontSize: 13,
  },
  highlight: {
    color: COLORS.accent,
    fontWeight: '700',
  },
});
