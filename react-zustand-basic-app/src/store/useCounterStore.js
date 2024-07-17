import create from 'zustand';
import { persist,devtools } from 'zustand/middleware';
// export const useCounterStore = create(
//     persist(
//         devtools(
//             (set) => ({
//             count : 1,
//             increment: () => set((state) => ({count: state.count + 1})),
//             reset: () => set({count: 0}),
//             setNumber: (number) => set({count: number})
//             }),
//             {name : 'counter'}
//         ),{
//             name : 'counter-storage',
//             getStorage: () => sessionStorage
//         }
//     )
// );

let counterStore = (set) => ({
    count : 1,
    increment: () => set((state) => ({count: state.count + 1})),
    reset: () => set({count: 0}),
    setNumber: (number) => set({count: number})
})

counterStore = devtools(counterStore);
counterStore = persist (counterStore, {name : 'counter'});

export const useCounterStore = create(counterStore);
