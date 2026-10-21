import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ClimateAlert from '../components/ClimateAlert';

export default function HomeScreen() {
  const [climateData] = useState({ temperature: 32, humidity: 35 });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Olá, Bem-vindo(a) ao CareSkin</Text>
      <Text style={styles.subtitle}>Seu assistente diário contra a dermatite.</Text>

      <ClimateAlert 
        temperature={climateData.temperature} 
        humidity={climateData.humidity} 
      />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => alert('Abrir Diário de Sintomas')}>
          <Text style={styles.buttonText}>📝 Registrar Crise / Diário de Hoje</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => alert('Ver Coleção de Roupas')}>
          <Text style={styles.secondaryButtonText}>👕 Ver Peças Recomendadas para o Calor</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  subtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 20,
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#27AE60',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#27AE60',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#27AE60',
    fontSize: 16,
    fontWeight: '600',
  },
});
