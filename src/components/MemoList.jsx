import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>かいものりすと</Text>
          <Text style={styles.memoListItemDate}>2023年 8月 29日 21:17</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>かいものりすと</Text>
          <Text style={styles.memoListItemDate}>2023年 8月 29日 21:17</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>かいものりすと</Text>
          <Text style={styles.memoListItemDate}>2023年 8月 29日 21:17</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fintSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fintSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
