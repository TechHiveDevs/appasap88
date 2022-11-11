
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStatusBar from "../Components/MyStatusBar";
import SideDrawer from "../Components/Drawer/Side.drawer";
import TabNavigator from "./Tab.navigator";

// ==============================================================


import ListEvaluationanswersScreen from "../Entities/Evaluationanswers/List.evaluationanswers.screen";
import ShowEvaluationanswersScreen from "../Entities/Evaluationanswers/Show.evaluationanswers.screen";
import ListEvaluationquestionsScreen from "../Entities/Evaluationquestions/List.evaluationquestions.screen";
import ShowEvaluationquestionsScreen from "../Entities/Evaluationquestions/Show.evaluationquestions.screen";
import ListEvaluationformsScreen from "../Entities/Evaluationforms/List.evaluationforms.screen";
import ShowEvaluationformsScreen from "../Entities/Evaluationforms/Show.evaluationforms.screen";
import ListBlankevaluationformScreen from "../Entities/Blankevaluationform/List.blankevaluationform.screen";
import ShowBlankevaluationformScreen from "../Entities/Blankevaluationform/Show.blankevaluationform.screen";
import ListTrainingqualificationsScreen from "../Entities/Trainingqualifications/List.trainingqualifications.screen";
import ShowTrainingqualificationsScreen from "../Entities/Trainingqualifications/Show.trainingqualifications.screen";
import ListTrainersScreen from "../Entities/Trainers/List.trainers.screen";
import ShowTrainersScreen from "../Entities/Trainers/Show.trainers.screen";
import ListTrainingcoursesScreen from "../Entities/Trainingcourses/List.trainingcourses.screen";
import ShowTrainingcoursesScreen from "../Entities/Trainingcourses/Show.trainingcourses.screen";


// ==============================================================

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// ==============================================================

const stackrops = {
  initialRouteName: "Tabs",
};

const screenOptions = {
  headerShown: true,
  header: (props: any) => <MyStatusBar {...props} />,
};

// ==============================================================

const StackTabNavigator = () => {
  return (
    <Stack.Navigator {...stackrops}>
      <Stack.Screen
        name="HomeTabNavigator"
        component={TabNavigator}
        options={screenOptions}
      />
      
        <Stack.Screen
            name="ListEvaluationanswersScreen"
            component={ListEvaluationanswersScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowEvaluationanswersScreen"
          component={ShowEvaluationanswersScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListEvaluationquestionsScreen"
            component={ListEvaluationquestionsScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowEvaluationquestionsScreen"
          component={ShowEvaluationquestionsScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListEvaluationformsScreen"
            component={ListEvaluationformsScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowEvaluationformsScreen"
          component={ShowEvaluationformsScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListBlankevaluationformScreen"
            component={ListBlankevaluationformScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowBlankevaluationformScreen"
          component={ShowBlankevaluationformScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListTrainingqualificationsScreen"
            component={ListTrainingqualificationsScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowTrainingqualificationsScreen"
          component={ShowTrainingqualificationsScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListTrainersScreen"
            component={ListTrainersScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowTrainersScreen"
          component={ShowTrainersScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListTrainingcoursesScreen"
            component={ListTrainingcoursesScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowTrainingcoursesScreen"
          component={ShowTrainingcoursesScreen}
          options={screenOptions}
        />
        
    </Stack.Navigator>
  );
};

// ==============================================================

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStackTabNavigator"
      // @ts-ignore
      drawerStyle={{ width: wp(70) }}
      edgeWidth={15}
      screenOptions={{ swipeEnabled: true, headerShown: false }}
      drawerPosition="right"
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen
        name="HomeStackTabNavigator"
        component={StackTabNavigator}
      />
    </Drawer.Navigator>
  );
}
