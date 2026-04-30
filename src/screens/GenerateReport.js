import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../theme/colors';

export default function GenerateReport() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCard}>
        <Icon name="file-text" size={48} color={COLORS.textWhite} style={{ marginBottom: 16 }} />
        <Text style={styles.headerTitle}>Loan Summary Report</Text>
        <Text style={styles.headerSub}>Export your complete loan history and upcoming payment schedule.</Text>
      </View>

      <View style={styles.optionsContainer}>
        <Text style={styles.sectionTitle}>Report Format</Text>
        
        <TouchableOpacity style={[styles.optionRow, styles.optionSelected]}>
          <View style={styles.optionIconContainer}>
            <Icon name="file" size={20} color={COLORS.link} />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitleText}>PDF Document</Text>
            <Text style={styles.optionSubText}>Best for sharing and printing</Text>
          </View>
          <Icon name="check-circle" size={24} color={COLORS.link} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <View style={[styles.optionIconContainer, { backgroundColor: COLORS.accentLight }]}>
            <Icon name="grid" size={20} color={COLORS.accent} />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitleText}>CSV Excel</Text>
            <Text style={styles.optionSubText}>Best for custom calculations</Text>
          </View>
          <View style={styles.radioEmpty} />
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <Text style={styles.sectionTitle}>Data to Include</Text>
        
        <View style={styles.checkboxRow}>
          <Icon name="check-square" size={20} color={COLORS.link} style={{ marginRight: 12 }} />
          <Text style={styles.checkboxText}>Active Loans Summary</Text>
        </View>
        <View style={styles.checkboxRow}>
          <Icon name="check-square" size={20} color={COLORS.link} style={{ marginRight: 12 }} />
          <Text style={styles.checkboxText}>Payment History</Text>
        </View>
        <View style={styles.checkboxRow}>
          <Icon name="square" size={20} color="#CBD5E0" style={{ marginRight: 12 }} />
          <Text style={styles.checkboxText}>Closed Loans</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.downloadButton}>
        <Icon name="download" size={20} color={COLORS.textWhite} style={{ marginRight: 8 }} />
        <Text style={styles.downloadText}>Generate & Download</Text>
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
  headerCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textWhite,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSub: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
    lineHeight: 20,
  },
  optionsContainer: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textTitle,
    marginBottom: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionSelected: {
    borderColor: COLORS.link,
    backgroundColor: '#F0F8FF', // Specific light blue selection color
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: COLORS.primaryExtraLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitleText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  optionSubText: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  radioEmpty: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CBD5E0',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxText: {
    fontSize: 15,
    color: COLORS.textPrimary,
  },
  downloadButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  downloadText: {
    color: COLORS.textWhite,
    fontSize: 16,
    fontWeight: '700',
  },
});
