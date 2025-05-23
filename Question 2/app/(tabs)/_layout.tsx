import React from "react";
import { Tabs } from "expo-router";
import { Home, Security, User } from "iconsax-react-native";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} />,
        }} />
      <Tabs.Screen
        name="policies"
        options={{
          title: 'Policies',
          tabBarIcon: ({ color }) => <Security color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
