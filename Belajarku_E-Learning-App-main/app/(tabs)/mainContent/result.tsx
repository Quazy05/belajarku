import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "@/styles/globalStyles";

export default function ResultScreen() {
  const router = useRouter();

  const params = useLocalSearchParams<{
    correct?: string;
    total?: string;
  }>();

  const correct = Number(params.correct ?? 0);
  const total = Number(params.total ?? 1);

  const percentage = ((correct / total) * 100).toFixed(0);  // bulatkan

  return (
    <SafeAreaView style={globalStyles.screen}>
      <View style={globalStyles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.push("/mainContent/isiMateri")}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Hasil Quiz</Text>
        </View>

        {/* TITLE */}
        <Text style={styles.title}>Hasil Quiz Kamu</Text>

        {/* CARD */}
        <View style={styles.card}>

          {/* PROGRESS RING FAKE */}
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>{percentage}</Text>
            </View>
            <Text style={styles.circleLabel}>Nilai</Text>
          </View>

          {/* DETAILS */}
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>Jawaban Benar: <Text style={styles.bold}>{correct}</Text></Text>
            <Text style={styles.resultText}>Total Soal: <Text style={styles.bold}>{total}</Text></Text>
          </View>

        </View>

        {/* BUTTON */}
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => router.push("/mainContent/subMateri")}
        >
          <Text style={styles.btnText}>Kembali</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 30,
    width: '100%',
  },
  backButton: {
    padding: 5,
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20,
    color: "white",
    textAlign: "center"
  },

  /* CARD */
  card: {
    width: "85%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },

  /* PROGRESS CIRCLE (FAKE) */
  circleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  circle: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: "#2ECC71",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  circleText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  circleLabel: {
    marginTop: 8,
    fontSize: 16,
    color: "#555",
  },

  /* RESULT TEXT */
  resultBox: {
    marginTop: 10,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    marginVertical: 3,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },

  /* BUTTON */
  btn: {
    marginTop: 30,
    backgroundColor: "#27AE60",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
    width: "60%",
    alignItems: "center",
  },
  btnText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
});
