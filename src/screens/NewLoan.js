import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS } from '../theme/colors';

export default function NewLoan({ navigation }) {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');

  const calculatePayment = () => {
    if (!amount || !months) return '$0.00';
    const p = parseFloat(amount);
    const m = parseInt(months);
    const r = rate ? parseFloat(rate) / 100 / 12 : 0;
    
    let payment = 0;
    if (r === 0) {
      payment = p / m;
    } else {
      payment = (p * r * Math.pow(1 + r, m)) / (Math.pow(1 + r, m) - 1);
    }
    
    return isNaN(payment) || !isFinite(payment) ? '$0.00' : `$${payment.toFixed(2)}`;
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.previewCard}>
          <Text style={styles.previewLabel}>Estimated Monthly Payment</Text>
          <Text style={styles.previewValue}>{calculatePayment()}</Text>
          <Text style={styles.previewSubtext}>Based on details provided</Text>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Loan Details</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Loan Name</Text>
            <TextInput 
              style={styles.input} 
              placeholder="e.g. Car Auto Loan" 
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Principal Amount ($)</Text>
            <TextInput 
              style={styles.input} 
              placeholder="0.00" 
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Interest Rate (%)</Text>
              <TextInput 
                style={styles.input} 
                placeholder="5.0" 
                keyboardType="numeric"
                value={rate}
                onChangeText={setRate}
                placeholderTextColor={COLORS.textLight}
              />
            </View>
            <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
              <Text style={styles.label}>Duration (Months)</Text>
              <TextInput 
                style={styles.input} 
                placeholder="48" 
                keyboardType="numeric"
                value={months}
                onChangeText={setMonths}
                placeholderTextColor={COLORS.textLight}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.saveButtonText}>Add New Loan</Text>
        </TouchableOpacity>
        
        <View style={{ height: 40 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  previewCard: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  previewLabel: {
    color: '#94A3B8', // Keeping this specific gray for the dark card
    fontSize: 14,
    marginBottom: 8,
  },
  previewValue: {
    color: COLORS.accent,
    fontSize: 42,
    fontWeight: '700',
    marginBottom: 8,
  },
  previewSubtext: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
  formSection: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textTitle,
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  row: {
    flexDirection: 'row',
  },
  saveButton: {
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
  saveButtonText: {
    color: COLORS.textWhite,
    fontSize: 16,
    fontWeight: '700',
  },
});
