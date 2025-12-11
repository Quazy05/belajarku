import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  Text, 
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { globalStyles } from '@/styles/globalStyles';
import ForumPostCard from "@/components/forum/forumPostCard";
import ReplyCard from '@/components/forum/replyCard';
import ReplyInputBox from '@/components/forum/replyInputBox';



export default function ForumScreen() {
    const router = useRouter();

    const [forumData, setForumData] = useState([
        {
        id: 1,
        type: "question",
        user: "Anonymous",
        content: "Lorem ipsum dolor sit amet",
        date: "2 September 2045",
        },
        {
        id: 2,
        type: "reply",
        parentId: 1,
        user: "Anonymous",
        content: "Ini adalah balasan pertama.",
        date: "2 September 2045",
        },
        {
        id: 3,
        type: "reply",
        parentId: 1,
        user: "Anonymous",
        content: "Balasan kedua dari pertanyaan ini.",
        date: "3 September 2045",
        },
        {
        id: 4,
        type: "question",
        user: "Anonymous",
        content: "Pertanyaan kedua di forum ini.",
        date: "3 September 2045",
        },
        {
        id: 5,
        type: "reply",
        parentId: 4,
        user: "Anonymous",
        content: "Balasan dari pertanyaan kedua.",
        date: "3 September 2045",
        },
    ]);

    // membuka/menutup balasan
    const [openReplies, setOpenReplies] = useState<{ [key: number]: boolean }>({});

    const [replyText, setReplyText] = useState<{ [key: number]: string }>({});


    const toggleReplies = (questionId: number) => {
        setOpenReplies((prev) => ({
        ...prev,
        [questionId]: !prev[questionId],
        }));
    };

    const addReply = (questionId: number) => {
    if (!replyText[questionId]) return;

    setForumData(prev => [
        ...prev,
        {
        id: prev.length + 1,
        type: "reply",
        parentId: questionId,
        user: "Anonymous",
        content: replyText[questionId],
        date: "Today",
        }
    ]);

    setReplyText(prev => ({ ...prev, [questionId]: "" }));
    };

    // ambil hanya pertanyaan
    const questions = forumData.filter((item) => item.type === "question");
    return (
        <SafeAreaView style={globalStyles.screen}>
            <View style={globalStyles.container}>

                {/* Header Back */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push("/Dashboard")} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Forum</Text>
                </View>

                <ScrollView contentContainerStyle={styles.scroll} showsHorizontalScrollIndicator={false}>
                    {questions.map((q) => {
                    // ambil balasan dari pertanyaan ini
                        const replies = forumData.filter(
                            (r) => r.type === "reply" && r.parentId === q.id
                        );

                        return (
                            <View key={q.id} style={{ marginBottom: 10 }}>
                            <ForumPostCard
                                item={q}
                                onPressReply={() => toggleReplies(q.id)}
                                isReplyOpen={openReplies[q.id] === true}
                            />

                            {openReplies[q.id] && (
                                <>
                                    {/* Kotak input balasan */}
                                    <ReplyInputBox
                                    value={replyText[q.id] || ""}
                                    onChange={(text: string) =>
                                        setReplyText((prev) => ({ ...prev, [q.id]: text }))
                                    }
                                    onSubmit={() => addReply(q.id)}
                                    />

                                    {/* List balasan */}
                                    {replies.map((r) => (
                                    <ReplyCard key={r.id} item={r} />
                                    ))}
                                </>
                                )}

                            </View>
                    ); 
                    })}
                </ScrollView>

                {/* ADD BUTTON */}
                <TouchableOpacity style={styles.addButton} onPress={() => router.push("/forum/addChat")}>
                    <Ionicons name="add-outline" size={30} color={'#27AE60'} />
                </TouchableOpacity>
                {/* Navbar Bottom */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

//   header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 30, // Jarak antara header dan kartu
        width: '100%',
    },
    backButton: {
        padding: 5,
        marginRight: 20,
    },
    backIcon: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },

    scroll: {
        width: 300,
        paddingBottom: 120,
        // backgroundColor: '#000',
    },
    addButton: {
        position: "absolute",
        bottom: 80,
        right: 25,
        backgroundColor: "white",
        padding: 12,
        borderRadius: 50,
        elevation: 5,
    },
});