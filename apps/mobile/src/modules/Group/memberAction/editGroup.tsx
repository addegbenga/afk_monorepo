import {useQueryClient} from '@tanstack/react-query';
import {useGroupEditMetadata} from 'afk_nostr_sdk';
import {Formik} from 'formik';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, Input, SquareInput} from '../../../components';
import {useStyles} from '../../../hooks';
import {useToast} from '../../../hooks/modals';
import stylesheet from '../addGroup/styles';

export const EditGroup = ({groupId, handleClose}: {groupId: string; handleClose: () => void}) => {
  const styles = useStyles(stylesheet);
  const {showToast} = useToast();
  const queryClient = useQueryClient();
  const {mutate} = useGroupEditMetadata();

  const initialValues = {
    name: '',
    about: '',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          mutate(
            {
              groupId,
              meta: {
                name: values.name,
                about: values.about,
              },
            },
            {
              onSuccess() {
                showToast({type: 'success', title: 'Group Edited successfully'});
                queryClient.invalidateQueries({queryKey: ['getAllGroups']});
                handleClose();
              },
              onError() {
                showToast({
                  type: 'error',
                  title: 'Error! Group could not be edited. Please try again later.',
                });
              },
            },
          );
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Edit Group</Text>
            </View>
            <View style={styles.cardContent}>
              <Input
                style={styles.input}
                placeholderTextColor={styles.input as unknown as string}
                placeholder="Enter group name"
                value={values.name}
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
              />
              <SquareInput
                multiline
                style={styles.input}
                placeholderTextColor={styles.input as unknown as string}
                placeholder="About"
                value={values.about}
                onBlur={handleBlur('about')}
                onChangeText={handleChange('about')}
              />
            </View>
            <Button onPress={() => handleSubmit()}>Edit Group</Button>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};