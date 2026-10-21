import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ClimateAlert({ temperature, humidity }) {
  const isHighHeat = temperature > 30;

  return (
    <View style={[styles.container, isHighHeat && styles.alertContainer]}>
      <Text style={styles.title}>🌡️ Alerta Climático para sua Pele</Text>
      <Text style={styles.info}>
        Temperatura atual: {temperature}°C | Umidade: {humidity}%
      </Text>
      
      {isHighHeat ? (
        <Text style={styles.warningText}>
          ⚠️ Calor intenso detectado! O suor acumulado pode irritar sua pele. Dica: Prefira hoje a nossa linha de pijamas de modal com alta respirabilidade.
        </Text>
      ) : (
        <Text style={styles.normalText}>
          ✅ Clima estável hoje. Mantenha sua rotina de hidratação regular!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
  },
  alertContainer: {
    backgroundColor: '#FFF3E0',
    borderLeftColor: '#FF9800',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 13,
    color: '#D84315',
    fontWeight: '500',
  },
  normalText: {
    fontSize: 13,
    color: '#2E7D32',
  },
});