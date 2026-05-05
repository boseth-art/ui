import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import MainDashboard from '../screens/MainDashboard';
import LoanDashboard from '../screens/LoanDashboard';
import NewLoan from '../screens/NewLoan';
import CompareCosts from '../screens/CompareCosts';
import GenerateReport from '../screens/GenerateReport';
import AdminDashboard from '../screens/AdminDashboard';

import { COLORS } from '../theme/colors';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainDashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: COLORS.textWhite,
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
        cardStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen 
        name="MainDashboard" 
        component={MainDashboard} 
        options={{ title: 'Home' }} 
      />
      <Stack.Screen 
        name="LoanDashboard" 
        component={LoanDashboard} 
        options={{ title: 'Loan Manager' }} 
      />
      <Stack.Screen 
        name="NewLoan" 
        component={NewLoan} 
        options={{ title: 'Add New Loan' }} 
      />
      <Stack.Screen 
        name="CompareCosts" 
        component={CompareCosts} 
        options={{ title: 'Compare Loans' }} 
      />
      <Stack.Screen 
        name="GenerateReport" 
        component={GenerateReport} 
        options={{ title: 'Loan Report' }} 
      />
      <Stack.Screen 
        name="AdminDashboard" 
        component={AdminDashboard} 
        options={{ title: 'Admin Dashboard' }} 
      />
    </Stack.Navigator>
  );
}
