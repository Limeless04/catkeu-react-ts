import { create } from "zustand"
import moment from "moment"
import { useHomeStores } from "./HomeStores"

interface useAddFormProps {
    category: string,
    amount: number,
    selectedDate: moment.Moment | null,
    type: string
    description: string
    setCategory: (newData: string) => void
    setAmount: (newData: number) => void
    setSelectedDate: (newData: moment.Moment | null) => void
    setType: (newData: string) => void
    setDescription: (newData: string) => void
    clearForm: () => void
}

export const useAddForm = create<useAddFormProps>((set) => ({
    category: "",
    amount: 0,
    selectedDate: moment() || null,
    type: useHomeStores.getState().recordType || "",
    description: "",
    setCategory: (newData: string) => set({ category: newData }),
    setAmount: (newData: number) => set({ amount: newData }),
    setSelectedDate: (newDate: moment.Moment | null) => set({ selectedDate: newDate }),
    setType: (newData: string) => set({ type: newData }),
    setDescription: (newData: string) => set({ description: newData }),
    clearForm: () => set({
        category: "",
        amount: 0,
        selectedDate: null,
        type: "",
        description: ""
    })
}))