import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { COLORS } from '../theme/colors';

export default function AdminDashboard({ navigation }) {
  // Navigation handlers (Placeholders for now)
  const navToUsers = () => { /* Placeholder */ };
  const navToSystemLogs = () => { /* Placeholder */ };
  const navToSettings = () => { /* Placeholder */ };
  const navToAnalytics = () => { /* Placeholder */ };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Admin Summary Section */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>System Overview</Text>
        <Text style={styles.summaryAmount}>All Systems Operational</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summarySubtext}>
            Active Users: <Text style={styles.highlight}>1,248</Text>
          </Text>
        </View>
      </View>

      {/* Quick Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Revenue</Text>
          <Text style={styles.statValue}>$45.2k</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>New Signups</Text>
          <Text style={styles.statValue}>+84</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Support Tickets</Text>
          <Text style={[styles.statValue, { color: COLORS.warning }]}>12</Text>
        </View>
      </View>

      {/* Admin Modules */}
      <Text style={styles.sectionTitle}>Admin Controls</Text>

      <View style={styles.modulesGrid}>
        <TouchableOpacity style={styles.moduleCard} onPress={navToUsers}>
          <View style={[styles.iconContainer, { backgroundColor: COLORS.primaryExtraLight }]}>
            <Icon name="users" size={28} color={COLORS.link} />
          </View>
          <Text style={styles.moduleTitle}>User Management</Text>
          <Text style={styles.moduleDesc}>View and edit user accounts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moduleCard} onPress={navToAnalytics}>
          <View style={[styles.iconContainer, { backgroundColor: COLORS.accentLight }]}>
            <Icon name="bar-chart-2" size={28} color={COLORS.accent} />
          </View>
          <Text style={styles.moduleTitle}>Analytics</Text>
          <Text style={styles.moduleDesc}>System performance and metrics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moduleCard} onPress={navToSystemLogs}>
          <View style={[styles.iconContainer, { backgroundColor: COLORS.warningLight }]}>
            <Icon name="file-text" size={28} color={COLORS.warning} />
          </View>
          <Text style={styles.moduleTitle}>System Logs</Text>
          <Text style={styles.moduleDesc}>Review recent system activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moduleCard} onPress={navToSettings}>
          <View style={[styles.iconContainer, { backgroundColor: '#E8EAF6' }]}>
            <Icon name="settings" size={28} color="#3F51B5" />
          </View>
          <Text style={styles.moduleTitle}>Global Settings</Text>
          <Text style={styles.moduleDesc}>Configure platform parameters</Text>
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
  summaryContainer: {
    backgroundColor: COLORS.primaryLight,
    padding: 24,
    borderRadius: 20,
    marginBottom: 20,
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
    fontSize: 24,
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
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: COLORS.cardBackground,
    width: '31%',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.textMuted,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textTitle,
    marginBottom: 16,
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
