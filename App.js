import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';
import { chips, demoReviews } from './chipsData';

const brands = ['Alle', ...new Set(chips.map((chip) => chip.brand))];

function scoreWithUser(chipId, ownRatings) {
  const community = demoReviews[chipId] ?? [];
  const own = ownRatings[chipId] ? [ownRatings[chipId]] : [];
  const values = [...community, ...own];
  if (!values.length) return { avg: '–', count: 0 };
  const avg = values.reduce((sum, x) => sum + x, 0) / values.length;
  return { avg: avg.toFixed(1), count: values.length };
}

function RatingStars({ selected, onRate }) {
  return (
    <View style={styles.starRow}>
      {[1, 2, 3, 4, 5].map((rating) => (
        <Pressable key={rating} style={styles.starBtn} onPress={() => onRate(rating)}>
          <Text style={[styles.star, selected >= rating && styles.starActive]}>★</Text>
        </Pressable>
      ))}
    </View>
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const [activeBrand, setActiveBrand] = useState('Alle');
  const [myRatings, setMyRatings] = useState({});

  const filtered = useMemo(() => {
    return chips.filter((chip) => {
      const brandMatch = activeBrand === 'Alle' || chip.brand === activeBrand;
      const search = `${chip.name} ${chip.brand}`.toLowerCase();
      return brandMatch && search.includes(query.toLowerCase());
    });
  }, [query, activeBrand]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.headerWrap}>
            <Text style={styles.title}>Chipsd</Text>
            <Text style={styles.subtitle}>Bewerte deutsche Chipssorten wie bei Letterboxd – inkl. Community-Scores.</Text>

            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Chipssorte oder Marke suchen"
              placeholderTextColor="#8a8a8a"
              style={styles.search}
            />

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandRow}>
              {brands.map((brand) => (
                <Pressable
                  key={brand}
                  onPress={() => setActiveBrand(brand)}
                  style={[styles.brandBtn, activeBrand === brand && styles.brandBtnActive]}
                >
                  <Text style={[styles.brandText, activeBrand === brand && styles.brandTextActive]}>{brand}</Text>
                </Pressable>
              ))}
            </ScrollView>

            <Text style={styles.result}>{filtered.length} Treffer</Text>
          </View>
        }
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => {
          const summary = scoreWithUser(item.id, myRatings);
          return (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.cardBody}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.description}</Text>

                <Text style={styles.community}>Community: {summary.avg} / 5 ({summary.count} Bewertungen)</Text>
                <Text style={styles.rateLabel}>Deine Bewertung</Text>
                <RatingStars
                  selected={myRatings[item.id] ?? 0}
                  onRate={(value) => setMyRatings((prev) => ({ ...prev, [item.id]: value }))}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff8ef' },
  headerWrap: { padding: 16, gap: 10 },
  title: { fontSize: 34, fontWeight: '800', color: '#202020' },
  subtitle: { fontSize: 15, color: '#5d5d5d' },
  search: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e9ddcd',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16
  },
  brandRow: { gap: 8, paddingVertical: 6 },
  brandBtn: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e3d5c2',
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 7
  },
  brandBtnActive: { backgroundColor: '#ffe1c6', borderColor: '#ff8a1f' },
  brandText: { color: '#474747', fontWeight: '500' },
  brandTextActive: { color: '#8a3b00' },
  result: { color: '#595959', fontSize: 13 },
  listContent: { paddingHorizontal: 16, paddingBottom: 24, gap: 12 },
  card: { borderRadius: 14, overflow: 'hidden', backgroundColor: '#fff', borderWidth: 1, borderColor: '#e9ddcd' },
  image: { width: '100%', height: 160, backgroundColor: '#ececec' },
  cardBody: { padding: 12, gap: 6 },
  brand: { alignSelf: 'flex-start', paddingHorizontal: 9, paddingVertical: 3, backgroundColor: '#f2f2f2', borderRadius: 999 },
  name: { fontSize: 19, fontWeight: '700', color: '#222' },
  desc: { color: '#5b5b5b' },
  community: { marginTop: 6, fontWeight: '600', color: '#2c2c2c' },
  rateLabel: { marginTop: 4, color: '#4f4f4f' },
  starRow: { flexDirection: 'row', gap: 6 },
  starBtn: { paddingHorizontal: 4, paddingVertical: 2 },
  star: { fontSize: 25, color: '#c8c8c8' },
  starActive: { color: '#ff8a1f' }
});
