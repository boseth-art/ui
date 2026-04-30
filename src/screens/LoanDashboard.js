import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { COLORS } from '../theme/colors';
import LoanCard from '../components/LoanCard';
import SummaryCard from '../components/SummaryCard';
import ActionButton from '../components/ActionButton';

const MOCK_LOANS = [
  { id: '1', name: 'Personal Loan', amount: '$5,000', nextPayment: 'Oct 15', status: 'Active' },
  { id: '2', name: 'Car Auto Loan', amount: '$12,400', nextPayment: 'Oct 22', status: 'Active' },
];

export default function LoanDashboard({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Summary Section */}
      <SummaryCard 
        title="Total Active Loans" 
        totalAmount="$17,400.00" 
        upcomingAmount="$450" 
      />

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionRow}>
        <ActionButton 
          iconName="plus" 
          label="New Loan" 
          color={COLORS.link} 
          bgColor={COLORS.primaryExtraLight} 
          onPress={() => navigation.navigate('NewLoan')} 
        />
        <ActionButton 
          iconName="git-merge" 
          label="Compare" 
          color={COLORS.accent} 
          bgColor={COLORS.accentLight} 
          onPress={() => navigation.navigate('CompareCosts')} 
        />
        <ActionButton 
          iconName="pie-chart" 
          label="Report" 
          color={COLORS.warning} 
          bgColor={COLORS.warningLight} 
          onPress={() => navigation.navigate('GenerateReport')} 
        />
      </View>

      {/* Current Loans */}
      <View style={styles.listHeader}>
        <Text style={styles.sectionTitle}>Active Loans</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={MOCK_LOANS}
        renderItem={({ item }) => (
          <LoanCard 
            name={item.name} 
            status={item.status} 
            amount={item.amount} 
            nextPayment={item.nextPayment} 
          />
        )}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllText: {
    color: COLORS.link,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 16,
  },
});
