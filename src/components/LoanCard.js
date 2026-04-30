import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function LoanCard({ name, status, amount, nextPayment }) {
  return (
    <View style={styles.loanCard}>
      <View style={styles.loanCardHeader}>
        <Text style={styles.loanName}>{name}</Text>
        <Text style={styles.loanStatus}>{status}</Text>
      </View>
      <View style={styles.loanCardBody}>
        <View>
          <Text style={styles.loanLabel}>Amount</Text>
          <Text style={styles.loanValue}>{amount}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.loanLabel}>Next Payment</Text>
          <Text style={styles.loanDate}>{nextPayment}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loanCard: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  loanCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
    paddingBottom: 12,
  },
  loanName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textTitle,
  },
  loanStatus: {
    color: COLORS.accent,
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: COLORS.accentLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  loanCardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loanLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  loanValue: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  loanDate: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
});
