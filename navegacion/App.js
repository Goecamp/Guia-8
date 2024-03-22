import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; // Importa el componente de pantalla HomeScreen
import DetailsScreen from './DetailsScreen'; // Importa el componente de pantalla DetailsScreen

// Crea la navegación de la barra de pestañas
const Tab = createBottomTabNavigator();

// Función principal de la aplicación
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Perfil" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
