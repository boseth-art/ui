import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { COLORS } from '../theme/colors';
import SummaryCard from '../components/SummaryCard';

export default function MainDashboard({ navigation }) {
  // Navigation handlers
  const navToLoan = () => navigation.navigate('LoanDashboard');
  const navToSubscription = () => { /* Placeholder */ };
  const navToUtility = () => { /* Placeholder */ };
  const navToSaving = () => { /* Placeholder */ };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Overall Summary Section */}
      <SummaryCard 
        title="Total Financial Overview" 
        totalAmount="$12,450.00" 
        upcomingAmount="$1,200" 
      />

      {/* Main Modules */}
      <Text style={styles.sectionTitle}>Management Modules</Text>
      
      <View style={styles.modulesGrid}>
        
        <TouchableOpacity style={styles.moduleCard} onPress={navToLoan}>
          <View style={[styles.iconContainer, { backgroundColor: COLORS.primaryExtraLight }]}>
            <Icon name="briefcase" size={28} color={COLORS.link} />
          </View>
          <Text style={styles.moduleTitle}>Loan</Text>
          <Text style={styles.moduleDesc}>Track active loans</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moduleCard} onPress={navToSubscription}>
          <View style={[styles.iconContainer, { backgroundColor: COLORS.accentLight }]}>
            <Icon name="repeat" size={28} color={COLORS.accent} />
          </View>
          <Text style={styles.moduleTitle}>Subscription</Text>
          <Text style={styles.moduleDesc}>Monitor subscriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moduleCard} onPress={navToUtility}>
          <View style={[styles.iconContainer, { backgroundColor: COLORS.warningLight }]}>
            <Icon name="zap" size={28} color={COLORS.warning} />
          </View>
          <Text style={styles.moduleTitle}>Utility</Text>
          <Text style={styles.moduleDesc}>Manage utility bills</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moduleCard} onPress={navToSaving}>
          <View style={[styles.iconContainer, { backgroundColor: '#E8EAF6' }]}>
            <Icon name="target" size={28} color="#3F51B5" />
          </View>
          <Text style={styles.moduleTitle}>Saving</Text>
          <Text style={styles.moduleDesc}>Track savings goals</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textTitle,
    marginBottom: 16,
    marginTop: 8,
  },
  modulesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  moduleCard: {
    width: '48%',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  moduleTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  moduleDesc: {
    fontSize: 12,
    color: COLORS.textMuted,
    lineHeight: 16,
  },
});
