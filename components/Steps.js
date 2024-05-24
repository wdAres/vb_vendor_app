import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const stepsOrder = ['pending', 'processing', 'shipped', 'delivered'];
const statusColors = {
  active: 'green',
  inactive: 'grey',
};

const Steps = ({ currentStep }) => {
  const currentStepIndex = stepsOrder.indexOf(currentStep);

  if (currentStep === 'cancelled' || currentStep === 'return') {
    return (
      <View style={styles.container}>
        <Text style={styles.statusText}>{currentStep.charAt(0).toUpperCase() + currentStep.slice(1)}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {stepsOrder.map((step, index) => {
        const isActive = index <= currentStepIndex;
        return (
          <React.Fragment key={step}>
            <View style={[styles.stepContainer, index === 0 ? styles.firstStepContainer : index === stepsOrder.length - 1 ? styles.lastStepContainer : null]}>
              <View style={[styles.step, isActive ? styles.activeStep : styles.inactiveStep]} />
              <Text style={styles.stepLabel}>{step.charAt(0).toUpperCase() + step.slice(1)}</Text>
            </View>
            {index < stepsOrder.length - 1 && (
              <View style={[styles.line, isActive ? styles.activeLine : styles.inactiveLine]} />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
  },
  stepContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  firstStepContainer: {
    alignItems: 'flex-start',
  },
  lastStepContainer: {
    alignItems: 'flex-end',
  },
  step: {
    width: 12,
    height: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeStep: {
    backgroundColor: statusColors.active,
  },
  inactiveStep: {
    backgroundColor: statusColors.inactive,
  },
  stepLabel: {
    fontSize: responsiveHeight(0.99),
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
  line: {
    position: 'absolute',
    top: 5,
    width: '100%',
    height: 2,
    zIndex: -1,
  },
  activeLine: {
    backgroundColor: statusColors.active,
  },
  inactiveLine: {
    backgroundColor: statusColors.inactive,
  },
  statusText: {
    fontSize: responsiveHeight(0.99),
    fontWeight: 'bold',
    color: '#898989',
  },
});

export default Steps;
