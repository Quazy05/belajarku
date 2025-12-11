import { createContext, useState } from 'react';

type UserType = {
  username: string;
  email: string;
  phone: string;
  tingkatan: string;
  sekolah_asal: string;
};

type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType>({
  user: { 
    username: 'Roy',
    email: 'example@gmail.com',
    phone: '08123456789',
    tingkatan: 'Sekolah Dasar',
    sekolah_asal: 'Sekolah Dasar 1 Batam',
  },  // DEFAULT VALUE UNTUK TS
  setUser: () => {},          // DUMMY FUNCTION AGAR TIDAK ERROR
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType>({
    username: 'Roy',
    email: 'example@gmail.com',
    phone: '08123456789',
    tingkatan: 'Sekolah Dasar',
    sekolah_asal: 'Sekolah Dasar 1 Batam',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
