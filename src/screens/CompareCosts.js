import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../theme/colors';

export default function CompareCosts() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerText}>Compare Loan Options</Text>
      <Text style={styles.subText}>See which loan saves you more money over time.</Text>

      <View style={styles.comparisonContainer}>
        {/* Option A */}
        <View style={[styles.card, styles.cardA]}>
          <View style={styles.cardHeader}>
            <Text style={styles.optionTitle}>Option A</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Selected</Text>
            </View>
          </View>
          
          <Text style={styles.bankName}>Bank of Finance</Text>
          <Text style={styles.amount}>$15,000</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Interest Rate</Text>
            <Text style={styles.detailValue}>4.5%</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Duration</Text>
            <Text style={styles.detailValue}>48 mo</Text>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.totalLabel}>Total Payment</Text>
          <Text style={styles.totalValue}>$16,420.80</Text>
        </View>

        {/* VS Badge */}
        <View style={styles.vsContainer}>
          <Text style={styles.vsText}>VS</Text>
        </View>

        {/* Option B */}
        <View style={[styles.card, styles.cardB]}>
          <View style={styles.cardHeader}>
            <Text style={styles.optionTitle}>Option B</Text>
          </View>
          
          <Text style={styles.bankName}>Credit Union</Text>
          <Text style={styles.amount}>$15,000</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Interest Rate</Text>
            <Text style={styles.detailValue}>5.2%</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Duration</Text>
            <Text style={styles.detailValue}>60 mo</Text>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.totalLabel}>Total Payment</Text>
          <Text style={[styles.totalValue, { color: COLORS.error }]}>$17,064.00</Text>
        </View>
      </View>

      <View style={styles.insightBox}>
        <Icon name="info" size={24} color={COLORS.link} style={{ marginRight: 12 }} />
        <Text style={styles.insightText}>
          <Text style={{ fontWeight: '700' }}>Option A</Text> is cheaper by <Text style={{ color: COLORS.accent, fontWeight: '700' }}>$643.20</Text> over the life of the loan.
        </Text>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Choose Option A</Text>
      </TouchableOpacity>
      
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textTitle,
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 24,
  },
  comparisonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 24,
  },
  card: {
    width: '48%',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardA: {
    borderColor: COLORS.link,
    borderWidth: 2,
  },
  cardB: {
    borderColor: COLORS.border,
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  badge: {
    backgroundColor: COLORS.primaryExtraLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: COLORS.link,
    fontSize: 10,
    fontWeight: '700',
  },
  bankName: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  amount: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textTitle,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  detailValue: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.accent,
  },
  vsContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateX: -16 }, { translateY: -16 }],
    backgroundColor: COLORS.textTitle,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderWidth: 3,
    borderColor: COLORS.background,
  },
  vsText: {
    color: COLORS.textWhite,
    fontSize: 12,
    fontWeight: '700',
  },
  insightBox: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryExtraLight,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  insightText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.primary,
    lineHeight: 20,
  },
  actionButton: {
    backgroundColor: COLORS.link,
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: COLORS.link,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButtonText: {
    color: COLORS.textWhite,
    fontSize: 16,
    fontWeight: '700',
  },
});
