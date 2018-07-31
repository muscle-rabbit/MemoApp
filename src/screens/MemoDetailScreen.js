import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  memoDetailHeader: {
    backgroundColor: '#A7A096',
    height: 100,
    justifyContent: 'center',
    padding: 15,
  },
  memoDetailHeaderTitle: {
    color: 'white',
    fontSize: 25,
  },
  memoDetailHeaderDate: {
    color: 'white',
  },
  memoDetailBody: {
    lineHeight: 22,
    fontSize: 15,
  },
  memoDetailContent: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 35,
    paddingBottom: 20,
  },
  editButton: {
    top: 68,
  },
});

const dateString = (date) => {
  if (date === null) { return ''; }
  const str = date.toISOString();
  return str.split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoDetailHeader}>
            <Text style={styles.memoDetailHeaderTitle}>{memo.body ? memo.body.substring(0, 10) : ''}</Text>
            <Text style={styles.memoDetailHeaderDate}>{dateString(memo.createdOn)}</Text>
          </View>
        </View>
        <View style={styles.memoDetailContent}>
          <Text style={styles.memoDetailBody}>{memo.body}</Text>
        </View>

        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('MemoEdit', { memo }); }}
        >
          {'\uf044'}
        </CircleButton>
      </View>
    );
  }
}

export default MemoDetailScreen;
