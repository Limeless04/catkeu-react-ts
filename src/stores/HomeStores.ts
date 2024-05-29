import { create } from "zustand"

interface useHomeStoresProps {
    recordType: string
    value: string
    toggleDialog: boolean
    setRecordType: (newData: string) => void
    setValue: (newData: string) => void
    setToggleDialog: (newData: boolean) => void
}

export const useHomeStores = create<useHomeStoresProps>((set) => ({
    recordType: "income",
    value: "Harian",
    toggleDialog: false,
    setRecordType: (newData) => set({ recordType: newData }),
    setValue: (newData) => set({ value: newData }),
    setToggleDialog: (newData) => set({ toggleDialog: newData })
}))